/**
 * ============================================================
 * APP — Módulos core. Cada uno tiene una sola responsabilidad.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  ThemeModule.init();
  Renderer.init();
  NavModule.init();
  ScrollModule.init();
  RevealModule.init();
  LightboxModule.init();
  LoaderModule.init();
});

/* ── THEME ──────────────────────────────────────────────────
   Aplica colores desde FC.colores y persiste preferencia.
──────────────────────────────────────────────────────────── */
const ThemeModule = (() => {
  const KEY = 'fc-theme';

  function applyVars(theme) {
    const vars = window.FC.colores[theme];
    if (!vars) return;
    Object.entries(vars).forEach(([prop, val]) =>
      document.documentElement.style.setProperty(prop, val));
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    applyVars(theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀' : '☾';
  }

  return {
    init() {
      const saved = localStorage.getItem(KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
      apply(saved || (prefersDark ? 'dark' : 'light'));
      document.getElementById('theme-toggle')
        ?.addEventListener('click', () => {
          const cur = document.documentElement.getAttribute('data-theme');
          apply(cur === 'dark' ? 'light' : 'dark');
        });
    },
  };
})();

/* ── LOADER ─────────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const LoaderModule = (() => ({
  init() {
    setTimeout(() =>
      document.getElementById('page-loader')?.classList.add('hidden'), 1500);
  },
}))();

/* ── NAV ────────────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const NavModule = (() => ({
  init() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('nav-toggle');
    const menu   = document.getElementById('mobile-menu');

    window.addEventListener('scroll',
      () => navbar?.classList.toggle('scrolled', window.scrollY > 60),
      { passive: true });

    toggle?.addEventListener('click', () => {
      const open = menu?.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(!!open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    menu?.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle?.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }));
  },
}))();

/* ── SCROLL ─────────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const ScrollModule = (() => ({
  init() {
    const bar = document.getElementById('scroll-progress');
    const btt = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (bar) bar.style.width = `${pct * 100}%`;
      btt?.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  },
}))();

/* ── REVEAL ─────────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const RevealModule = (() => ({
  init() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: .08, rootMargin: '0px 0px -30px 0px' });

    // Esperar al render del DOM
    setTimeout(() =>
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el)), 120);
  },
}))();

/* ── LIGHTBOX ───────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const LightboxModule = (() => {
  function close() {
    const lb  = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    lb?.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { if (img) img.src = ''; }, 400);
  }
  return {
    init() {
      const lb  = document.getElementById('lightbox');
      const img = document.getElementById('lightbox-img');
      if (!lb || !img) return;

      document.addEventListener('click', e => {
        const t = e.target.closest('[data-lightbox]');
        if (!t) return;
        img.src = t.dataset.lightbox;
        img.alt = t.dataset.alt || '';
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      });

      document.getElementById('lightbox-close')?.addEventListener('click', close);
      lb.addEventListener('click', e => { if (e.target === lb) close(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    },
  };
})();