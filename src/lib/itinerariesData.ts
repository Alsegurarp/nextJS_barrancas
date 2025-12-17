import image1 from '@/assets/Portadas/HeroImage.webp';
import image2 from '@/assets/Portadas/HeroImage2.webp';
import imageCardItinerario1 from '@/assets/itinerariosImages/hotel-barrancas1.webp';
import imageCardItinerario2 from '@/assets/itinerariosImages/hotel-barrancas2.webp';
import imageCardItinerario3 from '@/assets/itinerariosImages/hotel-barrancas3.webp';
import imageCardItinerario4 from '@/assets/itinerariosImages/hotel-barrancas4.webp';
import imageCardItinerario5 from '@/assets/itinerariosImages/hotel-barrancas5.webp';
import imageCardItinerario6 from '@/assets/itinerariosImages/hotel-barrancas6.webp';
import { StaticImageData } from 'next/image';
import { FaCheck } from 'react-icons/fa6';
import { IconType } from 'react-icons';

export interface PricingSection {
  title: string;
  items: Array<{
    label: string;
    price: string;
  }>;
  onReserve?: () => void;
}

export interface ItineraryData {
  slug: string;
  title: string;
  description: string;
  heroImage: StaticImageData;
  category: 'parejas' | 'aventura' | 'chepe' | 'best sellers';
  duration: string;
  price: string;
  experiences: Array<{
    image: StaticImageData;
    title: string;
    description: string;
    buttonText: string;
  }>;
  incluye: Array<{
    label: string;
    icon: IconType;
    description?: string | string[];
    image?: StaticImageData;
    program?: string;
  }>;
  pricing?: PricingSection[];
  hotels?: Array<{
    id: string;
    title: string;
    description: string;
    image?: StaticImageData;
  }>;
}

export const itinerariesData: Record<string, ItineraryData> = {
  'canon-urique': {
    slug: 'canon-urique',
    title: 'Romántica en Barrancas',
    description: 'Experiencia romántica en las Barrancas del Cobre, uno de los sistemas de barrancas más largos y profundos del mundo.',
    heroImage: image1,
    category: 'parejas',
    duration: '4 días / 3 noches',
    price: '$20,500 MXN',
    experiences: [
      {
        image: image1,
        title: 'Día 1: Llegada a Chihuahua',
        description: 'Conocerás Las Barrancas del Cobre, uno de los sistemas de barrancas más largos y profundos del mundo.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: image2,
        title: 'Día 2: Viaje en Chepe Express',
        description: 'Realizarás un viaje a las Barrancas del Cobre, conviértete en uno de los visitantes del destino turístico más importante de México.',
        buttonText: 'Contacta ahora',
      },
    ],
    incluye: [
      {
        label: 'Incluye',
        icon: FaCheck,
        description: [
          'Boleto de avión viaje redondo saliendo de la Ciudad de México, Monterrey, Guadalajara o Tijuana.',
          'Traslados Aeropuerto-Hotel-Aeropuerto.',
          'Traslado Chihuahua - Creel.',
          'Tren Chepe Express Clase Ejecutiva.',
          '5 Días 4 Noches de hospedaje en hoteles de categoría Premium.',
          'Guías certificados por SECTUR y expertos en el destino.',
          'Tour “Cuna de la Revolución” en la Ciudad de Chihuahua.',
          'Tour al Valle de los Hongos, Valle de las Ranas, Misión de San Ignacio, Lago de Arareko y una espectacular Cueva Tarahumara.',
          'Tour caminata por los espectaculares miradores de las Barrancas del Cobre.',
          'Tour a Divisadero y La Piedra Volada en las Barrancas del Cobre.',
          'Entrada al Teleférico en Parque Aventura.',
          'Alimentos acorde al itinerario.',
        ],
        image: imageCardItinerario1,
      },
      {
        label: 'No incluye',
        icon: FaCheck,
        description: [
          'Alimentos no especificados.',
          'Seguro turístico.',
          'Alimentos ni bebidas a bordo del Tren.',
          'Lo que no esté indicado en el apartado “EL VIAJE INCLUYE".',
        ],
        image: imageCardItinerario2,
      },
      {
        label: 'Notas importantes',
        icon: FaCheck,
        description: [
          'Precios por persona de acuerdo al tipo de habitación seleccionada, sujetos a disponibilidad y cambio sin previo aviso.',
          'El itinerario debe comenzar únicamente los días Martes, Jueves y Sábado para alinearse con las salidas programadas del tren. Los meses de Mayo, Junio, Agosto y Septiembre solo hay salidas los días Martes y Jueves.',
          'Para salidas en otros días pregunte a su asesor por la frecuencia de tren.',
          'El itinerario y los tramos en tren puede variar dependiendo del día de inicio.',
          'Tren Chepe Express en clase Ejecutiva.',
          'Para upgrade del Chepe Express en Primera Clase pregunte a su asesor. Éste último incluye acceso a todo el tren.',
          'En puentes y días festivos aplican los precios de temporada de verano.',
          'Se considera menor de los 2 años hasta 11 años.',
          'Con 12 años cumplidos pagará con precio de Adulto.',
        ],
        image: imageCardItinerario2,
      },
    ],
    pricing: [
      {
        title: 'Temporada Regular',
        items: [
          { label: 'Habitación Doble', price: '$41,353' },
          { label: 'Habitación Sencilla', price: '$61,919' },
          { label: 'Habitación Triple', price: '$36,752' },
          { label: 'Menor de 2 a 11 años', price: '$23,834' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$52,500' },
          { label: 'Habitación Sencilla', price: '$73,200' },
          { label: 'Habitación Triple', price: '$47,800' },
          { label: 'Menor de 2 a 11 años', price: '$31,450' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$58,750' },
          { label: 'Habitación Sencilla', price: '$82,100' },
          { label: 'Habitación Triple', price: '$54,300' },
          { label: 'Menor de 2 a 11 años', price: '$36,200' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$67,200' },
          { label: 'Habitación Sencilla', price: '$94,500' },
          { label: 'Habitación Triple', price: '$62,100' },
          { label: 'Menor de 2 a 11 años', price: '$41,400' },
        ],
      },
    ],
    hotels: [
      {
        id: '1',
        title: 'Hotel Barrancas Deluxe',
        description: '5 estrellas | Vista panorámica',
        image: imageCardItinerario1,
      },
      {
        id: '2',
        title: 'Posada Misión',
        description: '4 estrellas | Ambiente colonial',
        image: imageCardItinerario2,
      },
      {
        id: '3',
        title: 'Lodge Aventura Premium',
        description: '5 estrellas | Naturaleza pura',
        image: imageCardItinerario3,
      },
      {
        id: '4',
        title: 'Casa Grande Chihuahua',
        description: '4 estrellas | Centro histórico',
        image: imageCardItinerario4,
      },
      {
        id: '5',
        title: 'Sierra Madre Resort',
        description: '5 estrellas | Todo incluido',
        image: imageCardItinerario5,
      },
      {
        id: '6',
        title: 'Hotel Río Conchos',
        description: '4 estrellas | Frente al río',
        image: imageCardItinerario6,
      },
    ],
  },
  'chepe': {
    slug: 'chepe',
    title: 'Tour Chepe',
    description: 'Viaje en tren a través de las Barrancas del Cobre.',
    heroImage: image1,
    category: 'chepe',
    duration: '3 días / 2 noches',
    price: '$1,800 MXN',
    experiences: [
      {
        image: image1,
        title: 'Día 1: Chihuahua',
        description: 'Llegada a Chihuahua y traslado a la estación del Chepe.',
        buttonText: 'Agenda tu cita',
      },
    ],
    incluye: [
      {
        label: 'Incluye',
        icon: FaCheck,
        description: [
          'Boleto de avión viaje redondo saliendo de la Ciudad de México, Monterrey, Guadalajara o Tijuana.',
          'Traslados Aeropuerto-Hotel-Aeropuerto.',
          'Traslado Chihuahua - Creel.',
          'Tren Chepe Express Clase Ejecutiva.',
          '5 Días 4 Noches de hospedaje en hoteles de categoría Premium.',
          'Guías certificados por SECTUR y expertos en el destino.',
          'Tour “Cuna de la Revolución” en la Ciudad de Chihuahua.',
          'Tour al Valle de los Hongos, Valle de las Ranas, Misión de San Ignacio, Lago de Arareko y una espectacular Cueva Tarahumara.',
          'Tour caminata por los espectaculares miradores de las Barrancas del Cobre.',
          'Tour a Divisadero y La Piedra Volada en las Barrancas del Cobre.',
          'Entrada al Teleférico en Parque Aventura.',
          'Alimentos acorde al itinerario.',
        ],
        image: imageCardItinerario1,
      },
      {
        label: 'No incluye',
        icon: FaCheck,
        description: [
          'Alimentos no especificados.',
          'Seguro turístico.',
          'Alimentos ni bebidas a bordo del Tren.',
          'Lo que no esté indicado en el apartado “EL VIAJE INCLUYE".',
        ],
        image: imageCardItinerario2,
      },
      {
        label: 'Notas importantes',
        icon: FaCheck,
        description: [
          'Precios por persona de acuerdo al tipo de habitación seleccionada, sujetos a disponibilidad y cambio sin previo aviso.',
          'El itinerario debe comenzar únicamente los días Martes, Jueves y Sábado para alinearse con las salidas programadas del tren. Los meses de Mayo, Junio, Agosto y Septiembre solo hay salidas los días Martes y Jueves.',
          'Para salidas en otros días pregunte a su asesor por la frecuencia de tren.',
          'El itinerario y los tramos en tren puede variar dependiendo del día de inicio.',
          'Tren Chepe Express en clase Ejecutiva.',
          'Para upgrade del Chepe Express en Primera Clase pregunte a su asesor. Éste último incluye acceso a todo el tren.',
          'En puentes y días festivos aplican los precios de temporada de verano.',
          'Se considera menor de los 2 años hasta 11 años.',
          'Con 12 años cumplidos pagará con precio de Adulto.',
        ],
        image: imageCardItinerario2,
      },
    ],
    pricing: [
      {
        title: 'Temporada Regular',
        items: [
          { label: 'Habitación Doble', price: '$41,353' },
          { label: 'Habitación Sencilla', price: '$61,919' },
          { label: 'Habitación Triple', price: '$36,752' },
          { label: 'Menor de 2 a 11 años', price: '$23,834' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$52,500' },
          { label: 'Habitación Sencilla', price: '$73,200' },
          { label: 'Habitación Triple', price: '$47,800' },
          { label: 'Menor de 2 a 11 años', price: '$31,450' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$58,750' },
          { label: 'Habitación Sencilla', price: '$82,100' },
          { label: 'Habitación Triple', price: '$54,300' },
          { label: 'Menor de 2 a 11 años', price: '$36,200' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$67,200' },
          { label: 'Habitación Sencilla', price: '$94,500' },
          { label: 'Habitación Triple', price: '$62,100' },
          { label: 'Menor de 2 a 11 años', price: '$41,400' },
        ],
      },
    ]
  },
  'aventura-extrema': {
    slug: 'aventura-extrema',
    title: 'Aventura Extrema',
    description: 'Para los más valientes, actividades de aventura extrema.',
    heroImage: image2,
    category: 'aventura',
    duration: '5 días / 4 noches',
    price: '$3,200 MXN',
    experiences: [
      {
        image: image2,
        title: 'Día 1: Preparación',
        description: 'Preparación y equipo para aventuras extremas.',
        buttonText: 'Agenda tu cita',
      },
    ],
    incluye: [
      {
        label: 'Incluye',
        icon: FaCheck,
        description: [
          'Boleto de avión viaje redondo saliendo de la Ciudad de México, Monterrey, Guadalajara o Tijuana.',
          'Traslados Aeropuerto-Hotel-Aeropuerto.',
          'Traslado Chihuahua - Creel.',
          'Tren Chepe Express Clase Ejecutiva.',
          '5 Días 4 Noches de hospedaje en hoteles de categoría Premium.',
          'Guías certificados por SECTUR y expertos en el destino.',
          'Tour “Cuna de la Revolución” en la Ciudad de Chihuahua.',
          'Tour al Valle de los Hongos, Valle de las Ranas, Misión de San Ignacio, Lago de Arareko y una espectacular Cueva Tarahumara.',
          'Tour caminata por los espectaculares miradores de las Barrancas del Cobre.',
          'Tour a Divisadero y La Piedra Volada en las Barrancas del Cobre.',
          'Entrada al Teleférico en Parque Aventura.',
          'Alimentos acorde al itinerario.',
        ],
        image: imageCardItinerario1,
      },
      {
        label: 'No incluye',
        icon: FaCheck,
        description: [
          'Alimentos no especificados.',
          'Seguro turístico.',
          'Alimentos ni bebidas a bordo del Tren.',
          'Lo que no esté indicado en el apartado “EL VIAJE INCLUYE".',
        ],
        image: imageCardItinerario2,
      },
      {
        label: 'Notas importantes',
        icon: FaCheck,
        description: [
          'Precios por persona de acuerdo al tipo de habitación seleccionada, sujetos a disponibilidad y cambio sin previo aviso.',
          'El itinerario debe comenzar únicamente los días Martes, Jueves y Sábado para alinearse con las salidas programadas del tren. Los meses de Mayo, Junio, Agosto y Septiembre solo hay salidas los días Martes y Jueves.',
          'Para salidas en otros días pregunte a su asesor por la frecuencia de tren.',
          'El itinerario y los tramos en tren puede variar dependiendo del día de inicio.',
          'Tren Chepe Express en clase Ejecutiva.',
          'Para upgrade del Chepe Express en Primera Clase pregunte a su asesor. Éste último incluye acceso a todo el tren.',
          'En puentes y días festivos aplican los precios de temporada de verano.',
          'Se considera menor de los 2 años hasta 11 años.',
          'Con 12 años cumplidos pagará con precio de Adulto.',
        ],
        image: imageCardItinerario2,
      },
    ],
    pricing: [
      {
        title: 'Temporada Regular',
        items: [
          { label: 'Habitación Doble', price: '$32,000' },
          { label: 'Habitación Sencilla', price: '$45,000' },
          { label: 'Habitación Triple', price: '$28,500' },
          { label: 'Menor de 2 a 11 años', price: '$16,000' },
        ],
      },
      {
        title: 'Temporada Alta',
        items: [
          { label: 'Habitación Doble', price: '$42,000' },
          { label: 'Habitación Sencilla', price: '$58,500' },
          { label: 'Habitación Triple', price: '$37,500' },
          { label: 'Menor de 2 a 11 años', price: '$21,000' },
        ],
      },
      {
        title: 'Temporada de Cerezos',
        items: [
          { label: 'Habitación Doble', price: '$48,500' },
          { label: 'Habitación Sencilla', price: '$67,500' },
          { label: 'Habitación Triple', price: '$43,500' },
          { label: 'Menor de 2 a 11 años', price: '$24,250' },
        ],
      },
      {
        title: 'Temporada Navidad',
        items: [
          { label: 'Habitación Doble', price: '$56,000' },
          { label: 'Habitación Sencilla', price: '$78,000' },
          { label: 'Habitación Triple', price: '$50,400' },
          { label: 'Menor de 2 a 11 años', price: '$28,000' },
        ],
      },
    ],
    hotels: [
      {
        id: '1',
        title: 'Adventure Base Camp',
        description: '5 estrellas | Equipo profesional',
        image: imageCardItinerario1,
      },
      {
        id: '2',
        title: 'Extreme Lodge',
        description: '4 estrellas | Centro de acción',
        image: imageCardItinerario2,
      },
      {
        id: '3',
        title: 'Summit Hotel',
        description: '5 estrellas | Vistas de montaña',
        image: imageCardItinerario3,
      },
      {
        id: '4',
        title: 'Wilderness Resort',
        description: '4 estrellas | Naturaleza virgen',
        image: imageCardItinerario4,
      },
    ],
  },
  'luna-de-miel': {
    slug: 'luna-de-miel',
    title: 'Luna de Miel',
    description: 'Perfecta para parejas, experiencia romántica en Barrancas.',
    heroImage: image1,
    category: 'parejas',
    duration: '6 días / 5 noches',
    price: '$4,500 MXN',
    experiences: [
      {
        image: image1,
        title: 'Día 1: Romance',
        description: 'Inicio de tu luna de miel con cena romántica.',
        buttonText: 'Agenda tu cita',
      },
    ],
    incluye: [
      {
        label: 'Incluye',
        icon: FaCheck,
        description: [
          'Boleto de avión viaje redondo saliendo de la Ciudad de México, Monterrey, Guadalajara o Tijuana.',
          'Traslados Aeropuerto-Hotel-Aeropuerto.',
          'Traslado Chihuahua - Creel.',
          'Tren Chepe Express Clase Ejecutiva.',
          '5 Días 4 Noches de hospedaje en hoteles de categoría Premium.',
          'Guías certificados por SECTUR y expertos en el destino.',
          'Tour “Cuna de la Revolución” en la Ciudad de Chihuahua.',
          'Tour al Valle de los Hongos, Valle de las Ranas, Misión de San Ignacio, Lago de Arareko y una espectacular Cueva Tarahumara.',
          'Tour caminata por los espectaculares miradores de las Barrancas del Cobre.',
          'Tour a Divisadero y La Piedra Volada en las Barrancas del Cobre.',
          'Entrada al Teleférico en Parque Aventura.',
          'Alimentos acorde al itinerario.',
        ],
        image: imageCardItinerario1,
      },
      {
        label: 'No incluye',
        icon: FaCheck,
        description: [
          'Alimentos no especificados.',
          'Seguro turístico.',
          'Alimentos ni bebidas a bordo del Tren.',
          'Lo que no esté indicado en el apartado “EL VIAJE INCLUYE".',
        ],
        image: imageCardItinerario2,
      },
      {
        label: 'Notas importantes',
        icon: FaCheck,
        description: [
          'Precios por persona de acuerdo al tipo de habitación seleccionada, sujetos a disponibilidad y cambio sin previo aviso.',
          'El itinerario debe comenzar únicamente los días Martes, Jueves y Sábado para alinearse con las salidas programadas del tren. Los meses de Mayo, Junio, Agosto y Septiembre solo hay salidas los días Martes y Jueves.',
          'Para salidas en otros días pregunte a su asesor por la frecuencia de tren.',
          'El itinerario y los tramos en tren puede variar dependiendo del día de inicio.',
          'Tren Chepe Express en clase Ejecutiva.',
          'Para upgrade del Chepe Express en Primera Clase pregunte a su asesor. Éste último incluye acceso a todo el tren.',
          'En puentes y días festivos aplican los precios de temporada de verano.',
          'Se considera menor de los 2 años hasta 11 años.',
          'Con 12 años cumplidos pagará con precio de Adulto.',
        ],
        image: imageCardItinerario2,
      },
    ],
    pricing: [
      {
        title: 'Temporada Regular',
        items: [
          { label: 'Habitación Doble', price: '$45,000' },
          { label: 'Habitación Sencilla', price: '$62,500' },
          { label: 'Habitación Triple', price: '$40,500' },
          { label: 'Menor de 2 a 11 años', price: '$22,500' },
        ],
      },
      {
        title: 'Temporada Alta',
        items: [
          { label: 'Habitación Doble', price: '$58,000' },
          { label: 'Habitación Sencilla', price: '$80,500' },
          { label: 'Habitación Triple', price: '$52,000' },
          { label: 'Menor de 2 a 11 años', price: '$29,000' },
        ],
      },
      {
        title: 'Temporada de Cerezos',
        items: [
          { label: 'Habitación Doble', price: '$67,000' },
          { label: 'Habitación Sencilla', price: '$93,000' },
          { label: 'Habitación Triple', price: '$60,300' },
          { label: 'Menor de 2 a 11 años', price: '$33,500' },
        ],
      },
      {
        title: 'Temporada Navidad',
        items: [
          { label: 'Habitación Doble', price: '$77,500' },
          { label: 'Habitación Sencilla', price: '$107,500' },
          { label: 'Habitación Triple', price: '$69,750' },
          { label: 'Menor de 2 a 11 años', price: '$38,750' },
        ],
      },
    ],
    hotels: [
      {
        id: '1',
        title: 'Honeymoon Suite Barrancas',
        description: '5 estrellas | Romántico de lujo',
        image: imageCardItinerario1,
      },
      {
        id: '2',
        title: 'Casa Romántica',
        description: '5 estrellas | Privacidad total',
        image: imageCardItinerario2,
      },
      {
        id: '3',
        title: 'Love Nest Resort',
        description: '4 estrellas | Parejas solamente',
        image: imageCardItinerario3,
      },
      {
        id: '4',
        title: 'Barrancas Dreams',
        description: '5 estrellas | Experiencia única',
        image: imageCardItinerario4,
      },
    ],
  },
  'senderismo-intenso': {
    slug: 'senderismo-intenso',
    title: 'Senderismo Intenso',
    description: 'Ruta de montaña desafiante a través de las Barrancas.',
    heroImage: image2,
    category: 'aventura',
    duration: '4 días / 3 noches',
    price: '$2,200 MXN',
    experiences: [
      {
        image: image2,
        title: 'Día 1: Entrenamiento',
        description: 'Sesión de entrenamiento y preparación física.',
        buttonText: 'Agenda tu cita',
      },
    ],
    incluye: [
      {
        label: 'Incluye',
        icon: FaCheck,
        description: [
          'Boleto de avión viaje redondo saliendo de la Ciudad de México, Monterrey, Guadalajara o Tijuana.',
          'Traslados Aeropuerto-Hotel-Aeropuerto.',
          'Traslado Chihuahua - Creel.',
          'Tren Chepe Express Clase Ejecutiva.',
          '5 Días 4 Noches de hospedaje en hoteles de categoría Premium.',
          'Guías certificados por SECTUR y expertos en el destino.',
          'Tour “Cuna de la Revolución” en la Ciudad de Chihuahua.',
          'Tour al Valle de los Hongos, Valle de las Ranas, Misión de San Ignacio, Lago de Arareko y una espectacular Cueva Tarahumara.',
          'Tour caminata por los espectaculares miradores de las Barrancas del Cobre.',
          'Tour a Divisadero y La Piedra Volada en las Barrancas del Cobre.',
          'Entrada al Teleférico en Parque Aventura.',
          'Alimentos acorde al itinerario.',
        ],
        image: imageCardItinerario1,
      },
      {
        label: 'No incluye',
        icon: FaCheck,
        description: [
          'Alimentos no especificados.',
          'Seguro turístico.',
          'Alimentos ni bebidas a bordo del Tren.',
          'Lo que no esté indicado en el apartado “EL VIAJE INCLUYE".',
        ],
        image: imageCardItinerario2,
      },
      {
        label: 'Notas importantes',
        icon: FaCheck,
        description: [
          'Precios por persona de acuerdo al tipo de habitación seleccionada, sujetos a disponibilidad y cambio sin previo aviso.',
          'El itinerario debe comenzar únicamente los días Martes, Jueves y Sábado para alinearse con las salidas programadas del tren. Los meses de Mayo, Junio, Agosto y Septiembre solo hay salidas los días Martes y Jueves.',
          'Para salidas en otros días pregunte a su asesor por la frecuencia de tren.',
          'El itinerario y los tramos en tren puede variar dependiendo del día de inicio.',
          'Tren Chepe Express en clase Ejecutiva.',
          'Para upgrade del Chepe Express en Primera Clase pregunte a su asesor. Éste último incluye acceso a todo el tren.',
          'En puentes y días festivos aplican los precios de temporada de verano.',
          'Se considera menor de los 2 años hasta 11 años.',
          'Con 12 años cumplidos pagará con precio de Adulto.',
        ],
        image: imageCardItinerario2,
      },
    ],
    pricing: [
      {
        title: 'Temporada Regular',
        items: [
          { label: 'Habitación Doble', price: '$22,000' },
          { label: 'Habitación Sencilla', price: '$30,500' },
          { label: 'Habitación Triple', price: '$19,250' },
          { label: 'Menor de 2 a 11 años', price: '$11,000' },
        ],
      },
      {
        title: 'Temporada Alta',
        items: [
          { label: 'Habitación Doble', price: '$28,000' },
          { label: 'Habitación Sencilla', price: '$39,000' },
          { label: 'Habitación Triple', price: '$25,200' },
          { label: 'Menor de 2 a 11 años', price: '$14,000' },
        ],
      },
      {
        title: 'Temporada de Cerezos',
        items: [
          { label: 'Habitación Doble', price: '$32,000' },
          { label: 'Habitación Sencilla', price: '$44,500' },
          { label: 'Habitación Triple', price: '$28,800' },
          { label: 'Menor de 2 a 11 años', price: '$16,000' },
        ],
      },
      {
        title: 'Temporada Navidad',
        items: [
          { label: 'Habitación Doble', price: '$39,000' },
          { label: 'Habitación Sencilla', price: '$54,000' },
          { label: 'Habitación Triple', price: '$35,100' },
          { label: 'Menor de 2 a 11 años', price: '$19,500' },
        ],
      },
    ],
  },
  'chepe-lujo': {
    slug: 'chepe-lujo',
    title: 'Chepe Lujo',
    description: 'Viaje en Chepe con primera clase y servicios premium.',
    heroImage: image1,
    category: 'chepe',
    duration: '3 días / 2 noches',
    price: '$2,800 MXN',
    experiences: [
      {
        image: image1,
        title: 'Día 1: Lujo',
        description: 'Inicio del viaje con servicios de primera clase.',
        buttonText: 'Agenda tu cita',
      },
    ],
    incluye: [
      {
        label: 'Incluye',
        icon: FaCheck,
        description: [
          'Boleto de avión viaje redondo saliendo de la Ciudad de México, Monterrey, Guadalajara o Tijuana.',
          'Traslados Aeropuerto-Hotel-Aeropuerto.',
          'Traslado Chihuahua - Creel.',
          'Tren Chepe Express Clase Ejecutiva.',
          '5 Días 4 Noches de hospedaje en hoteles de categoría Premium.',
          'Guías certificados por SECTUR y expertos en el destino.',
          'Tour “Cuna de la Revolución” en la Ciudad de Chihuahua.',
          'Tour al Valle de los Hongos, Valle de las Ranas, Misión de San Ignacio, Lago de Arareko y una espectacular Cueva Tarahumara.',
          'Tour caminata por los espectaculares miradores de las Barrancas del Cobre.',
          'Tour a Divisadero y La Piedra Volada en las Barrancas del Cobre.',
          'Entrada al Teleférico en Parque Aventura.',
          'Alimentos acorde al itinerario.',
        ],
        image: imageCardItinerario1,
      },
      {
        label: 'No incluye',
        icon: FaCheck,
        description: [
          'Alimentos no especificados.',
          'Seguro turístico.',
          'Alimentos ni bebidas a bordo del Tren.',
          'Lo que no esté indicado en el apartado “EL VIAJE INCLUYE".',
        ],
        image: imageCardItinerario2,
      },
      {
        label: 'Notas importantes',
        icon: FaCheck,
        description: [
          'Precios por persona de acuerdo al tipo de habitación seleccionada, sujetos a disponibilidad y cambio sin previo aviso.',
          'El itinerario debe comenzar únicamente los días Martes, Jueves y Sábado para alinearse con las salidas programadas del tren. Los meses de Mayo, Junio, Agosto y Septiembre solo hay salidas los días Martes y Jueves.',
          'Para salidas en otros días pregunte a su asesor por la frecuencia de tren.',
          'El itinerario y los tramos en tren puede variar dependiendo del día de inicio.',
          'Tren Chepe Express en clase Ejecutiva.',
          'Para upgrade del Chepe Express en Primera Clase pregunte a su asesor. Éste último incluye acceso a todo el tren.',
          'En puentes y días festivos aplican los precios de temporada de verano.',
          'Se considera menor de los 2 años hasta 11 años.',
          'Con 12 años cumplidos pagará con precio de Adulto.',
        ],
        image: imageCardItinerario2,
      },
    ],
    pricing: [
      {
        title: 'Temporada Regular',
        items: [
          { label: 'Habitación Doble', price: '$18,000' },
          { label: 'Habitación Sencilla', price: '$25,200' },
          { label: 'Habitación Triple', price: '$16,200' },
          { label: 'Menor de 2 a 11 años', price: '$9,000' },
        ],
      },
      {
        title: 'Temporada Alta',
        items: [
          { label: 'Habitación Doble', price: '$23,000' },
          { label: 'Habitación Sencilla', price: '$32,200' },
          { label: 'Habitación Triple', price: '$20,700' },
          { label: 'Menor de 2 a 11 años', price: '$11,500' },
        ],
      },
      {
        title: 'Temporada de Cerezos',
        items: [
          { label: 'Habitación Doble', price: '$26,500' },
          { label: 'Habitación Sencilla', price: '$37,100' },
          { label: 'Habitación Triple', price: '$23,850' },
          { label: 'Menor de 2 a 11 años', price: '$13,250' },
        ],
      },
      {
        title: 'Temporada Navidad',
        items: [
          { label: 'Habitación Doble', price: '$31,000' },
          { label: 'Habitación Sencilla', price: '$43,400' },
          { label: 'Habitación Triple', price: '$27,900' },
          { label: 'Menor de 2 a 11 años', price: '$15,500' },
        ],
      },
    ],
    hotels: [
      {
        id: '1',
        title: 'Mountain Hiker Lodge',
        description: '4 estrellas | Equipo de hiking',
        image: imageCardItinerario1,
      },
      {
        id: '2',
        title: 'Trail Base Camp',
        description: '3 estrellas | Punto de partida',
        image: imageCardItinerario2,
      },
      {
        id: '3',
        title: 'Summit Refuge',
        description: '4 estrellas | Vista en la cima',
        image: imageCardItinerario3,
      },
    ],
  },
  'best-seller-premium': {
    slug: 'best-seller-premium',
    title: 'Best Seller Premium',
    description: 'Nuestro paquete más vendido, lo más popular con excelente relación precio-calidad.',
    heroImage: image1,
    category: 'best sellers',
    duration: '4 días / 3 noches',
    price: '$2,100 MXN',
    experiences: [
      {
        image: image1,
        title: 'Día 1: Bienvenida',
        description: 'Llegada y bienvenida especial para nuestros clientes.',
        buttonText: 'Agenda tu cita',
      },
    ],
    incluye: [
      {
        label: 'Incluye',
        icon: FaCheck,
        description: [
          'Boleto de avión viaje redondo saliendo de la Ciudad de México, Monterrey, Guadalajara o Tijuana.',
          'Traslados Aeropuerto-Hotel-Aeropuerto.',
          'Traslado Chihuahua - Creel.',
          'Tren Chepe Express Clase Ejecutiva.',
          '5 Días 4 Noches de hospedaje en hoteles de categoría Premium.',
          'Guías certificados por SECTUR y expertos en el destino.',
          'Tour “Cuna de la Revolución” en la Ciudad de Chihuahua.',
          'Tour al Valle de los Hongos, Valle de las Ranas, Misión de San Ignacio, Lago de Arareko y una espectacular Cueva Tarahumara.',
          'Tour caminata por los espectaculares miradores de las Barrancas del Cobre.',
          'Tour a Divisadero y La Piedra Volada en las Barrancas del Cobre.',
          'Entrada al Teleférico en Parque Aventura.',
          'Alimentos acorde al itinerario.',
        ],
        image: imageCardItinerario1,
      },
      {
        label: 'No incluye',
        icon: FaCheck,
        description: [
          'Alimentos no especificados.',
          'Seguro turístico.',
          'Alimentos ni bebidas a bordo del Tren.',
          'Lo que no esté indicado en el apartado “EL VIAJE INCLUYE".',
        ],
        image: imageCardItinerario2,
      },
      {
        label: 'Notas importantes',
        icon: FaCheck,
        description: [
          'Precios por persona de acuerdo al tipo de habitación seleccionada, sujetos a disponibilidad y cambio sin previo aviso.',
          'El itinerario debe comenzar únicamente los días Martes, Jueves y Sábado para alinearse con las salidas programadas del tren. Los meses de Mayo, Junio, Agosto y Septiembre solo hay salidas los días Martes y Jueves.',
          'Para salidas en otros días pregunte a su asesor por la frecuencia de tren.',
          'El itinerario y los tramos en tren puede variar dependiendo del día de inicio.',
          'Tren Chepe Express en clase Ejecutiva.',
          'Para upgrade del Chepe Express en Primera Clase pregunte a su asesor. Éste último incluye acceso a todo el tren.',
          'En puentes y días festivos aplican los precios de temporada de verano.',
          'Se considera menor de los 2 años hasta 11 años.',
          'Con 12 años cumplidos pagará con precio de Adulto.',
        ],
        image: imageCardItinerario2,
      },
    ],
    pricing: [
      {
        title: 'Temporada Regular',
        items: [
          { label: 'Habitación Doble', price: '$21,000' },
          { label: 'Habitación Sencilla', price: '$29,500' },
          { label: 'Habitación Triple', price: '$18,900' },
          { label: 'Menor de 2 a 11 años', price: '$10,500' },
        ],
      },
      {
        title: 'Temporada Alta',
        items: [
          { label: 'Habitación Doble', price: '$27,000' },
          { label: 'Habitación Sencilla', price: '$37,500' },
          { label: 'Habitación Triple', price: '$24,300' },
          { label: 'Menor de 2 a 11 años', price: '$13,500' },
        ],
      },
      {
        title: 'Temporada de Cerezos',
        items: [
          { label: 'Habitación Doble', price: '$31,000' },
          { label: 'Habitación Sencilla', price: '$43,000' },
          { label: 'Habitación Triple', price: '$27,900' },
          { label: 'Menor de 2 a 11 años', price: '$15,500' },
        ],
      },
      {
        title: 'Temporada Navidad',
        items: [
          { label: 'Habitación Doble', price: '$38,000' },
          { label: 'Habitación Sencilla', price: '$52,500' },
          { label: 'Habitación Triple', price: '$34,200' },
          { label: 'Menor de 2 a 11 años', price: '$19,000' },
        ],
      },
    ],
    hotels: [
      {
        id: '1',
        title: 'Best Value Hotel',
        description: '4 estrellas | Mejor precio',
        image: imageCardItinerario1,
      },
      {
        id: '2',
        title: 'Popular Choice Resort',
        description: '4 estrellas | Lo más buscado',
        image: imageCardItinerario2,
      },
      {
        id: '3',
        title: 'Value Plus Hotel',
        description: '4 estrellas | Excelente relación',
        image: imageCardItinerario3,
      },
      {
        id: '4',
        title: 'Premium Budget',
        description: '4 estrellas | Mejor opción',
        image: imageCardItinerario4,
      },
    ],
  },
  'experiencia-premium': {
    slug: 'experiencia-premium',
    title: 'Experiencia Premium',
    description: 'La máxima experiencia en Barrancas con todos los servicios de lujo.',
    heroImage: image2,
    category: 'best sellers',
    duration: '5 días / 4 noches',
    price: '$5,000 MXN',
    experiences: [
      {
        image: image2,
        title: 'Día 1: Bienvenida VIP',
        description: 'Recepción VIP y traslado privado.',
        buttonText: 'Agenda tu cita',
      },
    ],
    incluye: [
      {
        label: 'Incluye',
        icon: FaCheck,
        description: [
          'Boleto de avión viaje redondo saliendo de la Ciudad de México, Monterrey, Guadalajara o Tijuana.',
          'Traslados Aeropuerto-Hotel-Aeropuerto.',
          'Traslado Chihuahua - Creel.',
          'Tren Chepe Express Clase Ejecutiva.',
          '5 Días 4 Noches de hospedaje en hoteles de categoría Premium.',
          'Guías certificados por SECTUR y expertos en el destino.',
          'Tour “Cuna de la Revolución” en la Ciudad de Chihuahua.',
          'Tour al Valle de los Hongos, Valle de las Ranas, Misión de San Ignacio, Lago de Arareko y una espectacular Cueva Tarahumara.',
          'Tour caminata por los espectaculares miradores de las Barrancas del Cobre.',
          'Tour a Divisadero y La Piedra Volada en las Barrancas del Cobre.',
          'Entrada al Teleférico en Parque Aventura.',
          'Alimentos acorde al itinerario.',
        ],
        image: imageCardItinerario1,
      },
      {
        label: 'No incluye',
        icon: FaCheck,
        description: [
          'Alimentos no especificados.',
          'Seguro turístico.',
          'Alimentos ni bebidas a bordo del Tren.',
          'Lo que no esté indicado en el apartado “EL VIAJE INCLUYE".',
        ],
        image: imageCardItinerario2,
      },
      {
        label: 'Notas importantes',
        icon: FaCheck,
        description: [
          'Precios por persona de acuerdo al tipo de habitación seleccionada, sujetos a disponibilidad y cambio sin previo aviso.',
          'El itinerario debe comenzar únicamente los días Martes, Jueves y Sábado para alinearse con las salidas programadas del tren. Los meses de Mayo, Junio, Agosto y Septiembre solo hay salidas los días Martes y Jueves.',
          'Para salidas en otros días pregunte a su asesor por la frecuencia de tren.',
          'El itinerario y los tramos en tren puede variar dependiendo del día de inicio.',
          'Tren Chepe Express en clase Ejecutiva.',
          'Para upgrade del Chepe Express en Primera Clase pregunte a su asesor. Éste último incluye acceso a todo el tren.',
          'En puentes y días festivos aplican los precios de temporada de verano.',
          'Se considera menor de los 2 años hasta 11 años.',
          'Con 12 años cumplidos pagará con precio de Adulto.',
        ],
        image: imageCardItinerario2,
      },
    ],
    pricing: [
      {
        title: 'Temporada Regular',
        items: [
          { label: 'Habitación Doble', price: '$50,000' },
          { label: 'Habitación Sencilla', price: '$70,000' },
          { label: 'Habitación Triple', price: '$45,000' },
          { label: 'Menor de 2 a 11 años', price: '$25,000' },
        ],
      },
      {
        title: 'Temporada Alta',
        items: [
          { label: 'Habitación Doble', price: '$65,000' },
          { label: 'Habitación Sencilla', price: '$90,500' },
          { label: 'Habitación Triple', price: '$58,500' },
          { label: 'Menor de 2 a 11 años', price: '$32,500' },
        ],
      },
      {
        title: 'Temporada de Cerezos',
        items: [
          { label: 'Habitación Doble', price: '$75,000' },
          { label: 'Habitación Sencilla', price: '$104,500' },
          { label: 'Habitación Triple', price: '$67,500' },
          { label: 'Menor de 2 a 11 años', price: '$37,500' },
        ],
      },
      {
        title: 'Temporada Navidad',
        items: [
          { label: 'Habitación Doble', price: '$87,500' },
          { label: 'Habitación Sencilla', price: '$121,500' },
          { label: 'Habitación Triple', price: '$78,750' },
          { label: 'Menor de 2 a 11 años', price: '$43,750' },
        ],
      },
    ],
    hotels: [
      {
        id: '1',
        title: 'The Ultimate Luxury Resort',
        description: '6 estrellas | Lo mejor de lo mejor',
        image: imageCardItinerario1,
      },
      {
        id: '2',
        title: 'Presidential Suite Hotel',
        description: '6 estrellas | Experiencia presidencial',
        image: imageCardItinerario2,
      },
      {
        id: '3',
        title: 'Royal Barrancas Palace',
        description: '6 estrellas | Palacio real',
        image: imageCardItinerario3,
      },
      {
        id: '4',
        title: 'Exclusive VIP Estate',
        description: '6 estrellas | Propiedad exclusiva',
        image: imageCardItinerario4,
      },
      {
        id: '5',
        title: 'Luxury Mountain Sanctuary',
        description: '6 estrellas | Santuario de lujo',
        image: imageCardItinerario5,
      },
    ],
  },
};

export function getItinerary(slug: string): ItineraryData | null {
  return itinerariesData[slug] || null;
}

export function getAllItineraries(): ItineraryData[] {
  return Object.values(itinerariesData);
}

export function getItinerarySlugs(): string[] {
  return Object.keys(itinerariesData);
}
