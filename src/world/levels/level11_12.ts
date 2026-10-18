import type { LevelDef } from './types';
import { THEMES, C, paintGrass, buildingRow } from './common';
import type { Pt } from '../GroundPainter';

const fairFood: [string, number][] = [['balloon', 3], ['icecream', 3], ['cup', 2], ['can', 2], ['teddy', 1], ['duck', 1], ['shoppingbag', 1], ['sandwich', 1]];

// ====================================================================== 11
export const level11: LevelDef = {
  id: 11,
  name: 'Fun Fair Frenzy',
  setting: 'Funfair at Sunset',
  description: 'Bonus world. Carousels, teacups and a giant Ferris wheel under a pink sky.',
  duration: 90,
  objectives: [
    { kind: 'score', target: 15000, label: 'Reach score' },
    { kind: 'tag', tag: 'ride', target: 3, label: 'Fairground rides' },
  ],
  stars: [21500, 43000],
  startTier: 3,
  maxTier: 16,
  growth: 1.3,
  w: 110,
  h: 110,
  margin: 34,
  theme: THEMES.fair,
  difficulty: 4,
  seed: 1111,
  start: [-8, 44],
  bonus: true,
  hero: ['carousel', 'ferriswheel', 'balloon'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    paintGrass(ctx, e.minX, e.minZ, e.maxX, e.maxZ, '#86c25e');
    // fairground surface
    p.roundRect(-52, -52, 52, 52, 6, '#d9c3a0');
    p.speckle(-52, -52, 52, 52, ['rgba(120,80,40,0.18)', 'rgba(255,255,255,0.18)'], 0.8, 0.06);
    // midway avenues (colourful paving)
    const ave = (pts: Pt[]) => {
      p.path(pts, 9, '#c9a66b');
      p.path(pts, 8.2, '#efd6a8');
      p.path(pts, 0.25, 'rgba(255,61,110,0.55)', { dash: [1.2, 1.2] });
    };
    ave([[0, 54], [0, -54]]);
    ave([[-54, 0], [54, 0]]);
    p.circle(0, 0, 11, '#c9a66b').circle(0, 0, 10.3, '#f4e3c1');
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      p.poly([[0, 0], [Math.cos(a) * 10.3, Math.sin(a) * 10.3], [Math.cos(a + Math.PI / 16) * 10.3, Math.sin(a + Math.PI / 16) * 10.3]], i % 2 ? '#ffd1dc' : '#f4e3c1');
    }
    ctx.place('balloonstand', 0, 0, { force: true, rot: 0 });
    ctx.circleOf('parkbin_lamp', 0, 0, 8.5, 8, { phase: 0.2 });
    // the big ride: Ferris wheel at the top of the fair
    p.roundRect(-11, -50, 11, -38, 2, '#b9a07c');
    ctx.place('ferriswheel', 0, -44, { force: true, rot: 0 });
    // carousels & teacups in the four quadrants
    for (const [x, z] of [[-28, -24], [28, 24]] as Pt[]) {
      p.circle(x, z, 7, '#c9a66b').circle(x, z, 6.4, '#f7e6c8');
      ctx.place('carousel', x, z, { force: true, rot: 0, variant: x < 0 ? 0 : 1 });
    }
    for (const [x, z] of [[28, -24], [-28, 24]] as Pt[]) {
      p.circle(x, z, 5.6, '#c9a66b').circle(x, z, 5.1, '#ffd1dc');
      ctx.place('teacups', x, z, { force: true, rot: 0 });
    }
    // bumper car arena
    p.roundRect(-14, 30, 14, 46, 3, '#3a2f55', { color: '#ffc94a', w: 0.5 });
    p.grid(-13, 31, 13, 45, 2, 'rgba(255,255,255,0.08)', 0.05);
    ctx.scatter('bumpercar', { x0: -12, z0: 32, x1: 12, z1: 44 }, 10, { gap: 0.8, wander: 5 });
    // midway booths along the avenues
    for (const s of [-1, 1]) {
      for (let k = 14; k <= 48; k += 7) {
        ctx.place(ctx.rng.pick(['gamebooth', 'popcorn', 'cottoncandy', 'ticketbooth', 'gamebooth', 'balloonstand']), s * k, -7.5, { rot: 0, gap: 0.3 });
        ctx.place(ctx.rng.pick(['gamebooth', 'popcorn', 'cottoncandy', 'icecreamvan', 'gamebooth']), s * k, 7.5, { rot: Math.PI, gap: 0.3 });
        ctx.place(ctx.rng.pick(['gamebooth', 'popcorn', 'ticketbooth', 'balloonstand']), -7.5, s * k, { rot: Math.PI / 2, gap: 0.3 });
        ctx.place(ctx.rng.pick(['gamebooth', 'cottoncandy', 'popcorn', 'balloonstand']), 7.5, s * k, { rot: -Math.PI / 2, gap: 0.3 });
      }
    }
    // lanterns along the avenues
    for (let k = -50; k <= 50; k += 10) {
      if (Math.abs(k) < 12) continue;
      ctx.place('parkbin_lamp', k, -4.6, { gap: 0.05 });
      ctx.place('parkbin_lamp', -4.6, k, { gap: 0.05 });
    }
    ctx.scatter([['bench', 2], ['trashbin', 2], ['cafeset', 2], ['umbrella_table', 1], ['smalltree', 1], ['planter', 1]], { x0: -52, z0: -52, x1: 52, z1: 52 }, 50, { gap: 0.8 });
    ctx.scatter(fairFood, { x0: -53, z0: -53, x1: 53, z1: 53 }, 220, { gap: 0.25, respawn: true });
    ctx.scatter(fairFood, { path: [[0, 52], [0, -52]], w: 7 }, 50, { gap: 0.2, respawn: true });
    ctx.scatter(fairFood, { path: [[-52, 0], [52, 0]], w: 7 }, 50, { gap: 0.2, respawn: true });
    ctx.coins([[-20, 3], [-12, 3]], 8);
    ctx.coins([[12, -3], [20, -3]], 8);
    ctx.coins([[3, 14], [3, 28]], 10);
    ctx.place('pw_magnet', -14, -14, { force: true, rot: 0 });
    ctx.place('pw_surge', 16, 16, { force: true, rot: 0 });
    ctx.place('pw_time', -44, 44, { force: true, rot: 0 });
    ctx.place('pw_multi', 44, -44, { force: true, rot: 0 });
    ctx.place('pw_time', 40, 40, { force: true, rot: 0 });
    ctx.place('secret_duck', 54.4, 54.4, { force: true, rot: 2 });
    // perimeter: fence of trees and the town behind
    ctx.treeBorder(6, 2, ['round', 'blossom', 'tall']);
    buildingRow(ctx, e.minX, e.maxX, -70, 'south', { minF: 3, maxF: 7, colors: ['#ffd1dc', '#f2d7a6', '#a59bd1', '#9fd3e0'] });
    buildingRow(ctx, e.minX, e.maxX, 70, 'north', { minF: 3, maxF: 7, colors: ['#ffd1dc', '#f2d7a6', '#a59bd1', '#9fd3e0'] });
    void C;
  },
};

// ====================================================================== 12
export const level12: LevelDef = {
  id: 12,
  name: 'Sky Harbor',
  setting: 'International Airport',
  description: 'Bonus world. Suitcases, tugs, helicopters and jets on the apron.',
  duration: 100,
  objectives: [
    { kind: 'score', target: 25000, label: 'Reach score' },
    { kind: 'tag', tag: 'aircraft', target: 2, label: 'Aircraft' },
  ],
  stars: [30600, 61000],
  startTier: 3,
  maxTier: 17,
  growth: 1.4,
  w: 150,
  h: 100,
  margin: 40,
  theme: THEMES.sky,
  difficulty: 5,
  seed: 1212,
  start: [-30, 34],
  bonus: true,
  hero: ['jet', 'suitcase', 'helicopter'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    paintGrass(ctx, e.minX, e.minZ, e.maxX, e.maxZ, '#8fbf66');
    // runway
    const rz = -34;
    p.rect(e.minX, rz - 9, e.maxX, rz + 9, '#4a4d57');
    p.speckle(e.minX, rz - 9, e.maxX, rz + 9, ['rgba(0,0,0,0.12)', 'rgba(255,255,255,0.05)'], 0.3, 0.1);
    p.path([[e.minX, rz], [e.maxX, rz]], 0.5, '#f4f4ee', { dash: [6, 5], cap: 'butt' });
    p.path([[e.minX, rz - 8], [e.maxX, rz - 8]], 0.35, '#f4f4ee', { cap: 'butt' });
    p.path([[e.minX, rz + 8], [e.maxX, rz + 8]], 0.35, '#f4f4ee', { cap: 'butt' });
    for (const x of [-70, 62]) for (let i = 0; i < 6; i++) p.rect(x + (i % 2) * 0, rz - 6.5 + i * 2.4, x + 7, rz - 5.6 + i * 2.4, '#f4f4ee');
    p.text(-52, rz, '27', 5, 'rgba(244,244,238,0.9)', -Math.PI / 2);
    p.text(52, rz, '09', 5, 'rgba(244,244,238,0.9)', Math.PI / 2);
    // taxiway
    const tz = -12;
    p.rect(e.minX, tz - 5, e.maxX, tz + 5, '#55585f');
    p.path([[e.minX, tz], [e.maxX, tz]], 0.3, '#ffd23f', { cap: 'butt' });
    for (const x of [-50, 0, 50]) {
      p.rect(x - 5, rz + 9, x + 5, tz - 5, '#55585f');
      p.path([[x, rz + 9], [x, tz]], 0.3, '#ffd23f', { cap: 'butt' });
    }
    // apron
    p.rect(e.minX, -7, e.maxX, e.maxZ, '#b9b6ae');
    p.tiles(e.minX, -7, e.maxX, e.maxZ, 5, '#bdbab2', '#b5b2aa', '#a8a59d', 0.06);
    for (let k = 0; k < 5; k++) {
      const x = -60 + k * 30;
      p.path([[x, -2], [x, 26]], 0.3, '#ffd23f', { cap: 'butt' });
      p.path([[x - 10, 26], [x + 10, 26]], 0.3, '#ffd23f', { cap: 'butt' });
      p.text(x + 4, 22, `A${k + 1}`, 2.2, 'rgba(255,210,63,0.9)');
    }
    // service road
    p.rect(e.minX, 38, e.maxX, 44, '#4a4d57');
    p.path([[e.minX, 41], [e.maxX, 41]], 0.15, '#f4f4ee', { dash: [2, 2], cap: 'butt' });
    // runway lights
    for (let x = -74; x <= 74; x += 6) {
      ctx.place('runwaylight', x, rz - 9.5, { force: true, rot: 0, variant: 0 });
      ctx.place('runwaylight', x, rz + 9.5, { force: true, rot: 0, variant: 0 });
      ctx.place('runwaylight', x + 3, tz - 5.5, { force: true, rot: 0, variant: 1 });
      ctx.place('runwaylight', x + 3, tz + 5.5, { force: true, rot: 0, variant: 1 });
    }
    // parked aircraft at the stands
    ctx.place('jet', -60, 12, { rot: Math.PI / 2, force: true });
    ctx.place('propplane', -30, 14, { rot: Math.PI / 2, force: true });
    ctx.place('jet', 0, 12, { rot: Math.PI / 2, force: true, variant: 1 });
    ctx.place('propplane', 30, 14, { rot: Math.PI / 2, force: true, variant: 2 });
    ctx.place('jet', 60, 12, { rot: Math.PI / 2, force: true, variant: 2 });
    // helipad
    p.circle(55, 32, 5.5, '#4a4d57').ring(55, 32, 4.6, 0.3, '#f4f4ee').text(55, 32, 'H', 4, '#f4f4ee');
    ctx.place('helicopter', 55, 32, { rot: 0.3, force: true });
    ctx.place('helicopter', -70, -2, { rot: 1.2, force: true, variant: 1 });
    ctx.place('controltower', 66, -2, { rot: 0, force: true });
    // ground support equipment around the stands
    for (let k = 0; k < 5; k++) {
      const x = -60 + k * 30;
      ctx.place(k % 2 ? 'stairtruck' : 'fueltruck', x + 9, 4, { rot: Math.PI / 2, gap: 0.4 });
      ctx.place('baggagecart', x - 8, 26, { rot: 0, gap: 0.3 });
      ctx.place('tug', x - 12, 30, { rot: 0, gap: 0.3 });
      ctx.cluster([['suitcase', 4], ['uld', 1], ['cone', 2]], x - 8, 30, 3.4, 9);
      ctx.place('uld', x + 12, 26, { gap: 0.2 });
    }
    ctx.scatter([['suitcase', 4], ['cone', 3], ['uld', 1], ['barrel', 1], ['roadbarrel', 1], ['windsock', 1], ['trashbin', 1], ['bollard', 1]], { x0: -74, z0: -6, x1: 74, z1: 37 }, 150, { gap: 0.4, respawn: true });
    ctx.scatter([['baggagecart', 2], ['tug', 2], ['uld', 2], ['van', 1], ['pickup', 1]], { x0: -74, z0: -6, x1: 74, z1: 37 }, 22, { gap: 0.8 });
    ctx.scatter([['suitcase', 3], ['shoppingbag', 2], ['cup', 2], ['can', 2], ['bottle', 1]], { x0: -74, z0: 44.5, x1: 74, z1: 49.5 }, 50, { gap: 0.25, respawn: true });
    ctx.scatter([['windsock', 1], ['runwaylight', 4], ['cone', 1]], { x0: -74, z0: -49, x1: 74, z1: -44 }, 30, { gap: 0.4 });
    ctx.scatter([['windsock', 1], ['runwaylight', 3]], { x0: -74, z0: -24, x1: 74, z1: -18 }, 20, { gap: 0.4 });
    // moving traffic: luggage trains on the service road, a plane taxiing
    ctx.lane({ x0: -110, z0: 39.6, x1: 110, z1: 39.6, speed: 5, ids: ['tug', 'baggagecart', 'van', 'tug', 'bus'] });
    ctx.lane({ x0: 110, z0: 42.4, x1: -110, z1: 42.4, speed: 5, ids: ['tug', 'fueltruck', 'baggagecart', 'pickup'] });
    ctx.lane({ x0: -120, z0: tz, x1: 120, z1: tz, speed: 4, ids: ['propplane', 'propplane', 'jet'] });
    ctx.coins([[-44, -2], [-16, -2]], 12);
    ctx.coins([[16, -2], [44, -2]], 12);
    ctx.place('pw_magnet', -45, 34, { force: true, rot: 0 });
    ctx.place('pw_surge', 15, 34, { force: true, rot: 0 });
    ctx.place('pw_time', 45, 20, { force: true, rot: 0 });
    ctx.place('pw_multi', -15, 20, { force: true, rot: 0 });
    ctx.place('pw_time', -15, -40, { force: true, rot: 0 });
    ctx.place('secret_duck', -74.5, -49.5, { force: true, rot: 2 });
    // terminal and hangars in the background
    const b = ctx.bounds;
    ctx.raw(0, b.maxZ + 14, (m) => {
      m.boxB(150, 9, 16, '#e9edf5', 0, 0, b.maxZ + 14);
      m.boxB(150, 3.5, 0.2, '#7fc4ea', 0, 3, b.maxZ + 5.9);
      m.boxB(152, 0.8, 17, '#aeb4c2', 0, 9, b.maxZ + 14);
      for (let x = -70; x <= 70; x += 10) m.boxB(0.3, 9, 0.3, '#aeb4c2', x, 0, b.maxZ + 5.9);
      m.box(30, 3, 0.3, '#3d6bff', 0, 11.5, b.maxZ + 6.2);
    });
    for (const x of [-95, -60, 60, 95]) ctx.building(x, b.minZ - 24, 0, { w: 30, d: 22, floors: 2, floorH: 6, color: '#d9dde6', roof: 'gable', roofColor: '#8a8f9a' });
  },
};
