import type { LevelDef } from './types';
import { THEMES, C, paintGrass } from './common';
import type { Pt } from '../GroundPainter';

const tiny: [string, number][] = [
  ['can', 3], ['apple', 3], ['ball', 2], ['cup', 3], ['bottle', 1], ['flowers', 3], ['frisbee', 1], ['soccerball', 1], ['sandwich', 1],
];

export const level01: LevelDef = {
  id: 1,
  name: 'The First Bite',
  setting: 'Sunny City Park',
  description: 'A quiet little park. Learn to move, swallow and grow.',
  duration: 45,
  objectives: [{ kind: 'count', target: 20, label: 'Swallow objects' }],
  stars: [1750, 3500],
  startTier: 0,
  maxTier: 5,
  growth: 1.15,
  w: 34,
  h: 34,
  margin: 26,
  theme: THEMES.sunnyPark,
  difficulty: 1,
  seed: 101,
  start: [2, 8],
  tutorial: true,
  hero: ['apple', 'duck', 'ball'],
  build(ctx) {
    const p = ctx.painter;
    const e = ctx.ext;
    paintGrass(ctx, e.minX, e.minZ, e.maxX, e.maxZ);
    // pond outside the play area
    p.circle(-30, -26, 9, '#3f9fd0').circle(-30, -26, 7.8, '#5fc2ea').ring(-30, -26, 9, 0.6, '#d7c48f');
    // looping path
    const loop: Pt[] = [[-14, -9], [-6, -13], [6, -11], [13.5, -3], [11, 9], [0, 13.5], [-11, 10.5], [-15, 0], [-14, -9]];
    p.path(loop, 2.7, C.pathEdge, { smooth: true });
    p.path(loop, 2.3, C.path, { smooth: true });
    p.path([[-15, 0], [-6, 0], [0, 0], [6, -2], [13.5, -3]], 2.0, C.pathEdge, { smooth: true });
    p.path([[-15, 0], [-6, 0], [0, 0], [6, -2], [13.5, -3]], 1.6, C.path, { smooth: true });
    p.speckle(-17, -17, 17, 17, ['rgba(120,90,50,0.08)'], 0.2, 0.05);
    // outer path ring beyond the bounds
    p.path([[-20, -20], [20, -20], [20, 20], [-20, 20], [-20, -20]], 2.5, C.path);
    // sandbox
    p.circle(0, 0, 4.2, '#a8754a').circle(0, 0, 3.8, '#f0dca6');
    p.speckle(-3.8, -3.8, 3.8, 3.8, ['rgba(160,120,60,0.25)'], 2, 0.05);
    ctx.block({ cx: 0, cz: 0, r: 0.3 });
    // picnic blankets
    const blankets: [number, number, string][] = [[-8, -5, '#e8423f'], [7.5, 4.5, '#3d7bf0'], [-5, 7.5, '#ff8a2a'], [8, -7, '#3fbf6a']];
    for (const [x, z, c] of blankets) {
      p.rect(x - 1.6, z - 1.2, x + 1.6, z + 1.2, '#ffffff');
      for (let i = 0; i < 8; i++) for (let j = 0; j < 6; j++) if ((i + j) % 2 === 0) p.rect(x - 1.6 + i * 0.4, z - 1.2 + j * 0.4, x - 1.2 + i * 0.4, z - 0.8 + j * 0.4, c);
      ctx.cluster([['apple', 3], ['sandwich', 2], ['cup', 2], ['can', 2], ['bottle', 1]], x, z, 1.3, 9, 0.02);
      ctx.place('basket', x + 1.9, z - 0.4, { gap: 0.05 });
    }
    // flower beds
    for (const [x, z] of [[-11, -13], [11, 12], [-13, 7], [13, -11], [4, -14], [-3, 14]] as Pt[]) {
      p.circle(x, z, 1.6, C.soil).circle(x, z, 1.35, '#6b4e33');
      ctx.cluster('flowers', x, z, 1.3, 6, 0.02);
      ctx.place('flowerpot', x + 1.9, z, { gap: 0.05 });
    }
    // sandbox toys
    ctx.cluster([['toyblocks', 2], ['duck', 2], ['toycar', 2], ['ball', 2], ['teddy', 1], ['bucket', 2]], 0, 0, 3.4, 12, 0.05);
    // benches and bins along the path
    const benches: [number, number, number][] = [[-9, -11.8, 0.4], [9.5, -8.3, -0.7], [12.5, 5, 1.5], [4, 12.4, 0.2], [-13, 4.2, 1.6], [-4, -1.4, 0]];
    for (const [x, z, r] of benches) {
      ctx.place('bench', x, z, { rot: r, gap: 0.2 });
      ctx.place('litterbasket', x + Math.cos(r) * 1.3, z - Math.sin(r) * 1.3, { gap: 0.05 });
    }
    ctx.scatter([['bush', 3], ['smalltree', 1]], { x0: -17, z0: -17, x1: 17, z1: 17 }, 10, { gap: 0.6 });
    ctx.scatter([['gnome', 1], ['kite', 1], ['skateboard', 1], ['vase', 1], ['flowerpot', 1], ['teddy', 1]], { x0: -16, z0: -16, x1: 16, z1: 16 }, 12, { gap: 0.3 });
    ctx.scatter(tiny, { x0: -16.5, z0: -16.5, x1: 16.5, z1: 16.5 }, 80, { gap: 0.25, respawn: true });
    ctx.scatter(tiny, { path: loop, w: 2 }, 24, { gap: 0.2, respawn: true });
    ctx.coins([[-6, -12.6], [0, -12.4], [6, -10.6], [10.5, -6.5]], 8);
    ctx.place('pw_multi', 9, 1.5, { force: true, rot: 0 });
    ctx.place('pw_time', -10, -2.5, { force: true, rot: 0 });
    ctx.place('secret_duck', 16, 16, { force: true, rot: 2.3 });
    // border decoration
    ctx.treeBorder(5.5, 3, ['round', 'blossom', 'tall', 'pine']);
    const b = ctx.bounds;
    ctx.raw(0, 0, (m) => {
      for (let x = b.minX - 0.5; x <= b.maxX + 0.5; x += 2.2) {
        m.boxB(0.12, 0.7, 0.12, '#f4f1ea', x, 0, b.minZ - 0.6);
        m.boxB(0.12, 0.7, 0.12, '#f4f1ea', x, 0, b.maxZ + 0.6);
      }
      for (let z = b.minZ - 0.5; z <= b.maxZ + 0.5; z += 2.2) {
        m.boxB(0.12, 0.7, 0.12, '#f4f1ea', b.minX - 0.6, 0, z);
        m.boxB(0.12, 0.7, 0.12, '#f4f1ea', b.maxX + 0.6, 0, z);
      }
      for (const z of [b.minZ - 0.6, b.maxZ + 0.6]) {
        m.box(b.maxX - b.minX + 1.2, 0.08, 0.06, '#f4f1ea', 0, 0.55, z);
        m.box(b.maxX - b.minX + 1.2, 0.08, 0.06, '#f4f1ea', 0, 0.3, z);
      }
      for (const x of [b.minX - 0.6, b.maxX + 0.6]) {
        m.box(0.06, 0.08, b.maxZ - b.minZ + 1.2, '#f4f1ea', x, 0.55, 0);
        m.box(0.06, 0.08, b.maxZ - b.minZ + 1.2, '#f4f1ea', x, 0.3, 0);
      }
    });
    for (let i = 0; i < 10; i++) ctx.deco('bush', b.minX - 1.8, b.minZ + 2 + i * 3.2, 0);
    ctx.deco('fountain', -30, 0, 0, 0, 0.9);
    ctx.deco('swing', 24, -6, 0.4);
    ctx.deco('slide', 25, 6, -0.6);
  },
};
