'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconType } from 'react-icons';



// Swiper responsive styles
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    width: 32px;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 640px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 40px;
      height: 40px;
    }
  }

  @media (min-width: 1024px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 48px;
      height: 48px;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
    color: white;
  }

  @media (min-width: 640px) {
    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 20px;
    }
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }

  @media (min-width: 640px) {
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
    }
  }

  @media (min-width: 1024px) {
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .swiper-pagination {
    bottom: -30px;
  }

  @media (min-width: 640px) {
    .swiper-pagination {
      bottom: -35px;
    }
  }

  @media (min-width: 1024px) {
    .swiper-pagination {
      bottom: -40px;
    }
  }
`;

import image1 from '@/assets/heroContent/imagen_1280.jpg';
import StarBorderButton from '@/components/StarBorderSustitute';
import StarBorder from '@/components/StarBorder';

interface IncludeItem {
  label: string;
  icon: IconType;
  description?: string | string[];
  image?: StaticImageData;
  program?: string;
}

interface IncluyeNoIncluyelProps {
  title?: string;
  icon?: IconType;
  subtitle?: string;
  incluye?: IncludeItem[];
}


// Card Item Component - Always Open
function CardItem({ 
  label, 
  icon: Icon,
  description, 
  image = image1,
  program = '¿Alguna duda?',
}: IncludeItem) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className='relative w-full h-full cursor-pointer max-w-[400px] xs:max-w-[450px] object-center'
      style={{ perspective: '1000px', placeSelf: 'center'}}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
        }}
      >
        {/* Front Face */}
        <div
          style={{
            backfaceVisibility: 'hidden',
          }}
          className='rounded-2xl overflow-hidden shadow-xl w-full h-full flex flex-col justify-between relative'
        >
          {/* Image section - Full height background */}
          {image && (
            <div className='absolute inset-0 w-full h-full'>
              <Image
                src={image}
                alt={label}
                fill
                className='object-cover'
              />
              {/* Dark overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50' />
            </div>
          )}

          {/* Glass Effect Content Container */}
          <div className='relative z-10 h-min flex flex-col xs:flex-row justify-between p-2.5 xs:1.5 sm:p-2.5 backdrop-blur-md bg-white/10 dark:bg-black/40 rounded-2xl border border-white/20 dark:border-white/10 shadow-lg items-start xs:items-center'>
            {/* Top Section - Title with Glass Effect */}
            <div className='xs:p-2'>
              <p className='text-lg sm:text-xl font-bold text-white dark:text-white'>
                {label}
              </p>
              {description && typeof description === 'string' && (
                <p className='text-sm sm:text-base text-white/90 dark:text-white/80 leading-relaxed'>
                  {description}
                </p>
              )}
            </div>

            {/* Bottom Section - Button with Glass Effect */}
            <div className='xs:p-2'>
              <button className='w-full relative px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white text-sm md:text-base font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group'>
                Conoce más ↩
                {/* Red animated notification badge */}
                <div className="absolute -right-2 -top-2 z-10">
                  <div className="flex h-5 w-5 items-center justify-center">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"
                    ></span>
                    <span
                      className="relative inline-flex h-4 w-4 rounded-full bg-primary-500"
                    ></span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Card de back - lista */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className='rounded-lg overflow-hidden absolute inset-0 bg-gradient-to-t from-primary-800/50 via-primary-800/70 to-primary-800/90 dark:from-gray-700/20 dark:to-black/10 dark:via-gray-500/30 shadow-xl w-full h-full flex flex-col top-0 left-0'
        >
          {/* Back Header 
            <div className='flex items-center justify-between px-5 py-4 backdrop-blur-lg bg-white/10 dark:bg-black/40 shrink-0 border border-white/40 dark:border-white/10 shadow-lg'>
          */}
          
          <div className="relative z-10 h-min flex flex-col xs:flex-row justify-between p-2.5 xs:1.5 sm:p-2.5 backdrop-blur-md bg-white/20 dark:bg-black/40 rounded-t-3xl rounded-b-2xl border border-white/20 dark:border-white/10 shadow-lg items-start xs:items-center min-h-[80px]">
            <p className='text-lg sm:text-xl font-bold text-white dark:text-white text-left flex-1 p-2'>
              {label}
            </p>
            <div className='xs:p-2'>
              <button className='w-full relative px-3 py-1.5 bg-gradient-to-r dark:from-black/20 dark:to-black/60 from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white text-sm md:text-base font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group'>
                ↩
                {/* Red animated notification badge */}
                <div className="absolute -right-2 -top-2 z-10">
                  <div className="flex h-5 w-5 items-center justify-center">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"
                    ></span>
                    <span
                      className="relative inline-flex h-4 w-4 rounded-full bg-primary-500"
                    ></span>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Full Description List */}
          <div className='grow overflow-y-auto py-2'>
            <div className='text-xs md:text-sm text-gray-700 dark:text-gray-100 leading-relaxed font-normal'>
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : Array.isArray(description) ? (
                <ul className='list-disc list-inside space-y-1 px-2.5'>
                  {description.map((item, idx) => (
                    <li key={idx} className='text-gray-100 dark:text-gray-300 relative z-10 h-min flex flex-col xs:flex-row justify-between p-2.5 xs:1.5 sm:p-2.5 backdrop-blur-lg bg-gradient-to-t from-white/20 to-gray-300/30 dark:from-black/20 dark:to-black/60 rounded-2xl border border-white/10 dark:border-white/10 shadow-lg items-start xs:items-center'>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{description}</p>
              )}
            </div>
          </div> 
        </div>
      </motion.div>
    </div>
  );
}

function IncluyeNoIncluye({
  title = 'Incluye y no incluye',
  subtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere commodi',
  incluye = [],
}: IncluyeNoIncluyelProps) {
  return (
    <section className='w-full min-h-dvh h-dvh relative snap-start flex flex-col'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 flex flex-col h-full'>
        {/* Header Section - Responsive sizing */}
        <div className='flex flex-col justify-center text-center items-center z-20 pt-12 lg:pt-24 pb-12 lg:pb-12'>
          <h2 className='text-center text-black dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl cursor-default select-none min-w-[280px] mb-2 md:mb-3'>
            {title}
          </h2>

          <p className='text-black dark:text-white font-copyright text-xs sm:text-sm md:text-base lg:text-lg cursor-default max-w-2xl'>
            {subtitle}
          </p>
        </div>

        {/* Swiper Section - Horizontal Carousel - Takes remaining space */}
        {incluye.length > 0 && (
          <div className='w-full flex-grow flex flex-col justify-center min-h-0'>
            <style>{swiperStyles}</style>
            <Swiper
              modules={[Navigation, A11y, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              pagination={{ clickable: true }}
              className='w-full h-full'
            >
              {incluye.map((item, index) => (
                <SwiperSlide key={`${item.label}-${index}`} className='h-auto pb-10 sm:pb-12'>
                  <div className='h-[65dvh] md:h-[60dvh] lg:h-[58dvh]'>
                    <CardItem
                      label={item.label}
                      icon={item.icon}
                      description={item.description}
                      image={item.image}
                      program={item.program}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
      <div className="h-[5dvh]" />
    </section>
  );
}

export default IncluyeNoIncluye;