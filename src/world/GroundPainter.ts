import * as THREE from 'three';
import { RNG } from '../engine/utils';

export type Pt = [number, number];

/**
 * Paints the ground of a level (grass, roads, markings, plazas, sand…) into
 * a single canvas texture expressed in world coordinates. The same painter
 * can render a small top-down thumbnail for the level-select screen.
 */
export class GroundPainter {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly s: number;
  readonly rng: RNG;
  /** Separate stream for fine speckles so large features match across resolutions. */
  private speckRng: RNG;

  constructor(
    readonly minX: number,
    readonly minZ: number,
    readonly maxX: number,
    readonly maxZ: number,
    maxRes: number,
    seed = 7,
  ) {
    const w = maxX - minX, h = maxZ - minZ;
    this.s = Math.min(maxRes / Math.max(w, h), 48);
    this.canvas = document.createElement('canvas');
    this.canvas.width = Math.max(4, Math.round(w * this.s));
    this.canvas.height = Math.max(4, Math.round(h * this.s));
    this.ctx = this.canvas.getContext('2d')!;
    this.rng = new RNG(seed);
    this.speckRng = new RNG(seed * 7 + 3);
  }

  get width() {
    return this.maxX - this.minX;
  }
  get height() {
    return this.maxZ - this.minZ;
  }
  px(x: number) {
    return (x - this.minX) * this.s;
  }
  pz(z: number) {
    return (z - this.minZ) * this.s;
  }

  fill(color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    return this;
  }
  rect(x0: number, z0: number, x1: number, z1: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.px(x0), this.pz(z0), (x1 - x0) * this.s, (z1 - z0) * this.s);
    return this;
  }
  roundRect(x0: number, z0: number, x1: number, z1: number, r: number, color: string, stroke?: { color: string; w: number }) {
    const c = this.ctx;
    c.beginPath();
    c.roundRect(this.px(x0), this.pz(z0), (x1 - x0) * this.s, (z1 - z0) * this.s, r * this.s);
    c.fillStyle = color;
    c.fill();
    if (stroke) {
      c.lineWidth = stroke.w * this.s;
      c.strokeStyle = stroke.color;
      c.stroke();
    }
    return this;
  }
  circle(x: number, z: number, r: number, color: string) {
    const c = this.ctx;
    c.beginPath();
    c.arc(this.px(x), this.pz(z), r * this.s, 0, Math.PI * 2);
    c.fillStyle = color;
    c.fill();
    return this;
  }
  ring(x: number, z: number, r: number, w: number, color: string) {
    const c = this.ctx;
    c.beginPath();
    c.arc(this.px(x), this.pz(z), r * this.s, 0, Math.PI * 2);
    c.lineWidth = w * this.s;
    c.strokeStyle = color;
    c.stroke();
    return this;
  }
  poly(pts: Pt[], color: string) {
    const c = this.ctx;
    c.beginPath();
    pts.forEach(([x, z], i) => (i ? c.lineTo(this.px(x), this.pz(z)) : c.moveTo(this.px(x), this.pz(z))));
    c.closePath();
    c.fillStyle = color;
    c.fill();
    return this;
  }
  /** Stroke a polyline (optionally smooth & dashed). */
  path(pts: Pt[], w: number, color: string, o: { dash?: [number, number]; smooth?: boolean; cap?: CanvasLineCap } = {}) {
    const c = this.ctx;
    c.save();
    c.beginPath();
    if (o.smooth && pts.length > 2) {
      c.moveTo(this.px(pts[0][0]), this.pz(pts[0][1]));
      for (let i = 1; i < pts.length - 1; i++) {
        const mx = (pts[i][0] + pts[i + 1][0]) / 2, mz = (pts[i][1] + pts[i + 1][1]) / 2;
        c.quadraticCurveTo(this.px(pts[i][0]), this.pz(pts[i][1]), this.px(mx), this.pz(mz));
      }
      const l = pts[pts.length - 1];
      c.lineTo(this.px(l[0]), this.pz(l[1]));
    } else {
      pts.forEach(([x, z], i) => (i ? c.lineTo(this.px(x), this.pz(z)) : c.moveTo(this.px(x), this.pz(z))));
    }
    c.lineWidth = w * this.s;
    c.lineCap = o.cap ?? 'round';
    c.lineJoin = 'round';
    c.strokeStyle = color;
    if (o.dash) c.setLineDash([o.dash[0] * this.s, o.dash[1] * this.s]);
    c.stroke();
    c.restore();
    return this;
  }

  /** Straight road with lane markings. Horizontal if z0 === z1, else vertical. */
  road(
    x0: number, z0: number, x1: number, z1: number, width: number,
    o: { asphalt?: string; line?: string; center?: 'dashed' | 'double' | 'none'; lanes?: number; edge?: boolean; edgeColor?: string } = {},
  ) {
    const horiz = Math.abs(z1 - z0) < Math.abs(x1 - x0);
    const asphalt = o.asphalt ?? '#4a4d57';
    const line = o.line ?? '#f4f4ee';
    const hw = width / 2;
    if (horiz) this.rect(Math.min(x0, x1), z0 - hw, Math.max(x0, x1), z0 + hw, asphalt);
    else this.rect(x0 - hw, Math.min(z0, z1), x0 + hw, Math.max(z0, z1), asphalt);
    // subtle wear
    this.speckle(horiz ? Math.min(x0, x1) : x0 - hw, horiz ? z0 - hw : Math.min(z0, z1), horiz ? Math.max(x0, x1) : x0 + hw, horiz ? z0 + hw : Math.max(z0, z1), ['rgba(0,0,0,0.08)', 'rgba(255,255,255,0.04)'], 0.25, 0.12);
    const seg = (off: number, dash?: [number, number], color = line, w = 0.15) => {
      if (horiz) this.path([[x0, z0 + off], [x1, z1 + off]], w, color, { dash, cap: 'butt' });
      else this.path([[x0 + off, z0], [x1 + off, z1]], w, color, { dash, cap: 'butt' });
    };
    const center = o.center ?? 'dashed';
    if (center === 'dashed') seg(0, [2.2, 2.2]);
    if (center === 'double') {
      seg(-0.16, undefined, o.edgeColor ?? '#ffd23f', 0.12);
      seg(0.16, undefined, o.edgeColor ?? '#ffd23f', 0.12);
    }
    const lanes = o.lanes ?? 2;
    if (lanes >= 4) {
      seg(-hw / 2, [2.2, 2.2]);
      seg(hw / 2, [2.2, 2.2]);
    }
    if (o.edge !== false) {
      seg(-hw + 0.35, undefined, line, 0.12);
      seg(hw - 0.35, undefined, line, 0.12);
    }
    return this;
  }

  /** Zebra crossing centred at (x, z). axis 'x' => stripes run along x. */
  crosswalk(x: number, z: number, along: number, across: number, axis: 'x' | 'z', color = '#f4f4ee') {
    const n = Math.floor(along / 0.9);
    for (let i = 0; i < n; i++) {
      const o = -along / 2 + 0.45 + i * 0.9;
      if (axis === 'x') this.rect(x + o - 0.25, z - across / 2, x + o + 0.25, z + across / 2, color);
      else this.rect(x - across / 2, z + o - 0.25, x + across / 2, z + o + 0.25, color);
    }
    return this;
  }

  /** Random speckles (grass blades, gravel, sand grain). */
  speckle(x0: number, z0: number, x1: number, z1: number, colors: string[], density: number, size: number) {
    const area = (x1 - x0) * (z1 - z0);
    const n = Math.min(60000, Math.floor(area * density * 10 * Math.min(1, (this.s / 18) ** 2)));
    const c = this.ctx;
    const r = this.speckRng;
    const sz = Math.max(1, size * this.s);
    for (let i = 0; i < n; i++) {
      c.fillStyle = colors[i % colors.length];
      const x = this.px(r.range(x0, x1)), y = this.pz(r.range(z0, z1));
      c.fillRect(x, y, sz * r.range(0.6, 1.4), sz * r.range(0.6, 1.4));
    }
    return this;
  }

  /** Soft blotches for natural variation. */
  blotches(x0: number, z0: number, x1: number, z1: number, colors: string[], count: number, rMin: number, rMax: number) {
    const c = this.ctx;
    for (let i = 0; i < count; i++) {
      const x = this.px(this.rng.range(x0, x1)), y = this.pz(this.rng.range(z0, z1));
      const rr = this.rng.range(rMin, rMax) * this.s;
      const g = c.createRadialGradient(x, y, 0, x, y, rr);
      g.addColorStop(0, colors[i % colors.length]);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g;
      c.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    return this;
  }

  /** Mowed-lawn stripes. */
  stripes(x0: number, z0: number, x1: number, z1: number, color: string, w: number, axis: 'x' | 'z' = 'x') {
    const c = this.ctx;
    c.save();
    c.beginPath();
    c.rect(this.px(x0), this.pz(z0), (x1 - x0) * this.s, (z1 - z0) * this.s);
    c.clip();
    c.fillStyle = color;
    if (axis === 'x') for (let x = x0; x < x1; x += w * 2) c.fillRect(this.px(x), this.pz(z0), w * this.s, (z1 - z0) * this.s);
    else for (let z = z0; z < z1; z += w * 2) c.fillRect(this.px(x0), this.pz(z), (x1 - x0) * this.s, w * this.s);
    c.restore();
    return this;
  }

  /** Paving tiles with grout lines. */
  tiles(x0: number, z0: number, x1: number, z1: number, tile: number, a: string, b: string | null, grout: string, groutW = 0.04) {
    this.rect(x0, z0, x1, z1, a);
    if (b) {
      for (let x = x0, i = 0; x < x1; x += tile, i++)
        for (let z = z0, j = 0; z < z1; z += tile, j++) if ((i + j) % 2) this.rect(x, z, Math.min(x1, x + tile), Math.min(z1, z + tile), b);
    }
    const c = this.ctx;
    c.fillStyle = grout;
    const gw = Math.max(1, groutW * this.s);
    for (let x = x0; x <= x1; x += tile) c.fillRect(this.px(x) - gw / 2, this.pz(z0), gw, (z1 - z0) * this.s);
    for (let z = z0; z <= z1; z += tile) c.fillRect(this.px(x0), this.pz(z) - gw / 2, (x1 - x0) * this.s, gw);
    return this;
  }

  /** Glowing grid lines (neon level). */
  grid(x0: number, z0: number, x1: number, z1: number, step: number, color: string, w: number) {
    const c = this.ctx;
    c.save();
    c.strokeStyle = color;
    c.lineWidth = Math.max(1, w * this.s);
    c.shadowColor = color;
    c.shadowBlur = 6;
    c.beginPath();
    for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) {
      c.moveTo(this.px(x), this.pz(z0));
      c.lineTo(this.px(x), this.pz(z1));
    }
    for (let z = Math.ceil(z0 / step) * step; z <= z1; z += step) {
      c.moveTo(this.px(x0), this.pz(z));
      c.lineTo(this.px(x1), this.pz(z));
    }
    c.stroke();
    c.restore();
    return this;
  }

  /** Soft circular shadow / glow decal. */
  glow(x: number, z: number, r: number, color: string) {
    const c = this.ctx;
    const X = this.px(x), Y = this.pz(z), R = r * this.s;
    const g = c.createRadialGradient(X, Y, 0, X, Y, R);
    g.addColorStop(0, color);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = g;
    c.fillRect(X - R, Y - R, R * 2, R * 2);
    return this;
  }

  text(x: number, z: number, str: string, size: number, color: string, rot = 0) {
    const c = this.ctx;
    c.save();
    c.translate(this.px(x), this.pz(z));
    c.rotate(rot);
    c.font = `800 ${size * this.s}px Unbounded, sans-serif`;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillStyle = color;
    c.fillText(str, 0, 0);
    c.restore();
    return this;
  }

  /** Parking bay lines along x starting at (x, z). */
  parking(x0: number, z: number, count: number, bayW: number, depth: number, dir: 1 | -1, color = '#f4f4ee') {
    for (let i = 0; i <= count; i++) {
      const x = x0 + i * bayW;
      this.path([[x, z], [x, z + depth * dir]], 0.12, color, { cap: 'butt' });
    }
    return this;
  }

  texture(anisotropy = 4): THREE.CanvasTexture {
    const t = new THREE.CanvasTexture(this.canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = anisotropy;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.needsUpdate = true;
    return t;
  }
}
