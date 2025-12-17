'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import image1 from '@/assets/Portadas/HeroImage.webp';
import image2 from '@/assets/Portadas/HeroImage2.webp';
import { StaticImageData } from 'next/image';

interface Card {
  id: string;
  slug: string;
  title: string;
  category: 'parejas' | 'aventura' | 'chepe' | 'best sellers';
  image: StaticImageData;
  description?: string;
}

interface GridFilterProps {
  title?: string;
  subtitle?: string;
  cards?: Card[];
}

// Sample data - replace with your actual cards
const defaultCards: Card[] = [
  {
    id: '1',
    slug: 'canon-urique',
    title: 'Cañon de Urique',
    category: 'parejas',
    image: image1,
    description: 'Experiencia romántica'
  },
  {
    id: '2',
    slug: 'secretos-mayos',
    title: 'Secretos Mayos',
    category: 'aventura',
    image: image2,
    description: 'Para los valientes'
  },
  {
    id: '3',
    slug: 'mayor-ranking',
    title: 'Mayor Ranking',
    category: 'chepe',
    image: image1,
    description: 'Viaje en tren'
  },
  {
    id: '4',
    slug: 'mar-de-cortes-y-barrancas',
    title: 'Mar de Cortés y barrancas',
    category: 'best sellers',
    image: image1,
    description: 'Lo más popular'
  },
  {
    id: '5',
    slug: 'memonitas-y-barrancas-del-cobre',
    title: 'Menonitas y Barrancas',
    category: 'parejas',
    image: image1,
    description: 'Perfecta para parejas'
  },
  {
    id: '6',
    slug: 'leyendas-del-fuerte',
    title: 'Leyendas del fuerte',
    category: 'aventura',
    image: image1,
    description: 'Ruta de montaña'
  },
  {
    id: '7',
    slug: 'los-cabos-y-barrancas-del-cobre',
    title: 'Los Cabos y Barrancas',
    category: 'chepe',
    image: image1,
    description: 'Primera clase'
  },
  {
    id: '8',
    slug: 'favorito-de-todos',
    title: 'Favorito de todos',
    category: 'best sellers',
    image: image1,
    description: 'Más vendido'
  },
];

const categories = ['parejas', 'aventura', 'chepe', 'best sellers'] as const;

function GridFilter({
  title = 'Top Destination',
  subtitle = 'Explora los mejores destinos y experiencias',
  cards = defaultCards
}: GridFilterProps) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter cards based on active filter
  const filteredCards = activeFilter
    ? cards.filter(card => card.category === activeFilter)
    : cards;

  return (
    <section className='w-full panel relative snap-start h-dvh overflow-hidden flex flex-col'>
      <div className='container mx-auto px-4 md:px-8 py-6 lg:py-8 flex-shrink-0'>
        {/* Header Section */}
        <div className='flex flex-col justify-center text-center items-center z-20 pt-12 lg:pt-24 pb-6 lg:pb-12'>
            <h2 className='text-center text-black dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl cursor-default select-none min-w-[280px] mb-2 md:mb-3'>
              {title}
            </h2>
            <p className='text-black dark:text-white font-copyright text-xs sm:text-sm md:text-base lg:text-lg cursor-default max-w-2xl'>
              {subtitle}
            </p>
          </div>

        {/* Filter Buttons */}
        <div className='overflow-x-auto  sm:flex sm:flex-wrap sm:justify-center my-2 md:my-4 px-4 sm:px-0 -mx-4 sm:mx-0'>
          <div className='flex gap-2 sm:gap-3 sm:justify-center sm:w-full sm:flex-wrap pb-2 sm:pb-0 min-w-min sm:min-w-full'>
            {/* All Button */}
            <motion.button
              onClick={() => setActiveFilter(null)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap shrink-0 ${
                activeFilter === null
                  ? 'bg-primary-800 dark:bg-gray-100 text-white dark:text-primary-950'
                  : 'border-2 border-primary-800 dark:border-white/40 text-primary-800 dark:text-white dark:bg-black/40  hover:bg-primary-800/10 dark:hover:bg-white/10'
              }`}
              whileHover={{ scale: 0.90 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todos
            </motion.button>

            {/* Category Buttons */}
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base capitalize whitespace-nowrap flex-shrink-0 ${
                  activeFilter === category
                    ? 'bg-primary-800 dark:bg-gray-100 text-white dark:text-primary-950'
                    : 'border-2 border-primary-800 dark:border-white/40 text-primary-800 dark:text-white dark:bg-black/40 hover:bg-primary-800/10 dark:hover:bg-white/10'
                }`}
                whileHover={{ scale: 0.90 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid - Scrollable Container */}
      <div className='flex-1 overflow-x-auto overflow-y-hidden px-4 md:px-8 pb-4 md:pb-6 lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1420px] lg:mx-auto mb-3.5'>
        <motion.div
          layout
          className='grid grid-flow-col grid-rows-2 gap-1.5 xs:gap-2 md:gap-2.5 auto-cols-max h-4/5'
        >
            {filteredCards.map((card, index) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => router.push(`/itinerarios/${card.slug}`)}
                className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer w-60 sm:w-64 md:w-72 lg:w-80 h-full shrink-0'
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
                <span className='text-xs font-bold text-primary-700 dark:text-white uppercase'>
                  {card.category}
                </span>
              </div>

              {/* Content */}
              <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6'>
                <h3 className='text-white font-semibold text-base sm:text-lg mb-1 group-hover:translate-y-0 transition-transform duration-300'>
                  {card.title}
                </h3>
                {card.description && (
                  <p className='text-white/80 text-xs sm:text-sm'>
                    {card.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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

export default GridFilter;