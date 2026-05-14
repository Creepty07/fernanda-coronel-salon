/**
 * ============================================================
 * RENDERER — Construye el DOM completo leyendo window.FC.
 * Responsabilidad única: traducir config → HTML.
 * Ningún texto, imagen o link está hardcodeado aquí.
 * ============================================================
 */

const Renderer = (() => {
  const $ = id => document.getElementById(id);
  const cfg = () => window.FC;
  const h = () => window.FC._helpers;

  // SVG icons para redes sociales
  const SOCIAL_ICONS = {
    instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    tiktok:    `<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>`,
    facebook:  `<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    whatsapp:  `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    youtube:   `<svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
    pinterest: `<svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>`,
    twitter:   `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    linkedin:  `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  };

  function socialIconHtml(red, small = false) {
    const icon = SOCIAL_ICONS[red.id] || '';
    const size = small ? 'width:14px;height:14px' : '';
    return `<a href="${h().redHref(red)}" target="_blank" rel="noopener"
              class="social-icon-link" aria-label="${red.nombre}" title="${red.nombre}">
              <svg viewBox="0 0 24 24" style="${size}" fill="currentColor">
                ${icon.replace(/<svg[^>]*>/,'').replace('</svg>','')}
              </svg>
            </a>`;
  }

  // ── SEO ─────────────────────────────────────────────────
  function renderSEO() {
    const { seo, identidad } = cfg();
    document.title = seo.title;
    _meta('description', seo.description);
    _meta('keywords',    seo.keywords);
    _metaOG('og:title',       seo.title);
    _metaOG('og:description', seo.description);
    _metaOG('og:image',       seo.ogImage);
    _metaOG('og:url',         seo.canonical);
    _metaOG('og:type',        'website');
    _metaOG('twitter:card',   'summary_large_image');

    if (identidad.faviconUrl) {
      const link = document.createElement('link');
      link.rel = 'icon'; link.href = identidad.faviconUrl;
      document.head.appendChild(link);
    }

    const schema = {
      "@context": "https://schema.org", "@type": "BeautySalon",
      "name": `${cfg().identidad.nombreLargo} Salón`,
      "description": seo.description,
      "address": { "@type": "PostalAddress", "addressLocality": "Juriquilla", "addressRegion": "Querétaro", "addressCountry": "MX" },
      "telephone": cfg().contacto.telefono, "url": seo.canonical,
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json'; s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
  }
  function _meta(name, content) { if (!content) return; const t = document.createElement('meta'); t.name = name; t.content = content; document.head.appendChild(t); }
  function _metaOG(prop, content) { if (!content) return; const t = document.createElement('meta'); t.setAttribute('property', prop); t.content = content; document.head.appendChild(t); }

  // ── FONTS ────────────────────────────────────────────────
  function renderFonts() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cfg().tipografias.googleFontsUrl;
    document.head.insertBefore(link, document.head.firstChild);
  }

  // ── NAVBAR ───────────────────────────────────────────────
  function renderNav() {
    const { identidad, textos } = cfg();
    const logoWrap = $('nav-logo-wrap');
    if (logoWrap) {
      logoWrap.innerHTML = identidad.logoUrl
        ? `<img class="nav-logo-img" src="${identidad.logoUrl}" alt="${identidad.nombreLargo}">`
        : `<span id="nav-logo-text">${identidad.nombreLargo.toUpperCase()}</span>
           <span>${identidad.tagline}</span>`;
    }
    // Nav links desde textos
    const nl = textos.nav;
    const navLinksEl = $('nav-links');
    if (navLinksEl) navLinksEl.innerHTML = `
      <a href="#sobre">${nl.nosotros}</a>
      <a href="#servicios">${nl.servicios}</a>
      <a href="#precios">${nl.precios}</a>
      <a href="#galeria">${nl.galeria}</a>
      <a href="#faq">${nl.faq}</a>
      <a href="#contacto">${nl.contacto}</a>`;
    const mobileLinksEl = $('mobile-links');
    if (mobileLinksEl) mobileLinksEl.innerHTML = navLinksEl?.innerHTML || '';

    const navAgendar = $('nav-agendar');
    if (navAgendar) navAgendar.textContent = nl.agendarCita;

    // Redes en navbar
    const navSocial = $('nav-social');
    if (navSocial) {
      navSocial.innerHTML = h().redesPara('navbar').map(r => socialIconHtml(r)).join('');
    }
    const mobileSocial = $('mobile-social');
    if (mobileSocial) {
      mobileSocial.innerHTML = h().redesPara('navbar').map(r => socialIconHtml(r)).join('');
    }
  }

  // ── BANNER ───────────────────────────────────────────────
  function renderBanner() {
    const banner = cfg().banner;
    const el = $('offer-banner');
    if (!el) return;
    if (!banner) { el.classList.add('hidden'); return; }

    const textEl = el.querySelector('.offer-text');
    const ctaEl  = el.querySelector('.offer-cta');
    if (textEl) textEl.textContent = banner.texto;
    if (ctaEl)  { ctaEl.textContent = banner.cta; ctaEl.href = banner.ctaUrl; }

    // Ajustar --banner-height para que el hero no quede tapado
    const height = el.offsetHeight || 38;
    document.documentElement.style.setProperty('--banner-height', height + 'px');

    $('offer-close')?.addEventListener('click', () => {
      el.classList.add('hidden');
      document.documentElement.style.setProperty('--banner-height', '0px');
    });
  }

  // ── HERO ─────────────────────────────────────────────────
  function renderHero() {
    const { hero, contacto, textos } = cfg();
    const bg = $('hero-bg');
    if (bg) bg.style.backgroundImage = `url('${hero.imagenUrl}')`;

    $('hero-subtitle') && ($('hero-subtitle').textContent = hero.subtitulo);

    const cta1 = $('hero-cta1');
    if (cta1) { cta1.textContent = hero.cta1Texto; cta1.href = h().waLink(); cta1.target = '_blank'; cta1.rel = 'noopener'; }
    const cta2 = $('hero-cta2');
    if (cta2) { cta2.textContent = hero.cta2Texto; cta2.href = hero.cta2Link; }

    const trustEl = $('hero-trust');
    if (trustEl && hero.trustBadges?.length) {
      trustEl.innerHTML = hero.trustBadges.map(b =>
        `<div class="trust-item"><span class="trust-dot"></span>${b}</div>`).join('');
    }
    setTimeout(() => $('hero')?.classList.add('loaded'), 50);
  }

  // ── MARCAS ───────────────────────────────────────────────
  function renderMarcas() {
    const el = $('marcas-label');
    if (el) el.textContent = cfg().textos.secciones.marcas.label;

    const track = $('marquee-track');
    if (!track) return;
    const items = cfg().marcas.map(m =>
      `<span class="marca-item">
        ${m.logoUrl ? `<img src="${m.logoUrl}" alt="${m.nombre}" style="${m.invertir ? 'filter:invert(1)' : ''}">` : m.nombre}
      </span><span class="marca-sep" aria-hidden="true">·</span>`).join('');
    // Duplicar para loop continuo
    track.innerHTML = `<div class="marquee-group">${items}</div><div class="marquee-group" aria-hidden="true">${items}</div>`;
  }

  // ── SOBRE ────────────────────────────────────────────────
  function renderSobre() {
    const { sobre, textos } = cfg();
    const s = textos.secciones.sobre;
    _sectionHeader('sobre-label', 'sobre-titulo', s.label, s.titulo);

    const img = $('sobre-imagen');
    if (img) { img.src = sobre.imagen; img.alt = 'Fernanda Coronel Salón'; img.loading = 'lazy'; }

    const pEl = $('sobre-parrafos');
    if (pEl) pEl.innerHTML = sobre.parrafos.map(p => `<p>${p}</p>`).join('');

    const statsEl = $('sobre-stats');
    if (statsEl) statsEl.innerHTML = sobre.stats.map((s, i) => `
      <div class="stat-item reveal reveal-delay-${i+1}">
        <span class="stat-numero" data-target="${s.n}" data-sufijo="${s.sufijo}">0${s.sufijo}</span>
        <span class="stat-label">${s.label}</span>
      </div>`).join('');
  }

  // ── SERVICIOS ────────────────────────────────────────────
  function renderServicios() {
    const { servicios, textos } = cfg();
    const s = textos.secciones.servicios;
    _sectionHeader('servicios-label', 'servicios-titulo', s.label, s.titulo);

    const track = $('servicios-track');
    if (!track) return;
    track.innerHTML = servicios.map(s => `
      <div class="carousel-slide">
        <article class="servicio-card" data-tag="${s.tag}">
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
        </article>
      </div>`).join('');
  }

  // ── PRECIOS ──────────────────────────────────────────────
  function renderPrecios() {
    const { precios, textos } = cfg();
    const s = textos.secciones.precios;
    _sectionHeader('precios-label', 'precios-titulo', s.label, s.titulo);
    const notaEl = $('precios-nota');
    if (notaEl) notaEl.textContent = s.nota;

    const track = $('precios-track');
    if (!track) return;
    track.innerHTML = precios.map(p => `
      <div class="carousel-slide">
        <div class="precio-card${p.destacado ? ' featured' : ''}">
          ${p.badge ? `<div class="precio-badge">${p.badge}</div>` : ''}
          <span class="precio-icon">${p.icono}</span>
          <h3 class="precio-nombre">${p.nombre}</h3>
          <div class="precio-rango">${p.rango} <span>${p.sufijo}</span></div>
          <p class="precio-nota">${p.nota}</p>
          <ul class="precio-items">${p.items.map(it => `<li>${it}</li>`).join('')}</ul>
          <a href="${h().waLink()}" target="_blank" rel="noopener"
             class="btn ${p.destacado ? 'btn-primary' : 'btn-outline'}"
             style="width:100%;justify-content:center;padding:.75rem">
            ${textos.precios.consultarBtn}
          </a>
        </div>
      </div>`).join('');

    const disclaimer = $('precios-disclaimer');
    if (disclaimer) disclaimer.textContent = textos.precios.disclaimer;
  }

  // ── ANTES / DESPUÉS ──────────────────────────────────────
  function renderAntesYdespues() {
    const { antesYdespues, textos } = cfg();
    const s = textos.secciones.antesdespues;
    _sectionHeader('ad-label', 'ad-titulo', s.label, s.titulo);
    const instrEl = $('ad-instruccion');
    if (instrEl) instrEl.textContent = s.instruccion;

    const grid = $('ad-grid');
    if (!grid) return;
    grid.innerHTML = antesYdespues.map((ad, i) => `
      <div class="ad-card reveal reveal-delay-${i+1}">
        <div class="ad-before" style="background-image:url('${ad.antes}')"></div>
        <div class="ad-after"  style="background-image:url('${ad.despues}')"></div>
        <input type="range" class="ad-slider" min="0" max="100" value="50"
               aria-label="Slider antes/después">
        <div class="ad-line"></div>
        <div class="ad-handle">‹›</div>
        <div class="ad-labels">
          <span class="ad-label">Antes</span>
          <span class="ad-label">Después</span>
        </div>
        <div class="ad-service-label">${ad.servicio}</div>
      </div>`).join('');
  }

  // ── GALERÍA ──────────────────────────────────────────────
  function renderGaleria() {
    const { galeria, servicios, textos } = cfg();
    const s = textos.secciones.galeria;
    _sectionHeader('galeria-label', 'galeria-titulo', s.label, s.titulo);

    const tagLabels = {};
    servicios.forEach(sv => { tagLabels[sv.tag] = sv.nombre; });
    const tags = ['todos', ...new Set(galeria.items.map(g => g.tag))];

    const filtersEl = $('galeria-filters');
    if (filtersEl) {
      filtersEl.innerHTML = tags.map(t =>
        `<button class="filter-btn ${t === 'todos' ? 'active' : ''}" data-filter="${t}">
          ${t === 'todos' ? 'Todos' : (tagLabels[t] || t)}
         </button>`).join('');
      filtersEl.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        GalleryModule.applyFilter(btn.dataset.filter);
      });
    }

    const gridEl = $('galeria-grid');
    if (gridEl) {
      gridEl.innerHTML = galeria.items.map(item =>
        `<div class="galeria-item reveal" data-tag="${item.tag}"
              data-lightbox="${item.src}" data-alt="${item.alt}">
          <img src="${item.src}" alt="${item.alt}" loading="lazy">
          <div class="galeria-item-overlay">
            <span class="galeria-zoom-icon">+</span>
          </div>
         </div>`).join('');
    }

    const moreBtn = $('gallery-more-btn');
    if (moreBtn) moreBtn.textContent = s.verMas;
  }

  // ── TESTIMONIOS ──────────────────────────────────────────
  function renderTestimonios() {
    const { testimonios, textos } = cfg();
    const s = textos.secciones.testimonios;
    _sectionHeader('testimonios-label', 'testimonios-titulo', s.label, s.titulo);

    const track = $('testimonios-track');
    if (!track) return;
    track.innerHTML = testimonios.map(t => `
      <div class="carousel-slide">
        <div class="testimonio-card">
          <div class="testimonio-stars">${'★'.repeat(t.estrellas)}</div>
          <p class="testimonio-texto">"${t.texto}"</p>
          <div class="testimonio-autor">
            <div class="testimonio-avatar">${t.avatar}</div>
            <div>
              <div class="testimonio-nombre">${t.nombre}</div>
              <div class="testimonio-servicio">${t.servicio}</div>
            </div>
          </div>
        </div>
      </div>`).join('');
  }

  // ── FAQ ──────────────────────────────────────────────────
  function renderFaq() {
    const { faq, textos } = cfg();
    const s = textos.secciones.faq;
    _sectionHeader('faq-label', 'faq-titulo', s.label, s.titulo);

    const list = $('faq-list');
    if (!list) return;
    list.innerHTML = faq.map((f, i) => `
      <div class="faq-item reveal reveal-delay-${(i%3)+1}">
        <button class="faq-question" aria-expanded="false">
          ${f.pregunta}
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" role="region">
          <p>${f.respuesta}</p>
        </div>
      </div>`).join('');
  }

  // ── INSTAGRAM ────────────────────────────────────────────
  function renderInstagram() {
    const { instagram, redes, textos } = cfg();
    const s = textos.secciones.instagram;
    _sectionHeader('instagram-label', 'instagram-titulo', s.label, s.titulo);

    const instaRed = redes.find(r => r.id === 'instagram');
    const handleEl = $('instagram-handle');
    if (handleEl) handleEl.textContent = instaRed?.handle || '';
    const btnEl = $('instagram-btn');
    if (btnEl) { btnEl.textContent = s.cta; btnEl.href = instaRed?.url || '#'; }

    const grid = $('instagram-grid');
    if (!grid) return;
    grid.innerHTML = instagram.previews.map(p => `
      <a href="${p.reelUrl || instaRed?.url || '#'}" target="_blank" rel="noopener"
         class="insta-item${p.reelUrl ? ' insta-item-reel' : ''}">
        <img src="${p.src}" alt="${p.alt}" loading="lazy">
        <div class="insta-item-overlay">
          ${p.reelUrl ? '<span class="insta-play">▷</span>' : ''}
          <span class="insta-label">${p.alt}</span>
        </div>
      </a>`).join('');
  }

  // ── CONTACTO ─────────────────────────────────────────────
  function renderContacto() {
    const { contacto, textos, servicios } = cfg();
    const s = textos.secciones.contacto;
    _sectionHeader('contacto-label', 'contacto-titulo', s.label, s.titulo);
    const descEl = $('contacto-desc');
    if (descEl) descEl.textContent = s.descripcion;

    const dirEl = $('contacto-direccion');
    if (dirEl) dirEl.textContent = contacto.direccion;
    const telEl = $('contacto-telefono');
    if (telEl) { telEl.textContent = contacto.telefono; telEl.href = `tel:+52${contacto.telefono}`; }
    const waEl = $('contacto-wa');
    if (waEl) { waEl.textContent = s.whatsappTexto; waEl.href = h().waLink(); }

    // Horarios
    const horariosEl = $('contacto-horarios');
    if (horariosEl && contacto.horarios?.length) {
      horariosEl.innerHTML = `
        <p class="contacto-item-label">${s.horariosLabel}</p>
        <ul class="horarios-list">
          ${contacto.horarios.map(hr =>
            `<li class="horario-item"><span>${hr.dia}</span><span>${hr.hora}</span></li>`
          ).join('')}
        </ul>`;
    }

    // Mapa
    const mapEl = $('contacto-map');
    if (mapEl && contacto.mapEmbedUrl) {
      mapEl.innerHTML = `<iframe src="${contacto.mapEmbedUrl}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación Fernanda Coronel Salón"></iframe>`;
    } else if (mapEl) {
      mapEl.style.display = 'none';
    }

    // Redes sociales en contacto
    const socialEl = $('contacto-social');
    if (socialEl) {
      socialEl.innerHTML = h().redesPara('contacto').map(r => socialIconHtml(r)).join('');
    }

    // Chips de servicio para el formulario
    const chipsEl = $('service-chips');
    if (chipsEl) {
      const unique = [...new Map(servicios.map(s => [s.tag, s.nombre])).values()];
      chipsEl.innerHTML = unique.map(n =>
        `<button class="service-chip" type="button">${n}</button>`).join('');
    }

    // Textos del formulario
    const ft = textos.form;
    _setText('form-paso1-titulo', ft.paso1titulo);
    _setText('form-paso1-sub',   ft.paso1sub);
    _setText('form-paso2-titulo', ft.paso2titulo);
    _setText('form-paso2-sub',   ft.paso2sub);
    _setText('form-paso3-titulo', ft.paso3titulo);
    _setText('form-paso3-sub',   ft.paso3sub);
    _attr('f-nombre',  'placeholder', ft.nombreLabel);
    _attr('f-email',   'placeholder', ft.emailLabel);
    _attr('f-mensaje', 'placeholder', ft.mensajePlaceholder);
    const horarioSel = $('f-horario');
    if (horarioSel) {
      horarioSel.innerHTML = `<option value="">Selecciona un horario</option>` +
        ft.horarioOpciones.map(o => `<option>${o}</option>`).join('');
    }
    _setText('success-title', ft.successTitulo);
    _setText('success-text',  ft.successTexto);
    const successWa = $('success-wa');
    if (successWa) { successWa.textContent = ft.successWA; successWa.href = h().waLink(); }

    // WhatsApp flotante
    const floatEl = $('whatsapp-float');
    if (floatEl) floatEl.href = h().waLink();
  }

  // ── FOOTER ───────────────────────────────────────────────
  function renderFooter() {
    const { identidad, redes, servicios, textos } = cfg();
    const ft = textos.footer;

    const logoEl = $('footer-logo');
    if (logoEl) {
      logoEl.innerHTML = identidad.logoUrl
        ? `<img class="footer-logo-img" src="${identidad.logoUrl}" alt="${identidad.nombreLargo}">`
        : `<div class="footer-logo-text">${identidad.nombreLargo.toUpperCase()}</div>`;
    }
    const taglineEl = $('footer-tagline');
    if (taglineEl) taglineEl.textContent = identidad.slogan.replace('\n', ' · ');

    const footerSocial = $('footer-social');
    if (footerSocial) {
      footerSocial.innerHTML = h().redesPara('footer').map(r => socialIconHtml(r)).join('');
    }

    const footerSrvs = $('footer-servicios');
    if (footerSrvs) {
      footerSrvs.innerHTML = servicios.slice(0, 6)
        .map(s => `<li><a href="#servicios">${s.nombre}</a></li>`).join('');
    }

    $('footer-year') && ($('footer-year').textContent = new Date().getFullYear());
    const copyEl = $('footer-copy');
    if (copyEl) copyEl.textContent = ft.copyright(new Date().getFullYear());
    const tagEl = $('footer-tagline-bottom');
    if (tagEl) tagEl.textContent = ft.tagline;

    const srvTitle = $('footer-col-servicios-title');
    if (srvTitle) srvTitle.textContent = ft.columnaServicios;
    const salonTitle = $('footer-col-salon-title');
    if (salonTitle) salonTitle.textContent = ft.columnaSalon;
  }

  // ── Helpers privados ─────────────────────────────────────
  function _sectionHeader(labelId, tituloId, label, titulo) {
    const lEl = $(labelId); if (lEl) lEl.textContent = label;
    const tEl = $(tituloId); if (tEl) tEl.textContent = titulo;
  }
  function _setText(id, text) { const el = $(id); if (el && text) el.textContent = text; }
  function _attr(id, attr, val) { const el = $(id); if (el && val) el.setAttribute(attr, val); }

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
    },
  };
})();