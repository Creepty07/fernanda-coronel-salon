/**
 * ============================================================
 * SLIDER — Componente antes/después.
 * Fix: inicializa DESPUÉS de que renderer construya el DOM.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Esperamos al render del DOM antes de buscar los elementos
  setTimeout(() => SliderModule.init(), 200);
});

const SliderModule = (() => {
  function updateCard(card, pct) {
    const after  = card.querySelector('.ad-after');
    const line   = card.querySelector('.ad-line');
    const handle = card.querySelector('.ad-handle');
    if (after)  after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    if (line)   line.style.left  = pct + '%';
    if (handle) handle.style.left = pct + '%';
  }

  return {
    init() {
      const cards = document.querySelectorAll('.ad-card');
      if (!cards.length) return;

      cards.forEach(card => {
        const slider = card.querySelector('.ad-slider');
        if (!slider) return;

        // Render inicial
        updateCard(card, 50);

        // Input range nativo — funciona en desktop y móvil
        slider.addEventListener('input', () => {
          updateCard(card, Number(slider.value));
        });

        // Forzar re-render de imágenes si no cargan
        card.querySelectorAll('.ad-before, .ad-after').forEach(el => {
          const bg = el.style.backgroundImage;
          if (bg) {
            // Crear imagen auxiliar para forzar precarga
            const url = bg.slice(5, -2); // quitar url('...')
            const img = new Image();
            img.src = url;
          }
        });
      });
    },
  };
})();