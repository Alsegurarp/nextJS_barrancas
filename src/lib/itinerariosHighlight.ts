import { StaticImageData } from 'next/image';
import canonUrique from '@/assets/Itinerarios/PortadasItinerarios/canon_de_urique.webp';
import losCabos from '@/assets/Itinerarios/PortadasItinerarios/los_cabos_y_barrancas_del_cobre.webp';
import favoritoDeTodos from '@/assets/Itinerarios/PortadasItinerarios/el_favorito_de_todos.webp';
import mayorRanking from '@/assets/Itinerarios/PortadasItinerarios/el_de_mayor_ranking.webp';

export interface ItinerarioHighlight {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  contentDesktop?: string;
  image: StaticImageData;
  date: string;
  author?: string;
  readTime?: string;
  duration: string;
  difficulty: string;
}

export const itinerariosHighlight: ItinerarioHighlight[] = [
  {
    id: '1',
    slug: 'canon-urique-adventure',
    title: 'Canon Urique: La Joya Escondida',
    description: 'Descubre el cañón más profundo de América del Norte en una aventura incomparable.',
    content: 'El Canon Urique es el destino estrella de las Barrancas del Cobre. Con profundidades que superan los 1,879 metros, es más profundo que el Gran Cañón de Arizona. Durante esta expedición, experimentarás vistas panorámicas spektaculares, te sumergirás en la cultura Tarahumara y disfrutarás de aventuras emocionantes. Nuestros guías expertos te llevarán por los mejores senderos, asegurándose que cada momento sea memorable y seguro.',
    contentDesktop: 'Esta experiencia de 6 días combina senderismo desafiante con momentos de relajación en campamentos base cómodos. Verás la flora y fauna única del cañón, probarás la gastronomía local auténtica y aprenderás sobre la historia ancestral de la región. Es una aventura transformadora para aquellos que buscan conexión profunda con la naturaleza.',
    image: canonUrique,
    date: 'Descubre México',
    author: 'Adventure Guides',
    readTime: '7 min',
    duration: '6 Días / 5 Noches',
    difficulty: 'Avanzado',
  },
  {
    id: '2',
    slug: 'cabos-barrancas-fusion',
    title: 'Los Cabos y Las Barrancas: Fusión de Destinos',
    description: 'Combina playas paradisíacas con cañones espectaculares en un itinerario único.',
    content: 'Este viaje combina lo mejor de dos mundos: las playas de lujo de Los Cabos con la majestuosidad silvestre de las Barrancas del Cobre. Disfruta de resorts de clase mundial, spas de lujo y vida nocturna vibrante en Los Cabos, y luego sumérgete en la naturaleza prístina de los cañones. La transición perfecta entre confort y aventura.',
    contentDesktop: 'Ideal para parejas y familias que buscan variedad. Pasarás días relajándote en playas de arena blanca y noches bajo las estrellas del desierto. Incluye actividades acuáticas en Los Cabos, senderismo guiado en las Barrancas, encuentros culturales con comunidades locales y gastronomía de clase mundial. Una experiencia verdaderamente balanceada.',
    image: losCabos,
    date: 'La belleza del pacífico',
    author: 'Travel Specialists',
    readTime: '8 min',
    duration: '8 Días / 7 Noches',
    difficulty: 'Moderado',
  },
  {
    id: '3',
    slug: 'favorito-de-todos',
    title: 'El Favorito de Todos',
    description: 'El itinerario más solicitado: experiencia completa de las Barrancas.',
    content: 'Este es nuestro itinerario más popular porque ofrece el balance perfecto entre aventura y comodidad. Visitarás los puntos más espectaculares de las Barrancas del Cobre, desde miradores panorámicos hasta senderos de senderismo emocionantes. Cada momento está diseñado para maximizar tu conexión con la naturaleza.',
    contentDesktop: 'Con una tasa de satisfacción del 98%, este itinerario es perfecto para visitantes de todos los niveles. Incluye campings bajo las estrellas, comidas caseras preparadas con ingredientes locales, encuentros auténticos con el pueblo Tarahumara, fotografía de vida silvestre y momentos de tranquilidad en cascadas naturales. Los viajeros regresan año tras año.',
    image: favoritoDeTodos,
    date: 'Senderismo único',
    author: 'Expert Team',
    readTime: '6 min',
    duration: '6 Días / 5 Noches',
    difficulty: 'Moderado',
  },
  {
    id: '4',
    slug: 'mayor-ranking-expedition',
    title: 'El de Mayor Ranking: Expedición Elite',
    description: 'Reservado para los buscadores de experiencias premium y únicas.',
    content: 'Esta expedición de lujo lleva tu viaje a un nivel completamente diferente. Con un grupo reducido de aventureros selectos, explorarás áreas remotas raramente visitadas, acompañados por guías especializados y equipo de clase mundial. Cada detalle está pensado para ofrecerte comodidad y seguridad extrema.',
    contentDesktop: 'Servicios VIP incluyen campamentos glamping con camas cómodas, chef personal, equipo fotográfico profesional, helicóptero para observación aérea de los cañones, y acceso privado a sitios arqueológicos. Limitado a 8 personas por expedición. Ideal para corporativos, celebridades y viajeros que exigen lo mejor. Una experiencia completamente personalizada y exclusiva.',
    image: mayorRanking,
    date: 'Perfecto para grupos',
    author: 'Premium Concierge',
    readTime: '9 min',
    duration: '7 Días / 6 Noches',
    difficulty: 'Personalizado',
  },
];

export const getItinerarioHighlightBySlug = (slug: string): ItinerarioHighlight | undefined => {
  return itinerariosHighlight.find(itinerary => itinerary.slug === slug);
};

export const getItinerarioHighlightById = (id: string): ItinerarioHighlight | undefined => {
  return itinerariosHighlight.find(itinerary => itinerary.id === id);
};
