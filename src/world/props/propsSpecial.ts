import * as THREE from 'three';
import { defineProps } from './types';
import type { ModelBuilder } from '../ModelBuilder';

function pedestal(b: ModelBuilder, c: string) {
  b.cylB(0.32, 0.38, 0.12, '#1d2033', 0, 0, 0, 12);
  b.cylB(0.34, 0.34, 0.03, c, 0, 0.12, 0, 16, { emissive: true, glow: 1.8 });
}

defineProps([
  {
    id: 'pw_time',
    name: 'Time Crystal',
    points: 500,
    tags: ['special'],
    power: 'time',
    sound: 'tech',
    variants: 1,
    idle: 'spin',
    size: 0.01,
    noShadow: true,
    blurb: 'Swallow it to earn +6 seconds.',
    build(b) {
      pedestal(b, '#3de8ff');
      b.add(new THREE.OctahedronGeometry(0.26, 0), '#3de8ff', 0, 0.6, 0, { emissive: true, glow: 1.9, sy: 1.5 });
      b.add(new THREE.OctahedronGeometry(0.15, 0), '#ffffff', 0, 0.6, 0, { emissive: true, glow: 2.2, sy: 1.5 });
    },
  },
  {
    id: 'pw_magnet',
    name: 'Gravity Core',
    points: 500,
    tags: ['special'],
    power: 'magnet',
    sound: 'tech',
    variants: 1,
    idle: 'spin',
    size: 0.01,
    noShadow: true,
    blurb: 'Pulls nearby objects into the hole for a while.',
    build(b) {
      pedestal(b, '#ff3d9a');
      b.sphere(0.17, '#ff3d9a', 0, 0.6, 0, { emissive: true, glow: 2 });
      b.torus(0.3, 0.035, '#ffffff', 0, 0.6, 0, { emissive: true, glow: 1.8, rx: 1.2, ts: 18 });
      b.torus(0.3, 0.035, '#ffb3d6', 0, 0.6, 0, { emissive: true, glow: 1.8, rx: -0.4, rz: 1.0, ts: 18 });
    },
  },
  {
    id: 'pw_multi',
    name: 'Golden Star',
    points: 500,
    tags: ['special'],
    power: 'multiplier',
    sound: 'tech',
    variants: 1,
    idle: 'spin',
    size: 0.01,
    noShadow: true,
    blurb: 'Doubles every point for a while.',
    build(b) {
      pedestal(b, '#ffc94a');
      const pts: [number, number][] = [];
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
        const r = i % 2 ? 0.13 : 0.32;
        pts.push([Math.cos(a) * r, Math.sin(a) * r]);
      }
      b.extrude(pts, 0.12, '#ffc94a', 0, 0.62, 0, { emissive: true, glow: 1.9 });
    },
  },
  {
    id: 'pw_surge',
    name: 'Void Surge',
    points: 500,
    tags: ['special'],
    power: 'surge',
    sound: 'tech',
    variants: 1,
    idle: 'spin',
    size: 0.01,
    noShadow: true,
    blurb: 'Temporarily makes the hole much bigger.',
    build(b) {
      pedestal(b, '#7b5cff');
      b.ico(0.26, '#7b5cff', 0, 0.6, 0, 0, { emissive: true, glow: 2 });
      b.ico(0.14, '#ffffff', 0, 0.6, 0, 0, { emissive: true, glow: 2 });
      for (let i = 0; i < 3; i++) b.torus(0.36, 0.02, '#c4b5ff', 0, 0.6, 0, { emissive: true, glow: 1.6, rx: i, ry: i * 1.3, ts: 18 });
    },
  },
  {
    id: 'coin',
    name: 'Void Coin',
    points: 15,
    tags: ['chain', 'small'],
    sound: 'tech',
    variants: 1,
    idle: 'spin',
    size: 0.01,
    noShadow: true,
    blurb: 'Collect a full trail for a chain bonus.',
    build(b) {
      b.cyl(0.16, 0.16, 0.04, '#ffc94a', 0, 0.32, 0, 14, { rx: Math.PI / 2, emissive: true, glow: 1.5 });
      b.cyl(0.1, 0.1, 0.05, '#fff1b8', 0, 0.32, 0, 14, { rx: Math.PI / 2, emissive: true, glow: 1.8 });
    },
  },
  {
    id: 'secret_duck',
    name: 'Golden Duck',
    points: 1000,
    tags: ['secret'],
    sound: 'tech',
    variants: 1,
    idle: 'bob',
    size: 0.01,
    blurb: 'A secret hidden somewhere in every world.',
    build(b) {
      const c = '#ffc94a';
      b.sphere(0.15, c, 0, 0.13, 0, { sx: 1.25, sy: 0.85, w: 10, emissive: true, glow: 1.2 });
      b.sphere(0.1, c, 0.09, 0.3, 0, { w: 9, emissive: true, glow: 1.2 });
      b.box(0.08, 0.03, 0.07, '#ff8a2a', 0.2, 0.29, 0);
      b.sphere(0.018, '#26262c', 0.16, 0.33, 0.06, { w: 5, hs: 4 });
      b.sphere(0.018, '#26262c', 0.16, 0.33, -0.06, { w: 5, hs: 4 });
    },
  },
]);
