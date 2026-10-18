import { defineProps, PAL } from './types';
import * as THREE from 'three';
import type { ModelBuilder } from '../ModelBuilder';

/** Striped conical canopy built from alternating triangular wedges. */
export function stripedCanopy(b: ModelBuilder, r: number, h: number, y: number, n: number, c1: string, c2: string, x = 0, z = 0) {
  for (let k = 0; k < 2; k++) {
    const pos: number[] = [];
    for (let i = k; i < n; i += 2) {
      const a0 = (i / n) * Math.PI * 2;
      const a1 = ((i + 1) / n) * Math.PI * 2;
      pos.push(Math.cos(a1) * r, 0, Math.sin(a1) * r, Math.cos(a0) * r, 0, Math.sin(a0) * r, 0, h, 0);
      // underside
      pos.push(Math.cos(a0) * r, 0, Math.sin(a0) * r, Math.cos(a1) * r, 0, Math.sin(a1) * r, 0, h * 0.6, 0);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.computeVertexNormals();
    b.add(g, k ? c2 : c1, x, y, z);
  }
}

/** Awning made of alternating colour strips. */
export function awning(b: ModelBuilder, w: number, d: number, y: number, z: number, c1: string, c2: string, x = 0, tilt = 0.35) {
  const n = Math.max(3, Math.round(w / 0.45));
  const sw = w / n;
  for (let i = 0; i < n; i++) {
    b.box(sw, 0.05, d, i % 2 ? c1 : c2, x - w / 2 + sw * (i + 0.5), y, z, { rx: tilt });
  }
  for (let i = 0; i < n; i++) b.box(sw, 0.18, 0.03, i % 2 ? c1 : c2, x - w / 2 + sw * (i + 0.5), y - Math.sin(tilt) * d / 2 - 0.08, z + Math.cos(tilt) * d / 2);
}

defineProps([
  {
    id: 'trafficlight',
    name: 'Traffic Light',
    points: 110,
    tags: ['medium'],
    sound: 'metal',
    variants: 1,
    heightFactor: 0.2,
    blurb: 'Red. Yellow. Void.',
    build(b) {
      b.cylB(0.15, 0.18, 0.2, '#33363f', 0, 0, 0, 8);
      b.cylB(0.07, 0.08, 3.6, '#33363f', 0, 0.2, 0, 8);
      b.boxB(0.36, 1.0, 0.32, '#2a2c33', 0, 3.4, 0.0);
      b.sphere(0.11, '#ff3045', 0, 4.18, 0.17, { emissive: true, glow: 1.6, w: 8, hs: 6 });
      b.sphere(0.11, '#5a4a10', 0, 3.9, 0.17, { w: 8, hs: 6 });
      b.sphere(0.11, '#123d1f', 0, 3.62, 0.17, { w: 8, hs: 6 });
      b.box(0.36, 0.05, 0.2, '#2a2c33', 0, 4.42, 0.12);
    },
  },
  {
    id: 'barrier',
    name: 'Road Barrier',
    points: 50,
    tags: ['small'],
    sound: 'plastic',
    variants: 2,
    blurb: 'Road closed. Hole open.',
    build(b, _r, v) {
      for (const x of [-0.7, 0.7]) {
        b.box(0.06, 1.0, 0.06, PAL.white, x, 0.5, 0.2, { rx: 0.25 });
        b.box(0.06, 1.0, 0.06, PAL.white, x, 0.5, -0.2, { rx: -0.25 });
      }
      for (let i = 0; i < 6; i++) b.box(0.27, 0.22, 0.05, i % 2 ? PAL.white : v ? PAL.orange : PAL.red, -0.675 + i * 0.27, 0.85, 0);
    },
  },
  {
    id: 'roadbarrel',
    name: 'Traffic Drum',
    points: 35,
    tags: ['small'],
    sound: 'plastic',
    variants: 1,
    blurb: 'Bright, round, delicious.',
    build(b) {
      b.cylB(0.32, 0.36, 0.06, PAL.black, 0, 0, 0, 10);
      b.cylB(0.28, 0.3, 0.95, PAL.orange, 0, 0.06, 0, 10);
      b.cylB(0.295, 0.295, 0.12, PAL.white, 0, 0.35, 0, 10);
      b.cylB(0.285, 0.285, 0.12, PAL.white, 0, 0.65, 0, 10);
    },
  },
  {
    id: 'busshelter',
    name: 'Bus Shelter',
    points: 260,
    tags: ['medium'],
    sound: 'glass',
    variants: 2,
    blurb: 'The bus is late. Forever.',
    build(b, _r, v) {
      const c = v ? '#3d7bf0' : '#33363f';
      for (const x of [-1.7, 1.7]) {
        b.boxB(0.08, 2.4, 0.08, c, x, 0, -0.6);
        b.boxB(0.08, 2.4, 0.08, c, x, 0, 0.6);
        b.boxB(0.04, 2.0, 1.1, '#bfe6ff', x, 0.2, 0);
      }
      b.boxB(3.4, 2.0, 0.04, '#bfe6ff', 0, 0.2, -0.62);
      b.boxB(3.7, 0.12, 1.6, c, 0, 2.4, 0.05);
      b.boxB(1.0, 1.6, 0.06, '#ffe08a', 1.1, 0.4, -0.6, { emissive: true, glow: 1.15 });
      b.boxB(2.0, 0.08, 0.4, PAL.wood, -0.4, 0.5, -0.35);
      for (const x of [-1.2, 0.4]) b.boxB(0.06, 0.5, 0.3, PAL.darkMetal, x, 0, -0.35);
      b.boxB(0.6, 0.18, 0.04, '#ffd23f', -1.2, 2.55, 0.85);
    },
  },
  {
    id: 'phonebooth',
    name: 'Phone Booth',
    points: 140,
    tags: ['medium'],
    sound: 'glass',
    variants: 2,
    heightFactor: 0.25,
    blurb: 'Collect call from the void.',
    build(b, _r, v) {
      const c = v ? '#3d5a80' : '#d63b3b';
      b.boxB(1.0, 0.1, 1.0, c, 0, 0, 0);
      for (const x of [-0.45, 0.45]) for (const z of [-0.45, 0.45]) b.boxB(0.1, 2.3, 0.1, c, x, 0.1, z);
      for (const [x, z, ry] of [[0, 0.46, 0], [0, -0.46, 0], [0.46, 0, Math.PI / 2], [-0.46, 0, Math.PI / 2]] as const)
        b.box(0.8, 1.7, 0.03, '#bfe6ff', x, 1.25, z, { ry });
      b.boxB(1.05, 0.25, 1.05, c, 0, 2.4, 0);
      b.boxB(0.8, 0.12, 1.07, '#fffbe0', 0, 2.45, 0, { emissive: true, glow: 1.2 });
      b.boxB(1.1, 0.1, 1.1, c, 0, 2.65, 0);
    },
  },
  {
    id: 'bikerack',
    name: 'Bike Rack',
    points: 60,
    tags: ['small'],
    sound: 'metal',
    variants: 1,
    blurb: 'Locked up. Swallowed whole.',
    build(b) {
      for (let i = 0; i < 4; i++) b.torus(0.35, 0.03, PAL.metal, -0.75 + i * 0.5, 0.0, 0, { arc: Math.PI, ts: 10 });
      b.box(1.8, 0.04, 0.04, PAL.metal, 0, 0.02, 0);
    },
  },
  {
    id: 'bench_modern',
    name: 'Urban Bench',
    points: 80,
    tags: ['medium'],
    sound: 'wood',
    variants: 2,
    blurb: 'Minimalist. Edible.',
    build(b, _r, v) {
      b.boxB(1.9, 0.38, 0.55, PAL.concrete, 0, 0, 0);
      b.boxB(1.9, 0.08, 0.6, v ? PAL.lightWood : PAL.wood, 0, 0.38, 0);
    },
  },
  {
    id: 'newsstand',
    name: 'Newsstand',
    points: 320,
    tags: ['commercial'],
    sound: 'wood',
    variants: 2,
    heightFactor: 0.22,
    blurb: 'Read all about it: it got eaten.',
    build(b, _r, v) {
      const c = v ? '#2f7d4a' : '#3d5a80';
      b.boxB(2.6, 2.3, 1.8, c, 0, 0, 0);
      b.boxB(2.9, 0.12, 2.2, PAL.darkMetal, 0, 2.3, 0.1);
      b.box(2.2, 1.0, 0.03, '#ffe08a', 0, 1.4, 0.91, { emissive: true, glow: 1.1 });
      b.boxB(2.4, 0.15, 0.5, PAL.wood, 0, 0.85, 1.1);
      for (let i = 0; i < 6; i++) b.box(0.32, 0.42, 0.02, PAL.bright[i % 8], -1.0 + i * 0.4, 1.45, 0.94);
      awning(b, 2.8, 0.7, 2.15, 1.25, '#ffffff', v ? '#3fbf6a' : '#3d7bf0');
    },
  },
  // ---------- Shopping ----------
  {
    id: 'stall',
    name: 'Market Stall',
    points: 300,
    tags: ['commercial'],
    sound: 'wood',
    variants: 4,
    blurb: 'Everything must go. Into the hole.',
    build(b, r, v) {
      const c = ['#e8423f', '#3d7bf0', '#3fbf6a', '#ff8a2a'][v % 4];
      b.boxB(2.6, 0.9, 1.3, PAL.wood, 0, 0, 0);
      b.boxB(2.7, 0.08, 1.4, PAL.lightWood, 0, 0.9, 0);
      for (const x of [-1.25, 1.25]) for (const z of [-0.6, 0.6]) b.boxB(0.07, 2.3, 0.07, PAL.darkWood, x, 0, z);
      awning(b, 2.9, 1.7, 2.35, 0.0, PAL.white, c, 0, 0.25);
      const goods = ['#e8423f', '#ffd23f', '#3fbf6a', '#ff8a2a', '#8b5cf6'];
      for (let i = 0; i < 10; i++) b.ico(0.11, goods[(i + v) % 5], -1.1 + (i % 5) * 0.55, 1.05, i < 5 ? -0.25 : 0.25, 0);
      for (let i = 0; i < 3; i++) b.boxB(0.5, 0.25, 0.4, PAL.lightWood, -0.8 + i * 0.8, 0, 0.95 + r.range(-0.05, 0.05));
    },
  },
  {
    id: 'kiosk',
    name: 'Kiosk',
    points: 380,
    tags: ['commercial'],
    sound: 'wood',
    variants: 3,
    heightFactor: 0.22,
    blurb: 'Open 24/7. Closed forever.',
    build(b, _r, v) {
      const c = ['#ffd23f', '#ff7eb6', '#22c3b5'][v % 3];
      b.boxB(2.6, 2.5, 2.6, c, 0, 0, 0);
      b.box(1.8, 0.9, 0.03, '#fff3c4', 0, 1.5, 1.31, { emissive: true, glow: 1.15 });
      b.boxB(2.0, 0.1, 0.45, PAL.white, 0, 1.0, 1.45);
      b.cone(2.3, 1.0, '#e8423f', 0, 3.0, 0, 4, { ry: Math.PI / 4 });
      b.boxB(1.6, 0.45, 0.1, '#2c2f3a', 0, 2.55, 1.32);
      b.box(1.3, 0.25, 0.02, '#ffd23f', 0, 2.78, 1.38, { emissive: true, glow: 1.4 });
    },
  },
  {
    id: 'foodcart',
    name: 'Food Cart',
    points: 260,
    tags: ['commercial'],
    sound: 'metal',
    variants: 3,
    blurb: 'Hot dogs, hot holes.',
    build(b, _r, v) {
      const c = ['#e8423f', '#3d7bf0', '#ffd23f'][v % 3];
      b.boxB(1.8, 0.9, 0.95, PAL.metal, 0, 0.35, 0);
      b.box(1.82, 0.3, 0.97, c, 0, 0.75, 0);
      b.wheel(0.32, 0.12, -0.5, 0.32, 0.5);
      b.wheel(0.32, 0.12, -0.5, 0.32, -0.5);
      b.boxB(0.08, 0.35, 0.08, PAL.darkMetal, 0.8, 0, 0);
      b.cylB(0.03, 0.03, 1.6, PAL.darkMetal, 0, 1.25, 0, 6);
      stripedCanopy(b, 1.25, 0.55, 2.8, 10, c, PAL.white);
      b.cylB(0.07, 0.07, 0.3, '#c9874d', 0.4, 1.25, 0.2, 6, { rz: Math.PI / 2 });
    },
  },
  {
    id: 'flowerstand',
    name: 'Flower Stand',
    points: 240,
    tags: ['commercial'],
    sound: 'wood',
    variants: 2,
    blurb: 'Fresh bouquets for the void.',
    build(b, r) {
      b.boxB(2.2, 0.3, 1.0, PAL.darkWood, 0, 0, 0);
      for (let s = 0; s < 3; s++) {
        b.boxB(2.2, 0.08, 0.35, PAL.wood, 0, 0.3 + s * 0.4, -0.3 + s * 0.3 - 0.3 + 0.3);
        for (let i = 0; i < 6; i++) {
          const x = -0.9 + i * 0.36, y = 0.4 + s * 0.4, z = -0.3 + s * 0.3 - 0.3 + 0.3;
          b.cylB(0.1, 0.08, 0.18, PAL.terracotta, x, y, z, 6);
          b.ico(0.11, r.pick(['#ff7eb6', '#ffd23f', '#e8423f', '#a78bfa', '#ffffff']), x, y + 0.27, z, 0);
        }
      }
      awning(b, 2.4, 1.0, 2.0, 0.3, '#ffffff', '#3fbf6a', 0, 0.3);
      for (const x of [-1.1, 1.1]) b.boxB(0.06, 2.0, 0.06, PAL.darkWood, x, 0, -0.45);
    },
  },
  {
    id: 'aframe',
    name: 'A-Frame Sign',
    points: 30,
    tags: ['small'],
    sound: 'wood',
    variants: 3,
    blurb: 'Today’s special: you.',
    build(b, _r, v) {
      const c = ['#2c2f3a', '#3d5a80', '#7a1f2b'][v % 3];
      b.box(0.55, 0.85, 0.04, c, 0, 0.42, 0.14, { rx: -0.32 });
      b.box(0.55, 0.85, 0.04, c, 0, 0.42, -0.14, { rx: 0.32 });
      b.box(0.42, 0.55, 0.01, '#f4f4f0', 0, 0.48, 0.17, { rx: -0.32 });
      b.box(0.3, 0.05, 0.012, PAL.red, 0, 0.62, 0.135 + 0.05, { rx: -0.32 });
    },
  },
  {
    id: 'cafeset',
    name: 'Café Terrace',
    points: 180,
    tags: ['medium'],
    sound: 'wood',
    variants: 3,
    blurb: 'Espresso, with a view of the abyss.',
    build(b, _r, v) {
      const c = ['#e8423f', '#3fbf6a', '#3d7bf0'][v % 3];
      b.cylB(0.25, 0.28, 0.04, PAL.darkMetal, 0, 0, 0, 10);
      b.cylB(0.035, 0.035, 0.72, PAL.darkMetal, 0, 0.04, 0, 6);
      b.cylB(0.45, 0.45, 0.04, PAL.white, 0, 0.74, 0, 14);
      for (const a of [0, Math.PI]) {
        b.push(Math.cos(a) * 0.75, 0, Math.sin(a) * 0.75, -a + Math.PI / 2);
        for (const x of [-0.17, 0.17]) for (const z of [-0.17, 0.17]) b.boxB(0.03, 0.45, 0.03, PAL.darkMetal, x, 0, z);
        b.boxB(0.42, 0.05, 0.42, c, 0, 0.45, 0);
        b.boxB(0.42, 0.38, 0.04, c, 0, 0.5, -0.19);
        b.pop();
      }
      b.cylB(0.03, 0.03, 2.3, PAL.white, 0, 0.78, 0, 6);
      stripedCanopy(b, 1.35, 0.5, 2.7, 12, c, PAL.white);
    },
  },
  {
    id: 'vending',
    name: 'Vending Machine',
    points: 130,
    tags: ['medium'],
    sound: 'metal',
    variants: 3,
    blurb: 'Insert hole to continue.',
    build(b, _r, v) {
      const c = ['#e8423f', '#3d7bf0', '#f4f4f0'][v % 3];
      b.boxB(1.0, 1.9, 0.8, c, 0, 0, 0);
      b.boxB(0.65, 1.2, 0.03, '#d8f3ff', -0.1, 0.55, 0.4, { emissive: true, glow: 1.15 });
      for (let r = 0; r < 4; r++) for (let i = 0; i < 4; i++) b.box(0.1, 0.18, 0.02, PAL.bright[(r * 4 + i) % 8], -0.36 + i * 0.17, 0.75 + r * 0.27, 0.42);
      b.boxB(0.18, 0.5, 0.03, PAL.darkMetal, 0.36, 0.9, 0.41);
      b.boxB(0.7, 0.2, 0.03, PAL.black, -0.1, 0.18, 0.41);
    },
  },
  {
    id: 'clothesrack',
    name: 'Clothes Rack',
    points: 90,
    tags: ['medium'],
    sound: 'soft',
    variants: 2,
    blurb: 'One size fits all holes.',
    build(b, r) {
      for (const x of [-0.7, 0.7]) {
        b.boxB(0.05, 1.5, 0.05, PAL.metal, x, 0, 0);
        b.boxB(0.05, 0.05, 0.6, PAL.metal, x, 0, 0);
      }
      b.box(1.45, 0.04, 0.04, PAL.metal, 0, 1.48, 0);
      for (let i = 0; i < 7; i++) b.boxB(0.08, 0.75, 0.45, r.pick(PAL.bright), -0.55 + i * 0.18, 0.7, 0, { ry: r.range(-0.1, 0.1) });
    },
  },
  {
    id: 'giftboxes',
    name: 'Gift Boxes',
    points: 40,
    tags: ['small'],
    sound: 'soft',
    variants: 3,
    blurb: 'It is the thought that counts.',
    build(b, r) {
      const cs = [...PAL.bright].sort(() => r.next() - 0.5);
      const boxes: [number, number, number, number][] = [[0.45, 0.35, -0.12, 0], [0.32, 0.3, 0.25, 0], [0.26, 0.24, -0.05, 0.35]];
      for (let i = 0; i < 3; i++) {
        const [s, h, x, y] = boxes[i];
        b.boxB(s, h, s, cs[i], x, y, 0);
        b.boxB(s + 0.01, h + 0.01, 0.05, PAL.white, x, y, 0);
        b.boxB(0.05, h + 0.01, s + 0.01, PAL.white, x, y, 0);
      }
    },
  },
  {
    id: 'shopsign',
    name: 'Shop Sign',
    points: 90,
    tags: ['medium'],
    sound: 'metal',
    variants: 4,
    heightFactor: 0.2,
    blurb: 'Grand opening, grand swallowing.',
    build(b, _r, v) {
      const c = ['#ff3d9a', '#3de8ff', '#ffd23f', '#7b5cff'][v % 4];
      b.cylB(0.05, 0.05, 2.6, PAL.darkMetal, -0.8, 0, 0, 6);
      b.cylB(0.05, 0.05, 2.6, PAL.darkMetal, 0.8, 0, 0, 6);
      b.boxB(2.0, 0.8, 0.12, '#22232a', 0, 2.1, 0);
      b.box(1.8, 0.6, 0.02, c, 0, 2.5, 0.07, { emissive: true, glow: 1.25 });
      b.box(1.8, 0.6, 0.02, c, 0, 2.5, -0.07, { emissive: true, glow: 1.25 });
    },
  },
  {
    id: 'umbrella_table',
    name: 'Parasol',
    points: 70,
    tags: ['medium'],
    sound: 'soft',
    variants: 4,
    blurb: 'Shade for the void.',
    build(b, _r, v) {
      const c = ['#e8423f', '#3d7bf0', '#3fbf6a', '#ff8a2a'][v % 4];
      b.cylB(0.25, 0.28, 0.08, PAL.darkMetal, 0, 0, 0, 8);
      b.cylB(0.03, 0.03, 2.2, PAL.white, 0, 0.08, 0, 6);
      stripedCanopy(b, 1.15, 0.42, 1.95, 10, c, PAL.white);
    },
  },
]);
