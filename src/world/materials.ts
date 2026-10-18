import * as THREE from 'three';

/**
 * Shared uniforms describing the hole. Every ground-layer material cuts a
 * circular opening at the hole position, and every prop material darkens
 * when it sinks below ground level, so swallowed objects really disappear
 * into the void instead of simply fading out.
 */
export const holeUniforms = {
  uHolePos: { value: new THREE.Vector2(0, 0) },
  uHoleR: { value: 0.5 },
  uTime: { value: 0 },
  uHoleTint: { value: new THREE.Color('#8a5cff') },
  uPulse: { value: 0 },
};

const GROUND_VERT_PARS = /* glsl */ `
varying vec3 vWPos;
`;
const GROUND_VERT_MAIN = /* glsl */ `
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
`;

const NOISE = /* glsl */ `
float vHash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float vNoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  float a = vHash(i), b = vHash(i+vec2(1.0,0.0)), c = vHash(i+vec2(0.0,1.0)), d = vHash(i+vec2(1.0,1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
}
`;

const GROUND_FRAG_PARS = /* glsl */ `
varying vec3 vWPos;
uniform vec2 uHolePos;
uniform float uHoleR;
uniform float uTime;
uniform vec3 uHoleTint;
uniform float uPulse;
uniform vec2 uMapSize;
uniform vec2 uMapMin;
uniform float uDetail;
${NOISE}
`;

const GROUND_MAP_FRAG = /* glsl */ `
vec2 hRel = vWPos.xz - uHolePos;
float hD = length(hRel);
// anti-aliased rim: fractional coverage over ~1px instead of a hard discard edge
float hPx = max(fwidth(hD), 1e-4);
float hCov = clamp((hD - uHoleR) / hPx + 0.5, 0.0, 1.0);
if (hCov <= 0.0) discard;
float hBand = uHoleR * 0.85 + 0.3;
float hT = clamp((hD - uHoleR) / hBand, 0.0, 1.0);
float hInv = 1.0 - hT;
vec2 hDir = hD > 1e-4 ? hRel / hD : vec2(0.0);
#ifdef USE_MAP
  // world-space mapping; a gentle gravitational lens pulls the ground towards the hole
  float lens = hInv * hInv * hInv * (uHoleR * 0.16 + 0.02);
  vec2 wp = vWPos.xz + hDir * lens;
  vec2 uvW = vec2((wp.x - uMapMin.x) / uMapSize.x, 1.0 - (wp.y - uMapMin.y) / uMapSize.y);
  vec4 sampledDiffuseColor = texture2D( map, uvW );
  diffuseColor *= sampledDiffuseColor;
#endif
float nA = vNoise(vWPos.xz * 2.7);
float nB = vNoise(vWPos.xz * 0.35);
diffuseColor.rgb *= 1.0 + ((nA - 0.5) * 0.05 + (nB - 0.5) * 0.07) * uDetail;
float hAO = mix(0.3, 1.0, smoothstep(0.0, 1.0, hT));
diffuseColor.rgb *= hAO;
float wl = 0.32 + uHoleR * 0.42;
float ripple = sin((hD - uTime * (0.6 + uHoleR * 0.5)) * 6.2831 / wl);
diffuseColor.rgb += uHoleTint * (pow(hInv, 4.0) * (0.2 + uPulse * 0.5) + max(ripple, 0.0) * hInv * hInv * 0.06);
diffuseColor.a = hCov;
`;

function patchGround(mat: THREE.MeshStandardMaterial, mapMin: THREE.Vector2, mapSize: THREE.Vector2, detail = 1) {
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, holeUniforms, {
      uMapSize: { value: mapSize },
      uMapMin: { value: mapMin },
      uDetail: { value: detail },
    });
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${GROUND_VERT_PARS}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>\n${GROUND_VERT_MAIN}`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${GROUND_FRAG_PARS}`)
      .replace('#include <map_fragment>', GROUND_MAP_FRAG);
  };
  mat.customProgramCacheKey = () => 'void-ground-' + (mat.map ? 'm' : 'n');
}

/** Ground material with the hole cut-out, lensing and ripples. */
export function createGroundMaterial(map: THREE.Texture | null, mapMin: THREE.Vector2, mapSize: THREE.Vector2, color = '#ffffff') {
  const mat = new THREE.MeshStandardMaterial({
    map: map ?? undefined,
    color,
    roughness: 0.92,
    metalness: 0.0,
    alphaToCoverage: true,
  });
  patchGround(mat, mapMin, mapSize);
  return mat;
}

const PROP_FRAG_PARS = /* glsl */ `
varying vec3 vWPos;
uniform float uHoleR;
uniform vec3 uHoleTint;
`;
const PROP_FRAG_DARKEN = /* glsl */ `
float below = clamp(-vWPos.y / (0.25 + uHoleR * 1.3), 0.0, 1.0);
gl_FragColor.rgb = mix(gl_FragColor.rgb, uHoleTint * 0.06, below * 0.94);
#include <fog_fragment>
`;

function patchProp(mat: THREE.Material, key: string) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uHoleR = holeUniforms.uHoleR;
    shader.uniforms.uHoleTint = holeUniforms.uHoleTint;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${GROUND_VERT_PARS}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>\n`)
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>\n#ifdef USE_INSTANCING\nvWPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;\n#else\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;\n#endif\n`,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${PROP_FRAG_PARS}`)
      .replace('#include <fog_fragment>', PROP_FRAG_DARKEN);
  };
  mat.customProgramCacheKey = () => key;
}

export interface PropMaterials {
  standard: THREE.MeshStandardMaterial;
  emissive: THREE.MeshBasicMaterial;
  list: THREE.Material[];
}

let propMats: PropMaterials | null = null;

/** Shared materials used by every procedural model (vertex coloured). */
export function getPropMaterials(): PropMaterials {
  if (propMats) return propMats;
  const standard = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.7,
    metalness: 0.04,
  });
  patchProp(standard, 'void-prop-std');
  const emissive = new THREE.MeshBasicMaterial({ vertexColors: true });
  patchProp(emissive, 'void-prop-emi');
  propMats = { standard, emissive, list: [standard, emissive] };
  return propMats;
}

/** Soft round sprite texture used by particles. */
let spriteTex: THREE.Texture | null = null;
export function getGlowSprite(): THREE.Texture {
  if (spriteTex) return spriteTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,255,255,0.85)');
  grd.addColorStop(0.6, 'rgba(255,255,255,0.18)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  spriteTex = new THREE.CanvasTexture(c);
  return spriteTex;
}
