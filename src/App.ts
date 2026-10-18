import { Engine } from './engine/Engine';
import { Input } from './engine/Input';
import { Session, type RunResult } from './gameplay/Session';
import { LEVELS, MENU_LEVEL, getLevel } from './world/levels';
import { HUD } from './ui/HUD';
import { h } from './ui/dom';
import * as Screens from './ui/Screens';
import { saves, type Settings } from './save/SaveManager';
import { audio } from './audio/AudioManager';

type State = 'menu' | 'select' | 'collection' | 'settings' | 'playing' | 'paused' | 'results' | 'transition';

/** Top-level application: owns the engine, sessions, screens and flow. */
export class App {
  readonly engine: Engine;
  readonly input: Input;
  session: Session | null = null;
  private hud: HUD | null = null;
  private state: State = 'menu';
  private screenEl: HTMLElement | null = null;
  private overlayEl: HTMLElement | null = null;
  private hudLayer: HTMLElement;
  private screenLayer: HTMLElement;
  private iris: HTMLElement;
  private fpsEl: HTMLElement;
  private frames = 0;
  private fpsT = 0;
  private currentLevel = 1;
  private params = new URLSearchParams(location.search);
  /** Simulation speed multiplier (testing). */
  private simSpeed = 1;
  private screenShownAt = 0;

  constructor(canvas: HTMLCanvasElement, ui: HTMLElement) {
    this.engine = new Engine(canvas);
    const st = saves.data.settings;
    this.engine.setQuality(st.quality);
    this.input = new Input(canvas);
    this.hudLayer = h('div', { class: 'layer' });
    this.screenLayer = h('div', { class: 'layer' });
    this.iris = h('div', { class: 'iris solid' });
    this.fpsEl = h('div', { class: 'fps' });
    this.fpsEl.style.display = st.showFps ? '' : 'none';
    for (const l of [this.hudLayer, this.screenLayer]) Object.assign(l.style, { position: 'absolute', inset: '0' });
    ui.append(this.hudLayer, this.screenLayer, this.iris, this.fpsEl);
    const loading = Screens.loadingScreen();
    ui.append(loading);
    this.applySettings(st);

    this.input.onPause = () => {
      if (this.state === 'playing') this.pause();
      else if (this.state === 'paused') this.resume();
    };
    this.input.onAnyInput = () => this.hud?.hideJoyHint();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        audio.suspend();
        if (this.state === 'playing' && saves.data.settings.autoPause) this.pause();
      } else audio.resume();
    });
    window.addEventListener('blur', () => {
      if (this.state === 'playing' && saves.data.settings.autoPause) this.pause();
    });
    window.addEventListener('resize', () => this.session?.resize());
    window.addEventListener('orientationchange', () => window.setTimeout(() => {
      this.engine.resize();
      this.session?.resize();
    }, 250));

    this.simSpeed = Number(this.params.get('speed') ?? 1) || 1;
    if (this.params.has('headless')) this.engine.headless = true;

    this.engine.start((dt) => this.frame(dt));
    // let fonts settle then reveal
    const reveal = () => {
      loading.classList.add('hide');
      window.setTimeout(() => loading.remove(), 700);
      const lv = Number(this.params.get('level'));
      if (lv) this.startLevel(lv, true);
      else this.toMenu(true);
    };
    if (document.fonts?.ready) void document.fonts.ready.then(() => window.setTimeout(reveal, 250));
    else window.setTimeout(reveal, 400);
  }

  // ------------------------------------------------------------ loop
  private frame(dt: number) {
    const s = this.session;
    // nothing to draw behind fully opaque screens
    const covered = (this.state === 'select' || this.state === 'collection' || this.state === 'settings') && !!this.screenEl?.classList.contains('show') && performance.now() - this.screenShownAt > 500;
    if (s && !covered) {
      const steps = this.simSpeed > 1 ? Math.round(this.simSpeed) : 1;
      for (let i = 0; i < steps; i++) s.update(dt);
      if (this.hud && (this.state === 'playing' || this.state === 'transition')) this.hud.update(dt);
      this.engine.render(s.scene, s.rig.camera);
    }
    this.frames++;
    this.fpsT += dt;
    if (this.fpsT >= 0.5) {
      this.fpsEl.textContent = `${Math.round(this.frames / this.fpsT)} FPS`;
      this.frames = 0;
      this.fpsT = 0;
    }
  }

  // ------------------------------------------------------ screens
  private showScreen(el: HTMLElement | null) {
    const old = this.screenEl;
    if (old) {
      old.classList.remove('show');
      window.setTimeout(() => old.remove(), 380);
    }
    this.screenEl = el;
    this.screenShownAt = performance.now();
    if (el) {
      this.screenLayer.append(el);
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
    }
  }
  private showOverlay(el: HTMLElement | null) {
    const old = this.overlayEl;
    if (old) {
      old.classList.remove('show');
      window.setTimeout(() => old.remove(), 380);
    }
    this.overlayEl = el;
    if (el) {
      this.screenLayer.append(el);
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
    }
  }

  private async irisSwap(fn: () => void) {
    const prev = this.state;
    this.state = 'transition';
    if (!this.iris.classList.contains('solid')) {
      this.iris.className = 'iris close';
      audio.whoosh();
      await wait(560);
    }
    try {
      fn();
    } catch (e) {
      console.error(e);
    }
    await wait(60);
    this.iris.className = 'iris open';
    window.setTimeout(() => {
      if (this.iris.className === 'iris open') this.iris.className = 'iris';
    }, 720);
    if (this.state === 'transition') this.state = prev;
  }

  private replaceSession(s: Session | null) {
    this.session?.dispose();
    this.session = s;
  }

  private ensureMenuWorld() {
    if (this.session && this.session.mode === 'demo') return;
    this.clearHud();
    const s = new Session(this.engine, MENU_LEVEL, 'demo', null, {});
    s.rig.orbit = 0.04;
    s.rig.setZoom(1.9);
    s.rig.zoomMul = 1.9;
    this.replaceSession(s);
    this.input.enabled = false;
  }

  private clearHud() {
    this.hud?.root.remove();
    this.hud = null;
  }

  toMenu(first = false) {
    const go = () => {
      this.showOverlay(null);
      this.ensureMenuWorld();
      this.state = 'menu';
      audio.playMusic('menu');
      this.showScreen(
        Screens.mainMenu({
          play: () => this.startLevel(this.nextLevelToPlay()),
          select: () => this.toSelect(),
          collection: () => this.toCollection(),
          settings: () => this.toSettings(),
          toggleMute: () => {
            saves.data.settings.muted = !saves.data.settings.muted;
            saves.save();
            this.applySettings(saves.data.settings);
          },
          fullscreen: () => {
            if (document.fullscreenElement) void document.exitFullscreen();
            else void document.documentElement.requestFullscreen?.().catch(() => undefined);
          },
        }),
      );
    };
    if (first || !(this.session && this.session.mode === 'demo')) void this.irisSwap(go);
    else go();
  }

  private nextLevelToPlay() {
    for (const l of LEVELS) if (!saves.level(l.id).completed && saves.isUnlocked(l.id)) return l.id;
    return Math.min(LEVELS.length, saves.data.unlocked);
  }

  toSelect() {
    const go = () => {
      this.showOverlay(null);
      this.ensureMenuWorld();
      this.state = 'select';
      audio.playMusic('menu');
      this.showScreen(Screens.levelSelect({ back: () => this.toMenu(), play: (id) => this.startLevel(id) }));
    };
    if (this.session && this.session.mode === 'demo') go();
    else void this.irisSwap(go);
  }

  toCollection() {
    this.state = 'collection';
    this.showScreen(Screens.collection({ back: () => this.toMenu() }));
  }

  toSettings() {
    this.state = 'settings';
    this.showScreen(
      Screens.settings({
        back: () => this.toMenu(),
        apply: (s) => this.applySettings(s),
        reset: () => {
          saves.reset();
          this.toMenu();
        },
      }),
    );
  }

  applySettings(s: Settings) {
    audio.setVolumes(s.music, s.sfx);
    audio.setMuted(s.muted);
    this.input.mouseSteering = s.mouseSteer;
    this.fpsEl.style.display = s.showFps ? '' : 'none';
    if (this.engine.quality !== s.quality) {
      this.engine.setQuality(s.quality);
      if (this.session) {
        this.session.resize();
        this.session.particles.budget = s.quality === 'low' ? 0.5 : s.quality === 'medium' ? 0.8 : 1;
      }
    }
    if (this.session) this.session.rig.shakeEnabled = s.shake;
  }

  // ---------------------------------------------------------- game
  startLevel(id: number, direct = false) {
    const def = getLevel(id);
    this.currentLevel = def.id;
    const go = () => {
      this.showScreen(null);
      this.showOverlay(null);
      this.clearHud();
      const session = new Session(this.engine, def, 'play', this.input, {
        float: (e) => this.hud?.float(e),
        message: (t, k) => this.hud?.message(t, k),
        tier: () => this.hud?.sizeUp(),
        power: (p, d) => this.hud?.power(p, d),
        tutorial: (st) => this.hud?.tutorial(st),
        end: (r) => this.onEnd(r),
      });
      session.rig.shakeEnabled = saves.data.settings.shake;
      if (this.params.has('bot')) session.bot = true;
      this.replaceSession(session);
      this.hud = new HUD(session, saves.level(def.id).best, () => this.pause());
      this.input.attachJoystick(this.hud.joyBase, this.hud.joyKnob);
      this.hudLayer.append(this.hud.root);
      this.input.reset();
      this.input.enabled = true;
      this.state = 'playing';
      audio.playMusic(def.theme.music);
    };
    if (direct && !this.session) void this.irisSwap(go);
    else void this.irisSwap(go);
  }

  pause() {
    if (this.state !== 'playing' || !this.session) return;
    this.state = 'paused';
    this.session.paused = true;
    this.input.reset();
    audio.setIntensity(0);
    this.showOverlay(
      Screens.pauseMenu(
        {
          resume: () => this.resume(),
          restart: () => this.startLevel(this.currentLevel),
          settings: () => this.pauseSettings(),
          select: () => this.toSelect(),
          menu: () => this.toMenu(),
        },
        `Level ${this.currentLevel} · ${getLevel(this.currentLevel).name}`,
      ),
    );
  }

  private pauseSettings() {
    this.showOverlay(
      Screens.settings(
        {
          back: () => {
            this.state = 'playing';
            this.pause();
          },
          apply: (s) => this.applySettings(s),
          reset: () => undefined,
        },
        true,
      ),
    );
    this.state = 'paused';
  }

  resume() {
    if (this.state !== 'paused' || !this.session) return;
    this.showOverlay(null);
    this.session.paused = false;
    this.state = 'playing';
  }

  private onEnd(r: RunResult) {
    this.input.enabled = false;
    const prevBest = saves.level(r.level.id).best;
    const newBest = saves.recordRun(r.level.id, r.total, r.stars, r.completed, r.sizeLevel, LEVELS.length) && prevBest > 0;
    saves.addToCollection(r.counts);
    if (r.secretFound) {
      saves.data.secrets[r.level.id] = true;
      saves.save();
    }
    this.state = 'results';
    this.hud?.root.classList.remove('show');
    const hasNext = r.level.id < LEVELS.length && saves.isUnlocked(r.level.id + 1);
    audio.playMusic('menu');
    this.showOverlay(
      Screens.results(r, newBest, hasNext, {
        retry: () => this.startLevel(r.level.id),
        next: () => this.startLevel(r.level.id + 1),
        select: () => this.toSelect(),
        menu: () => this.toMenu(),
      }),
    );
    (window as unknown as { __lastResult: RunResult }).__lastResult = r;
  }
}

function wait(ms: number) {
  return new Promise<void>((r) => window.setTimeout(r, ms));
}
