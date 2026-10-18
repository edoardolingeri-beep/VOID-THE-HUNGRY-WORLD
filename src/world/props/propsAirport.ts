import { defineProps, PAL } from './types';
import type { ModelBuilder } from '../ModelBuilder';

const livery = ['#e8423f', '#3d7bf0', '#7b5cff', '#22c3b5', '#ff8a2a'];

/** Fuselage along +X (nose at +X). */
function fuselage(b: ModelBuilder, L: number, R: number, y: number, body: string, stripe: string) {
  b.cyl(R, R, L * 0.7, body, 0, y, 0, 14, { rz: Math.PI / 2 });
  b.cyl(R * 0.25, R, L * 0.17, body, L * 0.435, y, 0, 14, { rz: -Math.PI / 2 });
  b.sphere(R * 0.25, body, L * 0.52, y, 0);
  b.cyl(R * 0.98, R * 0.28, L * 0.25, body, -L * 0.475, y + R * 0.25, 0, 14, { rz: -Math.PI / 2 });
  for (const z of [-1, 1]) b.box(L * 0.82, R * 0.28, 0.03, stripe, -L * 0.02, y - R * 0.18, z * R * 0.99);
  // cockpit and cabin windows
  b.box(R * 0.5, R * 0.3, R * 1.4, '#1d2840', L * 0.42, y + R * 0.45, 0, { rz: -0.5 });
  for (let i = 0; i < Math.floor(L * 0.9); i++) {
    const x = -L * 0.3 + i * 0.6;
    if (x > L * 0.32) break;
    b.box(0.25, 0.2, 0.02, '#1d2840', x, y + R * 0.35, R * 0.97);
    b.box(0.25, 0.2, 0.02, '#1d2840', x, y + R * 0.35, -R * 0.97);
  }
}

defineProps([
  {
    id: 'suitcase',
    name: 'Suitcase',
    points: 15,
    tags: ['small'],
    sound: 'plastic',
    variants: 6,
    blurb: 'Lost luggage, found by the void.',
    build(b, _r, v) {
      const c = ['#2c2f3a', '#e8423f', '#3d7bf0', '#ffd23f', '#22c3b5', '#a59bd1'][v % 6];
      b.boxB(0.45, 0.62, 0.26, c, 0, 0.06, 0);
      for (const x of [-0.12, 0.12]) b.boxB(0.03, 0.62, 0.27, '#1d1f26', x, 0.06, 0);
      b.boxB(0.04, 0.2, 0.04, PAL.metal, -0.12, 0.68, 0);
      b.boxB(0.04, 0.2, 0.04, PAL.metal, 0.12, 0.68, 0);
      b.boxB(0.28, 0.04, 0.05, PAL.black, 0, 0.86, 0);
      for (const x of [-0.17, 0.17]) b.cyl(0.04, 0.04, 0.04, PAL.black, x, 0.04, 0.08, 8, { rx: Math.PI / 2 });
    },
  },
  {
    id: 'windsock',
    name: 'Windsock',
    points: 45,
    tags: ['small'],
    sound: 'soft',
    variants: 1,
    heightFactor: 0.12,
    blurb: 'Wind direction: towards the hole.',
    build(b) {
      b.cylB(0.05, 0.06, 3.2, PAL.white, 0, 0, 0, 6);
      for (let i = 0; i < 4; i++) b.cyl(0.24 - i * 0.04, 0.2 - i * 0.04, 0.35, i % 2 ? PAL.white : PAL.orange, 0.18 + i * 0.35, 3.1, 0, 10, { rz: Math.PI / 2 + 0.15 });
    },
  },
  {
    id: 'runwaylight',
    name: 'Runway Light',
    points: 8,
    tags: ['small'],
    sound: 'glass',
    variants: 2,
    noShadow: true,
    blurb: 'Cleared for swallowing.',
    build(b, _r, v) {
      b.cylB(0.09, 0.11, 0.12, '#4a4f5c', 0, 0, 0, 8);
      b.sphere(0.07, v ? '#3db8ff' : '#ffe18a', 0, 0.14, 0, { emissive: true, glow: 1.6 });
    },
  },
  {
    id: 'uld',
    name: 'Cargo Container',
    points: 70,
    tags: ['medium'],
    sound: 'metal',
    variants: 2,
    blurb: 'Air freight, ground delivery.',
    build(b, _r, v) {
      b.extrude([[-0.8, 0], [0.8, 0], [0.8, 1.6], [-0.4, 1.6], [-0.8, 1.0]], 1.5, v ? '#c9ccd6' : '#a7abb5', 0, 0, 0);
      b.box(1.2, 1.2, 0.02, '#3d7bf0', 0.15, 0.8, 0.76);
    },
  },
  {
    id: 'baggagecart',
    name: 'Baggage Cart',
    points: 110,
    tags: ['medium', 'vehicle'],
    sound: 'metal',
    variants: 3,
    blurb: 'Every bag, all at once.',
    build(b, r) {
      b.boxB(2.4, 0.15, 1.3, '#4a4f5c', 0, 0.3, 0);
      for (const x of [-1.1, 1.1]) b.boxB(0.08, 0.9, 1.3, '#7d8596', x, 0.45, 0);
      for (const x of [-0.8, 0.8]) for (const z of [-0.6, 0.6]) b.wheel(0.18, 0.12, x, 0.18, z);
      b.box(0.8, 0.06, 0.06, '#4a4f5c', 1.6, 0.3, 0);
      for (let i = 0; i < 6; i++) {
        const c = r.pick(['#2c2f3a', '#e8423f', '#3d7bf0', '#ffd23f', '#22c3b5']);
        b.boxB(0.6, 0.25, 0.45, c, -0.7 + (i % 3) * 0.7, 0.45 + Math.floor(i / 3) * 0.27, r.range(-0.3, 0.3), { ry: r.range(-0.2, 0.2) });
      }
    },
  },
  {
    id: 'tug',
    name: 'Baggage Tug',
    points: 170,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 3,
    blurb: 'Tugged into the abyss.',
    build(b, _r, v) {
      const c = ['#ffc61a', '#ff8a2a', '#3d7bf0'][v % 3];
      b.boxB(2.3, 0.6, 1.4, c, 0, 0.3, 0);
      b.boxB(0.9, 0.8, 1.3, '#2c2f3a', -0.5, 0.9, 0);
      b.boxB(1.0, 0.08, 1.4, c, -0.5, 1.7, 0);
      for (const x of [-0.9, 0.9]) b.boxB(0.08, 0.8, 0.08, '#2c2f3a', x * 0.5 - 0.5, 0.9, 0.62);
      for (const x of [-0.75, 0.75]) for (const z of [-0.65, 0.65]) b.wheel(0.3, 0.22, x, 0.3, z);
      b.sphere(0.1, '#ff8a2a', -0.5, 1.82, 0, { emissive: true, glow: 1.8 });
    },
  },
  {
    id: 'stairtruck',
    name: 'Stair Truck',
    points: 360,
    tags: ['vehicle'],
    sound: 'metal',
    variants: 2,
    blurb: 'A stairway to nowhere.',
    build(b, _r, v) {
      const c = v ? '#f4f4f0' : '#ffc61a';
      b.boxB(5.2, 0.5, 2.0, '#4a4f5c', 0, 0.45, 0);
      b.boxB(1.5, 1.4, 2.0, c, 1.9, 0.95, 0);
      b.box(0.04, 0.6, 1.7, PAL.darkGlass, 2.66, 1.85, 0);
      for (const x of [1.8, -1.6]) for (const z of [-0.9, 0.9]) b.wheel(0.42, 0.28, x, 0.42, z);
      // inclined stair
      b.box(4.6, 0.12, 1.2, '#aeb4c2', -0.8, 2.3, 0, { rz: 0.42 });
      for (let i = 0; i < 12; i++) b.box(0.14, 0.05, 1.2, '#7d8596', -2.8 + i * 0.36, 1.4 + i * 0.16, 0);
      for (const z of [-0.62, 0.62]) b.box(4.6, 0.06, 0.06, c, -0.8, 3.2, z, { rz: 0.42 });
      b.boxB(1.4, 0.1, 1.3, '#aeb4c2', 1.4, 3.3, 0);
    },
  },
  {
    id: 'fueltruck',
    name: 'Fuel Bowser',
    points: 520,
    tags: ['vehicle', 'industrial'],
    sound: 'heavy',
    variants: 2,
    blurb: 'Fully refuelled hunger.',
    build(b, _r, v) {
      const c = v ? '#f4f4f0' : '#ff8a2a';
      b.boxB(2.0, 2.0, 2.4, c, 3.0, 0.6, 0);
      b.box(0.04, 0.9, 2.1, PAL.darkGlass, 4.01, 2.0, 0);
      b.boxB(7.4, 0.3, 2.2, '#4a4f5c', -0.6, 0.6, 0);
      b.cyl(1.15, 1.15, 5.4, '#e9eef2', -1.1, 2.05, 0, 16, { rz: Math.PI / 2 });
      b.sphere(1.15, '#e9eef2', 1.6, 2.05, 0, { sx: 0.3 });
      b.sphere(1.15, '#e9eef2', -3.8, 2.05, 0, { sx: 0.3 });
      b.cyl(1.17, 1.17, 0.5, c, -1.1, 2.05, 0, 16, { rz: Math.PI / 2 });
      for (const x of [3.0, -1.4, -2.7]) for (const z of [-1.0, 1.0]) b.wheel(0.5, 0.32, x, 0.5, z);
      b.box(4.4, 0.05, 0.5, '#7d8596', -1.1, 3.22, 0);
    },
  },
  {
    id: 'propplane',
    name: 'Prop Plane',
    points: 950,
    tags: ['aircraft', 'vehicle'],
    sound: 'heavy',
    variants: 4,
    blurb: 'Grounded. Permanently.',
    build(b, _r, v) {
      const c = livery[v % livery.length];
      fuselage(b, 8, 0.75, 1.4, '#f4f4f0', c);
      b.box(1.4, 0.14, 10, '#f4f4f0', 0.6, 1.75, 0);
      b.box(1.42, 0.15, 1.2, c, 0.6, 1.76, 4.4);
      b.box(1.42, 0.15, 1.2, c, 0.6, 1.76, -4.4);
      b.box(0.9, 0.1, 3.4, '#f4f4f0', -3.6, 1.75, 0);
      b.extrude([[0, 0], [1.2, 0], [0.4, 1.6], [-0.1, 1.6]], 0.12, c, -3.9, 1.7, 0);
      b.box(0.1, 1.9, 0.18, '#26262c', 4.2, 1.4, 0);
      b.box(0.1, 0.18, 1.9, '#26262c', 4.2, 1.4, 0);
      b.cyl(0.04, 0.04, 0.9, '#4a4f5c', 1.2, 0.85, 0.9, 6);
      b.cyl(0.04, 0.04, 0.9, '#4a4f5c', 1.2, 0.85, -0.9, 6);
      b.wheel(0.3, 0.16, 1.2, 0.3, 0.9);
      b.wheel(0.3, 0.16, 1.2, 0.3, -0.9);
      b.wheel(0.18, 0.1, -3.4, 0.55, 0);
    },
  },
  {
    id: 'helicopter',
    name: 'Helicopter',
    points: 800,
    tags: ['aircraft', 'vehicle'],
    sound: 'heavy',
    variants: 3,
    heightFactor: 0.2,
    blurb: 'Rotors stopped. Forever.',
    build(b, _r, v) {
      const c = ['#e8423f', '#2c2f3a', '#ffc61a'][v % 3];
      for (const z of [-0.8, 0.8]) {
        b.box(3.4, 0.1, 0.1, '#26262c', 0, 0.12, z);
        b.box(0.08, 0.5, 0.08, '#26262c', -0.6, 0.35, z);
        b.box(0.08, 0.5, 0.08, '#26262c', 0.7, 0.35, z);
      }
      b.sphere(1.0, c, 0.3, 1.35, 0, { sx: 1.45, sy: 0.85, sz: 0.85 });
      b.sphere(0.72, '#1d2840', 1.0, 1.45, 0, { sx: 0.9, sy: 0.75, sz: 0.85 });
      b.cyl(0.15, 0.35, 3.6, c, -2.6, 1.55, 0, 10, { rz: Math.PI / 2 });
      b.box(0.6, 0.9, 0.08, c, -4.3, 1.9, 0);
      b.box(0.08, 0.7, 0.04, '#26262c', -4.35, 1.95, 0.12);
      b.cylB(0.12, 0.12, 0.45, '#26262c', 0.3, 2.1, 0, 8);
      b.box(10, 0.05, 0.3, '#26262c', 0.3, 2.6, 0, { ry: 0.4 });
      b.box(10, 0.05, 0.3, '#26262c', 0.3, 2.6, 0, { ry: 0.4 + Math.PI / 2 });
    },
  },
  {
    id: 'jet',
    name: 'Regional Jet',
    points: 3000,
    tags: ['aircraft', 'vehicle', 'landmark'],
    sound: 'heavy',
    variants: 3,
    heightFactor: 0.1,
    blurb: 'Flight cancelled due to hole.',
    build(b, _r, v) {
      const c = livery[(v + 1) % livery.length];
      fuselage(b, 18, 1.35, 2.6, '#f4f4f0', c);
      // swept wings
      for (const s of [-1, 1]) {
        b.extrude([[0, 0], [2.6, 0], [0.4, 8.6 * s], [-1.0, 8.6 * s]], 0.22, '#e9edf5', 0.6, 2.1, 0, { rx: -Math.PI / 2 });
        b.cyl(0.55, 0.5, 2.6, '#c9ccd6', 0.9, 1.45, s * 3.2, 14, { rz: Math.PI / 2 });
        b.cyl(0.4, 0.4, 0.1, '#26262c', 2.21, 1.45, s * 3.2, 14, { rz: Math.PI / 2 });
        b.box(0.12, 0.8, 0.12, '#aeb4c2', 1.2, 1.8, s * 3.2);
      }
      b.extrude([[0, 0], [2.6, 0], [0.5, 4.2], [-0.6, 4.2]], 0.25, c, -8.4, 3.4, 0);
      b.extrude([[0, 0], [1.6, 0], [0.4, 3.4], [-0.4, 3.4]], 0.16, '#e9edf5', -8.2, 7.4, 0, { rx: -Math.PI / 2 });
      b.extrude([[0, 0], [1.6, 0], [0.4, -3.4], [-0.4, -3.4]], 0.16, '#e9edf5', -8.2, 7.4, 0, { rx: -Math.PI / 2 });
      b.wheel(0.45, 0.3, 0.2, 0.45, 1.3);
      b.wheel(0.45, 0.3, 0.2, 0.45, -1.3);
      b.wheel(0.32, 0.2, 7.0, 0.32, 0);
      for (const z of [-1.3, 1.3]) b.box(0.15, 1.2, 0.15, '#7d8596', 0.2, 1.1, z);
      b.box(0.15, 1.3, 0.15, '#7d8596', 7.0, 1.0, 0);
    },
  },
  {
    id: 'controltower',
    name: 'Control Tower',
    points: 2400,
    tags: ['building', 'landmark'],
    sound: 'heavy',
    variants: 1,
    heightFactor: 0.16,
    blurb: 'Tower to hole: you are cleared to land.',
    build(b) {
      b.cylB(3.2, 3.4, 1.0, '#c4bdae', 0, 0, 0, 16);
      b.cylB(1.5, 2.0, 15, '#e9e4da', 0, 1.0, 0, 16);
      for (let i = 0; i < 6; i++) b.cylB(1.55, 1.55, 0.25, '#cfc8b8', 0, 3 + i * 2.2, 0, 16);
      b.cylB(2.6, 1.8, 1.4, '#e9e4da', 0, 16.0, 0, 8);
      b.cylB(3.0, 2.7, 2.6, '#7fc4ea', 0, 17.4, 0, 8);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
        b.box(0.14, 2.6, 0.14, '#4a4f5c', Math.cos(a) * 2.85, 18.7, Math.sin(a) * 2.85);
      }
      b.cylB(3.3, 3.1, 0.5, '#4a4f5c', 0, 20.0, 0, 8);
      b.cylB(0.1, 0.1, 3, '#c9ccd6', 0.8, 20.5, 0, 6);
      b.sphere(0.25, '#ff3045', 0.8, 23.6, 0, { emissive: true, glow: 2 });
      b.boxB(1.2, 0.8, 1.2, '#aeb4c2', -1.2, 20.5, 0.6);
    },
  },
]);
