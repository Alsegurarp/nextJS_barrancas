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
                            y: 20,
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
            <section className="flex flex-col panel h-screen relative snap-start container-full top-0 lg:overflow-hidden">
                <div className="h-32 sm:h-40 md:h-48 flex flex-col justify-center sticky top-0 left-0 items-center pt-28 sm:pt-32 md:pt-40">
                    <h2 ref={textRef} className='text-black font-semibold text-3xl sm:text-5xl md:text-7xl lg:text-8xl cursor-default select-none'>Best sellers</h2>
                    <span className="opacity-50 font-copyright text-base sm:text-lg md:text-xl cursor-default">
                        Lorem, ipsum dolor sit amet consectetur!
                    </span>
                </div>
                <div
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className='flex-1 flex flex-row gap-4 xl:gap-8 items-start justify-start overflow-x-auto w-full pl-4 md:pl-12 lg:pl-18 2xl:pl-24 pr-4 md:pr-12 lg:pr-18 2xl:pr-24 cursor-grab select-none'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {
                        dataCards.map((card, index) => {
                            return <Card key={index} index={index} {...card} />
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
        <div className={`flex flex-col relative shrink-0 h-9/10 max-h-[420px] sm:h-[430px] md:h-[550px] lg:h-[600px] xl:h-[650px] w-64 max-w-[290px] rounded-2xl origin-top shadow-[4px_4px_4px_2px_rgba(0,0,0,0.1)] cursor-default select-none z-20`}>
            {/* Image Section - Fixed height */}
            <div className="flex flex-2/3 items-start justify-center rounded-t-2xl shrink-0">
                <div className="w-full h-full  rounded-t-2xl bg-gray-200 flex items-center justify-center text-gray-500">
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-t-2xl" />
                </div>
            </div>

            {/* Content Section - Flexible height */}
            <div className="w-full relative flex flex-col flex-1/3 px-3 py-2 sm:py-3 text-start overflow-hidden bg-white rounded-b-2xl">
                {/* Header with title and button */}
                <div className='flex flex-row justify-around gap-1.5 shrink-0 mb-1'>
                    <div className='flex flex-row flex-1 text-center align-center justify-between'>
                        <h3 className="m-0 text-xs sm:text-sm font-semibold cursor-default select-none line-clamp-2">{title}</h3>
                        <p className="m-0 text-xs text-gray-500 cursor-default select-none">{subtitulo}</p>
                    </div>
                </div>

                {/* Description - Scrollable if needed */}
                <div className="flex-1 flex flex-col gap-1 min-h-0 justify-between mb-2">
                    <p className="text-xs sm:text-sm leading-tight text-gray-800 line-clamp-4 sm:line-clamp-5">
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

