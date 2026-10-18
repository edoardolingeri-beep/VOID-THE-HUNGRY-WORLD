import * as THREE from 'three';
import { clamp, damp, lerp } from './utils';

/**
 * Cinematic follow camera: tilted top-down view, eased follow with a little
 * look-ahead, zoom driven by hole size, trauma-based shake and FOV kicks.
 */
export class CameraRig {
  readonly camera: THREE.PerspectiveCamera;
  private target = new THREE.Vector3();
  private dist = 10;
  pitch = THREE.MathUtils.degToRad(56);
  yaw = 0;
  private trauma = 0;
  private fovKick = 0;
  private baseFov = 42;
  shakeEnabled = true;
  /** Extra zoom factor for cinematic moments (1 = normal). */
  zoomMul = 1;
  private zoomMulTarget = 1;
  /** Optional orbit for cinematics / menu. */
  orbit = 0;
  private time = 0;
  bounds = { minX: -50, maxX: 50, minZ: -50, maxZ: 50 };

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(this.baseFov, aspect, 0.1, 800);
  }

  /** Camera distance for a given hole radius (portrait screens pull back). */
  distanceFor(r: number, aspect: number) {
    const d = 2.9 + r * 8 + Math.sqrt(r) * 1.9;
    return aspect < 1 ? d * (1 + (1 - aspect) * 0.75) : d;
  }

  snap(x: number, z: number, r: number) {
    this.target.set(x, 0, z);
    this.dist = this.distanceFor(r, this.camera.aspect);
    this.apply();
  }

  addTrauma(t: number) {
    if (!this.shakeEnabled) return;
    this.trauma = Math.min(1, this.trauma + t);
  }
  kickFov(v: number) {
    this.fovKick = Math.max(this.fovKick, v);
  }
  setZoom(mul: number) {
    this.zoomMulTarget = mul;
  }

  update(dt: number, x: number, z: number, vx: number, vz: number, r: number) {
    this.time += dt;
    const lookX = x + vx * 0.22;
    const lookZ = z + vz * 0.22;
    const k = damp(4.2, dt);
    this.target.x = lerp(this.target.x, lookX, k);
    this.target.z = lerp(this.target.z, lookZ, k);
    const b = this.bounds;
    this.target.x = clamp(this.target.x, b.minX, b.maxX);
    this.target.z = clamp(this.target.z, b.minZ, b.maxZ);
    this.zoomMul = lerp(this.zoomMul, this.zoomMulTarget, damp(2.2, dt));
    const want = this.distanceFor(r, this.camera.aspect) * this.zoomMul;
    this.dist = lerp(this.dist, want, damp(2.0, dt));
    this.trauma = Math.max(0, this.trauma - dt * 1.6);
    this.fovKick = Math.max(0, this.fovKick - dt * 6);
    this.yaw += this.orbit * dt;
    this.apply();
  }

  private apply() {
    const cam = this.camera;
    const d = this.dist;
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    cam.position.set(
      this.target.x + Math.sin(this.yaw) * cp * d,
      sp * d,
      this.target.z + Math.cos(this.yaw) * cp * d,
    );
    const s = this.trauma * this.trauma;
    let ox = 0, oy = 0;
    if (s > 0) {
      const t = this.time * 38;
      ox = (Math.sin(t * 1.3) + Math.sin(t * 2.9) * 0.5) * s * d * 0.012;
      oy = (Math.cos(t * 1.7) + Math.sin(t * 3.7) * 0.5) * s * d * 0.012;
    }
    cam.position.x += ox;
    cam.position.y += oy;
    cam.lookAt(this.target.x + ox, 0, this.target.z);
    cam.near = Math.max(0.08, d * 0.04);
    cam.far = d * 6 + 120;
    cam.fov = this.baseFov + this.fovKick;
    cam.updateProjectionMatrix();
  }

  get focus() {
    return this.target;
  }
  get distance() {
    return this.dist;
  }

  setAspect(a: number) {
    this.camera.aspect = a;
    this.camera.updateProjectionMatrix();
  }
}
