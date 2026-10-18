import { defineProps, PAL } from './types';
import type { ModelBuilder } from '../ModelBuilder';

function pallet(b: ModelBuilder, y = 0) {
  for (const z of [-0.5, 0, 0.5]) b.boxB(1.2, 0.1, 0.12, PAL.lightWood, 0, y, z);
  for (let i = 0; i < 6; i++) b.boxB(0.15, 0.03, 1.15, PAL.lightWood, -0.52 + i * 0.208, y + 0.1, 0);
}

defineProps([
  {
    id: 'pallet',
    name: 'Pallet',
    points: 30,
    tags: ['small'],
    sound: 'wood',
    variants: 1,
    blurb: 'Flat-packed snack.',
    build(b) {
      pallet(b);
    },
  },
  {
    id: 'palletboxes',
    name: 'Loaded Pallet',
    points: 70,
    tags: ['small'],
    sound: 'wood',
    variants: 3,
    blurb: 'Shipping delayed indefinitely.',
    build(b, r, v) {
      pallet(b);
      const n = 2 + v;
      for (let i = 0; i < n; i++) {
        const x = (i % 2) * 0.55 - 0.27, z = Math.floor(i / 2) % 2 ? 0.27 : -0.27, y = 0.13 + (i >= 4 ? 0.5 : 0);
        b.boxB(0.52, 0.5, 0.52, r.pick(['#c9965f', '#b9844f', '#d6a96c']), x, y, z);
        b.boxB(0.53, 0.07, 0.1, '#e8d6a8', x, y + 0.43, z);
      }
    },
  },
  {
    id: 'barrel',
    name: 'Oil Drum',
    points: 35,
    tags: ['small'],
    sound: 'metal',
    variants: 4,
    blurb: 'Contents: unknown. Destination: void.',
    build(b, _r, v) {
      const c = ['#3d7bf0', '#e8423f', '#ffd23f', '#3fbf6a'][v % 4];
      b.cylB(0.3, 0.3, 0.9, c, 0, 0, 0, 12);
      for (const y of [0.25, 0.62]) b.cylB(0.31, 0.31, 0.04, PAL.darkMetal, 0, y, 0, 12);
      b.cylB(0.28, 0.28, 0.02, PAL.darkMetal, 0, 0.9, 0, 12);
      b.cylB(0.04, 0.04, 0.04, PAL.metal, 0.15, 0.91, 0, 6);
    },
  },
  {
    id: 'cardboard',
    name: 'Box Stack',
    points: 40,
    tags: ['small'],
    sound: 'soft',
    variants: 3,
    blurb: 'This side up. Now: this side down.',
    build(b, r) {
      const n = 3;
      for (let i = 0; i < n; i++) {
        const s = r.range(0.4, 0.6);
        b.boxB(s, s * 0.8, s, r.pick(['#c9965f', '#b9844f', '#d6a96c']), r.range(-0.08, 0.08), i * 0.42, r.range(-0.08, 0.08), { ry: r.range(-0.3, 0.3) });
      }
    },
  },
  {
    id: 'gascylinders',
    name: 'Gas Cylinders',
    points: 60,
    tags: ['small'],
    sound: 'metal',
    variants: 2,
    blurb: 'Highly compressed. Now highly compressed differently.',
    build(b, _r, v) {
      const c = v ? '#3fbf6a' : '#e8423f';
      for (let i = 0; i < 4; i++) {
        const x = (i % 2) * 0.32 - 0.16, z = Math.floor(i / 2) * 0.32 - 0.16;
        b.cylB(0.14, 0.14, 1.2, c, x, 0, z, 8);
        b.sphere(0.14, c, x, 1.2, z, { sy: 0.6, w: 8, hs: 5 });
        b.cylB(0.04, 0.04, 0.12, PAL.metal, x, 1.28, z, 6);
      }
      b.boxB(0.7, 0.06, 0.7, PAL.darkMetal, 0, 0.6, 0);
    },
  },
  {
    id: 'spool',
    name: 'Cable Spool',
    points: 80,
    tags: ['medium'],
    sound: 'wood',
    variants: 2,
    blurb: 'Unwinding, unwinding, gone.',
    build(b, _r, v) {
      b.cyl(0.75, 0.75, 0.1, PAL.wood, 0, 0.75, 0.5, 14, { rx: Math.PI / 2 });
      b.cyl(0.75, 0.75, 0.1, PAL.wood, 0, 0.75, -0.5, 14, { rx: Math.PI / 2 });
      b.cyl(0.5, 0.5, 0.9, v ? '#e8423f' : '#2c2f3a', 0, 0.75, 0, 14, { rx: Math.PI / 2 });
    },
  },
  {
    id: 'toolchest',
    name: 'Tool Chest',
    points: 60,
    tags: ['small'],
    sound: 'metal',
    variants: 2,
    blurb: 'Every tool except an escape plan.',
    build(b, _r, v) {
      const c = v ? '#e8423f' : '#3d7bf0';
      b.boxB(0.9, 1.1, 0.55, c, 0, 0.1, 0);
      for (let i = 0; i < 5; i++) b.box(0.8, 0.03, 0.02, PAL.metal, 0, 0.3 + i * 0.18, 0.285);
      for (const x of [-0.35, 0.35]) for (const z of [-0.2, 0.2]) b.cylB(0.05, 0.05, 0.1, PAL.black, x, 0, z, 6);
    },
  },
  {
    id: 'ibc',
    name: 'IBC Tank',
    points: 90,
    tags: ['medium'],
    sound: 'plastic',
    variants: 1,
    blurb: '1000 litres of nope.',
    build(b) {
      pallet(b);
      b.boxB(1.1, 1.0, 1.1, '#e9eef2', 0, 0.13, 0);
      for (let i = 0; i < 4; i++) {
        b.boxB(1.14, 0.04, 1.14, PAL.metal, 0, 0.25 + i * 0.28, 0);
      }
      b.cylB(0.18, 0.18, 0.1, '#2c2f3a', 0, 1.13, 0, 8);
    },
  },
  {
    id: 'generator',
    name: 'Generator',
    points: 260,
    tags: ['industrial'],
    sound: 'heavy',
    variants: 2,
    blurb: 'Power cut.',
    build(b, _r, v) {
      const c = v ? '#ffb02e' : '#3fbf6a';
      b.boxB(2.6, 0.2, 1.3, PAL.darkMetal, 0, 0, 0);
      b.boxB(2.4, 1.3, 1.2, c, 0, 0.2, 0);
      for (let i = 0; i < 7; i++) b.box(0.05, 0.8, 0.02, PAL.darkMetal, -0.9 + i * 0.15, 0.85, 0.61);
      b.boxB(0.6, 0.4, 0.02, '#2c2f3a', 0.7, 0.9, 0.61);
      b.sphere(0.06, '#3fff7a', 0.55, 1.2, 0.62, { emissive: true, glow: 2, w: 5, hs: 4 });
      b.cylB(0.1, 0.1, 0.8, PAL.steel, -0.8, 1.5, 0.3, 6);
    },
  },
  {
    id: 'compressor',
    name: 'Compressor',
    points: 240,
    tags: ['industrial'],
    sound: 'heavy',
    variants: 1,
    blurb: 'Under pressure.',
    build(b) {
      b.cyl(0.55, 0.55, 2.0, '#e8423f', 0, 0.75, 0, 12, { rz: Math.PI / 2 });
      b.sphere(0.55, '#e8423f', 1.0, 0.75, 0, { sx: 0.4 });
      b.sphere(0.55, '#e8423f', -1.0, 0.75, 0, { sx: 0.4 });
      b.boxB(1.0, 0.6, 0.7, PAL.darkMetal, 0, 1.25, 0);
      b.cyl(0.3, 0.3, 0.2, PAL.metal, 0.3, 1.6, 0.36, 10, { rx: Math.PI / 2 });
      for (const x of [-0.7, 0.7]) b.boxB(0.15, 0.25, 0.9, PAL.darkMetal, x, 0, 0);
    },
  },
  {
    id: 'machine',
    name: 'Press Machine',
    points: 380,
    tags: ['industrial'],
    sound: 'heavy',
    variants: 2,
    heightFactor: 0.22,
    blurb: 'Pressed into service. Then into the void.',
    build(b, _r, v) {
      const c = v ? '#3d7bf0' : '#ffb02e';
      b.boxB(2.6, 0.6, 2.0, PAL.darkMetal, 0, 0, 0);
      for (const x of [-1.0, 1.0]) b.boxB(0.5, 3.2, 1.6, c, x, 0.6, 0);
      b.boxB(2.6, 0.9, 1.8, c, 0, 3.8, 0);
      b.boxB(1.4, 0.4, 1.2, PAL.steel, 0, 2.6, 0);
      b.cylB(0.25, 0.25, 0.8, PAL.metal, 0, 3.0, 0, 10);
      b.boxB(0.5, 0.7, 0.2, '#2c2f3a', 1.2, 1.4, 0.9);
      b.sphere(0.08, '#ff3045', 1.2, 1.9, 1.01, { emissive: true, glow: 2, w: 5, hs: 4 });
      b.box(2.7, 0.15, 0.04, PAL.yellow, 0, 0.45, 1.01);
    },
  },
  {
    id: 'forklift',
    name: 'Forklift',
    points: 320,
    tags: ['industrial', 'vehicle'],
    sound: 'metal',
    variants: 2,
    blurb: 'Lifted. Dropped. Very far.',
    build(b, _r, v) {
      const c = v ? '#ffb02e' : '#ffd23f';
      b.boxB(1.8, 0.8, 1.2, c, -0.2, 0.3, 0);
      b.boxB(0.8, 0.9, 1.2, '#33363f', -0.85, 0.3, 0);
      b.boxB(0.6, 0.4, 0.5, PAL.black, 0, 1.1, 0);
      for (const x of [-0.3, 0.6]) for (const z of [-0.5, 0.5]) b.boxB(0.06, 1.2, 0.06, PAL.darkMetal, x, 1.1, z);
      b.boxB(1.0, 0.08, 1.2, c, 0.15, 2.3, 0);
      for (const z of [-0.35, 0.35]) b.boxB(0.12, 2.6, 0.12, PAL.darkMetal, 0.8, 0.1, z);
      for (const z of [-0.35, 0.35]) b.boxB(1.1, 0.06, 0.15, PAL.steel, 1.35, 0.15, z);
      b.wheel(0.32, 0.26, 0.45, 0.32, 0.55);
      b.wheel(0.32, 0.26, 0.45, 0.32, -0.55);
      b.wheel(0.26, 0.24, -0.8, 0.26, 0.55);
      b.wheel(0.26, 0.24, -0.8, 0.26, -0.55);
      b.sphere(0.1, '#ff8a2a', 0.15, 2.4, 0, { emissive: true, glow: 2, w: 5, hs: 4 });
    },
  },
  {
    id: 'container',
    name: 'Shipping Container',
    points: 480,
    tags: ['industrial'],
    sound: 'heavy',
    variants: 5,
    blurb: '33 cubic metres of cargo, 0 of resistance.',
    build(b, _r, v) {
      const c = ['#e8423f', '#3d7bf0', '#ff8a2a', '#3fbf6a', '#8a8f9a'][v % 5];
      const L = 6.1, W = 2.44, H = 2.6;
      b.boxB(L, H, W, c, 0, 0, 0);
      for (let i = 0; i < 22; i++) {
        const x = -L / 2 + 0.2 + i * ((L - 0.4) / 21);
        b.boxB(0.1, H - 0.2, 0.04, c, x, 0.1, W / 2 + 0.01);
        b.boxB(0.1, H - 0.2, 0.04, c, x, 0.1, -W / 2 - 0.01);
      }
      b.boxB(L + 0.04, 0.12, W + 0.04, PAL.darkMetal, 0, 0, 0);
      b.boxB(L + 0.04, 0.12, W + 0.04, PAL.darkMetal, 0, H - 0.12, 0);
      b.box(0.04, H - 0.3, 0.05, PAL.darkMetal, L / 2 + 0.02, H / 2, 0);
      for (const z of [-0.6, 0.6]) b.box(0.05, H - 0.4, 0.06, PAL.metal, L / 2 + 0.03, H / 2, z);
    },
  },
  {
    id: 'boxtruck',
    name: 'Box Truck',
    points: 450,
    tags: ['industrial', 'vehicle'],
    sound: 'heavy',
    variants: 3,
    blurb: 'Fragile cargo, hungry road.',
    build(b, _r, v) {
      const c = ['#f4f4f0', '#ffd23f', '#3d7bf0'][v % 3];
      b.boxB(1.9, 1.8, 2.2, '#e8423f', 2.6, 0.6, 0);
      b.box(0.04, 0.8, 1.9, PAL.darkGlass, 3.56, 1.8, 0);
      b.boxB(4.8, 2.8, 2.4, c, -0.75, 0.75, 0);
      b.boxB(7.2, 0.25, 2.2, PAL.darkMetal, 0.2, 0.5, 0);
      for (const x of [2.6, -1.2, -2.3]) for (const z of [-1.0, 1.0]) b.wheel(0.48, 0.3, x, 0.48, z);
      for (const z of [-0.8, 0.8]) b.box(0.05, 0.15, 0.3, '#fffbe0', 3.57, 1.0, z, { emissive: true, glow: 1.6 });
      b.box(3.6, 0.6, 0.02, '#e8423f', -0.75, 2.4, 1.21);
    },
  },
  {
    id: 'mixer',
    name: 'Cement Mixer',
    points: 600,
    tags: ['industrial', 'vehicle'],
    sound: 'heavy',
    variants: 2,
    blurb: 'Mixed feelings.',
    build(b, _r, v) {
      const c = v ? '#3d7bf0' : '#ff8a2a';
      b.boxB(2.0, 2.0, 2.3, c, 3.0, 0.6, 0);
      b.box(0.04, 0.8, 2.0, PAL.darkGlass, 4.01, 2.0, 0);
      b.boxB(6.0, 0.3, 2.2, PAL.darkMetal, -0.4, 0.6, 0);
      b.lathe([[0.3, 0], [1.25, 0.8], [1.3, 2.6], [0.6, 4.2], [0.3, 4.2]], '#e9eef2', -2.6, 2.25, 0, 10, { rz: -Math.PI / 2 + 0.25 });
      for (let i = 0; i < 3; i++) b.torus(1.1 - i * 0.05, 0.06, c, -0.6 - i * 1.0, 2.35 + i * 0.12, 0, { ry: Math.PI / 2, rx: 0.25 });
      for (const x of [3.0, -0.8, -2.0]) for (const z of [-1.0, 1.0]) b.wheel(0.5, 0.32, x, 0.5, z);
    },
  },
  {
    id: 'silo',
    name: 'Storage Silo',
    points: 900,
    tags: ['industrial', 'building'],
    sound: 'heavy',
    variants: 2,
    heightFactor: 0.15,
    blurb: 'Grain? Gone.',
    build(b, _r, v) {
      const c = v ? '#d9dde6' : '#c9ccd6';
      for (let i = 0; i < 4; i++) b.cylB(0.15, 0.15, 3.0, PAL.darkMetal, Math.cos(i * 1.57 + 0.78) * 2.2, 0, Math.sin(i * 1.57 + 0.78) * 2.2, 6);
      b.cylB(3.0, 3.0, 10, c, 0, 3.0, 0, 16);
      b.cone(3.1, 2.2, '#a7abb5', 0, 14.1, 0, 16);
      b.lathe([[0.4, 0], [3.0, 3.0], [0, 3.0]], c, 0, 0, 0, 16);
      for (let i = 0; i < 4; i++) b.cylB(3.03, 3.03, 0.15, '#8a8f9a', 0, 4 + i * 2.6, 0, 16);
      for (let i = 0; i < 14; i++) b.box(0.6, 0.05, 0.05, PAL.yellow, 0, 3.4 + i * 0.75, 3.05);
      b.box(0.05, 10.5, 0.05, PAL.yellow, 0.3, 8.3, 3.05);
      b.box(0.05, 10.5, 0.05, PAL.yellow, -0.3, 8.3, 3.05);
    },
  },
  {
    id: 'portacabin',
    name: 'Site Office',
    points: 520,
    tags: ['industrial', 'building'],
    sound: 'heavy',
    variants: 2,
    heightFactor: 0.2,
    blurb: 'Health & safety meeting: cancelled.',
    build(b, _r, v) {
      const c = v ? '#3d7bf0' : '#e9e4da';
      b.boxB(6.0, 2.6, 2.6, c, 0, 0.3, 0);
      for (const x of [-2.6, 2.6]) for (const z of [-1, 1]) b.boxB(0.3, 0.3, 0.3, PAL.darkMetal, x, 0, z);
      for (const x of [-1.8, 0.4, 1.8]) b.box(1.0, 0.8, 0.04, PAL.glass, x, 1.9, 1.32);
      b.box(0.9, 2.0, 0.04, '#5a3d2a', -0.7, 1.3, 1.32);
      b.boxB(6.2, 0.15, 2.8, PAL.darkMetal, 0, 2.9, 0);
      b.boxB(1.2, 0.5, 0.8, '#c9ccd6', 1.6, 3.05, 0);
    },
  },
  {
    id: 'craneloader',
    name: 'Gantry Crane',
    points: 1200,
    tags: ['industrial', 'building'],
    sound: 'heavy',
    variants: 1,
    heightFactor: 0.15,
    blurb: 'It lifted containers. Now it is the container.',
    build(b) {
      const c = '#ffb02e';
      for (const x of [-5, 5]) for (const z of [-2.5, 2.5]) b.boxB(0.6, 11, 0.6, c, x, 0, z);
      for (const x of [-5, 5]) b.boxB(0.6, 0.6, 5.6, c, x, 5.5, 0);
      b.boxB(11.2, 1.0, 1.0, c, 0, 11, -2.5);
      b.boxB(11.2, 1.0, 1.0, c, 0, 11, 2.5);
      b.boxB(2.0, 1.6, 6, '#33363f', 1.5, 10.6, 0);
      b.box(0.08, 4, 0.08, PAL.darkMetal, 1.5, 8.6, 0);
      b.boxB(1.6, 0.3, 2.6, PAL.darkMetal, 1.5, 6.3, 0);
      for (const x of [-5, 5]) for (const z of [-2.5, 2.5]) b.boxB(1.2, 0.5, 1.2, PAL.darkMetal, x, 0, z);
    },
  },
]);
