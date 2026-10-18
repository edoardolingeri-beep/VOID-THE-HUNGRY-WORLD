import { defineProps, PAL } from './types';
import { stripedCanopy, awning } from './propsCity';
import type { ModelBuilder } from '../ModelBuilder';

const fair = ['#ff3d6e', '#ffc94a', '#3db8ff', '#7b5cff', '#3fd58a', '#ff8a2a'];

function bulbs(b: ModelBuilder, r: number, y: number, n: number, color = '#fff1b8') {
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    b.sphere(0.07, color, Math.cos(a) * r, y, Math.sin(a) * r, { emissive: true, glow: 1.3, w: 5, hs: 4 });
  }
}

defineProps([
  {
    id: 'balloon',
    name: 'Helium Balloon',
    points: 12,
    tags: ['small'],
    sound: 'plastic',
    variants: 6,
    idle: 'bob',
    heightFactor: 0.08,
    blurb: 'It wanted to fly. It fell instead.',
    build(b, _r, v) {
      const c = fair[v % fair.length];
      b.cylB(0.006, 0.006, 1.25, '#f4f4f0', 0, 0, 0, 4);
      b.sphere(0.24, c, 0, 1.5, 0, { sy: 1.2 });
      b.cone(0.05, 0.08, c, 0, 1.22, 0, 6, { rx: Math.PI });
    },
  },
  {
    id: 'icecream',
    name: 'Ice Cream Cone',
    points: 10,
    tags: ['small'],
    sound: 'organic',
    variants: 3,
    blurb: 'Melting into the void.',
    build(b, _r, v) {
      b.cone(0.08, 0.22, '#d9a35f', 0, 0.11, 0, 10, { rx: Math.PI });
      b.sphere(0.09, ['#ffb6d0', '#fff1d6', '#8b5a3c'][v % 3], 0, 0.26, 0);
      b.sphere(0.07, ['#fff1d6', '#ffb6d0', '#ffd23f'][v % 3], 0.01, 0.36, 0);
    },
  },
  {
    id: 'balloonstand',
    name: 'Balloon Cart',
    points: 80,
    tags: ['medium'],
    sound: 'plastic',
    variants: 2,
    heightFactor: 0.15,
    blurb: 'A whole bouquet of lift, cancelled.',
    build(b, r) {
      b.boxB(0.9, 0.6, 0.6, '#f4f4f0', 0, 0.2, 0);
      b.wheel(0.2, 0.08, -0.25, 0.2, 0.33);
      b.wheel(0.2, 0.08, -0.25, 0.2, -0.33);
      for (let i = 0; i < 9; i++) {
        const x = r.range(-0.6, 0.6), z = r.range(-0.6, 0.6), h = r.range(1.6, 2.4);
        b.cylB(0.006, 0.006, h - 0.8, '#f4f4f0', x * 0.3, 0.8, z * 0.3, 4);
        b.sphere(0.26, fair[i % fair.length], x, h, z, { sy: 1.2 });
      }
    },
  },
  {
    id: 'bumpercar',
    name: 'Bumper Car',
    points: 70,
    tags: ['medium', 'vehicle'],
    sound: 'metal',
    variants: 5,
    idle: 'robot',
    blurb: 'Bump. Bump. Gulp.',
    build(b, _r, v) {
      const c = fair[v % fair.length];
      b.boxB(1.3, 0.25, 0.9, '#2c2f3a', 0, 0.05, 0);
      b.torus(0.55, 0.1, '#2c2f3a', 0, 0.2, 0, { rx: Math.PI / 2, sx: 1.25 });
      b.boxB(1.1, 0.35, 0.8, c, 0, 0.3, 0);
      b.boxB(0.35, 0.45, 0.7, c, -0.35, 0.55, 0);
      b.boxB(0.3, 0.12, 0.55, '#26262c', 0.05, 0.65, 0);
      b.cylB(0.02, 0.02, 1.6, PAL.metal, -0.45, 0.6, 0, 6);
      b.sphere(0.08, '#ffd23f', 0.5, 0.6, 0, { emissive: true, glow: 1.2 });
    },
  },
  {
    id: 'popcorn',
    name: 'Popcorn Cart',
    points: 220,
    tags: ['commercial'],
    sound: 'metal',
    variants: 2,
    blurb: 'Pop. Pop. Void.',
    build(b, _r, v) {
      const c = v ? '#3db8ff' : '#e8423f';
      b.boxB(1.3, 0.8, 0.8, c, 0, 0.35, 0);
      b.wheel(0.3, 0.1, -0.35, 0.3, 0.45);
      b.wheel(0.3, 0.1, -0.35, 0.3, -0.45);
      b.boxB(1.0, 0.75, 0.6, '#d8f3ff', 0, 1.15, 0);
      b.boxB(0.9, 0.35, 0.5, '#ffe18a', 0, 1.17, 0);
      b.boxB(1.1, 0.1, 0.7, c, 0, 1.9, 0);
      stripedCanopy(b, 0.75, 0.45, 2.0, 10, c, PAL.white);
    },
  },
  {
    id: 'cottoncandy',
    name: 'Candy Floss Cart',
    points: 220,
    tags: ['commercial'],
    sound: 'soft',
    variants: 2,
    blurb: 'Sugar clouds, sucked in.',
    build(b, _r, v) {
      const c = v ? '#7b5cff' : '#ff7eb6';
      b.boxB(1.4, 0.9, 0.8, '#f4f4f0', 0, 0.3, 0);
      b.box(1.42, 0.25, 0.82, c, 0, 0.9, 0);
      b.wheel(0.28, 0.1, 0.4, 0.28, 0.45);
      b.wheel(0.28, 0.1, 0.4, 0.28, -0.45);
      b.cylB(0.4, 0.3, 0.3, PAL.metal, 0, 1.2, 0, 12);
      for (let i = 0; i < 5; i++) {
        const x = -0.5 + i * 0.25;
        b.cylB(0.012, 0.012, 0.5, '#f4f4f0', x, 1.2, -0.3, 4);
        b.sphere(0.16, i % 2 ? '#ffc2dc' : '#c9b8ff', x, 1.8, -0.3, { sy: 1.2 });
      }
      b.cylB(0.03, 0.03, 1.3, PAL.white, 0.6, 1.2, 0.3, 6);
      stripedCanopy(b, 0.9, 0.4, 2.45, 10, c, PAL.white, 0.6, 0.3);
    },
  },
  {
    id: 'ticketbooth',
    name: 'Ticket Booth',
    points: 300,
    tags: ['commercial'],
    sound: 'wood',
    variants: 2,
    heightFactor: 0.2,
    blurb: 'Admit one. Into the hole.',
    build(b, _r, v) {
      const c = v ? '#3fd58a' : '#ffc94a';
      b.cylB(1.0, 1.05, 2.2, c, 0, 0, 0, 12);
      b.box(0.9, 0.7, 0.03, '#fff3c4', 0, 1.35, 1.0, { emissive: true, glow: 1.05 });
      b.boxB(1.0, 0.08, 0.35, PAL.white, 0, 0.95, 1.05);
      b.cylB(1.2, 1.2, 0.15, PAL.white, 0, 2.2, 0, 12);
      stripedCanopy(b, 1.25, 0.9, 2.35, 12, '#e8423f', PAL.white);
      b.sphere(0.12, '#ffc94a', 0, 3.35, 0, { emissive: true, glow: 1.3 });
      bulbs(b, 1.22, 2.28, 12);
    },
  },
  {
    id: 'gamebooth',
    name: 'Prize Booth',
    points: 340,
    tags: ['commercial'],
    sound: 'wood',
    variants: 3,
    heightFactor: 0.2,
    blurb: 'Everybody wins. Especially the hole.',
    build(b, r, v) {
      const c = fair[(v * 2) % fair.length];
      b.boxB(3.0, 1.0, 1.6, c, 0, 0, 0);
      b.boxB(3.1, 0.1, 1.8, PAL.white, 0, 1.0, 0.05);
      for (const x of [-1.45, 1.45]) for (const z of [-0.75, 0.75]) b.boxB(0.1, 2.6, 0.1, PAL.white, x, 0, z);
      b.boxB(3.0, 1.6, 0.1, '#2c2f3a', 0, 1.0, -0.75);
      for (let i = 0; i < 12; i++) {
        const x = -1.2 + (i % 6) * 0.48, y = 1.25 + Math.floor(i / 6) * 0.55;
        b.sphere(0.17, r.pick(['#b07a4f', '#ff9ec8', '#9fd3ff', '#ffd23f']), x, y, -0.6);
      }
      awning(b, 3.3, 1.2, 2.6, 0.25, PAL.white, c, 0, 0.3);
      b.box(1.6, 0.4, 0.06, '#ffc94a', 0, 3.0, 0.85, { emissive: true, glow: 1.2 });
    },
  },
  {
    id: 'teacups',
    name: 'Teacup Ride',
    points: 800,
    tags: ['ride'],
    sound: 'glass',
    variants: 1,
    heightFactor: 0.2,
    blurb: 'Spinning straight down.',
    build(b) {
      b.cylB(3.9, 4.0, 0.3, '#f4f4f0', 0, 0, 0, 24);
      b.cylB(3.6, 3.6, 0.05, '#ff9ec8', 0, 0.3, 0, 24);
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2 + 0.4;
        const x = Math.cos(a) * 2.3, z = Math.sin(a) * 2.3;
        const c = fair[i % fair.length];
        b.lathe([[0, 0], [0.4, 0], [0.9, 0.35], [1.05, 0.95], [0.98, 0.95], [0.85, 0.42], [0, 0.42]], c, x, 0.35, z, 14);
        b.torus(0.28, 0.07, c, x + 1.1 * Math.cos(a), 0.95, z + 1.1 * Math.sin(a), { ry: -a, ts: 10 });
        b.cylB(0.5, 0.5, 0.25, '#f4f4f0', x, 0.75, z, 12);
      }
      b.sphere(0.9, '#ffffff', 0, 1.0, 0, { sy: 0.85 });
      b.sphere(0.25, '#ff7eb6', 0, 1.85, 0);
      b.cyl(0.12, 0.2, 0.9, '#ffffff', 0.95, 1.2, 0, 8, { rz: -1.0 });
      bulbs(b, 3.85, 0.32, 24);
    },
  },
  {
    id: 'carousel',
    name: 'Carousel',
    points: 1300,
    tags: ['ride'],
    sound: 'metal',
    variants: 2,
    heightFactor: 0.2,
    blurb: 'Round and round and down.',
    build(b, r, v) {
      const c = v ? '#3db8ff' : '#e8423f';
      b.cylB(4.8, 5.0, 0.5, '#f4e3c1', 0, 0, 0, 28);
      b.cylB(4.6, 4.6, 0.06, '#c96f5a', 0, 0.5, 0, 28);
      b.cylB(0.9, 0.9, 3.6, '#ffc94a', 0, 0.5, 0, 16);
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        const x = Math.cos(a) * 3.5, z = Math.sin(a) * 3.5;
        b.cylB(0.05, 0.05, 3.6, '#ffe18a', x, 0.5, z, 6);
        const y = 1.2 + (i % 2) * 0.35;
        b.push(x, y, z, -a);
        const hc = r.pick(['#ffffff', '#f2d7a6', '#b07a4f', '#d9d2c4']);
        b.box(0.28, 0.45, 1.0, hc, 0, 0.25, 0);
        b.box(0.2, 0.5, 0.25, hc, 0, 0.6, 0.5, { rx: -0.5 });
        b.box(0.08, 0.5, 0.08, hc, 0.1, -0.15, 0.35);
        b.box(0.08, 0.5, 0.08, hc, -0.1, -0.15, -0.35);
        b.box(0.3, 0.1, 0.35, c, 0, 0.5, 0);
        b.pop();
      }
      b.cylB(5.0, 5.0, 0.6, c, 0, 4.0, 0, 28);
      b.cylB(5.02, 5.02, 0.12, '#ffc94a', 0, 4.25, 0, 28);
      stripedCanopy(b, 5.2, 2.2, 4.6, 20, c, '#ffffff');
      b.cylB(0.08, 0.08, 1.0, '#ffc94a', 0, 6.7, 0, 6);
      b.sphere(0.3, '#ffc94a', 0, 7.8, 0, { emissive: true, glow: 1.3 });
      bulbs(b, 5.05, 4.3, 28);
    },
  },
  {
    id: 'ferriswheel',
    name: 'Ferris Wheel',
    points: 3200,
    tags: ['ride', 'landmark'],
    sound: 'heavy',
    variants: 1,
    heightFactor: 0.1,
    blurb: 'The best view in town, now from below.',
    build(b) {
      const R = 7.4, H = 9.2;
      // A-frame supports on both sides of the wheel
      for (const z of [-1.4, 1.4]) {
        b.box(0.35, 10.2, 0.35, '#f4f4f0', -2.4, 4.6, z, { rz: -0.27 });
        b.box(0.35, 10.2, 0.35, '#f4f4f0', 2.4, 4.6, z, { rz: 0.27 });
      }
      b.boxB(7.6, 0.4, 3.6, '#c4bdae', 0, 0, 0);
      b.cyl(0.45, 0.45, 3.2, '#ffc94a', 0, H, 0, 14, { rx: Math.PI / 2 });
      for (const z of [-0.75, 0.75]) {
        b.torus(R, 0.13, '#ff3d6e', 0, H, z, { ts: 48, rs: 6 });
        b.torus(R * 0.55, 0.08, '#ffffff', 0, H, z, { ts: 32, rs: 6 });
        for (let i = 0; i < 12; i++) {
          const a = (i / 12) * Math.PI * 2;
          b.box(0.08, R, 0.08, '#ffffff', Math.cos(a) * R * 0.5, H + Math.sin(a) * R * 0.5, z, { rz: a - Math.PI / 2 });
        }
      }
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        const x = Math.cos(a) * R, y = H + Math.sin(a) * R;
        b.box(0.06, 0.6, 0.06, '#d9d2c4', x, y - 0.3, 0);
        b.boxB(0.95, 0.8, 1.1, fair[i % fair.length], x, y - 1.35, 0);
        b.cone(0.65, 0.3, fair[(i + 2) % fair.length], x, y - 0.4, 0, 4, { ry: Math.PI / 4 });
        b.sphere(0.12, '#fff1b8', x, y, 0.85, { emissive: true, glow: 1.4, w: 6, hs: 4 });
        b.sphere(0.12, '#fff1b8', x, y, -0.85, { emissive: true, glow: 1.4, w: 6, hs: 4 });
      }
    },
  },
]);
