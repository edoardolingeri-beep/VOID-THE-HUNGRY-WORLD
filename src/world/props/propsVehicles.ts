import { defineProps, PAL } from './types';
import type { ModelBuilder } from '../ModelBuilder';

type P = [number, number][];

interface CarSpec {
  body: P;
  cabin: P;
  roof: [number, number, number]; // x0, x1, y
  W: number;
  wheels: number[]; // x positions
  wheelR: number;
  color: string;
  front: number; // x of front face
  back: number;
  lightY: number;
}

function car(b: ModelBuilder, s: CarSpec) {
  const W = s.W;
  b.extrude(s.body, W, s.color, 0, 0, 0);
  b.extrude(s.cabin, W * 0.9, PAL.darkGlass, 0, 0, 0);
  const [x0, x1, y] = s.roof;
  b.box(x1 - x0, 0.06, W * 0.92, s.color, (x0 + x1) / 2, y + 0.03, 0);
  // pillars
  b.box(0.09, (y - s.cabin[0][1]) * 1.0, W * 0.92, s.color, (x0 + x1) / 2 - 0.05, (y + s.cabin[0][1]) / 2, 0);
  for (const x of s.wheels) {
    for (const z of [-W / 2 + 0.12, W / 2 - 0.12]) b.wheel(s.wheelR, 0.26, x, s.wheelR, z);
  }
  // lights
  b.box(0.05, 0.12, 0.3, '#fffbe0', s.front + 0.02, s.lightY, W / 2 - 0.25, { emissive: true, glow: 1.6 });
  b.box(0.05, 0.12, 0.3, '#fffbe0', s.front + 0.02, s.lightY, -W / 2 + 0.25, { emissive: true, glow: 1.6 });
  b.box(0.05, 0.1, 0.28, '#ff3045', s.back - 0.02, s.lightY + 0.05, W / 2 - 0.22, { emissive: true, glow: 1.4 });
  b.box(0.05, 0.1, 0.28, '#ff3045', s.back - 0.02, s.lightY + 0.05, -W / 2 + 0.22, { emissive: true, glow: 1.4 });
  // bumpers
  b.box(0.12, 0.14, W * 0.98, PAL.darkMetal, s.front, 0.42, 0);
  b.box(0.12, 0.14, W * 0.98, PAL.darkMetal, s.back, 0.42, 0);
}

const sedanBody: P = [[-2.1, 0.32], [2.1, 0.32], [2.12, 0.72], [1.95, 0.86], [0.9, 0.92], [-1.45, 0.94], [-2.05, 0.9]];
const sedanCabin: P = [[0.9, 0.9], [0.32, 1.4], [-0.95, 1.4], [-1.5, 0.92]];

defineProps([
  {
    id: 'car',
    name: 'Sedan',
    points: 150,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 10,
    blurb: 'Zero to void in 0.8 seconds.',
    build(b, _r, v) {
      car(b, {
        body: sedanBody, cabin: sedanCabin, roof: [-0.95, 0.32, 1.4], W: 1.8, wheels: [1.35, -1.35], wheelR: 0.34,
        color: PAL.carColors[v % PAL.carColors.length], front: 2.1, back: -2.08, lightY: 0.72,
      });
    },
  },
  {
    id: 'hatchback',
    name: 'Hatchback',
    points: 130,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 8,
    blurb: 'Compact, parks anywhere. Even in a hole.',
    build(b, _r, v) {
      car(b, {
        body: [[-1.75, 0.3], [1.75, 0.3], [1.78, 0.72], [1.6, 0.86], [0.75, 0.92], [-1.7, 0.98], [-1.75, 0.9]],
        cabin: [[0.75, 0.9], [0.2, 1.42], [-1.45, 1.42], [-1.68, 0.96]],
        roof: [-1.45, 0.2, 1.42], W: 1.7, wheels: [1.15, -1.15], wheelR: 0.32,
        color: PAL.carColors[(v + 3) % PAL.carColors.length], front: 1.76, back: -1.74, lightY: 0.74,
      });
    },
  },
  {
    id: 'taxi',
    name: 'Taxi',
    points: 160,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 1,
    blurb: 'Destination: nowhere.',
    build(b) {
      car(b, { body: sedanBody, cabin: sedanCabin, roof: [-0.95, 0.32, 1.4], W: 1.8, wheels: [1.35, -1.35], wheelR: 0.34, color: '#ffc61a', front: 2.1, back: -2.08, lightY: 0.72 });
      b.boxB(0.5, 0.2, 0.3, PAL.white, -0.3, 1.46, 0, { emissive: true, glow: 1.2 });
      for (let i = 0; i < 6; i++) b.box(0.18, 0.08, 0.02, i % 2 ? PAL.black : '#ffc61a', -1.0 + i * 0.36, 0.62, 0.905);
    },
  },
  {
    id: 'suv',
    name: 'SUV',
    points: 200,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 8,
    blurb: 'Sport Utility Void.',
    build(b, _r, v) {
      car(b, {
        body: [[-2.3, 0.42], [2.3, 0.42], [2.32, 1.0], [2.1, 1.1], [1.05, 1.15], [-2.25, 1.2], [-2.3, 1.1]],
        cabin: [[1.05, 1.12], [0.6, 1.82], [-2.15, 1.82], [-2.22, 1.18]],
        roof: [-2.15, 0.6, 1.82], W: 1.95, wheels: [1.5, -1.5], wheelR: 0.42,
        color: ['#2c2f3a', '#f4f4f0', '#3d5a80', '#9aa3b5', '#7a1f2b', '#2f5d3a', '#c9874d', '#e8423f'][v % 8], front: 2.3, back: -2.3, lightY: 0.95,
      });
      for (const z of [-0.6, 0.6]) b.box(2.6, 0.05, 0.06, PAL.darkMetal, -0.6, 1.9, z);
    },
  },
  {
    id: 'van',
    name: 'Delivery Van',
    points: 230,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 4,
    blurb: 'Special delivery for the void.',
    build(b, _r, v) {
      const c = ['#f4f4f0', '#3d7bf0', '#ffd23f', '#e8423f'][v % 4];
      car(b, {
        body: [[-2.6, 0.4], [2.6, 0.4], [2.62, 1.0], [2.4, 1.15], [1.7, 1.2], [1.2, 2.25], [-2.6, 2.3]],
        cabin: [[1.7, 1.17], [1.25, 2.0], [0.8, 2.0], [0.8, 1.17]],
        roof: [-2.6, 1.2, 2.3], W: 2.0, wheels: [1.75, -1.7], wheelR: 0.4,
        color: c, front: 2.6, back: -2.6, lightY: 0.95,
      });
      b.box(2.4, 0.5, 0.02, v === 0 ? PAL.red : PAL.white, -0.8, 1.5, 1.01);
      b.box(2.4, 0.5, 0.02, v === 0 ? PAL.red : PAL.white, -0.8, 1.5, -1.01);
    },
  },
  {
    id: 'bus',
    name: 'City Bus',
    points: 420,
    tags: ['vehicle'],
    sound: 'heavy',
    variants: 3,
    blurb: 'Next stop: the abyss.',
    build(b, _r, v) {
      const c = ['#e8423f', '#3d7bf0', '#3fbf6a'][v % 3];
      const L = 10.5, W = 2.5, H = 3.1;
      b.boxB(L, H - 0.5, W, c, 0, 0.5, 0);
      b.boxB(L - 0.2, 0.15, W - 0.1, PAL.white, 0, H, 0);
      b.box(L - 1.2, 1.05, 0.02, PAL.darkGlass, -0.3, 2.1, W / 2 + 0.01);
      b.box(L - 1.2, 1.05, 0.02, PAL.darkGlass, -0.3, 2.1, -W / 2 - 0.01);
      for (let i = 0; i < 8; i++) {
        b.box(0.08, 1.05, 0.03, c, -L / 2 + 1.0 + i * 1.18, 2.1, W / 2 + 0.015);
        b.box(0.08, 1.05, 0.03, c, -L / 2 + 1.0 + i * 1.18, 2.1, -W / 2 - 0.015);
      }
      b.box(0.02, 1.6, W - 0.3, PAL.darkGlass, L / 2 + 0.01, 1.9, 0);
      b.box(0.03, 0.3, 1.4, '#ffb02e', L / 2 + 0.02, 2.9, 0, { emissive: true, glow: 1.4 });
      b.box(0.9, 1.9, 0.03, PAL.darkGlass, L / 2 - 1.2, 1.45, W / 2 + 0.02);
      b.box(0.9, 1.9, 0.03, PAL.darkGlass, -0.6, 1.45, W / 2 + 0.02);
      for (const x of [L / 2 - 1.8, -L / 2 + 2.2]) for (const z of [-W / 2 + 0.2, W / 2 - 0.2]) b.wheel(0.52, 0.32, x, 0.52, z);
      for (const z of [-0.8, 0.8]) b.box(0.05, 0.16, 0.36, '#fffbe0', L / 2 + 0.03, 0.85, z, { emissive: true, glow: 1.6 });
      b.box(0.15, 0.25, W, PAL.darkMetal, L / 2, 0.5, 0);
      b.box(0.15, 0.25, W, PAL.darkMetal, -L / 2, 0.5, 0);
    },
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle',
    points: 90,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 4,
    blurb: 'Vroom… vrooo… v…',
    build(b, _r, v) {
      const c = ['#e8423f', '#2c2f3a', '#3d7bf0', '#ff8a2a'][v % 4];
      b.cyl(0.33, 0.33, 0.14, PAL.tire, 0.75, 0.33, 0, 12, { rx: Math.PI / 2 });
      b.cyl(0.33, 0.33, 0.16, PAL.tire, -0.75, 0.33, 0, 12, { rx: Math.PI / 2 });
      b.cyl(0.15, 0.15, 0.17, PAL.metal, 0.75, 0.33, 0, 8, { rx: Math.PI / 2 });
      b.cyl(0.15, 0.15, 0.18, PAL.metal, -0.75, 0.33, 0, 8, { rx: Math.PI / 2 });
      b.box(0.9, 0.35, 0.32, PAL.darkMetal, 0, 0.55, 0);
      b.sphere(0.3, c, 0.25, 0.85, 0, { sx: 1.3, sy: 0.6, sz: 0.9 });
      b.box(0.7, 0.12, 0.3, PAL.black, -0.35, 0.86, 0);
      b.box(0.5, 0.12, 0.25, c, -0.75, 0.75, 0, { rz: 0.2 });
      b.cyl(0.04, 0.04, 0.7, PAL.metal, 0.62, 0.75, 0, 6, { rz: -0.45 });
      b.cyl(0.03, 0.03, 0.7, PAL.black, 0.5, 1.05, 0, 6, { rx: Math.PI / 2 });
      b.sphere(0.09, '#fffbe0', 0.72, 0.98, 0, { emissive: true, glow: 1.6 });
      b.cyl(0.06, 0.06, 0.6, PAL.metal, -0.4, 0.4, 0.2, 6, { rz: Math.PI / 2 - 0.1 });
    },
  },
  {
    id: 'vespa',
    name: 'Retro Scooter',
    points: 80,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 4,
    blurb: 'Ciao, bella.',
    build(b, _r, v) {
      const c = ['#7fd6c2', '#ff7eb6', '#f4f4f0', '#ffd23f'][v % 4];
      b.cyl(0.22, 0.22, 0.12, PAL.tire, 0.58, 0.22, 0, 10, { rx: Math.PI / 2 });
      b.cyl(0.22, 0.22, 0.12, PAL.tire, -0.55, 0.22, 0, 10, { rx: Math.PI / 2 });
      b.sphere(0.34, c, -0.4, 0.5, 0, { sx: 1.2, sy: 0.75, sz: 0.85 });
      b.box(0.45, 0.08, 0.36, c, 0.12, 0.32, 0);
      b.box(0.12, 0.85, 0.36, c, 0.55, 0.62, 0, { rz: -0.25 });
      b.box(0.55, 0.1, 0.3, '#5a3d2a', -0.38, 0.86, 0);
      b.cyl(0.025, 0.025, 0.6, PAL.metal, 0.66, 1.08, 0, 6, { rx: Math.PI / 2 });
      b.sphere(0.08, '#fffbe0', 0.72, 1.05, 0, { emissive: true, glow: 1.5 });
    },
  },
  {
    id: 'pickup',
    name: 'Pickup Truck',
    points: 220,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 5,
    blurb: 'Picked up, permanently.',
    build(b, _r, v) {
      const c = ['#e8423f', '#3d5a80', '#f4f4f0', '#2f5d3a', '#ff8a2a'][v % 5];
      car(b, {
        body: [[-2.7, 0.45], [2.7, 0.45], [2.72, 1.05], [2.5, 1.15], [1.5, 1.2], [-2.7, 1.2]],
        cabin: [[1.5, 1.18], [1.05, 1.9], [-0.4, 1.9], [-0.4, 1.18]],
        roof: [-0.4, 1.05, 1.9], W: 1.95, wheels: [1.75, -1.75], wheelR: 0.44,
        color: c, front: 2.7, back: -2.7, lightY: 1.0,
      });
      b.box(2.1, 0.45, 0.08, c, -1.6, 1.42, 0.94);
      b.box(2.1, 0.45, 0.08, c, -1.6, 1.42, -0.94);
      b.box(0.08, 0.45, 1.95, c, -2.66, 1.42, 0);
      b.boxB(1.0, 0.4, 0.8, PAL.wood, -1.6, 1.2, 0.2);
    },
  },
  {
    id: 'icecreamvan',
    name: 'Ice Cream Van',
    points: 300,
    tags: ['vehicle', 'commercial'],
    sound: 'metal',
    variants: 2,
    blurb: 'Brain freeze, void edition.',
    build(b, _r, v) {
      const c = v ? '#ffd1e8' : '#c8f2ff';
      car(b, {
        body: [[-2.6, 0.4], [2.6, 0.4], [2.62, 1.0], [2.4, 1.15], [1.7, 1.2], [1.2, 2.3], [-2.6, 2.35]],
        cabin: [[1.7, 1.17], [1.25, 2.05], [0.8, 2.05], [0.8, 1.17]],
        roof: [-2.6, 1.2, 2.35], W: 2.0, wheels: [1.75, -1.7], wheelR: 0.4,
        color: c, front: 2.6, back: -2.6, lightY: 0.95,
      });
      b.box(1.8, 0.8, 0.04, '#2c3e5a', -0.8, 1.6, 1.0);
      b.box(2.0, 0.08, 0.5, '#ff7eb6', -0.8, 2.05, 1.2, { rx: 0.3 });
      b.lathe([[0, 0], [0.18, 0.5], [0.2, 0.5], [0, 0.0]], '#d4a873', -1.0, 2.4, 0, 8);
      b.sphere(0.24, '#ff7eb6', -1.0, 3.0, 0);
      b.sphere(0.16, '#fff3c4', -1.0, 3.25, 0);
    },
  },
]);
