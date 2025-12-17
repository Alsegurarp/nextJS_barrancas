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
  category: '5 días' | '6 días' | '7 días' | '8 días';
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
    title: 'Cañon de Urique',
    description: 'Experiencia romántica en las Barrancas del Cobre.',
    heroImage: image1,
    category: '6 días',
    duration: '6 Días - 5 Noches',
    price: '$38,295 MXN',
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
          { label: 'Habitación Doble', price: '$38,295' },
          { label: 'Habitación Triple', price: '$34,452' },
          { label: 'Habitación Sencilla', price: '$55,142' },
          { label: 'Menor de 2 a 11 años', price: '$23,537' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$40,407' },
          { label: 'Habitación Triple', price: '$36,374' },
          { label: 'Habitación Sencilla', price: '$57,834' },
          { label: 'Menor de 2 a 11 años', price: '$24,880' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$41,407' },
          { label: 'Habitación Triple', price: '$37,374' },
          { label: 'Habitación Sencilla', price: '$58,834' },
          { label: 'Menor de 2 a 11 años', price: '$25,880' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$43,298' },
          { label: 'Habitación Triple', price: '$39,573' },
          { label: 'Habitación Sencilla', price: '$61,075' },
          { label: 'Menor de 2 a 11 años', price: '$28,267' },
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
  'mayor-ranking': {
    slug: 'mayor-ranking',
    title: 'El de mayor ranking',
    description: 'Viaje en tren a través de las Barrancas del Cobre.',
    heroImage: image1,
    category: '5 días',
    duration: '5 Días - 4 Noches',
    price: '$33,973 MXN',
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
          { label: 'Habitación Doble', price: '$33,973' },
          { label: 'Habitación Triple', price: '$31,062' },
          { label: 'Habitación Sencilla', price: '$46,348' },
          { label: 'Menor de 2 a 11 años', price: '$22,541' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$36,084' },
          { label: 'Habitación Triple', price: '$32,985' },
          { label: 'Habitación Sencilla', price: '$49,039' },
          { label: 'Menor de 2 a 11 años', price: '$23,884' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$37,084' },
          { label: 'Habitación Triple', price: '$33,985' },
          { label: 'Habitación Sencilla', price: '$50,039' },
          { label: 'Menor de 2 a 11 años', price: '$24,884' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$39,188' },
          { label: 'Habitación Triple', price: '$36,146' },
          { label: 'Habitación Sencilla', price: '$52,549' },
          { label: 'Menor de 2 a 11 años', price: '$27,081' },
        ],
      },
    ]
  },
  'secretos-mayos': {
    slug: 'secretos-mayos',
    title: 'Secretos Mayos',
    description: 'Para los más valientes, actividades de aventura extrema.',
    heroImage: image2,
    category: '6 días',
    duration: '6 Días - 5 Noches',
    price: '$38,295 MXN',
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
          { label: 'Habitación Doble', price: '$38,295' },
          { label: 'Habitación Triple', price: '$34,452' },
          { label: 'Habitación Sencilla', price: '$55,142' },
          { label: 'Menor de 2 a 11 años', price: '$23,537' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$40,407' },
          { label: 'Habitación Triple', price: '$36,374' },
          { label: 'Habitación Sencilla', price: '$57,834' },
          { label: 'Menor de 2 a 11 años', price: '$24,880' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$41,407' },
          { label: 'Habitación Triple', price: '$37,374' },
          { label: 'Habitación Sencilla', price: '$58,834' },
          { label: 'Menor de 2 a 11 años', price: '$25,880' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$43,298' },
          { label: 'Habitación Triple', price: '$39,573' },
          { label: 'Habitación Sencilla', price: '$61,075' },
          { label: 'Menor de 2 a 11 años', price: '$28,267' },
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
  'memonitas-y-barrancas-del-cobre': {
    slug: 'memonitas-y-barrancas-del-cobre',
    title: 'Menonitas y Barrancas del cobre',
    description: 'Perfecta para parejas, experiencia romántica en Barrancas.',
    heroImage: image1,
    category: '7 días',
    duration: '7 Días - 6 Noches',
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
          { label: 'Habitación Doble', price: '$41,353' },
          { label: 'Habitación Triple', price: '$36,752' },
          { label: 'Habitación Sencilla', price: '$61,919' },
          { label: 'Menor de 2 a 11 años', price: '$23,834' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$43,464' },
          { label: 'Habitación Triple', price: '$38,571' },
          { label: 'Habitación Sencilla', price: '$64,611' },
          { label: 'Menor de 2 a 11 años', price: '$25,176' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$44,464' },
          { label: 'Habitación Triple', price: '$39,571' },
          { label: 'Habitación Sencilla', price: '$65,611' },
          { label: 'Menor de 2 a 11 años', price: '$26,176' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$46,839' },
          { label: 'Habitación Triple', price: '$41,791' },
          { label: 'Habitación Sencilla', price: '$69,116' },
          { label: 'Menor de 2 a 11 años', price: '$28,509' },
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
  'leyendas-del-fuerte': {
    slug: 'leyendas-del-fuerte',
    title: 'Las leyendas del fuerte',
    description: 'Ruta de montaña desafiante a través de las Barrancas.',
    heroImage: image2,
    category: '7 días',
    duration: '7 Días - 6 Noches',
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
          { label: 'Habitación Doble', price: '$38,401' },
          { label: 'Habitación Triple', price: '$34,897' },
          { label: 'Habitación Sencilla', price: '$53,411' },
          { label: 'Menor de 2 a 11 años', price: '$23,212' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$42,047' },
          { label: 'Habitación Triple', price: '$38,337' },
          { label: 'Habitación Sencilla', price: '$57,877' },
          { label: 'Menor de 2 a 11 años', price: '$25,108' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$43,047' },
          { label: 'Habitación Triple', price: '$39,337' },
          { label: 'Habitación Sencilla', price: '$58,877' },
          { label: 'Menor de 2 a 11 años', price: '$26,108' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$43,047' },
          { label: 'Habitación Triple', price: '$39,337' },
          { label: 'Habitación Sencilla', price: '$58,877' },
          { label: 'Menor de 2 a 11 años', price: '$26,108' },
        ],
      },
    ],
  },
  'los-cabos-y-barrancas-del-cobre': {
    slug: 'los-cabos-y-barrancas-del-cobre',
    title: 'Los cabos y barrancas del cobre',
    description: 'Viaje en Chepe con primera clase y servicios premium.',
    heroImage: image1,
    category: '8 días',
    duration: '8 Días - 7 Noches',
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
          { label: 'Habitación Doble', price: '$47,652' },
          { label: 'Habitación Triple', price: '$43,831' },
          { label: 'Habitación Sencilla', price: '$62,760' },
          { label: 'Menor de 2 a 11 años', price: '$31,918' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$52,106' },
          { label: 'Habitación Triple', price: '$47,315' },
          { label: 'Habitación Sencilla', price: '$71,355' },
          { label: 'Menor de 2 a 11 años', price: '$36,384' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$53,106' },
          { label: 'Habitación Triple', price: '$48,315' },
          { label: 'Habitación Sencilla', price: '$71,355' },
          { label: 'Menor de 2 a 11 años', price: '$37,384' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$55,501' },
          { label: 'Habitación Triple', price: '$50,651' },
          { label: 'Habitación Sencilla', price: '$73,004' },
          { label: 'Menor de 2 a 11 años', price: '$39,409' },
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
  'mar-de-cortes-y-barrancas': {
    slug: 'mar-de-cortes-y-barrancas',
    title: 'Mar de Cortés y Barrancas',
    description: 'Nuestro paquete más vendido, lo más popular.',
    heroImage: image1,
    category: '8 días',
    duration: '8 Días - 7 Noches',
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
          { label: 'Habitación Doble', price: '$45,919' },
          { label: 'Habitación Triple', price: '$42,358' },
          { label: 'Habitación Sencilla', price: '$62,588' },
          { label: 'Menor de 2 a 11 años', price: '$30,818' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$49,202' },
          { label: 'Habitación Triple', price: '$45,061' },
          { label: 'Habitación Sencilla', price: '$67,622' },
          { label: 'Menor de 2 a 11 años', price: '$32,160' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$50,202' },
          { label: 'Habitación Triple', price: '$46,061' },
          { label: 'Habitación Sencilla', price: '$68,622' },
          { label: 'Menor de 2 a 11 años', price: '$33,160' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$52,378' },
          { label: 'Habitación Triple', price: '$49,031' },
          { label: 'Habitación Sencilla', price: '$72,051' },
          { label: 'Menor de 2 a 11 años', price: '$36,926' },
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
  'favorito-de-todos': {
    slug: 'favorito-de-todos',
    title: 'El favorito de todos',
    description: 'La máxima experiencia en Barrancas con todos los servicios de lujo.',
    heroImage: image2,
    category: '8 días',
    duration: '8 Días - 7 Noches',
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
          { label: 'Habitación Doble', price: '$42,718' },
          { label: 'Habitación Triple', price: '$39,287' },
          { label: 'Habitación Sencilla', price: '$58,216' },
          { label: 'Menor de 2 a 11 años', price: '$28,397' },
        ],
      },
      {
        title: 'Temporada de Verano',
        items: [
          { label: 'Habitación Doble', price: '$46,390' },
          { label: 'Habitación Triple', price: '$42,250' },
          { label: 'Habitación Sencilla', price: '$64,030' },
          { label: 'Menor de 2 a 11 años', price: '$32,863' },
        ],
      },
      {
        title: 'Temporada de Navidad',
        items: [
          { label: 'Habitación Doble', price: '$47,390' },
          { label: 'Habitación Triple', price: '$43,250' },
          { label: 'Habitación Sencilla', price: '$65,030' },
          { label: 'Menor de 2 a 11 años', price: '$33,863' },
        ],
      },
      {
        title: 'Temporada Fin de Año',
        items: [
          { label: 'Habitación Doble', price: '$50,134' },
          { label: 'Habitación Triple', price: '$46,051' },
          { label: 'Habitación Sencilla', price: '$68,375' },
          { label: 'Menor de 2 a 11 años', price: '$36,520' },
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
