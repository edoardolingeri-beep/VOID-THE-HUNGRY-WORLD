import * as THREE from 'three';
import type { LevelContext } from '../LevelContext';
import type { Theme } from './types';

export const THEMES = {
  sunnyPark: {
    sky: '#bfe6ff', fog: '#d4ecff', sunColor: '#fff3dc', sunIntensity: 2.7, sunDir: [0.45, 1, 0.55],
    hemiSky: '#dff1ff', hemiGround: '#7c9a5c', hemiIntensity: 1.25, exposure: 1.0,
    bloom: { strength: 0.14, radius: 0.3, threshold: 1.0 }, holeTint: '#8a5cff', music: 'park', accent: '#7ee07a', accent2: '#3de8ff',
  },
  street: {
    sky: '#c8e4ff', fog: '#dbe9f5', sunColor: '#fff0d6', sunIntensity: 2.6, sunDir: [-0.5, 1, 0.45],
    hemiSky: '#e3f0ff', hemiGround: '#8a8478', hemiIntensity: 1.2, exposure: 1.0,
    bloom: { strength: 0.14, radius: 0.3, threshold: 1.0 }, holeTint: '#7b5cff', music: 'street', accent: '#ffb347', accent2: '#ff5a5f',
  },
  park: {
    sky: '#b9e2ff', fog: '#cfe9f7', sunColor: '#fff1d2', sunIntensity: 2.7, sunDir: [0.6, 1, 0.3],
    hemiSky: '#e0f2ff', hemiGround: '#6f9a55', hemiIntensity: 1.2, exposure: 1.0,
    bloom: { strength: 0.14, radius: 0.3, threshold: 1.0 }, holeTint: '#9b5cff', music: 'park', accent: '#4cd07d', accent2: '#ffd23f',
  },
  traffic: {
    sky: '#cfe0f2', fog: '#d9e2ec', sunColor: '#ffeccc', sunIntensity: 2.5, sunDir: [0.4, 1, -0.5],
    hemiSky: '#e6eefc', hemiGround: '#7d7a72', hemiIntensity: 1.2, exposure: 1.0,
    bloom: { strength: 0.18, radius: 0.3, threshold: 1.0 }, holeTint: '#5c7bff', music: 'traffic', accent: '#ff8a2a', accent2: '#ffd23f',
  },
  shopping: {
    sky: '#ffe1c7', fog: '#ffe6d2', sunColor: '#ffe2bd', sunIntensity: 2.6, sunDir: [0.7, 0.9, 0.4],
    hemiSky: '#fff0e0', hemiGround: '#9a7f78', hemiIntensity: 1.2, exposure: 1.0,
    bloom: { strength: 0.2, radius: 0.32, threshold: 1.0 }, holeTint: '#c85cff', music: 'shopping', accent: '#ff7eb6', accent2: '#ffc94a',
  },
  downtown: {
    sky: '#b8d4f0', fog: '#c9d8e8', sunColor: '#fff0dc', sunIntensity: 2.6, sunDir: [-0.4, 1, 0.6],
    hemiSky: '#dce9ff', hemiGround: '#6f7480', hemiIntensity: 1.25, exposure: 1.0,
    bloom: { strength: 0.2, radius: 0.32, threshold: 1.0 }, holeTint: '#6c5cff', music: 'downtown', accent: '#3de8ff', accent2: '#7b5cff',
  },
  industrial: {
    sky: '#d8d2c8', fog: '#d6cfc4', sunColor: '#ffd9a8', sunIntensity: 2.5, sunDir: [0.7, 0.85, 0.35],
    hemiSky: '#e8e2d8', hemiGround: '#5d6470', hemiIntensity: 1.15, exposure: 1.0,
    bloom: { strength: 0.2, radius: 0.32, threshold: 1.0 }, holeTint: '#ff8a2a', music: 'industrial', accent: '#ff8a2a', accent2: '#ffd23f',
  },
  beach: {
    sky: '#a8e4ff', fog: '#c6efff', sunColor: '#fff6e2', sunIntensity: 3.0, sunDir: [0.3, 1, 0.6],
    hemiSky: '#e6f8ff', hemiGround: '#d8c08a', hemiIntensity: 1.3, exposure: 1.02,
    bloom: { strength: 0.14, radius: 0.3, threshold: 1.0 }, holeTint: '#5c6bff', music: 'beach', accent: '#22c3b5', accent2: '#ffd23f',
  },
  neon: {
    sky: '#0a0720', fog: '#170c38', sunColor: '#a3adff', sunIntensity: 1.3, sunDir: [-0.4, 1, 0.5],
    hemiSky: '#7a64d8', hemiGround: '#24143e', hemiIntensity: 1.4, exposure: 1.15,
    bloom: { strength: 0.7, radius: 0.55, threshold: 0.72 }, holeTint: '#c04dff', night: true, music: 'neon', fogNear: 1.3, fogFar: 3.6,
    accent: '#ff3d9a', accent2: '#3de8ff',
  },
  finale: {
    sky: '#ffc8a0', fog: '#f7c8a8', sunColor: '#ffcf96', sunIntensity: 2.9, sunDir: [0.8, 0.75, 0.45],
    hemiSky: '#ffe0c8', hemiGround: '#6a5a78', hemiIntensity: 1.15, exposure: 1.0,
    bloom: { strength: 0.26, radius: 0.35, threshold: 0.96 }, holeTint: '#ff3d9a', music: 'finale', accent: '#ffc94a', accent2: '#ff3d9a',
  },
  fair: {
    sky: '#ffb08f', fog: '#f2a698', sunColor: '#ffb27a', sunIntensity: 2.4, sunDir: [-0.9, 0.6, 0.35],
    hemiSky: '#ffd0c2', hemiGround: '#5d4a7a', hemiIntensity: 1.2, exposure: 1.0,
    bloom: { strength: 0.32, radius: 0.4, threshold: 0.95 }, holeTint: '#ff3d9a', music: 'fair', accent: '#ff3d6e', accent2: '#ffc94a',
  },
  sky: {
    sky: '#b6dcff', fog: '#cfe6fb', sunColor: '#fff4e2', sunIntensity: 2.8, sunDir: [0.3, 1, 0.7],
    hemiSky: '#e6f2ff', hemiGround: '#7f8a72', hemiIntensity: 1.25, exposure: 1.0,
    bloom: { strength: 0.16, radius: 0.3, threshold: 1.0 }, holeTint: '#3d6bff', music: 'sky', accent: '#3db8ff', accent2: '#e9edf5',
  },
} satisfies Record<string, Theme>;

export const C = {
  grass: '#7cc45c',
  grassDark: '#6bb64e',
  grassLight: '#8fd06a',
  path: '#e8d4a6',
  pathEdge: '#d7bf8b',
  asphalt: '#4b4e58',
  sidewalk: '#d8d3c8',
  sidewalkGrout: '#bfb9ad',
  curb: '#a9a59c',
  plaza: '#e7e0d1',
  plazaB: '#ddd5c4',
  sand: '#efd9a3',
  soil: '#7a5a3c',
  water: '#4fb8e8',
};

/** Grass base with natural variation. */
export function paintGrass(ctx: LevelContext, x0: number, z0: number, x1: number, z1: number, base = C.grass) {
  const p = ctx.painter;
  p.rect(x0, z0, x1, z1, base);
  p.stripes(x0, z0, x1, z1, 'rgba(255,255,255,0.045)', 2.4, 'x');
  p.blotches(x0, z0, x1, z1, ['rgba(60,120,40,0.18)', 'rgba(170,220,110,0.16)'], Math.floor(((x1 - x0) * (z1 - z0)) / 40), 1.5, 5);
  p.speckle(x0, z0, x1, z1, ['rgba(40,100,30,0.35)', 'rgba(200,240,150,0.3)'], 0.9, 0.06);
}

/** Paved sidewalk band. */
export function paintSidewalk(ctx: LevelContext, x0: number, z0: number, x1: number, z1: number, tile = 1.2) {
  const p = ctx.painter;
  p.tiles(x0, z0, x1, z1, tile, C.sidewalk, null, C.sidewalkGrout, 0.05);
  p.speckle(x0, z0, x1, z1, ['rgba(0,0,0,0.05)'], 0.3, 0.08);
}

/** Row of background buildings facing the play area along a line. */
export function buildingRow(
  ctx: LevelContext, x0: number, x1: number, z: number, facing: 'north' | 'south' | 'east' | 'west',
  o: { minF?: number; maxF?: number; depth?: number; shops?: boolean; colors?: string[]; gap?: number; tall?: boolean } = {},
) {
  const r = ctx.rng;
  const minF = o.minF ?? 2, maxF = o.maxF ?? 5;
  const depth = o.depth ?? 9;
  const rot = facing === 'south' ? 0 : facing === 'north' ? Math.PI : facing === 'east' ? Math.PI / 2 : -Math.PI / 2;
  const awnings = ['#e8423f', '#3fbf6a', '#3d7bf0', '#ff8a2a', '#8b5cf6', '#ff7eb6'];
  let a = Math.min(x0, x1);
  const end = Math.max(x0, x1);
  while (a < end - 3) {
    const w = r.range(7, 12);
    const c = a + w / 2;
    const floors = r.int(minF, maxF);
    const color = o.colors ? r.pick(o.colors) : undefined;
    const shop = o.shops && r.chance(0.8) ? { awning: r.pick(awnings), sign: r.pick(awnings) } : null;
    const off = depth / 2;
    if (facing === 'south' || facing === 'north') {
      const zz = facing === 'south' ? z - off : z + off;
      ctx.building(c, zz, rot, { w: w - (o.gap ?? 0.3), d: depth, floors, color, shop, glassTower: o.tall && r.chance(0.5), roof: r.pick(['flat', 'flat', 'garden', 'antenna']) as 'flat' });
    } else {
      const xx = facing === 'east' ? z - off : z + off;
      ctx.building(xx, c, rot, { w: w - (o.gap ?? 0.3), d: depth, floors, color, shop, glassTower: o.tall && r.chance(0.5), roof: r.pick(['flat', 'flat', 'garden', 'antenna']) as 'flat' });
    }
    a += w;
  }
}

/** Ring of skyline buildings around the play area. */
export function skyline(ctx: LevelContext, gap: number, o: { minF?: number; maxF?: number; rows?: number; tall?: boolean; shops?: boolean; colors?: string[] } = {}) {
  const b = ctx.bounds;
  const rows = o.rows ?? 2;
  for (let k = 0; k < rows; k++) {
    const g = gap + k * 13;
    const f = { ...o, minF: (o.minF ?? 3) + k * 3, maxF: (o.maxF ?? 7) + k * 5, shops: k === 0 && o.shops };
    buildingRow(ctx, b.minX - g, b.maxX + g, b.minZ - g, 'south', f);
    buildingRow(ctx, b.minX - g, b.maxX + g, b.maxZ + g, 'north', f);
    buildingRow(ctx, b.minZ - g + 12, b.maxZ + g - 12, b.minX - g, 'east', f);
    buildingRow(ctx, b.minZ - g + 12, b.maxZ + g - 12, b.maxX + g, 'west', f);
  }
}

/** Animated water plane for coasts and ponds. */
export function waterPlane(x: number, z: number, w: number, h: number, deep = '#1f8fd0', shallow = '#5fd6f0'): THREE.Mesh {
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uDeep: { value: new THREE.Color(deep) }, uShallow: { value: new THREE.Color(shallow) } },
    vertexShader: /* glsl */ `
      varying vec3 vW; uniform float uTime;
      void main(){ vec4 w = modelMatrix * vec4(position,1.0); w.y += sin(w.x*0.35+uTime*1.3)*0.05 + cos(w.z*0.4+uTime)*0.05; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,
    fragmentShader: /* glsl */ `
      varying vec3 vW; uniform float uTime; uniform vec3 uDeep; uniform vec3 uShallow;
      void main(){
        float w1 = sin(vW.x*0.6 + vW.z*0.3 + uTime*1.4)*0.5+0.5;
        float w2 = sin(vW.x*-0.4 + vW.z*0.9 + uTime*1.1)*0.5+0.5;
        float sp = smoothstep(0.92, 1.0, w1*w2);
        vec3 c = mix(uDeep, uShallow, 0.35 + 0.3*w1*w2);
        c += vec3(1.0)*sp*0.35;
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const g = new THREE.PlaneGeometry(w, h, 40, 20);
  g.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(g, mat);
  m.position.set(x, -0.08, z);
  m.onBeforeRender = () => {
    mat.uniforms.uTime.value = performance.now() / 1000;
  };
  return m;
}
