import type { LevelDef } from './types';
import { THEMES, C, paintGrass, paintSidewalk, buildingRow, skyline, waterPlane } from './common';
import type { LevelContext } from '../LevelContext';
import type { Pt } from '../GroundPainter';

const cityLitter: [string, number][] = [['can', 3], ['cup', 3], ['bottle', 2], ['shoppingbag', 1], ['cone', 1], ['pizzabox', 1]];

/** Road grid helper: horizontal & vertical roads with sidewalks and crossings. */
function roadGrid(ctx: LevelContext, xs: number[], zs: number[], width: number, o: { asphalt?: string; line?: string; edgeColor?: string; walk?: number } = {}) {
  const p = ctx.painter;
  const e = ctx.ext;
  const walk = o.walk ?? 4;
  for (const z of zs) p.rect(e.minX, z - width / 2 - walk, e.maxX, z + width / 2 + walk, '#cfc9bc');
  for (const x of xs) p.rect(x - width / 2 - walk, e.minZ, x + width / 2 + walk, e.maxZ, '#cfc9bc');
  for (const z of zs) {
    paintSidewalk(ctx, e.minX, z - width / 2 - walk, e.maxX, z - width / 2);
    paintSidewalk(ctx, e.minX, z + width / 2, e.maxX, z + width / 2 + walk);
  }
  for (const x of xs) {
    paintSidewalk(ctx, x - width / 2 - walk, e.minZ, x - width / 2, e.maxZ);
    paintSidewalk(ctx, x + width / 2, e.minZ, x + width / 2 + walk, e.maxZ);
  }
  for (const z of zs) p.road(e.minX, z, e.maxX, z, width, { asphalt: o.asphalt, line: o.line, center: 'dashed', edgeColor: o.edgeColor });
  for (const x of xs) p.road(x, e.minZ, x, e.maxZ, width, { asphalt: o.asphalt, line: o.line, center: 'dashed', edgeColor: o.edgeColor });
  for (const x of xs)
    for (const z of zs) {
      p.rect(x - width / 2, z - width / 2, x + width / 2, z + width / 2, o.asphalt ?? C.asphalt);
      p.crosswalk(x - width / 2 - 1.8, z, width - 1, 2.6, 'z', o.line);
      p.crosswalk(x + width / 2 + 1.8, z, width - 1, 2.6, 'z', o.line);
      p.crosswalk(x, z - width / 2 - 1.8, width - 1, 2.6, 'x', o.line);
      p.crosswalk(x, z + width / 2 + 1.8, width - 1, 2.6, 'x', o.line);
    }
}

function laneSet(ctx: LevelContext, xs: number[], zs: number[], L: number, ids: string[], speed: number, hover?: number) {
  for (const z of zs) {
    ctx.lane({ x0: -L, z0: z + 2.2, x1: L, z1: z + 2.2, speed, ids, hover });
    ctx.lane({ x0: L, z0: z - 2.2, x1: -L, z1: z - 2.2, speed: speed * 0.9, ids, hover });
  }
  for (const x of xs) {
    ctx.lane({ x0: x - 2.2, z0: -L, x1: x - 2.2, z1: L, speed: speed * 0.95, ids, hover });
    ctx.lane({ x0: x + 2.2, z0: L, x1: x + 2.2, z1: -L, speed: speed * 0.85, ids, hover });
  }
}

// ======================================================================= 6
export const level06: LevelDef = {
  id: 6,
  name: 'Downtown Devour',
  setting: 'Modern City Centre',
  description: 'Glass, steel and traffic. A dense downtown full of urban furniture.',
  duration: 75,
  objectives: [{ kind: 'score', target: 6000, label: 'Reach score' }],
  stars: [14400, 28900],
  startTier: 4,
  maxTier: 12,
  growth: 1.1,
  w: 100,
  h: 100,
  margin: 30,
  theme: THEMES.downtown,
  difficulty: 3,
  seed: 606,
  start: [-10, -18],
  hero: ['busshelter', 'suv', 'sculpture'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    p.fill('#d6d0c4');
    p.tiles(e.minX, e.minZ, e.maxX, e.maxZ, 2.2, '#dcd6ca', '#d3ccbe', '#c4bdae', 0.05);
    const xs = [-24, 24], zs = [-24, 24];
    roadGrid(ctx, xs, zs, 11, { walk: 4 });
    // central plaza
    p.circle(0, 0, 15, '#c4bdae').circle(0, 0, 14.5, '#ebe4d6');
    p.ring(0, 0, 10, 0.25, '#c96f5a').ring(0, 0, 5, 0.25, '#c96f5a');
    ctx.place('sculpture', 0, 0, { force: true, variant: 0 });
    ctx.circleOf('festivetree', 0, 0, 11.5, 4, { phase: Math.PI / 4 });
    ctx.circleOf('bench_modern', 0, 0, 8, 6, { face: true });
    ctx.circleOf('parkbin_lamp', 0, 0, 13.5, 8, { phase: 0.2 });
    // blocks
    const blocks: [number, number][] = [];
    for (const bx of [-1, 0, 1]) for (const bz of [-1, 0, 1]) if (bx || bz) blocks.push([bx * 37.5, bz * 37.5]);
    blocks.forEach(([cx, cz], i) => {
      const zone = { x0: cx - 11, z0: cz - 11, x1: cx + 11, z1: cz + 11 };
      if (i % 3 === 0) {
        p.roundRect(cx - 11, cz - 11, cx + 11, cz + 11, 1.5, '#b8b09f');
        paintGrass(ctx, cx - 10.5, cz - 10.5, cx + 10.5, cz + 10.5);
        ctx.scatter([['tree', 2], ['smalltree', 2], ['bench', 2], ['statue', 1], ['planter', 1]], zone, 12, { gap: 1 });
      } else if (i % 3 === 1) {
        ctx.place('pavilion', cx, cz - 3, { rot: 0 });
        ctx.place('metroentrance', cx + 6, cz + 6, { rot: Math.PI });
        ctx.scatter([['cafeset', 2], ['vending', 1], ['phonebooth', 1], ['clocktower', 1], ['billboard', 1]], zone, 8, { gap: 1 });
      } else {
        ctx.place('newsstand', cx - 5, cz + 5, { rot: 0 });
        ctx.place('sculpture', cx + 5, cz - 5, {});
        ctx.scatter([['kiosk', 1], ['planter', 2], ['bench_modern', 2], ['bikerack', 1], ['billboard', 1], ['festivetree', 1]], zone, 10, { gap: 1 });
      }
      ctx.scatter([['trashbin', 2], ['bollard', 2], ['hydrant', 1], ['newsbox', 1], ['planterbox', 1], ['vespa', 1], ['bicycle', 1]], zone, 14, { gap: 0.4 });
      ctx.scatter(cityLitter, zone, 22, { gap: 0.2, respawn: true });
    });
    // roadside: shelters, lamps, parked cars
    for (const z of zs) {
      for (let x = -48; x <= 48; x += 9) {
        if (xs.some((q) => Math.abs(q - x) < 9)) continue;
        ctx.place('lamppost', x, z - 6.3, { rot: Math.PI / 2 });
        ctx.place('lamppost', x + 4.5, z + 6.3, { rot: -Math.PI / 2 });
      }
      ctx.place('busshelter', -38, z - 7.5, { rot: 0 });
      ctx.place('busshelter', 38, z + 7.5, { rot: Math.PI });
    }
    for (const x of xs)
      for (let z = -46; z <= 46; z += 9) {
        if (zs.some((q) => Math.abs(q - z) < 9)) continue;
        ctx.place('trafficlight', x - 6.4, z, { rot: 0 });
      }
    ctx.scatter([['motorcycle', 2], ['vespa', 2], ['streetsign', 2], ['trashbin', 2], ['phonebooth', 1], ['parkingmeter', 2]], { x0: -50, z0: -50, x1: 50, z1: 50 }, 30, { gap: 0.5 });
    ctx.scatter(cityLitter, { x0: -50, z0: -50, x1: 50, z1: 50 }, 90, { gap: 0.25, respawn: true });
    laneSet(ctx, xs, zs, 80, ['car', 'suv', 'van', 'taxi', 'bus', 'hatchback', 'suv', 'pickup'], 7.5);
    ctx.coins([[-15, 17], [15, 17]], 12);
    ctx.coins([[-17, -15], [-17, 15]], 12);
    ctx.place('pw_magnet', 13, -18, { force: true, rot: 0 });
    ctx.place('pw_surge', -38, 0, { force: true, rot: 0 });
    ctx.place('pw_time', 37, -37, { force: true, rot: 0 });
    ctx.place('pw_multi', -18, 38, { force: true, rot: 0 });
    ctx.place('secret_duck', 49.3, 49.3, { force: true, rot: 2 });
    skyline(ctx, 3, { minF: 8, maxF: 16, rows: 2, tall: true, colors: ['#d9dde6', '#9fb7c9', '#c9b79c', '#7d8596', '#e9e4da'] });
  },
};

// ======================================================================= 7
export const level07: LevelDef = {
  id: 7,
  name: 'Industrial Hunger',
  setting: 'Harbour Industrial Zone',
  description: 'Pallets, barrels, machines and containers. Feed on heavy industry.',
  duration: 80,
  objectives: [
    { kind: 'tag', tag: 'industrial', target: 8, label: 'Industrial objects' },
    { kind: 'score', target: 8000, label: 'Reach score' },
  ],
  stars: [19500, 38900],
  startTier: 3,
  maxTier: 13,
  growth: 1.15,
  w: 100,
  h: 100,
  margin: 30,
  theme: { ...THEMES.industrial },
  difficulty: 4,
  seed: 707,
  start: [-36, -30],
  hero: ['forklift', 'container', 'barrel'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    p.fill('#b4b0a6');
    p.tiles(e.minX, e.minZ, e.maxX, e.maxZ, 6, '#bab6ac', '#b1ada3', '#a39f95', 0.08);
    p.blotches(e.minX, e.minZ, e.maxX, e.maxZ, ['rgba(60,50,40,0.18)', 'rgba(255,255,255,0.08)'], 160, 1.5, 6);
    p.speckle(e.minX, e.minZ, e.maxX, e.maxZ, ['rgba(0,0,0,0.12)', 'rgba(255,255,255,0.08)'], 0.5, 0.08);
    // main haul road
    p.road(e.minX, 0, e.maxX, 0, 10, { asphalt: '#3f4249', center: 'dashed', line: '#ffd23f' });
    p.road(-20, e.minZ, -20, -5, 8, { asphalt: '#3f4249', center: 'none', line: '#ffd23f' });
    // safety lanes
    const yellow = '#ffc61a';
    for (const [x0, z0, x1, z1] of [[-48, -48, -24, -8], [6, -48, 48, -8], [-48, 8, -8, 48], [8, 8, 48, 48]] as const) {
      p.path([[x0, z0], [x1, z0], [x1, z1], [x0, z1], [x0, z0]], 0.25, yellow, { cap: 'butt' });
    }
    // hatched no-go zones
    for (const [x, z] of [[-6, -20], [4, 26]] as Pt[]) {
      p.rect(x - 3, z - 3, x + 3, z + 3, '#2c2f3a');
      for (let k = -3; k < 3; k += 0.8) p.path([[x + k, z - 3], [x + k + 3, z]], 0.3, yellow, { cap: 'butt' });
    }
    // container yard (NE)
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
      if (ctx.rng.chance(0.25)) continue;
      ctx.place('container', 14 + c * 8.5, -42 + r * 4, { rot: 0, gap: 0.05 });
    }
    ctx.place('craneloader', 26, -38, { rot: 0, force: true });
    ctx.scatter([['container', 2], ['forklift', 2], ['palletboxes', 2], ['barrel', 2]], { x0: 8, z0: -28, x1: 46, z1: -10 }, 14, { gap: 1 });
    // warehouse apron (NW)
    ctx.scatter([['pallet', 3], ['palletboxes', 4], ['cardboard', 3], ['ibc', 2], ['gascylinders', 1], ['forklift', 1]], { x0: -46, z0: -46, x1: -26, z1: -10 }, 44, { gap: 0.4 });
    for (let k = 0; k < 4; k++) p.rect(-46 + k * 5, -49.5, -42.5 + k * 5, -47, '#2c2f3a');
    // machinery (SW)
    ctx.scatter([['machine', 2], ['generator', 2], ['compressor', 2], ['spool', 2], ['toolchest', 2], ['barrel', 3]], { x0: -46, z0: 10, x1: -10, z1: 46 }, 30, { gap: 0.8 });
    ctx.place('portacabin', -40, 42, { rot: 0 });
    ctx.place('portacabin', -16, 14, { rot: Math.PI / 2 });
    // silos & trucks (SE)
    ctx.place('silo', 38, 38, {});
    ctx.place('silo', 30, 42, {});
    ctx.place('silo', 42, 28, {});
    ctx.place('mixer', 18, 20, { rot: 0.4 });
    ctx.place('boxtruck', 18, 34, { rot: Math.PI / 2 });
    ctx.place('boxtruck', 26, 14, { rot: 0 });
    ctx.scatter([['barrel', 3], ['palletboxes', 2], ['gascylinders', 1], ['cardboard', 1], ['roadbarrel', 1], ['generator', 1]], { x0: 8, z0: 8, x1: 46, z1: 46 }, 26, { gap: 0.6 });
    ctx.scatter([['barrel', 3], ['pallet', 2], ['cardboard', 3], ['cone', 2], ['crate', 2], ['can', 2], ['bottle', 1]], { x0: -49, z0: -49, x1: 49, z1: 49 }, 120, { gap: 0.3, respawn: true });
    ctx.scatter([['forklift', 1], ['pickup', 1], ['generator', 1]], { x0: -48, z0: -48, x1: 48, z1: 48 }, 6, { gap: 1 });
    ctx.lane({ x0: -80, z0: 2.4, x1: 80, z1: 2.4, speed: 6, ids: ['boxtruck', 'pickup', 'van', 'mixer', 'forklift'] });
    ctx.lane({ x0: 80, z0: -2.4, x1: -80, z1: -2.4, speed: 6, ids: ['boxtruck', 'pickup', 'van', 'forklift'] });
    ctx.coins([[-46, 6], [-10, 6]], 14);
    ctx.coins([[10, -6], [46, -6]], 14);
    ctx.place('pw_magnet', -30, 24, { force: true, rot: 0 });
    ctx.place('pw_surge', 34, -18, { force: true, rot: 0 });
    ctx.place('pw_time', -2, 40, { force: true, rot: 0 });
    ctx.place('pw_multi', -36, -6, { force: true, rot: 0 });
    ctx.place('secret_duck', -49.3, 49.3, { force: true, rot: 2 });
    // background: warehouses and chimneys
    const b = ctx.bounds;
    const wh = ['#8a8f9a', '#c96f5a', '#5d7f9a', '#b5b0a5', '#7a8a6a'];
    for (const [x0, x1, z, f] of [[b.minX - 10, b.maxX + 10, b.minZ - 3, 'south'], [b.minX - 10, b.maxX + 10, b.maxZ + 3, 'north']] as const) {
      for (let x = x0; x < x1; x += 22) ctx.building(x + 10, f === 'south' ? z - 9 : z + 9, f === 'south' ? 0 : Math.PI, { w: 20, d: 16, floors: 2, floorH: 4.4, color: ctx.rng.pick(wh), roof: 'gable', roofColor: '#6b6f7a' });
    }
    for (const [z0, z1, x, f] of [[b.minZ + 5, b.maxZ - 5, b.minX - 3, 'east'], [b.minZ + 5, b.maxZ - 5, b.maxX + 3, 'west']] as const) {
      for (let z = z0; z < z1; z += 22) ctx.building(f === 'east' ? x - 9 : x + 9, z + 10, Math.PI / 2, { w: 20, d: 16, floors: 2, floorH: 4.4, color: ctx.rng.pick(wh), roof: 'gable', roofColor: '#6b6f7a' });
    }
    for (const [x, z] of [[-70, -64], [64, -70], [70, 60], [-62, 70]] as Pt[]) {
      ctx.raw(x, z, (m) => {
        m.cylB(2.2, 2.8, 26, '#9a9da6', x, 0, z, 12);
        m.cylB(2.3, 2.3, 2, '#e8423f', x, 20, z, 12);
        m.cylB(2.3, 2.3, 2, '#f4f4f0', x, 23, z, 12);
      });
    }
    void buildingRow;
  },
};

// ======================================================================= 8
export const level08: LevelDef = {
  id: 8,
  name: 'Beach Absorption',
  setting: 'Summer Seaside Resort',
  description: 'Umbrellas, loungers, surfboards and boats under a blazing sun.',
  duration: 80,
  objectives: [
    { kind: 'count', target: 40, label: 'Swallow objects' },
    { kind: 'score', target: 10000, label: 'Reach score' },
  ],
  stars: [12000, 20000],
  startTier: 2,
  maxTier: 11,
  growth: 1.15,
  w: 112,
  h: 66,
  margin: 32,
  theme: THEMES.beach,
  difficulty: 4,
  seed: 808,
  start: [-10, 0],
  hero: ['beachumbrella', 'surfboard', 'rowboat'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    const b = ctx.bounds;
    p.fill(C.sand);
    p.blotches(e.minX, e.minZ, e.maxX, e.maxZ, ['rgba(255,240,200,0.4)', 'rgba(200,160,90,0.18)'], 260, 2, 7);
    p.speckle(e.minX, e.minZ, e.maxX, e.maxZ, ['rgba(160,120,60,0.25)', 'rgba(255,255,255,0.35)'], 1.0, 0.05);
    // wet sand & foam toward the sea (z > 26)
    for (let i = 0; i < 12; i++) p.rect(e.minX, 24 + i * 0.7, e.maxX, 24.7 + i * 0.7, `rgba(170,140,90,${0.02 + i * 0.025})`);
    p.rect(e.minX, b.maxZ + 0.2, e.maxX, e.maxZ, '#5ec8e6');
    const foam: Pt[] = [];
    for (let x = e.minX; x <= e.maxX; x += 3) foam.push([x, b.maxZ + 0.4 + Math.sin(x * 0.3) * 0.4]);
    p.path(foam, 0.9, 'rgba(255,255,255,0.85)', { smooth: true });
    // promenade
    p.tiles(e.minX, e.minZ, e.maxX, -25, 1.5, '#e6d2b8', '#dcc3a2', '#c8ad8a', 0.05);
    p.rect(e.minX, -25.3, e.maxX, -25, '#b9a07c');
    // volleyball courts
    for (const x of [-30, 34]) {
      p.rect(x - 8, -4, x + 8, 4, 'rgba(255,255,255,0.0)');
      p.path([[x - 8, -4], [x + 8, -4], [x + 8, 4], [x - 8, 4], [x - 8, -4]], 0.12, '#3d7bf0', { cap: 'butt' });
      ctx.place('volleynet', x, 0, { rot: Math.PI / 2, force: true });
      ctx.place('beachball', x - 4, 2, {});
    }
    // beach clubs: rows of umbrellas + loungers
    for (const [cx, cz] of [[-44, 8], [-6, 6], [14, 14], [-20, -14], [26, -14]] as Pt[]) {
      for (let r = 0; r < 2; r++)
        for (let c = 0; c < 4; c++) {
          const x = cx + c * 4.4, z = cz + r * 5;
          ctx.place('beachumbrella', x, z, { rot: 0, gap: 0.05 });
          ctx.place('lounger', x - 1.2, z + 1.6, { rot: Math.PI / 2 + 0.1, gap: 0.02 });
          if (ctx.rng.chance(0.6)) ctx.place('lounger', x + 1.2, z + 1.6, { rot: Math.PI / 2 - 0.1, gap: 0.02 });
          if (ctx.rng.chance(0.5)) ctx.place('towel', x, z + 3.4, { rot: Math.PI / 2, gap: 0.02 });
        }
    }
    // boats along the waterline
    for (let x = -50; x <= 50; x += 9) {
      const id = ctx.rng.pick(['rowboat', 'rowboat', 'jetski', 'sailboat']);
      ctx.place(id, x + ctx.rng.range(-2, 2), 29 + ctx.rng.range(-1, 1), { rot: Math.PI / 2 + ctx.rng.range(-0.4, 0.4), gap: 0.3 });
    }
    // kiosks, towers, surf
    ctx.place('beachhut', -38, -20, { rot: 0 });
    ctx.place('beachhut', 4, -20, { rot: 0 });
    ctx.place('beachhut', 44, -20, { rot: 0 });
    ctx.place('lifeguard', -18, 22, { rot: Math.PI });
    ctx.place('lifeguard', 22, 23, { rot: Math.PI });
    ctx.place('surfrack', -50, 20, { rot: 0 });
    ctx.place('surfrack', 50, 18, { rot: 0 });
    ctx.place('icecreamvan', 22, -29, { rot: 0 });
    for (let x = -52; x <= 52; x += 8) ctx.place('palm', x, -26.8, {});
    ctx.scatter([['surfboard', 2], ['deckchair', 2], ['cooler', 2], ['sandcastle', 2], ['swimring', 1], ['beachumbrella', 1]], { x0: -55, z0: -22, x1: 55, z1: 31 }, 44, { gap: 0.4 });
    ctx.scatter([['towel', 2], ['beachball', 2], ['bucket', 3], ['flipflops', 3], ['sandcastle', 1], ['can', 2], ['bottle', 1], ['swimring', 1], ['cup', 1]], { x0: -55, z0: -24, x1: 55, z1: 31 }, 170, { gap: 0.25, respawn: true });
    ctx.scatter([['cafechair', 2], ['trashbin', 1], ['shoppingbag', 2], ['cup', 2], ['bench_modern', 1], ['vespa', 1], ['bicycle', 1]], { x0: -55, z0: -32.5, x1: 55, z1: -27.5 }, 34, { gap: 0.3 });
    ctx.coins([[-54, 24], [-30, 24], [-6, 25]], 14);
    ctx.coins([[10, 25], [30, 24], [54, 25]], 14);
    ctx.place('pw_magnet', 0, 20, { force: true, rot: 0 });
    ctx.place('pw_surge', -50, -8, { force: true, rot: 0 });
    ctx.place('pw_time', 50, 4, { force: true, rot: 0 });
    ctx.place('pw_multi', 10, -6, { force: true, rot: 0 });
    ctx.place('secret_duck', 55.4, 32.4, { force: true, rot: 2 });
    // sea & pier
    const sea = waterPlane(0, b.maxZ + 1 + 200, 1200, 400, '#1a86c4', '#56d3f0');
    ctx.extras.push(sea);
    ctx.raw(30, 50, (m) => {
      m.boxB(4, 0.3, 40, '#a8754a', 30, 0.6, 58);
      for (let z = 40; z < 78; z += 4) for (const x of [28.3, 31.7]) m.cylB(0.2, 0.2, 1.4, '#6e4a2e', x, -0.5, z, 6);
    });
    // promenade buildings
    buildingRow(ctx, e.minX, e.maxX, -33.2, 'south', { minF: 2, maxF: 5, shops: true, colors: ['#ff9eb5', '#ffd27a', '#9fe0d6', '#b9a6ff', '#ffb38a', '#a8e6a0', '#f4f4f0'] });
    buildingRow(ctx, e.minX, e.maxX, -46, 'south', { minF: 5, maxF: 9, colors: ['#f4f4f0', '#ffe2c4', '#d9f2ff'] });
  },
};

// ======================================================================= 9
export const level09: LevelDef = {
  id: 9,
  name: 'Neon Metropolis',
  setting: 'Futuristic City at Night',
  description: 'Hovercars, robots and holograms. Find the glowing special cores.',
  duration: 90,
  objectives: [
    { kind: 'score', target: 12000, label: 'Reach score' },
    { kind: 'tag', tag: 'special', target: 3, label: 'Special objects' },
  ],
  stars: [17800, 35700],
  startTier: 3,
  maxTier: 12,
  growth: 1.15,
  w: 100,
  h: 100,
  margin: 30,
  theme: THEMES.neon,
  difficulty: 5,
  seed: 909,
  start: [-18, 12],
  hero: ['robot', 'hovercar', 'neonsign'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    p.fill('#120c26');
    p.tiles(e.minX, e.minZ, e.maxX, e.maxZ, 3, '#1e1642', '#1a1238', '#2a1f58', 0.05);
    p.grid(e.minX, e.minZ, e.maxX, e.maxZ, 6, 'rgba(123,92,255,0.35)', 0.08);
    const xs = [-26, 26], zs = [-26, 26];
    roadGrid(ctx, xs, zs, 11, { asphalt: '#0d0a1c', line: '#3de8ff', edgeColor: '#ff3d9a', walk: 3 });
    // re-tint sidewalks for the night
    for (const z of zs) {
      p.rect(e.minX, z - 8.5, e.maxX, z - 5.5, 'rgba(25,16,55,0.85)');
      p.rect(e.minX, z + 5.5, e.maxX, z + 8.5, 'rgba(25,16,55,0.85)');
      p.path([[e.minX, z - 5.6], [e.maxX, z - 5.6]], 0.15, '#ff3d9a');
      p.path([[e.minX, z + 5.6], [e.maxX, z + 5.6]], 0.15, '#ff3d9a');
    }
    for (const x of xs) {
      p.rect(x - 8.5, e.minZ, x - 5.5, e.maxZ, 'rgba(25,16,55,0.85)');
      p.rect(x + 5.5, e.minZ, x + 8.5, e.maxZ, 'rgba(25,16,55,0.85)');
      p.path([[x - 5.6, e.minZ], [x - 5.6, e.maxZ]], 0.15, '#ff3d9a');
      p.path([[x + 5.6, e.minZ], [x + 5.6, e.maxZ]], 0.15, '#ff3d9a');
    }
    // holo plaza
    p.glow(0, 0, 18, 'rgba(61,232,255,0.25)');
    p.ring(0, 0, 14, 0.3, '#3de8ff').ring(0, 0, 9, 0.2, '#ff3d9a').ring(0, 0, 4, 0.2, '#7b5cff');
    ctx.place('pylon', 0, 0, { force: true });
    ctx.circleOf('holokiosk', 0, 0, 11.5, 4, { phase: Math.PI / 4 });
    ctx.circleOf('neontree', 0, 0, 16, 8, {});
    const blocks: [number, number][] = [];
    for (const bx of [-1, 0, 1]) for (const bz of [-1, 0, 1]) if (bx || bz) blocks.push([bx * 39, bz * 39]);
    blocks.forEach(([cx, cz], i) => {
      const zone = { x0: cx - 11, z0: cz - 11, x1: cx + 11, z1: cz + 11 };
      p.glow(cx, cz, 10, i % 2 ? 'rgba(255,61,154,0.18)' : 'rgba(123,92,255,0.2)');
      ctx.scatter([['neonsign', 2], ['servertower', 2], ['satdish', 1], ['holokiosk', 1], ['neontree', 2], ['mech', 1]], zone, 9, { gap: 1 });
      ctx.scatter('robot', zone, 4, { gap: 0.6, wander: 4 });
      ctx.scatter([['neonbollard', 3], ['datacube', 3], ['holoplant', 2], ['drone', 2], ['cyberbike', 1]], zone, 16, { gap: 0.4 });
      ctx.scatter([['datacube', 2], ['neonbollard', 1], ['can', 2], ['cup', 1], ['holoplant', 1]], zone, 22, { gap: 0.25, respawn: true });
    });
    ctx.scatter([['neonbollard', 2], ['datacube', 2], ['drone', 1], ['cyberbike', 1], ['robot', 1]], { x0: -50, z0: -50, x1: 50, z1: 50 }, 70, { gap: 0.3, respawn: true });
    laneSet(ctx, xs, zs, 80, ['hovercar', 'hovercar', 'cyberbike', 'hovercar'], 9, 0.4);
    // special cores (6 on the map, 3 needed)
    const specials: [string, number, number][] = [
      ['pw_magnet', -12, -14], ['pw_multi', 14, 12], ['pw_time', -39, 39], ['pw_surge', 39, -39], ['pw_multi', 39, 39], ['pw_time', -39, -39],
    ];
    for (const [id, x, z] of specials) ctx.place(id, x, z, { force: true, rot: 0 });
    ctx.coins([[-18, 18], [18, 18]], 12);
    ctx.coins([[-18, -18], [18, -18]], 12);
    ctx.place('secret_duck', 49.3, -49.3, { force: true, rot: 2 });
    // skyline with neon
    skyline(ctx, 3, { minF: 8, maxF: 18, rows: 2, tall: true, colors: ['#1b1f3a', '#241a40', '#16243a', '#2a1d3f'] });
    const bb = ctx.bounds;
    for (let i = 0; i < 26; i++) {
      const side = i % 4;
      const t = ctx.rng.range(-45, 45);
      const x = side === 0 ? bb.minX - 1.5 : side === 1 ? bb.maxX + 1.5 : t;
      const z = side === 2 ? bb.minZ - 1.5 : side === 3 ? bb.maxZ + 1.5 : t;
      ctx.deco('neonsign', x, z, side === 0 ? Math.PI / 2 : side === 1 ? -Math.PI / 2 : side === 2 ? 0 : Math.PI);
    }
  },
};

// ====================================================================== 10
export const level10: LevelDef = {
  id: 10,
  name: 'The Final Consumption',
  setting: 'The Grand Capital',
  description: 'Skyscrapers, monuments and the Hungry Spire. Consume the world.',
  duration: 120,
  objectives: [
    { kind: 'score', target: 20000, label: 'Reach score' },
    { kind: 'tag', tag: 'landmark', target: 1, label: 'Major landmark' },
  ],
  stars: [49000, 98000],
  startTier: 3,
  maxTier: 17,
  growth: 1.5,
  w: 176,
  h: 176,
  margin: 50,
  theme: THEMES.finale,
  difficulty: 5,
  seed: 1010,
  start: [-22, 22],
  hero: ['spire', 'skyscraper', 'bus'],
  finaleProp: 'spire',
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    p.fill('#d6cfc1');
    p.tiles(e.minX, e.minZ, e.maxX, e.maxZ, 3, '#dcd5c7', '#d4ccbd', '#c6bfb0', 0.06);
    const xs = [-58, 58], zs = [-58, 58];
    roadGrid(ctx, xs, zs, 13, { walk: 4 });
    // avenues from the plaza
    for (const s of [-1, 1]) {
      p.road(0, s * 36, 0, s * 51, 12, { center: 'double' });
      p.road(s * 36, 0, s * 51, 0, 12, { center: 'double' });
      p.road(0, s * 65, 0, s * e.maxZ, 12, { center: 'double' });
      p.road(s * 65, 0, s * e.maxX, 0, 12, { center: 'double' });
    }
    // grand plaza
    p.circle(0, 0, 36, '#b9ac94').circle(0, 0, 35, '#efe6d4');
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      p.poly([[0, 0], [Math.cos(a) * 35, Math.sin(a) * 35], [Math.cos(a + Math.PI / 24) * 35, Math.sin(a + Math.PI / 24) * 35]], '#e6dbc5');
    }
    p.ring(0, 0, 14, 0.6, '#c96f5a').ring(0, 0, 24, 0.4, '#c96f5a').ring(0, 0, 30, 0.25, '#b9ac94');
    p.circle(0, 0, 12.5, '#cfc4b0');
    ctx.place('spire', 0, 0, { force: true, rot: 0 });
    ctx.block({ cx: 0, cz: 0, r: 13 });
    ctx.circleOf('obelisk', 0, 0, 27, 4, { phase: Math.PI / 4 });
    ctx.circleOf('festivetree', 0, 0, 20, 8, { phase: Math.PI / 8 });
    ctx.circleOf('statue', 0, 0, 20, 4, {});
    ctx.circleOf('bench_modern', 0, 0, 16.5, 12, { face: true, phase: 0.2 });
    ctx.scatter([['kiosk', 1], ['foodcart', 1], ['cafeset', 2], ['newsstand', 1], ['planter', 2], ['parkbin_lamp', 2]], { cx: 0, cz: 0, r: 34, r0: 15 }, 30, { gap: 0.8 });
    ctx.scatter([['can', 3], ['cup', 3], ['shoppingbag', 2], ['cone', 1], ['trashbin', 1], ['cafechair', 1], ['flowerpot', 1], ['bollard', 1]], { cx: 0, cz: 0, r: 34, r0: 14 }, 150, { gap: 0.25, respawn: true });
    // monuments on the avenues
    ctx.place('arch', 0, 74, { rot: 0, force: true });
    ctx.place('arch', 74, 0, { rot: Math.PI / 2, force: true });
    // city blocks: inner ring (between plaza and the grid roads) and outer ring
    const inner: [number, number][] = [[-30, -30], [30, -30], [-30, 30], [30, 30]];
    for (const [cx, cz] of inner) {
      const zone = { x0: cx - 13, z0: cz - 13, x1: cx + 13, z1: cz + 13 };
      p.roundRect(cx - 14, cz - 14, cx + 14, cz + 14, 2, '#cfc6b4');
      ctx.scatter([['house', 3], ['shopbuilding', 2], ['tree', 2], ['busshelter', 1], ['billboard', 1]], zone, 9, { gap: 1.2 });
      ctx.scatter([['car', 2], ['hatchback', 2], ['vespa', 1], ['bicycle', 1], ['trashbin', 2], ['lamppost', 2], ['planter', 1], ['bench', 1]], zone, 20, { gap: 0.6 });
      ctx.scatter(cityLitter, zone, 30, { gap: 0.25, respawn: true });
    }
    // outer blocks: apartments, offices, skyscrapers
    const outer: [number, number][] = [];
    for (const bx of [-1, 0, 1]) for (const bz of [-1, 0, 1]) if (bx || bz) outer.push([bx * 75, bz * 75]);
    outer.forEach(([cx, cz], i) => {
      const zone = { x0: cx - 12.5, z0: cz - 12.5, x1: cx + 12.5, z1: cz + 12.5 };
      if (cx === 0 || cz === 0) {
        // avenue blocks: split around the road
        const z2 = cx === 0 ? { x0: cx - 12.5 + 8, z0: cz - 12.5, x1: cx + 12.5, z1: cz + 12.5 } : { x0: cx - 12.5, z0: cz - 12.5 + 8, x1: cx + 12.5, z1: cz + 12.5 };
        ctx.scatter([['apartment', 2], ['office', 1], ['tree', 2]], z2, 4, { gap: 1.5 });
        ctx.scatter([['bus', 1], ['suv', 2], ['van', 1], ['car', 2]], zone, 6, { gap: 0.8 });
        return;
      }
      ctx.place(i % 2 ? 'skyscraper' : 'office', cx, cz, { rot: 0 });
      ctx.scatter([['apartment', 2], ['shopbuilding', 2], ['house', 1]], { x0: cx - 26, z0: cz - 26, x1: cx + 26, z1: cz + 26 }, 6, { gap: 1.5 });
      ctx.scatter([['suv', 2], ['van', 1], ['bus', 1], ['car', 2], ['tree', 2], ['busshelter', 1], ['statue', 1]], { x0: cx - 26, z0: cz - 26, x1: cx + 26, z1: cz + 26 }, 14, { gap: 0.8 });
      ctx.scatter(cityLitter, { x0: cx - 26, z0: cz - 26, x1: cx + 26, z1: cz + 26 }, 26, { gap: 0.25, respawn: true });
    });
    // fill gaps with medium stuff and more buildings
    ctx.scatter([['house', 3], ['shopbuilding', 3], ['apartment', 2], ['office', 1], ['skyscraper', 1]], { x0: -86, z0: -86, x1: 86, z1: 86 }, 40, { gap: 1.5 });
    ctx.scatter([['tree', 2], ['busshelter', 1], ['kiosk', 1], ['newsstand', 1], ['phonebooth', 1], ['sculpture', 1], ['billboard', 1], ['icecreamvan', 1]], { x0: -86, z0: -86, x1: 86, z1: 86 }, 60, { gap: 1 });
    ctx.scatter([['motorcycle', 2], ['vespa', 2], ['lamppost', 2], ['streetsign', 2], ['trafficlight', 1], ['bench', 2], ['bicycle', 2], ['hydrant', 2], ['trashbin', 2]], { x0: -86, z0: -86, x1: 86, z1: 86 }, 140, { gap: 0.5 });
    ctx.scatter(cityLitter, { x0: -86, z0: -86, x1: 86, z1: 86 }, 200, { gap: 0.25, respawn: true });
    laneSet(ctx, xs, zs, 140, ['car', 'suv', 'van', 'bus', 'taxi', 'hatchback', 'pickup', 'bus'], 8);
    ctx.coins([[-34, -40], [34, -40]], 16);
    ctx.coins([[-40, 34], [-40, -34]], 16);
    ctx.place('pw_surge', 40, 40, { force: true, rot: 0 });
    ctx.place('pw_magnet', -40, 40, { force: true, rot: 0 });
    ctx.place('pw_time', 40, -40, { force: true, rot: 0 });
    ctx.place('pw_multi', -42, -42, { force: true, rot: 0 });
    ctx.place('pw_time', 0, -45, { force: true, rot: 0 });
    ctx.place('pw_multi', 70, 70, { force: true, rot: 0 });
    ctx.place('secret_duck', -87.3, 87.3, { force: true, rot: 2 });
    skyline(ctx, 4, { minF: 10, maxF: 20, rows: 2, tall: true, colors: ['#e9edf5', '#c9b79c', '#9fb7c9', '#d9d2c4', '#e6c3a0'] });
  },
};
