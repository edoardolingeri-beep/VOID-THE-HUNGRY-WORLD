import * as THREE from 'three';
import type { Engine } from '../engine/Engine';
import type { Input } from '../engine/Input';
import { CameraRig } from '../engine/CameraRig';
import { clamp, damp, formatNumber, lerp } from '../engine/utils';
import { LevelContext, type LaneDef } from '../world/LevelContext';
import type { LevelDef, Objective } from '../world/levels/types';
import { createGroundMaterial, getPropMaterials, holeUniforms } from '../world/materials';
import { getPropAsset, variantCount } from '../world/PropLibrary';
import { HoleVisual } from '../hole/HoleVisual';
import { Growth, TIER_RADII } from '../hole/Growth';
import { Particles } from '../fx/Particles';
import { WorldObject } from './WorldObject';
import { audio } from '../audio/AudioManager';
import type { PowerUp, PropTag } from '../world/props/types';

export type SessionMode = 'play' | 'demo';

export interface FloatEvent {
  x: number;
  y: number;
  z: number;
  text: string;
  kind: 'pts' | 'big' | 'bonus' | 'power' | 'lock';
}

export interface RunResult {
  level: LevelDef;
  completed: boolean;
  score: number;
  speedBonus: number;
  total: number;
  stars: number;
  eaten: number;
  sizeLevel: number;
  maxCombo: number;
  missing: string[];
  counts: Record<string, number>;
  secretFound: boolean;
}

export interface SessionHooks {
  float?(e: FloatEvent): void;
  message?(text: string, kind: 'combo' | 'size' | 'objective' | 'power' | 'secret' | 'chain' | 'big' | 'finale' | 'warn'): void;
  objectiveDone?(): void;
  tier?(level: number): void;
  power?(p: PowerUp, duration: number): void;
  end?(r: RunResult): void;
  tutorial?(step: number): void;
}

const COMBO_WINDOW = 1.15;
const COMBO_MSGS: [number, string][] = [
  [5, 'NICE!'],
  [10, 'GREAT!'],
  [20, 'MASSIVE COMBO!'],
  [35, 'ABSOLUTE DEVOURER!'],
];
const POWER_DUR: Record<PowerUp, number> = { time: 0, magnet: 7, multiplier: 8, surge: 7 };

const tmpV = new THREE.Vector3();

export class Session {
  readonly scene = new THREE.Scene();
  readonly rig: CameraRig;
  readonly objects: WorldObject[] = [];
  readonly growth: Growth;
  readonly hole = new HoleVisual();
  readonly particles = new Particles();
  private ctx: LevelContext;
  private sun: THREE.DirectionalLight;
  private hemi: THREE.HemisphereLight;
  private ground: THREE.Mesh;
  private disposables: { dispose(): void }[] = [];
  private lanes: (LaneDef & { cars: WorldObject[]; spawnTimer: number })[] = [];
  private lightPhase = 0;
  private lightTimer = 0;
  private uid = 0;

  // hole state
  hx = 0;
  hz = 0;
  vx = 0;
  vz = 0;
  radius: number;
  private surgeMul = 1;

  // game state
  time = 0;
  timeLeft: number;
  score = 0;
  eaten = 0;
  tagCounts: Partial<Record<PropTag, number>> = {};
  counts: Record<string, number> = {};
  combo = 0;
  comboTimer = 0;
  maxCombo = 0;
  private comboMsgIdx = 0;
  powers: Record<PowerUp, number> = { time: 0, magnet: 0, multiplier: 0, surge: 0 };
  objectivesDone = false;
  doneAt = -1;
  speedBonus = 0;
  state: 'intro' | 'playing' | 'finale' | 'ending' | 'ended' = 'intro';
  private introT = 0;
  private endT = 0;
  timeScale = 1;
  private finaleT = 0;
  private chains = new Map<number, { total: number; eaten: number }>();
  secretFound = false;
  private lastTick = 99;
  private tutorialStep = 0;
  private respawnQueue: WorldObject[] = [];
  private hasMoved = false;
  private botTarget: WorldObject | null = null;
  private botRetarget = 0;
  bot = false;
  private botIgnore = new Set<number>();
  private lodT = 0;
  paused = false;

  constructor(
    private engine: Engine,
    readonly def: LevelDef,
    readonly mode: SessionMode,
    private input: Input | null,
    private hooks: SessionHooks = {},
  ) {
    this.bot = mode === 'demo';
    const th = def.theme;
    this.rig = new CameraRig(engine.width / engine.height);
    this.timeLeft = def.duration;
    this.growth = new Growth(def.startTier, def.maxTier, def.growth);
    this.radius = TIER_RADII[def.startTier];

    // ---------- level construction
    const texRes = engine.quality === 'low' ? 2048 : engine.quality === 'medium' ? 3072 : 4096;
    this.ctx = new LevelContext(def.w, def.h, def.margin, def.seed, texRes, !!th.night, engine.quality === 'low' ? 1024 : 2048);
    def.build(this.ctx);

    const s = this.scene;
    s.background = new THREE.Color(th.sky);
    s.fog = new THREE.Fog(th.fog, 30, 120);
    this.hemi = new THREE.HemisphereLight(th.hemiSky, th.hemiGround, th.hemiIntensity * 0.85);
    s.environment = engine.envMap;
    s.environmentIntensity = th.night ? 0.12 : 0.16;
    s.add(this.hemi);
    this.sun = new THREE.DirectionalLight(th.sunColor, th.sunIntensity);
    this.sun.castShadow = true;
    const ss = engine.shadowSize;
    this.sun.shadow.mapSize.set(ss, ss);
    this.sun.shadow.bias = -0.00025;
    this.sun.shadow.normalBias = 0.025;
    this.sun.shadow.radius = 2;
    s.add(this.sun, this.sun.target);

    // ground: sharp play area + coarse surroundings, both cut by the hole
    const e = this.ctx.ext;
    const ie = this.ctx.innerExt;
    const aniso = Math.min(16, engine.maxAnisotropy);
    const innerTex = this.ctx.inner.texture(aniso);
    const iw = ie.maxX - ie.minX, ih = ie.maxZ - ie.minZ;
    const imat = createGroundMaterial(innerTex, new THREE.Vector2(ie.minX, ie.minZ), new THREE.Vector2(iw, ih));
    const igeo = new THREE.PlaneGeometry(iw, ih, 1, 1);
    igeo.rotateX(-Math.PI / 2);
    this.ground = new THREE.Mesh(igeo, imat);
    this.ground.position.set((ie.minX + ie.maxX) / 2, 0, (ie.minZ + ie.maxZ) / 2);
    this.ground.receiveShadow = true;
    s.add(this.ground);
    this.disposables.push(innerTex, imat, igeo);
    if (this.ctx.outer !== this.ctx.inner) {
      const outerTex = this.ctx.outer.texture(aniso);
      const omat = createGroundMaterial(outerTex, new THREE.Vector2(e.minX, e.minZ), new THREE.Vector2(e.maxX - e.minX, e.maxZ - e.minZ));
      // shape in (x, -z) so that rotating by -90° about X lays it flat facing up
      const ring = new THREE.Shape([new THREE.Vector2(e.minX, -e.minZ), new THREE.Vector2(e.maxX, -e.minZ), new THREE.Vector2(e.maxX, -e.maxZ), new THREE.Vector2(e.minX, -e.maxZ)]);
      ring.holes.push(new THREE.Path([new THREE.Vector2(ie.minX, -ie.minZ), new THREE.Vector2(ie.minX, -ie.maxZ), new THREE.Vector2(ie.maxX, -ie.maxZ), new THREE.Vector2(ie.maxX, -ie.minZ)]));
      const ogeo = new THREE.ShapeGeometry(ring);
      ogeo.rotateX(-Math.PI / 2);
      const outer = new THREE.Mesh(ogeo, omat);
      outer.receiveShadow = true;
      s.add(outer);
      this.disposables.push(outerTex, omat, ogeo);
    }
    // far ground (beyond the painted area) in the outer colour, with a cut-out
    const farShape = new THREE.Shape([new THREE.Vector2(-3000, -3000), new THREE.Vector2(3000, -3000), new THREE.Vector2(3000, 3000), new THREE.Vector2(-3000, 3000)]);
    farShape.holes.push(new THREE.Path([new THREE.Vector2(e.minX, e.minZ), new THREE.Vector2(e.minX, e.maxZ), new THREE.Vector2(e.maxX, e.maxZ), new THREE.Vector2(e.maxX, e.minZ)]));
    const farGeo = new THREE.ShapeGeometry(farShape);
    farGeo.rotateX(Math.PI / 2);
    const far = new THREE.Mesh(farGeo, new THREE.MeshStandardMaterial({ color: this.outerColor(), roughness: 1, side: THREE.DoubleSide }));
    far.position.y = -0.01;
    s.add(far);
    this.disposables.push(farGeo, far.material as THREE.Material);

    // static scenery
    const mats = getPropMaterials();
    for (const g of this.ctx.buildScenery()) {
      const m = new THREE.Mesh(g, mats.list);
      m.castShadow = true;
      m.receiveShadow = true;
      m.matrixAutoUpdate = false;
      m.updateMatrix();
      s.add(m);
      this.disposables.push(g);
    }
    for (const x of this.ctx.extras) s.add(x);

    // edible objects
    for (const p of this.ctx.placements) {
      const o = this.spawn(p.id, p.variant, p.x, p.z, p.rot);
      o.chain = p.chain;
      o.respawn = !!p.respawn || mode === 'demo';
      if (p.wander) o.wander = p.wander;
      if (p.chain) {
        const c = this.chains.get(p.chain) ?? { total: 0, eaten: 0 };
        c.total++;
        this.chains.set(p.chain, c);
      }
    }
    // lanes
    for (const l of this.ctx.lanes) {
      const lane = { ...l, cars: [] as WorldObject[], spawnTimer: 0 };
      this.lanes.push(lane);
      const len = Math.hypot(l.x1 - l.x0, l.z1 - l.z0);
      const n = Math.floor(len / 14);
      for (let i = 0; i < n; i++) {
        if (this.ctx.rng.chance(0.35)) continue;
        this.spawnOnLane(this.lanes.length - 1, (i / n) * len + this.ctx.rng.range(0, 3));
      }
    }

    // hole
    s.add(this.hole.group);
    s.add(this.particles.points);
    holeUniforms.uHoleTint.value.set(th.holeTint);
    [this.hx, this.hz] = def.start ?? [0, 0];
    this.findStart();
    this.rig.bounds = { minX: -def.w / 2, maxX: def.w / 2, minZ: -def.h / 2, maxZ: def.h / 2 };
    this.rig.shakeEnabled = true;
    this.rig.snap(this.hx, this.hz, this.radius);
    if (mode === 'play') {
      // intro: start pulled back and swoop in
      this.rig.setZoom(1);
      this.rig.zoomMul = 2.2;
    }
    if (mode === 'demo') this.rig.orbit = 0;
    this.applyUniforms();
    engine.setBloom(th.bloom);
    engine.renderer.toneMappingExposure = th.exposure;
    this.particles.setViewport(engine.height);
    this.particles.budget = engine.quality === 'low' ? 0.5 : engine.quality === 'medium' ? 0.8 : 1;
  }

  private outerColor() {
    const c = this.ctx.outer.ctx.getImageData(1, 1, 1, 1).data;
    return new THREE.Color(`rgb(${c[0]},${c[1]},${c[2]})`);
  }

  /** Find a clear starting spot near the preferred start. */
  private findStart() {
    const r = this.radius;
    for (let k = 0; k < 200; k++) {
      const a = k * 2.39996;
      const d = Math.sqrt(k) * 1.2;
      const x = this.hx + Math.cos(a) * d * (k ? 1 : 0);
      const z = this.hz + Math.sin(a) * d * (k ? 1 : 0);
      let ok = true;
      for (const o of this.objects) {
        if (o.state !== 'idle') continue;
        const need = Math.max(o.asset.hx, o.asset.hz) + r + 0.3;
        if (Math.abs(o.x - x) < need && Math.abs(o.z - z) < need) {
          ok = false;
          break;
        }
      }
      if (ok) {
        this.hx = x;
        this.hz = z;
        return;
      }
    }
  }

  private spawn(id: string, variant: number, x: number, z: number, rot: number): WorldObject {
    const asset = getPropAsset(id, variant);
    const mats = getPropMaterials();
    const mesh = new THREE.Mesh(asset.geometry, mats.list);
    mesh.castShadow = !asset.def.noShadow && (this.engine.quality !== 'low' || asset.height > 1.2);
    mesh.receiveShadow = this.engine.quality !== 'low' || asset.size > 1;
    const o = new WorldObject(++this.uid, asset, mesh, x, z, rot);
    o.castsShadow = mesh.castShadow;
    this.objects.push(o);
    this.scene.add(mesh);
    return o;
  }

  private spawnOnLane(li: number, t: number) {
    const l = this.lanes[li];
    const id = this.ctx.rng.pick(l.ids);
    const ang = Math.atan2(-(l.z1 - l.z0), l.x1 - l.x0);
    const len = Math.hypot(l.x1 - l.x0, l.z1 - l.z0);
    const x = l.x0 + ((l.x1 - l.x0) * t) / len;
    const z = l.z0 + ((l.z1 - l.z0) * t) / len;
    // reuse a pooled object of the same type if available
    let o = this.respawnQueue.find((q) => q.lane === li && q.state === 'gone' && q.asset.def.id === id) ?? null;
    if (o) {
      this.respawnQueue.splice(this.respawnQueue.indexOf(o), 1);
      o.asset = getPropAsset(id, this.ctx.rng.int(0, variantCount(id) - 1));
      o.mesh.geometry = o.asset.geometry;
      o.x = x;
      o.z = z;
      o.rot = ang;
      o.y = 0;
      o.tilt = 0;
      o.spin = 0;
      o.state = 'idle';
      o.mesh.visible = true;
      o.sync();
    } else {
      o = this.spawn(id, this.ctx.rng.int(0, variantCount(id) - 1), x, z, ang);
    }
    o.lane = li;
    o.laneT = t;
    o.speed = l.speed;
    if (l.hover) o.baseY = l.hover;
    l.cars.push(o);
    return o;
  }

  // ------------------------------------------------------------------ API
  get sizeLevel() {
    return this.growth.tier - this.def.startTier + 1;
  }
  get effectiveRadius() {
    return this.radius;
  }
  get comboMult() {
    const c = this.combo;
    return c >= 30 ? 2 : c >= 18 ? 1.75 : c >= 10 ? 1.5 : c >= 5 ? 1.25 : 1;
  }

  objectiveValue(o: Objective): number {
    if (o.kind === 'count') return this.eaten;
    if (o.kind === 'score') return this.score;
    const tags = Array.isArray(o.tag) ? o.tag : [o.tag!];
    let n = 0;
    for (const t of tags) n += this.tagCounts[t] ?? 0;
    return n;
  }
  objectiveProgress(): { o: Objective; v: number; done: boolean }[] {
    return this.def.objectives.map((o) => {
      const v = this.objectiveValue(o);
      return { o, v, done: v >= o.target };
    });
  }

  /** Screen position (CSS px) of a world point. */
  project(x: number, y: number, z: number): { x: number; y: number; visible: boolean } {
    tmpV.set(x, y, z).project(this.rig.camera);
    return {
      x: (tmpV.x * 0.5 + 0.5) * this.engine.width,
      y: (-tmpV.y * 0.5 + 0.5) * this.engine.height,
      visible: tmpV.z < 1 && Math.abs(tmpV.x) < 1.2 && Math.abs(tmpV.y) < 1.2,
    };
  }

  resize() {
    this.rig.setAspect(this.engine.width / this.engine.height);
    this.particles.setViewport(this.engine.height);
  }

  // ------------------------------------------------------------- update
  update(rawDt: number) {
    if (this.paused) return;
    // finale slow motion
    if (this.state === 'finale') {
      this.finaleT += rawDt;
      this.timeScale = this.finaleT < 2.4 ? 0.22 : lerp(this.timeScale, 1, damp(3, rawDt));
      if (this.finaleT > 3.6) {
        this.timeScale = 1;
        this.rig.orbit = 0;
        this.rig.setZoom(1);
        if (this.objectivesDone) this.finish();
        else this.state = 'playing';
      }
    }
    const dt = rawDt * this.timeScale;
    this.time += dt;
    holeUniforms.uTime.value += dt;

    if (this.state === 'intro') {
      this.introT += rawDt;
      if (this.introT > (this.mode === 'demo' ? 0 : 0.9)) {
        this.state = 'playing';
        if (this.def.tutorial) this.tut(1);
      }
    }

    const playing = this.state === 'playing' || this.state === 'finale';
    if (this.state === 'playing' && this.mode === 'play') {
      this.timeLeft -= dt;
      const secs = Math.ceil(this.timeLeft);
      if (this.timeLeft <= 10 && secs !== this.lastTick && secs > 0) {
        this.lastTick = secs;
        audio.tick(secs <= 5);
        if (secs === 10) this.hooks.message?.('10 SECONDS LEFT', 'warn');
      }
      audio.setIntensity(this.timeLeft < 10 ? 1 : this.combo > 8 ? 0.7 : 0.3);
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        this.finish();
      }
    }

    // powers
    for (const k of Object.keys(this.powers) as PowerUp[]) if (this.powers[k] > 0) this.powers[k] = Math.max(0, this.powers[k] - dt);
    this.surgeMul = lerp(this.surgeMul, this.powers.surge > 0 ? 1.4 : 1, damp(4, dt));

    // combo
    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) {
        this.combo = 0;
        this.comboMsgIdx = 0;
      }
    }

    // movement
    let mx = 0, my = 0;
    if (playing) {
      if (this.bot) {
        const m = this.botMove(dt);
        mx = m.x;
        my = m.y;
      } else if (this.input) {
        const m = this.input.getMove();
        mx = m.x;
        my = m.y;
      }
    }
    if ((mx || my) && !this.hasMoved) {
      this.hasMoved = true;
      if (this.def.tutorial) this.tut(2);
    }
    // screen → world (camera yaw aware)
    const yaw = this.rig.yaw;
    const wx = mx * Math.cos(yaw) + my * Math.sin(yaw);
    const wz = -mx * Math.sin(yaw) + my * Math.cos(yaw);
    const r = this.radius;
    const maxSpeed = 2.4 + r * 3.1;
    const k = damp(mx || my ? 7 : 5, dt);
    this.vx = lerp(this.vx, wx * maxSpeed, k);
    this.vz = lerp(this.vz, wz * maxSpeed, k);
    this.hx += this.vx * dt;
    this.hz += this.vz * dt;

    // radius
    const target = this.growth.radius * this.surgeMul;
    this.radius = lerp(this.radius, target, damp(5, dt));
    holeUniforms.uPulse.value = Math.max(0, holeUniforms.uPulse.value - dt * 1.6);

    this.collide();
    const b = this.ctx.bounds;
    const R = this.radius;
    this.hx = clamp(this.hx, b.minX + R, b.maxX - R);
    this.hz = clamp(this.hz, b.minZ + R, b.maxZ - R);

    this.updateLanes(dt);
    this.updateObjects(dt, playing);
    this.updateRespawn();

    // camera & world uniforms
    this.rig.update(rawDt, this.hx, this.hz, this.vx, this.vz, this.radius);
    this.applyUniforms();
    this.updateShadow();
    this.particles.holeX = this.hx;
    this.particles.holeZ = this.hz;
    this.particles.holeR = this.radius;
    this.particles.update(dt);
    this.hole.update(this.hx, this.hz, this.radius, dt);
    if (this.input) {
      const p = this.project(this.hx, 0, this.hz);
      this.input.holeScreen.x = p.x;
      this.input.holeScreen.y = p.y;
    }
    if (this.state === 'ending') {
      this.endT += rawDt;
      if (this.endT > 1.6) {
        this.state = 'ended';
        this.hooks.end?.(this.result());
      }
    }
  }

  private applyUniforms() {
    holeUniforms.uHolePos.value.set(this.hx, this.hz);
    holeUniforms.uHoleR.value = this.radius;
    const fog = this.scene.fog as THREE.Fog;
    const d = this.rig.distance;
    fog.near = d * (this.def.theme.fogNear ?? 1.5);
    fog.far = d * (this.def.theme.fogFar ?? 4.2);
  }

  private updateShadow() {
    const f = this.rig.focus;
    const d = this.rig.distance;
    // quantise the shadow frustum so zooming does not make shadows crawl
    const raw = d * 0.95 + 6;
    const size = Math.pow(1.18, Math.ceil(Math.log(raw) / Math.log(1.18)));
    const cam = this.sun.shadow.camera;
    // snap to texel grid to avoid shimmering
    const texel = (size * 2) / this.sun.shadow.mapSize.x;
    const fx = Math.round(f.x / texel) * texel;
    const fz = Math.round(f.z / texel) * texel;
    const [sx, sy, sz] = this.def.theme.sunDir;
    const L = Math.hypot(sx, sy, sz);
    const dist = 60 + d * 1.5;
    this.sun.position.set(fx + (sx / L) * dist, (sy / L) * dist, fz + (sz / L) * dist);
    this.sun.target.position.set(fx, 0, fz);
    if (cam.right !== size) {
      cam.left = -size;
      cam.right = size;
      cam.top = size;
      cam.bottom = -size;
    }
    cam.near = 1;
    cam.far = dist * 2 + 40;
    cam.updateProjectionMatrix();
  }

  // ------------------------------------------------------- collisions
  private collide() {
    const r = this.radius;
    for (const o of this.objects) {
      if (o.state !== 'idle') continue;
      const a = o.asset;
      const reach = Math.max(a.hx, a.hz) + r;
      const dx = this.hx - o.x, dz = this.hz - o.z;
      if (Math.abs(dx) > reach || Math.abs(dz) > reach) {
        if (o.wobble > 0) {
          o.wobble = Math.max(0, o.wobble - 0.05);
          o.sync();
        }
        continue;
      }
      if (a.size <= r) continue; // edible: no collision
      if (a.def.tags.includes('special') || a.def.tags.includes('chain')) continue;
      // circle vs oriented box
      const c = Math.cos(o.rot), s = Math.sin(o.rot);
      // world -> local (rotation about Y by -rot)
      const lx = dx * c - dz * s;
      const lz = dx * s + dz * c;
      const solid = a.def.solid ?? 0.92;
      const ex = a.hx * solid, ez = a.hz * solid;
      const cx = clamp(lx, -ex, ex), cz = clamp(lz, -ez, ez);
      let nx = lx - cx, nz = lz - cz;
      let d = Math.hypot(nx, nz);
      const need = r * 0.55;
      if (d >= need) continue;
      let push: number;
      if (d < 1e-5) {
        // centre inside the box: push out along the shallowest axis
        const px = ex - Math.abs(lx), pz = ez - Math.abs(lz);
        if (px < pz) {
          nx = Math.sign(lx) || 1;
          nz = 0;
          push = px + need;
        } else {
          nx = 0;
          nz = Math.sign(lz) || 1;
          push = pz + need;
        }
        d = 1;
      } else {
        push = need - d;
        nx /= d;
        nz /= d;
      }
      // local -> world
      const wx = nx * c + nz * s;
      const wz = -nx * s + nz * c;
      this.hx += wx * push;
      this.hz += wz * push;
      const vn = this.vx * wx + this.vz * wz;
      if (vn < 0) {
        this.vx -= wx * vn * 0.9;
        this.vz -= wz * vn * 0.9;
        if (vn < -1.5 && this.mode === 'play') audio.bump();
      }
      o.wobble = Math.min(1, o.wobble + 0.25);
      // large things barely budge: only objects close to edible size teeter
      o.wobbleAmp = a.size > r * 1.8 ? 0 : 0.07 * Math.min(1, 1.8 - a.size / r);
      o.wobbleDir = Math.atan2(this.hz - o.z, this.hx - o.x);
      o.sync();
      if (o.hintCooldown <= this.time && this.mode === 'play') {
        o.hintCooldown = this.time + 2.5;
        const needLevel = this.levelFor(a.size);
        this.hooks.float?.({ x: o.x, y: a.height + 0.3, z: o.z, text: needLevel > 0 ? `SIZE ${needLevel}` : 'TOO BIG', kind: 'lock' });
        if (this.def.tutorial) this.tut(4);
      }
    }
  }

  /** Display size level needed for an object size. */
  levelFor(size: number) {
    for (let t = this.def.startTier; t < TIER_RADII.length; t++) if (TIER_RADII[t] >= size) return t - this.def.startTier + 1;
    return -1;
  }

  // --------------------------------------------------------- objects
  private updateObjects(dt: number, playing: boolean) {
    const r = this.radius;
    const hx = this.hx, hz = this.hz;
    const camD = this.rig.distance;
    const fx = this.rig.focus.x, fz = this.rig.focus.z;
    const nearR = camD * 1.6 + 10;
    const magnet = this.powers.magnet > 0;
    const magR = r * 4 + 3;
    // periodically hide props that are too small to matter at this zoom
    this.lodT -= dt;
    const lod = this.lodT <= 0;
    if (lod) this.lodT = 0.3;
    const minVis = camD * (this.engine.quality === 'low' ? 0.013 : this.engine.quality === 'medium' ? 0.009 : 0.006);
    const minShadow = camD * (this.engine.quality === 'high' ? 0.012 : 0.022);
    for (const o of this.objects) {
      if (o.state === 'gone') continue;
      if (lod && o.state === 'idle') {
        const extent = Math.max(o.asset.size, o.asset.height * 0.6);
        const vis = extent > minVis;
        if (o.mesh.visible !== vis) o.mesh.visible = vis;
        // shadows of props that are tiny at this zoom are invisible anyway: skip them in the shadow pass
        const cast = o.castsShadow && extent > minShadow;
        if (o.mesh.castShadow !== cast) o.mesh.castShadow = cast;
      }
      if (o.state === 'falling') {
        this.updateFall(o, dt);
        continue;
      }
      if (o.state === 'spawning') {
        o.spawnT += dt * 2.5;
        const s = o.spawnT >= 1 ? 1 : 1 - Math.pow(1 - o.spawnT, 3) * 1.0;
        o.sync(Math.max(0.01, s * (1 + Math.sin(o.spawnT * Math.PI) * 0.15)));
        if (o.spawnT >= 1) {
          o.state = 'idle';
          o.sync();
        }
        continue;
      }
      // idle animations near the camera only
      const near = Math.abs(o.x - fx) < nearR && Math.abs(o.z - fz) < nearR;
      const idle = o.asset.def.idle;
      if (near && idle && idle !== 'none') this.animateIdle(o, dt);
      if (o.wobble > 0 && !(Math.abs(o.x - hx) < r + 3 && Math.abs(o.z - hz) < r + 3)) {
        o.wobble = Math.max(0, o.wobble - dt * 3);
        o.sync();
      }
      if (!playing) continue;
      const size = o.asset.size;
      const edible = size <= r;
      const dx = o.x - hx, dz = o.z - hz;
      const reach = r + Math.max(o.asset.hx, o.asset.hz) + (magnet && edible ? magR : 0.2);
      if (Math.abs(dx) > reach || Math.abs(dz) > reach) continue;
      const d = Math.hypot(dx, dz);
      if (!edible) continue;
      if (d < r - size * 0.35) {
        this.startFall(o);
        continue;
      }
      // tipping at the edge: slide towards the centre
      const edge = r + size * 0.55;
      if (d < edge || (magnet && d < magR)) {
        const pull = d < edge ? (0.5 + r * 0.9) : (2 + r * 2.5);
        const k = Math.min(1, (pull * dt) / Math.max(d, 0.001));
        o.x -= dx * k;
        o.z -= dz * k;
        o.wobble = d < edge ? 0.6 : 0;
        o.wobbleDir = Math.atan2(-dz, -dx);
        o.sync();
      }
    }
  }

  private animateIdle(o: WorldObject, dt: number) {
    o.phase += dt;
    switch (o.asset.def.idle) {
      case 'spin':
        o.rot += dt * 1.8;
        o.y = Math.sin(o.phase * 2.5) * 0.06 + 0.06;
        break;
      case 'bob':
        o.y = Math.abs(Math.sin(o.phase * 3)) * 0.12;
        break;
      case 'hover':
        o.y = Math.sin(o.phase * 2) * 0.12;
        break;
      case 'robot': {
        if (o.lane >= 0) break;
        const R = o.wander || 3;
        o.heading += Math.sin(o.phase * 0.7 + o.uid) * dt * 0.9;
        const dxh = o.homeX - o.x, dzh = o.homeZ - o.z;
        if (Math.hypot(dxh, dzh) > R) o.heading = Math.atan2(dzh, dxh);
        const sp = 0.9;
        const nx = o.x + Math.cos(o.heading) * sp * dt;
        const nz = o.z + Math.sin(o.heading) * sp * dt;
        // keep a safe distance from the hole if it is not edible
        const dh = Math.hypot(nx - this.hx, nz - this.hz);
        if (o.asset.size > this.radius && dh < this.radius + Math.max(o.asset.hx, o.asset.hz) + 0.3) {
          o.heading += Math.PI * 0.5;
          break;
        }
        o.x = nx;
        o.z = nz;
        // models built facing +X (vehicles) vs +Z (robots)
        o.rot = o.asset.hx > o.asset.hz * 1.2 ? -o.heading : Math.PI / 2 - o.heading;
        o.y = Math.abs(Math.sin(o.phase * 6)) * 0.04;
        break;
      }
      case 'sway':
        o.rot += Math.sin(o.phase) * dt * 0.2;
        break;
    }
    o.sync();
  }

  private startFall(o: WorldObject) {
    o.state = 'falling';
    o.mesh.visible = true;
    o.vy = 0;
    o.y = 0;
    o.fallT = 0;
    o.tilt = 0;
    o.tiltDir = Math.atan2(this.hz - o.z, this.hx - o.x);
    o.spin = 0;
    if (o.lane >= 0) {
      const l = this.lanes[o.lane];
      l.cars.splice(l.cars.indexOf(o), 1);
    }
  }

  private updateFall(o: WorldObject, dt: number) {
    const r = this.radius;
    o.fallT += dt;
    const g = 14 + r * 9;
    o.vy -= g * dt;
    o.y += o.vy * dt;
    // keep inside the opening and follow the moving hole
    o.x += this.vx * dt;
    o.z += this.vz * dt;
    const dx = o.x - this.hx, dz = o.z - this.hz;
    const d = Math.hypot(dx, dz);
    const allowed = Math.max(0, r * 0.92 - o.asset.size * 0.55);
    if (d > allowed && d > 1e-4) {
      const k = Math.min(1, dt * 10);
      o.x -= (dx / d) * (d - allowed) * k;
      o.z -= (dz / d) * (d - allowed) * k;
    } else {
      o.x -= dx * Math.min(1, dt * 1.5);
      o.z -= dz * Math.min(1, dt * 1.5);
    }
    o.tiltDir = Math.atan2(this.hz - o.z, this.hx - o.x);
    o.tilt = Math.min(1.3, o.tilt + dt * (3.5 + 1 / Math.max(0.3, o.asset.size)));
    o.spin += dt * 2.2;
    const depth = r * 2.2 + 0.2;
    const s = 1 - clamp(-o.y / (depth + o.asset.height), 0, 1) * 0.55;
    o.sync(s);
    if (o.y + o.asset.height * s * 0.4 < -depth || o.fallT > 3) this.consume(o);
  }

  private consume(o: WorldObject) {
    o.state = 'gone';
    o.mesh.visible = false;
    const a = o.asset;
    const def = a.def;
    const r = this.radius;
    const rel = a.size / r;
    if (this.mode === 'demo') {
      this.growth.add(a.mass * this.def.growth);
      this.particles.swallow(o.x, o.z, a.color, 6 + rel * 10, a.height, holeUniforms.uHoleTint.value);
      this.queueRespawn(o);
      return;
    }
    if (this.state === 'ended') return;
    // combo
    this.combo = this.comboTimer > 0 ? this.combo + 1 : 1;
    this.comboTimer = COMBO_WINDOW;
    this.maxCombo = Math.max(this.maxCombo, this.combo);
    const mult = this.comboMult * (this.powers.multiplier > 0 ? 2 : 1);
    const pts = Math.round(def.points * mult);
    this.score += pts;
    this.eaten++;
    for (const t of def.tags) this.tagCounts[t] = (this.tagCounts[t] ?? 0) + 1;
    this.counts[def.id] = (this.counts[def.id] ?? 0) + 1;

    const big = rel > 0.62 && a.size > 0.5;
    this.hooks.float?.({ x: this.hx + (o.x - this.hx) * 0.3, y: Math.min(a.height, 3) * 0.5 + r * 0.6, z: this.hz + (o.z - this.hz) * 0.3, text: `+${pts}`, kind: big ? 'big' : pts >= 300 ? 'bonus' : 'pts' });
    audio.gulp(def.sound ?? 'soft', rel, this.combo, big || a.size > 3);
    this.particles.swallow(o.x, o.z, a.color, 5 + rel * 16 + (big ? 14 : 0), Math.min(a.height, r * 2), holeUniforms.uHoleTint.value);
    if (big) {
      this.rig.addTrauma(0.22 + Math.min(0.4, a.size * 0.04));
      this.rig.kickFov(2.5);
      holeUniforms.uPulse.value = Math.max(holeUniforms.uPulse.value, 0.6);
      if (a.size > 1.5 || rel > 0.85) this.hooks.message?.(pick(['DELICIOUS!', 'BIG BITE!', 'MONSTER MEAL!', 'CRUNCH!']), 'big');
    }

    // combo messages
    while (this.comboMsgIdx < COMBO_MSGS.length && this.combo >= COMBO_MSGS[this.comboMsgIdx][0]) {
      this.hooks.message?.(COMBO_MSGS[this.comboMsgIdx][1], 'combo');
      audio.combo(this.comboMsgIdx);
      this.comboMsgIdx++;
    }

    // growth
    const gained = this.growth.add(a.mass * this.def.growth);
    if (gained > 0) {
      holeUniforms.uPulse.value = 1;
      this.hole.shockwave();
      this.rig.addTrauma(0.15);
      this.rig.kickFov(3.5);
      audio.growth(this.growth.tier);
      this.particles.rise(this.hx, this.hz, this.radius, 40, holeUniforms.uHoleTint.value, 0.6 + this.radius * 0.4);
      this.hooks.message?.(`SIZE ${this.sizeLevel}`, 'size');
      this.hooks.tier?.(this.sizeLevel);
      this.engine.flash = 0.12;
      this.engine.flashColor.set(this.def.theme.holeTint);
      if (this.def.tutorial) this.tut(3);
    }

    // power-ups
    if (def.power) this.activatePower(def.power);
    // chains
    if (o.chain) {
      const c = this.chains.get(o.chain);
      if (c) {
        c.eaten++;
        if (c.eaten === c.total) {
          const bonus = c.total * 30 + 150;
          this.score += bonus;
          this.hooks.message?.(`CHAIN COMPLETE +${bonus}`, 'chain');
          audio.chain();
          this.particles.burst(this.hx, 0.4, this.hz, 30, 4, [new THREE.Color('#ffc94a'), new THREE.Color('#fff1b8')], 1);
        }
      }
    }
    if (def.tags.includes('secret')) {
      this.secretFound = true;
      this.hooks.message?.('SECRET FOUND!', 'secret');
      audio.power();
    }

    // objectives
    if (!this.objectivesDone && this.objectiveProgress().every((p) => p.done)) {
      this.objectivesDone = true;
      this.doneAt = this.timeLeft;
      this.speedBonus = Math.round((this.timeLeft / this.def.duration) * this.def.stars[0] * 0.3);
      this.hooks.objectiveDone?.();
      this.hooks.message?.('OBJECTIVE COMPLETE', 'objective');
      audio.objective();
      const cols = ['#ffc94a', '#3de8ff', '#ff3d9a', '#7b5cff', '#ffffff'].map((c) => new THREE.Color(c));
      this.particles.burst(this.hx, 0.5, this.hz, 120, 5 + this.radius * 2, cols, 0.8 + this.radius * 0.3);
      this.engine.flash = 0.25;
      this.engine.flashColor.set('#ffffff');
    }
    if (this.def.finaleProp && def.id === this.def.finaleProp) this.startFinale();
    if (o.respawn) this.queueRespawn(o);
  }

  private activatePower(p: PowerUp) {
    const labels: Record<PowerUp, string> = { time: 'TIME +6s', magnet: 'GRAVITY PULL', multiplier: 'DOUBLE POINTS', surge: 'VOID SURGE' };
    if (p === 'time') this.timeLeft += 6;
    else this.powers[p] = POWER_DUR[p];
    this.hooks.message?.(labels[p], 'power');
    this.hooks.power?.(p, POWER_DUR[p]);
    audio.power();
    this.particles.rise(this.hx, this.hz, this.radius, 30, new THREE.Color(p === 'time' ? '#3de8ff' : p === 'magnet' ? '#ff3d9a' : p === 'multiplier' ? '#ffc94a' : '#7b5cff'), 1 + this.radius * 0.3);
  }

  private startFinale() {
    this.state = 'finale';
    this.finaleT = 0;
    this.rig.setZoom(1.45);
    this.rig.orbit = 0.35;
    this.rig.addTrauma(0.9);
    this.engine.flash = 0.6;
    this.engine.flashColor.set('#ffffff');
    audio.finale();
    const cols = ['#ffc94a', '#ffffff', '#ff3d9a', '#7b5cff', '#3de8ff'].map((c) => new THREE.Color(c));
    this.particles.burst(this.hx, 1, this.hz, 400, 10 + this.radius * 2.5, cols, 2.5 + this.radius * 0.3, 1.4);
    this.particles.rise(this.hx, this.hz, this.radius, 200, holeUniforms.uHoleTint.value, 3);
    this.hooks.message?.('THE WORLD IS CONSUMED', 'finale');
  }

  private queueRespawn(o: WorldObject) {
    if (o.lane >= 0) {
      this.respawnQueue.push(o);
      return;
    }
    o.respawnAt = this.time + 9 + Math.random() * 8;
    this.respawnQueue.push(o);
  }

  private updateRespawn() {
    if (!this.respawnQueue.length) return;
    const far = Math.max(14, this.rig.distance * 1.5);
    for (let i = this.respawnQueue.length - 1; i >= 0; i--) {
      const o = this.respawnQueue[i];
      if (o.lane >= 0 || this.time < o.respawnAt) continue;
      if (Math.hypot(o.homeX - this.hx, o.homeZ - this.hz) < far) continue;
      this.respawnQueue.splice(i, 1);
      o.x = o.homeX;
      o.z = o.homeZ;
      o.y = 0;
      o.tilt = 0;
      o.spin = 0;
      o.state = 'spawning';
      o.spawnT = 0;
      o.mesh.visible = true;
      o.sync(0.01);
    }
  }

  // ----------------------------------------------------------- lanes
  private updateLanes(dt: number) {
    if (!this.lanes.length) return;
    this.lightTimer += dt;
    if (this.lightTimer > 9) {
      this.lightTimer = 0;
      this.lightPhase = 1 - this.lightPhase;
    }
    const amber = this.lightTimer > 7.5;
    for (let li = 0; li < this.lanes.length; li++) {
      const l = this.lanes[li];
      const len = Math.hypot(l.x1 - l.x0, l.z1 - l.z0);
      const ux = (l.x1 - l.x0) / len, uz = (l.z1 - l.z0) / len;
      l.cars.sort((a, b) => b.laneT - a.laneT);
      for (let i = 0; i < l.cars.length; i++) {
        const o = l.cars[i];
        if (o.state !== 'idle') continue;
        let want = l.speed;
        const ahead = i > 0 ? l.cars[i - 1] : null;
        const myLen = o.asset.hx;
        if (ahead) {
          const gap = ahead.laneT - o.laneT - ahead.asset.hx - myLen;
          if (gap < 2.5) want = 0;
          else if (gap < 7) want = Math.min(want, ahead.speed + (gap - 2.5) * 0.8);
        }
        if (l.stop) {
          const red = this.lightPhase !== l.stop.group || amber;
          const toStop = l.stop.at - (o.laneT + myLen);
          if (red && toStop > -0.5 && toStop < 9) want = Math.min(want, Math.max(0, toStop - 0.5) * 1.2);
        }
        // brake for the hole if the car cannot be eaten
        if (o.asset.size > this.radius) {
          const ax = o.x + ux * (myLen + 1.5), az = o.z + uz * (myLen + 1.5);
          if (Math.hypot(ax - this.hx, az - this.hz) < this.radius + 1.2) want = 0;
        }
        o.speed = lerp(o.speed, want, damp(want < o.speed ? 4 : 1.5, dt));
        o.laneT += o.speed * dt;
        o.x = l.x0 + ux * o.laneT;
        o.z = l.z0 + uz * o.laneT;
        if (o.asset.def.idle === 'hover') o.y = Math.sin(this.time * 2 + o.uid) * 0.12;
        o.sync();
        if (o.laneT > len + 2) {
          // recycle to the start of the lane
          l.cars.splice(i, 1);
          i--;
          o.state = 'gone';
          o.mesh.visible = false;
          this.respawnQueue.push(o);
        }
      }
      // spawn new cars at the lane start
      l.spawnTimer -= dt;
      const last = l.cars[l.cars.length - 1];
      const clear = !last || last.laneT > 12;
      if (l.spawnTimer <= 0 && clear && Math.hypot(l.x0 - this.hx, l.z0 - this.hz) > this.radius + 6) {
        l.spawnTimer = 2.5 + Math.random() * 4;
        const total = this.objects.filter((q) => q.lane === li && q.state !== 'gone').length;
        if (total < Math.floor(len / 11)) this.spawnOnLane(li, -3);
      }
    }
  }

  // -------------------------------------------------------- autopilot
  private botStuckT = 0;
  private botLast = { x: 0, z: 0, t: 0 };
  private botEscape = 0;
  private botEscapeDir = 0;
  private botMove(dt: number): { x: number; y: number } {
    this.botRetarget -= dt;
    const r = this.radius;
    // stuck detection: wander off in a random direction for a moment
    this.botStuckT += dt;
    if (this.botStuckT > 1.2) {
      const moved = Math.hypot(this.hx - this.botLast.x, this.hz - this.botLast.z);
      if (moved < r * 0.8 && this.botTarget) {
        this.botEscape = 0.9;
        this.botEscapeDir = Math.random() * Math.PI * 2;
        this.botIgnore.add(this.botTarget.uid);
        this.botTarget = null;
      }
      this.botStuckT = 0;
      this.botLast = { x: this.hx, z: this.hz, t: this.time };
    }
    if (this.botEscape > 0) {
      this.botEscape -= dt;
      return { x: Math.cos(this.botEscapeDir), y: Math.sin(this.botEscapeDir) };
    }
    if (!this.botTarget || this.botTarget.state !== 'idle' || this.botTarget.asset.size > r || this.botRetarget <= 0) {
      this.botRetarget = 0.6;
      let best: WorldObject | null = null;
      let bestScore = -1;
      for (const o of this.objects) {
        if (o.state !== 'idle' || o.asset.size > r || this.botIgnore.has(o.uid)) continue;
        const d = Math.hypot(o.x - this.hx, o.z - this.hz);
        const val = (o.asset.def.points + o.asset.mass * 40) / (1 + d * d * 0.05);
        if (val > bestScore) {
          bestScore = val;
          best = o;
        }
      }
      this.botTarget = best;
    }
    const t = this.botTarget;
    if (!t) return { x: Math.sin(this.time * 0.3), y: Math.cos(this.time * 0.23) };
    const dx = t.x - this.hx, dz = t.z - this.hz;
    const d = Math.hypot(dx, dz) || 1;
    const m = this.mode === 'demo' ? 0.55 : 1;
    // world → screen (yaw aware)
    const yaw = this.rig.yaw;
    const sx = (dx / d) * Math.cos(yaw) - (dz / d) * Math.sin(yaw);
    const sy = (dx / d) * Math.sin(yaw) + (dz / d) * Math.cos(yaw);
    return { x: sx * m, y: sy * m };
  }

  // ------------------------------------------------------- tutorial
  private tut(step: number) {
    if (step <= this.tutorialStep) return;
    this.tutorialStep = step;
    this.hooks.tutorial?.(step);
  }

  // ------------------------------------------------------------ end
  private finish() {
    if (this.state === 'ending' || this.state === 'ended') return;
    // award objects currently falling
    for (const o of this.objects) if (o.state === 'falling') this.consume(o);
    this.state = 'ending';
    this.endT = 0;
    this.vx = this.vz = 0;
    this.rig.setZoom(0.82);
    this.rig.orbit = 0.18;
    audio.setIntensity(0);
  }

  result(): RunResult {
    const prog = this.objectiveProgress();
    const completed = prog.every((p) => p.done);
    const total = this.score + (completed ? this.speedBonus : 0);
    let stars = 0;
    if (completed) {
      stars = 1;
      if (total >= this.def.stars[0]) stars = 2;
      if (total >= this.def.stars[1]) stars = 3;
    }
    return {
      level: this.def,
      completed,
      score: this.score,
      speedBonus: completed ? this.speedBonus : 0,
      total,
      stars,
      eaten: this.eaten,
      sizeLevel: this.sizeLevel,
      maxCombo: this.maxCombo,
      missing: prog.filter((p) => !p.done).map((p) => `${p.o.label}: ${formatNumber(Math.floor(p.v))} / ${formatNumber(p.o.target)}`),
      counts: this.counts,
      secretFound: this.secretFound,
    };
  }

  dispose() {
    this.sun.shadow.map?.dispose();
    for (const d of this.disposables) d.dispose();
    this.hole.dispose();
    this.particles.dispose();
    for (const x of this.ctx.extras) {
      x.traverse((m) => {
        if (m instanceof THREE.Mesh) {
          m.geometry.dispose();
          const mm = m.material as THREE.Material | THREE.Material[];
          if (Array.isArray(mm)) mm.forEach((q) => q.dispose());
          else mm.dispose();
        }
      });
    }
    this.scene.clear();
  }
}

function pick<T>(a: T[]): T {
  return a[Math.floor(Math.random() * a.length)];
}
