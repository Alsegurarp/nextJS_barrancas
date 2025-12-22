'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

// imagenes de prueba
import barrancasCamping from '@/assets/adicional/barrancasCamping.jpg'
import barrancasGroup from '@/assets/adicional/barrancasGroup.jpg'
import barrancasHike from '@/assets/adicional/barrancasHike.jpg'
import barrancasRapidos from '@/assets/adicional/barrancasRapidos.jpg'


interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  image: StaticImageData;
  highlight?: boolean;
}

// declaracion de las cards mas importantes
const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Aventura',
    title: 'Cañón de Namúrachi y Misiones',
    description:
      'Dos misiones coloniales y el cañón con cuevas y altar cristero. Incluye traslados, guía SECTUR y seguro carretero. 7 - 8 h (ideal antes 11:00).   Recomendación: calzado cómodo, gorra, bloqueador, cámara.',
    image: barrancasCamping,
    highlight: true,
  },
  {
    id: 2,
    category: 'Familia',
    title: 'Ruta Cañón del Maíz',
    description:
      'Paisaje volcánico, pinturas rupestres y mirador menonita con vistas de Cuauhtémoc; visita San Andrés Riva Palacio. Incluye entradas, traslados, guía y seguro.',
    image: barrancasGroup,
  },
  {
    id: 3,
    category: 'Aventura',
    title: 'Cañón del Pegüis',
    description:
      'Canoa entre paredes de 300 m en el desierto. Incluye traslados, entrada, guía y equipo. Abril - Junio (09:00 h).',
    image: barrancasHike,
  },
  {
    id: 4,
    category: 'Familia',
    title: 'Ruta de las Haciendas',
    description:
      'Ex Hacienda El Torreón, Museo El Sauz, Cueva de las Monas y Obelisco de la Batalla de Sacramento. Incluye traslados y guía.',
    image: barrancasRapidos,
  },
];


export default function TopAdicionales() {
  const featuredPost = blogPosts.find((post) => post.highlight);
  const regularPosts = blogPosts.filter((post) => !post.highlight);
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="h-dvh relative snap-start snap-stop-always panel w-full px-4 md:px-8 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="pt-18 lg:pt-24 pb-4 lg:pb-6 shrink-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Haz de tu experiencia algo{' '}
          <span className="italic font-medium">único.</span>
        </h1>
      </div>

      {/* Content Grid */}
      <div className="flex-1 overflow-hidden">
        {/* Desktop Layout: Featured on left, 3 cards on right */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 h-full max-w-7xl mx-auto lg:pb-12">
          {/* Featured Post - Takes 2 columns on desktop */}
          {featuredPost && (
            <div className="lg:col-span-2 lg:row-span-2 h-full">
              <div className="relative h-full rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-block bg-white/30 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-white text-xl lg:text-2xl font-bold mb-2 leading-tight line-clamp-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-200 text-xs mb-4 line-clamp-2">
                    {featuredPost.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid - 1 column */}
          <div className="flex flex-col items-center gap-6 overflow-y-auto">
            {regularPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer shrink-0">
                <div className="relative h-32 rounded-2xl overflow-hidden mb-2 shadow-md">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-2 right-2 z-10">
                    <span className="inline-block bg-white/30 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-gray-900 dark:text-gray-100 text-xs font-bold mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-white text-xs line-clamp-1">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout: Carousel */}
        <div className="lg:hidden w-full h-[90%] flex flex-col">
          {/* Navigation Controls */}
          <div className='flex justify-center items-center gap-3 '>
            <button className='swiper-carousel-prev text-gray-900 dark:text-white text-xl md:text-2xl hover:scale-110 transition-transform'>
              <RiArrowDropLeftLine />
            </button>
            <span className='text-gray-900 dark:text-white text-sm md:text-base font-semibold'>{activeSlide}/{blogPosts.length}</span>
            <button className='swiper-carousel-next text-gray-900 dark:text-white text-xl md:text-2xl hover:scale-110 transition-transform'>
              <RiArrowDropRightLine />
            </button>
          </div>

          {/* Carousel */}
          <div className='flex-1 flex justify-center w-full min-h-0 mb-6'>
            {isMounted && (
              <Swiper
                className='w-full max-w-[600px] h-full px-4'
                modules={[Navigation, A11y, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: '.swiper-carousel-prev',
                  nextEl: '.swiper-carousel-next'
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                onSlideChange={(swiper) => {
                  setActiveSlide((swiper.realIndex % blogPosts.length) + 1);
                }}
              >
                {blogPosts.map((post, index) => (
                  <SwiperSlide key={index} className='relative w-full h-full rounded-3xl flex flex-col overflow-hidden'>
                    {/* Full image background */}
                    <div className='absolute inset-0'>
                      <Image
                        className='h-full w-full object-cover'
                        src={post.image}
                        alt={post.title}
                        fill
                      />
                    </div>

                    {/* Gradient Overlay - dark at bottom */}
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent from-20% via-black/20 to-black/70' />

                    {/* Content positioned at bottom */}
                    <div className='absolute bottom-0 left-0 right-0 w-full p-5 sm:p-6 md:p-8 flex flex-col justify-end gap-4'>
                      <div>
                        <h4 className='text-xl sm:text-2xl md:text-3xl font-bold text-white line-clamp-2 mb-1'>
                          {post.title}
                        </h4>
                        <p className='text-xs sm:text-sm text-gray-200 line-clamp-2'>
                          {post.description}
                        </p>
                      </div>
                      <button className='w-full bg-white/30 hover:bg-white/40 backdrop-blur-md text-white font-semibold py-2.5 sm:py-3 px-4 rounded-full text-sm sm:text-base transition-all duration-300'>
                        Conoce más
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
