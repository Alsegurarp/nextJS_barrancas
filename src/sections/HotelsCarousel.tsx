'use client';

import React, { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import StarBorderButton from '@/components/StarBorderSustitute';

interface HotelCard {
  id: string;
  title: string;
  description: string;
  image?: StaticImageData;
}

interface HotelsCarouselProps {
  cards?: HotelCard[];
  title?: string;
  subtitle?: string;
}

// Swiper styles - hide navigation, pagination, and disable scrolling

/*

const swiperStyles = `
  .swiper-slide {
    pointer-events: auto;
  }
`;
    .hotels-carousel {
    touch-action: none !important;
  }

  .hotels-carousel .swiper-button-next,
  .hotels-carousel .swiper-button-prev {
    display: none !important;
  }

  .hotels-carousel .swiper-pagination {
    display: none !important;
  }}
*/
const swiperStyles = '';

function HotelsCarousel({
  cards = [],
  title = 'Descubre nuestros hoteles',
  subtitle = 'Elegidos a la medida para vivir tu aventura a lo premium',
}: HotelsCarouselProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  return (
    <section className="panel relative snap-start w-full h-dvh">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 h-full flex flex-col justify-between">
        <style>{swiperStyles}</style>

        <div className='flex flex-col justify-center text-center items-center'>
          <div className='flex flex-col justify-center text-center items-center z-20 pt-12 lg:pt-24 pb-12 lg:pb-12'>
            <h2 className='text-center text-black dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl cursor-default select-none min-w-[280px] mb-2 md:mb-3'>
              {title}
            </h2>

            <p className='text-black dark:text-white font-copyright text-xs sm:text-sm md:text-base lg:text-lg cursor-default max-w-2xl'>
              {subtitle}
            </p>
          </div>
          <div className='align-center justify-center mx-auto'>
            <StarBorderButton height='h-10 xs:h-14' width='w-30 xs:w-34' textSize='text-sm'>
                Conoce más
            </StarBorderButton>
          </div>
        </div>

        {/* Carousel */}
        {cards.length > 0 && (
          <>
          <div className="flex flex-col flex-1 mb-2.5">
            {/* Navigation Buttons */}
            <div className="flex gap-4 items-start justify-start pb-2">
              <button
                ref={prevRef}
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-black/5 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/40 text-primary-800 dark:text-white p-2 items-center rounded-full font-semibold transition-all duration-300 text-sm md:text-base backdrop-blur-sm border border-white/20 md:p-3 cursor-pointer shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                ref={nextRef}
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-black/5 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/40 text-primary-800 dark:text-white p-2 items-center rounded-full font-semibold transition-all duration-300 text-sm md:text-base backdrop-blur-sm border border-white/20 md:p-3 cursor-pointer shadow-lg hover:scale-95"
                aria-label="Siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="w-full grow flex items-start min-h-[40dvh] relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  340: { slidesPerView: 1.2, spaceBetween: 15 },
                  480: { slidesPerView: 1.4, spaceBetween: 15 },
                  640: { slidesPerView: 1.8, spaceBetween: 15 },
                  768: { slidesPerView: 2.2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                  1200: { slidesPerView: 3.4, spaceBetween: 20 },
                  1440: { slidesPerView: 3.6, spaceBetween: 20 },
                  1640: { slidesPerView: 4.5, spaceBetween: 20 },
                  1880: { slidesPerView: 5, spaceBetween: 20 },
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: true,
                  waitForTransition: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={handleSwiperInit}
                loop={true}
                centeredSlides={true}
                allowTouchMove={true}
                simulateTouch={false}
                grabCursor={false}
                className="w-full hotels-carousel"
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id} className="h-auto">
                    <div className="relative h-[40dvh] max-w-[300px] bg-primary-800 rounded-2xl flex flex-col justify-end shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default overflow-hidden">
                      {/* Background Image */}
                      {card.image ? (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover absolute inset-0"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-primary-800" />
                      )}

                      {/* Content Overlay */}
                      <div className="relative z-10 flex flex-col justify-between py-4 px-4 h-1/2 w-full bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-bold text-white">
                            {card.title}
                          </h3>
                          <p className="text-xs text-gray-200 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                        {/* View Details Button */}
                        <button className="w-full bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/40 text-white py-2 px-4 rounded-full font-semibold transition-all duration-300 text-sm md:text-base backdrop-blur-sm border border-white/20">
                          Conoce más
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
          </div>
          </>
        )}
      </div>
    </section>
  );
}

export default HotelsCarousel;