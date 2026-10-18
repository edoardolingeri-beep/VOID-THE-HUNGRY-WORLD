import type { BloomSettings } from '../../engine/Engine';
import type { PropTag } from '../props/types';
import type { LevelContext } from '../LevelContext';

export type MusicTheme = 'menu' | 'park' | 'street' | 'traffic' | 'shopping' | 'downtown' | 'industrial' | 'beach' | 'neon' | 'finale';

export interface Objective {
  kind: 'count' | 'score' | 'tag';
  target: number;
  tag?: PropTag | PropTag[];
  label: string;
}

export interface Theme {
  sky: string;
  fog: string;
  fogNear?: number;
  fogFar?: number;
  sunColor: string;
  sunIntensity: number;
  sunDir: [number, number, number];
  hemiSky: string;
  hemiGround: string;
  hemiIntensity: number;
  exposure: number;
  bloom: BloomSettings;
  holeTint: string;
  night?: boolean;
  music: MusicTheme;
  /** CSS accent colour for the level card. */
  accent: string;
  accent2: string;
}

export interface LevelDef {
  id: number;
  name: string;
  setting: string;
  description: string;
  duration: number;
  objectives: Objective[];
  /** Total score (incl. speed bonus) needed for 2 and 3 stars. */
  stars: [number, number];
  startTier: number;
  maxTier: number;
  /** Growth speed multiplier (higher = faster growth). */
  growth: number;
  /** Play area size (centred on origin). */
  w: number;
  h: number;
  margin: number;
  theme: Theme;
  difficulty: number;
  seed: number;
  tutorial?: boolean;
  /** Prop ids displayed on the level card. */
  hero: string[];
  build: (ctx: LevelContext) => void;
  /** Prop id whose swallowing triggers the grand finale. */
  finaleProp?: string;
  /** Preferred hole start position. */
  start?: [number, number];
}
