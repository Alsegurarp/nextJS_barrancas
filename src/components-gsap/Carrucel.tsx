'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import imagen1 from '../assets/Itinerarios/CanonUrique/Dia_1_Chihuahua_Barrancas_Premium_Museo_Revolucion_Casa_Antigua_Pancho_Villa.webp';
import imagen2 from '../assets/Itinerarios/CanonUrique/Dia_2_Chihuahua_Barrancas_Premium_Pueblo_MAgico_Creel_Cueva_Tarahumara_Habitada_Viajes_Turismo.webp';
import imagen3 from '../assets/Itinerarios/CanonUrique/Dia_3_Barrancas_Del_Cobre_Barrancas_Premium_Parque_Aventura_Teleferico_Descenso_Barranca_Urique_Majestuosidad.webp';
import imagen4 from '../assets/Itinerarios/CanonUrique/Dia_5_Mochis_Barrancas_Premium_Tren_Chepe_Express.webp';

// icons
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import StarBorder from '@/components/StarBorder';
import StarBorderButton from '@/components/StarBorderSustitute';



const Carrucel = () => {
    const [swiper, setSwiper] = useState<null | any>(null);
    // Initialize activeSlide to 1 only after mount to avoid SSR/CSR mismatch
    const [activeSlide, setActiveSlide] = useState<number>(1);
    const [isMounted, setIsMounted] = useState(false);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // This setState is intentional to trigger client-only rendering after mount
        setIsMounted(true);
        if (!titleRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Only run SplitText/GSAP on client
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

    // Ensure activeSlide is set only after mount to avoid SSR/CSR mismatch
    useEffect(() => {
        setActiveSlide(1);
    }, []);

    const imgs = [
        {
            id: 1,
            image: imagen1,
            key: 1,
        },
        {
            id: 2,
            image: imagen2,
            key: 2,
        },
        {
            id: 3,
            image: imagen3,
            key: 3
        },
        {
            id: 4,
            image: imagen4,
            key: 4
        },
        {
            id: 5,
            image: imagen1,
            key: 5
        },
        {
            id: 6,
            image: imagen2,
            key: 6
        },
        {
            id: 7,
            image: imagen3,
            key: 7
        },
        {
            id: 8,
            image: imagen4,
            key: 8
        },
    ];

    return (
        <section className="panel relative snap-start min-h-dvh container-full flex flex-col">
            <div className="h-40 sm:h-40 md:h-48 lg:h-[280px] flex flex-col justify-center text-center sticky top-0 left-0 items-center z-20 pt-36 sm:pt-32 md:pt-40">
                <h4 ref={titleRef} className='text-center text-black dark:text-white font-semibold text-2xl min-[350px]:text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-[280px]'>Experiencias Premium</h4>
                <span className="text-black dark:text-white font-copyright text-base sm:text-lg md:text-xl cursor-default min-w-[280px]">
                    Descubre los tours Barrancas del Cobre. Despierta tus sentidos y tu espíritu viajero.
                </span>
            </div>

            <div className="flex-1 container-content sm:py-8 md:py-0 z-20 flex flex-col relative mt-4 md:mt-0 md:w-full">
                <div className='absolute inset-0 z-10 backdrop-blur-sm bg-white/20 dark:bg-black/0' />
                <div className='flex-1 flex flex-col justify-start relative z-20 md:pt-2'>
                    <div className="flex flex-row items-center justify-center lg:justify-end gap-4 mb-4 lg:pr-20 lg:gap-2">
                        <button className="swiper-button-prev-carousel text-primary-800 dark:text-white sm:text-2xl lg:text-3xl xl:text-4xl hover:scale-110 transition-transform">
                            <RiArrowDropLeftLine />
                        </button>
                        <span className='cursor-default flex flex-row text-primary-800 dark:text-white lg:text-xl xl:text-2xl'>{activeSlide}/{imgs.length}</span>
                        <button className="swiper-button-next-carousel text-primary-800 dark:text-white sm:text-2xl lg:text-3xl xl:text-4xl hover:scale-110 transition-transform">
                            <RiArrowDropRightLine />
                        </button>
                    </div>
                    <div className='relative flex justify-center'>
                        {/* Only render Swiper on client to avoid SSR/CSR mismatch */}
                        {isMounted && (
                            <Swiper className='w-full xs:max-w-[700px] xl:max-w-[850px] h-auto min-h-[200px] [min-width:340px]:min-h-60 xs:min-h-[280px] max-h-[35vh] [min-width:340px]:max-h-[40vh] xs:max-h-[45vh] sm:max-h-[50vh] md:max-h-[45vh] px-4 relative'
                                modules={[Navigation, A11y, Pagination, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '.swiper-button-prev-carousel',
                                    nextEl: '.swiper-button-next-carousel'
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={true}
                                onSwiper={(s) => { setSwiper(s); setActiveSlide((s.realIndex % imgs.length) + 1); }}
                                onSlideChange={(swiper) => {
                                    setActiveSlide((swiper.realIndex % imgs.length) + 1)
                                }}
                            >
                                {imgs.map((image) => {
                                    return (
                                        <SwiperSlide key={image.key}>
                                            {/* Use Next.js Image for optimization */}
                                            <Image className='h-full w-full rounded-xl object-cover' src={image.image} alt={`conoce lo mejor de mexico`} />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        )}
                    </div>
                    <div className="h-10 md:h-2" />
                    <div className='flex flex-row w-full sm:w-auto gap-3 sm:gap-4 sm:flex-row justify-center items-center z-30'>
                        <StarBorderButton height='h-10 xs:h-14' width='w-30 xs:w-34' textSize='text-sm'>
                            Conoce más
                        </StarBorderButton>
                        <StarBorder height='h-10 xs:h-14' width='w-30 xs:w-34' textSize='text-sm' />
                    </div>
                </div>
            </div>
            <div className='shape-variant absolute w-full md:w-1/2 min-h-[200px] max-h-[220px] right-40 md:left-0 bottom-0 rotate-0 z-0 ' />
            <div className='shape-variant-circle absolute min-w-[220px] min-h-[220px] max-h-[220px] top-1/2 -right-20 z-0 ' />
        </section>
    )
}

export default Carrucel

