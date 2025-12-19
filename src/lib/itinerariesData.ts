import { StaticImageData } from 'next/image';
import { FaCheck } from 'react-icons/fa6';
import { IconType } from 'react-icons';


// Declaraciones de imagen dependiendo el itinerario 👇
import image1 from '@/assets/Portadas/HeroImage.webp';
import image2 from '@/assets/Portadas/HeroImage2.webp';
import imageCardItinerario1 from '@/assets/itinerariosImages/hotel-barrancas1.webp';
import imageCardItinerario2 from '@/assets/itinerariosImages/hotel-barrancas2.webp';
import imageCardItinerario3 from '@/assets/itinerariosImages/hotel-barrancas3.webp';
import imageCardItinerario4 from '@/assets/itinerariosImages/hotel-barrancas4.webp';
import imageCardItinerario5 from '@/assets/itinerariosImages/hotel-barrancas5.webp';
import imageCardItinerario6 from '@/assets/itinerariosImages/hotel-barrancas6.webp';

// declaracion de las hero images de los itinerarios
import heroCanonUrique from '@/assets/Itinerarios/PortadasItinerarios/canon_de_urique.webp';
import heroMayorRanking from '@/assets/Itinerarios/PortadasItinerarios/el_de_mayor_ranking.webp';
import heroFavoritoTodos from '@/assets/Itinerarios/PortadasItinerarios/el_favorito_de_todos.webp';
import heroLeyendasFuerte from '@/assets/Itinerarios/PortadasItinerarios/las_leyendas_del_fuerte.webp';
import heroCabosYBarrancas from '@/assets/Itinerarios/PortadasItinerarios/los_cabos_y_barrancas_del_cobre.webp';
import heroMarCortes from '@/assets/Itinerarios/PortadasItinerarios/mar_de_cortes_y_barrancas.webp';
import heroSecretosMayos from '@/assets/Itinerarios/PortadasItinerarios/secretos_mayos.webp';
import heroMenonitas from '@/assets/Itinerarios/PortadasItinerarios/menonitas_y_barrancas_del_cobre.webp';






// CanonDeUrique
import canonUrique1 from '@/assets/Itinerarios/CanonDeUrique/Dia_1_Chihuahua_Barrancas_Premium_Museo_Revolucion_Casa_Antigua_Pancho_Villa.webp';
import canonUrique2 from '@/assets/Itinerarios/CanonDeUrique/Dia_2_Chihuahua_Barrancas_Premium_Pueblo_Magico_Creel_Cueva_Tarahumara_Habitada_Viajes_Turismo.webp';
import canonUrique3 from '@/assets/Itinerarios/CanonDeUrique/Dia_3_Barrancas_Del_Cobre_Barrancas_Premium_Parque_Aventura_Teleferico_Descenso_Barranca_Urique_Majestuosidad.webp';
import canonUrique4 from '@/assets/Itinerarios/CanonDeUrique/Dia_4_Pueblo_Cerocahui_Barrancas_Premium_Gastronomia_Hotel_Mision_Comida_Tipica_Vinedo.webp';
import canonUrique5 from '@/assets/Itinerarios/CanonDeUrique/Dia_5_Mochis_Barrancas_Premium_Tren_Chepe_Express.webp';
import canonUrique6 from '@/assets/Itinerarios/CanonDeUrique/Dia_6_Los_Mochis_Barrancas_Premium_Bahia_Topolobampo_City_Tour_Regreso_Aeropuerto_Vuelo_Avion.webp';


// ElDeMayorRanking
import mayorRanking1 from '@/assets/Itinerarios/ElDeMayorRanking/Dia_1_Chihuahua_Barrancas_Premium_Centro_Cultural_Universitario_La_Quinta_Gameros_City_Tour.webp';
import mayorRanking2 from '@/assets/Itinerarios/ElDeMayorRanking/Dia_2_Creel_Barrancas_Premium_Lago_Arareko_Viajes_Turismo_Chihuahua_Explorar_Aventura.webp';
import mayorRanking3 from '@/assets/Itinerarios/ElDeMayorRanking/Dia_3_Barrancas_Del_Cobre_Barrancas_Premium_Piedra_Volada_Miradores_.webp';
import mayorRanking4 from '@/assets/Itinerarios/ElDeMayorRanking/Dia_4_Mochis_Barrancas_Premium_Tren_Chepe_Express_Primera_Clase_Ciudad_Hotel.webp';
import mayorRanking5 from '@/assets/Itinerarios/ElDeMayorRanking/Dia_5_Mochis_Barrancas_Del_Cobre_Bahia_De_Topolobampo_Opciones_De_Visita_Gran_Aventura.webp';

// SecretosMayos
import secretosMayos1 from '@/assets/Itinerarios/SecretosMayos/Dia_1_Chihuahua_Barrancas_Premium_City_Tour_Catedral_Estilo_Barroco_Centro_Viajes_Turismo.webp';
import secretosMayos2 from '@/assets/Itinerarios/SecretosMayos/Dia_2_Menonitas_Barrancas_Premium_Chihuahua_Queso_Chester_Mermelada.webp';
import secretosMayos3 from '@/assets/Itinerarios/SecretosMayos/Dia_3_Chihuahua_Barrancas_Premium_Barrancas_Del_Cobre_Parque_Aventura_Recorrido_Panoramico_Viajes_Turismo.webp';
import secretosMayos4 from '@/assets/Itinerarios/SecretosMayos/Dia_4_El_Fuerte_Barrancas_Premium_Hotel_Resort_Posada_Del_Hidalgo_Alojamiento_Hospejade_Pueblo_Magico.webp';
import secretosMayos5 from '@/assets/Itinerarios/SecretosMayos/Dia_5_El_Fuerte_Barrancas_Premium_Sinaloa_La_Plaza_De_Armas_Kiosco_Hierro_Forjado_Viajes_Turismo_Cultura.webp';
import secretosMayos6 from '@/assets/Itinerarios/SecretosMayos/Dia_6_El_Fuerte_Barrancas_Premium_Pueblo_Magico_Aventura_Fin_Traslado_Aeropuerto_Vuelo_Avion_Mexico.webp';

// MenonitasYBarrancas
import menonitasBarrancas1 from '@/assets/Itinerarios/MenonitasYBarrancasDelCobre/Dia_1_Chihuahua_Barrancas_Premium_Catedral_Estilo_barroco_Comida_Tipica_Gastronomia_Restaurante.webp';
import menonitasBarrancas2 from '@/assets/Itinerarios/MenonitasYBarrancasDelCobre/Dia_2_Creel_Barrancas_Premium_Pueblo_Magico_Huertas_De_Finas_Manzanas_Golden_Rojas_Chihuahua_Viajes_Turismo_Transporte.webp';
import menonitasBarrancas3 from '@/assets/Itinerarios/MenonitasYBarrancasDelCobre/Dia_3_Creel_Barrancas_Premium_Parque_Aventura_Barrancas_Del_Cobre_Teleferico_Barranca_De_Urique_Aventura_Tirolesa.webp';
import menonitasBarrancas4 from '@/assets/Itinerarios/MenonitasYBarrancasDelCobre/Dia_4_Cerocahui_Barrancas_Premium_Pueblo_Gastronomia_Viajes_Turismo_Cultura_Mirador_Cerro_Del_Gallego_Felicidad_Viajar.webp';
import menonitasBarrancas5 from '@/assets/Itinerarios/MenonitasYBarrancasDelCobre/Dia_5_El_Fuerte_Barrancas_Premium_Centro_Historico_Pueblo_Magico_Viajes_Turismo_Cultura.webp';
import menonitasBarrancas6 from '@/assets/Itinerarios/MenonitasYBarrancasDelCobre/Dia_6_El_Fuerte_Barrancas_Premium_Sinaloa_Mirador_Rio_Vistas_Aventura_Viajes_Turismo.webp';
import menonitasBarrancas7 from '@/assets/Itinerarios/MenonitasYBarrancasDelCobre/Dia_7_Los_Mochis_Barrancas_Premium_Bahia_Topolobampo_Gastronomia_Viajes_Turismo_Comidaa_Restaurante_Vistas.webp';

// LasLeyendasDelFuerte
import leyendasFuerte1 from '@/assets/Itinerarios/LasLeyendasDelFuerte/Dia_1_El_Fuerte_Barrancas_Premium_Sinaloa_Pueblo_Magico_Cantina_Zorro_Bar_Resort_Posada_Del_Hidalgo.webp';
import leyendasFuerte2 from '@/assets/Itinerarios/LasLeyendasDelFuerte/Dia_2_El_Fuerte_Barrancas_Premium_Balsa_Navegar_Rio_Fuerte_Rio_Urique_Sinaloa_Aventura_Viajes_Turismo_Experiencias.webp';
import leyendasFuerte3 from '@/assets/Itinerarios/LasLeyendasDelFuerte/Dia_3_El_Fuerte_Barrancas_Premium_Tren_Chepe_Express_Barrancas_Del_Cobre_Bar_Primera_Clase.webp';
import leyendasFuerte4 from '@/assets/Itinerarios/LasLeyendasDelFuerte/Dia_4_Barrancas_Del_Cobre_Barrancas_Premium_Parque_Aventura_Barranca_De_Urique_Teleferico_Trayecto_Escenico_Viajes_Turismo_Chihuahua.webp';
import leyendasFuerte5 from '@/assets/Itinerarios/LasLeyendasDelFuerte/Dia_5_Pueblo_Magico_Creel_Barrancas_Premium_Traslado_Invierno_Nieve_Actividades_Experiencias_Viajes_Turismo.webp';
import leyendasFuerte6 from '@/assets/Itinerarios/LasLeyendasDelFuerte/Dia_6_Creel_Barrancas_Prmeium_Visita_Lago_Arareko_Viajes_Turismo_Naturaleza_Aventura_Paseo.webp';
import leyendasFuerte7 from '@/assets/Itinerarios/LasLeyendasDelFuerte/Dia_7_Chihuahua_Barrancas_Premium_Museo_De_La_Revolucion_Casa_Pancho_Villa_Catedral_Estilo_Barroco_Viajes_Turismo_Cultura.webp';

// LosCabosYBarrancas
import cabosBarrancas1 from '@/assets/Itinerarios/LosCabosYBarrancasDelCobre/Dia_1_Chihuahua_Barrancas_Premium_Aeropuerto_De_La_Ciudad_Bienvenida_Trasladista_Viajes_Turismo_Trasnporte_.webp';
import cabosBarrancas2 from '@/assets/Itinerarios/LosCabosYBarrancasDelCobre/Dia_2_Creel_Barrancas_Premium_Pueblo_Magico_Paseo_El_Valle_De_Los_Hongos_Viaje_Turismo_Cultura_Naturaleza.webp';
import cabosBarrancas3 from '@/assets/Itinerarios/LosCabosYBarrancasDelCobre/Dia_3_Creel_Barrancas_Premium_Pueblo_Magico_Parque_Barrancas_Miradores_La_Piedra_Volada_Viajes_Turismo_Aventura.webp';
import cabosBarrancas4 from '@/assets/Itinerarios/LosCabosYBarrancasDelCobre/Dia_4_Tren_Chepe_Express_Barrancas_Premium_Divisadero_Mochis_Sinaloa_Viajes_Turismo_Cultura_Transporte_Primera_Clase.webp';
import cabosBarrancas5 from '@/assets/Itinerarios/LosCabosYBarrancasDelCobre/Dia_5_Los_Mochis_Barrancas_Premium_Dia_Libre_Restaurante_Gastronomia_Comida_Mariscos_Viajes_Turismo_Cultura.webp';
import cabosBarrancas6 from '@/assets/Itinerarios/LosCabosYBarrancasDelCobre/Dia_6_Los_Cabos_Barrancas_Premium_Playa_Del_Amor_Promontorio_Del_Fin_De_La_Tierra_Playa_Viajes_Turismo_Vistas_Paradisiacas.webp';
import cabosBarrancas7 from '@/assets/Itinerarios/LosCabosYBarrancasDelCobre/Dia_7_Los_Cabos_Barrancas_Premium_Dia_Libre_Relajarte_Comodidades_Instalaciones_Hotel_Actividades_Viaje_Turismo.webp';
import cabosBarrancas8 from '@/assets/Itinerarios/LosCabosYBarrancasDelCobre/Dia_8_Los_Cabos_Barrancas_Premium_Gran_Aventura_Fin_Aeropuerto_Traslado_Avion_Aeropuerto_Primera_Clase.webp';

// MarDeCortesYBarrancas
import marCortes1 from '@/assets/Itinerarios/MarDeCortesYBarrancas/Dia_1_Chihuahua_Barrancas_Premium_Hoteles_Hampton_By_Hilton_Viajes_Llegada_Hospedaje_Check_In_City_Tour.webp';
import marCortes2 from '@/assets/Itinerarios/MarDeCortesYBarrancas/Dia_2_Creel_Barrancas_Premium_Pueblo_Magico_Chihuahua_City_Tour_Invierno_Nieve_Turismo_Viajes.webp';
import marCortes3 from '@/assets/Itinerarios/MarDeCortesYBarrancas/Dia_3_Miradores_Barrancas_Premium_Chihuahua_Creel_Parque_Aventura_Barrancas_Piedra_Volada_Barrancas_Del_Cobre_Caminata.webp';
import marCortes4 from '@/assets/Itinerarios/MarDeCortesYBarrancas/Dia_4_Chepe_Barrancas_Premium_Viajes_Turismo_Tren_Chepe_Express_Traslado_Divisadero_Chihuahua_Paisajes_Vista.webp';
import marCortes5 from '@/assets/Itinerarios/MarDeCortesYBarrancas/Dia_5_Mochis_Barrancas_PRemium_La_Paz_Baja_California_Sur_Viajes_Turismo_Avion_Aeropuerto_Traslado_Mar_Hotel.webp';
import marCortes6 from '@/assets/Itinerarios/MarDeCortesYBarrancas/Dia_6_La_Paz_BarrancaS_Premium_Baja_California_Sur_Viajes_Playa_Comida_Restaurante_Gastronomia_Dia_Libre.webp';
import marCortes7 from '@/assets/Itinerarios/MarDeCortesYBarrancas/Dia_7_La_Paz_Barrancas_Premium_Baja_California_Sur_Palaya_Balandra_Bonita_Mundo_Destino_Viajes_Turismo.webp';
import marCortes8 from '@/assets/Itinerarios/MarDeCortesYBarrancas/Dia_8_La_Paz_Barrancas_Premium_Baja_Califronia_Sur_Viajes_Fin_Regreso_Ciudad_Origen_Destino_Avion_Aeropuerto_Turismo.webp';

// ElFavoritoDeTodos
import favoritoTodos1 from '@/assets/Itinerarios/ElFavoritoDeTodos/Dia_1_Chihuahua_Barrancas_Premium_Cuna_De_La_Revolucion_City_Tour_Avion_Aeropuerto_Recibimiento_City_Tour.webp';
import favoritoTodos2 from '@/assets/Itinerarios/ElFavoritoDeTodos/Dia_2_Menonitas_Barrancas_Premium_Pueblo_Magico_Creel_Venta_Queso_Chester_Mermelada_Viajes_Turismo.webp';
import favoritoTodos3 from '@/assets/Itinerarios/ElFavoritoDeTodos/Dia_3_Creel_Barrancas_Premium_Parque_Barrancas_Aventura_Tirolesa_Trayecto_Escenico_Barrancas_Del_Cobre_Barranca_De_Urique.webp';
import favoritoTodos4 from '@/assets/Itinerarios/ElFavoritoDeTodos/Dia_4_Divisadero_Barrancas_Premium_El_Chepe_Express_Chihuhaua_Los_Mochis_Sinaloa_Viajes_Turismo_Transporte_Primera_Clase.png';
import favoritoTodos5 from '@/assets/Itinerarios/ElFavoritoDeTodos/Dia_5_Los_Mochis_Barrancas_Premium_Manana_Libre_Bahia_De_Topolobampo_City_Tour_Viajes_Turismo_Playa.webp';
import favoritoTodos6 from '@/assets/Itinerarios/ElFavoritoDeTodos/Dia_6_Mazatlan_Barrancas_Premium_Playa_Viajes_Turismo_Mar_Caminata_Disfrutar_Aventura.webp';
import favoritoTodos7 from '@/assets/Itinerarios/ElFavoritoDeTodos/Dia_7_Mazatlan_Barrancas_Premium_Dia_Libre_Gastronomia_Comida_Viajes_Turismo_Actividades_Vistas_Mar.webp';
import favoritoTodos8 from '@/assets/Itinerarios/ElFavoritoDeTodos/Dia_8_Mazatlan_Barrancas_Premium_Aeropuerto_Viajes_Avion_Pasajero_Destino_Ciudad_Origen_.webp';


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
  programDetails?: Array<{
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
    heroImage: heroCanonUrique,
    category: '6 días',
    duration: '6 Días - 5 Noches',
    price: '$38,295 MXN',
    experiences: [
      {
        image: canonUrique1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución"',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: canonUrique2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Conocerás la comunidad menonita y visitarás su fábrica de quesos estilo Chester donde podrás adquirir productos artesanales, embutidos y mermeladas hechas por los Menonitas. Pasarás por las hermosas huertas de finas manzanas Golden y Rojas. Arribo al Pueblo Mágico de Creel en la sierra tarahumara.',
        buttonText: 'Contacta ahora',
      },
      {
        image: canonUrique3,
        title: 'Día 3: Miradores y teleférico',
        description: 'Tomarás un espectacular recorrido panorámico en el Teleférico que desciende al fondo de la Barranca de Urique, con un trayecto escénico de 2.75 km para admirar desde lo alto la majestuosidad de las Barrancas del Cobre. Experiencia única e inolvidable con vistas espectaculares.',
        buttonText: 'Contacta ahora',
      },
      {
        image: canonUrique4,
        title: 'Día 4: Divisadero - Bahuichivo - Cerocahui',
        description: 'Traslado hacia el pueblo de Cerocahui donde disfrutarás de su gastronomía local. Paseo al Cerro del Gallego para admirar el famoso Cañón de Urique a través de su espectacular "Mirador" con vistas panorámicas incomparables. Experiencia gastronómica en el Hotel Misión Cerocahui.',
        buttonText: 'Contacta ahora',
      },
      {
        image: canonUrique5,
        title: 'Día 5: El Chepe - Los Mochis',
        description: 'A la hora indicada tendrás el traslado a la estación del Tren Chepe Express, famoso por ser uno de los trenes más hermosos de México. Abordarás el tren con destino a la Ciudad de Los Mochis, disfrutando de vistas panorámicas espectaculares durante el viaje en Clase Ejecutiva.',
        buttonText: 'Contacta ahora',
      },
      {
        image: canonUrique6,
        title: 'Día 6: Aeropuerto de Los Mochis',
        description: 'Día libre para disfrutar de esta bonita ciudad que te ofrece opciones de visita como la hermosa Bahía de Topolobampo, un city tour o simplemente relajarte en el hotel. Traslado al aeropuerto en donde tomará el vuelo con destino a su ciudad de origen. Fin de los servicios.',
        buttonText: 'Contacta ahora',
      },
    ],
    programDetails: [
      {
        image: canonUrique1,
        title: 'Día 1: Conoce Chihuahua',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: canonUrique2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Conocerás la comunidad menonita y visitarás su fábrica de quesos estilo Chester donde podrás adquirir productos artesanales, embutidos y mermeladas hechas por los Menonitas. Pasarás por las hermosas huertas de finas manzanas Golden y Rojas. Arribo al Pueblo Mágico de Creel en la sierra tarahumara.',
        buttonText: 'Contacta ahora',
      },
      {
        image: canonUrique3,
        title: 'Día 3: Miradores y teleférico',
        description: 'Tomarás un espectacular recorrido panorámico en el Teleférico que desciende al fondo de la Barranca de Urique, con un trayecto escénico de 2.75 km para admirar desde lo alto la majestuosidad de las Barrancas del Cobre. Experiencia única e inolvidable con vistas espectaculares.',
        buttonText: 'Contacta ahora',
      },
      {
        image: canonUrique4,
        title: 'Día 4: Divisadero - Bahuichivo - Cerocahui',
        description: 'Traslado hacia el pueblo de Cerocahui donde disfrutarás de su gastronomía local. Paseo al Cerro del Gallego para admirar el famoso Cañón de Urique a través de su espectacular "Mirador" con vistas panorámicas incomparables. Experiencia gastronómica en el Hotel Misión Cerocahui.',
        buttonText: 'Contacta ahora',
      },
      {
        image: canonUrique5,
        title: 'Día 5: El Chepe - Los Mochis',
        description: 'A la hora indicada tendrás el traslado a la estación del Tren Chepe Express, famoso por ser uno de los trenes más hermosos de México. Abordarás el tren con destino a la Ciudad de Los Mochis, disfrutando de vistas panorámicas espectaculares durante el viaje en Clase Ejecutiva.',
        buttonText: 'Contacta ahora',
      },
      {
        image: canonUrique6,
        title: 'Día 6: Aeropuerto de Los Mochis',
        description: 'Día libre para disfrutar de esta bonita ciudad que te ofrece opciones de visita como la hermosa Bahía de Topolobampo, un city tour o simplemente relajarte en el hotel. Traslado al aeropuerto en donde tomará el vuelo con destino a su ciudad de origen. Fin de los servicios.',
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
    heroImage: heroMayorRanking,
    category: '5 días',
    duration: '5 Días - 4 Noches',
    price: '$33,973 MXN',
    experiences: [
      {
        image: mayorRanking1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución"',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: mayorRanking2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: mayorRanking3,
        title: 'Día 3: Tour a las Barrancas del Cobre',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: mayorRanking4,
        title: 'Día 4: El Chepe - Los Mochis',
        description: 'Después del desayuno deberás hacer el check out para ser trasladado a la estación del Tren Chepe con destino a la ciudad de Los Mochis.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: mayorRanking5,
        title: 'Día 5: Aeropuerto de Los Mochis',
        description: 'Día libre para disfrutar de esta bonita ciudad.Fin de los servicios.',
        buttonText: 'Agenda tu cita',
      },
    ],
    programDetails: [
      {
        image: mayorRanking1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución"',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: mayorRanking2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: mayorRanking3,
        title: 'Día 3: Tour a las Barrancas del Cobre',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: mayorRanking4,
        title: 'Día 4: El Chepe - Los Mochis',
        description: 'Después del desayuno deberás hacer el check out para ser trasladado a la estación del Tren Chepe con destino a la ciudad de Los Mochis.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: mayorRanking5,
        title: 'Día 5: Aeropuerto de Los Mochis',
        description: 'Día libre para disfrutar de esta bonita ciudad.Fin de los servicios.',
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
    heroImage: heroSecretosMayos,
    category: '6 días',
    duration: '6 Días - 5 Noches',
    price: '$38,295 MXN',
    experiences: [
      {
        image: secretosMayos1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución"',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos2,
        title: 'Día 2: Menonitas - Tour de Valles - Creel',
        description: 'Conocerás la comunidad menonita y visitarás sus fábricas de quesos artesanales Chester, mermeladas y embutidos tradicionales. Tour por los hermosos valles con vistas panorámicas. Arribo al Pueblo Mágico de Creel en la sierra tarahumara para disfrutar de la cultura local.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos3,
        title: 'Día 3: Miradores y Teleférico',
        description: 'Tour panorámico por los espectaculares miradores de las Barrancas del Cobre. Disfruta de actividades de aventura como tirolesa sobre el cañón. Entrada al Parque Aventura con acceso al Teleférico que desciende 2.75 km hacia la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos4,
        title: 'Día 4: Divisadero - El Chepe - Sinaloa',
        description: 'Traslado a la estación del tren para abordar El Chepe Express, uno de los trenes turísticos más famosos de México. Viaje panorámico hacia el pueblo mágico de El Fuerte en Sinaloa, disfrutando de paisajes alucinantes en Clase Ejecutiva.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos5,
        title: 'Día 5: Pueblo Mágico: El Fuerte',
        description: 'Descubre el encantador Pueblo Mágico de El Fuerte con su arquitectura colonial, plazas históricas y gastronomía local. Aprecia la flora y fauna de la región, observa petroglifos Nahuari de 800 a 2,500 años de antigüedad y disfruta de la experiencia cultural única en el corazón de Sinaloa.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos6,
        title: 'Día 6: Regreso a casa',
        description: 'Última mañana libre para disfrutar de El Fuerte o descansar en el hotel. Traslado al aeropuerto en donde tomarás el vuelo con destino a tu ciudad de origen, llevando contigo recuerdos y experiencias inolvidables de esta aventura.',
        buttonText: 'Agenda tu cita',
      },
    ],
    programDetails: [
      {
        image: secretosMayos1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución"',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos2,
        title: 'Día 2: Menonitas - Tour de Valles - Creel',
        description: 'Conocerás la comunidad menonita y visitarás sus fábricas de quesos artesanales Chester, mermeladas y embutidos tradicionales. Tour por los hermosos valles con vistas panorámicas. Arribo al Pueblo Mágico de Creel en la sierra tarahumara para disfrutar de la cultura local.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos3,
        title: 'Día 3: Miradores y Teleférico',
        description: 'Tour panorámico por los espectaculares miradores de las Barrancas del Cobre. Disfruta de actividades de aventura como tirolesa sobre el cañón. Entrada al Parque Aventura con acceso al Teleférico que desciende 2.75 km hacia la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos4,
        title: 'Día 4: Divisadero - El Chepe - Sinaloa',
        description: 'Traslado a la estación del tren para abordar El Chepe Express, uno de los trenes turísticos más famosos de México. Viaje panorámico hacia el pueblo mágico de El Fuerte en Sinaloa, disfrutando de paisajes alucinantes en Clase Ejecutiva.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos5,
        title: 'Día 5: Pueblo Mágico: El Fuerte',
        description: 'Descubre el encantador Pueblo Mágico de El Fuerte con su arquitectura colonial, plazas históricas y gastronomía local. Aprecia la flora y fauna de la región, observa petroglifos Nahuari de 800 a 2,500 años de antigüedad y disfruta de la experiencia cultural única en el corazón de Sinaloa.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: secretosMayos6,
        title: 'Día 6: Regreso a casa',
        description: 'Última mañana libre para disfrutar de El Fuerte o descansar en el hotel. Traslado al aeropuerto en donde tomarás el vuelo con destino a tu ciudad de origen, llevando contigo recuerdos y experiencias inolvidables de esta aventura.',
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
    heroImage: heroMenonitas,
    category: '7 días',
    duration: '7 Días - 6 Noches',
    price: '$4,500 MXN',
    experiences: [
      {
        image: menonitasBarrancas1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución"',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas3,
        title: 'Día 3: Creel - Miradores',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas4,
        title: 'Día 4: Divisadero - Bahuichivo - Cerocahui',
        description: 'Traslado hacia el pueblo de Cerocahui. Seguido, un paseo al Cerro del Gallego para admirar el famoso Cañón de Urique a través de su "Mirador".',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas5,
        title: 'Día 5: El Chepe hacia El Fuerte',
        description: 'Después del desayuno y check out, traslado a la estación del Tren Chepe Express. Aborda uno de los trenes más icónicos de México rumbo al pueblo mágico de El Fuerte en Sinaloa, con vistas panorámicas espectaculares durante todo el recorrido.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas6,
        title: 'Día 6: Experiencia en El Fuerte',
        description: 'Sumérgete en la cultura y arquitectura colonial del Pueblo Mágico visitando el Palacio Municipal, La Plaza de Armas principal, La Casa de la Cultura y el Centro Histórico. Disfruta de la gastronomía local y la hospitalidad sinaloense en este encantador pueblo colonial.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas7,
        title: 'Día 7: Los Mochis - Regreso',
        description: 'Traslado a Los Mochis. Día libre para disfrutar de esta bonita ciudad con opciones como visitar la bahía de Topolobampo o hacer un city tour de la ciudad. Traslado al aeropuerto para tu regreso a casa. Fin de los servicios.',
        buttonText: 'Agenda tu cita',
      }
    ],
    programDetails: [
      {
        image: menonitasBarrancas1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución"',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas3,
        title: 'Día 3: Creel - Miradores',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas4,
        title: 'Día 4: Divisadero - Bahuichivo - Cerocahui',
        description: 'Traslado hacia el pueblo de Cerocahui. Seguido, un paseo al Cerro del Gallego para admirar el famoso Cañón de Urique a través de su "Mirador".',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas5,
        title: 'Día 5: El Chepe hacia El Fuerte',
        description: 'Después del desayuno y check out, traslado a la estación del Tren Chepe Express. Aborda uno de los trenes más icónicos de México rumbo al pueblo mágico de El Fuerte en Sinaloa, con vistas panorámicas espectaculares durante todo el recorrido.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas6,
        title: 'Día 6: Experiencia en El Fuerte',
        description: 'Sumérgete en la cultura y arquitectura colonial del Pueblo Mágico visitando el Palacio Municipal, La Plaza de Armas principal, La Casa de la Cultura y el Centro Histórico. Disfruta de la gastronomía local y la hospitalidad sinaloense en este encantador pueblo colonial.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: menonitasBarrancas7,
        title: 'Día 7: Los Mochis - Regreso',
        description: 'Traslado a Los Mochis. Día libre para disfrutar de esta bonita ciudad con opciones como visitar la bahía de Topolobampo o hacer un city tour de la ciudad. Traslado al aeropuerto para tu regreso a casa. Fin de los servicios.',
        buttonText: 'Agenda tu cita',
      }
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
    heroImage: heroLeyendasFuerte,
    category: '7 días',
    duration: '7 Días - 6 Noches',
    price: '$2,200 MXN',
    experiences: [
      {
        image: leyendasFuerte1,
        title: 'Día 1: El Fuerte, Sinaloa',
        description: 'Vuelo hacia el hermoso Pueblo Mágico de El Fuerte. Traslado directo al Resort Posada del Hidalgo, un lugar icónico de arquitectura colonial sinaloense. Descansa y disfruta de las instalaciones de lujo de este resort histórico con vistas al río.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte2,
        title: 'Día 2: Río El Fuerte - Indígenas Mayos',
        description: 'Excursión en balsa por el Río El Fuerte. Aprecia la gran variedad de flora y fauna del lugar, observa petroglifos Nahuari de 800 a 2,500 años de antigüedad que revelan la historia ancestral de la región. Experiencia inmersiva en la naturaleza sinaloense.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte3,
        title: 'Día 3: El Fuerte - El Chepe - Divisadero',
        description: 'Traslado a la estación del Tren Chepe Express. Aborda este histórico tren rumbo a Divisadero en las Barrancas del Cobre. Disfruta de un viaje panorámico incomparable en Clase Ejecutiva con vistas espectaculares durante el recorrido.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte4,
        title: 'Día 4: Barrancas del Cobre',
        description: 'Tour por los miradores de las Barrancas del Cobre. Acceso al Parque Aventura con recorrido panorámico en Teleférico que desciende 2.75 km hasta la barranca de Urique, proporcionando vistas majestuosas de esta maravilla natural.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte5,
        title: 'Día 5: Barrancas - Pueblo Mágico de Creel',
        description: 'Mañana libre en las Barrancas para relajarse y disfrutar. Check out y traslado en camionetas hacia el Pueblo Mágico de Creel en la sierra tarahumara. Explora este pintoresco pueblo y su cultura local.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte6,
        title: 'Día 6: Creel - Menonitas - Chihuahua',
        description: 'Tour completo visitando el Pueblo Mágico de Creel, los hermosos valles con huertas de manzanas Golden y Rojas, y la comunidad menonita con sus productos artesanales. Traslado a Chihuahua por la tarde.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte7,
        title: 'Día 7: Regreso a casa',
        description: 'City Tour en Chihuahua visitando el Museo de la Revolución Mexicana, la Catedral estilo barroco, La Quinta Gameros y lugares históricos del centro. Traslado al aeropuerto para tu vuelo de regreso. Fin de servicios.',
        buttonText: 'Agenda tu cita',
      },
      
    ],
    programDetails: [
      {
        image: leyendasFuerte1,
        title: 'Día 1: El Fuerte, Sinaloa',
        description: 'Vuelo hacia el hermoso Pueblo Mágico de El Fuerte. Traslado directo al Resort Posada del Hidalgo, un lugar icónico de arquitectura colonial sinaloense. Descansa y disfruta de las instalaciones de lujo de este resort histórico con vistas al río.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte2,
        title: 'Día 2: Río El Fuerte - Indígenas Mayos',
        description: 'Excursión en balsa por el Río El Fuerte. Aprecia la gran variedad de flora y fauna del lugar, observa petroglifos Nahuari de 800 a 2,500 años de antigüedad que revelan la historia ancestral de la región. Experiencia inmersiva en la naturaleza sinaloense.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte3,
        title: 'Día 3: El Fuerte - El Chepe - Divisadero',
        description: 'Traslado a la estación del Tren Chepe Express. Aborda este histórico tren rumbo a Divisadero en las Barrancas del Cobre. Disfruta de un viaje panorámico incomparable en Clase Ejecutiva con vistas espectaculares durante el recorrido.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte4,
        title: 'Día 4: Barrancas del Cobre',
        description: 'Tour por los miradores de las Barrancas del Cobre. Acceso al Parque Aventura con recorrido panorámico en Teleférico que desciende 2.75 km hasta la barranca de Urique, proporcionando vistas majestuosas de esta maravilla natural.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte5,
        title: 'Día 5: Barrancas - Pueblo Mágico de Creel',
        description: 'Mañana libre en las Barrancas para relajarse y disfrutar. Check out y traslado en camionetas hacia el Pueblo Mágico de Creel en la sierra tarahumara. Explora este pintoresco pueblo y su cultura local.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte6,
        title: 'Día 6: Creel - Menonitas - Chihuahua',
        description: 'Tour completo visitando el Pueblo Mágico de Creel, los hermosos valles con huertas de manzanas Golden y Rojas, y la comunidad menonita con sus productos artesanales. Traslado a Chihuahua por la tarde.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: leyendasFuerte7,
        title: 'Día 7: Regreso a casa',
        description: 'City Tour en Chihuahua visitando el Museo de la Revolución Mexicana, la Catedral estilo barroco, La Quinta Gameros y lugares históricos del centro. Traslado al aeropuerto para tu vuelo de regreso. Fin de servicios.',
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
    heroImage: heroCabosYBarrancas,
    category: '8 días',
    duration: '8 Días - 7 Noches',
    price: '$2,800 MXN',
    experiences: [
      {
        image: cabosBarrancas1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución”',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas3,
        title: 'Día 3: Miradores y teleférico',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas4,
        title: 'Día 4: Divisadero - Los mochis',
        description: 'Después del desayuno deberás hacer el check out para ser trasladado a la estación del Tren Chepe con destino a la ciudad de Los Mochis.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas5,
        title: 'Día 5: Los Mochis - Los Cabos',
        description: 'Día libre. A la hora acordada haremos traslado al aeropuerto de Los Mochis para tomar el vuelo con destino a Los Cabos.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas6,
        title: 'Día 6: Los Cabos',
        description: 'Día libre. Se testigo de la enormidad y gracia de las Ballenas Jorobadas Gigantes en su entorno natural.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas7,
        title: 'Día 7: Los Cabos',
        description: 'Día libre. Puedes relajarte en la comodidad de las instalaciones de su hotel o realizar alguna de las actividades en San José del Cabo o Cabo San Lucas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas8,
        title: 'Día 8: Regreso a Casa',
        description: 'A la hora convenida, traslado al aeropuerto en donde tomarás el avión con destino a tu ciudad de origen. Fin de servicios.',
        buttonText: 'Agenda tu cita',
      },
    ],
    programDetails: [
      {
        image: cabosBarrancas1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución”',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas3,
        title: 'Día 3: Miradores y teleférico',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas4,
        title: 'Día 4: Divisadero - Los mochis',
        description: 'Después del desayuno deberás hacer el check out para ser trasladado a la estación del Tren Chepe con destino a la ciudad de Los Mochis.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas5,
        title: 'Día 5: Los Mochis - Los Cabos',
        description: 'Día libre. A la hora acordada haremos traslado al aeropuerto de Los Mochis para tomar el vuelo con destino a Los Cabos.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas6,
        title: 'Día 6: Los Cabos',
        description: 'Día libre. Se testigo de la enormidad y gracia de las Ballenas Jorobadas Gigantes en su entorno natural.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas7,
        title: 'Día 7: Los Cabos',
        description: 'Día libre. Puedes relajarte en la comodidad de las instalaciones de su hotel o realizar alguna de las actividades en San José del Cabo o Cabo San Lucas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: cabosBarrancas8,
        title: 'Día 8: Regreso a Casa',
        description: 'A la hora convenida, traslado al aeropuerto en donde tomarás el avión con destino a tu ciudad de origen. Fin de servicios.',
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
    heroImage: heroMarCortes,
    category: '8 días',
    duration: '8 Días - 7 Noches',
    price: '$2,100 MXN',
    experiences: [
      {
        image: marCortes1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución"',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes3,
        title: 'Día 3: Miradores y Teleférico',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes4,
        title: 'Día 4: Divisadero - El Chepe - Los Mochis',
        description: 'Paseo al Cerro del Gallego para admirar el famoso Cañón de Urique a través de su "Mirador".',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes5,
        title: 'Día 5: Los Mochis - La Paz',
        description: 'A la hora convenida serás trasladado al aeropuerto de Los Mochis para tomar vuelo con dirección a La Paz. Llegada a La Paz.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes6,
        title: 'Día 6: La Paz',
        description: 'Conocer los alrededores de esta ciudad capital de Baja California Sur.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes7,
        title: 'Día 7: Playa Balandra',
        description: 'Aléjate por unas horas de ciudad y descubre la belleza de la mejor playa de La Paz, Playa Balandra. Considerada una de las playas más bonitas del mundo.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes8,
        title: 'Día 8: Regreso a casa',
        description: 'traslado al aeropuerto por cuenta del pasajero en donde tomarás el avión con destino a su ciudad de origen.',
        buttonText: 'Agenda tu cita',
      },
    ],
    programDetails: [
      {
        image: marCortes1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución"',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes3,
        title: 'Día 3: Miradores y Teleférico',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes4,
        title: 'Día 4: Divisadero - El Chepe - Los Mochis',
        description: 'Paseo al Cerro del Gallego para admirar el famoso Cañón de Urique a través de su "Mirador".',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes5,
        title: 'Día 5: Los Mochis - La Paz',
        description: 'A la hora convenida serás trasladado al aeropuerto de Los Mochis para tomar vuelo con dirección a La Paz. Llegada a La Paz.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes6,
        title: 'Día 6: La Paz',
        description: 'Conocer los alrededores de esta ciudad capital de Baja California Sur.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes7,
        title: 'Día 7: Playa Balandra',
        description: 'Aléjate por unas horas de ciudad y descubre la belleza de la mejor playa de La Paz, Playa Balandra. Considerada una de las playas más bonitas del mundo.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: marCortes8,
        title: 'Día 8: Regreso a casa',
        description: 'traslado al aeropuerto por cuenta del pasajero en donde tomarás el avión con destino a su ciudad de origen.',
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
    heroImage: heroFavoritoTodos,
    category: '8 días',
    duration: '8 Días - 7 Noches',
    price: '$5,000 MXN',
    experiences: [
      {
        image: favoritoTodos1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución”',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos3,
        title: 'Día 3: Miradores y Teleférico',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos4,
        title: 'Día 4: Divisadero - El Chepe - Los Mochis',
        description: 'Después del desayuno deberás hacer el check out para ser trasladado a la estación del Tren Chepe con destino a la ciudad de Los Mochis.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos5,
        title: 'Día 5: Los Mochis - Mazatlán',
        description: 'A la hora convenida serás trasladado a la estación de autobuses para tomar el autobús comercial con destino a Mazatlán. Traslado al Hotel',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos6,
        title: 'Día 6: Día libre en Mazatlán',
        description: 'Disfruta de un día libre en Mazatlán para relajarse en la playa o salir a disfrutar de la cultura, la música y la comida.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos7,
        title: 'Día 7: Día libre en Mazatlán',
        description: 'Disfruta de un día libre en Mazatlán para continuar explorando las maravillas que te ofrece este destino.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos8,
        title: 'Día 8: Regreso a casa',
        description: 'Día libre para disfrutar de esta bonita ciudad. Traslado al aeropuerto. Fin de los servicios.',
        buttonText: 'Agenda tu cita',
      },
    ],
    programDetails: [
      {
        image: favoritoTodos1,
        title: 'Día 1: Chihuahua “Cuna de la Revolución”',
        description: 'Recibimiento en el Aeropuerto de la Ciudad de Chihuahua donde un trasladista te llevará al Hotel.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos2,
        title: 'Día 2: Menonitas - Pueblo Mágico de Creel',
        description: 'Visita el Pueblo Mágico de Creel, podrías ver de paso las huertas de finas manzanas Golden y Rojas.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos3,
        title: 'Día 3: Miradores y Teleférico',
        description: 'Tomarás un recorrido panorámico en Teleférico que desciende al fondo de la barranca de Urique.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos4,
        title: 'Día 4: Divisadero - El Chepe - Los Mochis',
        description: 'Después del desayuno deberás hacer el check out para ser trasladado a la estación del Tren Chepe con destino a la ciudad de Los Mochis.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos5,
        title: 'Día 5: Los Mochis - Mazatlán',
        description: 'A la hora convenida serás trasladado a la estación de autobuses para tomar el autobús comercial con destino a Mazatlán. Traslado al Hotel',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos6,
        title: 'Día 6: Día libre en Mazatlán',
        description: 'Disfruta de un día libre en Mazatlán para relajarse en la playa o salir a disfrutar de la cultura, la música y la comida.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos7,
        title: 'Día 7: Día libre en Mazatlán',
        description: 'Disfruta de un día libre en Mazatlán para continuar explorando las maravillas que te ofrece este destino.',
        buttonText: 'Agenda tu cita',
      },
      {
        image: favoritoTodos8,
        title: 'Día 8: Regreso a casa',
        description: 'Día libre para disfrutar de esta bonita ciudad. Traslado al aeropuerto. Fin de los servicios.',
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
