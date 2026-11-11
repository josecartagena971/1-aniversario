// Helper to safely encode filenames with spaces and parentheses
export const mediaUrl = (filename) => `/imagenes/${encodeURIComponent(filename)}`;

export const COUPLE_INFO = {
  herName: "Liz",
  hisName: "José",
  coupleTitle: "Liz & José",
  anniversaryStart: "2025-11-11T00:00:00", // 1 Año juntos
  anniversaryDisplayDate: "11 de Noviembre",
  heroQuote: "Hay historias bonitas... pero la nuestra es mi favorita ❤️",
  heroSubtitle: "Hoy celebramos 1 año de nosotros",
};

// 9 momentos icónicos reales para la Línea del Tiempo ("Nuestra Historia")
export const TIMELINE_MOMENTS = [
  {
    id: "tl-1",
    chapter: "Capítulo I",
    date: "Nuestras Primeras Citas",
    title: "Donde todo empezó entre copas y pizza",
    quote: "Sin darme cuenta, te convertiste en una de mis partes favoritas de cada día.",
    description:
      "Me acuerdo perfecto de nuestras primeras citas, entre copas de vino, una pizza compartida y reírnos de todo hasta tarde. Desde ahí supe que contigo no me quería ir a ningún lado más.",
    image: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.42 PM.jpeg"),
    secondaryImage: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.46 PM.jpeg"),
    style: "polaroid",
    tag: "Primera Cita & Brindis 🍷",
  },
  {
    id: "tl-2",
    chapter: "Capítulo II",
    date: "Antojitos frente a la Plaza",
    title: "Heladitos, chocolates y tu sonrisa",
    quote: "Entre tantas personas en este mundo, qué bonito fue encontrarte.",
    description:
      "Ese día de los heladitos de osito y pollito y los chocolates de La Ibérica frente a la Catedral la pasamos tan lindo. Cualquier salida normal contigo se vuelve de mis mejores recuerdos, mi niña bonita.",
    image: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.44 PM (2).jpeg"),
    secondaryImage: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.44 PM (1).jpeg"),
    style: "cinematic",
    tag: "Tardes Dulces 🍦🍫",
  },
  {
    id: "tl-3",
    chapter: "Capítulo III",
    date: "Diciembre Juntos",
    title: "Nuestra Navidad con chompas iguales",
    quote: "Mi regalo favorito siempre va a ser tenerte abrazada a mí, mi amorcini.",
    description:
      "Ponernos esas chompas navideñas de renos iguales y verte asomándote por detrás de mi hombro me mató de ternura. Estar abrazado contigo así se siente como casa.",
    image: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.17 AM (1).jpeg"),
    secondaryImage: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.43 PM (1).jpeg"),
    style: "polaroid",
    tag: "Espíritu Navideño 🎄✨",
  },
  {
    id: "tl-4",
    chapter: "Capítulo IV",
    date: "Paseo en el Lago",
    title: "En el botecito y frente al Titicaca",
    quote: "Cuando recuestas tu cabeza en mi hombro, siento una paz increíble, corazón.",
    description:
      "Con el sol rico del lago, el vientito en la cara y tú cerrando los ojos recostada en mi hombro. Esa foto la miro a cada rato porque se nota lo bien y tranquilos que estábamos juntos.",
    image: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.33 AM (1).jpeg"),
    secondaryImage: mediaUrl("WhatsApp Image 2026-11-11 at 9.08.59 AM (1).jpeg"),
    style: "cinematic",
    tag: "Paseo en el Lago ⛵💙",
  },
  {
    id: "tl-5",
    chapter: "Capítulo V",
    date: "Cafecitos & Noches Juntos",
    title: "De cafecitos calientes a caminar de noche",
    quote: "No necesito ningún plan complicado si estoy contigo, preciosa.",
    description:
      "Ya sea tomándonos un café calentito, brindando con nuestros toritos de Pucará o caminando de noche por el parque muertos de frío pero bien abrazados, contigo todo se disfruta el doble.",
    image: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.30 AM.jpeg"),
    secondaryImage: mediaUrl("WhatsApp Image 2026-11-11 at 9.08.59 AM.jpeg"),
    style: "polaroid",
    tag: "Citas Inolvidables ☕🌙",
  },
  {
    id: "tl-6",
    chapter: "Capítulo VI",
    date: "Juegos & Alturas",
    title: "Rueda de la fortuna, Tekken y bloquecitos",
    quote: "Eres mi equipo favorito para todo, mi melocotini.",
    description:
      "Desde subir juntos a la rueda de la fortuna con todas las luces, darnos la mano antes de jugar Tekken, hasta quedarnos concentrados armando nuestros mini-bloques piecita por piecita.",
    image: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.46 AM.jpeg"),
    secondaryImage: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.42 AM.jpeg"),
    style: "cinematic",
    tag: "Complicidad & Diversión 🎡🎮",
  },
  {
    id: "tl-7",
    chapter: "Capítulo VII",
    date: "Orgullo, Fiesta y Gym",
    title: "Verte brillar así me llena de orgullo",
    quote: "Siempre me quedo mirándote embobado, porque para mí eres la más guapa.",
    description:
      "Me encanta acompañarte en todo: verte lucirte con tu traje típico y tu corona en el festival, y también ir juntos al gimnasio a entrenar aunque terminemos cansadísimos.",
    image: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.06 AM (1).jpeg"),
    secondaryImage: mediaUrl("WhatsApp Image 2026-05-11 at 2.46.04 PM.jpeg"),
    style: "polaroid",
    tag: "Orgullo Total 👑💪",
  },
  {
    id: "tl-8",
    chapter: "Capítulo VIII",
    date: "Nuestros Cumpleaños",
    title: "Celebrar nuestros cumpleaños juntos",
    quote: "Si pudiera volver a vivir cada momento contigo, volvería a elegirte.",
    description:
      "Celebrar nuestros cumpleaños juntos: verte tan feliz rodeada de flores, globos rosados y las letras de LIZ, y pasar mi cumple contigo y mi torta de Spider-Man… momentos que no cambio por nada.",
    image: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.31 AM.jpeg"),
    secondaryImage: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.32 AM.jpeg"),
    style: "cinematic",
    tag: "Celebrando Juntos 🎂💝",
  },
  {
    id: "tl-9",
    chapter: "Capítulo IX",
    date: "Hoy — Nuestro Primer Año",
    title: "365 días eligiéndonos todos los días",
    quote: "Y pensar que este primer año recién es el comienzo de todo lo nuestro, cariñito mío.",
    description:
      "Cenas ricas con corazones de chocolate, miradas que me derriten y la seguridad de que encontré a la chica que quiero a mi lado siempre.",
    image: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.45 AM.jpeg"),
    secondaryImage: mediaUrl("WhatsApp Image 2026-05-11 at 2.41.46 PM (1).jpeg"),
    style: "polaroid",
    tag: "¡Feliz 1er Aniversario! ❤️🥂",
  },
];

// Todas las fotos reales organizadas para el Álbum de Recuerdos (PhotoGallery)
export const PHOTO_GALLERY_ITEMS = [
  {
    id: "pg-1",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.33 AM (1).jpeg"),
    title: "Contigo en mi hombro",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -2.5,
    caption: "Ese ratito en el bote cuando cerraste los ojos en mi hombro. Te juro que no quería que ese paseo termine nunca.",
  },
  {
    id: "pg-2",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.31 AM.jpeg"),
    title: "Tu cumple, mi niña bonita",
    category: "especiales",
    cardType: "flip3d",
    rotation: 1.8,
    caption: "Con tus letras de LIZ, tus globos de Hello Kitty y tus flores… qué linda te veías ese día, de verdad.",
  },
  {
    id: "pg-3",
    src: mediaUrl("WhatsApp Image 2026-05-11 at 2.41.46 PM (1).jpeg"),
    title: "Tu sonrisa me alegra todo",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -1.5,
    caption: "No importa el frío que haga afuera, verte sonreír así siempre me cambia el día, preciosa.",
  },
  {
    id: "pg-4",
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.44 PM (2).jpeg"),
    title: "Osito, pollito y chocolates",
    category: "citas",
    cardType: "cinematic",
    rotation: 2.1,
    caption: "Nuestros helados de osito y pollito frente a la Catedral. Qué rico salió ese antojo contigo.",
  },
  {
    id: "pg-5",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.17 AM (1).jpeg"),
    title: "Chompas de Navidad iguales",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -2.0,
    caption: "Nosotros combinados de renos y tú asomándote por detrás tan linda como siempre.",
  },
  {
    id: "pg-6",
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.43 PM.jpeg"),
    title: "Mi reina cumpleañera 👑",
    category: "ella",
    cardType: "flip3d",
    rotation: 1.5,
    caption: "Con tu coronita y esa mirada tuya que me encanta. Siempre vas a ser mi consentida.",
  },
  {
    id: "pg-7",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.46 AM.jpeg"),
    title: "Arriba en la rueda",
    category: "citas",
    cardType: "polaroid",
    rotation: 2.4,
    caption: "Subiendo juntos a la rueda de la fortuna de noche. Un poquito de vértigo, pero contigo todo da risa y emoción.",
  },
  {
    id: "pg-8",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.06 AM (1).jpeg"),
    title: "Preciosa en el festival",
    category: "especiales",
    cardType: "cinematic",
    rotation: -1.8,
    caption: "Qué orgullo acompañarte y verte brillar así con tu traje y tu sonrisa, mi niña guapa.",
  },
  {
    id: "pg-9",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.30 AM.jpeg"),
    title: "Un cafecito y mil charlas",
    category: "citas",
    cardType: "polaroid",
    rotation: 1.2,
    caption: "Cada vez que vamos por un café y te quedas mirándome así, se me olvida hasta la hora.",
  },
  {
    id: "pg-10",
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.45 PM (2).jpeg"),
    title: "Qué guapa frente al lago",
    category: "ella",
    cardType: "cinematic",
    rotation: -2.2,
    caption: "Tu vestido color vino, tu moñito y el lago detrás. Ese día te veías espectacular, corazón.",
  },
  {
    id: "pg-11",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.42 AM.jpeg"),
    title: "Jugando Tekken de la mano",
    category: "citas",
    cardType: "flip3d",
    rotation: 2.0,
    caption: "Hasta para elegir personaje en Tekken estábamos agarrados de la mano. El mejor equipo de todos.",
  },
  {
    id: "pg-12",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.32 AM (1).jpeg"),
    title: "Nuestra casita de Snoopy (9 Meses)",
    category: "especiales",
    cardType: "polaroid",
    rotation: -1.7,
    caption: "Cada fotito y cada detalle de esta cajita de los 9 meses los guardo con todo el cariño.",
  },
  {
    id: "pg-13",
    src: mediaUrl("WhatsApp Image 2026-05-11 at 2.46.03 PM.jpeg"),
    title: "Noche en el parque",
    category: "nosotros",
    cardType: "polaroid",
    rotation: 1.6,
    caption: "Caminando entre las flores de noche y abrazados bien pegaditos para que no nos dé frío.",
  },
  {
    id: "pg-14",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.08.59 AM (1).jpeg"),
    title: "Paseo en bote",
    category: "nosotros",
    cardType: "cinematic",
    rotation: -2.3,
    caption: "En el botecito sumando otro día bonito juntos, mi melocotini.",
  },
  {
    id: "pg-15",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.45 AM.jpeg"),
    title: "Cena con 'Love' en la mesa",
    category: "citas",
    cardType: "polaroid",
    rotation: 1.9,
    caption: "Vino, rositas y esa cena tan linda que compartimos los dos.",
  },
  {
    id: "pg-16",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.45 AM (1).jpeg"),
    title: "Corazones de chocolate",
    category: "citas",
    cardType: "flip3d",
    rotation: -1.4,
    caption: "Postres ricos para endulzarnos aún más la noche, mi amorcini.",
  },
  {
    id: "pg-17",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.45 AM (2).jpeg"),
    title: "Brindando contigo",
    category: "ella",
    cardType: "polaroid",
    rotation: 2.1,
    caption: "Mirándote tan linda al otro lado de la mesa mientras brindábamos por nosotros.",
  },
  {
    id: "pg-18",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.45 AM (3).jpeg"),
    title: "La cara de felicidad",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -1.9,
    caption: "Esta foto resume perfecto cómo me haces reír y lo feliz que soy cuando estoy frente a ti.",
  },
  {
    id: "pg-19",
    src: mediaUrl("WhatsApp Image 2026-05-11 at 2.46.04 PM.jpeg"),
    title: "Juntos hasta en el gym 💪",
    category: "nosotros",
    cardType: "cinematic",
    rotation: 1.3,
    caption: "Entrenando juntos y dándonos ánimos hasta cuando ya no podemos más.",
  },
  {
    id: "pg-20",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.43 AM.jpeg"),
    title: "En el multiverso Spider-Man",
    category: "especiales",
    cardType: "flip3d",
    rotation: -2.4,
    caption: "Nuestra selfie del gym convertida en aventura por los edificios con Spider-Man.",
  },
  {
    id: "pg-21",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.10.09 AM.jpeg"),
    title: "Mi Spider-Girl preciosa",
    category: "ella",
    cardType: "polaroid",
    rotation: 1.7,
    caption: "Cuando te pusiste tu vestido de Spider-Man para ir al cine casi me da algo de lo linda que te veías, mi muñequita bonita.",
  },
  {
    id: "pg-22",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.32 AM.jpeg"),
    title: "Mi cumple con Spider-Man",
    category: "especiales",
    cardType: "polaroid",
    rotation: -1.2,
    caption: "Celebrando mi cumpleaños contigo, mi torta arácnida, nuestras fotos en la repisa y el calendario de Snoopy.",
  },
  {
    id: "pg-23",
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.43 PM (1).jpeg"),
    title: "El anillito en tu mano",
    category: "ella",
    cardType: "flip3d",
    rotation: 2.2,
    caption: "Esa carita tierna y ese anillo que te di con todo mi cariño, corazón de melocotón.",
  },
  {
    id: "pg-24",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.34 AM.jpeg"),
    title: "Armando bloquecitos (Parte I)",
    category: "citas",
    cardType: "polaroid",
    rotation: -1.6,
    caption: "Tú súper concentrada armando cada piecita con toda la paciencia del mundo.",
  },
  {
    id: "pg-25",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.35 AM.jpeg"),
    title: "Armando bloquecitos (Parte II)",
    category: "citas",
    cardType: "polaroid",
    rotation: 1.4,
    caption: "Siguiendo las instrucciones pasito a pasito en una de nuestras tardes más tranqui juntos.",
  },
  {
    id: "pg-26",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.08.59 AM.jpeg"),
    title: "Con nuestros toritos de Pucará",
    category: "citas",
    cardType: "cinematic",
    rotation: -2.1,
    caption: "Un brindis bien bonito con nuestros toritos, deseándonos siempre puras cosas buenas.",
  },
  {
    id: "pg-27",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.05 AM.jpeg"),
    title: "Los dos toritos mirándose",
    category: "citas",
    cardType: "polaroid",
    rotation: 1.8,
    caption: "Se ven tan lindos frente a frente, igualito que nosotros dos.",
  },
  {
    id: "pg-28",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.23 AM.jpeg"),
    title: "Abrigaditos en el frío",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -1.5,
    caption: "Tú con tu capucha calentita y yo con mi gorrito blanco pasando el frío juntos.",
  },
  {
    id: "pg-29",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.29 AM (1).jpeg"),
    title: "Salidita a comer",
    category: "nosotros",
    cardType: "cinematic",
    rotation: 2.0,
    caption: "Cada vez que salimos a comer algo rico contigo la paso increíble, cariñito mío.",
  },
  {
    id: "pg-30",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.29 AM.jpeg"),
    title: "Cómo te veo yo",
    category: "ella",
    cardType: "polaroid",
    rotation: -2.2,
    caption: "Cuando estás distraída y yo no puedo evitar quedarme mirándote lo preciosa que eres.",
  },
  {
    id: "pg-31",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.33 AM.jpeg"),
    title: "En el lago con solecito",
    category: "ella",
    cardType: "cinematic",
    rotation: 1.6,
    caption: "Guapísima en la cubierta del barco con el cielo azul atrás.",
  },
  {
    id: "pg-32",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.34 AM (1).jpeg"),
    title: "Abrazaditos",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -1.8,
    caption: "Estar así abrazado a ti es de las cosas que más paz me dan, mi preciosa.",
  },
  {
    id: "pg-33",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.43 AM (1).jpeg"),
    title: "Tarde de Starbucks",
    category: "ella",
    cardType: "polaroid",
    rotation: 1.5,
    caption: "Tú tan linda y tan tú en esta foto, con tu estilo y tu dulzura.",
  },
  {
    id: "pg-34",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.44 AM (1).jpeg"),
    title: "Viajando juntos en ruta",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -1.3,
    caption: "Hasta ir en combi o autobús contigo se siente distinto cuando vas a mi ladito.",
  },
  {
    id: "pg-35",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.44 AM.jpeg"),
    title: "Nuestra versión anime",
    category: "especiales",
    cardType: "flip3d",
    rotation: 2.3,
    caption: "Con el corazón coreano y lleno de corazoncitos alrededor, bien tiernos los dos.",
  },
  {
    id: "pg-36",
    src: mediaUrl("WhatsApp Image 2026-05-11 at 2.41.46 PM.jpeg"),
    title: "Jugando con filtros de estrellitas",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -2.0,
    caption: "Haciendo tonterías juntos frente a la cámara y riéndonos de cómo salimos.",
  },
  {
    id: "pg-37",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.07 AM.jpeg"),
    title: "Risas en casa",
    category: "nosotros",
    cardType: "polaroid",
    rotation: 1.4,
    caption: "Contigo no hace falta salir a ningún lado para pasar una tarde genial.",
  },
  {
    id: "pg-38",
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.45 PM (1).jpeg"),
    title: "Noche de fiesta",
    category: "nosotros",
    cardType: "cinematic",
    rotation: -1.7,
    caption: "Bailando y pasándola súper bien juntos bajo las luces de colores.",
  },
  {
    id: "pg-39",
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.45 PM.jpeg"),
    title: "Tequeños y cocteles en Munanqui",
    category: "citas",
    cardType: "polaroid",
    rotation: 1.9,
    caption: "Todo sabe diez veces más rico cuando lo compartimos juntos, guapa.",
  },
  {
    id: "pg-40",
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.46 PM.jpeg"),
    title: "Viendo nuestras fotos",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -1.4,
    caption: "Sentaditos viendo fotos pasadas mientras sacábamos otro recuerdo más.",
  },
  {
    id: "pg-41",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.16 AM.jpeg"),
    title: "Lindísima junto al muelle",
    category: "ella",
    cardType: "cinematic",
    rotation: 1.8,
    caption: "Esa foto en el muelle te salió tan bonita que no me canso de verla, mi niña bonita.",
  },
  {
    id: "pg-42",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.10.11 AM.jpeg"),
    title: "Con tu lazo negro frente al agua",
    category: "ella",
    cardType: "polaroid",
    rotation: -1.6,
    caption: "Con tu lazo negro y mirando hacia el agua… te ves demasiado linda ahí, corazón.",
  },
  {
    id: "pg-43",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.17 AM.jpeg"),
    title: "Cargándote en mis brazos",
    category: "nosotros",
    cardType: "flip3d",
    rotation: 2.1,
    caption: "Así te voy a cargar siempre que pueda, mi muñequita bonita.",
  },
  {
    id: "pg-44",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.35 AM (1).jpeg"),
    title: "Descansando en mi pecho",
    category: "nosotros",
    cardType: "polaroid",
    rotation: -1.9,
    caption: "Tenerte así pegadita a mi pecho me da toda la calma del mundo, mi amorcini.",
  },
  {
    id: "pg-45",
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.10.09 AM (1).jpeg"),
    title: "Alitas y charla larga",
    category: "citas",
    cardType: "polaroid",
    rotation: 1.5,
    caption: "Otra salida a comer riquísimo donde se nos pasaron las horas hablando.",
  },
  {
    id: "pg-46",
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.42 PM (1).jpeg"),
    title: "Lleno de tus besos 💋",
    category: "especiales",
    cardType: "flip3d",
    rotation: -1.5,
    caption: "Así me dejas con tanto cariño… aunque sea con filtro, me encanta.",
  },
];

// Fotos destacadas para la sección de Hello Kitty (Liz)
export const HELLO_KITTY_GALLERY = [
  {
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.31 AM.jpeg"),
    title: "Tu cumple de Hello Kitty, mi Liz 🎀",
    subtitle: "Tus letras L-I-Z prendidas, tus globos y tus flores rosadas",
  },
  {
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.43 PM.jpeg"),
    title: "Mi cumpleañera favorita 👑",
    subtitle: "Con tu coronita y esa sonrisa que me vuelve loco",
  },
  {
    src: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.44 PM (1).jpeg"),
    title: "Dulzura pura 🍦",
    subtitle: "Tus ojitos bonitos y los detalles más lindos",
  },
  {
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.44 AM.jpeg"),
    title: "Puros corazoncitos para ti 💗",
    subtitle: "Mi muñequita bonita en versión anime y en la vida real",
  },
];

// Sorpresas ocultas de Hello Kitty
export const HELLO_KITTY_SURPRISES = [
  {
    id: "hk-1",
    label: "Moñito de la Ternura 🎀",
    title: "Tu ladito dulce",
    message:
      "Así como Hello Kitty no se quita su moñito, yo no me canso de tu forma tan tierna de ser y de esa sonrisa que me alegra cualquier día, corazón.",
  },
  {
    id: "hk-2",
    label: "Estrellita de los Deseos ⭐",
    title: "Lo que siempre pido",
    message:
      "Si pudiera pedir un deseo ahorita, solo pediría seguir cumpliendo años junto a mi niña bonita y no soltarte nunca.",
  },
  {
    id: "hk-3",
    label: "Nubecita de Algodón ☁️",
    title: "Mis abrazos favoritos",
    message:
      "Cuando me abrazas fuerte me siento tan bien y tan tranquilo que no quiero que pase el tiempo, mi melocotini.",
  },
  {
    id: "hk-4",
    label: "Flor de Cerezo 🌸",
    title: "Para mi preciosa",
    message:
      "No hay nada más bonito que verte reír conmigo por cualquier tontería, guapa.",
  },
];

// Fotos destacadas para la sección de Spider-Man (José & Liz)
export const SPIDERMAN_GALLERY = [
  {
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.43 AM.jpeg"),
    title: "Nuestro propio Spider-Verse 🕷️",
    subtitle: "En lo más alto entre telarañas, pero siempre juntos",
  },
  {
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.10.09 AM.jpeg"),
    title: "Mi Spider-Girl favorita ❤️💙",
    subtitle: "Con tu vestido de Spider-Man para el cine… casi me desmayo de lo linda que ibas",
  },
  {
    src: mediaUrl("WhatsApp Image 2026-11-11 at 9.01.32 AM.jpeg"),
    title: "Mi cumple con Spider-Man 🕸️",
    subtitle: "Mi torta arácnida, nuestras fotos atrás y nuestro calendario de Snoopy",
  },
];

// Corazones con telaraña interactivos en la sección de Spider-Man
export const SPIDER_WEB_HEARTS = [
  {
    id: "sp-1",
    badge: "TIERRA-1111",
    title: "Mi Sentido Arácnido",
    secret:
      "¡THWIP! 🕸️ Mi sentido arácnido ni me avisa del peligro… ¡se me acelera el corazón apenas te veo llegar con esa sonrisa, mi niña guapa!",
  },
  {
    id: "sp-2",
    badge: "CANON EVENT",
    title: "Nuestro Evento Canónico",
    secret:
      "Si existe algo que tiene que pasar sí o sí en todos los universos, el mío fue conocerte a ti, mi corazón de melocotón.",
  },
  {
    id: "sp-3",
    badge: "SUPERPODER",
    title: "Mi Mejor Superpoder",
    secret:
      "No necesito trepar paredes ni tirar telarañas cuando ya tengo la suerte de hacerte reír y caminar de tu mano.",
  },
  {
    id: "sp-4",
    badge: "MULTIVERSO ∞",
    title: "Mi Spider-Girl Preciosa",
    secret:
      "Desde que te vi en el cine con ese vestido de Spider-Man confirmé que eres mi heroína favorita en cualquier dimensión, mi amorcini.",
  },
];

// Preguntas del juego romántico "¿Sabes cuánto te amo?"
export const LOVE_QUIZ_QUESTIONS = [
  {
    id: "q1",
    question: "¿Sabes quién es mi persona favorita en todo el mundo?",
    subtitle: "Pista: Tiene los ojitos más lindos y su nombre empieza con L...",
    options: [
      {
        text: "¡Yo, tu niña bonita Liz! 💗",
        reactionTitle: "¡¡OBVIO QUE SÍ!! 🎉💖",
        reactionMessage:
          "Sin pensarlo dos veces: eres mi persona favorita, mi mejor compañía y con quien quiero estar todos los días.",
        badge: "Dueña de mi corazón",
      },
      {
        text: "La chica del vestido de Spider-Girl 🕷️✨",
        reactionTitle: "¡Esa merita eres tú! 🕸️❤️",
        reactionMessage:
          "Mi Spider-Girl guapa y mi muñequita bonita de Hello Kitty todo en uno.",
        badge: "Mi heroína favorita",
      },
      {
        text: "Tu compañera de Tekken 🎮",
        reactionTitle: "¡Mi Player 2 para siempre! 🏆💞",
        reactionMessage:
          "Con tal de jugar agarrados de la mano y verte reír, te dejo ganar todas las partidas, mi melocotini.",
        badge: "Equipo invencible",
      },
    ],
  },
  {
    id: "q2",
    question: "¿Quién tiene la sonrisa que me derrite al instante?",
    subtitle: "Esa que me arregla cualquier mal día en dos segundos...",
    options: [
      {
        text: "La que sonríe tomando cafecito o helado contigo ☕🍦",
        reactionTitle: "¡Me matas de ternura, corazón! 🥰✨",
        reactionMessage:
          "Cuando nos sentamos frente a frente a tomar café y me sonríes así, te juro que no quiero mirar a otro lado.",
        badge: "Sonrisa que enamora",
      },
      {
        text: "La cumpleañera de las letras L - I - Z 👑🎀",
        reactionTitle: "¡Mi reina guapa! 🌸👑",
        reactionMessage:
          "Verte así de feliz en tu cumple es de mis recuerdos más lindos de todo el año.",
        badge: "Mi niña bonita",
      },
      {
        text: "La que apoya su cabecita en mi hombro en el bote ⛵💙",
        reactionTitle: "¡Mi foto favorita de la vida! 🌊❤️",
        reactionMessage:
          "Verte tranquila y contenta junto a mí no tiene precio, cariñito mío.",
        badge: "Mi paz favorita",
      },
    ],
  },
  {
    id: "q3",
    question: "¿A quién elegiría mil veces en cualquier universo?",
    subtitle: "Aunque existan un millón de líneas del tiempo...",
    options: [
      {
        text: "A mí hoy, mañana y siempre ❤️",
        reactionTitle: "¡En todos los universos posibles! 🌌💍",
        reactionMessage:
          "Te juro que si volviera a nacer, te volvería a buscar hasta encontrarte otra vez, mi preciosa.",
        badge: "Contigo siempre",
      },
      {
        text: "A tu compañera de chompas navideñas 🎄🦌",
        reactionTitle: "¡En todas las Navidades que vengan! 🎄🤍",
        reactionMessage:
          "Quiero seguir combinando chompas, haciendo planes y viviendo mil cosas contigo.",
        badge: "Mi hogar eres tú",
      },
      {
        text: "A mi compañera de gym y aventuras 💪❤️",
        reactionTitle: "¡El mejor equipo en todo! 🎨💝",
        reactionMessage:
          "Cada mes contigo se vuelve más especial que el anterior, corazón de melocotón.",
        badge: "Nuestro primer año",
      },
    ],
  },
  {
    id: "q4",
    question: "¿Quién hace mis días mil veces más bonitos solo con estar?",
    subtitle: "Última pregunta de este jueguito, guapa...",
    options: [
      {
        text: "¡Liz, tu corazón de melocotón! 💘",
        reactionTitle: "¡¡SIEMPRE TÚ, MI AMORCINI!! 🎆💖",
        reactionMessage:
          "Gracias por este primer año tan increíble. ¡Te amo más de lo que te imaginas!",
        badge: "1 Año Juntos ❤️",
      },
      {
        text: "La que te llena de besitos 💋",
        reactionTitle: "¡Mis besitos favoritos! 😘❤️",
        reactionMessage:
          "Que nunca me falten tus besos, tus abrazos ni tus ganas de reírte conmigo todos los días.",
        badge: "Puro cariño",
      },
    ],
  },
];

// 24 sobres destacados + generador completo de las 365 razones para amarte
export const FEATURED_LOVE_REASONS = [
  {
    number: 1,
    category: "Tu Sonrisa",
    text: "Porque una sola sonrisa tuya me cambia el humor por completo, sin importar lo pesado que haya estado el día.",
  },
  {
    number: 2,
    category: "Tu Mirada",
    text: "Porque tus ojitos detrás de tus lentes son mi debilidad, mi niña bonita.",
  },
  {
    number: 3,
    category: "Nosotros",
    text: "Porque contigo hasta ir en combi o tomarnos un cafecito rápido se siente especial.",
  },
  {
    number: 4,
    category: "Cómo Eres",
    text: "Porque amo cómo eres: tan dulce, tan auténtica y tan tú, mi muñequita bonita.",
  },
  {
    number: 5,
    category: "En el Lago",
    text: "Porque ese ratito en el lago Titicaca con tu cabeza en mi hombro sentí una paz que no había sentido nunca.",
  },
  {
    number: 6,
    category: "Nuestros Detalles",
    text: "Porque guardo con todo el corazón cada detalle tuyo, cada recuerdo y todas nuestras fotos.",
  },
  {
    number: 7,
    category: "Cualquier Plan",
    text: "Porque no hace falta tener el plan perfecto si lo paso contigo, preciosa.",
  },
  {
    number: 8,
    category: "Jugar Juntos",
    text: "Porque podemos pasar horas jugando Tekken de la mano o armando bloquecitos y nunca me aburro contigo.",
  },
  {
    number: 9,
    category: "Qué Guapa",
    text: "Porque te ves hermosa con vestido de gala en el festival y también despeinada o con ropa del gym, mi niña guapa.",
  },
  {
    number: 10,
    category: "Tu Mundo",
    text: "Porque me da demasiada ternura tu ladito Hello Kitty y cómo te emocionas con las cosas bonitas.",
  },
  {
    number: 11,
    category: "Mi Mundo",
    text: "Porque te pusiste ese vestido de Spider-Girl para acompañarme al cine y me hiciste el chico más feliz del mundo.",
  },
  {
    number: 12,
    category: "Tus Abrazos",
    text: "Porque cuando me abrazas fuerte o te apoyas en mi pecho siento que ahí es mi lugar, corazón.",
  },
  {
    number: 13,
    category: "Nuestras Citas",
    text: "Porque cada salida por pizza, heladitos, tequeños o toritos de Pucará contigo es un planazo.",
  },
  {
    number: 14,
    category: "Navidad",
    text: "Porque ponerme esa chompa de reno combinada contigo en Navidad fue de lo más lindo del año.",
  },
  {
    number: 15,
    category: "Aventuras",
    text: "Porque subir a la rueda de la fortuna de noche contigo me enseñó que a tu lado cualquier miedo se vuelve risa.",
  },
  {
    number: 16,
    category: "Me Haces Mejor",
    text: "Porque me dan ganas de ser mejor persona cada día para cuidarte y hacerte feliz, cariñito mío.",
  },
  {
    number: 17,
    category: "Tu Risa",
    text: "Porque escuchar tu risa cuando te da ataque de risa es mi sonido favorito.",
  },
  {
    number: 18,
    category: "Confianza",
    text: "Porque contigo no tengo que fingir nada: puedo reírme como niño, hacer tonterías y ser yo mismo.",
  },
  {
    number: 19,
    category: "Tu Cariño",
    text: "Porque tu cariño y tu paciencia hacen que todo sea mucho más bonito, mi melocotini.",
  },
  {
    number: 20,
    category: "Equipo",
    text: "Porque somos un equipazo para todo: en el gym, en las salidas, en los buenos momentos y en los difíciles.",
  },
  {
    number: 21,
    category: "Qué Suerte",
    text: "Porque cada vez que te veo distraída pienso en la suerte gigante que tengo de tenerte como novia, guapa.",
  },
  {
    number: 22,
    category: "Como el Primer Día",
    text: "Porque después de un año entero, me sigues poniendo igual de nervioso y enamorado que al principio, mi amorcini.",
  },
  {
    number: 23,
    category: "Te Elijo",
    text: "Porque te elegiría hoy, mañana y mil veces más sin pensarlo ni medio segundo, mi preciosa.",
  },
  {
    number: 365,
    category: "Para Siempre",
    text: "Porque este primer año juntos es recién el comienzo de todo lo que quiero vivir contigo. ¡Te amo un montón, corazón de melocotón!",
  },
];

// Generador de las 365 razones completas para que ella pueda explorar cualquier día del año (1 al 365)
const EXTRA_REASONS_POOL = [
  "Porque cuando me agarras de la mano siento que nada malo puede pasar.",
  "Porque tus besos me quitan cualquier estrés en dos segundos, corazón.",
  "Porque me encanta cómo te brillan los ojos cuando me cuentas algo que te emociona.",
  "Porque eres dulce pero también bien fuerte cuando hace falta, mi niña bonita.",
  "Porque apenas me llega un mensaje tuyo al celular ya me sacas una sonrisa.",
  "Porque me encanta tomarte fotos desprevenida y ver lo linda que sales siempre.",
  "Porque haces que hasta el frío de Puno se sienta rico cuando estamos abrazados.",
  "Porque te preocupas por mí hasta en las cosas más chiquitas del día, cariñito mío.",
  "Porque verte tan feliz en tu cumpleaños con tus flores fue inolvidable.",
  "Porque hiciste que celebrar nuestros cumpleaños juntos fuera inolvidable.",
  "Porque me encanta cómo te quedan tus lentes y tu labial rojo, guapa.",
  "Porque compartir un postre contigo sabe el doble de rico, mi melocotini.",
  "Porque contigo aprendí lo bonito que es querer de verdad.",
  "Porque hasta quedarnos callados juntos se siente cómodo y lindo, mi amorcini.",
  "Porque apenas me despierto ya pienso en ti, mi muñequita bonita.",
  "Porque ahora escucho canciones bonitas y en todas pienso en ti.",
  "Porque con una sola mirada ya nos entendemos y nos damos risa.",
  "Porque me encanta acompañarte a donde vayas aunque sea a hacer un mandado.",
  "Porque tienes el corazón más lindo y noble que conozco, mi preciosa.",
  "Porque gracias a ti este año tuvo 365 días que no cambiaría por nada, corazón de melocotón.",
];

export const getReasonByDay = (dayNumber) => {
  const found = FEATURED_LOVE_REASONS.find((r) => r.number === dayNumber);
  if (found) return found;
  const text = EXTRA_REASONS_POOL[(dayNumber - 1) % EXTRA_REASONS_POOL.length];
  return {
    number: dayNumber,
    category: `Día #${dayNumber} de nuestro año`,
    text,
  };
};

// Contenido de La Carta Más Importante
export const LOVE_LETTER_CONTENT = {
  salutation: "Para mi niña bonita, mi Liz:",
  paragraphs: [
    "Hoy cumplimos nuestro primer año juntos, mi preciosa, y viendo todas estas fotos y videos me pongo tan feliz al acordarme de todo lo que ya vivimos. Quién diría que todo empezó simplemente como amigos, sin pensar ni por un segundo que llegaríamos a ser algo más: primero aquella salida con Eleane, y después el día en que hiciste la huatia de tu facu, cuando me llamaste para bailar ahí y todos empezaron a molestarnos… desde ese momento lo pensé y me dije: «no nos llevamos nada mal, hacemos un muy buen dúo».",
    "Así me fui enamorando de ti poco a poco, hasta el día en que celebramos las firmas para tu bachiller, donde pasó todo. La verdad es que las cosas no pasan así por así; no sé cómo habría terminado ese día si Liz no nos hubiera mentido y no nos hubiéramos juntado con su amiga… tal vez toda nuestra historia sería distinta, pero siempre voy a agradecer ese día en que empezó todo lo nuestro.",
    "Sé que también pasamos momentos muy difíciles, pero hemos vivido días maravillosos y compartido tantas cosas en tan poco tiempo que se siente como si ya lleváramos mucho más de un año juntos. Desde nuestras primeras citas tomando vino y comiendo pizza, los heladitos frente a la Plaza, nuestros cafecitos, nuestras chompas navideñas iguales y ese paseo en el lago con tu cabecita en mi hombro, hasta tu mundo de Hello Kitty y mi mundo de Spider-Man, el gym, armar bloquecitos, jugar Tekken agarrados de la mano y celebrar nuestros cumpleaños juntos.",
    "Si tengo que luchar por ti un millón de veces, yo lo haré un millón de veces más, pero elevado al infinito, porque realmente quiero que seas tú. Me gustas tanto, amorcito mío… me gustan tus ojitos, tu carita bonita, tus gestos, tu manera tan tierna de ver las cosas, tu cuerpecito bonito, tus manos, tus pies… amo todo de ti, corazón. Amo la manera en que me dices que me amas, cuando me miras a los ojos y me acaricias.",
    "Estoy muy agradecido por tenerte a mi lado, mi muñequita bonita, porque no solo somos un dúo muy bonito, sino que nos complementamos súper bien y tenemos muchos gustos parecidos. Quiero seguir saliendo contigo a mil sitios más, comiendo rico, sacándote fotos cuando te distraes, mi amorcini, y eligiéndote hoy, mañana y en todos los universos posibles. Amo todo de ti, mi reina hermosa. ¡Feliz 1er aniversario, corazoncito de melocotón! Espero que sean muchisisísimos más años así.",
  ],
  closing: "Con todo mi amor, siempre tuyo,",
  signature: "José ❤️",
  postscript: "P.D.: Gracias por este año tan increíble juntos, cariñito mío. Te amo infinito ❤️",
};

// Todos los 15 videos reales verificados para la Sala de Cine ("Nuestros Videos").
// defaultRotation: grados para enderezar videos grabados de lado (0, 90, -90, 180).
const v = (file) => mediaUrl(`WhatsApp Video 2026-11-11 at ${file}.mp4`);

export const VIDEO_GALLERY_ITEMS = [
  {
    id: "vid-1",
    src: v("9.10.12 AM (1)"),
    poster: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.46 PM.jpeg"),
    title: "Con ganas de volverte a enamorar",
    subtitle: "Cantando juntos en el sillón azul",
    description:
      "«Bebé, hoy me levanté con ganas de volverte a enamorar...» Nosotros dos cantando y señalándonos bien felices en el sillón. De mis videos favoritos.",
    duration: "0:14",
    category: "nosotros",
    badge: "Favorito de Nosotros ❤️",
    defaultRotation: 0,
  },
  {
    id: "vid-2",
    src: v("9.01.22 AM"),
    poster: null,
    title: "Fiesta con orejitas",
    subtitle: "Tú de conejita y yo de zorrito",
    description:
      "Bailando juntos y pasándola súper bien en la fiesta con nuestras orejitas puestas.",
    duration: "0:12",
    category: "nosotros",
    badge: "Fiesta & Disfraces 🐰🦊",
    defaultRotation: 0,
  },
  {
    id: "vid-3",
    src: v("9.01.31 AM"),
    poster: null,
    title: "Caminando de la mano",
    subtitle: "Nuestras sombras juntitas en la calle",
    description:
      "Caminando agarrados de la mano y viendo cómo nuestras sombras iban pegaditas en la vereda.",
    duration: "0:06",
    category: "nosotros",
    badge: "De la Mano 🤝✨",
    defaultRotation: 0,
  },
  {
    id: "vid-4",
    src: v("9.01.23 AM"),
    poster: null,
    title: "Tardecita juntos en el parque",
    subtitle: "Sonriendo y haciéndonos ojitos a la cámara",
    description:
      "Sentados al aire libre haciéndonos gestos tiernos y riéndonos frente al celular, mi niña bonita.",
    duration: "0:06",
    category: "nosotros",
    badge: "Tarde Juntos 🌅",
    defaultRotation: -90,
  },
  {
    id: "vid-5",
    src: v("9.01.29 AM (1)"),
    poster: null,
    title: "Mira qué bonito brilla tu amor",
    subtitle: "Grabándonos mientras caminábamos",
    description:
      "Un videíto espontáneo caminando juntos abrigados con esa canción tan linda de fondo.",
    duration: "0:04",
    category: "nosotros",
    badge: "Paseo Juntos 💫",
    defaultRotation: -90,
  },
  {
    id: "vid-6",
    src: v("9.01.28 AM"),
    poster: null,
    title: "Cortito pero puro amor",
    subtitle: "Segundos rápidos riéndonos juntos",
    description:
      "Esos videos cortitos donde apenas prendemos la cámara ya nos estamos riendo los dos.",
    duration: "0:02",
    category: "nosotros",
    badge: "Risas Juntos 😊",
    defaultRotation: -90,
  },
  {
    id: "vid-7",
    src: v("9.01.29 AM"),
    poster: null,
    title: "En el muelle frente al lago",
    subtitle: "Tu signo de paz y mi pulgar arriba",
    description:
      "Sentaditos junto a la baranda blanca con el agua atrás, pasando un buen rato contigo, corazón.",
    duration: "0:02",
    category: "nosotros",
    badge: "En el Muelle ✌️",
    defaultRotation: -90,
  },
  {
    id: "vid-8",
    src: v("9.10.08 AM"),
    poster: null,
    title: "Viendo cómo caminas",
    subtitle: "Cuando volteas y me regalas esa sonrisa",
    description:
      "Grabándote caminar toda guapa por el pasaje hasta que volteas a mirarme.",
    duration: "0:05",
    category: "ella",
    badge: "Mi Niña Guapa 👑",
    defaultRotation: 0,
  },
  {
    id: "vid-9",
    src: v("9.01.43 AM"),
    poster: null,
    title: "Corazón con tus manitas",
    subtitle: "Sonriéndome y haciéndome un corazón",
    description:
      "Con tu corsé negro haciéndome un corazoncito con las manos. Cómo me derrites, mi preciosa.",
    duration: "0:14",
    category: "ella",
    badge: "Corazón para Mí 🫶",
    defaultRotation: 0,
  },
  {
    id: "vid-10",
    src: v("9.01.47 AM"),
    poster: null,
    title: "Tus lentes rojos y tu moñito",
    subtitle: "Esa miradita y tu sonrisa al final",
    description:
      "Es que cada gesto tuyo con tus lentes rojos y tu blusa de moñito blanco me vuelve loco, mi niña guapa.",
    duration: "0:12",
    category: "ella",
    badge: "Pura Ternura 🎀",
    defaultRotation: 0,
  },
  {
    id: "vid-11",
    src: v("9.09.38 AM"),
    poster: mediaUrl("WhatsApp Image 2026-11-11 at 9.09.16 AM (1).jpeg"),
    title: "La magia de tus besos",
    subtitle: "«Llevo en mis venas la magia de tus besos...»",
    description:
      "Tú tan linda con tus lentes rojos y chompita marrón cantándome esta canción, mi melocotini.",
    duration: "0:14",
    category: "ella",
    badge: "Dedicatoria Linda 🎶",
    defaultRotation: 90,
  },
  {
    id: "vid-12",
    src: v("9.01.42 AM"),
    poster: null,
    title: "Tu manita en la mejilla",
    subtitle: "Con tus lentes redondos y carita tierna",
    description:
      "Grabándote tranquilita apoyada en tu mano, viéndote tan guapa como siempre.",
    duration: "0:22",
    category: "ella",
    badge: "Qué Linda Eres ✨",
    defaultRotation: -90,
  },
  {
    id: "vid-13",
    src: v("9.10.11 AM"),
    poster: mediaUrl("WhatsApp Image 2026-11-11 at 9.08.56 AM.jpeg"),
    title: "Tu TikTok cantando",
    subtitle: "@vanesa_10c con toda la actitud",
    description:
      "Me encanta verte así de divertida y linda cantando frente a la cámara, mi amorcini.",
    duration: "0:14",
    category: "ella",
    badge: "Tu Actitud 💖",
    defaultRotation: 0,
  },
  {
    id: "vid-14",
    src: v("9.09.38 AM (1)"),
    poster: mediaUrl("WhatsApp Image 2025-12-11 at 10.16.42 PM (1).jpeg"),
    title: "Lleno de tus besos (x4)",
    subtitle: "Cuatro pantallas con el filtro de besos",
    description:
      "Yo todo feliz cantando con el filtro de besos rojos por toda la cara x4.",
    duration: "0:14",
    category: "divertidos",
    badge: "Lleno de Besos 💋",
    defaultRotation: 0,
  },
  {
    id: "vid-15",
    src: v("9.10.12 AM"),
    poster: mediaUrl("WhatsApp Image 2026-11-11 at 9.10.10 AM.jpeg"),
    title: "Diablito lleno de besitos",
    subtitle: "«...ella me respondió que es una diabla y que no se enamora»",
    description:
      "Yo echado con mi hoodie gris haciendo playback con besitos solo para sacarte una risa, cariñito mío.",
    duration: "0:14",
    category: "divertidos",
    badge: "Para Hacerte Reír 😘",
    defaultRotation: 0,
  },
];
