/** Hole radius for each size tier (metres). */
export const TIER_RADII = [
  0.3, 0.38, 0.48, 0.6, 0.75, 0.94, 1.18, 1.48, 1.85, 2.3, 2.85, 3.5, 4.3, 5.3, 6.5, 7.9, 9.5, 11.4, 13.5, 16,
];

/** Growth units needed per unit of radius² gained. */
const K = 7.5;

/**
 * Tiered growth: swallowed mass fills a bar; when it is full the hole steps
 * up to the next size. Within a tier the hole swells slightly so progress is
 * always visible.
 */
export class Growth {
  tier: number;
  progress = 0;
  total = 0;
  constructor(public startTier: number, public maxTier: number, public rate: number) {
    this.tier = startTier;
  }

  need(tier = this.tier) {
    const a = TIER_RADII[Math.min(tier, TIER_RADII.length - 1)];
    const b = TIER_RADII[Math.min(tier + 1, TIER_RADII.length - 1)];
    return Math.max(0.01, (b * b - a * a) * K);
  }

  get atMax() {
    return this.tier >= this.maxTier;
  }

  /** Adds mass; returns the number of tiers gained. */
  add(mass: number): number {
    const m = mass * this.rate;
    this.total += m;
    if (this.atMax) {
      this.progress = Math.min(1, this.progress + m / this.need());
      return 0;
    }
    let gained = 0;
    let amount = m;
    while (amount > 0 && !this.atMax) {
      const need = this.need();
      const room = (1 - this.progress) * need;
      if (amount >= room) {
        amount -= room;
        this.tier++;
        this.progress = 0;
        gained++;
      } else {
        this.progress += amount / need;
        amount = 0;
      }
    }
    if (this.atMax) this.progress = Math.min(1, this.progress);
    return gained;
  }

  /** Target radius including the in-tier swell. */
  get radius() {
    const a = TIER_RADII[this.tier];
    if (this.atMax) return a * (1 + this.progress * 0.06);
    const b = TIER_RADII[this.tier + 1];
    return a + (b - a) * this.progress * 0.3;
  }

  /** Display size level (1-based). */
  get level() {
    return this.tier + 1;
  }
}
