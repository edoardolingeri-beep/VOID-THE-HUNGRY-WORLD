import type { ModelBuilder } from '../ModelBuilder';
import type { RNG } from '../../engine/utils';

export type PropTag =
  | 'small'
  | 'medium'
  | 'commercial'
  | 'industrial'
  | 'vehicle'
  | 'special'
  | 'landmark'
  | 'building'
  | 'secret'
  | 'chain'
  | 'nature'
  | 'ride'
  | 'aircraft';

export type SoundKind = 'soft' | 'wood' | 'metal' | 'glass' | 'heavy' | 'tech' | 'plastic' | 'organic';

export type IdleAnim = 'none' | 'bob' | 'spin' | 'robot' | 'hover' | 'sway';

export type PowerUp = 'time' | 'magnet' | 'multiplier' | 'surge';

export interface PropDef {
  id: string;
  name: string;
  /** Points awarded when swallowed (before combo multiplier). */
  points: number;
  tags: PropTag[];
  build: (b: ModelBuilder, rng: RNG, variant: number) => void;
  /** Number of visual variants (colour/shape) — default 3. */
  variants?: number;
  /** Required hole radius override. Otherwise derived from geometry. */
  size?: number;
  /** How much height counts towards the required size (default 0.3). */
  heightFactor?: number;
  /** Growth multiplier (default 1). */
  mass?: number;
  sound?: SoundKind;
  idle?: IdleAnim;
  power?: PowerUp;
  /** Collision footprint shrink factor for the obstacle box (default 1). */
  solid?: number;
  /** Does not cast shadows (flat / tiny props). */
  noShadow?: boolean;
  /** Short text shown in the collection. */
  blurb?: string;
}

const registry = new Map<string, PropDef>();

export function defineProps(defs: PropDef[]) {
  for (const d of defs) registry.set(d.id, d);
}
export function getPropDef(id: string): PropDef {
  const d = registry.get(id);
  if (!d) throw new Error(`Unknown prop: ${id}`);
  return d;
}
export function allPropDefs(): PropDef[] {
  return [...registry.values()];
}

/** Colour palettes shared by many props. */
export const PAL = {
  metal: '#aeb4c2',
  darkMetal: '#4a4f5c',
  steel: '#7d8596',
  tire: '#23242b',
  glass: '#6fb8e8',
  darkGlass: '#2c3e5a',
  wood: '#a8754a',
  darkWood: '#6e4a2e',
  lightWood: '#d4a873',
  leaf: '#4caf50',
  leafDark: '#2f8a43',
  leafLight: '#7ccf5a',
  trunk: '#7a5236',
  concrete: '#bfc2c7',
  white: '#f4f4f0',
  black: '#26262c',
  red: '#e8423f',
  orange: '#ff8a2a',
  yellow: '#ffd23f',
  blue: '#3d7bf0',
  green: '#3fbf6a',
  pink: '#ff7eb6',
  purple: '#8b5cf6',
  teal: '#22c3b5',
  cream: '#f6e7c8',
  terracotta: '#c8653e',
  sand: '#e9cf98',
  carColors: ['#e8423f', '#3d7bf0', '#f4f4f0', '#ffd23f', '#2c2f3a', '#3fbf6a', '#ff8a2a', '#9aa3b5', '#8b5cf6', '#22c3b5'],
  bright: ['#e8423f', '#3d7bf0', '#ffd23f', '#3fbf6a', '#ff8a2a', '#ff7eb6', '#8b5cf6', '#22c3b5'],
};
