import { StaticImageData } from 'next/image';
import barrancasCamping from '@/assets/adicional/barrancasCamping.jpg';
import barrancasGroup from '@/assets/adicional/barrancasGroup.jpg';
import barrancasHike from '@/assets/adicional/barrancasHike.jpg';
import barrancasRapidos from '@/assets/adicional/barrancasRapidos.jpg';

export interface ExperienciaAdicional {
  id: string;
  slug: string;
  title: string;
  category: 'Aventura' | 'Familia' | 'Romance' | 'Naturaleza';
  image: StaticImageData;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export const experienciasAdicionalesData: ExperienciaAdicional[] = [
  {
    id: '1',
    slug: 'canon-namuarchi-misiones',
    title: 'Cañón de Namúrachi y Misiones',
    category: 'Aventura',
    image: barrancasCamping,
    description: 'Dos misiones coloniales y el cañón con cuevas y altar cristero. Incluye traslados, guía SECTUR y seguro carretero. 7 - 8 h (ideal antes 11:00). Recomendación: calzado cómodo, gorra, bloqueador, cámara.',
    buttonText: 'Reservar ahora',
    buttonLink: '/reservas/canon-namuarchi-misiones',
  },
  {
    id: '2',
    slug: 'ruta-canon-maiz',
    title: 'Ruta Cañón del Maíz',
    category: 'Familia',
    image: barrancasGroup,
    description: 'Paisaje volcánico, pinturas rupestres y mirador menonita con vistas de Cuauhtémoc; visita San Andrés Riva Palacio. Incluye entradas, traslados, guía y seguro.',
    buttonText: 'Ver más detalles',
    buttonLink: '/reservas/ruta-canon-maiz',
  },
  {
    id: '3',
    slug: 'canon-peguis',
    title: 'Cañón del Pegüis',
    category: 'Aventura',
    image: barrancasHike,
    description: 'Canoa entre paredes de 300 m en el desierto. Incluye traslados, entrada, guía y equipo. Abril - Junio (09:00 h).',    buttonText: 'Agendar experiencia',
    buttonLink: '/reservas/canon-peguis',  },
  {
    id: '4',
    slug: 'ruta-haciendas',
    title: 'Ruta de las Haciendas',
    category: 'Naturaleza',
    image: barrancasRapidos,
    description: 'Ex Hacienda El Torreón, Museo El Sauz, Cueva de las Monas y Obelisco de la Batalla de Sacramento. Incluye traslados y guía.',
    buttonText: 'Explorar',
    buttonLink: '/reservas/ruta-haciendas',
  },
  {
    id: '5',
    slug: 'puesta-sol-romantica',
    title: 'Puesta de Sol Romántica',
    category: 'Romance',
    image: barrancasCamping,
    description: 'Experiencia única al atardecer en los miradores más hermosos de las Barrancas. Incluye cena especial y fotografías profesionales.',
    buttonText: 'Regala romance',
    buttonLink: '/reservas/puesta-sol-romantica',
  },
  {
    id: '6',
    slug: 'aventura-rapidos',
    title: 'Aventura en Rápidos',
    category: 'Aventura',
    image: barrancasRapidos,
    description: 'Descenso emocionante por los rápidos de la región. Para los más aventureros. Incluye equipo de seguridad y guía certificado.',
    buttonText: 'Vivir la adrenalina',
    buttonLink: '/reservas/aventura-rapidos',
  },
  {
    id: '7',
    slug: 'picnic-naturaleza',
    title: 'Picnic en la Naturaleza',
    category: 'Familia',
    image: barrancasGroup,
    description: 'Día completo en la naturaleza con actividades para toda la familia. Incluye comidas y transporte.',
    buttonText: 'Planificar día en familia',
    buttonLink: '/reservas/picnic-naturaleza',
  },
  {
    id: '8',
    slug: 'senderismo-guiado',
    title: 'Senderismo Guiado',
    category: 'Naturaleza',
    image: barrancasHike,
    description: 'Recorrido guiado por los senderos más hermosos. Aprende sobre flora, fauna e historia local.',
    buttonText: 'Iniciar caminata',
    buttonLink: '/reservas/senderismo-guiado',
  },
];

export const categoriasAdicionales = ['Aventura', 'Familia', 'Romance', 'Naturaleza'] as const;
