import React from 'react';
import Image, { StaticImageData } from 'next/image';
import StarBorder from '@/components/StarBorder';
import StarBorderButton from '@/components/StarBorderSustitute';

interface StatCard {
  value: string;
  label: string;
}

function HeroNosotros() {
  const stats: StatCard[] = [
    { value: '95%', label: 'Complete customer satisfaction' },
    { value: '10+', label: 'Innovation and valuable insights' },
    { value: '$10m', label: 'Highly efficient financial strategies' },
    { value: '50m', label: 'Users worldwide providing them with' }
  ];

  return (
    <>
    <section className='panel relative snap-start w-full h-dvh py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8'>
      {/* Header Section */}
      <div className='max-w-6xl mx-auto w-full mb-12 md:mb-16 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white pt-4'>
          Conoce de nosotros
        </h1>
        <p className='text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-2.5 md:mb-8'>
          Detrás de cada viaje único hay un equipo que lidera con visión, pasión y compromiso.
        </p>
        
        {/* Buttons */}
        <div className='flex max-[350px]:flex-col flex-row justify-center items-center gap-4'>
          <StarBorderButton width='w-40' height='h-12' textSize='text-sm'>
            Conoce más
          </StarBorderButton>
          <StarBorder width='w-40' height='h-12' textSize='text-sm'>
            Contacta ya
          </StarBorder>
          
        </div>
      </div>

      {/* Main Content Section */}
      <div className='max-w-4xl md:max-w-6xl mx-auto w-full mb-16 md:mb-20'>
        {/* Profile Cards and Stats Grid */}
        <div className='flex md:grid flex-row md:grid-cols-12 gap-6 md:gap-8 items-center mb-12 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scroll-smooth snap-x snap-mandatory'>
          
          {/* Left Profile Card */}
          <div className='md:col-span-4 flex justify-center md:justify-end shrink-0 md:shrink'>
            <div className='w-60 md:w-full max-w-xs h-96 md:h-full rounded-3xl overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
              <div className='relative w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center'>
                <span className='text-gray-500 dark:text-gray-400 text-center'>
                  <p className='text-sm font-medium'>Profile Image</p>
                  <p className='text-xs'>1200x400</p>
                </span>
              </div>
            </div>
          </div>

          {/* Center Stats Cards */}
          <div className='md:col-span-4 flex flex-col gap-6 shrink-0 md:shrink'>
            {/* Card 1 - 100% */}
            <div className='bg-gradient-to-br from-primary-500 to-primary-800 rounded-3xl p-6 md:p-8 text-white shadow-xl w-60 md:w-full'>
              <p className='text-5xl md:text-6xl font-bold'>100%</p>
              <p className='text-xs md:text-sm font-medium mb-3 opacity-90'>
                De nuestros clientes nos recomiendan.
              </p>
            </div>

            {/* Card 2 - +20 */}
            <div className='bg-black dark:bg-black/80 dark:backdrop-blur-md rounded-3xl p-6 md:p-8 text-white shadow-xl w-60 md:w-full'>
              <p className='text-5xl md:text-6xl font-bold'>+20</p>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0'>
                  <span className='text-sm'>⭐</span>
                </div>
                <p className='text-xs md:text-sm font-medium opacity-90'>
                  Años liderando viajes a especialidad en el mundo. 
                </p>
              </div>
            </div>
          </div>

          {/* Right Profile Card */}
          <div className='md:col-span-4 flex justify-center md:justify-start shrink-0 md:shrink'>
            <div className='w-60 md:w-full max-w-xs h-96 md:h-full rounded-3xl overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
              <div className='relative w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center'>
                <span className='text-gray-500 dark:text-gray-400 text-center'>
                  <p className='text-sm font-medium'>Profile Image</p>
                  <p className='text-xs'>1200x400</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default HeroNosotros;