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
import { ItineraryData } from '@/lib/itinerariesData';


gsap.registerPlugin(SplitText);

interface ActividadesAventuraProps {
  mainTitle?: string;
  mainDescription?: string;
  rightSideText?: string;
  rightSideButton?: string;
  rightSideButtonAction?: () => void;
  images?: StaticImageData[];
  itineraryData?: ItineraryData;
}



function ActividadesAventura({
  mainTitle = `Conoce tu aventura`,
  mainDescription = "Please add your content. Please add your content. Please add your content. Please add your content. Please add your content.",
  rightSideText = "lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt lorem lorem ipsum content nunt.",
  rightSideButton = "Conoce más",
  rightSideButtonAction,
  images = [image1, image2, image1, image2],
  itineraryData
}: ActividadesAventuraProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const isMountedRef = useRef(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const desktopScrollContainerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // Use programDetails if available (more extensive descriptions), otherwise use experiences
    const cardData = (itineraryData?.programDetails && Array.isArray(itineraryData.programDetails) ? itineraryData.programDetails : itineraryData?.experiences) || [];

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
        if (desktopScrollContainerRef.current) {
            desktopScrollContainerRef.current.style.cursor = 'grab';
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
    <section className='w-full panel relative snap-start md:h-auto xl:h-dvh'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-18 lg:py-24'>
        <div className='flex flex-col space-y-6 md:space-y-8'>
            {/* just for mobiles, after md: is hidden */}
            <div className="md:hidden flex flex-col justify-center text-center items-center z-20 pt-16 sm:pt-20">
                <h4 ref={titleRef} className="text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl cursor-default select-none min-w-[280px]">
                    {mainTitle}
                </h4>
                <span className="text-black dark:text-white font-copyright text-sm sm:text-lg cursor-default mt-2">
                    {mainDescription}
                </span>
            </div>

            {/* Header Row - Title & Right Content for md and above */}
            <div className='hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 items-start'>
                {/* Left Column - Title & Description */}
                <div className='flex flex-col gap-4 lg:gap-6'>
                    <div className='flex items-center gap-3 lg:gap-4'>
                    <h2 
                        ref={titleRef}
                        className='text-3xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white leading-tight'
                    >
                        {mainTitle}
                    </h2>
                    </div>
                    <p className='text-sm lg:text-base text-black dark:text-white/80 leading-relaxed'>
                    {mainDescription}
                    </p>
                </div>

                {/* Right Column - Content & Button */}
                <div className='flex flex-col gap-4 lg:gap-6 items-end justify-start'>
                    <p className='text-sm lg:text-base text-black dark:text-white/80 leading-relaxed'>
                    {rightSideText}
                    </p>
                    <StarBorderButton height='h-10 lg:h-12' width='w-40 lg:w-48' textSize='text-sm'>
                    {rightSideButton}
                    </StarBorderButton>
                </div>
            </div>

            {/* Cards Section - Full width */}
            {cardData && cardData.length > 0 ? (
              <div 
                ref={desktopScrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className='hidden md:flex flex-row gap-3 lg:gap-4 overflow-x-auto pb-6 cursor-grab select-none scrollbar-visible'
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#ad3f21 #f3f4f6'
                }}
              >
                {cardData.map((card, index) => (
                    <div key={index} className="w-72 lg:w-80 shrink-0">
                      <Card index={index} {...card} />
                    </div>
                ))}
              </div>
            ) : (
              <div className='hidden md:flex flex-row gap-3 lg:gap-4'>
                {images.map((image, index) => (
                    <div
                    key={index}
                    className='w-72 lg:w-80 aspect-square rounded-2xl lg:rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 shrink-0'
                    >
                    <Image
                        src={image}
                        alt={`Activity ${index + 1}`}
                        className='w-full h-full object-cover'
                    />
                    </div>
                ))}
              </div>
            )}

            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className='flex md:hidden flex-row gap-3 sm:gap-4 items-center justify-start overflow-x-auto overflow-y-hidden w-full px-4 sm:px-6 cursor-grab select-none py-4 sm:py-6'
                style={{ scrollbarWidth: 'none', msOverflowStyle: '-ms-autohiding-scrollbar' }}
            >
                {cardData && cardData.length > 0 ? (
                    cardData.map((card, index) => {
                        return <div key={index} className="w-56 xs:w-64 sm:w-72 shrink-0"><Card index={index} {...card} /></div>
                    })
                ) : (
                    <div className='text-center text-gray-500 w-full'>
                        Data no cargada
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}

export default ActividadesAventura;


interface CardProps {
    title: string;
    description: string;
    image: StaticImageData;
    buttonText: string;
    index: number;
}

function Card({ title, description, image, buttonText, index }: CardProps) {
    if (!image) {
        return null;
    }
    
    // Extract day number from title (e.g., "Día 1: Title" -> "Día 1")
    const dayMatch = title.match(/Día \d+/);
    const dayLabel = dayMatch ? dayMatch[0] : `Day ${index + 1}`;
    const titleWithoutDay = title.replace(/Día \d+:\s*/, '').trim();

    return (
        <div className={`flex flex-col relative shrink-0 aspect-[2/3] w-full rounded-2xl origin-top shadow-[4px_4px_4px_2px_rgba(0,0,0,0.1)] cursor-default select-none z-20 h-full overflow-hidden bg-white dark:bg-black/20`}>
            {/* Image Section - 60% of card height */}
            <div className="flex flex-[0.6] items-start justify-center rounded-t-2xl shrink-0 overflow-hidden relative bg-gray-200 dark:bg-gray-700">
                <Image 
                    src={image} 
                    alt={title}
                    fill
                    className="w-full h-full object-cover" 
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 320px"
                />
                <div className="absolute top-2 right-2 bg-white/40 dark:bg-black/40 backdrop-blur-md px-2 py-1 rounded-2xl">
                    <p className="m-0 text-sm font-semibold text-white dark:text-white cursor-default select-none">{dayLabel}</p>
                </div>
            </div>

            {/* Content Section - 40% of card height */}
            <div className="w-full relative flex flex-col flex-[0.4] px-3 py-2 sm:py-3 text-start overflow-hidden dark:backdrop-blur-md rounded-b-2xl">
                {/* Header with title */}
                <div className='shrink-0'>
                    <h3 className="m-0 text-xs sm:text-sm font-semibold cursor-default select-none line-clamp-2 dark:text-primary-200 text-gray-900">{titleWithoutDay}</h3>
                </div>

                {/* Description - Flexible with remaining space */}
                <div className="flex-1 flex flex-col gap-1 min-h-0 justify-between mt-1 sm:mt-2">
                    <p className="text-xs sm:text-sm leading-tight text-gray-800 dark:text-white line-clamp-5 md:line-clamp-none">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

