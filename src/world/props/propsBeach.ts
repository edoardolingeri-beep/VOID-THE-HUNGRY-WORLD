import { defineProps, PAL } from './types';
import { stripedCanopy } from './propsCity';
import type { ModelBuilder } from '../ModelBuilder';
import type { RNG } from '../../engine/utils';

const beachCols = ['#ff5a5f', '#3d7bf0', '#ffd23f', '#22c3b5', '#ff7eb6', '#ff8a2a'];

export function buildPalm(b: ModelBuilder, rng: RNG, h: number) {
  const segs = 7;
  const lean = rng.range(0.4, 1.0) * rng.sign();
  let x = 0, y = 0;
  for (let i = 0; i < segs; i++) {
    const t = i / segs;
    const nx = lean * t * t * h * 0.25;
    b.cyl(h * 0.035 * (1 - t * 0.35), h * 0.042 * (1 - t * 0.3), h / segs + 0.05, i % 2 ? '#a77b4e' : '#8f6640', nx, y + h / segs / 2, 0, 7, { rz: -lean * t * 0.5 });
    x = nx;
    y += h / segs;
  }
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + rng.next();
    b.box(h * 0.42, 0.06, h * 0.11, i % 2 ? '#3fae4a' : '#2f8f3c', x + Math.cos(a) * h * 0.18, y - 0.15, Math.sin(a) * h * 0.18, { ry: -a, rz: -0.45 });
  }
  b.ico(h * 0.05, '#7a5236', x, y - 0.2, 0, 0);
  b.ico(h * 0.04, '#7a5236', x + 0.15, y - 0.3, 0.1, 0);
}

defineProps([
  {
    id: 'beachball',
    name: 'Beach Ball',
    points: 15,
    tags: ['small'],
    sound: 'plastic',
    variants: 3,
    blurb: 'Inflated ego, deflated future.',
    build(b, _r, v) {
      b.sphere(0.3, beachCols[v % 6], 0, 0.3, 0, { w: 12, hs: 8 });
      b.sphere(0.302, PAL.white, 0, 0.3, 0, { w: 12, hs: 8, sx: 0.4 });
      b.sphere(0.303, beachCols[(v + 2) % 6], 0, 0.3, 0, { w: 12, hs: 8, sz: 0.4 });
    },
  },
  {
    id: 'bucket',
    name: 'Sand Bucket',
    points: 12,
    tags: ['small'],
    sound: 'plastic',
    variants: 3,
    blurb: 'Comes with a spade. Leaves with nothing.',
    build(b, _r, v) {
      const c = beachCols[(v * 2) % 6];
      b.lathe([[0, 0], [0.13, 0], [0.17, 0.25], [0, 0.25]], c, 0, 0, 0, 10);
      b.torus(0.15, 0.012, c, 0, 0.25, 0, { arc: Math.PI, ts: 8 });
      b.box(0.06, 0.03, 0.4, PAL.yellow, 0.25, 0.02, 0.0, { ry: 0.6 });
    },
  },
  {
    id: 'sandcastle',
    name: 'Sandcastle',
    points: 35,
    tags: ['small'],
    sound: 'organic',
    variants: 2,
    blurb: 'A kingdom falls.',
    build(b) {
      const s = '#e6c88a';
      b.boxB(0.7, 0.25, 0.7, s, 0, 0, 0);
      for (const x of [-0.3, 0.3]) for (const z of [-0.3, 0.3]) {
        b.cylB(0.12, 0.14, 0.45, s, x, 0, z, 8);
        b.cone(0.13, 0.15, '#d9b878', x, 0.52, z, 8);
      }
      b.cylB(0.16, 0.18, 0.6, s, 0, 0.2, 0, 8);
      b.cone(0.18, 0.2, '#d9b878', 0, 0.9, 0, 8);
      b.box(0.01, 0.12, 0.12, PAL.red, 0, 1.07, 0.06);
    },
  },
  {
    id: 'cooler',
    name: 'Cooler Box',
    points: 30,
    tags: ['small'],
    sound: 'plastic',
    variants: 3,
    blurb: 'Stay cool. In the void.',
    build(b, _r, v) {
      const c = ['#3d7bf0', '#e8423f', '#22c3b5'][v % 3];
      b.boxB(0.6, 0.4, 0.4, c, 0, 0, 0);
      b.boxB(0.62, 0.1, 0.42, PAL.white, 0, 0.4, 0);
      b.box(0.3, 0.04, 0.05, PAL.white, 0, 0.53, 0);
    },
  },
  {
    id: 'towel',
    name: 'Beach Towel',
    points: 15,
    tags: ['small'],
    sound: 'soft',
    variants: 4,
    noShadow: true,
    blurb: 'Folded. Swallowed.',
    build(b, _r, v) {
      const c = beachCols[v % 6];
      b.boxB(1.8, 0.03, 0.85, c, 0, 0, 0);
      for (let i = 0; i < 4; i++) b.boxB(0.18, 0.035, 0.85, PAL.white, -0.6 + i * 0.4, 0, 0);
    },
  },
  {
    id: 'flipflops',
    name: 'Flip-Flops',
    points: 10,
    tags: ['small'],
    sound: 'soft',
    variants: 3,
    noShadow: true,
    blurb: 'Flip. Flop. Plop.',
    build(b, _r, v) {
      const c = beachCols[(v + 1) % 6];
      for (const z of [-0.08, 0.08]) {
        b.boxB(0.28, 0.03, 0.11, c, 0, 0, z);
        b.torus(0.05, 0.008, PAL.white, 0.05, 0.03, z, { arc: Math.PI, ry: Math.PI / 2, ts: 6 });
      }
    },
  },
  {
    id: 'swimring',
    name: 'Swim Ring',
    points: 20,
    tags: ['small'],
    sound: 'plastic',
    variants: 3,
    blurb: 'It will not keep you afloat here.',
    build(b, _r, v) {
      b.torus(0.32, 0.12, beachCols[v % 6], 0, 0.12, 0, { rx: Math.PI / 2, ts: 14 });
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        b.sphere(0.125, PAL.white, Math.cos(a) * 0.32, 0.12, Math.sin(a) * 0.32, { sx: 0.5, w: 8, hs: 6 });
      }
    },
  },
  {
    id: 'beachumbrella',
    name: 'Beach Umbrella',
    points: 90,
    tags: ['medium'],
    sound: 'soft',
    variants: 6,
    blurb: 'Shade, then darkness.',
    build(b, r, v) {
      const tilt = r.range(-0.12, 0.12);
      b.cyl(0.035, 0.035, 2.3, PAL.white, 0, 1.12, 0, 6, { rz: tilt });
      b.push(-Math.sin(tilt) * 1.12, 2.02, 0, 0);
      stripedCanopy(b, 1.3, 0.5, 0, 12, beachCols[v % 6], PAL.white);
      b.pop();
    },
  },
  {
    id: 'lounger',
    name: 'Sun Lounger',
    points: 70,
    tags: ['medium'],
    sound: 'wood',
    variants: 4,
    blurb: 'Lie back. Further. Further.',
    build(b, _r, v) {
      const c = beachCols[(v + 3) % 6];
      for (const x of [-0.75, 0.45]) for (const z of [-0.3, 0.3]) b.boxB(0.05, 0.3, 0.05, PAL.white, x, 0, z);
      b.boxB(1.3, 0.06, 0.66, PAL.white, -0.15, 0.3, 0);
      b.boxB(1.25, 0.07, 0.6, c, -0.15, 0.34, 0);
      b.box(0.7, 0.07, 0.6, c, 0.75, 0.55, 0, { rz: 0.6 });
      b.box(0.7, 0.05, 0.66, PAL.white, 0.76, 0.52, 0, { rz: 0.6 });
    },
  },
  {
    id: 'deckchair',
    name: 'Deck Chair',
    points: 45,
    tags: ['small'],
    sound: 'wood',
    variants: 4,
    blurb: 'Folding under pressure.',
    build(b, _r, v) {
      const c = beachCols[v % 6];
      b.box(0.06, 1.0, 0.06, PAL.lightWood, -0.2, 0.45, 0.27, { rz: -0.6 });
      b.box(0.06, 1.0, 0.06, PAL.lightWood, -0.2, 0.45, -0.27, { rz: -0.6 });
      b.box(0.06, 0.8, 0.06, PAL.lightWood, 0.15, 0.35, 0.27, { rz: 0.5 });
      b.box(0.06, 0.8, 0.06, PAL.lightWood, 0.15, 0.35, -0.27, { rz: 0.5 });
      b.box(0.03, 0.9, 0.5, c, -0.12, 0.5, 0, { rz: -0.75 });
      b.box(0.031, 0.9, 0.16, PAL.white, -0.12, 0.5, 0, { rz: -0.75 });
    },
  },
  {
    id: 'surfboard',
    name: 'Surfboard',
    points: 60,
    tags: ['medium'],
    sound: 'plastic',
    variants: 5,
    blurb: 'Caught the biggest wave of all.',
    build(b, _r, v) {
      const c = beachCols[(v + 4) % 6];
      b.sphere(1.0, c, 0, 0.06, 0, { sx: 1.0, sy: 0.05, sz: 0.27, w: 14, hs: 6 });
      b.sphere(1.0, PAL.white, 0, 0.065, 0, { sx: 0.95, sy: 0.05, sz: 0.04, w: 14, hs: 6 });
      b.box(0.15, 0.12, 0.02, PAL.black, -0.85, 0.0, 0);
    },
  },
  {
    id: 'surfrack',
    name: 'Surf Rack',
    points: 160,
    tags: ['medium'],
    sound: 'wood',
    variants: 2,
    heightFactor: 0.25,
    blurb: 'Surf’s up. Then down.',
    build(b, r) {
      for (const x of [-1.0, 1.0]) b.boxB(0.12, 1.4, 0.8, PAL.wood, x, 0, 0);
      b.boxB(2.2, 0.1, 0.8, PAL.darkWood, 0, 0.4, 0);
      for (let i = 0; i < 4; i++) {
        b.sphere(1.0, r.pick(beachCols), -0.6 + i * 0.4, 1.2, 0, { sx: 0.06, sy: 1.0, sz: 0.27, w: 12, hs: 6, rz: 0.12 });
      }
    },
  },
  {
    id: 'beachhut',
    name: 'Beach Kiosk',
    points: 420,
    tags: ['commercial'],
    sound: 'wood',
    variants: 3,
    heightFactor: 0.22,
    blurb: 'Smoothies served until the end of the world.',
    build(b, _r, v) {
      const c = ['#ff7eb6', '#22c3b5', '#ffd23f'][v % 3];
      b.boxB(3.2, 2.4, 3.0, c, 0, 0, 0);
      for (let i = 0; i < 8; i++) b.boxB(0.06, 2.4, 0.04, PAL.white, -1.4 + i * 0.4, 0, 1.51);
      b.box(2.2, 0.9, 0.03, '#fff3c4', 0, 1.6, 1.53, { emissive: true, glow: 1.1 });
      b.boxB(2.6, 0.1, 0.6, PAL.lightWood, 0, 1.05, 1.75);
      b.cone(2.8, 1.6, '#d9b878', 0, 3.2, 0, 8);
      b.cone(2.9, 0.4, '#c9a868', 0, 2.55, 0, 8);
      for (let i = 0; i < 3; i++) b.cylB(0.18, 0.2, 0.8, PAL.white, -1 + i, 0, 2.3, 8);
    },
  },
  {
    id: 'lifeguard',
    name: 'Lifeguard Tower',
    points: 520,
    tags: ['building'],
    sound: 'wood',
    variants: 1,
    heightFactor: 0.2,
    blurb: 'No one can save it now.',
    build(b) {
      for (const x of [-1.1, 1.1]) for (const z of [-1.1, 1.1]) b.boxB(0.18, 2.4, 0.18, PAL.white, x, 0, z);
      b.boxB(3.0, 0.15, 3.0, PAL.lightWood, 0, 2.4, 0);
      b.boxB(2.4, 1.8, 2.4, '#ff5a5f', 0, 2.55, 0);
      b.box(1.8, 0.8, 0.03, PAL.darkGlass, 0, 3.6, 1.21);
      b.extrude([[-1.6, 0], [1.6, 0], [0, 1.0]], 2.8, PAL.white, 0, 4.35, 0);
      for (let i = 0; i < 8; i++) b.box(0.8, 0.06, 0.15, PAL.lightWood, 0, 0.3 * i + 0.15, 1.7 + i * 0.2);
      b.cylB(0.03, 0.03, 1.4, PAL.white, 1.3, 4.35, 0, 4);
      b.box(0.5, 0.35, 0.02, PAL.red, 1.55, 5.5, 0);
    },
  },
  {
    id: 'rowboat',
    name: 'Rowing Boat',
    points: 320,
    tags: ['vehicle'],
    sound: 'wood',
    variants: 4,
    blurb: 'It sank, technically.',
    build(b, _r, v) {
      const c = ['#ffffff', '#3d7bf0', '#ff5a5f', '#22c3b5'][v % 4];
      b.extrude([[-1.9, 0.75], [-1.6, 0.15], [1.2, 0.0], [2.0, 0.85]], 1.5, c, 0, 0, 0, { sz: 1 });
      b.extrude([[-1.8, 0.8], [-1.5, 0.3], [1.1, 0.2], [1.85, 0.85]], 1.3, '#a8754a', 0, 0.02, 0);
      b.box(0.3, 0.06, 1.4, PAL.lightWood, -0.2, 0.6, 0);
      b.box(0.3, 0.06, 1.4, PAL.lightWood, 0.8, 0.6, 0);
      b.box(4.0, 0.1, 0.08, '#ffd23f', 0.05, 0.6, 0.8, { rz: 0.02 });
      b.box(4.0, 0.1, 0.08, '#ffd23f', 0.05, 0.6, -0.8, { rz: 0.02 });
      b.box(2.2, 0.06, 0.08, PAL.darkWood, 0.2, 0.7, 0.5, { ry: 0.4 });
    },
  },
  {
    id: 'sailboat',
    name: 'Sailboat',
    points: 650,
    tags: ['vehicle'],
    sound: 'wood',
    variants: 3,
    heightFactor: 0.14,
    blurb: 'Sailed off the edge of the world.',
    build(b, _r, v) {
      const c = ['#ffffff', '#3d5a80', '#ff5a5f'][v % 3];
      b.extrude([[-3.2, 1.2], [-2.8, 0.3], [2.0, 0.0], [3.4, 1.3]], 2.2, c, 0, 0, 0);
      b.boxB(5.6, 0.12, 1.9, PAL.lightWood, 0, 1.15, 0);
      b.boxB(1.8, 0.7, 1.4, PAL.white, -0.8, 1.25, 0);
      b.cylB(0.08, 0.1, 7.5, '#c9ccd6', 0.4, 1.2, 0, 6);
      b.extrude([[0, 0], [0, 6.5], [-3.2, 0]], 0.04, '#fff8ee', 0.3, 1.9, 0, { ry: Math.PI / 2 * 0 });
      b.extrude([[0, 0], [0, 5.5], [2.2, 0]], 0.04, beachCols[v % 6], 0.55, 2.0, 0);
      b.cylB(0.06, 0.06, 4, '#c9ccd6', -1.2, 1.9, 0, 6, { rz: Math.PI / 2 });
    },
  },
  {
    id: 'jetski',
    name: 'Jet Ski',
    points: 200,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 3,
    blurb: 'Full throttle into the abyss.',
    build(b, _r, v) {
      const c = ['#ffd23f', '#e8423f', '#22c3b5'][v % 3];
      b.extrude([[-1.4, 0.6], [-1.3, 0.1], [0.9, 0.0], [1.5, 0.55]], 1.0, c, 0, 0, 0);
      b.box(1.0, 0.25, 0.5, PAL.black, -0.4, 0.75, 0);
      b.box(0.4, 0.4, 0.8, PAL.white, 0.6, 0.75, 0, { rz: -0.4 });
      b.cyl(0.03, 0.03, 0.7, PAL.black, 0.6, 1.0, 0, 6, { rx: Math.PI / 2 });
    },
  },
  {
    id: 'palm',
    name: 'Palm Tree',
    points: 230,
    tags: ['nature'],
    sound: 'organic',
    variants: 4,
    heightFactor: 0.2,
    blurb: 'Tropical. Delicious.',
    build(b, r) {
      buildPalm(b, r, r.range(6.0, 7.5));
    },
  },
  {
    id: 'volleynet',
    name: 'Volleyball Net',
    points: 280,
    tags: ['medium'],
    sound: 'soft',
    variants: 1,
    heightFactor: 0.2,
    blurb: 'Spike!',
    build(b) {
      for (const x of [-4, 4]) b.cylB(0.07, 0.07, 2.6, PAL.white, x, 0, 0, 6);
      b.box(8, 0.9, 0.02, '#2c2f3a', 0, 2.1, 0);
      b.box(8, 0.08, 0.04, PAL.white, 0, 2.55, 0);
      b.sphere(0.12, PAL.yellow, 1.5, 0.12, 1.4);
    },
  },
]);
