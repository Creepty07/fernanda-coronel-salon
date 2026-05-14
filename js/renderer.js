/**
 * ============================================================
 * RENDERER — Lee FC_CONFIG y construye el DOM de cada sección.
 * Responsabilidad única: renderizar contenido desde config.
 * Cada método privado maneja una sola sección.
 * ============================================================
 */

const Renderer = (() => {

  // ── Utilidades privadas ──────────────────────────────────
  const $ = id => document.getElementById(id);
  const cfg = () => window.FC_CONFIG;
  const waLink = () => {
    const { whatsapp, whatsappMsg } = cfg().salon;
    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;
  };

  // ── SEO & meta tags ──────────────────────────────────────
  function renderSEO() {
    const { seo, salon } = cfg();
    document.title = seo.title;
    _meta('description', seo.description);
    _meta('keywords',    seo.keywords);
    _metaOG('og:title',       seo.title);
    _metaOG('og:description', seo.description);
    _metaOG('og:image',       seo.ogImage);
    _metaOG('og:url',         seo.canonical);
    _metaOG('og:type',        'website');
    _metaOG('twitter:card',   'summary_large_image');

    // Schema.org LocalBusiness
    const schema = {
      "@context":    "https://schema.org",
      "@type":       "BeautySalon",
      "name":        `${salon.nombre} Salón`,
      "description": seo.description,
      "address":     { "@type": "PostalAddress", "addressLocality": "Juriquilla", "addressRegion": "Querétaro", "addressCountry": "MX" },
      "telephone":   salon.telefono,
      "url":         seo.canonical,
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
  }
  function _meta(name, content) {
    if (!content) return;
    const t = document.createElement('meta');
    t.name = name; t.content = content;
    document.head.appendChild(t);
  }
  function _metaOG(property, content) {
    if (!content) return;
    const t = document.createElement('meta');
    t.setAttribute('property', property); t.content = content;
    document.head.appendChild(t);
  }

  // ── Fonts ────────────────────────────────────────────────
  function renderFonts() {
    const { googleFontsUrl } = cfg().tipografias;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = googleFontsUrl;
    document.head.appendChild(link);
  }

  // ── Navbar ───────────────────────────────────────────────
  function renderNav() {
    const { nombre, tagline } = cfg().salon;
    const el = $('nav-logo-text');
    if (el) el.textContent = nombre.toUpperCase();
    const sub = $('nav-logo-sub');
    if (sub) sub.textContent = tagline;
  }

  // ── Banner de oferta ─────────────────────────────────────
  function renderBanner() {
    const banner = cfg().banner;
    const el = $('offer-banner');
    if (!el) return;

    if (!banner) {
      el.classList.add('hidden');
      return;
    }
    const textEl = el.querySelector('.offer-text');
    const ctaEl  = el.querySelector('.offer-cta');
    if (textEl) textEl.textContent = banner.texto;
    if (ctaEl)  { ctaEl.textContent = banner.cta; ctaEl.href = banner.ctaUrl; }

    $('offer-close')?.addEventListener('click', () => el.classList.add('hidden'));
  }

  // ── Hero ─────────────────────────────────────────────────
  function renderHero() {
    const { hero, salon } = cfg();
    const bg = $('hero-bg');
    if (bg) bg.style.backgroundImage = `url('${hero.imagenUrl}')`;

    const subtitle = $('hero-subtitle');
    if (subtitle) subtitle.textContent = salon.subtitulo;

    const cta1 = $('hero-cta1');
    if (cta1) { cta1.textContent = hero.cta1; cta1.href = waLink(); cta1.target = '_blank'; cta1.rel = 'noopener'; }

    const cta2 = $('hero-cta2');
    if (cta2) { cta2.textContent = hero.cta2; cta2.href = '#servicios'; }

    const trustEl = $('hero-trust');
    if (trustEl && hero.trustBadges?.length) {
      trustEl.innerHTML = hero.trustBadges.map(b => `
        <div class="trust-item">
          <span class="trust-dot"></span>${b}
        </div>`).join('');
    }
    setTimeout(() => $('hero')?.classList.add('loaded'), 50);
  }

  // ── Marcas ───────────────────────────────────────────────
  function renderMarcas() {
    const el = $('marcas-track');
    if (!el) return;
    el.innerHTML = cfg().marcas
      .map(m => `<span class="marca-item">${m}</span>`)
      .join('');
  }

  // ── Sobre ────────────────────────────────────────────────
  function renderSobre() {
    const { sobre } = cfg();
    const img = $('sobre-imagen');
    if (img) { img.src = sobre.imagen; img.alt = 'Fernanda Coronel Salón'; img.loading = 'lazy'; }

    const parrafos = $('sobre-parrafos');
    if (parrafos) {
      parrafos.innerHTML = sobre.parrafos
        .map(p => `<p>${p}</p>`)
        .join('');
    }

    const stats = $('sobre-stats');
    if (stats) {
      stats.innerHTML = sobre.stats.map((s, i) => `
        <div class="stat-item reveal reveal-delay-${i + 1}">
          <span class="stat-numero" data-target="${s.n}" data-sufijo="${s.sufijo}">
            0${s.sufijo}
          </span>
          <span class="stat-label">${s.label}</span>
        </div>`).join('');
    }
  }

  // ── Servicios ────────────────────────────────────────────
  function renderServicios() {
    const el = $('servicios-grid');
    if (!el) return;
    el.innerHTML = cfg().servicios.map((s, i) => `
      <article class="servicio-card reveal reveal-delay-${(i % 4) + 1}" data-tag="${s.tag}">
        <div class="servicio-img-wrap">
          <img src="${s.imagen}" alt="${s.nombre}" loading="lazy">
        </div>
        <div class="servicio-body">
          <span class="servicio-icon">${s.icono}</span>
          <h3 class="servicio-nombre">${s.nombre}</h3>
          <p class="servicio-desc">${s.desc}</p>
          ${s.subcategorias.length ? `
            <div class="servicio-subcats">
              ${s.subcategorias.map(sc => `<span class="subcat-tag">${sc}</span>`).join('')}
            </div>` : ''}
        </div>
      </article>`).join('');
  }

  // ── Precios ──────────────────────────────────────────────
  function renderPrecios() {
    const el = $('precios-grid');
    if (!el) return;
    el.innerHTML = cfg().precios.map((p, i) => `
      <div class="precio-card reveal reveal-delay-${(i % 3) + 1}${p.destacado ? ' featured' : ''}">
        ${p.badge ? `<div class="precio-badge">${p.badge}</div>` : ''}
        <span class="precio-icon">${p.icono}</span>
        <h3 class="precio-nombre">${p.nombre}</h3>
        <div class="precio-rango">${p.rango} <span>${p.sufijo}</span></div>
        <p class="precio-nota">${p.nota}</p>
        <ul class="precio-items">
          ${p.items.map(it => `<li>${it}</li>`).join('')}
        </ul>
        <a href="${waLink()}" target="_blank" rel="noopener"
           class="btn ${p.destacado ? 'btn-primary' : 'btn-outline'}"
           style="width:100%;justify-content:center;padding:.75rem">
          Consultar precio
        </a>
      </div>`).join('');
  }

  // ── Antes / Después ──────────────────────────────────────
  function renderAntesYdespues() {
    const el = $('ad-grid');
    if (!el) return;
    el.innerHTML = cfg().antesYdespues.map((ad, i) => `
      <div class="ad-card reveal reveal-delay-${i + 1}">
        <div class="ad-before" style="background-image:url('${ad.antes}')"></div>
        <div class="ad-after"  style="background-image:url('${ad.despues}')"></div>
        <input type="range" class="ad-slider" min="0" max="100" value="50" aria-label="Slider antes/después">
        <div class="ad-line"></div>
        <div class="ad-handle">‹ ›</div>
        <div class="ad-labels">
          <span class="ad-label">Antes</span>
          <span class="ad-label">Después</span>
        </div>
        <div class="ad-service-label">${ad.servicio}</div>
      </div>`).join('');
  }

  // ── Galería ──────────────────────────────────────────────
  function renderGaleria() {
    const { galeria, servicios } = cfg();
    const tagLabels = {};
    servicios.forEach(s => { tagLabels[s.tag] = s.nombre; });

    const tags = ['todos', ...new Set(galeria.map(g => g.tag))];
    const filtersEl = $('galeria-filters');
    if (filtersEl) {
      filtersEl.innerHTML = tags
        .map(t => `
          <button class="filter-btn ${t === 'todos' ? 'active' : ''}" data-filter="${t}">
            ${t === 'todos' ? 'Todos' : (tagLabels[t] || t)}
          </button>`)
        .join('');

      filtersEl.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        const filter = btn.dataset.filter;
        filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.galeria-item')
          .forEach(item => item.classList.toggle('hidden', filter !== 'todos' && item.dataset.tag !== filter));
      });
    }

    const gridEl = $('galeria-grid');
    if (gridEl) {
      gridEl.innerHTML = galeria.map(item => `
        <div class="galeria-item reveal" data-tag="${item.tag}"
             data-lightbox="${item.src}" data-alt="${item.alt}">
          <img src="${item.src}" alt="${item.alt}" loading="lazy">
          <div class="galeria-item-overlay">
            <span class="galeria-zoom-icon">+</span>
          </div>
        </div>`).join('');
    }
  }

  // ── Testimonios ──────────────────────────────────────────
  function renderTestimonios() {
    const el = $('testimonios-grid');
    if (!el) return;
    el.innerHTML = cfg().testimonios.map((t, i) => `
      <div class="testimonio-card reveal reveal-delay-${(i % 4) + 1}">
        <div class="testimonio-stars">${'★'.repeat(t.estrellas)}</div>
        <p class="testimonio-texto">"${t.texto}"</p>
        <div class="testimonio-autor">
          <div class="testimonio-avatar">${t.avatar}</div>
          <div>
            <div class="testimonio-nombre">${t.nombre}</div>
            <div class="testimonio-servicio">${t.servicio}</div>
          </div>
        </div>
      </div>`).join('');
  }

  // ── FAQ ──────────────────────────────────────────────────
  function renderFaq() {
    const el = $('faq-list');
    if (!el) return;
    el.innerHTML = cfg().faq.map((f, i) => `
      <div class="faq-item reveal reveal-delay-${(i % 3) + 1}">
        <button class="faq-question" aria-expanded="false">
          ${f.pregunta}
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" role="region">
          <p>${f.respuesta}</p>
        </div>
      </div>`).join('');
  }

  // ── Instagram ────────────────────────────────────────────
  function renderInstagram() {
    const { redes } = cfg();
    const handleEl = $('instagram-handle');
    if (handleEl) handleEl.textContent = redes.instagramHandle;

    const btnEl = $('instagram-btn');
    if (btnEl) btnEl.href = redes.instagram;

    const previewEl = $('instagram-preview');
    if (previewEl) {
      previewEl.innerHTML = Array(4).fill(0).map(() => `
        <a href="${redes.instagram}" target="_blank" rel="noopener" class="insta-placeholder">
          <span class="insta-icon">▷</span>
          <span>Ver en Instagram</span>
        </a>`).join('');
    }
  }

  // ── Contacto ─────────────────────────────────────────────
  function renderContacto() {
    const { salon, redes, servicios } = cfg();
    const wa = waLink();

    const waEl = $('contacto-wa');
    if (waEl) waEl.href = wa;

    const dirEl = $('contacto-direccion');
    if (dirEl) dirEl.textContent = salon.direccion;

    const telEl = $('contacto-telefono');
    if (telEl) { telEl.textContent = salon.telefono; telEl.href = `tel:+52${salon.telefono}`; }

    const socialEl = $('contacto-social');
    if (socialEl) {
      socialEl.innerHTML = [
        { l: 'IG', h: redes.instagram },
        { l: 'FB', h: redes.facebook },
        { l: 'TT', h: redes.tiktok },
      ].map(x => `<a href="${x.h}" target="_blank" rel="noopener" class="social-link">${x.l}</a>`)
       .join('');
    }

    // Chips de servicio en el formulario
    const chipsEl = $('service-chips');
    if (chipsEl) {
      const unique = [...new Map(servicios.map(s => [s.tag, s.nombre])).values()];
      chipsEl.innerHTML = unique
        .map(n => `<button class="service-chip" type="button">${n}</button>`)
        .join('');
    }

    // WhatsApp flotante y success link
    const floatEl = $('whatsapp-float');
    if (floatEl) floatEl.href = wa;
    const successWa = $('success-wa');
    if (successWa) successWa.href = wa;
  }

  // ── Footer ───────────────────────────────────────────────
  function renderFooter() {
    const { salon, redes, servicios } = cfg();

    const yearEl = $('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const socialEl = $('footer-social');
    if (socialEl) {
      socialEl.innerHTML = [
        { l: 'IG', h: redes.instagram },
        { l: 'FB', h: redes.facebook },
        { l: 'TT', h: redes.tiktok },
      ].map(x => `<a href="${x.h}" target="_blank" rel="noopener">${x.l}</a>`)
       .join('');
    }

    const serviciosEl = $('footer-servicios');
    if (serviciosEl) {
      serviciosEl.innerHTML = servicios.slice(0, 6)
        .map(s => `<li><a href="#servicios">${s.nombre}</a></li>`)
        .join('');
    }
  }

  // ── API pública ──────────────────────────────────────────
  return {
    init() {
      renderFonts();
      renderSEO();
      renderNav();
      renderBanner();
      renderHero();
      renderMarcas();
      renderSobre();
      renderServicios();
      renderPrecios();
      renderAntesYdespues();
      renderGaleria();
      renderTestimonios();
      renderFaq();
      renderInstagram();
      renderContacto();
      renderFooter();
    }
  };

})();