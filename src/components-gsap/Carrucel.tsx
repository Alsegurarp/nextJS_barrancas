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
        <section className="panel relative snap-start min-h-screen container-full flex flex-col">
            <div className="h-40 sm:h-40 md:h-48 flex flex-col justify-center text-center sticky top-0 left-0 items-center z-20 pt-36 sm:pt-32 md:pt-40">
                <h4 ref={titleRef} className='text-black font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-[280px]'>Experiencias <strong className='font-extrabold'>Premium</strong></h4>
                <span className="opacity-50 font-copyright text-base sm:text-lg md:text-xl cursor-default min-w-[280px]">
                    Descubre los tours Barrancas del Cobre. Despierta tus sentidos y tu espíritu viajero.
                </span>
            </div>
            <div className="flex-1 container-content sm:py-8 z-20 flex flex-col relative">
                <div className='absolute inset-0 z-10 backdrop-blur-sm bg-white/20 ' />
                <div className='flex-1 flex flex-col justify-start relative z-20'>
                    <div className="h-10" />
                    <div className="flex flex-row items-center justify-center gap-4">
                        <button className="swiper-button-prev-carousel text-primary-800 sm:text-2xl lg:text-3xl xl:text-4xl hover:scale-110 transition-transform">
                            <RiArrowDropLeftLine />
                        </button>
                        <span className='cursor-default flex flex-row text-primary-800 lg:text-xl xl:text-2xl'>{activeSlide}/{imgs.length}</span>
                        <button className="swiper-button-next-carousel text-primary-800 sm:text-2xl lg:text-3xl xl:text-4xl hover:scale-110 transition-transform">
                            <RiArrowDropRightLine />
                        </button>
                    </div>
                    <div className='relative flex justify-center'>
                        {/* Only render Swiper on client to avoid SSR/CSR mismatch */}
                        {isMounted && (
                            <Swiper className='w-full min-h-[240px] max-w-[700px] xl:max-w-[950px] h-auto max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] px-4 relative'
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
                    <div className="h-10" />
                    <div className='flex flex-row w-full sm:w-auto gap-3 sm:gap-4 sm:flex-row justify-center items-center z-20'>
                        <StarBorderButton height='h-10 xs:h-14' width='w-30 xs:w-34' textSize='text-sm'>
                            Conoce más
                        </StarBorderButton>
                        <StarBorder height='h-10 xs:h-14' width='w-30 xs:w-34' />
                    </div>
                </div>
            </div>
            <div className='shape-variant absolute w-full min-h-[200px] max-h-[220px] md:hidden right-40 bottom-0 rotate-0 z-0 ' />
            <div className='shape-variant absolute w-full min-h-[120px] max-h-[130px] top-1/2 left-40 rotate-270 z-0 sm:hidden' />
        </section>
    )
}

export default Carrucel

