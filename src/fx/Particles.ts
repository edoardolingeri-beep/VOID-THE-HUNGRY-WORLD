import * as THREE from 'three';
import { getGlowSprite } from '../world/materials';

const MAX = 1400;

const VERT = /* glsl */ `
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
varying float vAlpha;
varying vec3 vColor;
uniform float uScale;
void main() {
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float ps = aSize * uScale / max(0.1, -mv.z);
  // fade sprites that get too close to the camera instead of letting them fill the screen
  vAlpha = aAlpha * clamp(1.0 - (ps - 40.0) / 40.0, 0.0, 1.0);
  gl_PointSize = min(ps, 80.0);
  gl_Position = projectionMatrix * mv;
}
`;
const FRAG = /* glsl */ `
uniform sampler2D uMap;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(uMap, gl_PointCoord);
  gl_FragColor = vec4(vColor * t.a * vAlpha, t.a * vAlpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

const enum Mode {
  Dead = 0,
  Spiral = 1,
  Burst = 2,
  Rise = 3,
}

/**
 * Pooled CPU particle system rendered as one additive Points cloud.
 * Spiral particles orbit and sink into the (moving) hole.
 */
export class Particles {
  readonly points: THREE.Points;
  private pos = new Float32Array(MAX * 3);
  private col = new Float32Array(MAX * 3);
  private size = new Float32Array(MAX);
  private alpha = new Float32Array(MAX);
  private mode = new Uint8Array(MAX);
  private life = new Float32Array(MAX);
  private maxLife = new Float32Array(MAX);
  private vel = new Float32Array(MAX * 3);
  // spiral params
  private ang = new Float32Array(MAX);
  private rad = new Float32Array(MAX);
  private h = new Float32Array(MAX);
  private baseSize = new Float32Array(MAX);
  private cursor = 0;
  private geo: THREE.BufferGeometry;
  private mat: THREE.ShaderMaterial;
  holeX = 0;
  holeZ = 0;
  holeR = 1;
  budget = 1;

  constructor() {
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: { uMap: { value: getGlowSprite() }, uScale: { value: 600 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(this.geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
  }

  setViewport(h: number) {
    this.mat.uniforms.uScale.value = h * 1.3;
  }

  private alloc(): number {
    for (let k = 0; k < MAX; k++) {
      const i = (this.cursor + k) % MAX;
      if (this.mode[i] === Mode.Dead) {
        this.cursor = (i + 1) % MAX;
        return i;
      }
    }
    // recycle the oldest slot
    const i = this.cursor;
    this.cursor = (i + 1) % MAX;
    return i;
  }

  private setColor(i: number, c: THREE.Color, jitter = 0.15) {
    this.col[i * 3] = Math.min(2, c.r * (1 + (Math.random() - 0.5) * jitter) + 0.15);
    this.col[i * 3 + 1] = Math.min(2, c.g * (1 + (Math.random() - 0.5) * jitter) + 0.15);
    this.col[i * 3 + 2] = Math.min(2, c.b * (1 + (Math.random() - 0.5) * jitter) + 0.15);
  }

  /** Fragments that swirl into the hole from (x, z). */
  swallow(x: number, z: number, color: THREE.Color, amount: number, size: number, tint: THREE.Color) {
    const n = Math.max(2, Math.round(amount * this.budget));
    const dx = x - this.holeX, dz = z - this.holeZ;
    const a0 = Math.atan2(dz, dx);
    const r0 = Math.max(this.holeR * 0.6, Math.hypot(dx, dz));
    for (let k = 0; k < n; k++) {
      const i = this.alloc();
      this.mode[i] = Mode.Spiral;
      this.ang[i] = a0 + (Math.random() - 0.5) * 1.6;
      this.rad[i] = r0 * (0.8 + Math.random() * 0.5);
      this.h[i] = size * (0.2 + Math.random() * 1.0);
      this.life[i] = 0;
      this.maxLife[i] = 0.55 + Math.random() * 0.5;
      this.baseSize[i] = (0.08 + Math.random() * 0.12) * (0.5 + this.holeR * 0.6);
      this.setColor(i, Math.random() < 0.3 ? tint : color);
    }
  }

  /** Radial burst (confetti / celebration). */
  burst(x: number, y: number, z: number, n: number, speed: number, colors: THREE.Color[], sizeMul = 1, up = 1) {
    n = Math.round(n * this.budget);
    for (let k = 0; k < n; k++) {
      const i = this.alloc();
      this.mode[i] = Mode.Burst;
      const a = Math.random() * Math.PI * 2;
      const s = speed * (0.4 + Math.random() * 0.8);
      this.pos[i * 3] = x;
      this.pos[i * 3 + 1] = y;
      this.pos[i * 3 + 2] = z;
      this.vel[i * 3] = Math.cos(a) * s;
      this.vel[i * 3 + 1] = (0.6 + Math.random()) * speed * up;
      this.vel[i * 3 + 2] = Math.sin(a) * s;
      this.life[i] = 0;
      this.maxLife[i] = 0.8 + Math.random() * 0.8;
      this.baseSize[i] = (0.12 + Math.random() * 0.2) * sizeMul;
      this.setColor(i, colors[k % colors.length], 0.3);
    }
  }

  /** Floating sparkles rising from the rim. */
  rise(x: number, z: number, r: number, n: number, color: THREE.Color, sizeMul = 1) {
    n = Math.round(n * this.budget);
    for (let k = 0; k < n; k++) {
      const i = this.alloc();
      this.mode[i] = Mode.Rise;
      const a = Math.random() * Math.PI * 2;
      this.pos[i * 3] = x + Math.cos(a) * r;
      this.pos[i * 3 + 1] = 0.05;
      this.pos[i * 3 + 2] = z + Math.sin(a) * r;
      this.vel[i * 3] = Math.cos(a) * 0.3;
      this.vel[i * 3 + 1] = 0.8 + Math.random() * 1.6 * sizeMul;
      this.vel[i * 3 + 2] = Math.sin(a) * 0.3;
      this.life[i] = 0;
      this.maxLife[i] = 0.7 + Math.random() * 0.7;
      this.baseSize[i] = (0.08 + Math.random() * 0.14) * sizeMul;
      this.setColor(i, color, 0.3);
    }
  }

  update(dt: number) {
    let live = 0;
    for (let i = 0; i < MAX; i++) {
      const m = this.mode[i];
      if (m === Mode.Dead) {
        this.alpha[i] = 0;
        continue;
      }
      live++;
      this.life[i] += dt;
      const t = this.life[i] / this.maxLife[i];
      if (t >= 1) {
        this.mode[i] = Mode.Dead;
        this.alpha[i] = 0;
        continue;
      }
      if (m === Mode.Spiral) {
        this.ang[i] += dt * (3 + t * 9) / Math.max(0.5, this.holeR * 0.5);
        this.rad[i] *= Math.exp(-dt * 3.4);
        const y = this.h[i] * (1 - t * 1.8) - t * t * this.holeR * 1.5;
        this.pos[i * 3] = this.holeX + Math.cos(this.ang[i]) * this.rad[i];
        this.pos[i * 3 + 1] = y;
        this.pos[i * 3 + 2] = this.holeZ + Math.sin(this.ang[i]) * this.rad[i];
        this.alpha[i] = Math.min(1, t * 6) * (1 - t);
        this.size[i] = this.baseSize[i] * (1 - t * 0.5);
      } else {
        const g = m === Mode.Burst ? 9 : -0.5;
        this.vel[i * 3 + 1] -= g * dt;
        const drag = Math.exp(-dt * (m === Mode.Burst ? 1.2 : 0.6));
        this.vel[i * 3] *= drag;
        this.vel[i * 3 + 2] *= drag;
        this.pos[i * 3] += this.vel[i * 3] * dt;
        this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
        this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
        this.alpha[i] = (1 - t) * Math.min(1, t * 8);
        this.size[i] = this.baseSize[i] * (m === Mode.Rise ? 1 - t * 0.6 : 1);
      }
    }
    (this.geo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.aColor as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.aSize as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.aAlpha as THREE.BufferAttribute).needsUpdate = true;
    this.points.visible = live > 0;
  }

  dispose() {
    this.geo.dispose();
    this.mat.dispose();
  }
}
