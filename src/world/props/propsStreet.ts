import { defineProps, PAL } from './types';

defineProps([
  {
    id: 'cone',
    name: 'Traffic Cone',
    points: 15,
    tags: ['small'],
    sound: 'plastic',
    variants: 1,
    blurb: 'Orange means go — down.',
    build(b) {
      b.boxB(0.36, 0.04, 0.36, PAL.orange, 0, 0, 0);
      b.cylB(0.03, 0.14, 0.52, PAL.orange, 0, 0.04, 0, 10);
      b.cylB(0.085, 0.108, 0.1, PAL.white, 0, 0.2, 0, 10);
      b.cylB(0.05, 0.065, 0.06, PAL.white, 0, 0.38, 0, 10);
    },
  },
  {
    id: 'trashbin',
    name: 'Street Bin',
    points: 25,
    tags: ['small'],
    sound: 'metal',
    variants: 3,
    blurb: 'Finally, someone empties it.',
    build(b, _r, v) {
      const c = ['#2f7d4a', '#3d5a80', '#5b5f6b'][v % 3];
      b.cylB(0.26, 0.23, 0.8, c, 0, 0, 0, 12);
      b.cylB(0.28, 0.28, 0.06, PAL.darkMetal, 0, 0.8, 0, 12);
      b.cylB(0.15, 0.2, 0.1, c, 0, 0.86, 0, 12);
      b.cylB(0.265, 0.265, 0.04, PAL.darkMetal, 0, 0.3, 0, 12);
    },
  },
  {
    id: 'wheeliebin',
    name: 'Wheelie Bin',
    points: 25,
    tags: ['small'],
    sound: 'plastic',
    variants: 3,
    blurb: 'Rolls right in.',
    build(b, _r, v) {
      const c = ['#3fbf6a', '#3d7bf0', '#4a4f5c'][v % 3];
      b.boxB(0.55, 0.9, 0.6, c, 0, 0.05, 0);
      b.boxB(0.6, 0.06, 0.68, c, 0, 0.95, 0.02);
      b.box(0.08, 0.05, 0.6, PAL.darkMetal, -0.3, 0.9, 0);
      b.wheel(0.09, 0.06, 0, 0.09, -0.32, PAL.tire, PAL.darkMetal);
    },
  },
  {
    id: 'cafechair',
    name: 'Café Chair',
    points: 25,
    tags: ['small'],
    sound: 'metal',
    variants: 3,
    blurb: 'Reserved for the void.',
    build(b, _r, v) {
      const c = ['#e8423f', '#2c2f3a', '#22c3b5'][v % 3];
      for (const x of [-0.18, 0.18]) for (const z of [-0.18, 0.18]) b.boxB(0.035, 0.45, 0.035, PAL.darkMetal, x, 0, z);
      b.boxB(0.44, 0.05, 0.44, c, 0, 0.45, 0);
      b.boxB(0.44, 0.4, 0.04, c, 0, 0.5, -0.2);
      b.boxB(0.035, 0.42, 0.035, PAL.darkMetal, -0.18, 0.45, -0.2);
      b.boxB(0.035, 0.42, 0.035, PAL.darkMetal, 0.18, 0.45, -0.2);
    },
  },
  {
    id: 'crate',
    name: 'Wooden Crate',
    points: 25,
    tags: ['small'],
    sound: 'wood',
    variants: 2,
    blurb: 'Fragile? Not anymore.',
    build(b, _r, v) {
      const c = v ? PAL.lightWood : PAL.wood;
      const s = 0.56;
      b.boxB(s, s, s, c, 0, 0, 0);
      const e = 0.06;
      for (const x of [-1, 1]) for (const z of [-1, 1]) b.boxB(e, s + 0.01, e, PAL.darkWood, (x * (s - e)) / 2, 0, (z * (s - e)) / 2);
      for (const y of [0, s - e]) {
        b.boxB(s + 0.01, e, e, PAL.darkWood, 0, y, s / 2 - e / 2);
        b.boxB(s + 0.01, e, e, PAL.darkWood, 0, y, -s / 2 + e / 2);
        b.boxB(e, e, s + 0.01, PAL.darkWood, s / 2 - e / 2, y, 0);
        b.boxB(e, e, s + 0.01, PAL.darkWood, -s / 2 + e / 2, y, 0);
      }
      b.box(0.72, 0.06, 0.03, PAL.darkWood, 0, s / 2, s / 2 + 0.005, { rz: 0.78 });
    },
  },
  {
    id: 'hydrant',
    name: 'Fire Hydrant',
    points: 25,
    tags: ['small'],
    sound: 'metal',
    variants: 2,
    blurb: 'Emergency snack.',
    build(b, _r, v) {
      const c = v ? '#ffd23f' : '#e8423f';
      b.cylB(0.16, 0.18, 0.08, c, 0, 0, 0, 10);
      b.cylB(0.12, 0.12, 0.5, c, 0, 0.08, 0, 10);
      b.cylB(0.15, 0.15, 0.06, c, 0, 0.55, 0, 10);
      b.sphere(0.11, c, 0, 0.62, 0, { sy: 0.7 });
      b.cyl(0.05, 0.05, 0.34, PAL.metal, 0, 0.4, 0, 8, { rz: Math.PI / 2 });
      b.cyl(0.06, 0.06, 0.1, c, 0, 0.36, 0.12, 8, { rx: Math.PI / 2 });
    },
  },
  {
    id: 'streetsign',
    name: 'Street Sign',
    points: 40,
    tags: ['small'],
    sound: 'metal',
    variants: 4,
    heightFactor: 0.22,
    blurb: 'It said: do not enter the hole.',
    build(b, _r, v) {
      b.cylB(0.035, 0.035, 2.3, PAL.metal, 0, 0, 0, 6);
      b.cylB(0.09, 0.09, 0.05, PAL.darkMetal, 0, 0, 0, 8);
      if (v === 0) {
        b.cyl(0.3, 0.3, 0.04, PAL.red, 0, 2.1, 0.04, 8, { rx: Math.PI / 2, rz: Math.PI / 8 });
        b.box(0.34, 0.08, 0.045, PAL.white, 0, 2.1, 0.05);
      } else if (v === 1) {
        b.cyl(0.29, 0.29, 0.04, PAL.blue, 0, 2.05, 0.04, 14, { rx: Math.PI / 2 });
        b.box(0.08, 0.3, 0.045, PAL.white, 0, 2.05, 0.05);
      } else if (v === 2) {
        b.extrude([[-0.32, -0.28], [0.32, -0.28], [0, 0.3]], 0.04, PAL.white, 0, 2.05, 0.04);
        b.extrude([[-0.25, -0.23], [0.25, -0.23], [0, 0.22]], 0.045, PAL.red, 0, 2.05, 0.045);
        b.extrude([[-0.18, -0.18], [0.18, -0.18], [0, 0.14]], 0.05, PAL.white, 0, 2.05, 0.05);
      } else {
        b.box(0.7, 0.22, 0.04, '#2f7d4a', 0, 2.15, 0.04);
        b.box(0.62, 0.03, 0.045, PAL.white, 0, 2.15, 0.045);
      }
    },
  },
  {
    id: 'cafetable',
    name: 'Bistro Table',
    points: 40,
    tags: ['small'],
    sound: 'metal',
    variants: 2,
    blurb: 'Table for one hole.',
    build(b, _r, v) {
      b.cylB(0.25, 0.28, 0.04, PAL.darkMetal, 0, 0, 0, 10);
      b.cylB(0.035, 0.035, 0.7, PAL.darkMetal, 0, 0.04, 0, 6);
      b.cylB(0.38, 0.38, 0.04, v ? PAL.white : '#d9c3a0', 0, 0.74, 0, 14);
      b.cylB(0.045, 0.045, 0.1, PAL.white, 0.12, 0.78, 0.05, 8);
      b.cylB(0.03, 0.03, 0.14, '#6fb8e8', -0.1, 0.78, -0.08, 8);
    },
  },
  {
    id: 'newsbox',
    name: 'Newspaper Box',
    points: 30,
    tags: ['small'],
    sound: 'metal',
    variants: 3,
    blurb: 'Breaking news: it is gone.',
    build(b, _r, v) {
      const c = ['#3d7bf0', '#e8423f', '#ffd23f'][v % 3];
      for (const x of [-0.18, 0.18]) for (const z of [-0.15, 0.15]) b.boxB(0.04, 0.35, 0.04, PAL.darkMetal, x, 0, z);
      b.boxB(0.46, 0.6, 0.4, c, 0, 0.35, 0);
      b.boxB(0.36, 0.25, 0.02, PAL.glass, 0, 0.6, 0.2);
      b.boxB(0.48, 0.05, 0.42, PAL.darkMetal, 0, 0.95, 0);
    },
  },
  {
    id: 'mailbox',
    name: 'Mailbox',
    points: 30,
    tags: ['small'],
    sound: 'metal',
    variants: 2,
    blurb: 'Return to sender: impossible.',
    build(b, _r, v) {
      const c = v ? '#3d5a80' : '#e8423f';
      b.boxB(0.5, 0.9, 0.42, c, 0, 0.1, 0);
      b.cyl(0.25, 0.25, 0.42, c, 0, 1.0, 0, 12, { rx: Math.PI / 2 });
      b.box(0.3, 0.04, 0.03, PAL.black, 0, 0.85, 0.215);
      for (const x of [-0.2, 0.2]) b.boxB(0.06, 0.12, 0.3, PAL.darkMetal, x, 0, 0);
    },
  },
  {
    id: 'bollard',
    name: 'Bollard',
    points: 20,
    tags: ['small'],
    sound: 'metal',
    variants: 1,
    blurb: 'Immovable object, meet unstoppable hole.',
    build(b) {
      b.cylB(0.11, 0.12, 0.8, '#3a3d48', 0, 0, 0, 10);
      b.sphere(0.11, '#3a3d48', 0, 0.8, 0, { sy: 0.6 });
      b.cylB(0.115, 0.115, 0.08, PAL.yellow, 0, 0.62, 0, 10);
    },
  },
  {
    id: 'parkingmeter',
    name: 'Parking Meter',
    points: 30,
    tags: ['small'],
    sound: 'metal',
    variants: 1,
    heightFactor: 0.25,
    blurb: 'Time is up.',
    build(b) {
      b.cylB(0.04, 0.05, 1.1, PAL.darkMetal, 0, 0, 0, 6);
      b.boxB(0.22, 0.3, 0.16, PAL.metal, 0, 1.1, 0);
      b.boxB(0.14, 0.1, 0.02, PAL.glass, 0, 1.25, 0.08, { emissive: true, glow: 1.1 });
      b.sphere(0.11, PAL.metal, 0, 1.4, 0, { sy: 0.5 });
    },
  },
  {
    id: 'shoppingbag',
    name: 'Shopping Bag',
    points: 15,
    tags: ['small'],
    sound: 'soft',
    variants: 4,
    blurb: 'Retail therapy for the void.',
    build(b, _r, v) {
      const c = ['#ff7eb6', '#ffd23f', '#22c3b5', '#f4f4f0'][v % 4];
      b.boxB(0.32, 0.36, 0.14, c, 0, 0, 0);
      b.torus(0.08, 0.012, PAL.black, 0, 0.36, 0, { arc: Math.PI, ts: 8 });
    },
  },
  {
    id: 'pizzabox',
    name: 'Pizza Box',
    points: 15,
    tags: ['small'],
    sound: 'soft',
    variants: 1,
    noShadow: false,
    blurb: 'Extra cheese, extra void.',
    build(b) {
      b.boxB(0.42, 0.06, 0.42, '#f2e3c4', 0, 0, 0);
      b.boxB(0.42, 0.06, 0.42, '#f2e3c4', 0.02, 0.06, 0.01, { ry: 0.15 });
      b.box(0.2, 0.005, 0.2, PAL.red, 0.02, 0.122, 0.01, { ry: 0.15 });
    },
  },
  {
    id: 'planterbox',
    name: 'Planter Box',
    points: 40,
    tags: ['small', 'nature'],
    sound: 'wood',
    variants: 3,
    blurb: 'A tiny garden for a big appetite.',
    build(b, r, v) {
      b.boxB(0.9, 0.45, 0.45, v === 2 ? PAL.concrete : PAL.wood, 0, 0, 0);
      b.boxB(0.82, 0.04, 0.37, '#5a3d2a', 0, 0.44, 0);
      for (let i = 0; i < 4; i++) b.ico(0.17, i % 2 ? PAL.leaf : PAL.leafDark, -0.3 + i * 0.2, 0.55 + r.range(0, 0.05), r.range(-0.05, 0.05), 0);
      if (v === 1) for (let i = 0; i < 4; i++) b.ico(0.05, PAL.pink, -0.3 + i * 0.2, 0.72, 0.07, 0);
    },
  },
  {
    id: 'lamppost',
    name: 'Street Lamp',
    points: 60,
    tags: ['medium'],
    sound: 'metal',
    variants: 1,
    heightFactor: 0.22,
    blurb: 'Lights out.',
    build(b) {
      b.cylB(0.13, 0.15, 0.3, '#3a3d48', 0, 0, 0, 8);
      b.cylB(0.05, 0.07, 4.2, '#3a3d48', 0, 0.3, 0, 8);
      b.box(0.9, 0.06, 0.08, '#3a3d48', 0.4, 4.4, 0);
      b.boxB(0.36, 0.1, 0.22, '#3a3d48', 0.8, 4.3, 0);
      b.box(0.3, 0.03, 0.18, '#fff3c4', 0.8, 4.29, 0, { emissive: true, glow: 1.4 });
    },
  },
  {
    id: 'scooter',
    name: 'Kick Scooter',
    points: 35,
    tags: ['small'],
    sound: 'metal',
    variants: 3,
    blurb: 'Last-mile mobility, last-meal edition.',
    build(b, _r, v) {
      const c = ['#3fbf6a', '#ff8a2a', '#2c2f3a'][v % 3];
      b.boxB(0.8, 0.05, 0.16, c, 0, 0.08, 0);
      b.wheel(0.08, 0.05, 0.4, 0.08, 0);
      b.wheel(0.08, 0.05, -0.38, 0.08, 0);
      b.cyl(0.025, 0.025, 1.0, PAL.darkMetal, 0.38, 0.58, 0, 6, { rz: -0.1 });
      b.cyl(0.02, 0.02, 0.45, PAL.black, 0.43, 1.08, 0, 6, { rx: Math.PI / 2 });
    },
  },
]);
