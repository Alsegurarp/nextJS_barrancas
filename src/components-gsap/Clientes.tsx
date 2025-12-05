'use client';

import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { FiPlay } from 'react-icons/fi';
import { IoStarSharp, IoCalendarNumber } from "react-icons/io5";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';

import StarBorderButton from '@/components/StarBorderSustitute';
import StarBorder from '@/components/StarBorder';

gsap.registerPlugin(SplitText);

// Card component with rotating border
function CardWithBorder({ card }: { card: any }) {

  return (
    <div className="relative">

      <motion.div
        className="absolute inset-0 rounded-2xl p-px " />
      <div
        className="relative cursor-pointer m-2 rounded-2xl bg-white/25 border border-white/40 backdrop-blur-2xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.9),0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/35 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/50 before:via-transparent before:to-transparent before:opacity-100 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-70 after:pointer-events-none antialiased h-full flex flex-col">
        <div className="flex items-center justify-between w-full p-2">
          <span className="rounded-full min-w-20 px-4 py-2 text-xs text-black bg-gray/60 border border-gray/60 backdrop-blur-xl">{card.title}</span>
          <div className="mr-4 flex items-center align-center cursor-default gap-1 bg-gray/60 border border-gray/60 backdrop-blur-xl rounded-full min-w-20 px-4 py-2 text-xs">
            <IoCalendarNumber className='text-lg text-gray-600' />
            <p className='text-sm font-nohemi text-gray-600'>{card.date}</p>
          </div>
        </div>

        <div className="flex flex-row flex-1 justify-center items-center px-2 py-4 gap-4">
          {card.image ? (
            <div className='h-12 w-12 shrink-0'>
              <img src={card.image} alt={card.title} className='bg-gray-400 rounded-full w-full h-full object-cover' />
            </div>
          ) : (
            <div className='h-12 w-12 shrink-0'>
              <div className='bg-gray-400 rounded-full w-full h-full object-cover' />
            </div>
          )}
          <div className={card.image ? 'w-4/5 ml-2.5' : 'w-full'}>
            <p className="text-[15px] text-start text-black ">
              {card.review}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full text-black text-xs p-2 mt-auto">
          <div className="flex items-center">
            <IoStarSharp className='text-yellow-300 text-xl' />
            <IoStarSharp className='text-yellow-300 text-xl' />
            <IoStarSharp className='text-yellow-300 text-xl' />
            <IoStarSharp className='text-yellow-300 text-xl' />
            <IoStarSharp className='text-yellow-300 text-xl' />
          </div>
          <div className="flex items-center">
            <button className="mr-4 flex items-center justify-center align-center cursor-default gap-1 bg-gray/60 border border-gray/60 backdrop-blur-xl rounded-full min-w-20 px-4 py-2 text-xs hover:scale-110 transition-discrete" >
              <FiPlay className=' text-gray-800 font-xl bold' />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

function Clientes() {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const split = new SplitText(titleRef.current!, { type: 'chars' });

            gsap.from(split.chars, {
              duration: 0.8,
              opacity: 0,
              y: -20,
              stagger: 0.05,
              ease: 'power2.out'
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const clientCards = [
    {
      id: 1, title: 'Rafael Narváez', date: "Feb '24",
      review: `"La pasamos en familia de maravilla. Todos los hospedajes, traslados, paseos, guías y cortesías se cumplieron según lo contratado y nos parecieron de muy buena calidad."`
    },
    {
      id: 2, title: 'Jose M. Escamilla', date: "Feb '24",
      review: `"¡Wow, las Barrancas del Cobre son un destino impresionante! Mi experiencia fue increíble, gracias al servicio y la belleza natural. El Tren Chepe es mágico."`
    },
    {
      id: 3, title: 'Karim Bernal', date: "Feb '24",
      review: `"Increíble viaje en familia. Hoteles muy cómodos, guía amable, traslados excelentes y atención al cliente destacada. Servicio Premium garantizado."`
    },
    {
      id: 4, title: 'Héctor Naranjo', date: "Feb '24",
      review: `"Todo fue de excelente calidad y atención. Muy buena experiencia de viaje. Profesionalismo, respuesta y valor en cada detalle."`
    },
    {
      id: 5, title: 'Viridiana López', date: "Feb '24",
      review: `"Logística impecable, aventura y lujo combinados. Con Barrancas Premium todo fluyó con naturalidad. Una travesía memorable."`
    },
    {
      id: 6, title: 'Antonio Rosas', date: "Feb '24",
      review: `"Una de las mejores experiencias. Tren de lujo, guías expertos, hoteles de primera. Viajar Premium hace toda la diferencia."`
    }
  ]

  const clientCards2 = [
    {
      id: 7, title: 'Aletia Morales', date: "Feb '24",
      review: `"Excelentes vistas y energía en el mirador. Panoramas sin fin que invitan a respirar profundo. Recomiendo conocer este destino."`
    },
    {
      id: 8, title: 'Teresa Rodríguez', date: "Feb '24",
      review: `"Especialista en Barrancas Premium. Me capacito y visito constantemente para asegurar a mis clientes un servicio excepcional."`
    },
    {
      id: 9, title: 'Victor Martínez', date: "Feb '24",
      review: `"Viaje inolvidable con amigos. David Reyes como asesor fue increíble. El servicio y atención fueron de excelencia."`
    },
    {
      id: 10, title: 'Fernanda B.', date: "Feb '24",
      review: `"Me encantó el viaje a Barrancas. Sin duda, la mejor experiencia del año. Todo perfecto de principio a fin."`
    },
    {
      id: 11, title: 'Kari Roma', date: "Feb '24",
      review: `"Una experiencia hermosa. Guías muy buenos y asesoramiento excelente. Cada momento fue especial."`
    },
    {
      id: 12, title: 'Ariana Tulteca', date: "Feb '24",
      review: `"Viajar con Premium fue extraordinario. Asesoría continua, guías expertos, seguridad y atención. Una experiencia que repetiría sin duda."`
    }
  ]

  const extendedCards = [...clientCards, ...clientCards, ...clientCards];

  const extendedCards2 = [...clientCards2, ...clientCards2, ...clientCards2]

  const handleCardClick = () => {
    window.open('https://www.youtube.com', '_blank')
  }

  return (
    <>
      <section className='panel h-screen relative snap-start w-full rounded-lg top-0 lg:overflow-visible flex flex-col'>
        <div className='h-32 sm:h-40 md:h-48 flex flex-col justify-center sticky top-0 left-0 items-center z-20 bg-white pt-28 sm:pt-32 md:pt-40 text-center min-w-[299px]'>
          <h4 ref={titleRef} className='text-black font-semibold max-[320px]:text-2xl text-3xl  min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none'>Nuestros Clientes</h4>
          <span className="opacity-50 font-copyright text-sm sm:text-lg md:text-xl cursor-default">
            Gracias a quienes confiaron en nosotros.
          </span>
        </div>
        <div className='flex-1 flex flex-col items-center justify-center w-full md:pl-12 lg:pl-18 2xl:pl-24  md:pr-12 lg:pr-18 2xl:pr-24 z-20 bg-white backdrop-blur-2xl'>
          <div className='shape absolute w-4xl h-2/3 left-20 bottom-0 rotate-0'></div>
          <div className="sm:hidden h-full w-full overflow-visible cursor-pointer backdrop-blur-sm relative flex flex-col justify-start space-y-6">
            <Swiper
              modules={[Navigation, A11y, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-mobile',
                nextEl: '.swiper-button-next-mobile'
              }}

              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              onSwiper={(s) => { setSwiper(s); setActiveSlide((s.realIndex % clientCards.length) + 1); }}
              pagination={{
                clickable: true,
                el: '.mobile-swiper-pagination',
              }}
              onSlideChange={(swiper) => {
                setActiveSlide((swiper.realIndex % clientCards.length) + 1)
              }}
              className='w-full px-4 pt-6'
            >
              {clientCards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div
                    onClick={handleCardClick}
                    className="max-w-[350px] mx-auto flex flex-col justify-start h-auto"
                  >
                    <CardWithBorder card={card} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mobile-swiper-pagination space-x-1 flex justify-center px-6 !relative" />
            <div className="flex flex-row w-full sm:w-auto gap-3 sm:gap-4 sm:flex-row justify-center items-center">
              <StarBorderButton textSize='text-xs' width='w-26 xs:w-30' height='h-10 xs:h-12'>
                Diseñar mi viaje
              </StarBorderButton>
              <StarBorder textSize='text-xs' width='w-24 xs:w-30' height='h-10 xs:h-12' />
            </div>
          </div>

          {/* cards carousel - visible on tablet and larger (goes left) */}
          <div className="hidden sm:block w-full overflow-visible cursor-pointer  py-8 sm:py-2.5">
            <motion.div
              className="flex space-x-16"
              style={{
                width: 'fit-content',
                display: 'flex',
                gap: '3rem',
              }}
              initial={{ opacity: 1, x: '0%' }}
              animate={{ opacity: 1, x: '-50%' }}
              transition={{
                opacity: { duration: 0.5 },
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.5
                }
              }}>
              {extendedCards.map((card, index) => (
                <div
                  key={index}
                  onClick={handleCardClick}
                  className="max-w-[350px] min-w-[350px] mb-4"
                >
                  <CardWithBorder card={card} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* cards carousel - visible on tablet and larger (moving right) */}
          <div className="hidden sm:block w-full overflow-visible cursor-pointer py-8 sm:py-2.5 md:py-4">
            <motion.div
              className="flex space-x-16"
              style={{
                width: 'fit-content',
                display: 'flex',
                gap: '3rem',
              }}
              initial={{ opacity: 1, x: '-50%' }}
              animate={{ opacity: 1, x: '0%' }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear'
                }
              }}>
              {extendedCards2.map((card, index) => (
                <div
                  key={index}
                  onClick={handleCardClick}
                  className="max-w-[350px] min-w-[350px] mb-4"
                >
                  <CardWithBorder card={card} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Clientes

