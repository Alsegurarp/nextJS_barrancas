"use client"

import React from 'react';
import HeroItinerario from '@/sections/HeroItinerario';
import Usage from '@/components/Layout/Navbar/usage';
import CustomCursor from '@/Componentes/utils/CustomCursor';
import WhatsappButton from '@/Componentes/utils/WhatsappButton';
import DarkModeButton from '@/Componentes/utils/DarkModeButton';
import Experiencias from '@/sections/Experiencias';

import Image from 'next/image';
import image1 from '@/assets/Portadas/HeroImage.webp';
import image2 from '@/assets/Portadas/HeroImage2.webp';
import imageCardItinerario1 from '@/assets/itinerariosImages/hotel-barrancas1.webp';
import imageCardItinerario2 from '@/assets/itinerariosImages/hotel-barrancas2.webp';
import imageCardItinerario3 from '@/assets/itinerariosImages/hotel-barrancas3.webp';
import imageCardItinerario4 from '@/assets/itinerariosImages/hotel-barrancas4.webp';
import imageCardItinerario5 from '@/assets/itinerariosImages/hotel-barrancas5.webp';
import imageCardItinerario6 from '@/assets/itinerariosImages/hotel-barrancas6.webp';
import imageCardItinerario7 from '@/assets/itinerariosImages/hotel-barrancas7.webp';

import { FaFacebookF, FaYoutube, FaInstagram, FaPhone, FaCheck, FaExclamation } from "react-icons/fa6";

const experienciasData = [
  {
    image: image1,
    title: "Día 1: Llegada a Chihuahua",
    description: "Conocerás Las Barrancas del Cobre, uno de los sistemas de barrancas más largos y profundos del mundo, con 60,000 km de montañas de los cuales casi la mitad corresponde a la superficie de los precipicios.",
    buttonText: "Agenda tu cita",
    buttonAction: () => console.log('clicked')
  },
  {
    image: image2,
    title: "Día 2: Viaje en Chepe Express",
    description: "Realizararás un viaje a las Barrancas del Cobre, conviértete en uno de los visitantes del destinos turísticos más importantes de México.",
    buttonText: "Contacta ahora",
    buttonAction: () => console.log('clicked')
  },
];


import ActividadesAventura from '@/sections/ActividadesAventura';
import Precios from '@/sections/Precios';
import IncluyeNoIncluye from '@/sections/IncluyeNoIncluye';
import { FaTimes } from 'react-icons/fa';
import HotelsCarousel from '@/sections/HotelsCarousel';
import GridFilter from '@/sections/GridFilter';
import Footer from '@/components-gsap/Footer';



function Page() {
    // const [emblaRef] = useEmblaCarousel()

  return (
    <>

      <div className="wrapper">
            <Usage />
            <CustomCursor />
            <DarkModeButton />
            <WhatsappButton />
        <HeroItinerario />

        <Experiencias 
          slides={experienciasData}
          title="Itinerarios por días"
          subtitle="Conoce tu próximo gran viaje a las Barrancas del Cobre"
        />
        <ActividadesAventura />
        <Precios
          title="Precios de experiencias"
          subtitle="Elige la temporada perfecta para tu viaje"
          sections={[
            {
              title: 'Temporada Regular',
              items: [
                { label: 'Habitación Doble', price: '$41,353' },
                { label: 'Habitación Sencilla', price: '$61,919' },
                { label: 'Habitación Triple', price: '$36,752' },
                { label: 'Menor de 2 a 11 años', price: '$23,834' },
              ],
              onReserve: () => console.log('Reserve clicked - Temporada Regular'),
            },
            {
              title: 'Temporada Alta',
              items: [
                { label: 'Habitación Doble', price: '$52,500' },
                { label: 'Habitación Sencilla', price: '$73,200' },
                { label: 'Habitación Triple', price: '$47,800' },
                { label: 'Menor de 2 a 11 años', price: '$31,450' },
              ],
              onReserve: () => console.log('Reserve clicked - Temporada Alta'),
            },
            {
              title: 'Temporada de Cerezos',
              items: [
                { label: 'Habitación Doble', price: '$58,750' },
                { label: 'Habitación Sencilla', price: '$82,100' },
                { label: 'Habitación Triple', price: '$54,300' },
                { label: 'Menor de 2 a 11 años', price: '$36,200' },
              ],
              onReserve: () => console.log('Reserve clicked - Temporada de Cerezos'),
            },
            {
              title: 'Temporada Navidad',
              items: [
                { label: 'Habitación Doble', price: '$67,200' },
                { label: 'Habitación Sencilla', price: '$94,500' },
                { label: 'Habitación Triple', price: '$62,100' },
                { label: 'Menor de 2 a 11 años', price: '$41,400' },
              ],
              onReserve: () => console.log('Reserve clicked - Temporada Navidad'),
            },
          ]}
        />
        <IncluyeNoIncluye
            title="Incluye y no incluye"
            subtitle="Mira qué está incluido en tu experiencia"
            incluye={[
                { 
                  label: 'Incluye',
                  icon: FaCheck,
                  description: [
                    'Boleto de avión viaje redondo saliendo de la Ciudad de México, Monterrey, Guadalajara o Tijuana.',
                    'Traslados Aeropuerto - Hotel - Aeropuerto.',
                    'Traslado Chihuahua -  Creel.',
                    'Tren Chepe Express Clase Ejecutiva.',
                    '5 Días 4 Noches de hospedaje en hoteles de categoría Premium.',
                    'Guías certificados por SECTUR y expertos en el destino.',
                    'Tour "Cuna de la Revolución" en la Ciudad de Chihuahua.',
                    'Tour al Valle de los Hongos, Valle de las Ranas, Misión de San Ignacio, Lago de Arareko y una espectacular Cueva Tarahumara.',
                    'Tour caminata por los espectaculares miradores de las Barrancas del Cobre.',
                    'Tour a Divisadero y La Piedra Volada en las Barrancas del Cobre.',
                    'Entrada al Teleférico en Parque Aventura.',
                    'Alimentos acorde al itinerario.'
                  ]
                },
                { label: 'No incluye',
                  icon: FaTimes,
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
                  ] },
                { label: 'Importante',
                  icon: FaExclamation,
                  description: [
                    'Alimentos no especificados.',
                    'Seguro turístico.',
                    'Alimentos ni bebidas a bordo del Tren.',
                    'Lo que no esté indicado en el apartado “EL VIAJE INCLUYE".',
                  ] }
            ]}
            />
        <HotelsCarousel cards={[
            { 
              id: '1', 
              title: 'Lakeside Elegant House', 
              description: '4 Bedrooms | Premium Lakeside Estate',
              image: imageCardItinerario1
            },
            { 
              id: '2', 
              title: 'City View Apartment', 
              description: '2 Bedrooms | Modern Urban Living',
              image: imageCardItinerario2
            },
            { 
              id: '3', 
              title: 'Luxury Beach Villa', 
              description: '5 Bedrooms | Beachfront Paradise',
              image: imageCardItinerario3
            },
            { 
              id: '4', 
              title: 'Rustic Mountain Cabin', 
              description: '3 Bedrooms | Cozy Mountain Retreat',
              image: imageCardItinerario4
            },
            {
              id: '5', 
              title: 'Rustic Mountain Cabin', 
              description: '3 Bedrooms | Cozy Mountain Retreat',
              image: imageCardItinerario5
            },
            { 
              id: '6', 
              title: 'Lakeside Elegant House', 
              description: '4 Bedrooms | Premium Lakeside Estate',
              image: imageCardItinerario6
            },
            { 
              id: '7', 
              title: 'City View Apartment', 
              description: '2 Bedrooms | Modern Urban Living',
              image: imageCardItinerario7
            },
          ]}/>
        <GridFilter />
        <Footer />
      </div>
    </>
  )
}

export default Page