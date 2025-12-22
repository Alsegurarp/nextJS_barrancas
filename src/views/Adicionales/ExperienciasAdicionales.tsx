'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { experienciasAdicionalesData, categoriasAdicionales } from '@/lib/ExperienciasAdicionalesInfo';

function ExperienciasAdicionales() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter cards based on active filter
  const filteredCards = activeFilter
    ? experienciasAdicionalesData.filter(card => card.category === activeFilter)
    : experienciasAdicionalesData;

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 320; // Card width + gap
    const currentScroll = scrollContainerRef.current.scrollLeft;
    
    scrollContainerRef.current.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className='w-full panel relative snap-start h-dvh overflow-hidden flex flex-col'>
      <div className='container mx-auto px-4 md:px-8 pt-6 lg:pt-8 flex-shrink-0'>
        {/* Header Section */}
        <div className='flex flex-col justify-center text-center items-center z-20 pt-12 lg:pt-24 pb-6 lg:pb-12'>
          <h2 className='text-center text-black dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl cursor-default select-none min-w-[280px] mb-2 md:mb-3'>
            Experiencias Adicionales
          </h2>
          <p className='text-black dark:text-white font-copyright text-xs sm:text-sm md:text-base lg:text-lg cursor-default max-w-2xl'>
            Descubre nuestras actividades por categoría
          </p>
        </div>

        {/* Filter Buttons */}
        <div className='overflow-x-auto sm:flex sm:flex-wrap sm:justify-center my-2 md:my-4 px-4 sm:px-0 -mx-4 sm:mx-0'>
          <div className='flex gap-2 sm:gap-3 sm:justify-center sm:w-full sm:flex-wrap pb-2 sm:pb-0 min-w-min sm:min-w-full'>
            {/* All Button */}
            <motion.button
              onClick={() => setActiveFilter(null)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap shrink-0 ${
                activeFilter === null
                  ? 'bg-primary-800 dark:bg-gray-100 text-white dark:text-primary-950'
                  : 'border-2 border-primary-800 dark:border-white/40 text-primary-800 dark:text-white dark:bg-black/40 hover:bg-primary-800/10 dark:hover:bg-white/10'
              }`}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
            >
              Ver todos
            </motion.button>

            {/* Category Buttons */}
            {categoriasAdicionales.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base capitalize whitespace-nowrap flex-shrink-0 ${
                  activeFilter === category
                    ? 'bg-primary-800 dark:bg-gray-100 text-white dark:text-primary-950'
                    : 'border-2 border-primary-800 dark:border-white/40 text-primary-800 dark:text-white dark:bg-black/40 hover:bg-primary-800/10 dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid - Scrollable Container */}
      <div className='flex-1 overflow-hidden px-4 md:px-8 pb-4 md:pb-6 relative flex flex-col'>
        {/* Navigation Controls at Top */}
        <div className='hidden sm:flex items-center justify-between shrink-0 mb-2.5 absolute z-10 '>
          <div className='flex gap-2 px-2.5 pt-2.5'>
            <button
              onClick={() => handleScroll('left')}
              className='bg-white hover:bg-gray-100 dark:bg-primary-800/40  rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110'
            >
              <RiArrowDropLeftLine className='text-gray-900 dark:text-primary-200 text-xl md:text-2xl' />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className='bg-white hover:bg-gray-100 dark:bg-primary-800/40  rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110'
            >
              <RiArrowDropRightLine className='text-gray-900 dark:text-primary-200 text-xl md:text-2xl' />
            </button>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div className='flex-1 overflow-hidden'>
          <div
            ref={scrollContainerRef}
            className='overflow-x-auto overflow-y-hidden scroll-smooth h-full  mb-4 md:mb-6'
          >
            <motion.div
              layout
              className='flex flex-row gap-3 sm:gap-4 md:gap-4 h-full min-w-min'
            >
              {filteredCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => router.push(`/adicionales/${card.slug}`)}
                  className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer w-56 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] shrink-0'
                >
                  {/* Image */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent' />

                  {/* Category Badge */}
                  <div className='absolute top-3 right-3 bg-black/20 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full'>
                    <span className='text-xs font-bold text-white dark:text-white uppercase'>
                      {card.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6'>
                    <h3 className='text-white font-semibold text-base sm:text-lg mb-1 group-hover:translate-y-0 transition-transform duration-300'>
                      {card.title}
                    </h3>
                    <p className='text-white/80 text-xs sm:text-sm line-clamp-2'>
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-10 md:hidden" />

      {/* No Results Message */}
      {filteredCards.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='flex items-center justify-center flex-1'
        >
          <p className='text-black dark:text-white/60 text-lg'>
            No hay experiencias en esta categoría
          </p>
        </motion.div>
      )}
    </section>
  );
}

export default ExperienciasAdicionales;