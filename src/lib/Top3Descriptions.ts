import { StaticImageData } from 'next/image';
import barrancasCamping from '@/assets/adicional/barrancasCamping.jpg';
import barrancasGroup from '@/assets/adicional/barrancasGroup.jpg';
import barrancasHike from '@/assets/adicional/barrancasHike.jpg';
import barrancasRapidos from '@/assets/adicional/barrancasRapidos.jpg';

export interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  image: StaticImageData;
  highlight?: boolean;
  slug?: string;
}

export const topAdicionalesData: BlogPost[] = [
  {
    id: 1,
    category: 'Aventura',
    title: 'Cañón de Namúrachi y Misiones',
    slug: 'canon-de-namurachi-y-misiones',
    description:
      'Dos misiones coloniales y el cañón con cuevas y altar cristero. Incluye traslados, guía SECTUR y seguro carretero. 7 - 8 h (ideal antes 11:00).   Recomendación: calzado cómodo, gorra, bloqueador, cámara.',
    image: barrancasCamping,
    highlight: true,
  },
  {
    id: 2,
    category: 'Familia',
    title: 'Ruta Cañón del Maíz',
    slug: 'ruta-canon-del-maiz',
    description:
      'Paisaje volcánico, pinturas rupestres y mirador menonita con vistas de Cuauhtémoc; visita San Andrés Riva Palacio. Incluye entradas, traslados, guía y seguro.',
    image: barrancasGroup,
    highlight: true,
  },
  {
    id: 3,
    category: 'Aventura',
    title: 'Cañón del Pegüis',
    slug: 'canon-del-peguis',
    description:
      'Canoa entre paredes de 300 m en el desierto. Incluye traslados, entrada, guía y equipo. Abril - Junio (09:00 h).',
    image: barrancasHike,
    highlight: true,
  },
];
