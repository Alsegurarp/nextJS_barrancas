'use client';

import React from 'react';
import Usage from '@/components/Layout/Navbar/usage';
import CustomCursor from '@/Componentes/utils/CustomCursor';
import WhatsappButton from '@/Componentes/utils/WhatsappButton';
import DarkModeButton from '@/Componentes/utils/DarkModeButton';
import GridFilter from '@/sections/GridFilter';
import Footer from '@/components-gsap/Footer';
import { getAllItineraries } from '@/lib/itinerariesData';
import { FaFacebookF, FaYoutube, FaInstagram, FaPhone } from 'react-icons/fa6';
import HeroItinerario from '@/sections/HeroItinerario';
import Image from 'next/image';
import image1 from '@/assets/Portadas/HeroImage.webp';

export default function ItinerariosPage() {
  const allItineraries = getAllItineraries();

  // Convert itineraries to card format for GridFilter
  const cards = allItineraries.map((itinerary) => ({
    id: itinerary.slug,
    slug: itinerary.slug,
    title: itinerary.title,
    category: itinerary.category,
    image: itinerary.heroImage,
    description: itinerary.description,
  }));

  return (
    <>

      <div className='wrapper'>
            <Usage />
            <CustomCursor />
            <DarkModeButton />
            <WhatsappButton />
        <HeroItinerario 
          title="Itinerarios Disponibles"
          subtitle="Explora las Barrancas del Cobre"
          backgroundImage={image1}
          duration="6 Días - 5 Noches"
        />

        {/* Itinerarios Grid */}
        <GridFilter
          title='Nuestros Itinerarios'
          subtitle='Explora los mejores destinos y experiencias en Barrancas del Cobre'
          cards={cards}
        />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
