import { level01 } from './level01';
import { level02, level03, level04, level05 } from './level02_05';
import { level06, level07, level08, level09, level10 } from './level06_10';
import type { LevelDef } from './types';
import { THEMES } from './common';

export const LEVELS: LevelDef[] = [level01, level02, level03, level04, level05, level06, level07, level08, level09, level10];

export function getLevel(id: number): LevelDef {
  return LEVELS[Math.max(0, Math.min(LEVELS.length - 1, id - 1))];
}

/** Small animated diorama shown behind the main menu. */
export const MENU_LEVEL: LevelDef = {
  ...level04,
  id: 0,
  name: 'Menu',
  duration: 9999,
  startTier: 4,
  maxTier: 8,
  growth: 0.6,
  theme: { ...THEMES.traffic, music: 'menu' },
};
