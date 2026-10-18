import * as THREE from 'three';
import { holeUniforms } from '../world/materials';

const WELL_VERT = /* glsl */ `
varying vec2 vUv;
varying float vDepth;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vDepth = -wp.y;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;
const WELL_FRAG = /* glsl */ `
uniform float uTime;
uniform float uHoleR;
uniform vec3 uHoleTint;
uniform float uPulse;
varying vec2 vUv;
varying float vDepth;
void main() {
  float t = clamp(vDepth / (uHoleR * 2.2 + 0.2), 0.0, 1.0);
  vec3 base = mix(uHoleTint * 0.20, vec3(0.0), pow(t, 0.42));
  float ang = vUv.x * 6.28318;
  float s = sin(ang * 9.0 + t * 14.0 - uTime * 2.6);
  float streak = smoothstep(0.72, 1.0, s) * pow(1.0 - t, 2.0) * 0.38;
  float lip = smoothstep(0.1, 0.0, t);
  vec3 col = base + uHoleTint * (streak + lip * (0.55 + uPulse * 1.2));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
const BOTTOM_FRAG = /* glsl */ `
uniform float uTime;
uniform vec3 uHoleTint;
varying vec2 vP;
void main() {
  float rr = length(vP);
  float a = atan(vP.y, vP.x);
  float sp = sin(a * 3.0 + rr * 14.0 - uTime * 3.2);
  vec3 col = uHoleTint * 0.12 * smoothstep(0.2, 1.0, sp) * (1.0 - rr);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
const RING_VERT = /* glsl */ `
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const RING_FRAG = /* glsl */ `
uniform float uTime;
uniform vec3 uHoleTint;
uniform float uPulse;
uniform float uEdge;
uniform float uGlowW;
varying vec2 vP;
void main() {
  float rr = length(vP);
  float a = atan(vP.y, vP.x);
  float edge = smoothstep(1.0 + uEdge, 1.0, rr) * smoothstep(0.992, 1.0, rr);
  float g = clamp(1.0 - (rr - 1.0) / uGlowW, 0.0, 1.0);
  float glow = pow(g, 2.6) * (0.30 + uPulse * 0.6);
  float dash = smoothstep(0.55, 1.0, sin(a * 28.0 - uTime * 2.4)) * smoothstep(1.0 + uEdge * 4.0, 1.0 + uEdge, rr) * smoothstep(1.0, 1.0 + uEdge, rr) * 0.45;
  vec3 hot = mix(uHoleTint, vec3(1.0), 0.6);
  vec3 col = hot * edge * (1.25 + uPulse * 1.5) + uHoleTint * (glow + dash);
  float alpha = clamp(edge + glow + dash, 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

/**
 * The visible hole: a deep well (open cylinder seen through the cut-out in
 * the ground), a swirling bottom, and a glowing rim with animated dashes.
 */
export class HoleVisual {
  readonly group = new THREE.Group();
  private well: THREE.Mesh;
  private bottom: THREE.Mesh;
  private ring: THREE.Mesh;
  private ringMat: THREE.ShaderMaterial;
  private shock: THREE.Mesh[] = [];
  private shockMat: THREE.ShaderMaterial[] = [];
  private shockT: number[] = [];

  constructor() {
    const wellGeo = new THREE.CylinderGeometry(1, 1, 1, 72, 1, true);
    wellGeo.translate(0, -0.5, 0);
    const wellMat = new THREE.ShaderMaterial({
      vertexShader: WELL_VERT,
      fragmentShader: WELL_FRAG,
      uniforms: holeUniforms,
      side: THREE.BackSide,
    });
    this.well = new THREE.Mesh(wellGeo, wellMat);
    this.well.renderOrder = -1;
    this.well.frustumCulled = false;

    const botGeo = new THREE.CircleGeometry(1, 48);
    botGeo.rotateX(-Math.PI / 2);
    const botMat = new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: BOTTOM_FRAG,
      uniforms: holeUniforms,
    });
    this.bottom = new THREE.Mesh(botGeo, botMat);
    this.bottom.frustumCulled = false;

    const ringGeo = new THREE.RingGeometry(0.99, 1.45, 128, 1);
    this.ringMat = new THREE.ShaderMaterial({
      vertexShader: RING_VERT,
      fragmentShader: RING_FRAG,
      uniforms: {
        ...holeUniforms,
        uEdge: { value: 0.05 },
        uGlowW: { value: 0.35 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -4,
    });
    this.ring = new THREE.Mesh(ringGeo, this.ringMat);
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.renderOrder = 2;
    this.ring.frustumCulled = false;

    // shockwave rings (growth pulse)
    for (let i = 0; i < 3; i++) {
      const m = new THREE.ShaderMaterial({
        vertexShader: RING_VERT,
        fragmentShader: /* glsl */ `
          uniform vec3 uHoleTint; uniform float uA; varying vec2 vP;
          void main(){ float rr = length(vP); float e = smoothstep(0.9,1.0,rr)*smoothstep(1.0,0.97,rr);
          gl_FragColor = vec4(mix(uHoleTint, vec3(1.0), 0.4) * e * uA, e * uA);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          }`,
        uniforms: { uHoleTint: holeUniforms.uHoleTint, uA: { value: 0 } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -4,
      });
      const s = new THREE.Mesh(new THREE.RingGeometry(0.85, 1.0, 96, 1), m);
      s.rotation.x = -Math.PI / 2;
      s.visible = false;
      s.renderOrder = 3;
      this.shock.push(s);
      this.shockMat.push(m);
      this.shockT.push(-1);
      this.group.add(s);
    }

    this.group.add(this.well, this.bottom, this.ring);
  }

  /** Emit an expanding shockwave ring on the ground. */
  shockwave() {
    const i = this.shockT.findIndex((t) => t < 0);
    const k = i >= 0 ? i : 0;
    this.shockT[k] = 0;
    this.shock[k].visible = true;
  }

  update(x: number, z: number, r: number, dt: number) {
    const depth = r * 2.2 + 0.2;
    this.well.position.set(x, 0, z);
    this.well.scale.set(r * 1.004, depth, r * 1.004);
    this.bottom.position.set(x, -depth + 0.001, z);
    this.bottom.scale.set(r * 1.01, 1, r * 1.01);
    this.ring.position.set(x, 0.01, z);
    this.ring.scale.set(r, r, r);
    // keep the bright edge a constant-ish width in world units
    this.ringMat.uniforms.uEdge.value = Math.min(0.08, 0.035 / r + 0.012);
    this.ringMat.uniforms.uGlowW.value = Math.min(0.42, 0.12 / r + 0.16);
    for (let i = 0; i < this.shock.length; i++) {
      if (this.shockT[i] < 0) continue;
      this.shockT[i] += dt;
      const t = this.shockT[i] / 0.9;
      if (t >= 1) {
        this.shockT[i] = -1;
        this.shock[i].visible = false;
        continue;
      }
      const s = r * (1.05 + t * 1.6);
      this.shock[i].position.set(x, 0.012, z);
      this.shock[i].scale.set(s, s, s);
      this.shockMat[i].uniforms.uA.value = (1 - t) * (1 - t) * 1.2;
    }
  }

  dispose() {
    this.group.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.geometry.dispose();
        (o.material as THREE.Material).dispose();
      }
    });
  }
}
