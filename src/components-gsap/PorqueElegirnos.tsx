'use client';

import React, { useRef, useEffect, useState } from 'react';
import dataCards from '@/assets/dataComponents/dataCards';
import { StaticImageData } from 'next/image';

const PorqueElegirnos = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="relative w-full min-h-[500vh] snap-start">
            <div className="sticky top-0 left-0 w-full h-[100dvh] flex flex-col justify-center items-center p-4 md:px-12 md:py-6 lg:px-18 lg:py-12 2xl:px-24 xl:py-16">
                <div className="w-full flex justify-center items-center py-4 md:py-8">
                    <h2 className='text-black font-semibold text-3xl sm:text-5xl md:text-7xl lg:text-8xl cursor-default select-none'>
                        Porque elegirnos
                    </h2>
                </div>

                <div className="relative w-full max-w-[80%] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] h-[60dvh] sm:h-[70dvh] xl:h-[75dvh]">
                    {dataCards.map((card, index) => (
                        <CardLayer key={index} {...card} index={index} total={dataCards.length} sectionRef={sectionRef} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PorqueElegirnos;

interface CardLayerProps {
    title: string;
    description: string;
    src: string | StaticImageData;
    link: string;
    color?: string;
    index: number;
    total: number;
    sectionRef: React.RefObject<HTMLDivElement | null>;
}

function CardLayer({ title, description, src, color = '#ffffff', index, total, sectionRef }: CardLayerProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        if (!wrapper || !sectionRef.current) return;

        const handleScroll = () => {
            const wrapperElement = wrapper as HTMLElement;
            const sectionElement = sectionRef.current;
            if (!sectionElement) return;

            // Get scroll position relative to wrapper
            const scrollY = wrapperElement.scrollTop;
            const sectionTop = sectionElement.offsetTop;
            const sectionHeight = sectionElement.offsetHeight;
            const viewportHeight = wrapperElement.clientHeight;

            // Calculate how far into the section we've scrolled
            const sectionScrollStart = sectionTop;
            const scrollIntoSection = Math.max(0, scrollY - sectionScrollStart);

            // Total scrollable range for the entire section
            const totalScrollRange = sectionHeight - viewportHeight;

            // Global progress from 0 to total (number of cards)
            // This represents how many cards have been "cycled through"
            const globalProgress = (scrollIntoSection / totalScrollRange) * total;

            setScrollProgress(globalProgress);
        };

        wrapper.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => wrapper.removeEventListener('scroll', handleScroll);
    }, [index, total, sectionRef]);

    // Calculate which "position" this card is in based on scroll
    // globalProgress goes from 0 to total (e.g., 0 to 5 for 5 cards)
    // Each card cycles through all positions
    const currentPosition = (index - Math.floor(scrollProgress) + total * 100) % total;
    const transitionProgress = scrollProgress % 1; // Progress within current transition (0 to 1)

    // Determine if this card is currently transitioning
    const cardTurn = Math.floor(scrollProgress); // Which card's turn is it to transition
    const isMyTurn = (cardTurn % total) === index;

    // Base values for each position in the stack
    const baseScale = 1 - (currentPosition * 0.05);
    const baseTranslateY = currentPosition * 20;
    const baseOpacity = Math.max(0.5, 1 - (currentPosition * 0.1));

    let scale, translateY, opacity, rotateX;

    if (isMyTurn && transitionProgress > 0) {
        // This card is transitioning from front (position 0) to back (position total-1)
        const nextPosition = total - 1;
        const nextScale = 1 - (nextPosition * 0.05);
        const nextTranslateY = nextPosition * 20;
        const nextOpacity = Math.max(0.5, 1 - (nextPosition * 0.1));

        scale = baseScale + (nextScale - baseScale) * transitionProgress;
        translateY = baseTranslateY + (nextTranslateY - baseTranslateY) * transitionProgress - (transitionProgress * 100);
        opacity = baseOpacity + (nextOpacity - baseOpacity) * transitionProgress;
        rotateX = transitionProgress * 12;
    } else {
        // Card is in its stable position
        scale = baseScale;
        translateY = baseTranslateY;
        opacity = baseOpacity;
        rotateX = 0;
    }

    const zIndex = total - currentPosition;

    return (
        <div
            ref={cardRef}
            className="absolute inset-0 flex items-center justify-center transition-all duration-100"
            style={{
                transform: `
                    scale(${scale})
                    rotateX(${rotateX}deg)
                    translateY(${translateY}px)
                    translateZ(${-index * 100}px)
                `,
                opacity: opacity,
                zIndex: zIndex,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
        >
            <div
                className="w-full h-full rounded-[25px] p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-4"
                style={{ backgroundColor: color }}
            >
                <h3 className="text-center font-nohemi text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-semibold cursor-default select-none">
                    {title}
                </h3>

                <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                    <p className="text-[14px] font-nohemi sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed">
                        <span className="first-letter:text-[24px] font-nohemi sm:first-letter:text-[26px] md:first-letter:text-[32px] first-letter:font-bold first-letter:leading-none cursor-default select-none">
                            {description}
                        </span>
                    </p>

                    <div className="flex-1 flex items-center justify-center">
                        {src && <img
                            src={typeof src === 'string' ? src : src.src}
                            alt={title}
                            className="w-full max-w-[300px] h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg shadow-lg"
                        />}
                    </div>
                </div>
            </div>
        </div>
    );
}
