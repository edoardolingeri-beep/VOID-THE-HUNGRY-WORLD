import type { MusicTheme } from '../world/levels/types';

interface ThemeSpec {
  bpm: number;
  root: number; // MIDI note of the tonic (bass register)
  scale: number[];
  prog: number[]; // scale degrees, one chord per bar
  pad: OscillatorType;
  padCut: number;
  lead: OscillatorType | 'marimba' | 'none';
  leadPattern: number[]; // 16 steps: -1 rest, else index into chord tones (0..5)
  bass: OscillatorType | 'none';
  bassPattern: number[]; // 16 steps: 1 = hit root, 2 = fifth, 3 = octave, 0 rest
  kick: number[];
  snare: number[];
  hat: number[];
  swing?: number;
  leadOct?: number;
  delay?: number;
  metal?: boolean;
}

const MAJ = [0, 2, 4, 5, 7, 9, 11];
const MIN = [0, 2, 3, 5, 7, 8, 10];
const DOR = [0, 2, 3, 5, 7, 9, 10];
const PHR = [0, 1, 3, 5, 7, 8, 10];
const LYD = [0, 2, 4, 6, 7, 9, 11];

const _ = 0;
const THEMES: Record<MusicTheme, ThemeSpec> = {
  fair: {
    bpm: 126, root: 48, scale: MAJ, prog: [0, 3, 4, 0], pad: 'triangle', padCut: 2400, lead: 'marimba',
    leadPattern: [0, 2, 4, 5, 4, 2, 0, -1, 1, 3, 5, 4, 3, 1, 2, -1], bass: 'triangle',
    bassPattern: [1, _, _, 2, _, _, 1, _, _, 2, _, _, 3, _, 2, _], kick: [0, 6, 12], snare: [4, 10], hat: [2, 8, 14], leadOct: 2, delay: 0.25,
  },
  sky: {
    bpm: 116, root: 45, scale: LYD, prog: [0, 1, 4, 3], pad: 'sawtooth', padCut: 1900, lead: 'triangle',
    leadPattern: [0, -1, 4, -1, 2, -1, 5, -1, 4, -1, 2, -1, 3, -1, 1, -1], bass: 'sawtooth',
    bassPattern: [1, _, _, 1, _, _, 2, _, 1, _, _, 1, _, 3, _, _], kick: [0, 4, 8, 12], snare: [4, 12], hat: [2, 6, 10, 14], leadOct: 2, delay: 0.375,
  },
  menu: {
    bpm: 80, root: 45, scale: MIN, prog: [0, 5, 2, 6], pad: 'sawtooth', padCut: 900, lead: 'triangle',
    leadPattern: [0, -1, -1, 2, -1, -1, 4, -1, -1, 3, -1, -1, 2, -1, 1, -1], bass: 'sine',
    bassPattern: [1, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _], kick: [], snare: [], hat: [], leadOct: 2, delay: 0.42,
  },
  park: {
    bpm: 112, root: 48, scale: MAJ, prog: [0, 4, 5, 3], pad: 'triangle', padCut: 1800, lead: 'triangle',
    leadPattern: [0, -1, 2, -1, 4, -1, 2, -1, 5, -1, 4, -1, 2, -1, 1, -1], bass: 'triangle',
    bassPattern: [1, _, _, _, 2, _, _, _, 1, _, 3, _, 2, _, _, _], kick: [0, 8], snare: [4, 12], hat: [2, 6, 10, 14], leadOct: 2, delay: 0.3,
  },
  street: {
    bpm: 100, root: 50, scale: DOR, prog: [0, 3, 0, 4], pad: 'sawtooth', padCut: 1100, lead: 'square',
    leadPattern: [-1, -1, 0, -1, -1, 2, -1, 3, -1, -1, 4, -1, 2, -1, -1, -1], bass: 'square',
    bassPattern: [1, _, _, 1, _, _, 3, _, _, 1, _, _, 2, _, 1, _], kick: [0, 7, 10], snare: [4, 12], hat: [0, 2, 4, 6, 8, 10, 12, 14], swing: 0.12, leadOct: 2, delay: 0.25,
  },
  traffic: {
    bpm: 122, root: 40, scale: MIN, prog: [0, 0, 5, 6], pad: 'sawtooth', padCut: 1300, lead: 'sawtooth',
    leadPattern: [0, -1, 2, 0, -1, 4, -1, 2, 0, -1, 2, 0, 5, -1, 4, -1], bass: 'sawtooth',
    bassPattern: [1, _, 1, _, 1, _, 1, _, 1, _, 1, _, 2, _, 3, _], kick: [0, 4, 8, 12], snare: [4, 12], hat: [2, 6, 10, 14, 15], leadOct: 2, delay: 0.2,
  },
  shopping: {
    bpm: 108, root: 53, scale: LYD, prog: [0, 1, 4, 3], pad: 'triangle', padCut: 2200, lead: 'marimba',
    leadPattern: [0, -1, 2, 4, -1, 2, 5, -1, 4, -1, 2, -1, 1, 2, -1, -1], bass: 'triangle',
    bassPattern: [1, _, _, 2, _, _, 1, _, 3, _, _, 2, _, _, 1, _], kick: [0, 8], snare: [4, 12], hat: [2, 6, 10, 14], leadOct: 1, delay: 0.25,
  },
  downtown: {
    bpm: 120, root: 42, scale: MIN, prog: [0, 5, 3, 4], pad: 'sawtooth', padCut: 1500, lead: 'square',
    leadPattern: [-1, 0, -1, 2, -1, 0, -1, 4, -1, 0, -1, 2, -1, 5, -1, 4], bass: 'sawtooth',
    bassPattern: [_, _, 1, _, _, _, 1, _, _, _, 1, _, _, _, 3, _], kick: [0, 4, 8, 12], snare: [4, 12], hat: [2, 6, 10, 14], leadOct: 2, delay: 0.3,
  },
  industrial: {
    bpm: 96, root: 40, scale: PHR, prog: [0, 1, 0, 6], pad: 'sawtooth', padCut: 800, lead: 'square',
    leadPattern: [0, -1, -1, 1, -1, -1, 0, -1, -1, -1, 3, -1, 1, -1, -1, -1], bass: 'square',
    bassPattern: [1, _, 1, _, _, 1, _, _, 1, _, 1, _, _, 2, _, _], kick: [0, 3, 8, 11], snare: [4, 12], hat: [0, 2, 4, 6, 8, 10, 12, 14], leadOct: 1, delay: 0.35, metal: true,
  },
  beach: {
    bpm: 104, root: 43, scale: MAJ, prog: [0, 3, 4, 3], pad: 'sine', padCut: 2400, lead: 'marimba',
    leadPattern: [0, -1, 2, -1, 4, 2, -1, 5, -1, 4, -1, 2, 4, -1, 2, -1], bass: 'triangle',
    bassPattern: [1, _, _, 1, _, _, 2, _, 1, _, _, 1, _, _, 3, _], kick: [0, 6, 8], snare: [4, 12], hat: [1, 3, 5, 7, 9, 11, 13, 15], swing: 0.1, leadOct: 2, delay: 0.3,
  },
  neon: {
    bpm: 110, root: 45, scale: MIN, prog: [0, 5, 2, 6], pad: 'sawtooth', padCut: 1700, lead: 'sawtooth',
    leadPattern: [0, 2, 4, 2, 0, 2, 4, 5, 0, 2, 4, 2, 0, 2, 5, 4], bass: 'sawtooth',
    bassPattern: [1, _, 1, 1, _, 1, 1, _, 1, _, 1, 1, _, 1, 3, _], kick: [0, 4, 8, 12], snare: [4, 12], hat: [2, 6, 10, 14], leadOct: 2, delay: 0.375,
  },
  finale: {
    bpm: 128, root: 38, scale: MIN, prog: [0, 5, 2, 6], pad: 'sawtooth', padCut: 2000, lead: 'sawtooth',
    leadPattern: [0, -1, 4, -1, 2, -1, 5, 4, 0, -1, 4, -1, 2, 3, 4, 5], bass: 'sawtooth',
    bassPattern: [1, _, 3, _, 1, _, 3, _, 1, _, 3, _, 2, _, 3, _], kick: [0, 4, 8, 12], snare: [4, 12], hat: [2, 6, 10, 14, 15], leadOct: 2, delay: 0.3,
  },
};

const midi = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

/** Procedural step-sequenced soundtrack, one style per environment. */
export class Music {
  private theme: ThemeSpec | null = null;
  private step = 0;
  private nextTime = 0;
  private timer: number | null = null;
  private bus: GainNode;
  private delay: DelayNode;
  private delayFb: GainNode;
  private delaySend: GainNode;
  private noise: AudioBuffer;
  intensity = 0;
  private bar = 0;

  constructor(private ctx: AudioContext, out: AudioNode) {
    this.bus = ctx.createGain();
    this.bus.gain.value = 0;
    this.bus.connect(out);
    this.delay = ctx.createDelay(1.5);
    this.delayFb = ctx.createGain();
    this.delayFb.gain.value = 0.32;
    this.delaySend = ctx.createGain();
    this.delaySend.gain.value = 0.28;
    const dl = ctx.createBiquadFilter();
    dl.type = 'lowpass';
    dl.frequency.value = 2800;
    this.delaySend.connect(this.delay);
    this.delay.connect(dl);
    dl.connect(this.delayFb);
    this.delayFb.connect(this.delay);
    dl.connect(this.bus);
    const len = ctx.sampleRate * 1;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  }

  play(name: MusicTheme) {
    const t = THEMES[name];
    if (this.theme === t && this.timer !== null) return;
    const now = this.ctx.currentTime;
    this.bus.gain.cancelScheduledValues(now);
    this.bus.gain.setValueAtTime(this.bus.gain.value, now);
    this.bus.gain.linearRampToValueAtTime(0, now + 0.4);
    const start = () => {
      this.theme = t;
      this.step = 0;
      this.bar = 0;
      this.delay.delayTime.value = (60 / t.bpm) * (t.delay ?? 0.3) * 2;
      this.nextTime = this.ctx.currentTime + 0.08;
      const n = this.ctx.currentTime;
      this.bus.gain.cancelScheduledValues(n);
      this.bus.gain.setValueAtTime(0, n);
      this.bus.gain.linearRampToValueAtTime(0.9, n + 1.2);
      if (this.timer === null) this.timer = window.setInterval(() => this.schedule(), 40);
    };
    window.setTimeout(start, this.timer === null ? 0 : 420);
  }

  stop() {
    const now = this.ctx.currentTime;
    this.bus.gain.cancelScheduledValues(now);
    this.bus.gain.setValueAtTime(this.bus.gain.value, now);
    this.bus.gain.linearRampToValueAtTime(0, now + 0.5);
    window.setTimeout(() => {
      if (this.timer !== null) window.clearInterval(this.timer);
      this.timer = null;
      this.theme = null;
    }, 520);
  }

  private schedule() {
    const t = this.theme;
    if (!t) return;
    const spb = 60 / t.bpm / 4;
    while (this.nextTime < this.ctx.currentTime + 0.12) {
      const s = this.step % 16;
      let time = this.nextTime;
      if (t.swing && s % 2 === 1) time += spb * t.swing;
      this.playStep(t, s, time, spb);
      this.nextTime += spb;
      this.step++;
      if (this.step % 16 === 0) this.bar++;
    }
  }

  private chordTones(t: ThemeSpec, degree: number): number[] {
    const sc = t.scale;
    const tone = (d: number) => {
      const o = Math.floor(d / 7);
      return t.root + sc[((d % 7) + 7) % 7] + o * 12;
    };
    return [tone(degree), tone(degree + 2), tone(degree + 4), tone(degree + 7), tone(degree + 9), tone(degree + 11)];
  }

  private playStep(t: ThemeSpec, s: number, time: number, spb: number) {
    const degree = t.prog[this.bar % t.prog.length];
    const chord = this.chordTones(t, degree);
    if (s === 0) this.pad(t, chord, time, spb * 16);
    const b = t.bassPattern[s];
    if (b && t.bass !== 'none') {
      const n = b === 1 ? chord[0] : b === 2 ? chord[2] : chord[0] + 12;
      this.bass(t.bass, midi(n), time, spb * 1.8);
    }
    const l = t.leadPattern[s];
    const leadOn = t.lead !== 'none' && l >= 0 && (this.intensity > 0.2 || this.bar % 4 !== 3 || s < 8);
    if (leadOn) this.lead(t, midi(chord[l] + 12 * (t.leadOct ?? 2)), time, spb * 1.5);
    if (t.kick.includes(s)) this.kick(time, t.metal);
    if (t.snare.includes(s)) this.snare(time, t.metal);
    if (t.hat.includes(s) || (this.intensity > 0.6 && s % 2 === 1)) this.hat(time, s % 4 === 2 ? 0.07 : 0.045);
  }

  private env(g: GainNode, time: number, a: number, peak: number, dur: number, rel: number) {
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(peak, time + a);
    g.gain.setValueAtTime(peak, time + Math.max(a, dur - rel));
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
  }

  private pad(t: ThemeSpec, chord: number[], time: number, dur: number) {
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(t.padCut * (0.7 + this.intensity * 0.6), time);
    f.Q.value = 0.6;
    const g = this.ctx.createGain();
    this.env(g, time, dur * 0.25, 0.05, dur + 0.3, dur * 0.4);
    f.connect(g);
    g.connect(this.bus);
    for (let i = 0; i < 3; i++) {
      for (const det of [-7, 7]) {
        const o = this.ctx.createOscillator();
        o.type = t.pad;
        o.frequency.value = midi(chord[i] + 12);
        o.detune.value = det;
        o.connect(f);
        o.start(time);
        o.stop(time + dur + 0.35);
      }
    }
  }

  private bass(type: OscillatorType, freq: number, time: number, dur: number) {
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.value = freq;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(900, time);
    f.frequency.exponentialRampToValueAtTime(180, time + dur);
    const g = this.ctx.createGain();
    this.env(g, time, 0.005, type === 'sine' ? 0.22 : 0.13, dur, dur * 0.5);
    o.connect(f);
    f.connect(g);
    g.connect(this.bus);
    o.start(time);
    o.stop(time + dur + 0.05);
  }

  private lead(t: ThemeSpec, freq: number, time: number, dur: number) {
    const g = this.ctx.createGain();
    g.connect(this.bus);
    g.connect(this.delaySend);
    if (t.lead === 'marimba') {
      for (const [m, a] of [[1, 0.09], [4, 0.025]] as const) {
        const o = this.ctx.createOscillator();
        o.type = 'sine';
        o.frequency.value = freq * m;
        const og = this.ctx.createGain();
        og.gain.setValueAtTime(a, time);
        og.gain.exponentialRampToValueAtTime(0.0001, time + (m === 1 ? 0.45 : 0.12));
        o.connect(og);
        og.connect(g);
        o.start(time);
        o.stop(time + 0.5);
      }
      g.gain.value = 1;
      return;
    }
    const o = this.ctx.createOscillator();
    o.type = t.lead as OscillatorType;
    o.frequency.value = freq;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(3200 + this.intensity * 2000, time);
    f.frequency.exponentialRampToValueAtTime(600, time + dur);
    const vol = t.lead === 'triangle' ? 0.08 : 0.035;
    this.env(g, time, 0.004, vol, dur, dur * 0.7);
    o.connect(f);
    f.connect(g);
    o.start(time);
    o.stop(time + dur + 0.05);
  }

  private kick(time: number, metal?: boolean) {
    const o = this.ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(metal ? 120 : 150, time);
    o.frequency.exponentialRampToValueAtTime(42, time + 0.14);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.42, time);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.32);
    o.connect(g);
    g.connect(this.bus);
    o.start(time);
    o.stop(time + 0.35);
  }

  private noiseHit(time: number, type: BiquadFilterType, freq: number, q: number, vol: number, dur: number) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, time);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    src.connect(f);
    f.connect(g);
    g.connect(this.bus);
    src.start(time, Math.random() * 0.5);
    src.stop(time + dur + 0.02);
  }

  private snare(time: number, metal?: boolean) {
    this.noiseHit(time, 'bandpass', metal ? 2600 : 1800, metal ? 6 : 0.8, 0.16, metal ? 0.12 : 0.18);
    if (metal) this.noiseHit(time, 'bandpass', 5200, 12, 0.06, 0.25);
  }
  private hat(time: number, vol: number) {
    this.noiseHit(time, 'highpass', 7000, 0.7, vol, 0.05);
  }
}
