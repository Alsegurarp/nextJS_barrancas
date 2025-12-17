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
      <div className='fixed h-[70vh] bottom-0 w-24 hidden lg:flex flex-col justify-between p-10 items-center z-40'>
        <div className='flex items-center -rotate-90 gap-8'>
          <p>Premium</p>
          <div className='w-20 h-0.5 bg-black/50 dark:bg-white'></div>
          <p>Mex</p>
        </div>
        <div className='space-y-8 *:cursor-pointer'>
          <FaFacebookF
            className='hover:text-primary-800'
            onClick={() => {
              window.open('https://www.facebook.com/barrancasdelcobrepremiumoficial', '_blank');
            }}
          />
          <FaYoutube
            className='hover:text-primary-800'
            onClick={() => {
              window.open('https://www.youtube.com/@viajespremiumelevatuvida', '_blank');
            }}
          />
          <FaInstagram
            className='hover:text-primary-800'
            onClick={() => {
              window.open('https://www.instagram.com/barrancaspremium/', '_blank');
            }}
          />
          <FaPhone
            className='hover:text-primary-800'
            onClick={() => {
              window.open('tel:+1234567890', '_blank');
            }}
          />
        </div>
      </div>

      <div className='wrapper'>
        <Usage />
        <CustomCursor />
        <DarkModeButton />
        <WhatsappButton />

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
