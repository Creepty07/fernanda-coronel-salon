/**
 * ============================================================
 * APP — Inicialización de módulos core.
 * Cada módulo tiene una sola responsabilidad.
 * ============================================================
 */

// ── BOOT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  ThemeModule.init();
  Renderer.init();          // construye el DOM desde config
  NavModule.init();
  ScrollModule.init();
  RevealModule.init();
  LightboxModule.init();
  LoaderModule.init();      // al final: oculta el loader
});

/* ── THEME ──────────────────────────────────────────────────
   Responsabilidad: modo claro/oscuro + persistencia.
──────────────────────────────────────────────────────────── */
const ThemeModule = (() => {
  const STORAGE_KEY = 'fc-theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀' : '☾';
  }

  return {
    init() {
      const saved   = localStorage.getItem(STORAGE_KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      apply(saved || (prefersDark ? 'dark' : 'light'));

      document.getElementById('theme-toggle')
        ?.addEventListener('click', () => {
          const current = document.documentElement.getAttribute('data-theme');
          apply(current === 'dark' ? 'light' : 'dark');
        });
    }
  };
})();

/* ── LOADER ─────────────────────────────────────────────────
   Responsabilidad: ocultar el loader tras la carga inicial.
──────────────────────────────────────────────────────────── */
const LoaderModule = (() => ({
  init() {
    setTimeout(() => {
      document.getElementById('page-loader')?.classList.add('hidden');
    }, 1500);
  }
}))();

/* ── NAV ────────────────────────────────────────────────────
   Responsabilidad: scroll effect + menú móvil.
──────────────────────────────────────────────────────────── */
const NavModule = (() => {
  function onScroll() {
    document.getElementById('navbar')
      ?.classList.toggle('scrolled', window.scrollY > 60);
  }

  function toggleMobile() {
    const toggle = document.getElementById('nav-toggle');
    const menu   = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  return {
    init() {
      window.addEventListener('scroll', onScroll, { passive: true });
      toggleMobile();
    }
  };
})();

/* ── SCROLL ─────────────────────────────────────────────────
   Responsabilidad: barra de progreso + botón volver arriba.
──────────────────────────────────────────────────────────── */
const ScrollModule = (() => {
  function onScroll() {
    const scrolled = window.scrollY;
    const total    = document.body.scrollHeight - window.innerHeight;

    const bar = document.getElementById('scroll-progress');
    if (bar) bar.style.width = `${(scrolled / total) * 100}%`;

    document.getElementById('back-to-top')
      ?.classList.toggle('visible', scrolled > 500);
  }

  return {
    init() {
      window.addEventListener('scroll', onScroll, { passive: true });
      document.getElementById('back-to-top')
        ?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  };
})();

/* ── REVEAL ─────────────────────────────────────────────────
   Responsabilidad: animar elementos al entrar en viewport.
──────────────────────────────────────────────────────────── */
const RevealModule = (() => ({
  init() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: .08, rootMargin: '0px 0px -30px 0px' }
    );
    // Re-run after renderer has built the DOM
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
  }
}))();

/* ── LIGHTBOX ───────────────────────────────────────────────
   Responsabilidad: vista ampliada de imágenes de galería.
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
      const lb    = document.getElementById('lightbox');
      const img   = document.getElementById('lightbox-img');
      const closeBtn = document.getElementById('lightbox-close');
      if (!lb || !img) return;

      document.addEventListener('click', e => {
        const target = e.target.closest('[data-lightbox]');
        if (!target) return;
        img.src = target.dataset.lightbox;
        img.alt = target.dataset.alt || '';
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      });

      closeBtn?.addEventListener('click', close);
      lb.addEventListener('click', e => { if (e.target === lb) close(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    }
  };
})();