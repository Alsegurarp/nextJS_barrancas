'use client';

import React, { useEffect, useRef } from 'react';
import image1 from '../assets/Itinerarios/CanonUrique/Dia_1_Chihuahua_Barrancas_Premium_Museo_Revolucion_Casa_Antigua_Pancho_Villa.webp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarouselResponsive from '@/components/Carousel';
import DrawCircleText from './DrawCircleText';


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="panel h-[100dvh] relative snap-start hidden lg:flex">

      <div className="shape w-[40rem] h-[25rem] rotate-45 top-40 right-40 absolute"></div>

      <div className='px-16 pt-36 lg:px-40 xl:px-24 h-full w-full backdrop-blur-3xl flex flex-col justify-center align-center items-center md:flex-row lg:flex-col xl:flex-row gap-4'>
        <div className="lg:pl-20 mb-4 flex w-auto flex-col justify-center gap-2">
          <span className="opacity-80 text-primary-800 cursor-default text-md text-center sm:text-lg md:text-2xl">
            Barrancas Premium
          </span>
          <DrawCircleText />
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="min-w-[160px] max-w-[180px] bg-primary-800 hover:bg-transparent hover:text-black text-white hover:border hover:border-primary-800 rounded-full py-2 px-4 cursor-pointer">Contáctanos</button>
            <button className="min-w-[160px] max-w-[180px] bg-transparent hover:bg-primary-800 hover:text-white border border-primary-800 text-black rounded-full py-2 px-4 cursor-pointer">Explorar</button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Hero

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

            {/*<div className='relative flex lg:hidden'>
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

