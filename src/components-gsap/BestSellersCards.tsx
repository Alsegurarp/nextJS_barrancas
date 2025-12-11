'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

import dataCards from '../assets/dataComponents/dataCards';
import StarBorderButton from '@/components/StarBorderSustitute';
import StarBorder from '@/components/StarBorder';

gsap.registerPlugin(SplitText);
const BestSellersCards = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        if (!textRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const split = new SplitText(textRef.current!, { type: 'chars' });

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

        observer.observe(textRef.current);

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
        <>
            <section className="flex flex-col panel h-dvh relative snap-start w-full top-0 lg:overflow-hidden">
                <div className="h-24 sm:h-32 md:h-40 lg:h-48 flex flex-col justify-center sticky top-0 left-0 items-center pt-16 sm:pt-20 md:pt-28 lg:pt-32 z-10 backdrop-blur-sm">
                    <h2 ref={textRef} className='text-center text-black dark:text-white font-semibold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl cursor-default select-none'>Best sellers</h2>
                    <span className="text-black dark:text-white font-copyright text-xs xs:text-sm sm:text-base md:text-lg cursor-default">
                        Lorem, ipsum dolor sit amet consectetur!
                    </span>
                </div>
                <div
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className='flex-1 flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-start justify-start overflow-x-auto w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 cursor-grab select-none py-3 sm:py-4 md:py-6'
                    style={{ scrollbarWidth: 'thin', msOverflowStyle: '-ms-autohiding-scrollbar' }}
                >
                    {
                        dataCards.map((card, index) => {
                            return <div key={index} className="w-56 xs:w-64 sm:w-72 md:w-80 lg:w-96 shrink-0"><Card index={index} {...card} /></div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default BestSellersCards;

import { StaticImageData } from 'next/image';

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
        <div className={`flex flex-col relative shrink-0 aspect-[256/420] w-full max-w-xs rounded-2xl origin-top shadow-[4px_4px_4px_2px_rgba(0,0,0,0.1)] cursor-default select-none z-20`}>
            {/* Image Section - 60% of card height */}
            <div className="flex flex-[0.6] items-start justify-center rounded-t-2xl shrink-0 overflow-hidden">
                <div className="w-full h-full rounded-t-2xl bg-gray-200 flex items-center justify-center text-gray-500">
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-t-2xl" />
                </div>
            </div>

            {/* Content Section - 40% of card height */}
            <div className="w-full relative flex flex-col flex-[0.4] px-3 py-2 sm:py-3 text-start overflow-hidden bg-white dark:bg-primary-600/20 rounded-b-2xl">
                {/* Header with title and button */}
                <div className='flex flex-row justify-around gap-1.5 shrink-0 mb-1'>
                    <div className='flex flex-row flex-1 text-center align-center justify-between'>
                        <h3 className="m-0 text-xs sm:text-sm font-semibold cursor-default select-none line-clamp-2 dark:text-primary-400">{title}</h3>
                        <p className="m-0 text-xs text-gray-500 dark:text-white cursor-default select-none">{subtitulo}</p>
                    </div>
                </div>

                {/* Description - Flexible with remaining space */}
                <div className="flex-1 flex flex-col gap-1 min-h-0 justify-between mb-2">
                    <p className="text-xs sm:text-sm leading-tight text-gray-800 dark:text-white line-clamp-4 sm:line-clamp-5">
                        <span className="first-letter:font-semibold cursor-default select-none">
                            {description}
                        </span>
                    </p>
                    <div className="flex justify-start">
                        <StarBorder width='w-full' height='h-6' textSize='text-sm'>
                            Conoce más
                        </StarBorder>
                    </div>
                </div>
            </div>
        </div>
    )
}

