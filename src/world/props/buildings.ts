import { PAL } from './types';
import type { ModelBuilder } from '../ModelBuilder';
import type { RNG } from '../../engine/utils';
import { awning } from './propsCity';

export interface BuildingStyle {
  w: number;
  d: number;
  floors: number;
  floorH?: number;
  color: string;
  trim?: string;
  window?: string;
  /** Night mode: windows glow. */
  night?: boolean;
  roof?: 'flat' | 'gable' | 'tower' | 'garden' | 'antenna' | 'none';
  shop?: { awning: string; sign: string } | null;
  roofColor?: string;
  glassTower?: boolean;
  setbacks?: number;
}

/** Procedural building with windows, door, roof details. Base at y=0. */
export function buildBuilding(b: ModelBuilder, rng: RNG, s: BuildingStyle) {
  const fh = s.floorH ?? 3.1;
  const trim = s.trim ?? '#e9e4da';
  const win = s.window ?? (s.night ? '#1d2440' : '#5d8fbf');
  const lit = s.night ? '#ffd88a' : '#9fd0ff';
  const tiers = s.setbacks ?? 0;
  let w = s.w, d = s.d, y = 0;
  const tierFloors = tiers ? Math.ceil(s.floors / (tiers + 1)) : s.floors;
  let floorsLeft = s.floors;
  let first = true;
  while (floorsLeft > 0) {
    const f = Math.min(tierFloors, floorsLeft);
    const h = f * fh + (first ? 0.6 : 0);
    if (s.glassTower) {
      b.boxB(w, h, d, s.night ? '#1b2448' : '#7fb3d8', 0, y, 0);
      for (let i = 0; i <= f; i++) b.boxB(w + 0.08, 0.14, d + 0.08, s.color, 0, y + (first ? 0.6 : 0) + i * fh - 0.07, 0);
      const cols = Math.max(2, Math.round(w / 2.2));
      for (let c = 0; c <= cols; c++) {
        const x = -w / 2 + (w / cols) * c;
        b.boxB(0.14, h, 0.14, s.color, x, y, d / 2);
        b.boxB(0.14, h, 0.14, s.color, x, y, -d / 2);
      }
      const rowsD = Math.max(2, Math.round(d / 2.2));
      for (let c = 0; c <= rowsD; c++) {
        const z = -d / 2 + (d / rowsD) * c;
        b.boxB(0.14, h, 0.14, s.color, w / 2, y, z);
        b.boxB(0.14, h, 0.14, s.color, -w / 2, y, z);
      }
      if (s.night) {
        for (const face of [0, 1, 2, 3] as const) {
          const along = face < 2 ? w : d;
          b.windows(face, w, d, 0, 0, y + (first ? 0.6 : 0), y + h, Math.max(2, Math.round(along / 2.2)), f, win, {
            ww: (along / Math.max(2, Math.round(along / 2.2))) * 0.8, wh: fh * 0.7, litColor: lit, litChance: 0.4, rnd: () => rng.next(), glow: 1.2,
          });
        }
      }
    } else {
      b.boxB(w, h, d, s.color, 0, y, 0);
      // floor trims
      for (let i = 1; i <= f; i++) b.boxB(w + 0.1, 0.12, d + 0.1, trim, 0, y + (first ? 0.6 : 0) + i * fh - 0.12, 0);
      const startY = y + (first ? 0.6 : 0) + (first && s.shop ? fh : 0);
      const rows = f - (first && s.shop ? 1 : 0);
      if (rows > 0) {
        for (const face of [0, 1, 2, 3] as const) {
          const along = face < 2 ? w : d;
          const cols = Math.max(1, Math.round(along / 2.0));
          b.windows(face, w, d, 0, 0, startY, startY + rows * fh, cols, rows, win, {
            ww: Math.min(1.2, (along / cols) * 0.55), wh: fh * 0.5, litColor: lit, litChance: s.night ? 0.55 : 0.12, rnd: () => rng.next(), glow: 1.15,
          });
        }
      }
    }
    if (first) {
      // door + optional storefront
      if (s.shop) {
        b.box(w * 0.8, fh * 0.6, 0.04, s.night ? '#ffe7a8' : '#bfe6ff', 0, 0.6 + fh * 0.38, d / 2 + 0.03, { emissive: !!s.night, glow: 1.1 });
        awning(b, w * 0.86, 1.0, 0.6 + fh * 0.82, d / 2 + 0.5, s.shop.awning, '#ffffff');
        b.box(w * 0.5, 0.45, 0.06, s.shop.sign, 0, 0.6 + fh * 0.98 + 0.25, d / 2 + 0.05, { emissive: true, glow: 1.2 });
      } else {
        b.box(1.2, 2.1, 0.06, '#5a3d2a', 0, 1.05 + 0.3, d / 2 + 0.03);
        b.box(1.6, 0.1, 0.6, trim, 0, 2.55, d / 2 + 0.3);
      }
      b.boxB(w + 0.2, 0.6, d + 0.2, '#9a9da6', 0, 0, 0);
    }
    y += h;
    floorsLeft -= f;
    first = false;
    if (floorsLeft > 0) {
      w *= 0.78;
      d *= 0.78;
    }
  }
  // roof
  const rc = s.roofColor ?? '#6b6f7a';
  switch (s.roof ?? 'flat') {
    case 'gable':
      b.extrude([[-w / 2 - 0.2, 0], [w / 2 + 0.2, 0], [0, Math.min(3, w * 0.4)]], d + 0.3, rc, 0, y, 0);
      break;
    case 'tower':
      b.boxB(w * 0.6, 2.5, d * 0.6, s.color, 0, y, 0);
      b.cone(Math.max(w, d) * 0.45, 4, rc, 0, y + 4.5, 0, 4, { ry: Math.PI / 4 });
      break;
    case 'garden':
      b.boxB(w, 0.3, d, trim, 0, y, 0);
      for (let i = 0; i < 5; i++) b.ico(0.8, PAL.leaf, rng.range(-w / 3, w / 3), y + 0.7, rng.range(-d / 3, d / 3), 0);
      break;
    case 'antenna':
      b.boxB(w + 0.2, 0.4, d + 0.2, trim, 0, y, 0);
      b.boxB(w * 0.4, 1.6, d * 0.4, '#8a8f9a', 0, y + 0.4, 0);
      b.cylB(0.12, 0.2, 7, '#c9ccd6', 0, y + 2, 0, 6);
      b.sphere(0.3, '#ff3045', 0, y + 9.1, 0, { emissive: true, glow: 2 });
      break;
    case 'none':
      break;
    default:
      b.boxB(w + 0.2, 0.4, d + 0.2, trim, 0, y, 0);
      if (rng.chance(0.7)) b.boxB(Math.min(2.4, w * 0.3), 1.4, Math.min(2.4, d * 0.3), '#8a8f9a', rng.range(-w / 4, w / 4), y + 0.4, rng.range(-d / 4, d / 4));
      if (rng.chance(0.5)) b.cylB(0.7, 0.7, 1.6, '#a7abb5', rng.range(-w / 4, w / 4), y + 0.4, rng.range(-d / 4, d / 4), 8);
  }
}
