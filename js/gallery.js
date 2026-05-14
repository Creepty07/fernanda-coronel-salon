/**
 * ============================================================
 * GALLERY — Filtros, "Ver más" en móvil.
 * Responsabilidad única: comportamiento de la galería.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => GalleryModule.init(), 150);
});

const GalleryModule = (() => {
  const MOBILE_BP = 768;
  let mobileExpanded = false;
  let currentFilter  = 'todos';

  function isMobile() { return window.innerWidth <= MOBILE_BP; }

  function allItems() {
    return Array.from(document.querySelectorAll('.galeria-item'));
  }

  // Aplica filtro y respeta límite móvil
  function applyFilter(filter) {
    currentFilter  = filter;
    mobileExpanded = false;
    render();
  }

  function render() {
    const items     = allItems();
    const limit     = window.FC?.galeria?.initialMobile ?? 6;
    const mobile    = isMobile();
    let visible     = 0;

    items.forEach(item => {
      const matchesFilter = currentFilter === 'todos' || item.dataset.tag === currentFilter;
      item.classList.toggle('hidden', !matchesFilter);

      if (matchesFilter) {
        if (mobile && !mobileExpanded && visible >= limit) {
          item.classList.add('mobile-hidden');
        } else {
          item.classList.remove('mobile-hidden');
          visible++;
        }
      } else {
        item.classList.remove('mobile-hidden');
      }
    });

    // Mostrar/ocultar botón "Ver más"
    const btn = document.getElementById('gallery-more-btn');
    if (btn) {
      const hiddenMobile = items.filter(i =>
        i.classList.contains('mobile-hidden')).length;
      btn.style.display = (mobile && hiddenMobile > 0) ? 'flex' : 'none';
    }
  }

  return {
    init() {
      render();

      // Botón "Ver más"
      document.getElementById('gallery-more-btn')
        ?.addEventListener('click', () => {
          mobileExpanded = true;
          render();
        });

      // Re-evaluar en resize
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(render, 200);
      });
    },

    applyFilter,
  };
})();