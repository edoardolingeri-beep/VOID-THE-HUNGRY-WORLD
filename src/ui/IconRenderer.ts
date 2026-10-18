import * as THREE from 'three';
import { getPropAsset } from '../world/PropLibrary';
import { getPropMaterials } from '../world/materials';
import { LevelContext } from '../world/LevelContext';
import type { LevelDef } from '../world/levels/types';

/**
 * Renders 3D prop icons (collection, level cards) with a small dedicated
 * renderer, plus painted top-down level thumbnails. Results are cached as
 * data URLs and produced progressively so the UI never stalls.
 */
class IconRendererImpl {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(30, 1, 0.01, 500);
  private cache = new Map<string, string>();
  private thumbs = new Map<number, string>();
  private queue: { key: string; run: () => void }[] = [];
  private busy = false;
  private disposeTimer = 0;

  private ensure() {
    if (this.renderer) return this.renderer;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 192;
    const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
    r.setPixelRatio(1);
    r.setSize(192, 192, false);
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.setClearColor(0x000000, 0);
    this.renderer = r;
    const hemi = new THREE.HemisphereLight('#eef4ff', '#5a4a7a', 1.6);
    const key = new THREE.DirectionalLight('#ffffff', 2.4);
    key.position.set(3, 5, 4);
    const rim = new THREE.DirectionalLight('#b9a6ff', 1.2);
    rim.position.set(-4, 3, -3);
    this.scene.add(hemi, key, rim);
    return r;
  }

  get(id: string, variant = 0): string | null {
    return this.cache.get(`${id}#${variant}`) ?? null;
  }

  /** Request an icon; callback fires when ready. */
  request(id: string, variant: number, cb: (url: string) => void) {
    const key = `${id}#${variant}`;
    const c = this.cache.get(key);
    if (c) {
      cb(c);
      return;
    }
    this.queue.push({ key, run: () => cb(this.render(id, variant)) });
    this.pump();
  }

  requestThumb(def: LevelDef, cb: (url: string) => void) {
    const c = this.thumbs.get(def.id);
    if (c) {
      cb(c);
      return;
    }
    this.queue.push({
      key: 'thumb' + def.id,
      run: () => {
        const url = this.thumb(def);
        this.thumbs.set(def.id, url);
        cb(url);
      },
    });
    this.pump();
  }

  private pump() {
    if (this.busy) return;
    this.busy = true;
    const step = () => {
      const t0 = performance.now();
      while (this.queue.length && performance.now() - t0 < 12) {
        const j = this.queue.shift()!;
        try {
          j.run();
        } catch (e) {
          console.warn('icon failed', j.key, e);
        }
      }
      if (this.queue.length) requestAnimationFrame(step);
      else {
        this.busy = false;
        this.scheduleDispose();
      }
    };
    requestAnimationFrame(step);
  }

  private scheduleDispose() {
    window.clearTimeout(this.disposeTimer);
    this.disposeTimer = window.setTimeout(() => {
      if (this.renderer && !this.queue.length) {
        this.renderer.dispose();
        this.renderer.forceContextLoss();
        this.renderer = null;
      }
    }, 4000);
  }

  private render(id: string, variant: number): string {
    const key = `${id}#${variant}`;
    const r = this.ensure();
    const a = getPropAsset(id, variant);
    const mesh = new THREE.Mesh(a.geometry, getPropMaterials().list);
    mesh.rotation.y = -0.6;
    this.scene.add(mesh);
    const bb = a.geometry.boundingBox!;
    const center = new THREE.Vector3();
    bb.getCenter(center);
    const sphere = a.geometry.boundingSphere!;
    const rad = sphere.radius;
    const dist = rad / Math.sin(THREE.MathUtils.degToRad(15)) * 1.02;
    const dir = new THREE.Vector3(0.0, 0.55, 1).normalize();
    this.camera.position.copy(center).addScaledVector(dir, dist);
    this.camera.near = dist / 50;
    this.camera.far = dist * 4;
    this.camera.lookAt(center);
    this.camera.updateProjectionMatrix();
    r.render(this.scene, this.camera);
    const url = r.domElement.toDataURL('image/png');
    this.scene.remove(mesh);
    this.cache.set(key, url);
    return url;
  }

  /** Painted top-down miniature of the level with object dots. */
  private thumb(def: LevelDef): string {
    const ctx = new LevelContext(def.w, def.h, Math.min(def.margin, 12), def.seed, 420, !!def.theme.night);
    def.build(ctx);
    const p = ctx.painter;
    const g = p.ctx;
    for (const pl of ctx.placements) {
      const a = getPropAsset(pl.id, pl.variant);
      const rr = Math.max(1.2, Math.max(a.hx, a.hz) * p.s * 0.9);
      g.fillStyle = `rgb(${Math.round(Math.min(1, a.color.r * 1.25) ** (1 / 2.2) * 255)},${Math.round(Math.min(1, a.color.g * 1.25) ** (1 / 2.2) * 255)},${Math.round(Math.min(1, a.color.b * 1.25) ** (1 / 2.2) * 255)})`;
      g.beginPath();
      g.arc(p.px(pl.x), p.pz(pl.z), rr, 0, Math.PI * 2);
      g.fill();
    }
    // crop to a 16:9 window centred on the play area
    const out = document.createElement('canvas');
    out.width = 384;
    out.height = 216;
    const o = out.getContext('2d')!;
    const sw = p.canvas.width, sh = p.canvas.height;
    const aspect = 16 / 9;
    let cw = sw, ch = sw / aspect;
    if (ch > sh) {
      ch = sh;
      cw = sh * aspect;
    }
    o.drawImage(p.canvas, (sw - cw) / 2, (sh - ch) / 2, cw, ch, 0, 0, out.width, out.height);
    return out.toDataURL('image/jpeg', 0.82);
  }
}

export const icons = new IconRendererImpl();
