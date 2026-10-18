import * as THREE from 'three';
import type { PropAsset } from '../world/PropLibrary';

export type ObjState = 'idle' | 'falling' | 'gone' | 'spawning';

const qYaw = new THREE.Quaternion();
const qTilt = new THREE.Quaternion();
const axis = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

/** Runtime instance of a prop in the world. */
export class WorldObject {
  state: ObjState = 'idle';
  x: number;
  z: number;
  y = 0;
  rot: number;
  /** Fall simulation. */
  vy = 0;
  tilt = 0;
  tiltDir = 0;
  spin = 0;
  fallT = 0;
  /** Blocked wobble. */
  wobble = 0;
  wobbleDir = 0;
  wobbleAmp = 0.08;
  castsShadow = true;
  /** Idle animation phase. */
  phase = Math.random() * Math.PI * 2;
  /** Lane movement. */
  lane = -1;
  laneT = 0;
  speed = 0;
  /** Wander (robots). */
  homeX: number;
  homeZ: number;
  wander = 0;
  heading = 0;
  chain?: number;
  respawn = false;
  respawnAt = 0;
  spawnT = 0;
  baseY = 0;
  hintCooldown = 0;
  dirty = true;

  constructor(
    readonly uid: number,
    public asset: PropAsset,
    readonly mesh: THREE.Mesh,
    x: number,
    z: number,
    rot: number,
  ) {
    this.x = x;
    this.z = z;
    this.rot = rot;
    this.homeX = x;
    this.homeZ = z;
    mesh.matrixAutoUpdate = false;
    if (asset.def.idle === 'hover') this.baseY = asset.def.tags.includes('vehicle') ? 0.35 : 0.2;
    this.sync();
  }

  get size() {
    return this.asset.size;
  }

  /** Write transform to the mesh. */
  sync(scale = 1) {
    const m = this.mesh;
    m.position.set(this.x, this.y + this.baseY, this.z);
    qYaw.setFromAxisAngle(UP, this.rot);
    const t = this.state === 'falling' ? this.tilt : this.wobble * this.wobbleAmp;
    const dir = this.state === 'falling' ? this.tiltDir : this.wobbleDir;
    if (t !== 0) {
      // tilt around a horizontal axis perpendicular to the direction of the hole
      axis.set(Math.sin(dir), 0, -Math.cos(dir));
      qTilt.setFromAxisAngle(axis, t);
      m.quaternion.copy(qTilt).multiply(qYaw);
      if (this.spin) {
        qTilt.setFromAxisAngle(UP, this.spin);
        m.quaternion.multiply(qTilt);
      }
    } else m.quaternion.copy(qYaw);
    m.scale.setScalar(scale);
    m.updateMatrix();
    m.updateMatrixWorld();
    this.dirty = false;
  }
}
