'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { StaticImageData } from 'next/image';

gsap.registerPlugin(SplitText);
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// icons
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import StarBorderButton from './StarBorderSustitute';

interface CarouselSlide {
  image: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: () => void;
}

interface ExperienciasCarouselProps {
  slides: CarouselSlide[];
  carouselTitle?: string;
  autoplayDelay?: number;
  navigationClass?: string;
}

const ExperienciasCarousel = ({ 
  slides, 
  carouselTitle = "Experiencias",
  autoplayDelay = 3000,
  navigationClass = "swiper-button-carousel"
}: ExperienciasCarouselProps) => {
    const [activeSlide, setActiveSlide] = useState<number>(1);
    const [isMounted, setIsMounted] = useState(false);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const isMountedRef = useRef(false);

    useEffect(() => {
        isMountedRef.current = true;
        setIsMounted(true);
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

    useEffect(() => {
        if (isMountedRef.current) {
            setActiveSlide(1);
        }
    }, [slides]);

    return (
            <div className="flex-1 container-content sm:py-8 md:py-0 z-20 flex flex-col relative mt-4 md:mt-0 md:w-full">
                <div className='absolute inset-0 z-10 backdrop-blur-sm bg-white/20 dark:bg-black/0' />
                <div className='flex-1 flex flex-col justify-start relative z-20 md:pt-2'>
                    <div className="flex flex-row items-center justify-center lg:justify-end gap-4 mb-4 lg:pr-20 lg:gap-2">
                        <button className={`${navigationClass}-prev text-primary-800 dark:text-white sm:text-2xl lg:text-3xl xl:text-4xl hover:scale-110 transition-transform`}>
                            <RiArrowDropLeftLine />
                        </button>
                        <span className='cursor-default flex flex-row text-primary-800 dark:text-white lg:text-xl xl:text-2xl'>{activeSlide}/{slides.length}</span>
                        <button className={`${navigationClass}-next text-primary-800 dark:text-white sm:text-2xl lg:text-3xl xl:text-4xl hover:scale-110 transition-transform`}>
                            <RiArrowDropRightLine />
                        </button>
                    </div>

                    <div className='relative flex justify-center'>
                        
                        {isMounted && (
                            <Swiper className='w-full xs:max-w-[700px] md:max-w-[800px] md:min-h-[50dvh] xl:max-w-[850px] h-auto min-h-[40dvh] [min-width:340px]:min-h-[50dvh] xs:min-h-[50dvh] max-h-[35vh] px-4 relative'
                                modules={[Navigation, A11y, Pagination, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: `.${navigationClass}-prev`,
                                    nextEl: `.${navigationClass}-next`
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                autoplay={{
                                    delay: autoplayDelay,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={true}
                                onSwiper={() => { setActiveSlide((1 % slides.length) + 1); }}
                                onSlideChange={(swiper) => {
                                    setActiveSlide((swiper.realIndex % slides.length) + 1)
                                }}
                            >
                                {slides.map((slide, index) => {
                                    return (
                                        <SwiperSlide key={index} className='relative w-full h-full rounded-2xl'>
                                            {/* Full image background */}
                                            <div className='absolute inset-0 rounded-2xl overflow-hidden'>
                                                <Image className='h-full w-full object-cover' src={slide.image} alt={slide.title} />
                                            </div>
                                            {/* Content positioned at bottom right with glass effect */}
                                            <div className='absolute bottom-0 right-0 w-1/2 h-full bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-tl-2xl p-4 sm:p-6 flex flex-col justify-around rounded-2xl'>
                                                <h4 className='text-base sm:text-lg md:text-xl font-semibold text-primary-800 dark:text-white line-clamp-2'>
                                                    {slide.title}
                                                </h4>
                                                <p className='text-xs sm:text-sm text-primary-700 dark:text-white/80 line-clamp-3'>
                                                    {slide.description}
                                                </p>
                                                <StarBorderButton onClick={slide.buttonAction} height='h-10 xs:h-14' width='w-30 xs:w-34' textSize='text-sm'>
                                                    {slide.buttonText}
                                                </StarBorderButton>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>
    )
}

export default ExperienciasCarousel