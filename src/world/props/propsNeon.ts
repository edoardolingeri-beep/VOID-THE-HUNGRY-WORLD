import { defineProps } from './types';

const neon = ['#ff3d9a', '#3de8ff', '#7b5cff', '#ffe14a', '#3dff9e'];
const body = '#1d2033';
const body2 = '#2b2f48';

defineProps([
  {
    id: 'neonbollard',
    name: 'Glow Bollard',
    points: 20,
    tags: ['small'],
    sound: 'tech',
    variants: 3,
    blurb: 'Pretty light, pretty snack.',
    build(b, _r, v) {
      b.cylB(0.13, 0.15, 0.7, body, 0, 0, 0, 8);
      b.cylB(0.14, 0.14, 0.12, neon[v % 5], 0, 0.55, 0, 8, { emissive: true, glow: 1.8 });
    },
  },
  {
    id: 'datacube',
    name: 'Data Cube',
    points: 25,
    tags: ['small'],
    sound: 'tech',
    variants: 3,
    blurb: '1 terabyte of cat videos.',
    build(b, _r, v) {
      b.boxB(0.5, 0.5, 0.5, body2, 0, 0, 0);
      b.boxB(0.52, 0.06, 0.52, neon[v % 5], 0, 0.22, 0, { emissive: true, glow: 1.6 });
      b.boxB(0.3, 0.3, 0.02, neon[(v + 1) % 5], 0, 0.1, 0.26, { emissive: true, glow: 1.3 });
    },
  },
  {
    id: 'holoplant',
    name: 'Holo Plant',
    points: 30,
    tags: ['small', 'nature'],
    sound: 'tech',
    variants: 2,
    blurb: 'Synthetic photosynthesis, genuine digestion.',
    build(b, _r, v) {
      b.cylB(0.22, 0.18, 0.35, body2, 0, 0, 0, 8);
      b.ico(0.28, v ? '#3dff9e' : '#3de8ff', 0, 0.65, 0, 0, { emissive: true, glow: 0.8 });
    },
  },
  {
    id: 'drone',
    name: 'Courier Drone',
    points: 60,
    tags: ['small'],
    sound: 'tech',
    variants: 2,
    idle: 'hover',
    blurb: 'Package undeliverable.',
    build(b, _r, v) {
      const c = neon[v % 5];
      b.boxB(0.5, 0.15, 0.5, body2, 0, 0.9, 0);
      for (const x of [-0.35, 0.35]) for (const z of [-0.35, 0.35]) {
        b.cyl(0.18, 0.18, 0.02, c, x, 1.07, z, 10, { emissive: true, glow: 1.3 });
        b.box(0.35, 0.04, 0.04, body, x / 2, 1.0, z / 2, { ry: Math.atan2(z, x) });
      }
      b.boxB(0.3, 0.25, 0.3, '#ffd23f', 0, 0.62, 0);
      b.cylB(0.02, 0.02, 0.6, body, 0, 0.0, 0, 4);
    },
  },
  {
    id: 'robot',
    name: 'Service Robot',
    points: 140,
    tags: ['medium'],
    sound: 'tech',
    variants: 3,
    idle: 'robot',
    blurb: 'Beep boop. Gulp.',
    build(b, _r, v) {
      const c = neon[v % 5];
      b.cylB(0.38, 0.45, 0.3, body, 0, 0, 0, 10);
      b.cylB(0.32, 0.38, 0.9, '#d9dde6', 0, 0.3, 0, 10);
      b.cylB(0.39, 0.39, 0.08, c, 0, 0.75, 0, 10, { emissive: true, glow: 1.5 });
      b.sphere(0.3, '#d9dde6', 0, 1.35, 0, { w: 10, hs: 7 });
      b.box(0.42, 0.12, 0.2, c, 0, 1.38, 0.2, { emissive: true, glow: 1.8 });
      b.cylB(0.02, 0.02, 0.35, body, 0, 1.6, 0, 4);
      b.sphere(0.06, c, 0, 1.97, 0, { emissive: true, glow: 2 });
      for (const s of [-1, 1]) b.box(0.1, 0.55, 0.12, body2, s * 0.42, 0.85, 0, { rz: s * 0.25 });
    },
  },
  {
    id: 'mech',
    name: 'Patrol Mech',
    points: 480,
    tags: ['medium', 'vehicle'],
    sound: 'tech',
    variants: 2,
    idle: 'robot',
    heightFactor: 0.22,
    blurb: 'Defeated without a fight.',
    build(b, _r, v) {
      const c = neon[(v + 2) % 5];
      for (const s of [-1, 1]) {
        b.boxB(0.5, 1.6, 0.6, body2, s * 0.7, 0, 0);
        b.boxB(0.7, 0.2, 1.0, body, s * 0.7, 0, 0.1);
        b.box(0.52, 0.1, 0.62, c, s * 0.7, 1.0, 0, { emissive: true, glow: 1.5 });
      }
      b.boxB(2.2, 1.3, 1.6, '#d9dde6', 0, 1.6, 0);
      b.box(1.4, 0.3, 0.05, c, 0, 2.5, 0.81, { emissive: true, glow: 2 });
      for (const s of [-1, 1]) b.boxB(0.5, 0.5, 1.6, body2, s * 1.35, 2.1, 0.3);
      b.cylB(0.05, 0.05, 1.0, body, 0.6, 2.9, -0.4, 4);
      b.sphere(0.1, c, 0.6, 3.95, -0.4, { emissive: true, glow: 2 });
    },
  },
  {
    id: 'hovercar',
    name: 'Hovercar',
    points: 220,
    tags: ['vehicle'],
    sound: 'tech',
    variants: 5,
    idle: 'hover',
    blurb: 'Flying cars were promised. Holes were delivered.',
    build(b, _r, v) {
      const c = ['#e9edf5', '#2c3448', '#ff3d9a', '#7b5cff', '#ffe14a'][v % 5];
      const g = neon[(v + 1) % 5];
      b.extrude([[-2.2, 0.5], [2.3, 0.5], [2.4, 0.75], [1.2, 0.95], [0.4, 1.5], [-1.2, 1.5], [-2.2, 1.0]], 1.9, c, 0, 0, 0);
      b.extrude([[1.2, 0.93], [0.42, 1.45], [-1.15, 1.45], [-1.6, 1.05]], 1.75, '#141a33', 0, 0, 0);
      b.box(4.2, 0.08, 1.6, g, 0, 0.45, 0, { emissive: true, glow: 2.2 });
      b.box(0.05, 0.08, 1.7, '#ffffff', 2.38, 0.72, 0, { emissive: true, glow: 2 });
      b.box(0.05, 0.1, 1.7, '#ff3045', -2.22, 0.85, 0, { emissive: true, glow: 2 });
      for (const z of [-1.0, 1.0]) b.box(3.6, 0.06, 0.05, g, -0.1, 0.78, z, { emissive: true, glow: 1.6 });
    },
  },
  {
    id: 'cyberbike',
    name: 'Light Cycle',
    points: 120,
    tags: ['vehicle'],
    sound: 'tech',
    variants: 3,
    blurb: 'Derezzed.',
    build(b, _r, v) {
      const g = neon[v % 5];
      b.torus(0.38, 0.08, body, 0.8, 0.42, 0, { ts: 16 });
      b.torus(0.38, 0.08, body, -0.8, 0.42, 0, { ts: 16 });
      b.torus(0.33, 0.03, g, 0.8, 0.42, 0, { ts: 16, emissive: true, glow: 2 });
      b.torus(0.33, 0.03, g, -0.8, 0.42, 0, { ts: 16, emissive: true, glow: 2 });
      b.extrude([[-1.0, 0.5], [1.0, 0.5], [0.8, 0.95], [-0.2, 1.05], [-1.1, 0.8]], 0.42, '#e9edf5', 0, 0, 0);
      b.box(1.6, 0.05, 0.44, g, 0, 0.75, 0, { emissive: true, glow: 1.6 });
    },
  },
  {
    id: 'neonsign',
    name: 'Neon Sign',
    points: 180,
    tags: ['medium'],
    sound: 'glass',
    variants: 5,
    heightFactor: 0.2,
    blurb: 'OPEN. Now permanently CLOSED.',
    build(b, _r, v) {
      const c = neon[v % 5];
      const c2 = neon[(v + 2) % 5];
      b.cylB(0.08, 0.1, 3.2, body, 0, 0, 0, 6);
      b.boxB(2.4, 1.3, 0.2, '#11131f', 0, 3.0, 0);
      b.box(2.2, 0.1, 0.05, c, 0, 4.15, 0.12, { emissive: true, glow: 2 });
      b.box(2.2, 0.1, 0.05, c, 0, 3.15, 0.12, { emissive: true, glow: 2 });
      b.box(0.1, 1.0, 0.05, c, -1.1, 3.65, 0.12, { emissive: true, glow: 2 });
      b.box(0.1, 1.0, 0.05, c, 1.1, 3.65, 0.12, { emissive: true, glow: 2 });
      if (v % 2) b.torus(0.32, 0.06, c2, -0.4, 3.65, 0.12, { emissive: true, glow: 2, ts: 14 });
      else b.box(0.6, 0.6, 0.05, c2, -0.4, 3.65, 0.12, { emissive: true, glow: 2, rz: Math.PI / 4 });
      b.box(0.7, 0.12, 0.05, c2, 0.5, 3.85, 0.12, { emissive: true, glow: 2 });
      b.box(0.7, 0.12, 0.05, c2, 0.5, 3.45, 0.12, { emissive: true, glow: 2 });
    },
  },
  {
    id: 'holokiosk',
    name: 'Holo Kiosk',
    points: 360,
    tags: ['commercial'],
    sound: 'tech',
    variants: 3,
    heightFactor: 0.2,
    blurb: 'Hologram: "please do not eat the kiosk."',
    build(b, _r, v) {
      const c = neon[v % 5];
      b.cylB(1.5, 1.6, 0.4, body, 0, 0, 0, 12);
      b.cylB(1.3, 1.3, 1.1, '#d9dde6', 0, 0.4, 0, 12);
      b.cylB(1.32, 1.32, 0.1, c, 0, 1.0, 0, 12, { emissive: true, glow: 1.6 });
      b.cylB(1.5, 1.5, 0.15, body2, 0, 1.5, 0, 12);
      b.cylB(0.6, 1.0, 2.4, c, 0, 1.65, 0, 10, { emissive: true, glow: 0.55 });
      b.ico(0.5, '#ffffff', 0, 3.0, 0, 0, { emissive: true, glow: 1.4 });
    },
  },
  {
    id: 'pylon',
    name: 'Energy Pylon',
    points: 520,
    tags: ['building'],
    sound: 'tech',
    variants: 2,
    heightFactor: 0.14,
    blurb: 'All that energy, in one gulp.',
    build(b, _r, v) {
      const c = neon[(v + 1) % 5];
      b.cylB(1.6, 2.0, 0.6, body, 0, 0, 0, 6);
      b.cylB(0.6, 1.1, 9, body2, 0, 0.6, 0, 6);
      for (let i = 0; i < 4; i++) b.torus(1.0 - i * 0.12, 0.08, c, 0, 2.5 + i * 2, 0, { rx: Math.PI / 2, emissive: true, glow: 2, ts: 16 });
      b.ico(0.7, c, 0, 10.4, 0, 0, { emissive: true, glow: 2.2 });
    },
  },
  {
    id: 'servertower',
    name: 'Server Tower',
    points: 300,
    tags: ['medium'],
    sound: 'tech',
    variants: 2,
    heightFactor: 0.2,
    blurb: 'The cloud, grounded.',
    build(b, r, v) {
      b.boxB(1.4, 3.0, 1.2, body, 0, 0, 0);
      for (let i = 0; i < 9; i++) {
        b.box(1.2, 0.08, 0.02, '#2b2f48', 0, 0.35 + i * 0.3, 0.61);
        for (let k = 0; k < 4; k++) if (r.chance(0.6)) b.box(0.06, 0.06, 0.02, neon[(v + k) % 5], -0.45 + k * 0.12, 0.45 + i * 0.3, 0.62, { emissive: true, glow: 2 });
      }
    },
  },
  {
    id: 'neontree',
    name: 'Neon Tree',
    points: 200,
    tags: ['nature'],
    sound: 'tech',
    variants: 3,
    heightFactor: 0.25,
    blurb: 'Bio-luminescent bark, bite-sized.',
    build(b, _r, v) {
      const c = neon[v % 5];
      b.cylB(0.15, 0.22, 2.2, body2, 0, 0, 0, 6);
      b.ico(1.2, c, 0, 3.0, 0, 0, { emissive: true, glow: 0.65 });
      b.ico(0.7, '#ffffff', 0.5, 3.7, 0.3, 0, { emissive: true, glow: 0.45 });
    },
  },
  {
    id: 'satdish',
    name: 'Sat Dish',
    points: 260,
    tags: ['medium'],
    sound: 'metal',
    variants: 1,
    heightFactor: 0.22,
    blurb: 'Signal lost.',
    build(b) {
      b.boxB(1.4, 0.4, 1.4, body, 0, 0, 0);
      b.cylB(0.12, 0.16, 1.6, body2, 0, 0.4, 0, 6);
      b.lathe([[0, 0], [1.3, 0.4], [1.35, 0.5], [0, 0.1]], '#d9dde6', 0, 2.1, 0, 14, { rx: -0.7 });
      b.cyl(0.03, 0.03, 1.0, body, 0, 2.6, 0.4, 4, { rx: -0.7 });
      b.sphere(0.1, '#3de8ff', 0, 2.95, 0.75, { emissive: true, glow: 2 });
    },
  },
]);
