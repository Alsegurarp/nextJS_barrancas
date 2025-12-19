'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import HeroItinerario from '@/sections/HeroItinerario';
import Usage from '@/components/Layout/Navbar/usage';
import CustomCursor from '@/Componentes/utils/CustomCursor';
import WhatsappButton from '@/Componentes/utils/WhatsappButton';
import DarkModeButton from '@/Componentes/utils/DarkModeButton';
import Experiencias from '@/sections/Experiencias';
import ActividadesAventura from '@/sections/ActividadesAventura';
import Precios from '@/sections/Precios';
import IncluyeNoIncluye from '@/sections/IncluyeNoIncluye';
import HotelsCarousel from '@/sections/HotelsCarousel';
import GridFilter from '@/sections/GridFilter';
import Footer from '@/components-gsap/Footer';
import { getItinerary, getAllItineraries } from '@/lib/itinerariesData';

export default function ItinerarioPage() {
  const params = useParams();
  const slug = params.slug as string;

  const itinerary = getItinerary(slug);

  if (!itinerary) {
    notFound();
  }

  // Get all itineraries for GridFilter and exclude current itinerary
  const allItineraries = getAllItineraries();
  const gridCards = allItineraries
    .filter(it => it.slug !== slug)
    .map(it => ({
      id: it.slug,
      slug: it.slug,
      title: it.title,
      category: it.category,
      image: it.heroImage,
      description: it.description
    }));

  return (
    <>

      <div className='wrapper'>
        <Usage />
        <CustomCursor />
        <DarkModeButton />
        <WhatsappButton />

        {/* Hero Section */}
        <HeroItinerario
          title={itinerary.title}
          subtitle={itinerary.description}
          backgroundImage={itinerary.heroImage}
          duration={itinerary.duration}
        />

        {/* Experiences Section */}
        {itinerary.experiences.length > 0 && (
          <Experiencias slides={itinerary.experiences} />
        )}

        {/* Incluye/No Incluye Section */}
        {itinerary.incluye.length > 0 && (
          <IncluyeNoIncluye
            title='Incluye y no incluye'
            subtitle='Conoce todos los detalles de tu viaje'
            incluye={itinerary.incluye}
          />
        )}

        {/* Actividades Section */}
        <ActividadesAventura 
          itineraryData={itinerary}
          mainTitle={`${itinerary.title}`}
          mainDescription={itinerary.description}
          rightSideText={`Explora los ${itinerary.duration.split(' ')[0]} días de experiencia única en ${itinerary.title}`}
        />

        {/* Precios Section */}
        {itinerary.pricing && itinerary.pricing.length > 0 && (
          <Precios
            title='Precios de experiencias'
            subtitle='Elige la temporada perfecta para tu viaje'
            sections={itinerary.pricing}
          />
        )}

        {/* Hoteles Carousel */}
        {itinerary.hotels && itinerary.hotels.length > 0 && (
          <HotelsCarousel cards={itinerary.hotels} />
        )}

        {/* Related Itineraries Grid */}
        <GridFilter
          title='Conoce más itinerarios'
          subtitle='Explora nuestras otras experiencias disponibles'
          cards={gridCards}
        />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
