import { h, icon } from './dom';
import type { Session, FloatEvent } from '../gameplay/Session';
import type { PowerUp } from '../world/props/types';
import { formatNumber, formatTime, isTouchDevice } from '../engine/utils';

interface FloatItem {
  el: HTMLElement;
  x: number;
  y: number;
  z: number;
  age: number;
  life: number;
  active: boolean;
}

const POWER_INFO: Record<PowerUp, { label: string; color: string; icon: 'clock' | 'magnet' | 'x2' | 'surge' }> = {
  time: { label: 'TIME', color: '#3de8ff', icon: 'clock' },
  magnet: { label: 'GRAVITY', color: '#ff3d9a', icon: 'magnet' },
  multiplier: { label: 'x2 POINTS', color: '#ffc94a', icon: 'x2' },
  surge: { label: 'SURGE', color: '#a28bff', icon: 'surge' },
};

/** In-game heads-up display. Reads the session each frame and updates only what changed. */
export class HUD {
  readonly root: HTMLElement;
  private els: Record<string, HTMLElement> = {};
  private objEls: { root: HTMLElement; bar: HTMLElement; val: HTMLElement }[] = [];
  private floats: FloatItem[] = [];
  private last: Record<string, string | number> = {};
  private powerEls = new Map<PowerUp, { el: HTMLElement; bar: HTMLElement; dur: number }>();
  private tutEl: HTMLElement | null = null;
  private scoreBumpT = 0;
  readonly joyBase: HTMLElement;
  readonly joyKnob: HTMLElement;
  private joyHint: HTMLElement | null = null;

  constructor(private session: Session, best: number, onPause: () => void) {
    const def = session.def;
    const th = def.theme;
    const objs = def.objectives.map((o) => {
      const bar = h('i');
      const val = h('b', null, '0');
      const root = h('div', { class: 'obj' }, h('div', { class: 'lab' }, h('span', null, o.label), val), h('div', { class: 'bar' }, bar));
      this.objEls.push({ root, bar, val });
      return root;
    });
    this.els.timer = h('div', { class: 'v' }, formatTime(def.duration));
    this.els.timerBox = h('div', { class: 'timer glass' }, this.els.timer, h('div', { class: 'l' }, 'TIME'));
    this.els.score = h('div', { class: 'v' }, '0');
    this.els.lvNum = h('span', null, '1');
    this.els.lv = h('div', { class: 'lv' }, h('small', null, 'SIZE'), this.els.lvNum);
    this.els.gbar = h('i');
    this.els.gtxt = h('span', null, 'GROWTH');
    this.els.sizebox = h('div', { class: 'sizebox glass' }, this.els.lv, h('div', { class: 'gw' }, h('div', { class: 'gl' }, this.els.gtxt, h('span', null, 'NEXT SIZE')), h('div', { class: 'gbar' }, this.els.gbar)));
    this.els.comboX = h('div', { class: 'x' }, 'x1.5');
    this.els.comboC = h('div', { class: 'c' }, 'COMBO');
    this.els.comboBar = h('i');
    this.els.combo = h('div', { class: 'combo' }, this.els.comboX, this.els.comboC, h('div', { class: 'cbar' }, this.els.comboBar));
    this.els.toasts = h('div', { class: 'toasts' });
    this.els.floats = h('div', { class: 'floats' });
    this.els.powers = h('div', { class: 'powers' });
    this.joyKnob = h('div', { class: 'knob' });
    this.joyBase = h('div', { class: 'joy' }, this.joyKnob);
    const pauseBtn = h('button', { class: 'btn icon pausebtn interactive', 'aria-label': 'Pause', onclick: onPause }, icon('pause'));

    this.root = h(
      'div',
      { class: 'screen hud show', '--accent': th.accent, '--accent2': th.accent2 },
      this.els.floats,
      h(
        'div',
        { class: 'top' },
        h('div', { class: 'lvl glass' }, h('div', { class: 't' }, h('span', { class: 'n' }, `LV ${def.id}`), h('span', { class: 'nm' }, def.name.toUpperCase())), ...objs),
        this.els.timerBox,
        h('div', { class: 'scorebox' }, h('div', { class: 'score glass' }, this.els.score, h('div', { class: 'best' }, 'BEST ', h('b', null, formatNumber(best)))), pauseBtn),
      ),
      this.els.powers,
      this.els.toasts,
      this.els.combo,
      h('div', { class: 'bottom' }, this.els.sizebox),
      this.joyBase,
    );
    if (isTouchDevice()) {
      this.joyHint = h('div', { class: 'joy-hint' }, h('div', null, h('div', { class: 'knob', style: { margin: '0 auto 6px' } }), 'DRAG TO MOVE'));
      this.root.append(this.joyHint);
    }
    this.intro();
  }

  private intro() {
    const def = this.session.def;
    const box = h(
      'div',
      { class: 'box glass' },
      h('div', { class: 'lnum' }, `LEVEL ${def.id} · ${def.setting.toUpperCase()}`),
      h('div', { class: 'lname' }, def.name.toUpperCase()),
      h('div', { class: 'goal' }, ...def.objectives.map((o) => h('span', null, icon('target'), `${o.label}: ${formatNumber(o.target)}`)), h('span', { style: { color: 'var(--muted)', fontSize: '12px' } }, icon('clock'), `${def.duration} seconds`)),
    );
    const intro = h('div', { class: 'intro' }, box);
    this.root.append(intro);
    window.setTimeout(() => intro.remove(), 2700);
  }

  private set(key: string, el: HTMLElement, v: string) {
    if (this.last[key] === v) return;
    this.last[key] = v;
    el.textContent = v;
  }

  update(dt: number) {
    const s = this.session;
    // timer
    const t = Math.max(0, s.timeLeft);
    this.set('timer', this.els.timer, formatTime(t));
    const frac = t / s.def.duration;
    const col = t <= 10 ? '#ff5a6e' : frac < 0.35 ? '#ffc94a' : '#ffffff';
    if (this.last.tc !== col) {
      this.last.tc = col;
      this.els.timerBox.style.setProperty('--tc', col);
      this.els.timerBox.classList.toggle('warn', t <= 10);
    }
    // score
    const sc = formatNumber(s.score);
    if (this.last.score !== sc) {
      this.set('score', this.els.score, sc);
      this.els.score.classList.add('bump');
      this.scoreBumpT = 0.12;
    }
    if (this.scoreBumpT > 0) {
      this.scoreBumpT -= dt;
      if (this.scoreBumpT <= 0) this.els.score.classList.remove('bump');
    }
    // objectives
    s.objectiveProgress().forEach((p, i) => {
      const e = this.objEls[i];
      const pct = Math.min(100, (p.v / p.o.target) * 100);
      const key = `o${i}`;
      const txt = `${formatNumber(Math.min(p.v, p.o.target))} / ${formatNumber(p.o.target)}`;
      if (this.last[key] !== txt) {
        this.last[key] = txt;
        e.val.textContent = txt;
        e.bar.style.width = `${pct}%`;
        e.root.classList.toggle('done', p.done);
      }
    });
    // size & growth
    this.set('lv', this.els.lvNum, String(s.sizeLevel));
    const g = s.growth.atMax ? 100 : Math.round(s.growth.progress * 100);
    if (this.last.g !== g) {
      this.last.g = g;
      this.els.gbar.style.width = `${g}%`;
      this.els.gtxt.textContent = s.growth.atMax ? 'MAX SIZE' : 'GROWTH';
    }
    // combo
    const on = s.combo >= 3 && s.comboTimer > 0;
    if (this.last.comboOn !== String(on)) {
      this.last.comboOn = String(on);
      this.els.combo.classList.toggle('on', on);
    }
    if (on) {
      this.set('cx', this.els.comboX, `x${s.comboMult}`);
      this.set('cc', this.els.comboC, `${s.combo} COMBO`);
      this.els.comboBar.style.width = `${Math.max(0, (s.comboTimer / 1.15) * 100)}%`;
    }
    // powers
    for (const [p, info] of this.powerEls) {
      const left = s.powers[p];
      if (left <= 0) {
        info.el.remove();
        this.powerEls.delete(p);
      } else info.bar.style.width = `${(left / info.dur) * 100}%`;
    }
    // floats
    for (const f of this.floats) {
      if (!f.active) continue;
      f.age += dt;
      const k = f.age / f.life;
      if (k >= 1) {
        f.active = false;
        f.el.style.display = 'none';
        continue;
      }
      const p = s.project(f.x, f.y, f.z);
      const rise = k * 46;
      const sc = k < 0.15 ? 0.6 + (k / 0.15) * 0.55 : 1.15 - Math.min(0.15, (k - 0.15) * 0.6);
      f.el.style.transform = `translate(${p.x}px, ${p.y - rise}px) translate(-50%, -50%) scale(${sc})`;
      f.el.style.opacity = String(k > 0.7 ? 1 - (k - 0.7) / 0.3 : 1);
    }
  }

  float(e: FloatEvent) {
    let f = this.floats.find((q) => !q.active);
    if (!f) {
      if (this.floats.length >= 28) f = this.floats.reduce((a, b) => (a.age > b.age ? a : b));
      else {
        const el = h('div', { class: 'float' });
        this.els.floats.append(el);
        f = { el, x: 0, y: 0, z: 0, age: 0, life: 1, active: false };
        this.floats.push(f);
      }
    }
    f.x = e.x;
    f.y = e.y;
    f.z = e.z;
    f.age = 0;
    f.life = e.kind === 'lock' ? 1.3 : e.kind === 'big' ? 1.2 : 0.9;
    f.active = true;
    f.el.className = `float ${e.kind}`;
    f.el.style.display = '';
    f.el.textContent = '';
    if (e.kind === 'lock') f.el.append(icon('lock'));
    f.el.append(e.text);
  }

  message(text: string, kind: string) {
    const el = h('div', { class: `toast ${kind} ${text.length > 16 && kind !== 'finale' ? 'small' : ''}` }, text);
    const box = this.els.toasts;
    while (box.children.length > 2) box.firstChild?.remove();
    box.append(el);
    window.setTimeout(() => el.remove(), kind === 'finale' ? 3300 : 1700);
  }

  power(p: PowerUp, dur: number) {
    if (dur <= 0) return;
    this.powerEls.get(p)?.el.remove();
    const info = POWER_INFO[p];
    const bar = h('i');
    const el = h('div', { class: 'power glass', '--pc': info.color }, h('div', { class: 'dot' }, icon(info.icon)), info.label, h('div', { class: 'pbar' }, bar));
    this.els.powers.append(el);
    this.powerEls.set(p, { el, bar, dur });
  }

  sizeUp() {
    const b = this.els.sizebox;
    b.classList.remove('up');
    void b.offsetWidth;
    b.classList.add('up');
  }

  tutorial(step: number) {
    this.tutEl?.remove();
    this.tutEl = null;
    const touch = isTouchDevice();
    let content: (Node | string)[] = [];
    if (step === 1)
      content = touch
        ? [h('div', { class: 'ico' }, icon('hand')), 'Touch and drag anywhere to move the hole.']
        : [h('div', { class: 'ico' }, icon('keys')), 'Move with ', h('span', { class: 'k' }, 'W'), h('span', { class: 'k' }, 'A'), h('span', { class: 'k' }, 'S'), h('span', { class: 'k' }, 'D'), ' or arrows — or hold the mouse.'];
    else if (step === 2) content = [h('div', { class: 'ico' }, icon('hole')), 'Glide under small objects to swallow them. They must fit in the hole!'];
    else if (step === 3) content = [h('div', { class: 'ico' }, icon('up')), 'You grew! Bigger hole, bigger meals. Keep eating to grow more.'];
    else if (step === 4) content = [h('div', { class: 'ico' }, icon('lock')), 'Too big for now — grow to the size shown, then come back for it.'];
    if (this.joyHint && step >= 2) this.joyHint.classList.add('hide');
    const el = h('div', { class: 'tutorial glass' }, ...content);
    this.root.append(el);
    this.tutEl = el;
    window.setTimeout(() => {
      if (this.tutEl === el) {
        el.style.transition = 'opacity .5s';
        el.style.opacity = '0';
        window.setTimeout(() => el.remove(), 500);
      }
    }, step === 1 ? 6000 : 4500);
  }

  hideJoyHint() {
    this.joyHint?.classList.add('hide');
  }
}
