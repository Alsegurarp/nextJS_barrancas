'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

interface ActivityCard {
  id: string;
  title: string;
}

interface ActividadesAventuraProps {
  mainTitle?: string;
  mainDescription?: string;
  rightSideText?: string;
  rightSideButton?: string;
  rightSideButtonAction?: () => void;
  cards?: ActivityCard[];
}



function ActividadesAventura({
  mainTitle = "Explore our destinations",
  mainDescription = "Please add your content here.",
  rightSideText = "lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt lorem",
  rightSideButton = "Explore",
  rightSideButtonAction,
  cards = []
}: ActividadesAventuraProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isMountedRef = useRef(false);

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

  return (
    <section className='flex flex-col panel h-dvh relative snap-start w-full top-0 lg:overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="h-40 sm:h-40 md:h-48 lg:h-auto flex flex-col lg:flex-row justify-center text-center items-center sticky top-0 left-0 lg:items-start z-20 pt-36 sm:pt-32 md:pt-40 md:pb-8">
                <h4 ref={titleRef} className='text-center text-black dark:text-white font-semibold text-2xl min-[350px]:text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-[280px]'>{mainTitle}</h4>
                <div className="p-2 bg-gray-300">
                    <span className="text-black dark:text-white font-copyright text-base sm:text-lg md:text-xl cursor-default min-w-[280px]">
                        {rightSideText}
                    </span>
                </div>
            </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6'>
          {cards.map((card) => (
            <div
              key={card.id}
              className='aspect-square bg-gray-400 dark:bg-gray-600 rounded-2xl sm:rounded-3xl hover:shadow-lg transition-shadow duration-300'
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActividadesAventura;