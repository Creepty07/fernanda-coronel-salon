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
    texto:  "✦  Primera visita: diagnóstico capilar + consultoría de imagen GRATIS",
    cta:    "Agendar ahora",
    ctaUrl: "#contacto",
  },
  // banner: null,

  /* ─────────────────────────────────────────────────────────
     HERO
  ───────────────────────────────────────────────────────── */
  hero: {
    // Imagen de fondo (usa videoUrl para video, imagenUrl para imagen)
    imagenUrl: "assets/images/hero.jpeg",
    videoUrl:  null,
    typewriterPhrases: [
      "Belleza con propósito",
      "Estilo con esencia",
      "Técnica impecable",
      "Tu mejor versión",
      "10 técnicas de extensiones",
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
    { nombre: "Wella",                logoUrl: null, invertir: false },
    { nombre: "Kérastase",            logoUrl: null, invertir: true },
    { nombre: "L'Oréal Professionnel",logoUrl: null, invertir: true },
    { nombre: "Redken",               logoUrl: null,invertir: true },
    { nombre: "Olaplex",              logoUrl: null, invertir: true },
    { nombre: "Schwarzkopf",          logoUrl: null, invertir: true },
  ],

  /* ─────────────────────────────────────────────────────────
     SERVICIOS
  ───────────────────────────────────────────────────────── */
  servicios: [
    { id:"efectos-color", tag:"color",      icono:"✦", nombre:"Efectos de Color",       desc:"Transformaciones que realzan tu personalidad con técnicas de colorimetría avanzada.", subcategorias:["Balayage","Baby lights","Luces","Diseño de color","Transparencias"], imagen:"assets/images/servicios/efectos.jpg" },
    { id:"tintes",        tag:"tintes",     icono:"◈", nombre:"Tintes",                 desc:"Coloración profesional con pigmentos de alta duración que nutren y protegen.", subcategorias:[], imagen:"assets/images/servicios/tintes.jpg" },
    { id:"cortes",        tag:"cortes",     icono:"✂", nombre:"Cortes",                 desc:"Precisión milimétrica adaptada a tu rostro, estilo de vida y personalidad.", subcategorias:[], imagen:"assets/images/servicios/corte.jpg" },
    { id:"alaciado",      tag:"tratamiento",icono:"〰",nombre:"Alaciado Permanente",     desc:"Resultados lisos y naturales de larga duración con fórmulas que respetan tu cabello.", subcategorias:[], imagen:"assets/images/servicios/alaciado.jpg" },
    { id:"nanoplastia",   tag:"tratamiento",icono:"◇", nombre:"Nanoplastía",            desc:"Alisado y nutrición profunda que elimina el frizz y devuelve suavidad y brillo.", subcategorias:[], imagen:"assets/images/servicios/nanoplastia.jpg" },
    { id:"botox",         tag:"tratamiento",icono:"◉", nombre:"Botox Capilar",          desc:"Recupera la juventud de tu cabello con esta técnica de relleno de última generación.", subcategorias:[], imagen:"assets/images/servicios/botox.jpg" },
    { id:"tratamientos",  tag:"tratamiento",icono:"✿", nombre:"Tratamientos Capilares", desc:"Protocolos personalizados para restaurar, nutrir y transformar tu cabello.", subcategorias:["Hidratación","Nutrición","Reparación","Brillo","Suavidad"], imagen:"assets/images/servicios/tratamientos.jpg" },
    { id:"extensiones",   tag:"extensiones",icono:"∿", nombre:"Extensiones de Cabello", desc:"10 técnicas distintas adaptadas a tu tipo de cabello. Resultados naturales y duraderos.", subcategorias:["Keratina","Microring","Clip","Cosidas","Tapas","Nano","Cinta","Tejido","Fusión","Pegadas"], imagen:"assets/images/servicios/extensiones.jpg" },
    { id:"peinados",      tag:"peinados",   icono:"❋", nombre:"Peinados",               desc:"Desde looks casuales hasta peinados de novia. Arte en cada hebra.", subcategorias:[], imagen:"assets/images/servicios/peinados.jpg" },
    { id:"moldeados",     tag:"peinados",   icono:"⌀", nombre:"Moldeados",              desc:"Ondas y rizos perfectos con técnicas modernas de moldeado.", subcategorias:[], imagen:"assets/images/servicios/moldeados.jpg" },
    { id:"maquillaje",    tag:"maquillaje", icono:"◌", nombre:"Maquillaje",             desc:"Maquillaje profesional para toda ocasión. Tu belleza, nuestra paleta.", subcategorias:[], imagen:"assets/images/servicios/maquillaje.jpg" },
    { id:"depilaciones",  tag:"depilacion", icono:"✵", nombre:"Depilaciones",           desc:"Cera española de calidad para una depilación suave, eficaz y duradera.", subcategorias:["Por área","Cuerpo completo"], imagen:"assets/images/servicios/depilaciones.jpg" },
    { id:"planchado-cejas",tag:"cejas",     icono:"≡", nombre:"Planchado de Cejas",     desc:"Alisa y redefine la dirección del vello para una ceja más ordenada.", subcategorias:[], imagen:"assets/images/servicios/planchado.jpg" },
    { id:"lifting",       tag:"pestanas",   icono:"⌣", nombre:"Lifting de Pestañas",    desc:"Realza tu mirada con un lifting que riza y define tus pestañas desde la raíz.", subcategorias:[], imagen:"assets/images/servicios/lifting.jpg" },
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
  ],

  /* ─────────────────────────────────────────────────────────
     GALERÍA
     En móvil se muestran initialMobile imágenes; "Ver más" carga el resto.
  ───────────────────────────────────────────────────────── */
  galeria: {
    initialMobile: 6,   // imágenes visibles en móvil antes de "Ver más"
    items: [
      { tag:"balayage",       src:"assets/images/galeria/balayage.jpeg", alt:"Balayage" },
      { tag:"cortes",      src:"assets/images/galeria/corte1.jpeg", alt:"Corte" },
      { tag:"salon", src:"assets/images/galeria/lavado.jpeg", alt:"Área de Lavado" },
      { tag:"balayage",  src:"assets/images/galeria/balayage1.jpeg", alt:"Maquillaje" },
      { tag:"extensiones",    src:"assets/images/galeria/extensiones.jpeg", alt:"Extensiones" },
      { tag:"salon",       src:"assets/images/galeria/zonadecortes.jpeg", alt:"Zona de Cortes" },
      { tag:"tintes",       src:"assets/images/galeria/color.jpeg",    alt:"Color" },
      { tag:"salon",      src:"assets/images/galeria/salon.jpeg", alt:"Salón" },
      { tag:"salon",    src:"assets/images/galeria/recepcion1.jpeg", alt:"Recepción" },
      { tag:"salon", src:"assets/images/galeria/depilacion1.jpeg", alt:"Zona de Depilación" },
    ],
  },

  /* ─────────────────────────────────────────────────────────
     INSTAGRAM
     Configura las previews e imágenes de la sección Instagram.
     reelUrl: null = no es reel, solo abre Instagram
  ───────────────────────────────────────────────────────── */
  instagram: {
    previews: [
      { src:"assets/images/instagram/preview_1.jpg", alt:"Reel", reelUrl: "https://www.instagram.com/fernandacoronelsalon/reel/DSOAOugEpTe/" },
      { src:"assets/images/instagram/preview_2.jpg", alt:"Post", reelUrl: null },
      { src:"assets/images/instagram/preview_3.jpg", alt:"Post", reelUrl: null },
      { src:"assets/images/instagram/preview_4.jpg", alt:"Post", reelUrl: null },
      { src:"assets/images/instagram/preview_5.jpg", alt:"Post", reelUrl: null },
      { src:"assets/images/instagram/preview_6.jpg", alt:"Post", reelUrl: null },
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
    servicio:"Tintes",
    avatar:"M",
    estrellas:5,
    texto:"Llevo más de 2 años viniendo para mis tintes y cada visita es igual de increíble. El resultado siempre dura y el trato es inigualable."
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
    servicio:"Nanoplastía",
    avatar:"D",
    estrellas:5,
    texto:"Me hice la nanoplastía y el cambio fue increíble: de un cabello con frizz constante a uno completamente liso y suave. Vale cada peso."
  },

  {
    nombre:"Nilce Karina",
    servicio:"Extensiones",
    avatar:"N",
    estrellas:5,
    texto:"El salón es hermoso y el servicio de primera. Me hicieron extensiones por primera vez y quedé enamorada del resultado. 100% recomendado."
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
    ogImage:     "assets/SEO/ogImage.jpg",
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