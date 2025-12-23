import React from 'react';
import Image, { StaticImageData } from 'next/image';
import image1 from '@/assets/Portadas/HeroImage.webp';
import StarBorderButton from '@/components/StarBorderSustitute';


interface HeroItinerarioProps {
  title: string;
  subtitle: string;
  backgroundImage: StaticImageData;
  duration?: string;
}

function HeroItinerario({ title, subtitle, backgroundImage, duration }: HeroItinerarioProps) {
  return (
    <section className='panel relative snap-start w-full h-dvh'>
      {/* Mobile/Tablet Version (< lg) */}
      <div className="lg:hidden h-dvh w-full items-center justify-center">
        <div className="flex h-[98dvh] w-[98dvw] relative mx-auto items-center justify-between rounded-3xl overflow-hidden">
        {/* Image Container */}
            <div className="relative w-full h-full rounded-b-3xl overflow-hidden">
                <Image
                    src={backgroundImage}
                    alt="Itinerario Hero"
                    fill
                    priority
                    className="object-cover"
                />
                    
                {/* Glass Overlay for mobile */} 
                <div className="absolute top-2/3 inset-x-0 bottom-0 opacity-90 backdrop-blur-xs">
                {/* Content Container */}
                    <div className="flex flex-col items-center px-4 sm:px-6 py-8 gap-6 z-10">
                        {/* Text Content */}
                        <div className="flex flex-col items-center text-start max-w-md sm:max-w-4/5">
                            <div className="flex flex-col items-start text-start opacity-100">
                                <span className="text-white opacity-100 font-semibold">Viajes Premium</span>
                                <h2 className="text-white dark:text-white font-nohemi font-bold text-2xl xs:text-3xl md:text-4xl leading-tight opacity-100">
                                {title}
                                </h2>
                                <p className="text-white dark:text-gray-300 text-sm xs:text-sm mt-2">
                                {subtitle}
                                </p>
                            </div>
                            <div className='flex justify-center items-center pt-2.5'>
                                <StarBorderButton textSize='text-xs xs:text-xs sm:text-xs' width='w-28 xs:w-28 sm:w-32 md:w-36 lg:w-40' height='h-9 xs:h-10 sm:h-11' >
                                    Diseñar mi viaje
                                </StarBorderButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Desktop Version (lg:) */}
      <div className="hidden lg:flex h-dvh w-full  items-center justify-center">
        <div className="flex h-[98dvh] w-[98dvw] relative mx-auto items-center justify-between px-12 xl:px-20 rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Itinerario Hero"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Glass Effect Overlay - Right Half */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-l from-orange-400/20 via-orange-300/20 to-transparent backdrop-blur-2xl z-5" />

          {/* Left Content */}
          <div className="flex flex-col justify-between h-full py-20 relative z-10">
            <h2 className="text-white font-bold text-7xl xl:text-[88px] max-w-md leading-tight">
              {title}
            </h2>
            <p className="text-white/80 text-base xl:text-lg mt-4 max-w-md">
              {subtitle}
            </p>
          </div>

          {/* Right Content - White Frame */}
          {duration ?? 
          <div className="flex flex-col items-end justify-end h-full py-20 relative z-20">
            <div className="bg-white/95 backdrop-blur-md rounded-lg p-8 max-w-sm">
              <div className="space-y-6">
                {/* Date Section */}
                <div>
                  <span className="text-primary-800 font-semibold text-sm">Conoce barrancas</span>
                </div>

                {/* Details Section */}
                <div className="space-y-3">
                  {/*<div>
                    <p className="text-gray-600 text-xs font-semibold">Viajes a partir de:</p>
                    <p className="text-gray-900 font-bold text-lg">{price}</p>
                  </div>*/}
                  <div>
                    <p className="text-gray-600 text-xs font-semibold">Días del circuito:</p>
                    <p className="text-gray-900 font-semibold">{duration}</p>
                  </div>
                </div> 

                <StarBorderButton textSize='text-xs xs:text-xs sm:text-xs' width='w-24 xs:w-28 sm:w-32 md:w-36 lg:w-40' height='h-9 xs:h-10 sm:h-11'>
                  Diseñar mi viaje
                </StarBorderButton>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </section>
  )
}

export default HeroItinerario