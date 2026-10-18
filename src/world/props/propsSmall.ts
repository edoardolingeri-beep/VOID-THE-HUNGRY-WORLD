import { defineProps, PAL } from './types';

const ballColors = ['#e8423f', '#3d7bf0', '#ffd23f', '#ff7eb6', '#3fbf6a'];

defineProps([
  {
    id: 'can',
    name: 'Soda Can',
    points: 10,
    tags: ['small'],
    sound: 'metal',
    variants: 4,
    blurb: 'Fizzy, crunchy, gone.',
    build(b, _r, v) {
      const c = ['#e8423f', '#3d7bf0', '#3fbf6a', '#ff8a2a'][v % 4];
      b.cylB(0.085, 0.085, 0.24, c, 0, 0, 0, 10);
      b.cylB(0.087, 0.087, 0.06, PAL.white, 0, 0.09, 0, 10);
      b.cylB(0.07, 0.085, 0.02, PAL.metal, 0, 0.24, 0, 10);
      b.cylB(0.075, 0.07, 0.02, PAL.metal, 0, -0.0, 0, 10);
    },
  },
  {
    id: 'apple',
    name: 'Apple',
    points: 10,
    tags: ['small', 'nature'],
    sound: 'organic',
    variants: 3,
    blurb: 'An apple a day keeps the void away. Or not.',
    build(b, _r, v) {
      const c = ['#e8423f', '#7ccf5a', '#ffb02e'][v % 3];
      b.sphere(0.12, c, 0, 0.115, 0, { sy: 0.9, w: 9, hs: 7 });
      b.cyl(0.012, 0.012, 0.07, PAL.trunk, 0, 0.24, 0, 5, { rz: 0.2 });
      b.box(0.07, 0.01, 0.035, PAL.leaf, 0.04, 0.25, 0, { rz: -0.4 });
    },
  },
  {
    id: 'ball',
    name: 'Play Ball',
    points: 10,
    tags: ['small'],
    sound: 'plastic',
    variants: 5,
    blurb: 'Bouncy. Until it is not.',
    build(b, _r, v) {
      const c = ballColors[v % ballColors.length];
      b.ico(0.17, c, 0, 0.17, 0, 1);
      b.torus(0.168, 0.018, PAL.white, 0, 0.17, 0, { rx: Math.PI / 2, ts: 18 });
      b.torus(0.168, 0.018, PAL.white, 0, 0.17, 0, { ts: 18 });
    },
  },
  {
    id: 'soccerball',
    name: 'Football',
    points: 12,
    tags: ['small'],
    sound: 'plastic',
    variants: 1,
    blurb: 'Goal! Into the void.',
    build(b) {
      b.ico(0.19, PAL.white, 0, 0.19, 0, 1);
      const pts: [number, number, number][] = [
        [0, 1, 0], [0.9, 0.3, 0.3], [-0.9, 0.3, 0.3], [0.3, 0.3, -0.9], [-0.4, -0.2, -0.85], [0.5, -0.4, 0.75], [-0.5, -0.4, 0.75],
      ];
      for (const [x, y, z] of pts) {
        const l = Math.hypot(x, y, z);
        b.dodeca(0.06, PAL.black, (x / l) * 0.17, 0.19 + (y / l) * 0.17, (z / l) * 0.17);
      }
    },
  },
  {
    id: 'cup',
    name: 'Coffee Cup',
    points: 10,
    tags: ['small'],
    sound: 'plastic',
    variants: 3,
    blurb: 'Takeaway, take-in, take-down.',
    build(b, _r, v) {
      const c = ['#f4f4f0', '#ffd23f', '#ff7eb6'][v % 3];
      b.lathe([[0, 0], [0.07, 0], [0.095, 0.24], [0, 0.24]], c, 0, 0, 0, 12);
      b.lathe([[0.082, 0.07], [0.09, 0.07], [0.093, 0.16], [0.085, 0.16]], PAL.wood, 0, 0, 0, 12);
      b.lathe([[0, 0.27], [0.1, 0.25], [0.1, 0.24], [0, 0.24]], '#3a2b22', 0, 0, 0, 12);
    },
  },
  {
    id: 'bottle',
    name: 'Bottle',
    points: 10,
    tags: ['small'],
    sound: 'glass',
    variants: 3,
    blurb: 'Message not included.',
    build(b, _r, v) {
      const c = ['#3fae6a', '#6fb8e8', '#a8754a'][v % 3];
      b.lathe([[0, 0], [0.07, 0], [0.075, 0.2], [0.03, 0.27], [0.025, 0.34], [0, 0.34]], c, 0, 0, 0, 10);
      b.cylB(0.028, 0.028, 0.03, PAL.red, 0, 0.33, 0, 8);
      b.cylB(0.076, 0.076, 0.07, PAL.cream, 0, 0.08, 0, 10);
    },
  },
  {
    id: 'flowerpot',
    name: 'Flower Pot',
    points: 15,
    tags: ['small', 'nature'],
    sound: 'wood',
    variants: 4,
    blurb: 'Terracotta crunch with a floral finish.',
    build(b, r, v) {
      b.lathe([[0, 0], [0.13, 0], [0.18, 0.26], [0.2, 0.28], [0.2, 0.31], [0, 0.31]], PAL.terracotta, 0, 0, 0, 10);
      b.cylB(0.17, 0.17, 0.02, '#5a3d2a', 0, 0.3, 0, 10);
      const fc = ['#ff7eb6', '#ffd23f', '#e8423f', '#a78bfa'][v % 4];
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2 + r.next();
        const x = Math.cos(a) * 0.08, z = Math.sin(a) * 0.08;
        b.cyl(0.01, 0.01, 0.18, PAL.leafDark, x, 0.4, z, 4);
        b.ico(0.055, fc, x, 0.5, z, 0);
        b.ico(0.025, PAL.yellow, x, 0.53, z, 0);
      }
      b.ico(0.11, PAL.leaf, 0, 0.36, 0, 0, { sy: 0.6 });
    },
  },
  {
    id: 'vase',
    name: 'Ceramic Vase',
    points: 15,
    tags: ['small'],
    sound: 'glass',
    variants: 3,
    blurb: 'Priceless. Probably.',
    build(b, _r, v) {
      const c = ['#3d7bf0', '#22c3b5', '#f4f4f0'][v % 3];
      b.lathe([[0, 0], [0.09, 0], [0.16, 0.12], [0.15, 0.26], [0.07, 0.36], [0.09, 0.42], [0, 0.42]], c, 0, 0, 0, 12);
      b.lathe([[0.152, 0.14], [0.158, 0.14], [0.155, 0.2], [0.149, 0.2]], PAL.white, 0, 0, 0, 12);
    },
  },
  {
    id: 'duck',
    name: 'Rubber Duck',
    points: 15,
    tags: ['small'],
    sound: 'plastic',
    variants: 2,
    blurb: 'Squeak.',
    build(b, _r, v) {
      const c = v === 0 ? '#ffd23f' : '#ff7eb6';
      b.sphere(0.13, c, 0, 0.11, 0, { sx: 1.25, sy: 0.85, w: 10 });
      b.sphere(0.085, c, 0.08, 0.25, 0, { w: 9 });
      b.box(0.07, 0.025, 0.06, PAL.orange, 0.17, 0.24, 0);
      b.sphere(0.015, PAL.black, 0.14, 0.28, 0.05, { w: 5, hs: 4 });
      b.sphere(0.015, PAL.black, 0.14, 0.28, -0.05, { w: 5, hs: 4 });
      b.box(0.06, 0.04, 0.12, c, -0.15, 0.17, 0, { rz: 0.6 });
    },
  },
  {
    id: 'toyblocks',
    name: 'Toy Blocks',
    points: 15,
    tags: ['small'],
    sound: 'wood',
    variants: 3,
    blurb: 'A, B, C… void.',
    build(b, r) {
      const cols = [...PAL.bright].sort(() => r.next() - 0.5);
      b.boxB(0.17, 0.17, 0.17, cols[0], -0.1, 0, 0, { ry: r.range(-0.3, 0.3) });
      b.boxB(0.17, 0.17, 0.17, cols[1], 0.1, 0, 0.02, { ry: r.range(-0.3, 0.3) });
      b.boxB(0.17, 0.17, 0.17, cols[2], 0, 0.17, 0.01, { ry: r.range(-0.5, 0.5) });
    },
  },
  {
    id: 'teddy',
    name: 'Teddy Bear',
    points: 20,
    tags: ['small'],
    sound: 'soft',
    variants: 2,
    blurb: 'Cuddly snack.',
    build(b, _r, v) {
      const c = v === 0 ? '#b07a4f' : '#e8c79c';
      b.sphere(0.13, c, 0, 0.14, 0, { sy: 1.05 });
      b.sphere(0.1, c, 0, 0.33, 0);
      b.sphere(0.04, c, 0.07, 0.42, 0);
      b.sphere(0.04, c, -0.07, 0.42, 0);
      b.sphere(0.045, PAL.cream, 0, 0.31, 0.085, { w: 7, hs: 5 });
      b.sphere(0.012, PAL.black, 0, 0.32, 0.13, { w: 5, hs: 4 });
      b.sphere(0.05, c, 0.12, 0.05, 0.06);
      b.sphere(0.05, c, -0.12, 0.05, 0.06);
      b.sphere(0.045, c, 0.14, 0.18, 0.03);
      b.sphere(0.045, c, -0.14, 0.18, 0.03);
      b.box(0.11, 0.03, 0.02, PAL.red, 0, 0.245, 0.085);
    },
  },
  {
    id: 'toycar',
    name: 'Toy Car',
    points: 20,
    tags: ['small'],
    sound: 'plastic',
    variants: 4,
    blurb: 'Zoom zoom, gulp.',
    build(b, _r, v) {
      const c = PAL.bright[v % PAL.bright.length];
      b.boxB(0.34, 0.09, 0.17, c, 0, 0.04, 0);
      b.boxB(0.18, 0.08, 0.15, PAL.glass, -0.02, 0.13, 0);
      b.wheel(0.045, 0.03, 0.11, 0.045, 0.09);
      b.wheel(0.045, 0.03, -0.11, 0.045, 0.09);
      b.wheel(0.045, 0.03, 0.11, 0.045, -0.09);
      b.wheel(0.045, 0.03, -0.11, 0.045, -0.09);
    },
  },
  {
    id: 'frisbee',
    name: 'Frisbee',
    points: 10,
    tags: ['small'],
    sound: 'plastic',
    variants: 3,
    noShadow: true,
    blurb: 'Thrown once, caught forever.',
    build(b, _r, v) {
      const c = ['#ff8a2a', '#22c3b5', '#8b5cf6'][v % 3];
      b.lathe([[0, 0.04], [0.15, 0.035], [0.17, 0.0], [0.16, 0.0], [0, 0.03]], c, 0, 0.005, 0, 14);
    },
  },
  {
    id: 'flowers',
    name: 'Wild Flowers',
    points: 5,
    tags: ['small', 'nature'],
    sound: 'organic',
    variants: 4,
    blurb: 'Freshly picked by gravity.',
    build(b, r, v) {
      const fc = ['#ff7eb6', '#ffd23f', '#ffffff', '#a78bfa'][v % 4];
      for (let i = 0; i < 4; i++) {
        const x = r.range(-0.08, 0.08), z = r.range(-0.08, 0.08), h = r.range(0.12, 0.22);
        b.cylB(0.008, 0.008, h, PAL.leafDark, x, 0, z, 4);
        b.ico(0.035, fc, x, h, z, 0);
      }
      b.ico(0.07, PAL.leaf, 0, 0.02, 0, 0, { sy: 0.5 });
    },
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    points: 10,
    tags: ['small'],
    sound: 'organic',
    variants: 1,
    blurb: 'Lunch for the void.',
    build(b) {
      b.extrude([[-0.12, 0], [0.12, 0], [0, 0.18]], 0.05, '#f2d49b', 0, 0.09, 0, { rx: -Math.PI / 2 });
      b.extrude([[-0.115, 0], [0.115, 0], [0, 0.17]], 0.03, PAL.leafLight, 0, 0.055, 0.003, { rx: -Math.PI / 2 });
      b.extrude([[-0.12, 0], [0.12, 0], [0, 0.18]], 0.04, '#f2d49b', 0, 0.025, 0, { rx: -Math.PI / 2 });
    },
  },
  {
    id: 'basket',
    name: 'Picnic Basket',
    points: 30,
    tags: ['small'],
    sound: 'wood',
    variants: 2,
    blurb: 'Contains one (1) delicious picnic.',
    build(b, _r, v) {
      const w = v ? '#d6a96c' : '#c9965f';
      b.boxB(0.5, 0.24, 0.34, w, 0, 0, 0);
      for (let i = 0; i < 3; i++) b.boxB(0.51, 0.025, 0.35, '#a8754a', 0, 0.05 + i * 0.07, 0);
      for (let i = 0; i < 5; i++) b.boxB(0.04, 0.24, 0.352, '#b9844f', -0.2 + i * 0.1, 0, 0);
      // gingham cloth peeking out
      b.boxB(0.46, 0.04, 0.3, v ? '#3d7bf0' : '#e8423f', 0, 0.24, 0);
      for (let i = 0; i < 4; i++) b.boxB(0.05, 0.042, 0.3, '#ffffff', -0.15 + i * 0.1, 0.242, 0);
      b.box(0.5, 0.03, 0.17, w, 0, 0.32, -0.12, { rx: -0.9 });
      b.torus(0.18, 0.018, '#8f6640', 0, 0.24, 0, { arc: Math.PI, ts: 10 });
    },
  },
  {
    id: 'gnome',
    name: 'Garden Gnome',
    points: 25,
    tags: ['small'],
    sound: 'wood',
    variants: 2,
    blurb: 'He has seen things.',
    build(b, _r, v) {
      b.cylB(0.12, 0.14, 0.2, v ? '#3d7bf0' : '#3fbf6a', 0, 0, 0, 8);
      b.sphere(0.09, '#f6cfa8', 0, 0.27, 0, { w: 8, hs: 6 });
      b.cone(0.13, 0.08, PAL.white, 0, 0.21, 0.05, 8, { rx: 0.5 });
      b.cone(0.1, 0.26, PAL.red, 0, 0.45, 0, 8);
    },
  },
  {
    id: 'kite',
    name: 'Kite',
    points: 15,
    tags: ['small'],
    sound: 'soft',
    variants: 3,
    noShadow: false,
    blurb: 'Grounded at last.',
    build(b, _r, v) {
      const c = PAL.bright[(v * 3) % PAL.bright.length];
      b.extrude([[0, 0.25], [0.16, 0], [0, -0.32], [-0.16, 0]], 0.015, c, 0, 0.012, 0, { rx: -Math.PI / 2 });
      b.box(0.012, 0.012, 0.55, PAL.darkWood, 0, 0.03, 0);
      b.box(0.3, 0.012, 0.012, PAL.darkWood, 0, 0.03, 0);
    },
  },
  {
    id: 'skateboard',
    name: 'Skateboard',
    points: 20,
    tags: ['small'],
    sound: 'wood',
    variants: 3,
    blurb: 'Kickflip into oblivion.',
    build(b, _r, v) {
      const c = ['#e8423f', '#2c2f3a', '#22c3b5'][v % 3];
      b.boxB(0.7, 0.03, 0.2, c, 0, 0.08, 0);
      b.boxB(0.06, 0.03, 0.18, c, 0.37, 0.1, 0, { rz: 0.4 });
      b.boxB(0.06, 0.03, 0.18, c, -0.37, 0.1, 0, { rz: -0.4 });
      for (const x of [-0.24, 0.24]) for (const z of [-0.08, 0.08]) b.cyl(0.035, 0.035, 0.035, PAL.white, x, 0.035, z, 8, { rx: Math.PI / 2 });
    },
  },
]);
