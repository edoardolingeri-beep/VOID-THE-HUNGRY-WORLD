import * as THREE from 'three';
import { ModelBuilder } from './ModelBuilder';
import { getPropDef, type PropDef } from './props';
import { RNG, hashString } from '../engine/utils';

/** Pre-computed data for one prop variant (geometry shared by all instances). */
export interface PropAsset {
  def: PropDef;
  variant: number;
  geometry: THREE.BufferGeometry;
  /** Half extents of the footprint (local X / Z, max abs). */
  hx: number;
  hz: number;
  height: number;
  /** Hole radius required to swallow it. */
  size: number;
  /** Growth value. */
  mass: number;
  /** Average colour, used for particles. */
  color: THREE.Color;
}

const cache = new Map<string, PropAsset>();

export function getPropAsset(id: string, variant = 0): PropAsset {
  const def = getPropDef(id);
  const nv = def.variants ?? 3;
  const v = ((variant % nv) + nv) % nv;
  const key = `${id}#${v}`;
  let a = cache.get(key);
  if (a) return a;
  const b = new ModelBuilder();
  def.build(b, new RNG(hashString(key)), v);
  const geometry = b.build();
  const bb = geometry.boundingBox!;
  const hx = Math.max(Math.abs(bb.min.x), Math.abs(bb.max.x));
  const hz = Math.max(Math.abs(bb.min.z), Math.abs(bb.max.z));
  const height = Math.max(0.05, bb.max.y);
  const size = def.size ?? Math.max(hx, hz, height * (def.heightFactor ?? 0.3));
  const effective = Math.max(size, 0.12);
  const mass = effective * effective * 2 * (def.mass ?? 1);
  // average colour from the vertex colours
  const col = geometry.getAttribute('color') as THREE.BufferAttribute;
  const color = new THREE.Color(0, 0, 0);
  const step = Math.max(1, Math.floor(col.count / 400));
  let n = 0;
  for (let i = 0; i < col.count; i += step) {
    color.r += Math.min(1, col.getX(i));
    color.g += Math.min(1, col.getY(i));
    color.b += Math.min(1, col.getZ(i));
    n++;
  }
  if (n) color.multiplyScalar(1 / n);
  a = { def, variant: v, geometry, hx, hz, height, size, mass, color };
  cache.set(key, a);
  return a;
}

export function variantCount(id: string) {
  return getPropDef(id).variants ?? 3;
}
