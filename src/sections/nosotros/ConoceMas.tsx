'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import StarBorder from '@/components/StarBorder';
import StarBorderButton from '@/components/StarBorderSustitute';

function ConoceMas() {
  return (
    <section className='panel relative snap-start w-full min-h-dvh flex flex-col justify-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto w-full'>
        {/* Top Section with Text and CTA */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 lg:gap-16 mb-4 items-center'>
          {/* Left Content */}
          <div className='flex flex-col'>
            <div className='inline-block mb-2 md:mb-8 w-fit'>
              <span className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 dark:bg-black/80 dark:backdrop-blur-md'>
                CONFIANZA
              </span>
            </div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white mb-2 md:mb-6 leading-tight'>
              Experiencias de viaje únicas y memorables.
            </h2>

            <p className='text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-2.5 md:mb-12 leading-relaxed'>
              Desde el inicio, nos propusimos crear itinerarios cuidadosamente elaborados, pensando en cada detalle para brindar momentos más placenteros, cómodos y especiales.
            </p>

            <div className='w-fit'>
                <StarBorderButton link='/contacto' width='w-40' height='h-12' textSize='text-sm'>
                    Conoce más
                </StarBorderButton>
              
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className='flex justify-center md:justify-end'>
            <div className='w-full max-w-sm md:max-w-md lg:max-w-lg h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
              <div className='relative w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center'>
                <span className='text-gray-500 dark:text-gray-400 text-center'>
                  <p className='text-sm font-medium'>Profile Image</p>
                  <p className='text-xs'>400x500</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConoceMas;