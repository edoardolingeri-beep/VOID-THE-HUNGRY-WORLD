import * as THREE from 'three';
import { RNG } from '../engine/utils';
import { GroundPainter, type Pt } from './GroundPainter';
import { ModelBuilder } from './ModelBuilder';
import { getPropAsset, variantCount } from './PropLibrary';
import { getPropDef } from './props';
import { buildBuilding, type BuildingStyle } from './props/buildings';
import { buildTree } from './props/propsPark';
import { buildPalm } from './props/propsBeach';

export type Zone =
  | { x0: number; z0: number; x1: number; z1: number }
  | { cx: number; cz: number; r: number; r0?: number }
  | { path: Pt[]; w: number };

export interface Placement {
  id: string;
  variant: number;
  x: number;
  z: number;
  rot: number;
  chain?: number;
  lane?: number;
  /** Respawnable fodder: recycled from the pool when eaten. */
  respawn?: boolean;
  wander?: number;
}

export interface LaneDef {
  /** Start and end of the lane. */
  x0: number;
  z0: number;
  x1: number;
  z1: number;
  speed: number;
  ids: string[];
  /** Distance along the lane of the stop line and the light group. */
  stop?: { at: number; group: 0 | 1 };
  hover?: number;
}

export type Weighted = string | [string, number][] | string[];

/** A painter that forwards every drawing call to two painters. */
function fanout(a: GroundPainter, b: GroundPainter): GroundPainter {
  const proxy: GroundPainter = new Proxy(a, {
    get(target, prop, recv) {
      const v = Reflect.get(target, prop, recv);
      if (typeof v !== 'function') return v;
      return (...args: unknown[]) => {
        const r = (v as (...x: unknown[]) => unknown).apply(a, args);
        const w = (b as unknown as Record<string | symbol, (...x: unknown[]) => unknown>)[prop];
        w.apply(b, args);
        return r === a ? proxy : r;
      };
    },
  });
  return proxy;
}

function pickWeighted(rng: RNG, w: Weighted): string {
  if (typeof w === 'string') return w;
  if (typeof w[0] === 'string') return rng.pick(w as string[]);
  const arr = w as [string, number][];
  let total = 0;
  for (const [, n] of arr) total += n;
  let r = rng.next() * total;
  for (const [id, n] of arr) {
    r -= n;
    if (r <= 0) return id;
  }
  return arr[arr.length - 1][0];
}

/**
 * Building API used by level definitions. Collects prop placements (with a
 * spatial hash for minimum spacing), paints the ground and accumulates the
 * static background scenery into merged meshes.
 */
export class LevelContext {
  readonly rng: RNG;
  /** Paints into every ground layer at once (sharp play area + coarse surroundings). */
  readonly painter: GroundPainter;
  /** High-resolution layer covering the play area plus a small border. */
  readonly inner: GroundPainter;
  /** Low-resolution layer covering everything out to the scenery margin. */
  readonly outer: GroundPainter;
  readonly innerExt: { minX: number; maxX: number; minZ: number; maxZ: number };
  readonly placements: Placement[] = [];
  readonly lanes: LaneDef[] = [];
  readonly bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  readonly ext: { minX: number; maxX: number; minZ: number; maxZ: number };
  /** Static decoration, chunked for frustum culling. */
  private chunks = new Map<string, ModelBuilder>();
  private chunkSize = 60;
  private grid = new Map<string, { x: number; z: number; r: number }[]>();
  private cell = 4;
  private blocks: Zone[] = [];
  private chainId = 0;
  /** Extra meshes added directly (water, special decorations). */
  readonly extras: THREE.Object3D[] = [];
  readonly night: boolean;

  constructor(w: number, h: number, margin: number, seed: number, maxRes: number, night = false, outerRes = 0) {
    this.rng = new RNG(seed);
    this.night = night;
    this.bounds = { minX: -w / 2, maxX: w / 2, minZ: -h / 2, maxZ: h / 2 };
    this.ext = { minX: -w / 2 - margin, maxX: w / 2 + margin, minZ: -h / 2 - margin, maxZ: h / 2 + margin };
    const pad = Math.min(margin, 8);
    this.innerExt = { minX: -w / 2 - pad, maxX: w / 2 + pad, minZ: -h / 2 - pad, maxZ: h / 2 + pad };
    if (outerRes > 0) {
      const ie = this.innerExt;
      this.inner = new GroundPainter(ie.minX, ie.minZ, ie.maxX, ie.maxZ, maxRes, seed);
      this.outer = new GroundPainter(this.ext.minX, this.ext.minZ, this.ext.maxX, this.ext.maxZ, outerRes, seed);
      this.painter = fanout(this.inner, this.outer);
    } else {
      this.inner = this.outer = this.painter = new GroundPainter(this.ext.minX, this.ext.minZ, this.ext.maxX, this.ext.maxZ, maxRes, seed);
    }
  }

  // ---------------------------------------------------------------- props
  private key(x: number, z: number) {
    return `${Math.floor(x / this.cell)},${Math.floor(z / this.cell)}`;
  }
  private free(x: number, z: number, r: number) {
    const b = this.bounds;
    if (x - r * 0.5 < b.minX || x + r * 0.5 > b.maxX || z - r * 0.5 < b.minZ || z + r * 0.5 > b.maxZ) return false;
    for (const zn of this.blocks) if (this.inZone(zn, x, z, r * 0.6)) return false;
    const reach = Math.ceil((r + 12) / this.cell);
    const cx = Math.floor(x / this.cell), cz = Math.floor(z / this.cell);
    for (let i = -reach; i <= reach; i++)
      for (let j = -reach; j <= reach; j++) {
        const list = this.grid.get(`${cx + i},${cz + j}`);
        if (!list) continue;
        for (const o of list) {
          const d = Math.hypot(o.x - x, o.z - z);
          if (d < o.r + r) return false;
        }
      }
    return true;
  }
  private occupy(x: number, z: number, r: number) {
    const k = this.key(x, z);
    let l = this.grid.get(k);
    if (!l) this.grid.set(k, (l = []));
    l.push({ x, z, r });
  }

  inZone(zn: Zone, x: number, z: number, pad = 0): boolean {
    if ('x0' in zn) return x >= zn.x0 - pad && x <= zn.x1 + pad && z >= zn.z0 - pad && z <= zn.z1 + pad;
    if ('cx' in zn) {
      const d = Math.hypot(x - zn.cx, z - zn.cz);
      return d <= zn.r + pad && d >= (zn.r0 ?? 0) - pad;
    }
    // distance to polyline
    for (let i = 0; i < zn.path.length - 1; i++) {
      const [ax, az] = zn.path[i], [bx, bz] = zn.path[i + 1];
      const vx = bx - ax, vz = bz - az;
      const t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / (vx * vx + vz * vz || 1)));
      if (Math.hypot(x - ax - vx * t, z - az - vz * t) <= zn.w / 2 + pad) return true;
    }
    return false;
  }

  private samplePoint(zn: Zone): [number, number] {
    const r = this.rng;
    if ('x0' in zn) return [r.range(zn.x0, zn.x1), r.range(zn.z0, zn.z1)];
    if ('cx' in zn) {
      const a = r.range(0, Math.PI * 2);
      const r0 = zn.r0 ?? 0;
      const d = Math.sqrt(r.range((r0 * r0) / (zn.r * zn.r), 1)) * zn.r;
      return [zn.cx + Math.cos(a) * d, zn.cz + Math.sin(a) * d];
    }
    // along a path
    const segs = zn.path.length - 1;
    const i = r.int(0, segs - 1);
    const [ax, az] = zn.path[i], [bx, bz] = zn.path[i + 1];
    const t = r.next();
    const len = Math.hypot(bx - ax, bz - az) || 1;
    const nx = -(bz - az) / len, nz = (bx - ax) / len;
    const o = r.range(-zn.w / 2, zn.w / 2);
    return [ax + (bx - ax) * t + nx * o, az + (bz - az) * t + nz * o];
  }

  /** Reserve an area: no prop will be scattered into it. */
  block(zn: Zone) {
    this.blocks.push(zn);
    return this;
  }

  /** Place one prop. Returns false if the spot is taken (unless force). */
  place(id: string, x: number, z: number, o: { rot?: number; variant?: number; force?: boolean; chain?: number; respawn?: boolean; wander?: number; gap?: number } = {}) {
    const variant = o.variant ?? this.rng.int(0, variantCount(id) - 1);
    const a = getPropAsset(id, variant);
    const rad = Math.max(a.hx, a.hz) * 0.9 + (o.gap ?? 0.15);
    if (!o.force && !this.free(x, z, rad)) return false;
    this.occupy(x, z, rad);
    this.placements.push({ id, variant, x, z, rot: o.rot ?? this.rng.range(0, Math.PI * 2), chain: o.chain, respawn: o.respawn, wander: o.wander });
    return true;
  }

  /** Scatter props in a zone with minimum spacing. */
  scatter(ids: Weighted, zn: Zone, count: number, o: { gap?: number; rot?: number | 'random' | 'axis'; attempts?: number; respawn?: boolean; wander?: number } = {}) {
    let placed = 0;
    const attempts = o.attempts ?? 30;
    for (let i = 0; i < count; i++) {
      const id = pickWeighted(this.rng, ids);
      for (let k = 0; k < attempts; k++) {
        const [x, z] = this.samplePoint(zn);
        if (!this.inZone(zn, x, z)) continue;
        const rot = o.rot === undefined || o.rot === 'random' ? this.rng.range(0, Math.PI * 2) : o.rot === 'axis' ? (this.rng.int(0, 3) * Math.PI) / 2 : o.rot;
        if (this.place(id, x, z, { rot, gap: o.gap, respawn: o.respawn, wander: o.wander })) {
          placed++;
          break;
        }
      }
    }
    return placed;
  }

  /** Props in a row from (x0,z0) to (x1,z1). */
  row(ids: Weighted, x0: number, z0: number, x1: number, z1: number, spacing: number, o: { rot?: number; jitter?: number; skip?: number; gap?: number; force?: boolean } = {}) {
    const len = Math.hypot(x1 - x0, z1 - z0);
    const n = Math.max(1, Math.floor(len / spacing) + 1);
    const ang = Math.atan2(-(z1 - z0), x1 - x0);
    let c = 0;
    for (let i = 0; i < n; i++) {
      if (o.skip && this.rng.chance(o.skip)) continue;
      const t = n === 1 ? 0.5 : i / (n - 1);
      const j = o.jitter ?? 0;
      const x = x0 + (x1 - x0) * t + this.rng.range(-j, j);
      const z = z0 + (z1 - z0) * t + this.rng.range(-j, j);
      if (this.place(pickWeighted(this.rng, ids), x, z, { rot: o.rot ?? ang, gap: o.gap ?? 0.05, force: o.force })) c++;
    }
    return c;
  }

  /** Props around a circle. */
  circleOf(ids: Weighted, cx: number, cz: number, r: number, count: number, o: { face?: boolean; gap?: number; phase?: number } = {}) {
    for (let i = 0; i < count; i++) {
      const a = (o.phase ?? 0) + (i / count) * Math.PI * 2;
      this.place(pickWeighted(this.rng, ids), cx + Math.cos(a) * r, cz + Math.sin(a) * r, { rot: o.face ? -a + Math.PI / 2 : this.rng.range(0, 6.28), gap: o.gap ?? 0.05 });
    }
  }

  /** Small cluster of props around a centre. */
  cluster(ids: Weighted, cx: number, cz: number, r: number, count: number, gap = 0.05) {
    return this.scatter(ids, { cx, cz, r }, count, { gap, attempts: 40 });
  }

  /** A trail of coins: swallow the whole chain for a bonus. */
  coins(path: Pt[], count: number) {
    const id = ++this.chainId;
    let total = 0;
    for (let i = 0; i < path.length - 1; i++) total += Math.hypot(path[i + 1][0] - path[i][0], path[i + 1][1] - path[i][1]);
    let placed = 0;
    for (let k = 0; k < count; k++) {
      let d = (k / Math.max(1, count - 1)) * total;
      for (let i = 0; i < path.length - 1; i++) {
        const [ax, az] = path[i], [bx, bz] = path[i + 1];
        const l = Math.hypot(bx - ax, bz - az);
        if (d <= l + 1e-6) {
          const t = l ? d / l : 0;
          if (this.place('coin', ax + (bx - ax) * t, az + (bz - az) * t, { chain: id, gap: 0, rot: 0, force: true })) placed++;
          break;
        }
        d -= l;
      }
    }
    return placed;
  }

  /** Vehicles moving along a lane (spawned by the session). */
  lane(l: LaneDef) {
    this.lanes.push(l);
    return this;
  }

  // ---------------------------------------------------------- scenery
  private chunkFor(x: number, z: number) {
    const k = `${Math.floor(x / this.chunkSize)},${Math.floor(z / this.chunkSize)}`;
    let b = this.chunks.get(k);
    if (!b) this.chunks.set(k, (b = new ModelBuilder()));
    return b;
  }

  /** Static (non-edible) building used for the background skyline. */
  building(x: number, z: number, rot: number, style: Partial<BuildingStyle> & { w: number; d: number; floors: number }) {
    const b = this.chunkFor(x, z);
    b.push(x, 0, z, rot);
    buildBuilding(b, this.rng, {
      color: style.color ?? this.rng.pick(['#e9b98a', '#c96f5a', '#f2d7a6', '#9fb7c9', '#d9d2c4', '#b5c99a']),
      night: this.night,
      ...style,
    } as BuildingStyle);
    b.pop();
    return this;
  }

  tree(x: number, z: number, h: number, kind: 'round' | 'pine' | 'tall' | 'blossom' = 'round', leaf?: string) {
    const b = this.chunkFor(x, z);
    b.push(x, 0, z, this.rng.range(0, 6.28));
    buildTree(b, this.rng, h, kind, leaf);
    b.pop();
    return this;
  }

  palm(x: number, z: number, h: number) {
    const b = this.chunkFor(x, z);
    b.push(x, 0, z, this.rng.range(0, 6.28));
    buildPalm(b, this.rng, h);
    b.pop();
    return this;
  }

  /** Any prop as static decoration. */
  deco(id: string, x: number, z: number, rot = 0, variant?: number, scale = 1) {
    const b = this.chunkFor(x, z);
    b.push(x, 0, z, rot, scale);
    const def = getPropDef(id);
    const v = variant ?? this.rng.int(0, (def.variants ?? 3) - 1);
    def.build(b, this.rng, v);
    b.pop();
    return this;
  }

  /** Raw access for custom static geometry (walls, fences, piers…). */
  raw(x: number, z: number, fn: (b: ModelBuilder) => void) {
    const b = this.chunkFor(x, z);
    fn(b);
    return this;
  }

  buildScenery(): THREE.BufferGeometry[] {
    const out: THREE.BufferGeometry[] = [];
    for (const b of this.chunks.values()) if (!b.isEmpty()) out.push(b.build());
    this.chunks.clear();
    return out;
  }

  /** Perimeter of trees just outside the play area. */
  treeBorder(spacing: number, depth: number, kinds: ('round' | 'pine' | 'tall' | 'blossom')[] = ['round', 'pine', 'tall']) {
    const b = this.bounds;
    const e = this.ext;
    for (let x = e.minX; x < e.maxX; x += spacing) {
      for (let k = 0; k < depth; k++) {
        const off = 2 + k * spacing * 0.9 + this.rng.range(0, spacing * 0.5);
        if (b.minZ - off > e.minZ) this.tree(x + this.rng.range(-1, 1), b.minZ - off, this.rng.range(4, 8), this.rng.pick(kinds));
        if (b.maxZ + off < e.maxZ) this.tree(x + this.rng.range(-1, 1), b.maxZ + off, this.rng.range(4, 8), this.rng.pick(kinds));
      }
    }
    for (let z = b.minZ; z < b.maxZ; z += spacing) {
      for (let k = 0; k < depth; k++) {
        const off = 2 + k * spacing * 0.9 + this.rng.range(0, spacing * 0.5);
        if (b.minX - off > e.minX) this.tree(b.minX - off, z + this.rng.range(-1, 1), this.rng.range(4, 8), this.rng.pick(kinds));
        if (b.maxX + off < e.maxX) this.tree(b.maxX + off, z + this.rng.range(-1, 1), this.rng.range(4, 8), this.rng.pick(kinds));
      }
    }
  }
}
