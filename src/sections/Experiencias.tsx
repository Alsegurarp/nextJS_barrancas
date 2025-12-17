"use client"
import React from 'react'

import ExperienciasCarousel from '@/components/ExperienciasCarousel';

import { StaticImageData } from 'next/image';

interface ExperienciaSlide {
  image: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: () => void;
}

interface ExperienciasProps {
  slides: ExperienciaSlide[];
  title?: string;
  subtitle?: string;
}

function Experiencias({ 
  slides,
  title = "Experiencia por dias",
  subtitle = "Conoce tu próximo gran viaje."
}: ExperienciasProps) {

  return (
    <>
      <section className="flex flex-col panel h-dvh relative snap-start w-full top-0 lg:overflow-hidden">
              <div className="h-40 sm:h-40 md:h-48 lg:h-[280px] flex flex-col justify-center text-center sticky top-0 left-0 items-center z-20 pt-36 sm:pt-32 md:pt-40">
                  <h4 className='text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-[280px]'>{title}</h4>
                  <span className="text-black dark:text-white font-copyright text-sm sm:text-lg md:text-xl cursor-default">
                      {subtitle}
                  </span>
              </div>
              <ExperienciasCarousel 
                slides={slides}
              />
        </section>
    </>
  )
}

export default Experiencias