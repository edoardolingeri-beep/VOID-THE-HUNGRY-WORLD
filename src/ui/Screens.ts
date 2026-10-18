import { h, icon, starIcon, sfxButtons } from './dom';
import { LEVELS } from '../world/levels';
import { saves, type Settings } from '../save/SaveManager';
import { audio } from '../audio/AudioManager';
import { icons } from './IconRenderer';
import { allPropDefs } from '../world/props';
import { formatNumber } from '../engine/utils';
import type { RunResult } from '../gameplay/Session';
import type { Quality } from '../engine/Engine';

function screen(cls: string, ...children: (Node | null)[]) {
  const el = h('div', { class: `screen interactive ${cls}` }, ...children);
  sfxButtons(el);
  return el;
}

function btn(label: string, ic: Parameters<typeof icon>[0] | null, onClick: () => void, cls = '') {
  return h('button', { class: `btn ${cls}`, onclick: () => { audio.click(); onClick(); } }, ic ? icon(ic) : null, label);
}

function header(title: string, onBack: () => void, extra: Node | null = null) {
  return h(
    'div',
    { class: 'header' },
    h('button', { class: 'btn icon', 'aria-label': 'Back', onclick: () => { audio.back(); onBack(); } }, icon('back')),
    h('h2', null, title),
    h('div', { class: 'spacer' }),
    extra,
  );
}

// ------------------------------------------------------------------ menu
export function mainMenu(cb: { play(): void; select(): void; collection(): void; settings(): void; toggleMute(): void; fullscreen(): void }) {
  const total = LEVELS.length;
  const done = Object.values(saves.data.levels).filter((l) => l.completed).length;
  const stars = saves.totalStars();
  const muteBtn = h('button', { class: 'btn icon', 'aria-label': 'Toggle sound', onclick: () => { cb.toggleMute(); muteBtn.replaceChildren(icon(saves.data.settings.muted ? 'mute' : 'sound')); } }, icon(saves.data.settings.muted ? 'mute' : 'sound'));
  const fsBtn = document.fullscreenEnabled ? h('button', { class: 'btn icon', 'aria-label': 'Fullscreen', onclick: cb.fullscreen }, icon('fullscreen')) : null;
  const next = Math.min(total, saves.data.unlocked);
  return screen(
    'menu dim show-later',
    h('div', { class: 'topbar' }, h('div', { class: 'chip glass' }, h('span', { class: 'star' }, starIcon(true, 16)), `${stars} / ${total * 3}`), h('div', { style: { display: 'flex', gap: '8px' } }, fsBtn, muteBtn)),
    h(
      'div',
      { class: 'logo' },
      h('h1', null, 'V', h('span', { class: 'o' }), 'ID'),
      h('div', { class: 'sub' }, 'THE HUNGRY WORLD'),
      h('div', { class: 'tag' }, 'Everything begins with a little hole.'),
    ),
    h(
      'div',
      { class: 'buttons' },
      btn(done === 0 ? 'Play' : `Play · Level ${next}`, 'play', cb.play, 'primary big'),
      btn('Level Select', 'grid', cb.select),
      h('div', { class: 'row' }, btn('Collection', 'gem', cb.collection), btn('Settings', 'gear', cb.settings)),
    ),
    h(
      'div',
      { class: 'progress' },
      h('span', null, 'Levels ', h('b', null, `${done}/${total}`)),
      h('div', { class: 'bar' }, h('i', { style: { width: `${(done / total) * 100}%` } })),
      h('span', null, 'Devoured ', h('b', null, formatNumber(saves.data.totalEaten))),
    ),
    h('div', { class: 'credits' }, 'VOID: THE HUNGRY WORLD · v1.0'),
  );
}

// ---------------------------------------------------------- level select
export function levelSelect(cb: { back(): void; play(id: number): void }) {
  const grid = h('div', { class: 'grid' });
  LEVELS.forEach((def, i) => {
    const rec = saves.level(def.id);
    const unlocked = saves.isUnlocked(def.id);
    const thumb = h('div', { class: 'thumb' });
    const heroImg = h('img', { class: 'hero', alt: '' }) as HTMLImageElement;
    heroImg.style.opacity = '0';
    heroImg.style.transition = 'opacity .4s';
    thumb.append(h('div', { class: 'num' }, String(def.id).padStart(2, '0')), heroImg);
    const badge = rec.completed ? h('span', { class: 'pill gold badge' }, icon('check'), 'Cleared') : unlocked && !rec.plays ? h('span', { class: 'pill new badge' }, 'New') : null;
    if (badge) thumb.append(badge);
    if (!unlocked) thumb.append(h('div', { class: 'lock' }, icon('lock')));
    const diff = h('span', { class: 'diff', title: 'Difficulty' }, ...[1, 2, 3, 4, 5].map((k) => h('i', { class: k <= def.difficulty ? 'on' : '' })));
    const card = h(
      'button',
      { class: `card ${rec.completed ? 'done' : ''} ${unlocked ? '' : 'locked'}`, '--accent': def.theme.accent, style: { animationDelay: `${i * 0.04}s` }, 'aria-label': `Level ${def.id} ${def.name}${unlocked ? '' : ' (locked)'}` },
      thumb,
      h(
        'div',
        { class: 'body' },
        h('div', { class: 'name' }, def.name),
        h('div', { class: 'meta' }, h('span', null, def.setting), h('span', null, icon('clock'), `${def.duration}s`), diff),
        h(
          'div',
          { class: 'row' },
          h('div', { class: 'stars' }, starIcon(rec.stars >= 1), starIcon(rec.stars >= 2), starIcon(rec.stars >= 3)),
          h('div', { class: 'best' }, unlocked ? (rec.best ? h('span', null, 'Best ', h('b', null, formatNumber(rec.best))) : 'Not played') : 'Locked'),
        ),
      ),
    );
    card.addEventListener('click', () => {
      if (!unlocked) {
        audio.back();
        card.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 260 });
        return;
      }
      audio.click();
      cb.play(def.id);
    });
    grid.append(card);
    icons.requestThumb(def, (url) => (thumb.style.backgroundImage = `url(${url})`));
    icons.request(def.hero[0], 0, (url) => {
      heroImg.src = url;
      heroImg.style.opacity = '1';
    });
  });
  const stars = saves.totalStars();
  return screen('solid', header('Select Level', cb.back, h('div', { class: 'chip glass' }, starIcon(true, 16), `${stars} / ${LEVELS.length * 3}`)), h('div', { class: 'levels' }, grid));
}

// ------------------------------------------------------------ collection
export function collection(cb: { back(): void }) {
  const defs = allPropDefs()
    .filter((d) => !d.tags.includes('secret'))
    .sort((a, b) => a.points - b.points);
  const col = saves.data.collection;
  const found = defs.filter((d) => col[d.id]).length;
  const grid = h('div', { class: 'grid' });
  defs.forEach((d, i) => {
    const n = col[d.id] ?? 0;
    const img = h('img', { alt: d.name, loading: 'lazy' }) as HTMLImageElement;
    const special = d.tags.includes('special') || d.tags.includes('landmark');
    const item = h(
      'div',
      { class: `item ${n ? '' : 'locked'} ${special ? 'special' : ''}`, style: { animationDelay: `${Math.min(i, 30) * 0.015}s` }, title: n ? d.blurb ?? d.name : 'Not yet devoured' },
      img,
      h('div', { class: 'n' }, n ? d.name : '???'),
      h('div', { class: 'c' }, n ? `×${formatNumber(n)} · ${d.points} pts` : `${d.points} pts`),
    );
    grid.append(item);
    icons.request(d.id, 0, (url) => (img.src = url));
  });
  const secrets = h('div', { class: 'stats' }, ...LEVELS.map((l) => h('div', { class: `chip glass`, style: { opacity: saves.data.secrets[l.id] ? '1' : '.45' } }, icon(saves.data.secrets[l.id] ? 'star' : 'lock'), `World ${l.id}`)));
  const secretCount = Object.values(saves.data.secrets).filter(Boolean).length;
  return screen(
    'solid',
    header('Collection', cb.back, h('div', { class: 'chip glass' }, icon('gem'), `${found} / ${defs.length}`)),
    h(
      'div',
      { class: 'collection' },
      h('div', { class: 'section-title' }, `Golden Ducks · ${secretCount} / ${LEVELS.length} secrets found`),
      secrets,
      h('div', { class: 'section-title' }, `Devoured objects · ${formatNumber(saves.data.totalEaten)} total`),
      grid,
    ),
  );
}

// -------------------------------------------------------------- settings
export function settings(cb: { back(): void; apply(s: Settings): void; reset(): void }, inGame = false) {
  const s = saves.data.settings;
  const slider = (label: string, key: 'music' | 'sfx') => {
    const input = h('input', { type: 'range', min: '0', max: '100', value: String(Math.round(s[key] * 100)), 'aria-label': label }) as HTMLInputElement;
    const upd = () => {
      input.style.setProperty('--v', `${input.value}%`);
      s[key] = Number(input.value) / 100;
      cb.apply(s);
    };
    input.addEventListener('input', upd);
    input.addEventListener('change', () => {
      saves.save();
      if (key === 'sfx') audio.click();
    });
    input.style.setProperty('--v', `${input.value}%`);
    return h('div', { class: 'setting' }, h('label', null, label), input);
  };
  const toggle = (label: string, hint: string, key: 'shake' | 'mouseSteer' | 'showFps' | 'autoPause' | 'muted') => {
    const t = h('button', { class: `toggle ${s[key] ? 'on' : ''}`, 'aria-label': label, 'aria-pressed': String(!!s[key]) });
    t.addEventListener('click', () => {
      s[key] = !s[key];
      t.classList.toggle('on', s[key]);
      t.setAttribute('aria-pressed', String(s[key]));
      audio.click();
      saves.save();
      cb.apply(s);
    });
    return h('div', { class: 'setting' }, h('label', null, label, h('span', { class: 'hint' }, hint)), t);
  };
  const seg = h('div', { class: 'seg' });
  (['low', 'medium', 'high'] as Quality[]).forEach((q) => {
    const b = h('button', { class: s.quality === q ? 'on' : '' }, q);
    b.addEventListener('click', () => {
      s.quality = q;
      seg.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
      audio.click();
      saves.save();
      cb.apply(s);
    });
    seg.append(b);
  });
  let confirmEl: HTMLElement | null = null;
  const resetBtn = btn('Reset progress', 'retry', () => {
    if (confirmEl) return;
    confirmEl = h(
      'div',
      { class: 'missing', style: { marginTop: '14px' } },
      h('b', null, 'ARE YOU SURE?'),
      'All levels, stars, records and the collection will be erased.',
      h('div', { class: 'dialog-actions' }, btn('Cancel', null, () => { confirmEl?.remove(); confirmEl = null; }, 'small'), btn('Erase', 'close', () => { cb.reset(); confirmEl?.remove(); confirmEl = null; }, 'small primary')),
    );
    panel.append(confirmEl);
    sfxButtons(confirmEl);
  }, 'small');
  const panel = h(
    'div',
    { class: 'panel glass' },
    h('h3', null, 'Audio'),
    slider('Music volume', 'music'),
    slider('Sound effects', 'sfx'),
    toggle('Mute all', 'Silence music and effects', 'muted'),
    h('h3', { style: { marginTop: '20px' } }, 'Graphics & controls'),
    h('div', { class: 'setting' }, h('label', null, 'Quality', h('span', { class: 'hint' }, 'Lower it on older devices')), seg),
    toggle('Camera shake', 'Impact feedback on big swallows', 'shake'),
    toggle('Mouse steering', 'Hold the left button to steer toward the cursor', 'mouseSteer'),
    toggle('Auto-pause', 'Pause when the window loses focus', 'autoPause'),
    toggle('Show FPS', 'Performance counter', 'showFps'),
    inGame ? null : h('div', { class: 'setting' }, h('label', null, 'Progress', h('span', { class: 'hint' }, 'Erase all saved data')), resetBtn),
  );
  return screen(inGame ? 'overlay' : 'solid', header('Settings', cb.back), h('div', { class: 'center' }, panel));
}

// ----------------------------------------------------------------- pause
export function pauseMenu(cb: { resume(): void; restart(): void; settings(): void; select(): void; menu(): void }, levelName: string) {
  return screen(
    'overlay pause',
    h(
      'div',
      { class: 'center' },
      h(
        'div',
        { class: 'panel glass' },
        h('h3', null, 'PAUSED'),
        h('div', { style: { color: 'var(--muted)', fontSize: '13px', marginBottom: '14px' } }, levelName),
        h(
          'div',
          { class: 'btns' },
          btn('Resume', 'play', cb.resume, 'primary big'),
          h('div', { class: 'row' }, btn('Restart', 'retry', cb.restart), btn('Settings', 'gear', cb.settings)),
          h('div', { class: 'row' }, btn('Levels', 'grid', cb.select), btn('Menu', 'home', cb.menu)),
        ),
      ),
    ),
  );
}

// --------------------------------------------------------------- results
export function results(r: RunResult, newBest: boolean, hasNext: boolean, cb: { retry(): void; next(): void; select(): void; menu(): void }) {
  const win = r.completed;
  const starsEl = h('div', { class: 'bigstars' });
  for (let i = 0; i < 3; i++) {
    const off = icon('star');
    off.style.color = 'rgba(255,255,255,.12)';
    const on = icon('star');
    on.classList.add('on');
    on.style.color = 'var(--gold)';
    on.style.filter = 'drop-shadow(0 0 14px rgba(255,201,74,.8))';
    starsEl.append(h('div', { class: 's' }, off, on));
  }
  const stat = (k: string, v: string, cls = '') => h('div', { class: `stat ${cls}` }, h('div', { class: 'k' }, k), h('div', { class: 'v' }, v));
  const totalEl = h('div', { class: 'v' }, '0');
  const grid = h(
    'div',
    { class: 'resgrid' },
    stat('Score', formatNumber(r.score)),
    stat('Speed bonus', r.speedBonus ? `+${formatNumber(r.speedBonus)}` : '—'),
    stat('Swallowed', formatNumber(r.eaten)),
    stat('Final size', `SIZE ${r.sizeLevel}`),
    stat('Best combo', `${r.maxCombo}×`),
    stat('Secret', r.secretFound ? 'FOUND!' : '—', r.secretFound ? 'hl' : ''),
    h('div', { class: 'stat wide hl' }, h('div', { class: 'k' }, 'Total'), totalEl),
  );
  const missing = win
    ? null
    : h('div', { class: 'missing' }, h('b', null, 'OBJECTIVE NOT REACHED'), ...r.missing.map((m) => h('div', null, '• ', m)));
  const btns = h('div', { class: 'btns' });
  if (win && hasNext) btns.append(btn('Next level', 'next', cb.next, 'primary big wide'));
  else if (!win) btns.append(btn('Retry', 'retry', cb.retry, 'primary big wide'));
  if (win) btns.append(btn('Retry', 'retry', cb.retry));
  btns.append(btn('Levels', 'grid', cb.select));
  btns.append(btn('Menu', 'home', cb.menu, win ? 'wide' : ''));
  const el = screen(
    'overlay results',
    h(
      'div',
      { class: 'center' },
      h(
        'div',
        { class: 'panel glass' },
        h('div', { class: 'lname' }, `Level ${r.level.id} · ${r.level.name}`),
        h('div', { class: `title ${win ? 'win' : 'lose'}` }, win ? (r.level.id === LEVELS.length ? 'WORLD CONSUMED' : 'LEVEL COMPLETED') : "TIME'S UP"),
        starsEl,
        newBest ? h('span', { class: 'pill gold newbest' }, icon('trophy'), 'New personal best') : null,
        grid,
        missing,
        btns,
      ),
    ),
  );
  // animations
  if (win) audio.win();
  else audio.lose();
  for (let i = 0; i < r.stars; i++) {
    window.setTimeout(() => {
      starsEl.children[i].classList.add('lit');
      audio.star(i);
    }, 700 + i * 450);
  }
  const t0 = performance.now();
  const dur = 1100;
  const tick = () => {
    const k = Math.min(1, (performance.now() - t0) / dur);
    totalEl.textContent = formatNumber(r.total * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  return el;
}

export function loadingScreen() {
  return h('div', { class: 'loading' }, h('div', null, h('div', { class: 'ring' }), h('div', { class: 't' }, 'VOID'), h('div', { class: 's' }, 'Opening the void…')));
}
