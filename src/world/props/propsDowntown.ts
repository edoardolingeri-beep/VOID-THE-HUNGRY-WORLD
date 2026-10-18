import { defineProps, PAL } from './types';
import { buildBuilding } from './buildings';
import { buildTree } from './propsPark';

const facade = ['#e9b98a', '#c96f5a', '#f2d7a6', '#9fb7c9', '#d9d2c4', '#b5c99a', '#e6a0a0', '#a59bd1'];
const awnings = ['#e8423f', '#3fbf6a', '#3d7bf0', '#ff8a2a', '#8b5cf6'];

defineProps([
  {
    id: 'sculpture',
    name: 'Abstract Sculpture',
    points: 280,
    tags: ['medium'],
    sound: 'metal',
    variants: 3,
    heightFactor: 0.22,
    blurb: 'Critics called it "hungry".',
    build(b, r, v) {
      b.boxB(2.0, 0.5, 2.0, '#d8d2c4', 0, 0, 0);
      const c = ['#ff3d9a', '#ffc94a', '#3de8ff'][v % 3];
      if (v === 0) b.torus(1.0, 0.25, c, 0, 1.9, 0, { ts: 18 });
      else if (v === 1) for (let i = 0; i < 4; i++) b.box(0.6, 0.6, 0.6, c, 0, 0.9 + i * 0.6, 0, { ry: i * 0.5, rx: 0.6, rz: 0.6 });
      else b.ico(0.9, c, 0, 1.6, 0, 0);
      void r;
    },
  },
  {
    id: 'statue',
    name: 'Bronze Statue',
    points: 420,
    tags: ['medium'],
    sound: 'heavy',
    variants: 1,
    heightFactor: 0.2,
    blurb: 'A local hero, locally consumed.',
    build(b) {
      b.boxB(2.4, 1.6, 2.4, '#d8d2c4', 0, 0, 0);
      b.boxB(2.6, 0.2, 2.6, '#c4bdae', 0, 1.6, 0);
      const c = '#9a7a3a';
      b.boxB(0.5, 1.0, 0.35, c, 0, 1.8, 0);
      b.boxB(0.75, 1.1, 0.45, c, 0, 2.8, 0);
      b.sphere(0.3, c, 0, 4.2, 0);
      b.box(0.2, 1.0, 0.2, c, 0.55, 4.0, 0, { rz: -0.4 });
      b.box(0.2, 0.9, 0.2, c, -0.48, 3.2, 0, { rz: 0.15 });
      b.cone(0.15, 0.4, '#ffd23f', 0.85, 4.7, 0, 6, { emissive: true, glow: 1.4 });
    },
  },
  {
    id: 'clocktower',
    name: 'Clock Pillar',
    points: 300,
    tags: ['medium'],
    sound: 'metal',
    variants: 1,
    heightFactor: 0.2,
    blurb: 'Time to eat.',
    build(b) {
      b.cylB(0.4, 0.5, 0.4, '#33363f', 0, 0, 0, 8);
      b.cylB(0.15, 0.15, 3.6, '#33363f', 0, 0.4, 0, 8);
      b.boxB(1.1, 1.1, 1.1, '#2a2c33', 0, 4.0, 0);
      for (const [x, z, ry] of [[0, 0.56, 0], [0, -0.56, Math.PI], [0.56, 0, Math.PI / 2], [-0.56, 0, -Math.PI / 2]] as const) {
        b.cyl(0.42, 0.42, 0.02, '#fffbe8', x, 4.55, z, 16, { rx: Math.PI / 2, ry, emissive: true, glow: 1.05 });
      }
      b.cone(0.75, 0.6, '#2a2c33', 0, 5.4, 0, 4, { ry: Math.PI / 4 });
    },
  },
  {
    id: 'metroentrance',
    name: 'Metro Entrance',
    points: 520,
    tags: ['building'],
    sound: 'glass',
    variants: 1,
    heightFactor: 0.2,
    blurb: 'Mind the gap. The very big gap.',
    build(b) {
      b.boxB(4.4, 0.25, 2.6, '#6b6f7a', 0, 0, 0);
      for (const x of [-2.1, 2.1]) for (const z of [-1.2, 1.2]) b.boxB(0.12, 2.6, 0.12, '#2f7d4a', x, 0, z);
      b.boxB(4.6, 0.2, 2.8, '#2f7d4a', 0, 2.6, 0);
      b.boxB(4.4, 0.1, 2.6, '#bfe6ff', 0, 2.5, 0);
      b.boxB(1.4, 0.5, 0.1, '#ffd23f', 0, 2.85, 1.3, { emissive: true, glow: 1.3 });
      b.boxB(4.2, 1.0, 0.06, '#2f7d4a', 0, 0.25, -1.2);
      for (let i = 0; i < 5; i++) b.boxB(1.8, 0.12, 0.4, '#8a8f9a', 0, 0.25 - i * 0.0, -0.8 + i * 0.4, { rx: 0 });
    },
  },
  {
    id: 'pavilion',
    name: 'Glass Pavilion',
    points: 650,
    tags: ['building', 'commercial'],
    sound: 'glass',
    variants: 2,
    heightFactor: 0.2,
    blurb: 'Transparent pricing, transparent walls, transparent fate.',
    build(b, _r, v) {
      const w = 7, d = 5, h = 3.4;
      b.boxB(w, 0.3, d, '#c4bdae', 0, 0, 0);
      b.boxB(w - 0.4, h, d - 0.4, '#a9dcf5', 0, 0.3, 0);
      for (let i = 0; i <= 5; i++) {
        b.boxB(0.12, h, 0.12, '#33363f', -w / 2 + 0.2 + (i * (w - 0.4)) / 5, 0.3, d / 2 - 0.2);
        b.boxB(0.12, h, 0.12, '#33363f', -w / 2 + 0.2 + (i * (w - 0.4)) / 5, 0.3, -d / 2 + 0.2);
      }
      b.boxB(w + 0.6, 0.3, d + 0.6, v ? '#ffffff' : '#33363f', 0, h + 0.3, 0);
      b.boxB(3, 0.6, 0.1, v ? '#ff7eb6' : '#3de8ff', 0, h + 0.6, d / 2 + 0.25, { emissive: true, glow: 1.25 });
      for (let i = 0; i < 3; i++) b.cylB(0.4, 0.4, 0.75, PAL.white, -2 + i * 2, 0.3, 0.5, 10);
    },
  },
  {
    id: 'house',
    name: 'Town House',
    points: 700,
    tags: ['building'],
    sound: 'heavy',
    variants: 6,
    heightFactor: 0.16,
    blurb: 'Home sweet void.',
    build(b, r, v) {
      buildBuilding(b, r, { w: 6, d: 6, floors: 2, color: facade[v % facade.length], roof: 'gable', roofColor: v % 2 ? '#a5483b' : '#5b5f6b', shop: null });
    },
  },
  {
    id: 'shopbuilding',
    name: 'Corner Shop',
    points: 900,
    tags: ['building', 'commercial'],
    sound: 'heavy',
    variants: 6,
    heightFactor: 0.15,
    blurb: 'Under new management: the void.',
    build(b, r, v) {
      buildBuilding(b, r, { w: 8, d: 7, floors: 3, color: facade[(v + 2) % facade.length], roof: 'flat', shop: { awning: awnings[v % 5], sign: awnings[(v + 2) % 5] } });
    },
  },
  {
    id: 'apartment',
    name: 'Apartment Block',
    points: 1400,
    tags: ['building'],
    sound: 'heavy',
    variants: 6,
    heightFactor: 0.14,
    blurb: 'Hundreds of tenants, one landlord: hunger.',
    build(b, r, v) {
      buildBuilding(b, r, { w: 10, d: 9, floors: 6, color: facade[(v + 4) % facade.length], roof: v % 2 ? 'garden' : 'flat', shop: v % 3 === 0 ? { awning: awnings[v % 5], sign: '#ffd23f' } : null });
    },
  },
  {
    id: 'office',
    name: 'Office Tower',
    points: 2200,
    tags: ['building'],
    sound: 'heavy',
    variants: 4,
    heightFactor: 0.12,
    blurb: 'Meeting cancelled. Permanently.',
    build(b, r, v) {
      buildBuilding(b, r, { w: 12, d: 12, floors: 11, color: ['#d9dde6', '#3a4256', '#c9b79c', '#7d8596'][v % 4], glassTower: true, roof: 'antenna', setbacks: 1 });
    },
  },
  {
    id: 'skyscraper',
    name: 'Skyscraper',
    points: 3500,
    tags: ['building', 'landmark'],
    sound: 'heavy',
    variants: 3,
    heightFactor: 0.1,
    blurb: 'Scraped the sky. Now scraping the void.',
    build(b, r, v) {
      buildBuilding(b, r, { w: 14, d: 14, floors: 18, color: ['#e9edf5', '#2c3448', '#b8c4d6'][v % 3], glassTower: true, roof: 'antenna', setbacks: 2 });
    },
  },
  {
    id: 'spire',
    name: 'The Hungry Spire',
    points: 8000,
    tags: ['landmark', 'building'],
    sound: 'heavy',
    variants: 1,
    size: 11.2,
    blurb: 'The tallest structure in the world. Was.',
    build(b) {
      // Monumental tiered tower with gold crown.
      b.boxB(22, 1.2, 22, '#d8d2c4', 0, 0, 0);
      b.boxB(19, 6, 19, '#f1ece2', 0, 1.2, 0);
      for (let i = 0; i < 8; i++) {
        const x = -8 + i * (16 / 7);
        b.boxB(1.2, 6, 0.4, '#c4bdae', x, 1.2, 9.6);
        b.boxB(1.2, 6, 0.4, '#c4bdae', x, 1.2, -9.6);
        b.boxB(0.4, 6, 1.2, '#c4bdae', 9.6, 1.2, x);
        b.boxB(0.4, 6, 1.2, '#c4bdae', -9.6, 1.2, x);
      }
      b.box(6, 4, 0.1, '#ffe7a8', 0, 3.5, 9.55, { emissive: true, glow: 1.2 });
      const tiers: [number, number, string][] = [[15, 16, '#2c3448'], [12, 14, '#36405a'], [9, 12, '#414c6a'], [6, 10, '#4c587a']];
      let y = 7.2;
      for (const [w, h, c] of tiers) {
        b.boxB(w, h, w, c, 0, y, 0);
        b.boxB(w + 0.6, 0.5, w + 0.6, '#ffc94a', 0, y + h - 0.5, 0, { emissive: true, glow: 1.25 });
        for (const face of [0, 1, 2, 3] as const) b.windows(face, w, w, 0, 0, y + 0.5, y + h - 0.8, Math.round(w / 1.6), Math.round(h / 2.2), '#9fd0ff', { emissive: true, glow: 1.05 });
        y += h;
      }
      b.cone(3.6, 8, '#ffc94a', 0, y + 4, 0, 4, { ry: Math.PI / 4 });
      b.cylB(0.25, 0.4, 9, '#ffe08a', 0, y + 7, 0, 6, { emissive: true, glow: 1.6 });
      b.ico(1.0, '#ffffff', 0, y + 16.5, 0, 1, { emissive: true, glow: 2.2 });
    },
  },
  {
    id: 'obelisk',
    name: 'Obelisk',
    points: 1800,
    tags: ['landmark'],
    sound: 'heavy',
    variants: 1,
    heightFactor: 0.12,
    blurb: 'Ancient, imposing, edible.',
    build(b) {
      b.boxB(6, 1.2, 6, '#d8d2c4', 0, 0, 0);
      b.boxB(4.4, 1.2, 4.4, '#c4bdae', 0, 1.2, 0);
      b.cylB(1.0, 1.6, 22, '#e6dccb', 0, 2.4, 0, 4, { ry: Math.PI / 4 });
      b.cone(1.0, 2.2, '#ffc94a', 0, 25.5, 0, 4, { ry: Math.PI / 4, emissive: true, glow: 1.3 });
    },
  },
  {
    id: 'arch',
    name: 'Triumphal Arch',
    points: 2600,
    tags: ['landmark'],
    sound: 'heavy',
    variants: 1,
    heightFactor: 0.12,
    blurb: 'Victory belongs to the hole.',
    build(b) {
      const c = '#e6dccb';
      b.boxB(4, 14, 6, c, -6, 0, 0);
      b.boxB(4, 14, 6, c, 6, 0, 0);
      b.boxB(16, 5, 6, c, 0, 14, 0);
      b.boxB(16.6, 0.6, 6.6, '#cfc4b0', 0, 18.4, 0);
      b.boxB(16.6, 0.6, 6.6, '#cfc4b0', 0, 13.6, 0);
      b.extrude([[-4, 0], [4, 0], [4, 3], [3, 4.2], [0, 4.8], [-3, 4.2], [-4, 3]], 6.1, '#cfc4b0', 0, 9.6, 0);
      b.boxB(6, 1.4, 0.2, '#ffc94a', 0, 15.6, 3.05, { emissive: true, glow: 1.2 });
    },
  },
  {
    id: 'festivetree',
    name: 'Plaza Tree',
    points: 380,
    tags: ['nature'],
    sound: 'organic',
    variants: 2,
    heightFactor: 0.22,
    blurb: 'It had fairy lights. Had.',
    build(b, r) {
      b.cylB(1.1, 1.2, 0.6, '#c4bdae', 0, 0, 0, 10);
      buildTree(b, r, 7.5, 'round');
      for (let i = 0; i < 12; i++) b.sphere(0.12, PAL.yellow, r.range(-1.6, 1.6), r.range(3.6, 6.5), r.range(-1.6, 1.6), { emissive: true, glow: 1.6, w: 5, hs: 4 });
    },
  },
  {
    id: 'billboard',
    name: 'Billboard',
    points: 480,
    tags: ['medium'],
    sound: 'metal',
    variants: 3,
    heightFactor: 0.14,
    blurb: 'Advertising space: now available in the void.',
    build(b, _r, v) {
      const c = ['#ff3d9a', '#3de8ff', '#ffc94a'][v % 3];
      b.cylB(0.3, 0.35, 6, '#4a4f5c', 0, 0, 0, 8);
      b.boxB(7, 3.2, 0.4, '#2a2c33', 0, 6, 0);
      b.box(6.6, 2.8, 0.05, c, 0, 7.6, 0.22, { emissive: true, glow: 1.1 });
      b.box(4.0, 0.5, 0.06, '#ffffff', -0.8, 8.2, 0.25, { emissive: true, glow: 1.2 });
      b.box(2.5, 0.35, 0.06, '#1a1a22', -1.5, 7.3, 0.25);
      b.box(6.8, 0.15, 0.6, '#4a4f5c', 0, 5.95, 0.3);
    },
  },
]);
