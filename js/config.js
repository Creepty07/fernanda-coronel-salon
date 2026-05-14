/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║   FERNANDA CORONEL SALÓN — CONFIGURACIÓN CENTRAL        ║
 * ║   Un único archivo para personalizar TODO el sitio.     ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * Para actualizar el sitio edita SOLO este archivo.
 * No es necesario tocar HTML, CSS ni otros JS.
 */

window.FC = {

  /* ─────────────────────────────────────────────────────────
     IDENTIDAD
  ───────────────────────────────────────────────────────── */
  identidad: {
    nombreCorto:  "FC",
    nombreLargo:  "Fernanda Coronel",
    tagline:      "SALÓN DE BELLEZA · JURIQUILLA",
    slogan:       "Belleza con propósito,\nestilo con esencia",
    descripcion:  "Salón de belleza profesional en Juriquilla, Querétaro",
    // Logo: usa null para mostrar texto, o pon la URL de tu logo
    logoUrl:      "assets/images/logo.png",
    // Favicon: URL o ruta relativa, null = usa el default del navegador
    faviconUrl:   "assets/images/logo.png",
  },

  /* ─────────────────────────────────────────────────────────
     CONTACTO & UBICACIÓN
  ───────────────────────────────────────────────────────── */
  contacto: {
    whatsapp:    "4427396406",
    // Mensaje que se pre-llena al abrir WhatsApp
    whatsappMsgDefault: "¡Hola! Me gustaría agendar una cita en Fernanda Coronel Salón.",
    telefono:    "4427396406",
    email:       "citas@fernandacoronel.com",
    direccion:   "Plaza El Campanar, Blvd. Jurica la Campana 914-Local 5, Manzanares, Jurica Acueducto, 76230 Juriquilla, Qro.",
    horarios: [
      { dia: "Lunes – Viernes", hora: "9:00 – 19:00" },
      { dia: "Sábado",          hora: "9:00 – 17:00" },
      { dia: "Domingo",         hora: "Cerrado" },
    ],
    // Google Maps embed src (iframe) o null para ocultar el mapa
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.0858129366825!2d-100.44504272391123!3d20.706739680863187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d357ec13403f31%3A0x92422c6f13d73dd7!2sFernanda%20Coronel%20sal%C3%B3n%20de%20belleza!5e0!3m2!1ses!2smx!4v1778726507499!5m2!1ses!2smx",
  },

  /* ─────────────────────────────────────────────────────────
     REDES SOCIALES
     Agrega, quita o reordena — el sitio se adapta solo.
     Iconos disponibles: instagram, tiktok, facebook, whatsapp,
                         youtube, pinterest, twitter, linkedin
  ───────────────────────────────────────────────────────── */
  redes: [
    {
      id:     "instagram",
      nombre: "Instagram",
      url:    "https://www.instagram.com/fernandacoronelsalon/",
      handle: "@fernandacoronelsalon",
      // Mostrar en: navbar | footer | contacto | hero
      mostrarEn: ["navbar", "footer", "contacto"],
    },
    {
      id:     "tiktok",
      nombre: "TikTok",
      url:    "https://www.tiktok.com/@fernandacoronelsalon",
      handle: "@fernandacoronelsalon",
      mostrarEn: ["footer", "contacto"],
    },
    {
      id:     "facebook",
      nombre: "Facebook",
      url:    "https://www.facebook.com/fernanda.coronel.62589",
      handle: "Fernanda Coronel Salón",
      mostrarEn: ["footer", "contacto"],
    },
    {
      id:     "whatsapp",
      nombre: "WhatsApp",
      url:    null, // se genera automáticamente desde contacto.whatsapp
      handle: null,
      mostrarEn: ["footer", "contacto"],
    },
  ],

  /* ─────────────────────────────────────────────────────────
     DISEÑO — COLORES
     Edita aquí para cambiar toda la paleta del sitio.
  ───────────────────────────────────────────────────────── */
  colores: {
    claro: {
      "--color-bg":         "#FAF7F2",
      "--color-bg-alt":     "#F2EDE4",
      "--color-surface":    "#FFFFFF",
      "--color-border":     "#E8DFD0",
      "--color-text":       "#1A1410",
      "--color-text-muted": "#7A6A58",
      "--color-gold":       "#B8965A",
      "--color-gold-light": "#D4B483",
      "--color-gold-dark":  "#8A6A3A",
      "--color-cream":      "#F5EDD8",
      "--color-overlay":    "rgba(26,20,16,0.55)",
    },
    oscuro: {
      "--color-bg":         "#0E0B08",
      "--color-bg-alt":     "#171210",
      "--color-surface":    "#1E1812",
      "--color-border":     "#2E251A",
      "--color-text":       "#F5EDD8",
      "--color-text-muted": "#A89070",
      "--color-gold":       "#C9A96E",
      "--color-gold-light": "#E0C48A",
      "--color-gold-dark":  "#A07840",
      "--color-cream":      "#2A2018",
      "--color-overlay":    "rgba(0,0,0,0.65)",
    },
  },

  /* ─────────────────────────────────────────────────────────
     DISEÑO — TIPOGRAFÍAS
  ───────────────────────────────────────────────────────── */
  tipografias: {
    display: "'Cinzel', serif",
    body:    "'Cormorant Garamond', serif",
    ui:      "'Jost', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap",
  },

  /* ─────────────────────────────────────────────────────────
     BANNER DE ANUNCIO
     Pon null para desactivarlo completamente.
  ───────────────────────────────────────────────────────── */
  banner: {
    texto:  "✦  Consulta gratuita en tu primera visita — Menciona esta página",
    cta:    "Agendar ahora",
    ctaUrl: "#contacto",
  },
  // banner: null,

  /* ─────────────────────────────────────────────────────────
     HERO
  ───────────────────────────────────────────────────────── */
  hero: {
    // Imagen de fondo (usa videoUrl para video, imagenUrl para imagen)
    imagenUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80",
    videoUrl:  null,
    typewriterPhrases: [
      "Belleza con propósito",
      "Estilo con esencia",
      "Técnica impecable",
      "Tu mejor versión",
    ],
    cta1Texto: "Agenda tu cita",
    cta2Texto: "Ver servicios",
    cta2Link:  "#servicios",
    subtitulo: "Salón premium en Juriquilla, Querétaro",
    trustBadges: [
      "+500 clientas satisfechas",
      "10+ años de experiencia",
      "Productos premium certificados",
    ],
  },

  /* ─────────────────────────────────────────────────────────
     SECCIÓN SOBRE
  ───────────────────────────────────────────────────────── */
  sobre: {
    imagen:   "assets/images/sobre_img.jpg",
    parrafos: [
      "En Fernanda Coronel Salón, cada visita es una experiencia diseñada para realzar tu esencia única. Somos especialistas en técnicas de coloración, extensiones y cuidado capilar de alto nivel.",
      "Nuestra filosofía se basa en la escucha activa, la técnica impecable y el uso de productos de la más alta calidad. Cada detalle importa, desde la consulta inicial hasta el resultado final.",
      "Más de una década de experiencia avalan nuestro compromiso con la excelencia. Bienvenida a un espacio donde tú eres la protagonista.",
    ],
    stats: [
      { n: 10,  sufijo: "+", label: "Años de experiencia" },
      { n: 500, sufijo: "+", label: "Clientas satisfechas" },
      { n: 10,  sufijo: "",  label: "Técnicas de extensiones" },
    ],
  },

  /* ─────────────────────────────────────────────────────────
     MARCAS
     logoUrl: null = muestra solo el nombre en texto elegante
  ───────────────────────────────────────────────────────── */
  marcas: [
    { nombre: "Wella",                logoUrl: "assets/images/wella.png", invertir: false },
    { nombre: "Kérastase",            logoUrl: "assets/images/kerastase.png", invertir: true },
    { nombre: "L'Oréal Professionnel",logoUrl: "assets/images/loreal.png", invertir: true },
    { nombre: "Redken",               logoUrl: "assets/images/redken.png",invertir: true },
    { nombre: "Olaplex",              logoUrl: "assets/images/olaplex.png", invertir: true },
    { nombre: "Schwarzkopf",          logoUrl: "assets/images/schwarzkopf.png", invertir: true },
  ],

  /* ─────────────────────────────────────────────────────────
     SERVICIOS
  ───────────────────────────────────────────────────────── */
  servicios: [
    { id:"efectos-color", tag:"color",      icono:"✦", nombre:"Efectos de Color",       desc:"Transformaciones que realzan tu personalidad con técnicas de colorimetría avanzada.", subcategorias:["Balayage","Baby lights","Luces","Diseño de color","Transparencias"], imagen:"https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80" },
    { id:"tintes",        tag:"tintes",     icono:"◈", nombre:"Tintes",                 desc:"Coloración profesional con pigmentos de alta duración que nutren y protegen.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
    { id:"cortes",        tag:"cortes",     icono:"✂", nombre:"Cortes",                 desc:"Precisión milimétrica adaptada a tu rostro, estilo de vida y personalidad.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80" },
    { id:"alaciado",      tag:"tratamiento",icono:"〰",nombre:"Alaciado Permanente",     desc:"Resultados lisos y naturales de larga duración con fórmulas que respetan tu cabello.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80" },
    { id:"nanoplastia",   tag:"tratamiento",icono:"◇", nombre:"Nanoplastía",            desc:"Alisado y nutrición profunda que elimina el frizz y devuelve suavidad y brillo.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80" },
    { id:"botox",         tag:"tratamiento",icono:"◉", nombre:"Botox Capilar",          desc:"Recupera la juventud de tu cabello con esta técnica de relleno de última generación.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80" },
    { id:"tratamientos",  tag:"tratamiento",icono:"✿", nombre:"Tratamientos Capilares", desc:"Protocolos personalizados para restaurar, nutrir y transformar tu cabello.", subcategorias:["Hidratación","Nutrición","Reparación","Brillo","Suavidad"], imagen:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80" },
    { id:"extensiones",   tag:"extensiones",icono:"∿", nombre:"Extensiones de Cabello", desc:"10 técnicas distintas adaptadas a tu tipo de cabello. Resultados naturales y duraderos.", subcategorias:["Keratina","Microring","Clip","Cosidas","Tapas","Nano","Cinta","Tejido","Fusión","Pegadas"], imagen:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
    { id:"peinados",      tag:"peinados",   icono:"❋", nombre:"Peinados",               desc:"Desde looks casuales hasta peinados de novia. Arte en cada hebra.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80" },
    { id:"moldeados",     tag:"peinados",   icono:"⌀", nombre:"Moldeados",              desc:"Ondas y rizos perfectos con técnicas modernas de moldeado.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1533327325824-76851d408d21?w=600&q=80" },
    { id:"maquillaje",    tag:"maquillaje", icono:"◌", nombre:"Maquillaje",             desc:"Maquillaje profesional para toda ocasión. Tu belleza, nuestra paleta.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80" },
    { id:"depilaciones",  tag:"depilacion", icono:"✵", nombre:"Depilaciones",           desc:"Cera española de calidad para una depilación suave, eficaz y duradera.", subcategorias:["Por área","Cuerpo completo"], imagen:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80" },
    { id:"diseno-cejas",  tag:"cejas",      icono:"⌒", nombre:"Diseño de Cejas",        desc:"Diagnóstico facial y diseño personalizado para una mirada perfecta.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1629380447673-cf0572b8b0b7?w=600&q=80" },
    { id:"laminado-cejas",tag:"cejas",      icono:"⌗", nombre:"Laminado de Cejas",      desc:"Cejas con aspecto denso, uniforme y perfectamente definido.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80" },
    { id:"planchado-cejas",tag:"cejas",     icono:"≡", nombre:"Planchado de Cejas",     desc:"Alisa y redefine la dirección del vello para una ceja más ordenada.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80" },
    { id:"lifting",       tag:"pestanas",   icono:"⌣", nombre:"Lifting de Pestañas",    desc:"Realza tu mirada con un lifting que riza y define tus pestañas desde la raíz.", subcategorias:[], imagen:"https://images.unsplash.com/photo-1614106457604-c9e7e2e4e4f6?w=600&q=80" },
  ],

  /* ─────────────────────────────────────────────────────────
     PRECIOS
  ───────────────────────────────────────────────────────── */
  precios: [
    { icono:"✦", nombre:"Efectos de Color", rango:"Valoración previa", sufijo:"", nota:"Varía según técnica, largo y densidad del cabello.", items:["Balayage","Baby lights","Luces y mechas","Diseño personalizado"],              destacado:false, badge:null },
    { icono:"∿", nombre:"Extensiones",      rango:"Valoración previa", sufijo:"", nota:"10 técnicas disponibles. Colocación y consulta incluidas.", items:["Keratina y fusión","Microring y nano","Cosidas y tejido","Clip y cinta"], destacado:true,  badge:"Más solicitado" },
    { icono:"◇", nombre:"Nanoplastía",      rango:"Valoración previa", sufijo:"", nota:"Cabello mediano. Tratamiento de nutrición incluido.", items:["Eliminación de frizz","Nutrición profunda","Brillo intenso","Larga duración"],  destacado:false, badge:null },
    { icono:"✂", nombre:"Cortes",           rango:"Valoración previa",   sufijo:"", nota:"Diagnóstico facial, lavado y secado incluidos.", items:["Consulta de imagen","Corte personalizado","Acabado profesional","Recomendaciones"],    destacado:false, badge:null },
    { icono:"◌", nombre:"Maquillaje",       rango:"Valoración previa",   sufijo:"", nota:"Social, editorial o novias.", items:["Maquillaje social","Novia y quinceañera","Producción editorial","Prueba incluida"],                        destacado:false, badge:null },
    { icono:"⌒", nombre:"Cejas y Pestañas", rango:"Valoración previa",   sufijo:"", nota:"Diseño, laminado, planchado o lifting.", items:["Diseño personalizado","Laminado de cejas","Lifting de pestañas","Diagnóstico facial"],         destacado:false, badge:null },
  ],

  /* ─────────────────────────────────────────────────────────
     ANTES / DESPUÉS
  ───────────────────────────────────────────────────────── */
  antesYdespues: [
    { servicio:"Corte",    antes:"assets/images/antes_1.jpg",  despues:"assets/images/despues_1.jpg" },
    { servicio:"Tratamiento Capilar", antes:"assets/images/antes_2.jpg",  despues:"assets/images/despues_2.jpg" },
    { servicio:"Maquillaje",  antes:"assets/images/antes_2.jpg",  despues:"assets/images/despues_2.jpg" },
  ],

  /* ─────────────────────────────────────────────────────────
     GALERÍA
     En móvil se muestran initialMobile imágenes; "Ver más" carga el resto.
  ───────────────────────────────────────────────────────── */
  galeria: {
    initialMobile: 6,   // imágenes visibles en móvil antes de "Ver más"
    items: [
      { tag:"color",       src:"https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80", alt:"Balayage" },
      { tag:"cortes",      src:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80", alt:"Corte" },
      { tag:"extensiones", src:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", alt:"Extensiones" },
      { tag:"maquillaje",  src:"https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80", alt:"Maquillaje" },
      { tag:"tintes",      src:"https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",    alt:"Tinte" },
      { tag:"tratamiento", src:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80", alt:"Tratamiento" },
      { tag:"peinados",    src:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80", alt:"Peinado" },
      { tag:"cejas",       src:"https://images.unsplash.com/photo-1629380447673-cf0572b8b0b7?w=800&q=80", alt:"Cejas" },
      { tag:"color",       src:"https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",    alt:"Color" },
      { tag:"cortes",      src:"https://images.unsplash.com/photo-1533327325824-76851d408d21?w=800&q=80", alt:"Corte femenino" },
      { tag:"peinados",    src:"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80", alt:"Peinado elegante" },
      { tag:"tratamiento", src:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80", alt:"Alaciado" },
    ],
  },

  /* ─────────────────────────────────────────────────────────
     INSTAGRAM
     Configura las previews e imágenes de la sección Instagram.
     reelUrl: null = no es reel, solo abre Instagram
  ───────────────────────────────────────────────────────── */
  instagram: {
    previews: [
      { src:"https://scontent-qro1-1.cdninstagram.com/v/t39.30808-6/481085707_599996736360649_4711533093264767635_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=103&ig_cache_key=MzU1MTM2NzU0MTkzOTI3MTkxNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTM2Ny5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=OFyGhJQ8-SUQ7kNvwHa-05Y&_nc_oc=AdrGqSt1yo82s6sk4eQvDOiTdVKdKFcdCFhK6KgIAgxuotQGu0NFhND5HF0buSOv37smd4CPNiL-Z730JpSHN2y5&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_gid=OKMvlyFh9doh-lRh45D0oQ&_nc_ss=7a22e&oh=00_Af6dupL-e_M6eRa9K3asKSLRiRNBXs6S8Yr5xoLm9Cmg3g&oe=6A0B3673", alt:"Reel", reelUrl: "https://www.instagram.com/fernandacoronelsalon/reel/DSOAOugEpTe/" },
      { src:"https://instagram.fgdl10-1.fna.fbcdn.net/v/t39.30808-6/483524888_609828758710780_7366408945047398361_n.jpg?stp=c0.170.1367.1708a_dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzU2ODAzNzI4NjAxNTIxODQ5Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTM2Ny5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=vbXR1cmZZTgQ7kNvwHKvHob&_nc_oc=AdoQXhmd8Ph83M02J-qgjGHVl5IrBAQ8pGfPfHH9WDy8htT1HGMxBl1JzyhFzgmQhB9dbPp_1hQkk9qp_LtvrBdA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgdl10-1.fna&_nc_gid=dgZm_zTs44c17M_CMeCdbA&_nc_ss=7a22e&oh=00_Af6wTXX_j6kXFSc1jQRPcIkoYcpzTq7iYG8uBaWUV7YgPQ&oe=6A0B16C4", alt:"Post", reelUrl: null },
      { src:"https://instagram.fgdl3-1.fna.fbcdn.net/v/t39.30808-6/480729072_600012833025706_2518510594811241207_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzU1ODY3NTU4NTEzMjgyMzIzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTM2Ni5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Kqgqo-j6TuwQ7kNvwEPlS9B&_nc_oc=Adp0Oe0rRw3q6g1BIc9AY-tu1HvX68SbDCq9ZqOJge7W3HqVIIQSF4zo0dXoyyTnYZtMD7redg3xCRddrvcq2vyq&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgdl3-1.fna&_nc_gid=LU1J6Mw0O1opFQPh1-dyPA&_nc_ss=7a22e&oh=00_Af7xpq_bNPJ9XAxWPQcWnVCsHKXHfbB7B944CneJItoIVw&oe=6A0B303D", alt:"Post", reelUrl: null }
    ],
  },

  /* ─────────────────────────────────────────────────────────
     TESTIMONIOS
  ───────────────────────────────────────────────────────── */
  testimonios: [
  {
    nombre:"Melissa Bass",
    servicio:"Cortes",
    avatar:"M",
    estrellas:5,
    texto:"Recomendada 100% para salvar tu cabello, si te hicieron un mal trabajo Fer lo salvará. Además buenísimos cortes de cabello."
  },

  {
    nombre:"Gaby Lagos",
    servicio:"Efectos de Color",
    avatar:"G",
    estrellas:5,
    texto:"Súper recomendable! Los efectos de color le quedan espectaculares y la atención también es súper buena."
  },

  {
    nombre:"Marcia Bolaños",
    servicio:"",
    avatar:"M",
    estrellas:5,
    texto:"Siempre un servicio increíble. El trato al cliente y el trabajo que hacen es el mejor."
  },

  {
    nombre:"Vanya Kamiya",
    servicio:"Efectos de Color",
    avatar:"V",
    estrellas:5,
    texto:"La mejor y más recomendada, la única que pudo salvar mi cabello después de una decoloración."
  },

  {
    nombre:"Dolores Vallejo",
    servicio:"",
    avatar:"D",
    estrellas:5,
    texto:"Excelente servicio. Muy recomendable."
  },

  {
    nombre:"Nilce Karina",
    servicio:"",
    avatar:"N",
    estrellas:5,
    texto:"Excelente servicio y muy lindo el lugar. 100% recomendado."
  }
],

  /* ─────────────────────────────────────────────────────────
     FAQ
  ───────────────────────────────────────────────────────── */
  faq: [
    { pregunta:"¿Necesito hacer cita previa?",               respuesta:"Sí, trabajamos únicamente con cita. Puedes agendar por WhatsApp, Instagram o el formulario de esta página." },
    { pregunta:"¿Cuánto tarda un balayage o coloración?",    respuesta:"En promedio entre 2.5 y 4 horas, dependiendo del resultado deseado y el estado de tu cabello. Te damos un estimado preciso en tu consulta." },
    { pregunta:"¿Qué productos utilizan?",                   respuesta:"Trabajamos con marcas profesionales certificadas: Wella, Kérastase, Olaplex y L'Oréal Professionnel." },
    { pregunta:"¿Realizan consulta gratuita?",               respuesta:"Sí. Antes de cualquier servicio hacemos diagnóstico capilar y asesoría de imagen sin costo." },
    { pregunta:"¿Cómo sé qué técnica de extensiones usar?",  respuesta:"Contamos con 10 técnicas distintas. Te evaluamos en consulta para recomendarte la más adecuada a tu cabello y estilo de vida." },
    { pregunta:"¿Puedo llevar referencias de estilo?",       respuesta:"¡Por supuesto! Lo recomendamos. Fotos de Instagram o Pinterest nos ayudan a entender exactamente el resultado que buscas." },
  ],

  /* ─────────────────────────────────────────────────────────
     SEO
  ───────────────────────────────────────────────────────── */
  seo: {
    title:       "Fernanda Coronel Salón | Belleza Premium en Juriquilla, Querétaro",
    description: "Salón de belleza profesional en Juriquilla, Querétaro. Balayage, extensiones, nanoplastía, cortes y maquillaje de alto nivel. Agenda tu cita.",
    keywords:    "salón belleza juriquilla, balayage querétaro, extensiones cabello querétaro, nanoplastía querétaro, corte cabello juriquilla, Fernanda Coronel salón",
    ogImage:     "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    canonical:   "https://fernandacoronel.com",
  },

  /* ─────────────────────────────────────────────────────────
     TEXTOS DEL SITIO (CTAs, labels, mensajes de UI)
     Todo texto que aparece en la interfaz está aquí.
  ───────────────────────────────────────────────────────── */
  textos: {
    nav: {
      nosotros:    "Nosotros",
      servicios:   "Servicios",
      precios:     "Precios",
      galeria:     "Galería",
      faq:         "FAQ",
      contacto:    "Contacto",
      agendarCita: "Agendar cita",
    },
    secciones: {
      sobre:         { label:"El Salón",             titulo:"Nuestra esencia" },
      servicios:     { label:"Lo que hacemos",        titulo:"Servicios" },
      precios:       { label:"Transparencia total",   titulo:"Inversión en ti",        nota:"Los precios varían según el largo y la condición del cabello. Agenda una consulta gratuita para un presupuesto personalizado." },
      antesdespues:  { label:"La diferencia es visible", titulo:"Antes & Después",     instruccion:"Arrastra el slider para ver la transformación" },
      galeria:       { label:"Nuestros trabajos",     titulo:"Galería",                verMas:"Ver más" },
      testimonios:   { label:"Ellas lo dicen",        titulo:"Testimonios" },
      faq:           { label:"Resolvemos tus dudas",  titulo:"Preguntas frecuentes" },
      instagram:     { label:"Síguenos",              titulo:"Instagram",              cta:"Ver Instagram →" },
      contacto:      { label:"Reserva tu lugar",      titulo:"Agenda tu cita",
        descripcion:"Completa el formulario y nos ponemos en contacto contigo en menos de 24 horas para confirmar tu cita.",
        ubicacionLabel:"Ubicación", telefonoLabel:"Teléfono", whatsappLabel:"WhatsApp", whatsappTexto:"Enviar mensaje directo →",
        horariosLabel:"Horarios",
      },
      marcas:        { label:"Trabajamos con las mejores marcas" },
    },
    form: {
      paso1titulo:   "¿Qué servicio te interesa?",
      paso1sub:      "Paso 1 de 3 — Puedes elegir más de uno",
      paso2titulo:   "Detalles de tu cita",
      paso2sub:      "Paso 2 de 3",
      paso3titulo:   "¿Cuándo quieres venir?",
      paso3sub:      "Paso 3 de 3 — Detalles adicionales",
      nombreLabel:   "Nombre completo",
      emailLabel:    "Correo electrónico",
      fechaLabel:    "Fecha preferida",
      horarioLabel:  "Horario preferido",
      mensajeLabel:  "¿Algo que debamos saber?",
      mensajePlaceholder: "Alergias, referencias de estilo, preguntas...",
      horarioOpciones: ["Mañana (9:00 – 12:00)", "Mediodía (12:00 – 15:00)", "Tarde (15:00 – 18:00)"],
      btnSiguiente:  "Siguiente →",
      btnAtras:      "← Atrás",
      btnEnviar:     "Enviar solicitud ✦",
      seleccionados: (n) => `${n} seleccionado${n !== 1 ? "s" : ""}`,
      successTitulo: "¡Solicitud enviada!",
      successTexto:  "Nos pondremos en contacto en las próximas horas para confirmar tu cita.",
      successWA:     "Confirmar por WhatsApp",
    },
    footer: {
      columnaServicios: "Servicios",
      columnaSalon:     "Salón",
      copyright:        (year) => `© ${year} Fernanda Coronel Salón, Juriquilla, Querétaro. Todos los derechos reservados.`,
      tagline:          "Diseño premium ✦",
    },
    precios: {
      disclaimer: "* Precios orientativos desde, sujetos a evaluación en consulta. Incluye diagnóstico y consultoría de imagen sin costo.",
      consultarBtn: "Consultar precio",
    },
  },

};

/* ─────────────────────────────────────────────────────────
   HELPERS — Funciones de utilidad derivadas del config.
   No modificar.
───────────────────────────────────────────────────────── */
window.FC._helpers = {
  waLink(msg) {
    const { whatsapp, whatsappMsgDefault } = window.FC.contacto;
    const text = encodeURIComponent(msg || whatsappMsgDefault);
    return `https://wa.me/${whatsapp}?text=${text}`;
  },
  // Devuelve las redes que deben mostrarse en una ubicación dada
  redesPara(lugar) {
    return window.FC.redes.filter(r => r.mostrarEn.includes(lugar));
  },
  // Genera href para una red (WhatsApp se genera automáticamente)
  redHref(red) {
    if (red.id === "whatsapp") return window.FC._helpers.waLink();
    return red.url || "#";
  },
};