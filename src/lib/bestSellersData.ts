import { StaticImageData } from 'next/image';

// Image imports
import image1 from '@/assets/heroContent/bestSellersImage.jpg';
import image2 from '@/assets/heroContent/bestSellerMin.webp';
import image3 from '@/assets/heroContent/bestSellers/barrancas-images-1.webp';
import image4 from '@/assets/heroContent/bestSellers/barrancas-images-2.webp';
import image5 from '@/assets/heroContent/bestSellers/barrancas-images-3.webp';
import image6 from '@/assets/heroContent/bestSellers/barrancas-images-4.webp';
import image7 from '@/assets/heroContent/bestSellers/barrancas-images-5.webp';
import image8 from '@/assets/heroContent/bestSellers/barrancas-images-6.webp';

export interface BestSellerCard {
  title: string;
  subtitulo: string;
  description: string;
  src: string | StaticImageData;
  link: string;
}

export const bestSellersCards: BestSellerCard[] = [
  {
    title: "Mayor Ranking",
    subtitulo: "5 Días de Excelencia",
    description: "Recorre el Chepe, miradores, cultura rarámuri y escenarios únicos en un viaje premium.",
    src: image6,
    link: "/itinerarios/mayor-ranking",
  },
  {
    title: "Cañón de Urique",
    subtitulo: "6 Días de Altura",
    description: "Admira vistas arrebatadoras desde 2 300 m, vive el mirador del Cerro del Gallego y hospedaje superior.",
    src: image7,
    link: "/itinerarios/canon-urique",
  },
  {
    title: "Leyendas del Fuerte",
    subtitulo: "7 Días Premium",
    description: "Combina historia, el tre chepe, naturaleza intacta y momentos exclusivos en un solo viaje.",
    src: image3,
    link: "/itinerarios/leyendas-del-fuerte",
  },
  {
    title: "Mar & Barrancas",
    subtitulo: "8 Días de Ensueño",
    description: "De la sierra a la costa, vive una travesía única, comodidad y paisajes de otro mundo.",
    src: image4,
    link: "/itinerarios/mar-de-cortes-y-barrancas",
  },
  {
    title: "Favorito de Todos",
    subtitulo: "8 Días Increíbles",
    description: "La experiencia más solicitada que combina sierra, tren, playa y todos los mejores momentos.",
    src: image5,
    link: "/itinerarios/favorito-de-todos",
  },
];
