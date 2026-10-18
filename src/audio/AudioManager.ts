import { Music } from './Music';
import type { MusicTheme } from '../world/levels/types';
import type { SoundKind } from '../world/props/types';

const midi = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

/**
 * All game audio is synthesised with the Web Audio API — no external files.
 * The context is created lazily on the first user gesture (autoplay rules).
 */
export class AudioManager {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private musicGain!: GainNode;
  private sfxGain!: GainNode;
  private music: Music | null = null;
  private noise!: AudioBuffer;
  private pendingTheme: MusicTheme | null = null;
  private musicVol = 0.6;
  private sfxVol = 0.8;
  private muted = false;
  private recent: number[] = [];
  private suspendedByApp = false;

  constructor() {
    const unlock = () => {
      this.ensure();
      if (this.ctx && this.ctx.state === 'suspended' && !this.suspendedByApp) void this.ctx.resume();
    };
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('keydown', unlock);
    window.addEventListener('touchend', unlock, { passive: true });
  }

  private ensure() {
    if (this.ctx) return;
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.knee.value = 12;
    comp.ratio.value = 4;
    comp.attack.value = 0.004;
    comp.release.value = 0.2;
    comp.connect(ctx.destination);
    this.master = ctx.createGain();
    this.master.connect(comp);
    this.musicGain = ctx.createGain();
    this.sfxGain = ctx.createGain();
    this.musicGain.connect(this.master);
    this.sfxGain.connect(this.master);
    this.applyVolumes();
    const len = ctx.sampleRate;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.music = new Music(ctx, this.musicGain);
    if (this.pendingTheme) this.music.play(this.pendingTheme);
  }

  get ready() {
    return !!this.ctx;
  }

  setVolumes(music: number, sfx: number) {
    this.musicVol = music;
    this.sfxVol = sfx;
    this.applyVolumes();
  }
  setMuted(m: boolean) {
    this.muted = m;
    this.applyVolumes();
  }
  get isMuted() {
    return this.muted;
  }
  private applyVolumes() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(this.muted ? 0 : 1, t, 0.05);
    this.musicGain.gain.setTargetAtTime(this.musicVol * 0.55, t, 0.05);
    this.sfxGain.gain.setTargetAtTime(this.sfxVol * 0.9, t, 0.05);
  }

  /** Pause all audio (tab hidden). */
  suspend() {
    this.suspendedByApp = true;
    if (this.ctx && this.ctx.state === 'running') void this.ctx.suspend();
  }
  resume() {
    this.suspendedByApp = false;
    if (this.ctx && this.ctx.state === 'suspended') void this.ctx.resume();
  }

  playMusic(theme: MusicTheme) {
    this.pendingTheme = theme;
    this.music?.play(theme);
  }
  stopMusic() {
    this.pendingTheme = null;
    this.music?.stop();
  }
  setIntensity(v: number) {
    if (this.music) this.music.intensity = v;
  }

  // ------------------------------------------------------------ helpers
  private osc(type: OscillatorType, f0: number, f1: number, t: number, dur: number, vol: number, dest?: AudioNode) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + Math.min(0.012, dur * 0.2));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(dest ?? this.sfxGain);
    o.start(t);
    o.stop(t + dur + 0.02);
  }
  private noiseBurst(t: number, type: BiquadFilterType, freq: number, q: number, vol: number, dur: number, freqEnd?: number) {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(freqEnd, t + dur);
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(this.sfxGain);
    src.start(t, Math.random() * 0.6);
    src.stop(t + dur + 0.02);
  }
  private throttle(max: number) {
    const now = performance.now();
    this.recent = this.recent.filter((t) => now - t < 120);
    if (this.recent.length >= max) return false;
    this.recent.push(now);
    return true;
  }

  // ------------------------------------------------------------ sfx
  /** Swallow sound. rel = object size / hole radius (0..1), combo raises pitch. */
  gulp(kind: SoundKind, rel: number, combo: number, big: boolean) {
    if (!this.ctx || !this.throttle(big ? 10 : 6)) return;
    const t = this.ctx.currentTime + 0.005;
    const pitch = Math.pow(2, Math.min(combo, 14) / 24);
    const size = Math.min(1, Math.max(0, rel));
    const base = (520 - size * 380) * pitch;
    this.osc('sine', base * 1.6, base * 0.45, t, 0.16 + size * 0.2, 0.32);
    if (big || size > 0.6) {
      this.osc('sine', 110 * pitch, 38, t, 0.55, 0.45);
      this.noiseBurst(t, 'lowpass', 900, 0.7, 0.28, 0.5, 120);
    }
    switch (kind) {
      case 'metal':
        this.osc('square', 1400 * pitch, 900, t, 0.12, 0.04);
        this.noiseBurst(t, 'bandpass', 3200, 8, 0.08, 0.15);
        break;
      case 'glass':
        this.osc('sine', 2600 * pitch, 2400, t + 0.02, 0.18, 0.06);
        this.osc('sine', 3400 * pitch, 3300, t + 0.06, 0.15, 0.04);
        break;
      case 'wood':
        this.noiseBurst(t, 'bandpass', 700, 3, 0.18, 0.08);
        break;
      case 'soft':
        this.noiseBurst(t, 'lowpass', 1200, 0.5, 0.12, 0.12, 300);
        break;
      case 'tech':
        this.osc('square', 880 * pitch, 1760 * pitch, t, 0.08, 0.035);
        this.osc('square', 1320 * pitch, 2640 * pitch, t + 0.05, 0.08, 0.03);
        break;
      case 'plastic':
        this.osc('triangle', 700 * pitch, 300, t, 0.1, 0.12);
        break;
      case 'organic':
        this.noiseBurst(t, 'bandpass', 1500, 1.2, 0.08, 0.06);
        break;
      case 'heavy':
        this.osc('sawtooth', 70, 30, t, 0.8, 0.12);
        this.noiseBurst(t, 'lowpass', 400, 0.7, 0.4, 0.9, 60);
        break;
    }
  }

  growth(tier: number) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(110 + tier * 8, t);
    o.frequency.exponentialRampToValueAtTime(440 + tier * 30, t + 0.45);
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(300, t);
    f.frequency.exponentialRampToValueAtTime(4000, t + 0.45);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.14, t + 0.1);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
    o.connect(f);
    f.connect(g);
    g.connect(this.sfxGain);
    o.start(t);
    o.stop(t + 0.75);
    [0, 4, 7, 12].forEach((s, i) => this.osc('triangle', midi(72 + s + (tier % 5)), midi(72 + s + (tier % 5)), t + 0.3 + i * 0.05, 0.3, 0.07));
    this.osc('sine', 80, 40, t, 0.5, 0.3);
  }

  combo(level: number) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const notes = [0, 4, 7, 12, 16];
    const n = Math.min(notes.length, 2 + level);
    for (let i = 0; i < n; i++) this.osc('square', midi(76 + notes[i] + level * 2), midi(76 + notes[i] + level * 2), t + i * 0.055, 0.12, 0.05);
  }

  power() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 6; i++) this.osc('triangle', midi(79 + i * 3), midi(79 + i * 3 + 12), t + i * 0.04, 0.25, 0.06);
    this.noiseBurst(t, 'highpass', 6000, 0.6, 0.08, 0.6);
  }

  chain() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [72, 76, 79, 84, 88].forEach((n, i) => this.osc('sine', midi(n), midi(n), t + i * 0.06, 0.35, 0.09));
  }

  objective() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [60, 64, 67, 72].forEach((n) => this.osc('triangle', midi(n + 12), midi(n + 12), t, 1.0, 0.06));
    [72, 76, 79, 84].forEach((n, i) => this.osc('square', midi(n + 12), midi(n + 12), t + 0.12 * i, 0.2, 0.035));
  }

  tick(urgent: boolean) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.osc('square', urgent ? 1760 : 1320, urgent ? 1700 : 1300, t, 0.05, urgent ? 0.07 : 0.045);
  }

  win() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const seq = [60, 64, 67, 72, 76, 79, 84];
    seq.forEach((n, i) => this.osc('triangle', midi(n + 12), midi(n + 12), t + i * 0.08, 0.5, 0.08));
    [60, 64, 67].forEach((n) => this.osc('sawtooth', midi(n), midi(n), t + 0.6, 1.2, 0.03));
  }

  lose() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [67, 63, 60, 55].forEach((n, i) => this.osc('triangle', midi(n + 12), midi(n + 12) * 0.98, t + i * 0.16, 0.45, 0.08));
  }

  star(i: number) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const n = [76, 79, 84][Math.min(2, i)];
    this.osc('sine', midi(n + 12), midi(n + 12), t, 0.6, 0.12);
    this.osc('triangle', midi(n), midi(n), t, 0.5, 0.08);
    this.noiseBurst(t, 'highpass', 8000, 0.5, 0.06, 0.4);
  }

  hover() {
    if (!this.ctx || !this.throttle(4)) return;
    this.osc('sine', 1800, 2200, this.ctx.currentTime, 0.04, 0.025);
  }
  click() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.osc('triangle', 880, 1320, t, 0.07, 0.08);
    this.osc('sine', 220, 110, t, 0.08, 0.08);
  }
  back() {
    if (!this.ctx) return;
    this.osc('triangle', 660, 330, this.ctx.currentTime, 0.09, 0.08);
  }
  bump() {
    if (!this.ctx || !this.throttle(3)) return;
    this.osc('sine', 160, 90, this.ctx.currentTime, 0.12, 0.08);
  }
  finale() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.osc('sawtooth', 55, 25, t, 3.0, 0.2);
    this.noiseBurst(t, 'lowpass', 1200, 0.5, 0.5, 3.0, 50);
    [50, 57, 62, 69, 74].forEach((n, i) => this.osc('triangle', midi(n + 12), midi(n + 12), t + 0.8 + i * 0.12, 2.0, 0.07));
  }
  whoosh() {
    if (!this.ctx) return;
    this.noiseBurst(this.ctx.currentTime, 'bandpass', 400, 1.2, 0.18, 0.5, 3000);
  }
}

export const audio = new AudioManager();
