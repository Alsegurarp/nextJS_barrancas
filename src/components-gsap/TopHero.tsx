'use client';

import React from 'react';
import image1 from '@/assets/Portadas/HeroImage.webp';
import imageResponsive from '@/assets/Portadas/HeroImageCel.webp';
import imageResponsiveTablet from '@/assets/Portadas/HeroImageTablet.webp';

import StarBorder from '@/components/StarBorder';
import StarBorderButton from '@/components/StarBorderSustitute';

function TopHero() {
  return (
    <>
      <div className="panel">
        <section>
          <div className="lg:h-screen relative snap-start container-full hidden xl:grid grid-cols-8 grid-rows-7 gap-2 overflow-hidden">
            <div className="col-span-8 row-span-4 z-0">
              <img
                src={image1.src}
                srcSet={`${image1.src} 800w, ${image1.src} 1280w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
                alt="Barrancas Premium - Vista panorámica del cañón"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="col-span-5 row-span-2 row-start-5 col-start-2 px-4 z-10 overflow-visible">
              <h1 className="text-[108px] 2xl:text-[140px] 3xl:text-[160px] font-bold text-white leading-none">
                Viajes a las<br />Barrancas
              </h1>
            </div>
            <div className="col-span-3 row-span-2 col-start-6 row-start-5 z-10 overflow-visible">
              <div className="flex flex-col gap-8 end justify-end h-full ">
                <h2 className='text-white text-xl uppercase font-nohemi'>
                  Vive <strong>Barrancas del Cobre</strong><br /> en Clase <strong>PREMIUM</strong>
                </h2>

                <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row">
                  <StarBorderButton>
                    Diseña tu viaje
                  </StarBorderButton>

                  <StarBorder>
                    Descubre más
                  </StarBorder>
                </div>
              </div>
            </div>
            <div className="col-span-6 col-start-2 row-start-7 border-t-2 border-white h-1 z-10 mt-5"></div>
          </div>
        </section>
        {/* mobiles */}
        <section className="h-[100dvh] relative snap-start xl:hidden">
          <div className="relative w-full h-full overflow-hidden">
            {/* Background image - responsive with srcset */}
            <img
              src={imageResponsive.src}
              srcSet={`${imageResponsive.src} 800w, ${imageResponsiveTablet.src} 1280w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              alt="Barrancas Premium - Vista panorámica del cañón"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40 md:bg-black/20 lg:bg-black/10" />

            <div className="relative z-10 flex flex-col items-center justify-around h-full gap-4 sm:grid sm:grid-flow-row sm:row-span-1 sm:col-span-3 sm:grid-rows-8 sm:grid-cols-8 lg:grid-rows-9 lg:grid-cols-10 sm:gap-2.5 pb-10 pt-16 lg:pt-6">
              {/* Title block*/}
              <div className="w-full flex items-center justify-center sm:row-start-2 sm:col-start-2 lg:row-start-3 lg:col-start-2 sm:justify-start lg:col-span-5 lg:row-span-2 lg:items-end lg:justify-start">
                <h1 className="text-white font-bold leading-none text-4xl sm:text-6xl sm:text-left md:text-6xl lg:text-8xl text-center ">
                  Viaja a las
                  <br />
                  Barrancas
                </h1>
              </div>

              <div className="w-full px-4 flex items-center justify-center sm:px-0 sm:row-start-7 sm:col-start-6 sm:justify-end md:row-start-7 md:col-start-7 lg:col-start-9 lg:row-start-8 lg:items-end lg:justify-end lg:p-0">
                <div className="flex flex-col text-center gap-4 sm:gap-6 sm:mt-0 md:gap-8 items-center sm:items-end sm:text-right lg:items-end ">
                  <h2 className="text-white text-md sm:text-lg md:text-xl font-nohemi max-w-md">
                    Viaja por <strong>Barrancas del Cobre</strong>
                    <br /> en Clase <strong>PREMIUM</strong>
                  </h2>

                  <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row">
                    <StarBorderButton >
                      Diseña tu viaje
                    </StarBorderButton>

                    <StarBorder >
                      Descubre más
                    </StarBorder>
                  </div>
                </div>
              </div>

              {/* Bottom border: positioned at the bottom of the hero on all sizes */}
              <div className="absolute left-0 right-0 bottom-0 z-10">
                <div className="border-t-2 border-white dark:border-none opacity-80" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TopHero;

