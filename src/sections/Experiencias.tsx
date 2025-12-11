"use client"
import React from 'react'

import ExperienciasCarousel from '@/components/ExperienciasCarousel';

import Image from 'next/image';
import image1 from '@/assets/Portadas/HeroImage.webp';
import image2 from '@/assets/Portadas/HeroImage2.webp';


// Declaracion objetos y contenido
const carouselImages = [image1, image2];
const diasExperiencias = [
                {
                  image: image1,
                  title: "Lorem ipsum dolor sit.",
                  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum ",
                  buttonText: "Agenda tu cita",
                  buttonAction: () => console.log('clicked')
                },
                {
                  image: image2,
                  title: "Lorem ipsum dolor sit.",
                  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ",
                  buttonText: "Contacta ahora",
                  buttonAction: () => console.log('clicked')
                },
              ];


function Experiencias() {

  return (
    <>
      <section className="flex flex-col panel h-dvh relative snap-start w-full top-0 lg:overflow-hidden">
              <div className="h-40 sm:h-40 md:h-48 lg:h-[280px] flex flex-col justify-center text-center sticky top-0 left-0 items-center z-20 pt-36 sm:pt-32 md:pt-40">
                  <h4 className='text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-[280px]'>Experiencia por dias</h4>
                  <span className="text-black dark:text-white font-copyright text-sm sm:text-lg md:text-xl cursor-default">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
              </div>
              <ExperienciasCarousel 
                slides={diasExperiencias}
              />
        </section>
    </>
  )
}

export default Experiencias