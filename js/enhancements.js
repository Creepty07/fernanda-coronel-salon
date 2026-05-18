/**
 * ============================================================
 * ENHANCEMENTS — Cursor, Typewriter, Parallax, Counters,
 *                FAQ, Formulario Multi-paso.
 * Cada módulo es independiente y auto-contenido.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  CursorModule.init();
  TypewriterModule.init();
  ParallaxModule.init();
  CounterModule.init();
  FaqModule.init();
  MultiStepFormModule.init();
});

/* ── CURSOR ─────────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const CursorModule = (() => {
  const isTouch = () =>
    window.matchMedia('(hover:none)').matches ||
    window.matchMedia('(pointer:coarse)').matches;

  return {
    init() {
      if (isTouch()) return;
      const dot  = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      if (!dot || !ring) return;

      let mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px'; dot.style.top = my + 'px';
      }, { passive: true });

      const animate = () => {
        rx += (mx - rx) * 0.09;
        ry += (my - ry) * 0.09;
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(animate);
      };
      animate();

      const sel = 'a,button,[data-lightbox],.servicio-card,.precio-card,.faq-question,.service-chip,.filter-btn,.ad-card,.insta-item';
      const addHover = () => {
        document.querySelectorAll(sel).forEach(el => {
          el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
          el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
        });
      };
      setTimeout(addHover, 300); // después del render

      document.addEventListener('mousedown', () => ring.classList.add('clicking'));
      document.addEventListener('mouseup',   () => ring.classList.remove('clicking'));
      document.addEventListener('mouseleave', () => { dot.style.opacity='0'; ring.style.opacity='0'; });
      document.addEventListener('mouseenter', () => { dot.style.opacity='1'; ring.style.opacity='.6'; });
    },
  };
})();

/* ── TYPEWRITER ─────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const TypewriterModule = (() => ({
  init() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    const phrases = window.FC?.hero?.typewriterPhrases || [];
    if (!phrases.length) return;

    let pi = 0, ci = 0, deleting = false;
    const typeDelay = ch => {
      if (ch === ',' || ch === ';') return 180 + Math.random() * 80;
      if (ch === ' ') return 50 + Math.random() * 30;
      return 72 + Math.random() * 68;
    };
    const type = () => {
      const cur = phrases[pi];
      el.textContent = deleting ? cur.slice(0, --ci) : cur.slice(0, ++ci);
      if (!deleting && ci === cur.length) { deleting = true; setTimeout(type, 2600); return; }
      if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); return; }
      setTimeout(type, deleting ? 28 + Math.random() * 20 : typeDelay(cur[ci]));
    };
    setTimeout(type, 1200);
  },
}))();

/* ── PARALLAX ───────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const ParallaxModule = (() => ({
  init() {
    const bg = document.getElementById('hero-bg');
    if (!bg || window.innerWidth < 768) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight)
        bg.style.transform = `translateY(${y * 0.32}px) scale(1.1)`;
    }, { passive: true });
  },
}))();

/* ── COUNTERS ───────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const CounterModule = (() => ({
  init() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const sufijo = el.dataset.sufijo || '';
        const duration = 1600;
        const start = performance.now();
        const easeOut = t => 1 - Math.pow(1 - t, 3);
        const tick = now => {
          const t = Math.min((now - start) / duration, 1);
          el.textContent = Math.round(easeOut(t) * target) + sufijo;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: .5 });

    setTimeout(() =>
      document.querySelectorAll('[data-target]').forEach(el => obs.observe(el)), 200);
  },
}))();

/* ── FAQ ────────────────────────────────────────────────────
──────────────────────────────────────────────────────────── */
const FaqModule = (() => ({
  init() {
    setTimeout(() => {
      document.getElementById('faq-list')
        ?.addEventListener('click', e => {
          const btn = e.target.closest('.faq-question');
          if (!btn) return;
          const item   = btn.closest('.faq-item');
          const isOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item.open').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
          });
          if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
        });
    }, 150);
  },
}))();

/* ── MULTI-STEP FORM ────────────────────────────────────────
   Responsabilidad: flujo de pasos + generación del mensaje WA.
   Sin campo teléfono (eliminado por requerimiento).
──────────────────────────────────────────────────────────── */
const MultiStepFormModule = (() => {
  const TOTAL = 3;
  let step = 0;

  const $ = id => document.getElementById(id);

  function updateIndicator() {
    document.querySelectorAll('.step-dot').forEach((d, i) => {
      d.classList.toggle('active', i === step);
      d.classList.toggle('done',   i < step);
    });
    document.querySelectorAll('.step-line').forEach((l, i) =>
      l.classList.toggle('done', i < step));
  }

  function goTo(i) {
    $('step-' + step)?.classList.remove('active');
    step = Math.max(0, Math.min(i, TOTAL - 1));
    $('step-' + step)?.classList.add('active');
    updateIndicator();
  }

  // Construye el mensaje de WhatsApp de forma limpia
  function buildWAMessage() {
    const services = Array.from(document.querySelectorAll('.service-chip.selected'))
      .map(c => c.textContent.trim()).join(', ');
    const nombre  = $('f-nombre')?.value.trim()  || '—';
    const email   = $('f-email')?.value.trim()   || '—';
    const fecha   = $('f-fecha')?.value          || '—';
    const horario = $('f-horario')?.value        || '—';
    const nota    = $('f-mensaje')?.value.trim() || '—';

    return (
      `¡Hola! Me gustaría agendar una cita.\n\n` +
      `*Servicios de interés:* ${services || 'Por confirmar'}\n` +
      `*Nombre:* ${nombre}\n` +
      `*Correo:* ${email}\n` +
      `*Fecha preferida:* ${fecha}\n` +
      `*Horario:* ${horario}\n` +
      `*Notas:* ${nota}`
    );
  }

  function showSuccess() {
    const waNum = window.FC?.contacto?.whatsapp;
    const msg   = encodeURIComponent(buildWAMessage());
    const link  = `https://wa.me/${waNum}?text=${msg}`;

    const successWa = $('success-wa');
    if (successWa) successWa.href = link;

    $('step-' + step)?.classList.remove('active');
    $('steps-indicator').style.display = 'none';
    $('form-success')?.classList.add('show');

    dataLayer.push({
      event: "formulario_whatsapp_enviado"
    });

    // Abre WhatsApp automáticamente
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  return {
    init() {
      setTimeout(() => {
        // Chips de servicio
        $('service-chips')?.addEventListener('click', e => {
          const chip = e.target.closest('.service-chip');
          if (!chip) return;
          chip.classList.toggle('selected');
          const count = document.querySelectorAll('.service-chip.selected').length;
          const counter = $('chips-counter');
          if (counter) {
            const fn = window.FC?.textos?.form?.seleccionados;
            counter.textContent = fn ? fn(count) : `${count} seleccionados`;
          }
        });

        // Navegación por delegación en el contenedor
        document.querySelector('.form-container')
          ?.addEventListener('click', e => {
            const action = e.target.dataset.formAction;
            if (action === 'next'   && step < TOTAL - 1) goTo(step + 1);
            if (action === 'prev'   && step > 0)          goTo(step - 1);
            if (action === 'submit') {
              const fi = $('f-fecha');
              if (fi?.value && new Date(fi.value + 'T00:00:00').getDay() === 0) return;
              showSuccess();
            }
          });
      }, 200);

      const fechaInput = $('f-fecha');
      if (fechaInput) {
        const today = new Date();
        const pad   = n => String(n).padStart(2, '0');
        fechaInput.min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

        fechaInput.addEventListener('change', () => {
          const errEl    = fechaInput.parentElement.querySelector('.fecha-error');
          const isSunday = fechaInput.value && new Date(fechaInput.value + 'T00:00:00').getDay() === 0;
          if (isSunday) {
            if (!errEl) {
              const p = document.createElement('p');
              p.className = 'fecha-error';
              p.style.cssText = 'color:var(--color-gold);font-size:.82rem;margin-top:.35rem';
              p.textContent = 'Estamos cerrados los domingos. Por favor elige otro día.';
              fechaInput.parentElement.appendChild(p);
            }
          } else {
            errEl?.remove();
          }
        });
      }
    },
  };
})();