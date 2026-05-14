/**
 * ============================================================
 * ENHANCEMENTS — Mejoras visuales e interactivas.
 * Cada módulo es independiente y auto-contenido.
 * Se inicializan después del render del DOM.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  CursorModule.init();
  TypewriterModule.init();
  ParallaxModule.init();
  CounterModule.init();
  SliderModule.init();
  FaqModule.init();
  MultiStepFormModule.init();
});

/* ── CURSOR PERSONALIZADO ───────────────────────────────────
   Responsabilidad: cursor dorado con anillo reactivo.
   Se desactiva en dispositivos táctiles.
──────────────────────────────────────────────────────────── */
const CursorModule = (() => {
  // Detectar dispositivo táctil
  const isTouchDevice = () =>
    window.matchMedia('(hover: none)').matches ||
    window.matchMedia('(pointer: coarse)').matches;

  return {
    init() {
      if (isTouchDevice()) return;

      const dot  = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      if (!dot || !ring) return;

      let mouseX = 0, mouseY = 0;
      let ringX  = 0, ringY  = 0;

      // Dot sigue al cursor directamente
      document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
      }, { passive: true });

      // Ring con lag suave (interpolación)
      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
        requestAnimationFrame(animateRing);
      };
      animateRing();

      // Hover en elementos interactivos
      const interactiveSelector =
        'a, button, [data-lightbox], .servicio-card, .precio-card, .faq-question, .service-chip, .filter-btn';

      document.querySelectorAll(interactiveSelector).forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
      });

      document.addEventListener('mousedown', () => ring.classList.add('clicking'));
      document.addEventListener('mouseup',   () => ring.classList.remove('clicking'));
      document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
      document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '.6'; });
    }
  };
})();

/* ── TYPEWRITER ─────────────────────────────────────────────
   Responsabilidad: efecto de escritura animada en el hero.
──────────────────────────────────────────────────────────── */
const TypewriterModule = (() => {
  return {
    init() {
      const el = document.getElementById('typewriter');
      if (!el) return;

      const phrases = window.FC_CONFIG?.hero?.typewriterPhrases || [];
      if (!phrases.length) return;

      let phraseIndex = 0;
      let charIndex   = 0;
      let isDeleting  = false;

      const type = () => {
        const current = phrases[phraseIndex];

        if (!isDeleting) {
          el.textContent = current.slice(0, ++charIndex);
          if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 2200);
            return;
          }
        } else {
          el.textContent = current.slice(0, --charIndex);
          if (charIndex === 0) {
            isDeleting     = false;
            phraseIndex    = (phraseIndex + 1) % phrases.length;
          }
        }
        setTimeout(type, isDeleting ? 45 : 90);
      };

      // Inicia después de la animación del hero
      setTimeout(type, 900);
    }
  };
})();

/* ── PARALLAX ───────────────────────────────────────────────
   Responsabilidad: efecto de profundidad en el fondo del hero.
   Solo en desktop para no afectar rendimiento móvil.
──────────────────────────────────────────────────────────── */
const ParallaxModule = (() => ({
  init() {
    const bg = document.getElementById('hero-bg');
    if (!bg || window.innerWidth < 768) return;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        bg.style.transform = `translateY(${y * 0.28}px) scale(1.06)`;
      }
    }, { passive: true });
  }
}))();

/* ── CONTADORES ANIMADOS ────────────────────────────────────
   Responsabilidad: animar números de estadísticas al entrar
   en viewport (se activa una sola vez por elemento).
──────────────────────────────────────────────────────────── */
const CounterModule = (() => ({
  init() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const sufijo = el.dataset.sufijo || '';
        const step   = target / 60;
        let current  = 0;

        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current) + sufijo;
          if (current >= target) clearInterval(timer);
        }, 22);

        observer.unobserve(el);
      });
    }, { threshold: .5 });

    // Observar después de que el renderer haya construido el DOM
    setTimeout(() => {
      document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
    }, 200);
  }
}))();

/* ── ANTES / DESPUÉS SLIDER ─────────────────────────────────
   Responsabilidad: slider interactivo de comparación de imágenes.
──────────────────────────────────────────────────────────── */
const SliderModule = (() => {
  function updateSlider(card, value) {
    const pct    = value + '%';
    const after  = card.querySelector('.ad-after');
    const line   = card.querySelector('.ad-line');
    const handle = card.querySelector('.ad-handle');
    if (after)  after.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    if (line)   line.style.left = pct;
    if (handle) handle.style.left = pct;
  }

  return {
    init() {
      // Re-run after renderer builds the AD section
      setTimeout(() => {
        document.querySelectorAll('.ad-card').forEach(card => {
          const slider = card.querySelector('.ad-slider');
          if (!slider) return;
          updateSlider(card, 50);
          slider.addEventListener('input', () => updateSlider(card, slider.value));
        });
      }, 150);
    }
  };
})();

/* ── FAQ ────────────────────────────────────────────────────
   Responsabilidad: acordeón de preguntas frecuentes.
──────────────────────────────────────────────────────────── */
const FaqModule = (() => ({
  init() {
    // Delegación de eventos en el contenedor
    setTimeout(() => {
      document.getElementById('faq-list')
        ?.addEventListener('click', e => {
          const btn = e.target.closest('.faq-question');
          if (!btn) return;

          const item   = btn.closest('.faq-item');
          const isOpen = item.classList.contains('open');

          // Cierra todos los demás
          document.querySelectorAll('.faq-item.open').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
          });

          // Abre el clickeado (si estaba cerrado)
          if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
          }
        });
    }, 150);
  }
}))();

/* ── FORMULARIO MULTI-PASO ──────────────────────────────────
   Responsabilidad: flujo de 3 pasos para agendar cita.
   Al enviar, construye el mensaje de WhatsApp con los datos.
──────────────────────────────────────────────────────────── */
const MultiStepFormModule = (() => {
  const TOTAL_STEPS = 3;
  let currentStep   = 0;

  function getEl(id)   { return document.getElementById(id); }
  function getStep(i)  { return getEl(`step-${i}`); }

  // Actualiza los indicadores visuales de pasos
  function updateIndicator() {
    document.querySelectorAll('.step-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentStep);
      dot.classList.toggle('done',   i < currentStep);
    });
    document.querySelectorAll('.step-line').forEach((line, i) => {
      line.classList.toggle('done', i < currentStep);
    });
  }

  function goToStep(index) {
    getStep(currentStep)?.classList.remove('active');
    currentStep = index;
    getStep(currentStep)?.classList.add('active');
    updateIndicator();
  }

  // Construye el mensaje de WhatsApp con todos los datos del form
  function buildWhatsAppMessage() {
    const selectedServices = Array.from(
      document.querySelectorAll('.service-chip.selected')
    ).map(c => c.textContent).join(', ');

    const nombre  = getEl('f-nombre')?.value   || '—';
    const telefono= getEl('f-telefono')?.value  || '—';
    const email   = getEl('f-email')?.value     || '—';
    const fecha   = getEl('f-fecha')?.value     || '—';
    const horario = getEl('f-horario')?.value   || '—';
    const mensaje = getEl('f-mensaje')?.value   || '—';

    return encodeURIComponent(
      `¡Hola! Me gustaría agendar una cita.\n\n` +
      `*Servicios:* ${selectedServices || 'Por confirmar'}\n` +
      `*Nombre:* ${nombre}\n` +
      `*Teléfono:* ${telefono}\n` +
      `*Correo:* ${email}\n` +
      `*Fecha preferida:* ${fecha}\n` +
      `*Horario:* ${horario}\n` +
      `*Notas:* ${mensaje}`
    );
  }

  function showSuccess() {
    const { whatsapp } = window.FC_CONFIG.salon;
    const waMsg = buildWhatsAppMessage();
    const successWaEl = getEl('success-wa');
    if (successWaEl) successWaEl.href = `https://wa.me/${whatsapp}?text=${waMsg}`;

    getStep(currentStep)?.classList.remove('active');
    getEl('steps-indicator').style.display = 'none';
    getEl('form-success')?.classList.add('show');
  }

  return {
    init() {
      setTimeout(() => {
        // Chips de servicio
        document.getElementById('service-chips')
          ?.addEventListener('click', e => {
            const chip = e.target.closest('.service-chip');
            if (!chip) return;
            chip.classList.toggle('selected');
            const count = document.querySelectorAll('.service-chip.selected').length;
            const counter = getEl('chips-counter');
            if (counter) counter.textContent = `${count} seleccionado${count !== 1 ? 's' : ''}`;
          });

        // Botones de navegación (delegación en el form container)
        document.querySelector('.form-container')
          ?.addEventListener('click', e => {
            const action = e.target.dataset.formAction;
            if (action === 'next'   && currentStep < TOTAL_STEPS - 1) goToStep(currentStep + 1);
            if (action === 'prev'   && currentStep > 0)                goToStep(currentStep - 1);
            if (action === 'submit')                                    showSuccess();
          });
      }, 200);
    }
  };
})();