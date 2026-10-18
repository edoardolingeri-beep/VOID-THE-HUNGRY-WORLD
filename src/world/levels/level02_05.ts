import type { LevelDef } from './types';
import { THEMES, C, paintGrass, paintSidewalk, buildingRow, skyline } from './common';
import type { Pt } from '../GroundPainter';

const litter: [string, number][] = [['can', 3], ['cup', 3], ['bottle', 2], ['shoppingbag', 2], ['pizzabox', 1], ['apple', 1]];

// ======================================================================= 2
export const level02: LevelDef = {
  id: 2,
  name: 'Street Feast',
  setting: 'Busy City Street',
  description: 'Bins, chairs, crates and signs line a lively street. Grow fast.',
  duration: 60,
  objectives: [{ kind: 'score', target: 1500, label: 'Reach score' }],
  stars: [4300, 8500],
  startTier: 1,
  maxTier: 8,
  growth: 1.0,
  w: 76,
  h: 24,
  margin: 30,
  theme: THEMES.street,
  difficulty: 1,
  seed: 202,
  start: [0, 8],
  hero: ['trashbin', 'cafechair', 'hydrant'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    p.fill('#c9c3b6');
    p.road(e.minX, 0, e.maxX, 0, 9, { center: 'dashed' });
    p.rect(e.minX, -4.8, e.maxX, -4.5, C.curb).rect(e.minX, 4.5, e.maxX, 4.8, C.curb);
    paintSidewalk(ctx, e.minX, -12.6, e.maxX, -4.8);
    paintSidewalk(ctx, e.minX, 4.8, e.maxX, 12.6);
    for (const x of [-20, 20]) p.crosswalk(x, 0, 8.4, 3.2, 'z');
    // parking bays on the road edges
    for (let x = -34; x < 34; x += 5.5) {
      if (Math.abs(x + 20) < 4 || Math.abs(x - 20) < 4) continue;
      p.path([[x, 4.4], [x, 2.6]], 0.1, 'rgba(255,255,255,0.7)', { cap: 'butt' });
      p.path([[x, -4.4], [x, -2.6]], 0.1, 'rgba(255,255,255,0.7)', { cap: 'butt' });
    }
    // shop entrance mats
    for (let x = -34; x < 36; x += 9) {
      p.rect(x - 1, -12.6, x + 1, -11.8, '#7a5236');
      p.rect(x - 1, 11.8, x + 1, 12.6, '#7a5236');
    }
    // lamps and trees along the curb
    for (let x = -33; x <= 33; x += 11) {
      ctx.place('lamppost', x, -5.6, { rot: -Math.PI / 2, force: true });
      ctx.place('lamppost', x + 5.5, 5.6, { rot: Math.PI / 2, force: true });
      p.rect(x + 4.6, -6.6, x + 6.4, -4.8, '#6b4e33');
      ctx.place('smalltree', x + 5.5, -5.7, { gap: 0.1 });
      p.rect(x - 0.9, 4.8, x + 0.9, 6.6, '#6b4e33');
      ctx.place('smalltree', x, 5.7, { gap: 0.1 });
    }
    // café terraces
    for (const [x, z] of [[-27, -9.5], [-6, 9.5], [13, -9.5], [30, 9.5]] as Pt[]) {
      p.rect(x - 4, z - 2.2, x + 4, z + 2.2, 'rgba(160,110,70,0.25)');
      for (let i = -1; i <= 1; i++) {
        ctx.place('cafetable', x + i * 2.6, z, { gap: 0.05 });
        ctx.place('cafechair', x + i * 2.6 - 0.75, z, { rot: Math.PI / 2, gap: 0.02 });
        ctx.place('cafechair', x + i * 2.6 + 0.75, z, { rot: -Math.PI / 2, gap: 0.02 });
      }
      ctx.place('aframe', x + 4.6, z, { gap: 0.05 });
    }
    const side = (zs: number) => ({ x0: -37, z0: Math.min(zs * 5.2, zs * 12), x1: 37, z1: Math.max(zs * 5.2, zs * 12) });
    for (const zs of [-1, 1]) {
      ctx.scatter([['trashbin', 3], ['wheeliebin', 2], ['crate', 3], ['newsbox', 2], ['mailbox', 1], ['hydrant', 2], ['bollard', 2], ['streetsign', 2], ['parkingmeter', 1], ['planterbox', 1], ['scooter', 1], ['cafechair', 2]], side(zs), 34, { gap: 0.35 });
      ctx.scatter(litter, side(zs), 45, { gap: 0.2, respawn: true });
      ctx.scatter([['cone', 3], ['flowerpot', 1], ['crate', 1]], side(zs), 8, { gap: 0.3 });
    }
    // crates stacked by shop doors
    for (let x = -30; x < 34; x += 14) {
      ctx.cluster([['crate', 2], ['cardboard', 1], ['palletboxes', 1]], x + 4, -11, 1.4, 3);
      ctx.cluster([['crate', 2], ['cardboard', 1]], x - 3, 11, 1.4, 3);
    }
    // parked cars (too big for now — later snacks)
    for (let x = -31.5; x < 34; x += 5.5) {
      if (Math.abs(x + 20) < 4 || Math.abs(x - 20) < 4) continue;
      if (ctx.rng.chance(0.55)) ctx.place(ctx.rng.chance(0.6) ? 'hatchback' : 'car', x + 2.75, ctx.rng.chance(0.5) ? 3.5 : -3.5, { rot: ctx.rng.chance(0.5) ? 0 : Math.PI, gap: 0.05 });
    }
    // cones on the road
    ctx.row('cone', -9, -0.2, -3, -0.2, 1.5);
    ctx.row('roadbarrel', 6, 0.4, 10, 0.4, 2);
    ctx.coins([[-36, 8], [-26, 8], [-16, 8]], 9);
    ctx.coins([[16, -8], [26, -7], [36, -8]], 9);
    ctx.place('pw_multi', 0, -8, { force: true, rot: 0 });
    ctx.place('pw_time', -14, 9, { force: true, rot: 0 });
    ctx.place('pw_surge', 26, 0.8, { force: true, rot: 0 });
    ctx.place('secret_duck', 37.4, -11.6, { force: true, rot: 2 });
    // background: shops on both sides
    buildingRow(ctx, e.minX, e.maxX, -12.8, 'south', { minF: 2, maxF: 5, shops: true });
    buildingRow(ctx, e.minX, e.maxX, 12.8, 'north', { minF: 2, maxF: 5, shops: true });
    buildingRow(ctx, e.minX, e.maxX, -24, 'south', { minF: 6, maxF: 10 });
    buildingRow(ctx, e.minX, e.maxX, 24, 'north', { minF: 6, maxF: 10 });
  },
};

// ======================================================================= 3
export const level03: LevelDef = {
  id: 3,
  name: 'Park Chaos',
  setting: 'Grand Public Park',
  description: 'Benches, bikes and playgrounds. Swallow the medium-sized fun.',
  duration: 60,
  objectives: [
    { kind: 'count', target: 30, label: 'Swallow objects' },
    { kind: 'tag', tag: 'medium', target: 3, label: 'Medium objects' },
  ],
  stars: [6800, 13500],
  startTier: 2,
  maxTier: 9,
  growth: 1.05,
  w: 64,
  h: 64,
  margin: 30,
  theme: THEMES.park,
  difficulty: 2,
  seed: 303,
  start: [-12, 12],
  hero: ['bench', 'bicycle', 'swing'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    paintGrass(ctx, e.minX, e.minZ, e.maxX, e.maxZ);
    // paths
    const cross: Pt[][] = [
      [[-34, 0], [-9, 0]], [[9, 0], [34, 0]], [[0, -34], [0, -9]], [[0, 9], [0, 34]],
      [[-30, -30], [-8, -7]], [[30, 30], [8, 7]],
    ];
    for (const c of cross) {
      p.path(c, 3.4, C.pathEdge);
      p.path(c, 3.0, C.path);
    }
    const ring: Pt[] = [];
    for (let i = 0; i <= 48; i++) ring.push([Math.cos((i / 48) * Math.PI * 2) * 24, Math.sin((i / 48) * Math.PI * 2) * 24]);
    p.path(ring, 3.2, C.pathEdge, { smooth: true });
    p.path(ring, 2.8, C.path, { smooth: true });
    // central plaza
    p.circle(0, 0, 9.5, '#cfc6b2').circle(0, 0, 9, C.plaza);
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      p.path([[Math.cos(a) * 4.2, Math.sin(a) * 4.2], [Math.cos(a) * 9, Math.sin(a) * 9]], 0.06, '#cbbfa6');
    }
    p.ring(0, 0, 6.5, 0.08, '#cbbfa6');
    ctx.place('fountain', 0, 0, { force: true, rot: 0 });
    ctx.circleOf('bench', 0, 0, 7.6, 6, { face: true, phase: 0.26 });
    ctx.circleOf('parkbin_lamp', 0, 0, 8.4, 6, { phase: 0.78 });
    // playground (NE)
    p.roundRect(8, -28, 28, -10, 2, '#f0dca6', { color: '#a8754a', w: 0.5 });
    p.speckle(8, -28, 28, -10, ['rgba(160,120,60,0.2)'], 1.2, 0.05);
    ctx.place('swing', 13, -23, { rot: 0 });
    ctx.place('slide', 22, -22, { rot: Math.PI / 2 });
    ctx.place('seesaw', 14, -14, { rot: 0.3 });
    ctx.place('springrider', 23, -14, {});
    ctx.place('springrider', 19, -16, {});
    ctx.cluster([['ball', 2], ['toyblocks', 1], ['bucket', 2], ['duck', 1], ['toycar', 1], ['teddy', 1]], 18, -19, 7, 18);
    // picnic area (SW)
    for (const [x, z] of [[-20, 14], [-13, 19], [-24, 22], [-16, 27]] as Pt[]) {
      ctx.place('picnictable', x, z, { rot: ctx.rng.range(-0.4, 0.4) });
      ctx.cluster([['apple', 2], ['sandwich', 1], ['cup', 2], ['can', 2], ['basket', 1]], x, z + 1.5, 1.6, 5);
    }
    // flower garden (NW)
    for (let i = 0; i < 6; i++) {
      const x = -28 + (i % 3) * 7, z = -27 + Math.floor(i / 3) * 8;
      p.roundRect(x - 2.4, z - 1.4, x + 2.4, z + 1.4, 0.8, C.soil);
      ctx.cluster('flowers', x, z, 2, 6, 0.02);
    }
    ctx.scatter([['planter', 3], ['birdbath', 1], ['flowerpot', 3], ['gnome', 1], ['bush', 2]], { x0: -31, z0: -31, x1: -10, z1: -10 }, 16, { gap: 0.6 });
    // bike corner (SE)
    for (let k = 0; k < 2; k++) {
      ctx.place('bikerack', 20, 14 + k * 4, { rot: 0, force: true });
      ctx.row('bicycle', 15, 15.6 + k * 4, 25, 15.6 + k * 4, 1.0, { rot: Math.PI / 2, skip: 0.3, gap: -0.6 });
    }
    // benches along the ring, lamps
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + 0.13;
      ctx.place(i % 3 === 0 ? 'lamppost' : 'bench', Math.cos(a) * 26.3, Math.sin(a) * 26.3, { rot: -a - Math.PI / 2, gap: 0.1 });
      ctx.place('litterbasket', Math.cos(a + 0.09) * 26.3, Math.sin(a + 0.09) * 26.3, { gap: 0.05 });
    }
    // trees everywhere
    ctx.scatter([['smalltree', 3], ['tree', 2], ['bush', 2]], { x0: -31, z0: -31, x1: 31, z1: 31 }, 46, { gap: 1.0 });
    ctx.scatter([['bench', 1], ['bicycle', 1], ['planter', 1], ['picnictable', 1]], { x0: -31, z0: -31, x1: 31, z1: 31 }, 12, { gap: 0.6 });
    const fod: [string, number][] = [['flowers', 3], ['ball', 2], ['frisbee', 1], ['can', 2], ['cup', 2], ['apple', 2], ['kite', 1], ['skateboard', 1], ['soccerball', 1], ['litterbasket', 1]];
    ctx.scatter(fod, { x0: -31.5, z0: -31.5, x1: 31.5, z1: 31.5 }, 150, { gap: 0.25, respawn: true });
    ctx.coins(ring.slice(4, 15), 12);
    ctx.coins([[-30, 0], [-12, 0]], 9);
    ctx.place('pw_magnet', 0, -12, { force: true, rot: 0 });
    ctx.place('pw_time', -18, 6, { force: true, rot: 0 });
    ctx.place('pw_multi', 16, 24, { force: true, rot: 0 });
    ctx.place('secret_duck', -31.3, 31.3, { force: true, rot: 2 });
    ctx.treeBorder(6, 4);
    skyline(ctx, 26, { minF: 4, maxF: 8, rows: 1 });
  },
};

// ======================================================================= 4
export const level04: LevelDef = {
  id: 4,
  name: 'Traffic Eater',
  setting: 'Urban Crossroads',
  description: 'Cars, scooters and road works. Grow big enough to eat the traffic.',
  duration: 65,
  objectives: [{ kind: 'score', target: 3000, label: 'Reach score' }],
  stars: [4000, 7000],
  startTier: 3,
  maxTier: 10,
  growth: 1.05,
  w: 76,
  h: 76,
  margin: 32,
  theme: THEMES.traffic,
  difficulty: 2,
  seed: 404,
  start: [-20, 10],
  hero: ['car', 'motorcycle', 'cone'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    p.fill('#c9c3b6');
    paintSidewalk(ctx, e.minX, e.minZ, e.maxX, e.maxZ, 1.4);
    p.road(e.minX, 0, e.maxX, 0, 14, { lanes: 4, center: 'double' });
    p.road(0, e.minZ, 0, e.maxZ, 14, { lanes: 4, center: 'double' });
    p.rect(-7, -7, 7, 7, C.asphalt);
    for (const s of [-1, 1]) {
      p.crosswalk(s * 9.2, 0, 13, 3, 'z');
      p.crosswalk(0, s * 9.2, 13, 3, 'x');
      p.path([[s * 7.4, -7], [s * 7.4, 7]], 0.35, '#f4f4ee', { cap: 'butt' });
      p.path([[-7, s * 7.4], [7, s * 7.4]], 0.35, '#f4f4ee', { cap: 'butt' });
    }
    p.rect(e.minX, -7.3, e.maxX, -7, C.curb).rect(e.minX, 7, e.maxX, 7.3, C.curb);
    p.rect(-7.3, e.minZ, -7, e.maxZ, C.curb).rect(7, e.minZ, 7.3, e.maxZ, C.curb);
    // repaint the intersection over the curbs
    p.rect(-7, -7.3, 7, 7.3, C.asphalt).rect(-7.3, -7, 7.3, 7, C.asphalt);
    // NE: pocket park
    p.roundRect(14, -36, 36, -14, 2, '#c4bba8');
    paintGrass(ctx, 15, -35, 35, -15);
    ctx.scatter([['smalltree', 2], ['bench', 2], ['bush', 2], ['litterbasket', 1], ['planter', 1]], { x0: 15, z0: -35, x1: 35, z1: -15 }, 18, { gap: 0.8 });
    // NW: parking lot
    p.rect(-36, -36, -13, -13, '#5a5d66');
    for (let r = 0; r < 3; r++) p.parking(-35, -35 + r * 8, 9, 2.5, 5, 1);
    for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) if (ctx.rng.chance(0.62)) ctx.place(ctx.rng.pick(['car', 'hatchback', 'car', 'suv']), -33.75 + i * 2.5, -32.5 + r * 8, { rot: Math.PI / 2 + (ctx.rng.chance(0.5) ? Math.PI : 0), gap: -0.5 });
    // SE: plaza with services
    p.tiles(13, 13, 36, 36, 2, C.plaza, C.plazaB, '#cfc6b2');
    ctx.place('newsstand', 18, 18, { rot: Math.PI / 4 });
    ctx.place('kiosk', 30, 29, { rot: -Math.PI / 4 });
    ctx.place('vending', 25, 15, { rot: Math.PI });
    ctx.scatter([['bench_modern', 2], ['planterbox', 2], ['phonebooth', 1], ['trashbin', 2], ['bikerack', 1], ['cafeset', 1]], { x0: 14, z0: 14, x1: 35, z1: 35 }, 16, { gap: 0.8 });
    // SW: road works
    p.rect(-36, 13, -13, 36, '#9a8a72');
    p.speckle(-36, 13, -13, 36, ['rgba(80,60,40,0.3)', 'rgba(255,255,255,0.1)'], 1.4, 0.08);
    ctx.row('barrier', -34, 13.5, -14, 13.5, 1.6, { rot: 0 });
    ctx.row('barrier', -13.5, 15, -13.5, 35, 1.6, { rot: Math.PI / 2 });
    ctx.scatter([['roadbarrel', 3], ['cone', 4], ['pallet', 2], ['palletboxes', 1], ['crate', 2], ['gascylinders', 1], ['toolchest', 1], ['spool', 1], ['barrel', 2]], { x0: -35, z0: 15, x1: -15, z1: 35 }, 34, { gap: 0.5 });
    ctx.place('generator', -28, 28, { rot: 0.3 });
    // street furniture on the sidewalks
    for (const s of [-1, 1]) {
      for (let k = 12; k < 37; k += 8) {
        ctx.place('lamppost', s * k, -8.2, { rot: -Math.PI / 2 });
        ctx.place('lamppost', s * k + 4 * s, 8.2, { rot: Math.PI / 2 });
        ctx.place('lamppost', -8.2, s * k, { rot: Math.PI });
        ctx.place('lamppost', 8.2, s * k + 4 * s, { rot: 0 });
      }
    }
    ctx.place('trafficlight', -8.6, -8.6, { rot: Math.PI / 4, force: true });
    ctx.place('trafficlight', 8.6, 8.6, { rot: -3 * Math.PI / 4, force: true });
    ctx.place('trafficlight', 8.6, -8.6, { rot: -Math.PI / 4, force: true });
    ctx.place('trafficlight', -8.6, 8.6, { rot: 3 * Math.PI / 4, force: true });
    ctx.place('busshelter', -24, 10.5, { rot: Math.PI, force: true });
    ctx.place('busshelter', 24, -10.5, { rot: 0, force: true });
    const walks = [
      { x0: -37, z0: -12.5, x1: -10, z1: -7.6 }, { x0: 10, z0: -12.5, x1: 37, z1: -7.6 },
      { x0: -37, z0: 7.6, x1: -10, z1: 12.5 }, { x0: 10, z0: 7.6, x1: 37, z1: 12.5 },
      { x0: -12.5, z0: -37, x1: -7.6, z1: -10 }, { x0: -12.5, z0: 10, x1: -7.6, z1: 37 },
      { x0: 7.6, z0: -37, x1: 12.5, z1: -10 }, { x0: 7.6, z0: 10, x1: 12.5, z1: 37 },
    ];
    for (const w of walks) {
      ctx.scatter([['motorcycle', 2], ['vespa', 2], ['bicycle', 1], ['hydrant', 1], ['streetsign', 2], ['trashbin', 2], ['newsbox', 1], ['bollard', 2], ['parkingmeter', 1], ['cone', 2]], w, 9, { gap: 0.4 });
      ctx.scatter([['can', 3], ['cup', 3], ['shoppingbag', 1], ['bottle', 2], ['cone', 1]], w, 16, { gap: 0.2, respawn: true });
    }
    // traffic: 2 lanes each direction per road
    const L = 75;
    const ids = ['car', 'car', 'hatchback', 'taxi', 'suv', 'van', 'motorcycle', 'hatchback'];
    ctx.lane({ x0: -L, z0: 1.75, x1: L, z1: 1.75, speed: 8, ids, stop: { at: L - 8, group: 0 } });
    ctx.lane({ x0: -L, z0: 5.25, x1: L, z1: 5.25, speed: 6.5, ids, stop: { at: L - 8, group: 0 } });
    ctx.lane({ x0: L, z0: -1.75, x1: -L, z1: -1.75, speed: 8, ids, stop: { at: L - 8, group: 0 } });
    ctx.lane({ x0: L, z0: -5.25, x1: -L, z1: -5.25, speed: 6.5, ids, stop: { at: L - 8, group: 0 } });
    ctx.lane({ x0: -1.75, z0: -L, x1: -1.75, z1: L, speed: 8, ids, stop: { at: L - 8, group: 1 } });
    ctx.lane({ x0: -5.25, z0: -L, x1: -5.25, z1: L, speed: 6.5, ids, stop: { at: L - 8, group: 1 } });
    ctx.lane({ x0: 1.75, z0: L, x1: 1.75, z1: -L, speed: 8, ids, stop: { at: L - 8, group: 1 } });
    ctx.lane({ x0: 5.25, z0: L, x1: 5.25, z1: -L, speed: 6.5, ids, stop: { at: L - 8, group: 1 } });
    ctx.coins([[-36, 10], [-14, 10]], 10);
    ctx.coins([[10, 14], [10, 36]], 10);
    ctx.place('pw_surge', 24, 24, { force: true, rot: 0 });
    ctx.place('pw_multi', -25, -10, { force: true, rot: 0 });
    ctx.place('pw_time', 11, -24, { force: true, rot: 0 });
    ctx.place('secret_duck', -36.8, 36.8, { force: true, rot: 2 });
    skyline(ctx, 2.5, { minF: 3, maxF: 8, rows: 2, shops: true });
  },
};

// ======================================================================= 5
export const level05: LevelDef = {
  id: 5,
  name: 'Shopping Spree',
  setting: 'Commercial Avenue',
  description: 'Market stalls, kiosks and cafés. Devour the commerce.',
  duration: 70,
  objectives: [
    { kind: 'tag', tag: 'commercial', target: 5, label: 'Commercial structures' },
    { kind: 'score', target: 4000, label: 'Reach score' },
  ],
  stars: [9200, 18400],
  startTier: 3,
  maxTier: 10,
  growth: 1.05,
  w: 88,
  h: 44,
  margin: 30,
  theme: THEMES.shopping,
  difficulty: 3,
  seed: 505,
  start: [-6, 12],
  hero: ['stall', 'kiosk', 'cafeset'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    p.fill('#d9cdb8');
    p.tiles(e.minX, -22, e.maxX, 22, 1.6, '#e9dcc6', '#e2d3ba', '#cdbd9f', 0.05);
    // decorative paving band down the middle
    p.tiles(e.minX, -3.2, e.maxX, 3.2, 0.8, '#c96f5a', '#d98a70', '#b75e4b', 0.04);
    p.rect(e.minX, -22, e.maxX, -20.8, '#b9ab90').rect(e.minX, 20.8, e.maxX, 22, '#b9ab90');
    // piazza
    p.circle(0, 0, 10, '#d4c4a6').circle(0, 0, 9.4, '#efe3cd');
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      p.poly([[0, 0], [Math.cos(a) * 9.4, Math.sin(a) * 9.4], [Math.cos(a + 0.26) * 9.4, Math.sin(a + 0.26) * 9.4]], i % 2 ? '#e6d6bb' : '#efe3cd');
    }
    ctx.place('statue', 0, 0, { rot: Math.PI / 2, force: true });
    ctx.circleOf('planter', 0, 0, 7.5, 6, { phase: 0.5 });
    // central green line: trees and benches
    for (let x = -42; x <= 42; x += 8) {
      if (Math.abs(x) < 12) continue;
      ctx.place('smalltree', x, 0, {});
      ctx.place('bench_modern', x + 4, 1.6, { rot: 0 });
      ctx.place('bench_modern', x + 4, -1.6, { rot: Math.PI });
    }
    // market (west)
    p.rect(-42, -17, -14, -6, 'rgba(200,120,80,0.12)');
    for (let i = 0; i < 4; i++) {
      ctx.place('stall', -38 + i * 7, -14.5, { rot: 0 });
      ctx.place('stall', -38 + i * 7, -8.5, { rot: Math.PI });
    }
    ctx.place('flowerstand', -40, 10, { rot: 0 });
    ctx.place('flowerstand', -18, 16, { rot: Math.PI });
    // food court (east)
    p.rect(14, -17, 42, -6, 'rgba(90,140,200,0.12)');
    ctx.place('foodcart', 19, -14, { rot: 0.2 });
    ctx.place('foodcart', 33, -15, { rot: -0.3 });
    ctx.place('icecreamvan', 26, 9, { rot: 0 });
    for (const [x, z] of [[18, -8], [24, -10], [30, -8.5], [37, -10], [38, -4.5]] as Pt[]) ctx.place('cafeset', x, z, {});
    ctx.place('kiosk', -26, 13, { rot: Math.PI });
    ctx.place('kiosk', 14, 15, { rot: Math.PI });
    ctx.place('newsstand', 40, 14, { rot: Math.PI });
    ctx.place('newsstand', -8, -15, { rot: 0 });
    // shop-front strips
    for (const zs of [-1, 1]) {
      const zone = { x0: -43, z0: Math.min(zs * 16.5, zs * 20.5), x1: 43, z1: Math.max(zs * 16.5, zs * 20.5) };
      ctx.scatter([['aframe', 3], ['clothesrack', 2], ['vending', 1], ['planterbox', 2], ['giftboxes', 2], ['umbrella_table', 2], ['cafechair', 2], ['shopsign', 1], ['flowerpot', 2]], zone, 30, { gap: 0.4 });
      ctx.scatter([['shoppingbag', 4], ['cup', 2], ['can', 2], ['giftboxes', 1]], zone, 22, { gap: 0.2, respawn: true });
    }
    ctx.scatter([['shoppingbag', 3], ['cup', 2], ['can', 2], ['bottle', 1], ['aframe', 1], ['giftboxes', 1], ['cafechair', 1], ['cafetable', 1], ['trashbin', 1]], { x0: -43, z0: -20, x1: 43, z1: 20 }, 120, { gap: 0.3, respawn: true });
    ctx.coins([[-12, -4.5], [12, -4.5]], 10);
    ctx.coins([[-12, 4.5], [12, 4.5]], 10);
    ctx.place('pw_multi', 0, 13, { force: true, rot: 0 });
    ctx.place('pw_surge', -30, 1.5, { force: true, rot: 0 });
    ctx.place('pw_time', 34, 1.5, { force: true, rot: 0 });
    ctx.place('secret_duck', 43.4, -21.4, { force: true, rot: 2 });
    buildingRow(ctx, e.minX, e.maxX, -22.3, 'south', { minF: 3, maxF: 5, shops: true, colors: ['#f2d7a6', '#e6a0a0', '#a59bd1', '#b5c99a', '#9fd3e0', '#ffcf8a'] });
    buildingRow(ctx, e.minX, e.maxX, 22.3, 'north', { minF: 3, maxF: 5, shops: true, colors: ['#f2d7a6', '#e6a0a0', '#a59bd1', '#b5c99a', '#9fd3e0', '#ffcf8a'] });
    buildingRow(ctx, e.minX, e.maxX, -34, 'south', { minF: 6, maxF: 11 });
    buildingRow(ctx, e.minX, e.maxX, 34, 'north', { minF: 6, maxF: 11 });
    for (const x of [e.minX + 4, e.maxX - 4]) for (let z = -18; z <= 18; z += 6) ctx.tree(x, z, 5, 'round');
    void paintGrass;
  },
};
