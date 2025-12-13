'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import StarBorderButton from '@/components/StarBorderSustitute';

import image1 from '@/assets/Portadas/HeroImage.webp';
import image2 from '@/assets/Portadas/HeroImage2.webp';
import StarBorder from '@/components/StarBorder';
import dataCards from '@/assets/dataComponents/dataCards';




gsap.registerPlugin(SplitText);

interface ActividadesAventuraProps {
  mainTitle?: string;
  mainDescription?: string;
  rightSideText?: string;
  rightSideButton?: string;
  rightSideButtonAction?: () => void;
  images?: StaticImageData[];
}



function ActividadesAventura({
  mainTitle = `Conoce tu aventura`,
  mainDescription = "Please add your content. Please add your content. Please add your content. Please add your content. Please add your content.",
  rightSideText = "lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt.",
  rightSideButton = "Conoce más",
  rightSideButtonAction,
  images = [image1, image2, image1, image2]
}: ActividadesAventuraProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const isMountedRef = useRef(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

  useEffect(() => {
    isMountedRef.current = true;

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


    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };



  return (
    <section className='w-full panel h-dvh relative snap-start '>
      <div className='container mx-auto px-4 md:px-0 xl:px-8 py-12 xl:py-0'>
        {/* over 768 Grid Layout, less than that, flex */}
        <div className='flex flex-col space-y-2.5 md:grid md:gap-4 lg:gap-6 grid-cols-6 grid-rows-4 md:grid-cols-8 md:grid-rows-10 xl:gap-8 xl:h-dvh xl:items-start xl:pt-10'>
            {/* just for mobiles, after md: is hidden */}
            <div className="h-40 sm:h-40 md:hidden flex flex-col justify-center text-center sticky top-0 left-0 items-center z-20 pt-36 sm:pt-32">
                <h4 ref={titleRef} className="text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-[280px]">
                    {mainTitle}
                </h4>
                <span className="text-black dark:text-white font-copyright text-sm sm:text-lg md:text-xl cursor-default">
                    {mainDescription}
                </span>
            </div>

            {/* Left Column - Title & Description */}
            <div className='hidden md:flex flex-col px-4 md:px-2 md:gap-4 xl:gap-8 md:row-start-2 lg:row-start-2 md:col-start-1 lg:col-start-1 md:col-span-5 lg:col-span-4 md:row-span-2 lg:row-span-4'>
                <div className='flex items-center gap-3 xl:gap-4'>
                <h2 
                    ref={titleRef}
                    className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-primary-800 dark:text-white leading-tight'
                >
                    {mainTitle}
                </h2>
                </div>
                <p className='text-sm sm:text-base text-primary-700 dark:text-white/80 leading-relaxed max-w-3/5 md:max-w-md'>
                {mainDescription}
                </p>
            </div>

            {/* Right Column - Content & Button */}
            <div className='flex flex-col px-4 md:px-2 gap-6 xl:gap-8 items-center md:items-start lg:items-start md:col-end-9 md:row-start-2 lg:row-start-2 lg:col-start-6 md:col-span-3 lg:col-span-3 md:row-span-2 lg:row-span-3'>
                <div className="hidden md:flex w-full justify-center md:justify-end">
                    <p className='text-sm sm:text-base text-primary-700 dark:text-white/80 max-w-4/5 md:max-w-md leading-relaxed text-center md:text-right'>
                    {rightSideText}
                    </p>
                </div>
                <StarBorderButton height='h-10 xl:h-12' width='w-40 xl:w-48' textSize='text-sm'>
                {rightSideButton}
                </StarBorderButton>
            </div>

            {/* Images Grid - hidden for mobiles, visible for devices > 640px */}
            <div className='hidden md:flex flex-row gap-2 md:gap-2 xl:gap-4 md:row-start-4 lg:row-start-6 xl:row-start-5 lg:col-start-1 xl:col-start-1 md:col-span-8 lg:col-span-8 xl:col-span-8 md:row-span-2 lg:row-span-4 xl:row-span-4'>
            {images.map((image, index) => (
                <div
                key={index}
                className='aspect-square rounded-2xl xl:rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300'
                >
                <Image
                    src={image}
                    alt={`Activity ${index + 1}`}
                    className='w-full h-full object-cover'
                />
                </div>
            ))}
            </div>

            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className='flex-1 flex flex-row md:hidden gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center justify-start overflow-x-auto overflow-y-hidden w-full lg:w-9/10 lg:mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 cursor-grab select-none py-3 sm:py-4 md:py-6'
                style={{ scrollbarWidth: 'none', msOverflowStyle: '-ms-autohiding-scrollbar' }}
            >
                {
                    dataCards.map((card, index) => {
                        return <div key={index} className="w-56 xs:w-64 sm:w-72 md:w-80 lg:w-84 shrink-0"><Card index={index} {...card} /></div>
                    })
                }
            </div>
        </div>
      </div>
    </section>
  );
}

export default ActividadesAventura;


interface CardProps {
    title: string;
    subtitulo: string;
    description: string;
    src: string | StaticImageData;
    link: string;
    index: number;
}
// title, subtitulo, description, src, link, color

function Card({ title, subtitulo, description, src, link }: CardProps) {
    const imageSrc = typeof src === 'string' ? src : src.src;

    return (
        <div className={`flex flex-col relative shrink-0 aspect-[2/3] w-full rounded-2xl origin-top shadow-[4px_4px_4px_2px_rgba(0,0,0,0.1)] cursor-default select-none z-20 h-full`}>
            {/* Image Section - 60% of card height */}
            <div className="flex flex-[0.6] items-start justify-center rounded-t-2xl shrink-0 overflow-hidden">
                <div className="w-full h-full rounded-t-2xl bg-gray-200 flex items-center justify-center text-gray-500">
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-t-2xl" />
                </div>
            </div>

            {/* Content Section - 40% of card height */}
            <div className="w-full relative flex flex-col flex-[0.4] px-3 py-2 sm:py-3 text-start overflow-hidden bg-white dark:bg-primary-600/20 rounded-b-2xl">
                {/* Header with title and button */}
                <div className='flex flex-row justify-around gap-1.5 shrink-0'>
                    <div className='flex flex-row flex-1 text-center align-center justify-between'>
                        <h3 className="m-0 text-xs sm:text-sm font-semibold cursor-default select-none line-clamp-2 dark:text-primary-400">{title}</h3>
                        <p className="m-0 text-xs text-gray-500 dark:text-white cursor-default select-none">{subtitulo}</p>
                    </div>
                </div>

                {/* Description - Flexible with remaining space */}
                <div className="flex-1 flex flex-col gap-1 min-h-0 justify-between mt-2">
                    <p className="text-xs sm:text-sm leading-tight text-gray-800 dark:text-white line-clamp-4 sm:line-clamp-5">
                        <span className="first-letter:font-semibold cursor-default select-none">
                            {description}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

