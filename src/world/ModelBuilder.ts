import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export interface PartOpts {
  rx?: number;
  ry?: number;
  rz?: number;
  /** Unlit glowing part (neon, windows at night, lamps). */
  emissive?: boolean;
  /** Brightness multiplier for emissive parts (>1 feeds the bloom pass). */
  glow?: number;
  sx?: number;
  sy?: number;
  sz?: number;
}

const tmpColor = new THREE.Color();
/** Round shapes get more segments for a smoother high-quality look; deliberate polygons (4/6 sides) stay as they are. */
const hq = (n: number) => (n >= 8 ? Math.round(n * 1.7) : n);
const tmpMat = new THREE.Matrix4();
const tmpQuat = new THREE.Quaternion();
const tmpEuler = new THREE.Euler();
const tmpPos = new THREE.Vector3();
const tmpScale = new THREE.Vector3();

// Cached unit primitives (cloned per part, so they are never mutated).
const prim = {
  box: new THREE.BoxGeometry(1, 1, 1),
  plane: new THREE.PlaneGeometry(1, 1),
};

/**
 * Procedural low-poly model builder. Parts are baked with vertex colours and
 * merged into a single geometry with two material groups (lit + emissive),
 * so every prop is rendered with one draw call per group.
 */
export class ModelBuilder {
  private std: THREE.BufferGeometry[] = [];
  private emi: THREE.BufferGeometry[] = [];
  /** Optional group transform applied to subsequent parts. */
  private stack: THREE.Matrix4[] = [];

  /** Push a parent transform (translation + Y rotation + optional scale). */
  push(x: number, y: number, z: number, ry = 0, s = 1) {
    const m = new THREE.Matrix4().compose(
      tmpPos.set(x, y, z),
      tmpQuat.setFromEuler(tmpEuler.set(0, ry, 0)),
      tmpScale.set(s, s, s),
    );
    const parent = this.stack[this.stack.length - 1];
    this.stack.push(parent ? parent.clone().multiply(m) : m);
    return this;
  }
  pushM(m: THREE.Matrix4) {
    const parent = this.stack[this.stack.length - 1];
    this.stack.push(parent ? parent.clone().multiply(m) : m);
    return this;
  }
  pop() {
    this.stack.pop();
    return this;
  }

  /** Add an arbitrary geometry (it is consumed/converted). */
  add(g: THREE.BufferGeometry, color: THREE.ColorRepresentation, x: number, y: number, z: number, o: PartOpts = {}) {
    let geo = g.index ? g.toNonIndexed() : g;
    if (geo === g) geo = g.clone();
    for (const name of Object.keys(geo.attributes)) {
      if (name !== 'position' && name !== 'normal') geo.deleteAttribute(name);
    }
    if (!geo.attributes.normal) geo.computeVertexNormals();
    tmpEuler.set(o.rx ?? 0, o.ry ?? 0, o.rz ?? 0);
    tmpMat.compose(tmpPos.set(x, y, z), tmpQuat.setFromEuler(tmpEuler), tmpScale.set(o.sx ?? 1, o.sy ?? 1, o.sz ?? 1));
    const parent = this.stack[this.stack.length - 1];
    if (parent) tmpMat.premultiply(parent);
    geo.applyMatrix4(tmpMat);
    tmpColor.set(color);
    const k = o.emissive ? (o.glow ?? 1) : 1;
    const n = geo.attributes.position.count;
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      col[i * 3] = tmpColor.r * k;
      col[i * 3 + 1] = tmpColor.g * k;
      col[i * 3 + 2] = tmpColor.b * k;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    (o.emissive ? this.emi : this.std).push(geo);
    return this;
  }

  /** Box centred at (x, y, z). */
  box(w: number, h: number, d: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, o: PartOpts = {}) {
    const g = prim.box.clone();
    g.scale(w, h, d);
    return this.add(g, color, x, y, z, o);
  }
  /** Box standing on y (base at y). */
  boxB(w: number, h: number, d: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, o: PartOpts = {}) {
    return this.box(w, h, d, color, x, y + h / 2, z, o);
  }
  /** Vertical quad facing +Z (rotate with ry). */
  quad(w: number, h: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, o: PartOpts = {}) {
    const g = prim.plane.clone();
    g.scale(w, h, 1);
    return this.add(g, color, x, y, z, o);
  }
  cyl(rt: number, rb: number, h: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, seg = 10, o: PartOpts = {}) {
    return this.add(new THREE.CylinderGeometry(rt, rb, h, hq(seg), 1), color, x, y, z, o);
  }
  /** Cylinder standing on y. */
  cylB(rt: number, rb: number, h: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, seg = 10, o: PartOpts = {}) {
    return this.cyl(rt, rb, h, color, x, y + h / 2, z, seg, o);
  }
  sphere(r: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, o: PartOpts & { w?: number; hs?: number } = {}) {
    return this.add(new THREE.SphereGeometry(r, o.w ? Math.round(o.w * 1.6) : 18, o.hs ? Math.round(o.hs * 1.6) : 12), color, x, y, z, o);
  }
  ico(r: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, detail = 0, o: PartOpts = {}) {
    return this.add(new THREE.IcosahedronGeometry(r, detail), color, x, y, z, o);
  }
  dodeca(r: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, o: PartOpts = {}) {
    return this.add(new THREE.DodecahedronGeometry(r, 0), color, x, y, z, o);
  }
  cone(r: number, h: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, seg = 10, o: PartOpts = {}) {
    return this.add(new THREE.ConeGeometry(r, h, hq(seg), 1), color, x, y, z, o);
  }
  torus(r: number, tube: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, o: PartOpts & { rs?: number; ts?: number; arc?: number } = {}) {
    return this.add(new THREE.TorusGeometry(r, tube, o.rs ?? 8, hq(o.ts ?? 16), o.arc ?? Math.PI * 2), color, x, y, z, o);
  }
  /** Lathe from a 2D profile [radius, y] pairs. */
  lathe(profile: [number, number][], color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, seg = 12, o: PartOpts = {}) {
    const pts = profile.map(([r, py]) => new THREE.Vector2(r, py));
    return this.add(new THREE.LatheGeometry(pts, hq(seg)), color, x, y, z, o);
  }
  /** Extruded 2D shape (points in XY), extruded along Z by depth, centred. */
  extrude(points: [number, number][], depth: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, o: PartOpts = {}) {
    const shape = new THREE.Shape(points.map(([px, py]) => new THREE.Vector2(px, py)));
    const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
    g.translate(0, 0, -depth / 2);
    return this.add(g, color, x, y, z, o);
  }
  /** Simple wheel lying along X axis (cylinder rotated). */
  wheel(r: number, w: number, x: number, y: number, z: number, tire = '#22232a', hub = '#c9ccd6') {
    this.cyl(r, r, w, tire, x, y, z, 10, { rz: Math.PI / 2 });
    this.cyl(r * 0.5, r * 0.5, w * 1.04, hub, x, y, z, 8, { rz: Math.PI / 2 });
    return this;
  }

  /**
   * Grid of window quads on one facade.
   * face: 0=+Z, 1=-Z, 2=+X, 3=-X. (cx, cz) is the building centre.
   */
  windows(
    face: 0 | 1 | 2 | 3,
    bw: number,
    bd: number,
    cx: number,
    cz: number,
    y0: number,
    y1: number,
    cols: number,
    rows: number,
    color: THREE.ColorRepresentation,
    o: PartOpts & { ww?: number; wh?: number; litColor?: THREE.ColorRepresentation; litChance?: number; rnd?: () => number } = {},
  ) {
    const along = face < 2 ? bw : bd;
    const off = (face < 2 ? bd : bw) / 2 + 0.02;
    const cellW = along / cols;
    const cellH = (y1 - y0) / rows;
    const ww = o.ww ?? cellW * 0.55;
    const wh = o.wh ?? cellH * 0.55;
    const ry = face === 0 ? 0 : face === 1 ? Math.PI : face === 2 ? Math.PI / 2 : -Math.PI / 2;
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const a = -along / 2 + cellW * (c + 0.5);
        const wy = y0 + cellH * (r + 0.5);
        let px = cx, pz = cz;
        if (face === 0) { px += a; pz += off; }
        else if (face === 1) { px -= a; pz -= off; }
        else if (face === 2) { px += off; pz -= a; }
        else { px -= off; pz += a; }
        const lit = o.litColor && o.rnd && o.rnd() < (o.litChance ?? 0.5);
        this.quad(ww, wh, lit ? o.litColor! : color, px, wy, pz, { ry, emissive: o.emissive || !!lit, glow: o.glow });
      }
    }
    return this;
  }

  isEmpty() {
    return this.std.length + this.emi.length === 0;
  }

  /** Merge everything into one geometry with groups [standard, emissive]. */
  build(): THREE.BufferGeometry {
    const parts: THREE.BufferGeometry[] = [];
    const a = this.std.length ? mergeGeometries(this.std, false) : null;
    const b = this.emi.length ? mergeGeometries(this.emi, false) : null;
    let out: THREE.BufferGeometry;
    if (a && b) {
      parts.push(a, b);
      out = mergeGeometries(parts, true);
      a.dispose();
      b.dispose();
    } else if (a) {
      out = a;
      out.addGroup(0, a.attributes.position.count, 0);
    } else if (b) {
      out = b;
      out.addGroup(0, b.attributes.position.count, 1);
    } else {
      out = new THREE.BufferGeometry();
    }
    // When only emissive parts exist the group index must point at material 1.
    if (!a && b) out.groups[0].materialIndex = 1;
    for (const g of this.std) g.dispose();
    for (const g of this.emi) g.dispose();
    this.std = [];
    this.emi = [];
    out.computeBoundingBox();
    out.computeBoundingSphere();
    return out;
  }
}
