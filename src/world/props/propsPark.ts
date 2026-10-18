import { defineProps, PAL } from './types';
import type { ModelBuilder } from '../ModelBuilder';
import type { RNG } from '../../engine/utils';

/** Reusable low-poly tree. */
export function buildTree(b: ModelBuilder, rng: RNG, h: number, kind: 'round' | 'pine' | 'tall' | 'blossom', leaf?: string) {
  const trunkH = h * (kind === 'pine' ? 0.25 : 0.42);
  b.cylB(h * 0.045, h * 0.06, trunkH, PAL.trunk, 0, 0, 0, 7);
  if (kind === 'pine') {
    const c = leaf ?? '#2f8a43';
    b.cone(h * 0.32, h * 0.42, c, 0, trunkH + h * 0.2, 0, 8);
    b.cone(h * 0.25, h * 0.36, '#3b9c50', 0, trunkH + h * 0.42, 0, 8);
    b.cone(h * 0.16, h * 0.3, '#47ad5b', 0, trunkH + h * 0.62, 0, 8);
  } else if (kind === 'tall') {
    const c = leaf ?? PAL.leaf;
    b.ico(h * 0.22, c, 0, trunkH + h * 0.18, 0, 1, { sy: 1.5 });
    b.ico(h * 0.15, PAL.leafLight, h * 0.05, trunkH + h * 0.4, h * 0.03, 0);
  } else {
    const c = leaf ?? (kind === 'blossom' ? '#ff9ec8' : PAL.leaf);
    const c2 = kind === 'blossom' ? '#ffc2dc' : PAL.leafLight;
    b.ico(h * 0.3, c, 0, trunkH + h * 0.22, 0, 1);
    b.ico(h * 0.2, c2, h * 0.16, trunkH + h * 0.36, h * 0.08, 0);
    b.ico(h * 0.18, kind === 'blossom' ? '#f77fb5' : PAL.leafDark, -h * 0.17, trunkH + h * 0.16, -h * 0.1, 0);
    if (rng.chance(0.5)) b.ico(h * 0.15, c, h * 0.05, trunkH + h * 0.12, h * 0.2, 0);
  }
}

defineProps([
  {
    id: 'bush',
    name: 'Bush',
    points: 30,
    tags: ['small', 'nature'],
    sound: 'organic',
    variants: 3,
    blurb: 'Leafy fibre for a balanced diet.',
    build(b, r, v) {
      const c = [PAL.leaf, PAL.leafDark, '#5cb85c'][v % 3];
      b.ico(0.42, c, 0, 0.36, 0, 1, { sy: 0.8 });
      b.ico(0.3, PAL.leafLight, 0.28, 0.3, 0.1, 0);
      b.ico(0.28, c, -0.25, 0.26, -0.12, 0);
      if (v === 2) for (let i = 0; i < 5; i++) b.ico(0.05, PAL.pink, r.range(-0.4, 0.4), r.range(0.4, 0.62), r.range(-0.3, 0.3), 0);
    },
  },
  {
    id: 'bench',
    name: 'Park Bench',
    points: 75,
    tags: ['medium'],
    sound: 'wood',
    variants: 2,
    blurb: 'Have a seat. Forever.',
    build(b, _r, v) {
      const w = v ? PAL.wood : '#c9874d';
      for (const x of [-0.65, 0.65]) {
        b.boxB(0.07, 0.42, 0.5, '#33363f', x, 0, 0);
        b.boxB(0.07, 0.5, 0.07, '#33363f', x, 0.42, -0.24, { rx: -0.15 });
        b.boxB(0.07, 0.04, 0.45, '#33363f', x, 0.62, 0.02);
      }
      for (let i = 0; i < 3; i++) b.boxB(1.6, 0.04, 0.13, w, 0, 0.42, -0.17 + i * 0.16);
      for (let i = 0; i < 2; i++) b.box(1.6, 0.13, 0.04, w, 0, 0.62 + i * 0.17, -0.27 - i * 0.025, { rx: -0.15 });
    },
  },
  {
    id: 'bicycle',
    name: 'Bicycle',
    points: 75,
    tags: ['medium', 'vehicle'],
    sound: 'metal',
    variants: 4,
    blurb: 'Two wheels, zero escape.',
    build(b, _r, v) {
      const c = ['#e8423f', '#3d7bf0', '#3fbf6a', '#ffd23f'][v % 4];
      b.torus(0.32, 0.035, PAL.tire, 0.55, 0.34, 0, { ts: 16 });
      b.torus(0.32, 0.035, PAL.tire, -0.55, 0.34, 0, { ts: 16 });
      b.cyl(0.03, 0.03, 0.62, c, 0.0, 0.52, 0, 6, { rz: 1.2 });
      b.cyl(0.03, 0.03, 0.7, c, 0.22, 0.6, 0, 6, { rz: -1.0 });
      b.cyl(0.03, 0.03, 0.5, c, -0.32, 0.5, 0, 6, { rz: 0.6 });
      b.cyl(0.03, 0.03, 0.6, c, 0.48, 0.55, 0, 6, { rz: 0.35 });
      b.cyl(0.03, 0.03, 0.55, c, -0.4, 0.38, 0, 6, { rz: Math.PI / 2 });
      b.box(0.24, 0.05, 0.1, PAL.black, -0.18, 0.84, 0);
      b.cyl(0.02, 0.02, 0.5, PAL.darkMetal, 0.42, 0.88, 0, 6, { rx: Math.PI / 2 });
      b.cylB(0.02, 0.02, 0.1, PAL.darkMetal, -0.18, 0.74, 0, 6);
    },
  },
  {
    id: 'smalltree',
    name: 'Young Tree',
    points: 90,
    tags: ['medium', 'nature'],
    sound: 'organic',
    variants: 4,
    heightFactor: 0.28,
    blurb: 'Roots and all.',
    build(b, r, v) {
      buildTree(b, r, 2.6 + r.range(-0.2, 0.3), (['round', 'pine', 'tall', 'blossom'] as const)[v % 4]);
    },
  },
  {
    id: 'tree',
    name: 'Tree',
    points: 160,
    tags: ['nature'],
    sound: 'organic',
    variants: 4,
    heightFactor: 0.26,
    blurb: 'A whole ecosystem, one bite.',
    build(b, r, v) {
      buildTree(b, r, 5.2 + r.range(-0.4, 0.6), (['round', 'pine', 'tall', 'round'] as const)[v % 4]);
    },
  },
  {
    id: 'bigtree',
    name: 'Old Oak',
    points: 260,
    tags: ['nature'],
    sound: 'organic',
    variants: 2,
    heightFactor: 0.25,
    blurb: 'Centuries old. Seconds to swallow.',
    build(b, r) {
      buildTree(b, r, 8.5 + r.range(-0.5, 0.5), 'round');
    },
  },
  {
    id: 'planter',
    name: 'Flower Planter',
    points: 75,
    tags: ['medium', 'nature'],
    sound: 'wood',
    variants: 3,
    blurb: 'Bloom where you are swallowed.',
    build(b, r, v) {
      b.cylB(0.6, 0.55, 0.5, v === 1 ? '#d8d2c4' : PAL.concrete, 0, 0, 0, 10);
      b.cylB(0.55, 0.55, 0.04, '#5a3d2a', 0, 0.48, 0, 10);
      const fc = ['#ff7eb6', '#ffd23f', '#a78bfa'][v % 3];
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * Math.PI * 2, rr = i % 2 ? 0.38 : 0.2;
        b.ico(0.13, i % 3 ? PAL.leaf : PAL.leafDark, Math.cos(a) * rr, 0.6, Math.sin(a) * rr, 0);
        b.ico(0.06, fc, Math.cos(a) * rr, 0.72 + r.range(0, 0.05), Math.sin(a) * rr, 0);
      }
    },
  },
  {
    id: 'litterbasket',
    name: 'Litter Basket',
    points: 40,
    tags: ['small'],
    sound: 'metal',
    variants: 1,
    blurb: 'Recycled. Permanently.',
    build(b) {
      b.cylB(0.06, 0.06, 0.5, '#33363f', 0, 0, 0, 6);
      b.cylB(0.26, 0.22, 0.6, '#2f7d4a', 0, 0.3, 0, 10);
      b.cylB(0.27, 0.27, 0.05, '#33363f', 0, 0.9, 0, 10);
      b.cylB(0.2, 0.2, 0.02, PAL.black, 0, 0.92, 0, 10);
    },
  },
  {
    id: 'picnictable',
    name: 'Picnic Table',
    points: 85,
    tags: ['medium'],
    sound: 'wood',
    variants: 1,
    blurb: 'Lunch is served.',
    build(b) {
      b.boxB(1.8, 0.06, 0.8, PAL.wood, 0, 0.72, 0);
      for (const z of [-0.65, 0.65]) b.boxB(1.8, 0.05, 0.3, PAL.wood, 0, 0.42, z);
      for (const x of [-0.7, 0.7]) {
        b.box(0.08, 0.95, 0.08, PAL.darkWood, x, 0.4, 0.3, { rx: 0.6 });
        b.box(0.08, 0.95, 0.08, PAL.darkWood, x, 0.4, -0.3, { rx: -0.6 });
        b.boxB(0.08, 0.05, 1.6, PAL.darkWood, x, 0.38, 0);
      }
      b.boxB(0.5, 0.01, 0.4, '#e8423f', 0.3, 0.78, 0);
    },
  },
  {
    id: 'swing',
    name: 'Swing Set',
    points: 120,
    tags: ['medium'],
    sound: 'metal',
    variants: 2,
    blurb: 'Swing low, sweet void.',
    build(b, _r, v) {
      const c = v ? '#3d7bf0' : '#e8423f';
      for (const x of [-1.4, 1.4]) {
        b.cyl(0.06, 0.06, 2.3, c, x, 1.1, 0.5, 6, { rx: 0.42 });
        b.cyl(0.06, 0.06, 2.3, c, x, 1.1, -0.5, 6, { rx: -0.42 });
      }
      b.cyl(0.07, 0.07, 2.9, c, 0, 2.1, 0, 8, { rz: Math.PI / 2 });
      for (const x of [-0.6, 0.6]) {
        b.box(0.02, 1.5, 0.02, PAL.metal, x - 0.2, 1.35, 0);
        b.box(0.02, 1.5, 0.02, PAL.metal, x + 0.2, 1.35, 0);
        b.boxB(0.5, 0.05, 0.22, PAL.yellow, x, 0.55, 0);
      }
    },
  },
  {
    id: 'slide',
    name: 'Playground Slide',
    points: 130,
    tags: ['medium'],
    sound: 'plastic',
    variants: 2,
    blurb: 'Wheee — gulp.',
    build(b, _r, v) {
      const c = v ? '#ffd23f' : '#22c3b5';
      for (const x of [-0.45, 0.45]) for (const z of [-0.4, 0.4]) b.boxB(0.08, 1.4, 0.08, PAL.red, -0.8 + x * 0.6, 0, z);
      b.boxB(0.9, 0.08, 0.9, PAL.blue, -0.8, 1.35, 0);
      b.cone(0.65, 0.6, PAL.red, -0.8, 2.3, 0, 4, { ry: Math.PI / 4 });
      b.box(2.3, 0.07, 0.6, c, 0.55, 0.72, 0, { rz: -0.6 });
      b.box(2.3, 0.15, 0.05, c, 0.55, 0.8, 0.3, { rz: -0.6 });
      b.box(2.3, 0.15, 0.05, c, 0.55, 0.8, -0.3, { rz: -0.6 });
      for (let i = 0; i < 5; i++) b.box(0.05, 0.05, 0.7, PAL.metal, -1.4, 0.25 + i * 0.25, 0);
    },
  },
  {
    id: 'seesaw',
    name: 'Seesaw',
    points: 90,
    tags: ['medium'],
    sound: 'metal',
    variants: 1,
    blurb: 'Up, down, gone.',
    build(b) {
      b.cone(0.3, 0.45, PAL.blue, 0, 0.22, 0, 4, { ry: Math.PI / 4 });
      b.box(2.8, 0.07, 0.3, PAL.orange, 0, 0.46, 0, { rz: 0.12 });
      for (const x of [-1.2, 1.2]) b.boxB(0.05, 0.25, 0.4, PAL.darkMetal, x, 0.46 + x * 0.12, 0);
    },
  },
  {
    id: 'birdbath',
    name: 'Birdbath',
    points: 70,
    tags: ['medium'],
    sound: 'glass',
    variants: 1,
    blurb: 'The birds will have to manage.',
    build(b) {
      // hollow bowl so the water sits clearly below the rim (no coplanar faces)
      b.lathe([[0, 0], [0.3, 0], [0.28, 0.08], [0.1, 0.15], [0.08, 0.8], [0.45, 0.94], [0.5, 1.02], [0.44, 1.02], [0.4, 0.96], [0, 0.93]], '#d8d2c4', 0, 0, 0, 14);
      b.cylB(0.405, 0.38, 0.03, '#7fd4ee', 0, 0.94, 0, 16);
    },
  },
  {
    id: 'fountain',
    name: 'Grand Fountain',
    points: 900,
    tags: ['landmark'],
    sound: 'heavy',
    variants: 1,
    heightFactor: 0.2,
    blurb: 'Make a wish. The wish was hunger.',
    build(b) {
      const stone = '#ddd6c6', stone2 = '#cfc7b5', water = '#69c8ec', foam = '#e4f7ff';
      // lower basin: hollow dish (rim at 0.6, floor at 0.2) with water well below the rim
      b.lathe([[0, 0], [3.1, 0], [3.15, 0.5], [3.05, 0.62], [2.82, 0.62], [2.78, 0.22], [0, 0.22]], stone, 0, 0, 0, 24);
      b.cylB(2.76, 2.76, 0.2, water, 0, 0.24, 0, 24);
      // central column
      b.cylB(0.55, 0.75, 1.45, stone2, 0, 0.22, 0, 14);
      // middle bowl
      b.lathe([[0.4, 1.62], [1.35, 1.72], [1.48, 1.98], [1.36, 1.98], [1.28, 1.8], [0.4, 1.8]], stone, 0, 0, 0, 20);
      b.cylB(1.27, 1.27, 0.1, water, 0, 1.8, 0, 20);
      b.cylB(0.22, 0.32, 0.85, stone2, 0, 1.8, 0, 12);
      // top bowl
      b.lathe([[0.2, 2.6], [0.66, 2.66], [0.72, 2.84], [0.62, 2.84], [0.58, 2.72], [0.2, 2.72]], stone, 0, 0, 0, 16);
      b.cylB(0.57, 0.57, 0.08, water, 0, 2.72, 0, 16);
      // water jets and falling curtains (opaque, so nothing flickers under bloom)
      b.cone(0.13, 0.75, foam, 0, 3.15, 0, 10);
      b.cylB(0.6, 0.68, 0.86, water, 0, 1.84, 0, 18);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        b.cone(0.06, 0.55, foam, Math.cos(a) * 1.9, 0.7, Math.sin(a) * 1.9, 8, { rz: Math.cos(a) * 0.45, rx: -Math.sin(a) * 0.45 });
      }
    },
  },
  {
    id: 'parkbin_lamp',
    name: 'Garden Lantern',
    points: 50,
    tags: ['small'],
    sound: 'metal',
    variants: 1,
    heightFactor: 0.25,
    blurb: 'A gentle glow, extinguished.',
    build(b) {
      b.cylB(0.1, 0.12, 0.15, '#33363f', 0, 0, 0, 8);
      b.cylB(0.04, 0.04, 1.6, '#33363f', 0, 0.15, 0, 6);
      b.boxB(0.26, 0.32, 0.26, '#fff0b8', 0, 1.75, 0, { emissive: true, glow: 1.3 });
      b.cone(0.24, 0.2, '#33363f', 0, 2.17, 0, 4, { ry: Math.PI / 4 });
    },
  },
  {
    id: 'springrider',
    name: 'Spring Rider',
    points: 60,
    tags: ['medium'],
    sound: 'plastic',
    variants: 2,
    blurb: 'Boing!',
    build(b, _r, v) {
      const c = v ? '#ffd23f' : '#3fbf6a';
      b.cylB(0.25, 0.25, 0.04, PAL.darkMetal, 0, 0, 0, 10);
      b.torus(0.1, 0.03, PAL.metal, 0, 0.12, 0, { rx: Math.PI / 2 });
      b.torus(0.1, 0.03, PAL.metal, 0, 0.22, 0, { rx: Math.PI / 2 });
      b.sphere(0.32, c, 0, 0.5, 0, { sx: 1.4, sy: 0.75 });
      b.sphere(0.2, c, 0.38, 0.75, 0);
      b.sphere(0.05, PAL.black, 0.5, 0.82, 0.12, { w: 5, hs: 4 });
      b.sphere(0.05, PAL.black, 0.5, 0.82, -0.12, { w: 5, hs: 4 });
    },
  },
]);
