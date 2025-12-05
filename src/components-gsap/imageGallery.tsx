'use client';

import React, { useRef } from 'react';
import CarouselResponsive from '@/components/Carousel';
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

import image1 from '../assets/Itinerarios/CanonUrique/Dia_1_Chihuahua_Barrancas_Premium_Museo_Revolucion_Casa_Antigua_Pancho_Villa.webp';
import image2 from '../assets/Itinerarios/CanonUrique/Dia_2_Chihuahua_Barrancas_Premium_Pueblo_MAgico_Creel_Cueva_Tarahumara_Habitada_Viajes_Turismo.webp';
import image3 from '../assets/Itinerarios/CanonUrique/Dia_3_Barrancas_Del_Cobre_Barrancas_Premium_Parque_Aventura_Teleferico_Descenso_Barranca_Urique_Majestuosidad.webp';
import image5 from '../assets/Itinerarios/CanonUrique/Dia_5_Mochis_Barrancas_Premium_Tren_Chepe_Express.webp';


// Carousel items for Barrancas images
const carouselItems = [
  {
    title: 'Día 1 - Chihuahua',
    description: 'Museo de la Revolución y Casa de Pancho Villa',
    id: 1,
    icon: <SiReact className="h-4 w-4 text-white" />,
    backgroundImage: image1.src,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  {
    title: 'Día 2 - Creel',
    description: 'Pueblo Mágico y Cueva Tarahumara',
    id: 2,
    icon: <SiNextdotjs className="h-4 w-4 text-white" />,
    backgroundImage: image2.src,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  {
    title: 'Día 3 - Barrancas',
    description: 'Parque Aventura y Teleférico',
    id: 3,
    icon: <SiTypescript className="h-4 w-4 text-white" />,
    backgroundImage: image3.src,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  {
    title: 'Día 4 - Urique',
    description: 'Descenso a la Barranca de Urique',
    id: 4,
    icon: <SiReact className="h-4 w-4 text-white" />,
    backgroundImage: image3.src,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  {
    title: 'Día 5 - El Fuerte',
    description: 'Tren Chepe Express a Los Mochis',
    id: 5,
    icon: <SiTailwindcss className="h-4 w-4 text-white" />,
    backgroundImage: image5.src,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
];



const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];
/*
// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];
*/



const ImageGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="panel h-screen relative snap-start">
      <div className="shape w-160 h-100 rotate-45 top-40 right-40 absolute"></div>

      <div className='px-16 pt-12 lg:px-40 xl:px-24 h-full backdrop-blur-3xl flex flex-col justify-center align-center items-center gap-4'>
        {/*<div className='overflow-hidden h-[200px] relative t-12'>
                <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
                </div> */}

        <div className="lg:pl-20 mb-4 flex w-auto flex-col justify-center gap-2">
          <span className="opacity-80 text-primary-800 cursor-default text-md text-center sm:text-lg md:text-2xl">
            Barrancas Premium
          </span>
          <div className='relative flex lg:hidden'>
            <CarouselResponsive
              items={carouselItems}
              baseWidth={260}
              cardHeight={350}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>

          <div className='relative hidden lg:flex xl:hidden'>
            <CarouselResponsive
              items={carouselItems}
              baseWidth={400}
              cardHeight={480}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>

          <div className='relative hidden xl:flex'>
            <CarouselResponsive
              items={carouselItems}
              baseWidth={500}
              cardHeight={580}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}


export default ImageGallery

{/* Cards multiples 
            <div className="hidden lg:flex flex w-auto h-full justify-center items-center">
              <div className="cardAnimated w-[240px] h-[320px] relative top-16 left-28 origin-top-left rotate-[344deg] shadow-2xs rounded-2xl overflow-hidden">
                <img
                  src={image1}
                  alt="Barrancas Premium"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="cardAnimated w-[240px] h-[320px] relative top-8 left-16 origin-top-left rotate-[-10.79deg] shadow-2xs rounded-2xl overflow-hidden">
                <img
                  src={image1}
                  alt="Barrancas Premium"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="cardAnimated w-[240px] h-[320px] relative top-4 left-20 origin-top-left rotate-[10.79deg] shadow-2xs rounded-2xl overflow-hidden">
                <img
                  src={image1}
                  alt="Barrancas Premium"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="cardAnimated w-[240px] h-[320px] relative top-20 left-20 origin-top-left rotate-[-338deg] shadow-2xs rounded-2xl overflow-hidden">
                <img
                  src={image1}
                  alt="Barrancas Premium"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
            */}


{/*

            {/*
            <div className='relative flex lg:hidden'>
                <CarouselResponsive
                    baseWidth={200}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div> 

            <div className='relative hidden lg:flex xl:hidden'>
                <CarouselResponsive
                    baseWidth={400}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>

            <div className='relative hidden xl:flex'>
                <CarouselResponsive
                    baseWidth={500}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>

*/}


