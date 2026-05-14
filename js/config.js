/**
 * ============================================================
 * FERNANDA CORONEL SALÓN — CONFIGURACIÓN CENTRAL
 * ============================================================
 * Un solo lugar para actualizar TODO el contenido del sitio.
 * No es necesario tocar ningún otro archivo para cambios
 * de contenido, colores, tipografías, servicios o links.
 */

window.FC_CONFIG = {

  // ── INFORMACIÓN DEL SALÓN ──────────────────────────────
  salon: {
    nombre:        "Fernanda Coronel",
    tagline:       "SALÓN · JURIQUILLA",
    slogan:        "Belleza con propósito,\nestilo con esencia",
    subtitulo:     "Salón premium en Juriquilla, Querétaro",
    direccion:     "Juriquilla, Querétaro, México",
    telefono:      "4427396406",
    whatsapp:      "4427396406",
    whatsappMsg:   "¡Hola! Me gustaría agendar una cita en Fernanda Coronel Salón.",
    email:         "citas@fernandacoronel.com",
  },

  // ── REDES SOCIALES ─────────────────────────────────────
  redes: {
    instagram:       "https://www.instagram.com/fernandacoronelsalon/",
    facebook:        "https://www.facebook.com/fernanda.coronel.62589",
    tiktok:          "https://www.tiktok.com/@fernandacoronelsalon",
    instagramHandle: "@fernandacoronelsalon",
  },

  // ── COLORES (modo claro y oscuro) ──────────────────────
  // Cambia aquí para rediseñar toda la paleta sin tocar CSS.
  colores: {
    claro: {
      "--color-bg":           "#FAF7F2",
      "--color-bg-alt":       "#F2EDE4",
      "--color-surface":      "#FFFFFF",
      "--color-border":       "#E8DFD0",
      "--color-text":         "#1A1410",
      "--color-text-muted":   "#7A6A58",
      "--color-gold":         "#B8965A",
      "--color-gold-light":   "#D4B483",
      "--color-gold-dark":    "#8A6A3A",
      "--color-cream":        "#F5EDD8",
      "--color-overlay":      "rgba(26,20,16,0.55)",
    },
    oscuro: {
      "--color-bg":           "#0E0B08",
      "--color-bg-alt":       "#171210",
      "--color-surface":      "#1E1812",
      "--color-border":       "#2E251A",
      "--color-text":         "#F5EDD8",
      "--color-text-muted":   "#A89070",
      "--color-gold":         "#C9A96E",
      "--color-gold-light":   "#E0C48A",
      "--color-gold-dark":    "#A07840",
      "--color-cream":        "#2A2018",
      "--color-overlay":      "rgba(0,0,0,0.65)",
    },
  },

  // ── TIPOGRAFÍAS ────────────────────────────────────────
  tipografias: {
    display: "'Cinzel', serif",
    body:    "'Cormorant Garamond', serif",
    ui:      "'Jost', sans-serif",
    // URL de Google Fonts
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap",
  },

  // ── BANNER DE ANUNCIO ──────────────────────────────────
  // Pon null para desactivarlo completamente.
  banner: {
    texto:  "✦  Consulta gratuita en tu primera visita — Menciona esta página",
    cta:    "Agendar ahora",
    ctaUrl: "#contacto",
  },
  // banner: null,  ← descomenta esta línea para ocultarlo

  // ── HERO ───────────────────────────────────────────────
  hero: {
    imagenUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80",
    videoUrl:  null, // pon una URL .mp4 para activar video de fondo
    // Frases que rota el efecto typewriter
    typewriterPhrases: [
      "Belleza con propósito",
      "Estilo con esencia",
      "Técnica impecable",
      "Tu mejor versión",
    ],
    cta1: "Agenda tu cita",
    cta2: "Ver servicios",
    trustBadges: [
      "+500 clientas satisfechas",
      "10+ años de experiencia",
      "Productos premium certificados",
    ],
  },

  // ── SECCIÓN SOBRE ──────────────────────────────────────
  sobre: {
    imagen:   "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80",
    parrafos: [
      "En Fernanda Coronel Salón, cada visita es una experiencia diseñada para realzar tu esencia única. Somos especialistas en técnicas de coloración, extensiones y cuidado capilar de alto nivel.",
      "Nuestra filosofía se basa en la escucha activa, la técnica impecable y el uso de productos de la más alta calidad. Cada detalle importa, desde la consulta inicial hasta el resultado final.",
      "Más de una década de experiencia avalan nuestro compromiso con la excelencia. Bienvenida a un espacio donde tú eres la protagonista.",
    ],
    // n: valor numérico para el contador animado
    stats: [
      { n: 10,  sufijo: "+", label: "Años de experiencia" },
      { n: 500, sufijo: "+", label: "Clientas satisfechas" },
      { n: 10,  sufijo: "",  label: "Técnicas de extensiones" },
    ],
  },

  // ── MARCAS / PRODUCTOS ─────────────────────────────────
  marcas: ["Wella", "Kérastase", "L'Oréal Professionnel", "Redken", "Olaplex", "Schwarzkopf"],

  // ── SERVICIOS ──────────────────────────────────────────
  servicios: [
    {
      id: "efectos-color", tag: "color", icono: "✦",
      nombre: "Efectos de Color",
      desc: "Transformaciones que realzan tu personalidad con técnicas de colorimetría avanzada.",
      subcategorias: ["Balayage", "Baby lights", "Luces", "Diseño de color", "Transparencias"],
      imagen: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    },
    {
      id: "tintes", tag: "tintes", icono: "◈",
      nombre: "Tintes",
      desc: "Coloración profesional con pigmentos de alta duración que nutren y protegen.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    },
    {
      id: "cortes", tag: "cortes", icono: "✂",
      nombre: "Cortes",
      desc: "Precisión milimétrica adaptada a tu rostro, estilo de vida y personalidad.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    },
    {
      id: "alaciado", tag: "tratamiento", icono: "〰",
      nombre: "Alaciado Permanente",
      desc: "Resultados lisos y naturales de larga duración con fórmulas que respetan tu cabello.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    },
    {
      id: "nanoplastia", tag: "tratamiento", icono: "◇",
      nombre: "Nanoplastía",
      desc: "Alisado y nutrición profunda que elimina el frizz y devuelve suavidad y brillo.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80",
    },
    {
      id: "botox", tag: "tratamiento", icono: "◉",
      nombre: "Botox Capilar",
      desc: "Recupera la juventud de tu cabello con esta técnica de relleno de última generación.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    },
    {
      id: "tratamientos", tag: "tratamiento", icono: "✿",
      nombre: "Tratamientos Capilares",
      desc: "Protocolos personalizados para restaurar, nutrir y transformar tu cabello.",
      subcategorias: ["Hidratación", "Nutrición", "Reparación", "Brillo", "Suavidad"],
      imagen: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    },
    {
      id: "extensiones", tag: "extensiones", icono: "∿",
      nombre: "Extensiones de Cabello",
      desc: "10 técnicas distintas adaptadas a tu tipo de cabello. Resultados naturales y duraderos.",
      subcategorias: ["Keratina", "Microring", "Clip", "Cosidas", "Tapas", "Nano", "Cinta", "Tejido", "Fusión", "Pegadas"],
      imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    },
    {
      id: "peinados", tag: "peinados", icono: "❋",
      nombre: "Peinados",
      desc: "Desde looks casuales hasta peinados de novia. Arte en cada hebra.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
    },
    {
      id: "moldeados", tag: "peinados", icono: "⌀",
      nombre: "Moldeados",
      desc: "Ondas y rizos perfectos con técnicas modernas de moldeado.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1533327325824-76851d408d21?w=600&q=80",
    },
    {
      id: "maquillaje", tag: "maquillaje", icono: "◌",
      nombre: "Maquillaje",
      desc: "Maquillaje profesional para toda ocasión. Tu belleza, nuestra paleta.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80",
    },
    {
      id: "depilaciones", tag: "depilacion", icono: "✵",
      nombre: "Depilaciones",
      desc: "Cera española de calidad para una depilación suave, eficaz y duradera.",
      subcategorias: ["Por área", "Cuerpo completo"],
      imagen: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    },
    {
      id: "diseno-cejas", tag: "cejas", icono: "⌒",
      nombre: "Diseño de Cejas",
      desc: "Diagnóstico facial y diseño personalizado para una mirada perfecta.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1629380447673-cf0572b8b0b7?w=600&q=80",
    },
    {
      id: "laminado-cejas", tag: "cejas", icono: "⌗",
      nombre: "Laminado de Cejas",
      desc: "Cejas con aspecto denso, uniforme y perfectamente definido.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80",
    },
    {
      id: "planchado-cejas", tag: "cejas", icono: "≡",
      nombre: "Planchado de Cejas",
      desc: "Alisa y redefine la dirección del vello para una ceja más ordenada.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80",
    },
    {
      id: "lifting-pestanas", tag: "pestanas", icono: "⌣",
      nombre: "Lifting de Pestañas",
      desc: "Realza tu mirada con un lifting que riza y define tus pestañas desde la raíz.",
      subcategorias: [],
      imagen: "https://images.unsplash.com/photo-1614106457604-c9e7e2e4e4f6?w=600&q=80",
    },
  ],

  // ── PRECIOS ────────────────────────────────────────────
  precios: [
    {
      icono: "✦", nombre: "Efectos de Color",
      rango: "$1,200", sufijo: "/ desde",
      nota: "Precio base para cabello corto. Varía según técnica, largo y densidad.",
      items: ["Balayage", "Baby lights", "Luces y mechas", "Diseño personalizado"],
      destacado: false, badge: null,
    },
    {
      icono: "∿", nombre: "Extensiones",
      rango: "$2,500", sufijo: "/ desde",
      nota: "10 técnicas disponibles. Precio incluye colocación y consulta.",
      items: ["Keratina y fusión", "Microring y nano", "Cosidas y tejido", "Clip y cinta"],
      destacado: true, badge: "Más solicitado",
    },
    {
      icono: "◇", nombre: "Nanoplastía",
      rango: "$1,800", sufijo: "/ desde",
      nota: "Precio para cabello mediano. Incluye tratamiento de nutrición.",
      items: ["Eliminación de frizz", "Nutrición profunda", "Brillo intenso", "Larga duración"],
      destacado: false, badge: null,
    },
    {
      icono: "✂", nombre: "Cortes",
      rango: "$350", sufijo: "/ desde",
      nota: "Diagnóstico facial incluido. Lavado y secado incluidos.",
      items: ["Consulta de imagen", "Corte personalizado", "Acabado profesional", "Recomendaciones"],
      destacado: false, badge: null,
    },
    {
      icono: "◌", nombre: "Maquillaje",
      rango: "$800", sufijo: "/ desde",
      nota: "Maquillaje social, editorial o de novia.",
      items: ["Maquillaje social", "Novia y quinceañera", "Producción editorial", "Prueba incluida"],
      destacado: false, badge: null,
    },
    {
      icono: "⌒", nombre: "Cejas y Pestañas",
      rango: "$350", sufijo: "/ desde",
      nota: "Diseño, laminado, planchado o lifting según tu necesidad.",
      items: ["Diseño personalizado", "Laminado de cejas", "Lifting de pestañas", "Diagnóstico facial"],
      destacado: false, badge: null,
    },
  ],

  // ── ANTES / DESPUÉS ────────────────────────────────────
  antesYdespues: [
    {
      servicio: "Balayage",
      antes:    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&q=80",
      despues:  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    },
    {
      servicio: "Extensiones",
      antes:    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80",
      despues:  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    },
    {
      servicio: "Maquillaje",
      antes:    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
      despues:  "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80",
    },
  ],

  // ── GALERÍA ────────────────────────────────────────────
  galeria: [
    { tag: "color",      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80", alt: "Balayage" },
    { tag: "cortes",     src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80", alt: "Corte" },
    { tag: "extensiones",src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", alt: "Extensiones" },
    { tag: "maquillaje", src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80", alt: "Maquillaje" },
    { tag: "tintes",     src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80", alt: "Tinte" },
    { tag: "tratamiento",src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80", alt: "Tratamiento" },
    { tag: "peinados",   src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80", alt: "Peinado" },
    { tag: "cejas",      src: "https://images.unsplash.com/photo-1629380447673-cf0572b8b0b7?w=800&q=80", alt: "Cejas" },
    { tag: "color",      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", alt: "Color" },
    { tag: "cortes",     src: "https://images.unsplash.com/photo-1533327325824-76851d408d21?w=800&q=80", alt: "Corte femenino" },
    { tag: "peinados",   src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80", alt: "Peinado elegante" },
    { tag: "tratamiento",src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80", alt: "Alaciado" },
  ],

  // ── TESTIMONIOS ────────────────────────────────────────
  testimonios: [
    { nombre: "Valentina R.", servicio: "Balayage",    avatar: "V", estrellas: 5, texto: "El resultado superó todas mis expectativas. Fernanda tiene un talento increíble para el color. Mi cabello nunca había lucido tan natural y luminoso." },
    { nombre: "Isabela M.",   servicio: "Extensiones", avatar: "I", estrellas: 5, texto: "Llevo 3 años siendo clienta y nunca me ha decepcionado. Las extensiones se ven completamente naturales y el trato es siempre excepcional." },
    { nombre: "Camila T.",    servicio: "Nanoplastía", avatar: "C", estrellas: 5, texto: "Desde la primera cita supe que había encontrado mi salón. La nanoplastía fue perfecta — mi cabello está suave, brillante y sin frizz." },
    { nombre: "Sofía A.",     servicio: "Maquillaje",  avatar: "S", estrellas: 5, texto: "Me hicieron el maquillaje para mi boda y fue absolutamente perfecto. Duró todo el día y me veía exactamente como quería." },
  ],

  // ── FAQ ────────────────────────────────────────────────
  faq: [
    { pregunta: "¿Necesito hacer cita previa?",                       respuesta: "Sí, trabajamos únicamente con cita. Esto nos permite dedicarte el tiempo y la atención que mereces. Puedes agendar por WhatsApp, Instagram o el formulario de esta página." },
    { pregunta: "¿Cuánto tarda un balayage o una coloración?",        respuesta: "Depende del resultado deseado y el estado de tu cabello. En promedio, una coloración completa toma entre 2.5 y 4 horas. Te damos un estimado preciso en tu consulta." },
    { pregunta: "¿Qué productos utilizan?",                           respuesta: "Trabajamos exclusivamente con marcas profesionales certificadas como Wella, Kérastase, Olaplex y L'Oréal Professionnel, garantizando salud y durabilidad en cada servicio." },
    { pregunta: "¿Realizan consulta gratuita antes del servicio?",    respuesta: "Sí. Antes de cualquier servicio hacemos una consulta de diagnóstico capilar y asesoría de imagen sin costo. Esto nos permite entender tus objetivos y recomendar el tratamiento ideal." },
    { pregunta: "¿Cómo sé qué técnica de extensiones es la mejor?",  respuesta: "Contamos con 10 técnicas distintas, cada una adecuada para diferente tipo de cabello, estilo de vida y presupuesto. Te lo evaluamos en consulta para darte la opción más adecuada." },
    { pregunta: "¿Puedo llevar referencias de estilo?",               respuesta: "¡Por supuesto! De hecho lo recomendamos. Trae fotos de Instagram, Pinterest o cualquier referencia visual. Eso nos ayuda a entender exactamente el resultado que buscas." },
  ],

  // ── SEO ────────────────────────────────────────────────
  seo: {
    title:       "Fernanda Coronel Salón | Belleza Premium en Juriquilla, Querétaro",
    description: "Salón de belleza profesional en Juriquilla, Querétaro. Especialistas en balayage, extensiones, nanoplastía, cortes y maquillaje de alto nivel. Agenda tu cita.",
    keywords:    "salón de belleza juriquilla, balayage querétaro, extensiones cabello querétaro, nanoplastía querétaro, corte cabello juriquilla, Fernanda Coronel salón",
    ogImage:     "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    canonical:   "https://fernandacoronel.com",
  },

};