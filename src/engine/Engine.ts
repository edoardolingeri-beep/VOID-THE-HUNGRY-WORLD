import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export type Quality = 'low' | 'medium' | 'high';

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uVignette: { value: 0.32 },
    uSat: { value: 1.08 },
    uFlash: { value: 0 },
    uFlashColor: { value: new THREE.Color(1, 1, 1) },
  },
  vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform float uVignette; uniform float uSat; uniform float uFlash; uniform vec3 uFlashColor;
    varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, uSat);
      vec2 d = vUv - 0.5;
      float v = 1.0 - dot(d, d) * uVignette * 2.2;
      c.rgb *= clamp(v, 0.0, 1.0);
      c.rgb = mix(c.rgb, uFlashColor, uFlash);
      gl_FragColor = c;
    }`,
};

export interface BloomSettings {
  strength: number;
  radius: number;
  threshold: number;
}

/** Owns the WebGL renderer, post-processing chain and the main loop. */
export class Engine {
  readonly renderer: THREE.WebGLRenderer;
  readonly canvas: HTMLCanvasElement;
  quality: Quality = 'high';
  private composer: EffectComposer | null = null;
  private renderPass: RenderPass | null = null;
  private bloom: UnrealBloomPass | null = null;
  private grade: ShaderPass | null = null;
  private bloomSettings: BloomSettings = { strength: 0.4, radius: 0.5, threshold: 0.88 };
  private loopFn: ((dt: number, now: number) => void) | null = null;
  private last = 0;
  private running = false;
  width = 1;
  height = 1;
  flash = 0;
  flashColor = new THREE.Color(1, 1, 1);
  contextLost = false;
  /** When set, rendering is skipped (headless simulation / tests). */
  headless = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
      preserveDrawingBuffer: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      this.contextLost = true;
    });
    canvas.addEventListener('webglcontextrestored', () => {
      this.contextLost = false;
      this.setQuality(this.quality);
    });
    window.addEventListener('resize', () => this.resize());
    window.visualViewport?.addEventListener('resize', () => this.resize());
    this.resize();
  }

  private env: THREE.Texture | null = null;
  /** Soft studio-like image based lighting shared by every scene. */
  get envMap(): THREE.Texture {
    if (!this.env) {
      const pmrem = new THREE.PMREMGenerator(this.renderer);
      this.env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      pmrem.dispose();
    }
    return this.env;
  }

  get maxAnisotropy() {
    return this.renderer.capabilities.getMaxAnisotropy();
  }

  setQuality(q: Quality) {
    this.quality = q;
    const dpr = window.devicePixelRatio || 1;
    // sharp output on retina screens: never render below ~1.25x on phones
    const pr = q === 'low' ? Math.min(dpr, 1.25) : q === 'medium' ? Math.min(dpr, 2) : Math.min(dpr, 2.5);
    this.renderer.setPixelRatio(pr);
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.shadowMap.needsUpdate = true;
    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
      this.bloom?.dispose();
      this.bloom = null;
    }
    if (q !== 'low') {
      const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
      const rt = new THREE.WebGLRenderTarget(size.x, size.y, {
        type: THREE.HalfFloatType,
        samples: 4,
      });
      this.composer = new EffectComposer(this.renderer, rt);
      this.renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
      this.composer.addPass(this.renderPass);
      this.bloom = new UnrealBloomPass(new THREE.Vector2(this.width / 2, this.height / 2), 0.4, 0.5, 0.88);
      this.composer.addPass(this.bloom);
      this.composer.addPass(new OutputPass());
      this.grade = new ShaderPass(GradeShader);
      this.composer.addPass(this.grade);
      this.applyBloom();
    }
    this.resize();
  }

  /** Shadow map resolution appropriate for the current quality. */
  get shadowSize() {
    return this.quality === 'low' ? 1024 : this.quality === 'medium' ? 2048 : 4096;
  }

  setBloom(s: Partial<BloomSettings>) {
    Object.assign(this.bloomSettings, s);
    this.applyBloom();
  }
  private applyBloom() {
    if (!this.bloom) return;
    this.bloom.strength = this.bloomSettings.strength;
    this.bloom.radius = this.bloomSettings.radius;
    this.bloom.threshold = this.bloomSettings.threshold;
  }

  resize() {
    const vv = window.visualViewport;
    const w = Math.max(1, Math.floor(vv ? vv.width : window.innerWidth));
    const h = Math.max(1, Math.floor(vv ? vv.height : window.innerHeight));
    this.width = w;
    this.height = h;
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';
    if (this.composer) {
      this.composer.setPixelRatio(this.renderer.getPixelRatio());
      this.composer.setSize(w, h);
      this.bloom?.resolution.set(w / 2, h / 2);
    }
  }

  render(scene: THREE.Scene, camera: THREE.Camera) {
    if (this.headless || this.contextLost) return;
    if (this.composer && this.renderPass && this.grade) {
      this.renderPass.scene = scene;
      this.renderPass.camera = camera;
      this.grade.uniforms.uFlash.value = this.flash;
      (this.grade.uniforms.uFlashColor.value as THREE.Color).copy(this.flashColor);
      this.composer.render();
    } else {
      this.renderer.render(scene, camera);
    }
  }

  start(fn: (dt: number, now: number) => void) {
    this.loopFn = fn;
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    const tick = (now: number) => {
      if (!this.running) return;
      requestAnimationFrame(tick);
      let dt = (now - this.last) / 1000;
      this.last = now;
      if (dt > 0.1) dt = 0.1; // tab switches / hitches
      if (dt <= 0) dt = 1 / 60;
      this.flash = Math.max(0, this.flash - dt * 2.5);
      this.loopFn?.(dt, now);
    };
    requestAnimationFrame(tick);
  }
}
