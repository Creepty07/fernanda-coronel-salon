/**
 * ============================================================
 * CAROUSEL — Fábrica de carruseles reutilizable.
 * Patrón: Factory + módulo auto-contenido por instancia.
 * Usado por: Servicios, Precios, Testimonios.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    CarouselFactory.create('servicios-carousel',   { slideWidth: 300, gap: 24 });
    CarouselFactory.create('precios-carousel',     { slideWidth: 300, gap: 24 });
    CarouselFactory.create('testimonios-carousel', { slideWidth: 320, gap: 24 });
  }, 150);
});

const CarouselFactory = (() => {

  /**
   * @param {string} wrapperId  - ID del elemento .carousel-wrap
   * @param {Object} options
   *   slideWidth {number}  - ancho de cada slide en px
   *   gap        {number}  - gap entre slides en px
   */
  function create(wrapperId, options = {}) {
    const wrap  = document.getElementById(wrapperId);
    if (!wrap) return;

    const track     = wrap.querySelector('.carousel-track');
    const slides    = wrap.querySelectorAll('.carousel-slide');
    const prevBtn   = wrap.querySelector('.carousel-btn-prev');
    const nextBtn   = wrap.querySelector('.carousel-btn-next');
    const dotsWrap  = wrap.querySelector('.carousel-dots');

    if (!track || !slides.length) return;

    const { slideWidth = 300, gap = 24 } = options;
    let current   = 0;
    let autoTimer = null;

    // Cantidad visible según viewport
    function visibleCount() {
      const wrapW = wrap.offsetWidth;
      return Math.max(1, Math.floor(wrapW / (slideWidth + gap)));
    }

    function maxIndex() {
      return Math.max(0, slides.length - visibleCount());
    }

    // Genera puntos de paginación
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      const count = maxIndex() + 1;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Ir a slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      }
    }

    function updateDots() {
      if (!dotsWrap) return;
      dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) =>
        d.classList.toggle('active', i === current));
    }

    function updateButtons() {
      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current >= maxIndex();
    }

    function goTo(index) {
      current = Math.max(0, Math.min(index, maxIndex()));
      const offset = current * (slideWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
      updateDots();
      updateButtons();
    }

    function next() { goTo(current < maxIndex() ? current + 1 : 0); }
    function prev() { goTo(current > 0 ? current - 1 : maxIndex()); }

    // Auto-play
    function startAuto() {
      autoTimer = setInterval(next, 4500);
    }
    function stopAuto() { clearInterval(autoTimer); }

    // Touch/swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; stopAuto(); }, { passive: true });
    track.addEventListener('touchend',   e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
      startAuto();
    });

    // Event listeners de botones
    prevBtn?.addEventListener('click', () => { prev(); stopAuto(); startAuto(); });
    nextBtn?.addEventListener('click', () => { next(); stopAuto(); startAuto(); });

    // Pausa al hover
    wrap.addEventListener('mouseenter', stopAuto);
    wrap.addEventListener('mouseleave', startAuto);

    // Resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { buildDots(); goTo(Math.min(current, maxIndex())); }, 200);
    });

    // Init
    buildDots();
    goTo(0);
    startAuto();
  }

  return { create };
})();