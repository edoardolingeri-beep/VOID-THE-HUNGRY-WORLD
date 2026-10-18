import { clamp } from './utils';

/**
 * Unified input: keyboard (WASD / arrows), optional mouse steering and an
 * analogue virtual joystick for touch devices (floating: it re-centres
 * where the thumb lands, anywhere on the play surface).
 */
export class Input {
  private keys = new Set<string>();
  private mouseDown = false;
  private mouseX = 0;
  private mouseY = 0;
  mouseSteering = true;
  /** Screen position of the hole, updated by the session. */
  holeScreen = { x: 0, y: 0 };
  private joyId: number | null = null;
  private joyOrigin = { x: 0, y: 0 };
  private joyVec = { x: 0, y: 0 };
  private joyEl: HTMLElement | null = null;
  private joyKnob: HTMLElement | null = null;
  private joyRadius = 60;
  enabled = false;
  lastDevice: 'keyboard' | 'mouse' | 'touch' = 'keyboard';
  onPause: (() => void) | null = null;
  onAnyInput: (() => void) | null = null;

  constructor(surface: HTMLElement) {
    window.addEventListener('keydown', (e) => {
      if (e.repeat && (e.code === 'Escape' || e.code === 'KeyP')) return;
      if (e.code === 'Escape' || e.code === 'KeyP') {
        this.onPause?.();
        return;
      }
      if (MOVE_KEYS.has(e.code)) {
        if (this.enabled) e.preventDefault();
        this.keys.add(e.code);
        this.lastDevice = 'keyboard';
        this.onAnyInput?.();
      }
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.reset());

    surface.addEventListener('pointerdown', (e) => this.down(e));
    window.addEventListener('pointermove', (e) => this.move(e));
    window.addEventListener('pointerup', (e) => this.up(e));
    window.addEventListener('pointercancel', (e) => this.up(e));
    surface.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  attachJoystick(base: HTMLElement, knob: HTMLElement) {
    this.joyEl = base;
    this.joyKnob = knob;
  }

  reset() {
    this.keys.clear();
    this.mouseDown = false;
    this.releaseJoy();
  }

  private down(e: PointerEvent) {
    if (!this.enabled) return;
    if (e.pointerType === 'mouse') {
      if (e.button !== 0) return;
      this.mouseDown = true;
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.lastDevice = 'mouse';
      this.onAnyInput?.();
      return;
    }
    if (this.joyId !== null) return;
    e.preventDefault();
    this.joyId = e.pointerId;
    this.joyOrigin = { x: e.clientX, y: e.clientY };
    this.joyVec = { x: 0, y: 0 };
    this.lastDevice = 'touch';
    this.joyRadius = clamp(Math.min(window.innerWidth, window.innerHeight) * 0.11, 46, 78);
    if (this.joyEl) {
      this.joyEl.classList.add('active');
      this.joyEl.style.left = `${e.clientX}px`;
      this.joyEl.style.top = `${e.clientY}px`;
      this.joyEl.style.setProperty('--joy-r', `${this.joyRadius}px`);
    }
    this.updateKnob();
    this.onAnyInput?.();
  }
  private move(e: PointerEvent) {
    if (e.pointerType === 'mouse') {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      return;
    }
    if (e.pointerId !== this.joyId) return;
    let dx = e.clientX - this.joyOrigin.x;
    let dy = e.clientY - this.joyOrigin.y;
    const len = Math.hypot(dx, dy);
    const R = this.joyRadius;
    if (len > R) {
      // drag the base along so the stick never "sticks" at the edge
      const over = len - R;
      this.joyOrigin.x += (dx / len) * over;
      this.joyOrigin.y += (dy / len) * over;
      dx = e.clientX - this.joyOrigin.x;
      dy = e.clientY - this.joyOrigin.y;
      if (this.joyEl) {
        this.joyEl.style.left = `${this.joyOrigin.x}px`;
        this.joyEl.style.top = `${this.joyOrigin.y}px`;
      }
    }
    this.joyVec = { x: dx / R, y: dy / R };
    this.updateKnob();
  }
  private up(e: PointerEvent) {
    if (e.pointerType === 'mouse') {
      if (e.button === 0) this.mouseDown = false;
      return;
    }
    if (e.pointerId === this.joyId) this.releaseJoy();
  }
  private releaseJoy() {
    this.joyId = null;
    this.joyVec = { x: 0, y: 0 };
    this.joyEl?.classList.remove('active');
    this.updateKnob();
  }
  private updateKnob() {
    if (!this.joyKnob) return;
    const R = this.joyRadius;
    this.joyKnob.style.transform = `translate(calc(-50% + ${this.joyVec.x * R}px), calc(-50% + ${this.joyVec.y * R}px))`;
  }

  /** Desired movement in screen space (x right, y down), length 0..1. */
  getMove(): { x: number; y: number } {
    let x = 0, y = 0;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y += 1;
    if (x || y) {
      const l = Math.hypot(x, y);
      return { x: x / l, y: y / l };
    }
    if (this.joyId !== null) {
      const l = Math.hypot(this.joyVec.x, this.joyVec.y);
      if (l < 0.12) return { x: 0, y: 0 };
      const m = Math.min(1, (l - 0.12) / 0.75);
      return { x: (this.joyVec.x / l) * m, y: (this.joyVec.y / l) * m };
    }
    if (this.mouseDown && this.mouseSteering) {
      const dx = this.mouseX - this.holeScreen.x;
      const dy = this.mouseY - this.holeScreen.y;
      const l = Math.hypot(dx, dy);
      const dead = 12;
      if (l < dead) return { x: 0, y: 0 };
      const m = Math.min(1, (l - dead) / (Math.min(window.innerWidth, window.innerHeight) * 0.22));
      return { x: (dx / l) * m, y: (dy / l) * m };
    }
    return { x: 0, y: 0 };
  }
}

const MOVE_KEYS = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);
