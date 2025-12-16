'use client';

import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from 'next/image';
import 'swiper/css';

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
const swiperStyles = `
  .hotels-carousel {
    touch-action: none !important;
  }

  .hotels-carousel .swiper-button-next,
  .hotels-carousel .swiper-button-prev {
    display: none !important;
  }

  .hotels-carousel .swiper-pagination {
    display: none !important;
  }

  .swiper-slide {
    pointer-events: auto;
  }
`;

function HotelsCarousel({
  cards = [],
  title = 'Descubre nuestros hoteles',
  subtitle = 'Elegidos a la medida para vivir tu aventura a lo premium',
}: HotelsCarouselProps) {
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
          <div className='max-w-3/4'>
            <p className=''>lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt.</p>
          </div>
        </div>

        {/* Carousel */}
        {cards.length > 0 && (
          <div className="w-full grow flex items-center min-h-0 max-h-[45dvh]">
            <Swiper
              modules={[Autoplay]}
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
                1760: { slidesPerView: 5, spaceBetween: 20 },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                waitForTransition: false,
                pauseOnMouseEnter: false,
              }}
              loop={true}
              centeredSlides={true}
              allowTouchMove={false}
              simulateTouch={false}
              grabCursor={false}
              className="w-full hotels-carousel"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id} className="h-auto">
                  <div className="relative h-[350px] max-h-[380px] max-w-[300px] bg-primary-800 rounded-2xl flex flex-col justify-end shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default overflow-hidden">
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
                    <div className="relative z-10 flex flex-col gap-2 py-4 px-4 h-2/5 w-full bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-2xl">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-100 leading-relaxed">
                        {card.description}
                      </p>
                      {/* View Details Button */}
                      <button className="w-full bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/40 text-white py-2 px-4 rounded-full font-semibold transition-all duration-300 text-sm md:text-base backdrop-blur-sm border border-white/20">
                        View Details
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}

export default HotelsCarousel;