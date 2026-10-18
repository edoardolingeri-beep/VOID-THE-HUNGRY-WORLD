import type { Quality } from '../engine/Engine';

export interface LevelRecord {
  completed: boolean;
  stars: number;
  best: number;
  bestSize: number;
  plays: number;
}

export interface Settings {
  music: number;
  sfx: number;
  muted: boolean;
  quality: Quality;
  shake: boolean;
  mouseSteer: boolean;
  showFps: boolean;
  autoPause: boolean;
}

export interface SaveData {
  version: number;
  unlocked: number;
  levels: Record<number, LevelRecord>;
  collection: Record<string, number>;
  secrets: Record<number, boolean>;
  settings: Settings;
  totalEaten: number;
  seenTutorial: boolean;
}

const KEY = 'void-hungry-world-save-v1';

function defaultQuality(): Quality {
  const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const small = Math.min(window.innerWidth, window.innerHeight) < 600;
  return touch && small ? 'low' : touch ? 'medium' : 'high';
}

function defaults(): SaveData {
  return {
    version: 1,
    unlocked: 1,
    levels: {},
    collection: {},
    secrets: {},
    settings: { music: 0.6, sfx: 0.8, muted: false, quality: defaultQuality(), shake: true, mouseSteer: true, showFps: false, autoPause: true },
    totalEaten: 0,
    seenTutorial: false,
  };
}

/** Local persistence of progress, records, collection and settings. */
export class SaveManager {
  data: SaveData;
  private storageOk = true;

  constructor() {
    this.data = defaults();
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<SaveData>;
        const d = defaults();
        this.data = {
          ...d,
          ...parsed,
          settings: { ...d.settings, ...(parsed.settings ?? {}) },
          levels: parsed.levels ?? {},
          collection: parsed.collection ?? {},
          secrets: parsed.secrets ?? {},
        };
      }
    } catch {
      this.storageOk = false;
    }
  }

  save() {
    if (!this.storageOk) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(this.data));
    } catch {
      this.storageOk = false;
    }
  }

  level(id: number): LevelRecord {
    return this.data.levels[id] ?? { completed: false, stars: 0, best: 0, bestSize: 0, plays: 0 };
  }

  isUnlocked(id: number) {
    return id <= this.data.unlocked;
  }

  /** Records a finished run. Returns whether it is a new best. */
  recordRun(id: number, score: number, stars: number, completed: boolean, size: number, total: number) {
    const r = { ...this.level(id) };
    const newBest = score > r.best;
    r.plays++;
    r.best = Math.max(r.best, score);
    r.bestSize = Math.max(r.bestSize, size);
    if (completed) {
      r.completed = true;
      r.stars = Math.max(r.stars, stars);
      if (id + 1 > this.data.unlocked && id < total) this.data.unlocked = id + 1;
    }
    this.data.levels[id] = r;
    this.save();
    return newBest;
  }

  addToCollection(counts: Record<string, number>) {
    for (const [k, v] of Object.entries(counts)) {
      this.data.collection[k] = (this.data.collection[k] ?? 0) + v;
      this.data.totalEaten += v;
    }
    this.save();
  }

  totalStars() {
    return Object.values(this.data.levels).reduce((s, l) => s + (l.stars || 0), 0);
  }

  reset() {
    const settings = this.data.settings;
    this.data = defaults();
    this.data.settings = settings;
    this.save();
  }
}

export const saves = new SaveManager();
