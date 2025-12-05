'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import React, { type JSX } from 'react';

// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';
export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  cardHeight?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations to you.',
    id: 1,
    icon: <FiFileText className="h-4 w-4 text-white" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="h-4 w-4 text-white" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="h-4 w-4 text-white" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns.',
    id: 4,
    icon: <FiLayout className="h-4 w-4 text-white" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="h-4 w-4 text-white" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  cardHeight = 400,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  backgroundImage,
  backgroundPosition = 'center',
  backgroundSize = 'cover'
}: CarouselProps): JSX.Element {
  const containerPadding = 16;

  // Responsive sizing - initialize with baseWidth to match server render
  const [windowWidth, setWindowWidth] = useState(baseWidth);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set the actual window width after mounting to match client
    setWindowWidth(window.innerWidth);
    setIsMounted(true);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const responsiveBaseWidth = Math.min(baseWidth, windowWidth - 32); // 32px for margins
  const responsiveItemWidth = responsiveBaseWidth - containerPadding * 2;
  const responsiveTrackOffset = responsiveItemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  // Update effectiveTransition to match expected type
  const effectiveTransition = {
    generator: 'spring', // Replace `type` with `generator` to match `AnimationGeneratorType`
    stiffness: 100,
    damping: 10,
  };

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -responsiveTrackOffset * (carouselItems.length - 1),
        right: 0
      }
    };

  // Move useTransform outside callback
  const range = [-(currentIndex + 1) * responsiveTrackOffset, -currentIndex * responsiveTrackOffset, -(currentIndex - 1) * responsiveTrackOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  // Replace Tailwind CSS classes with shorthand equivalents
  const roundedClasses = round ? "rounded-full border border-white" : "rounded-3xl border border-primary-800";
  const spanClasses = "flex h-7 w-7 items-center justify-center rounded-full bg-primary-700";

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-2 sm:p-4 w-full max-w-full ${roundedClasses}`}
      style={{
        maxWidth: `${baseWidth}px`,
        ...(round && { height: `${responsiveBaseWidth}px`, maxHeight: `${baseWidth}px` })
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: responsiveItemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * responsiveTrackOffset + responsiveItemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * responsiveTrackOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          // Use item-specific background or fallback to global background
          const itemBgImage = item.backgroundImage || backgroundImage;
          const itemBgPosition = item.backgroundPosition || backgroundPosition;
          const itemBgSize = item.backgroundSize || backgroundSize;

          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${round
                  ? 'items-center justify-center text-center backdrop-blur-sm border-0'
                  : 'items-start justify-between border backdrop-blur-sm rounded-[12px]'
                } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: responsiveItemWidth,
                height: round ? responsiveItemWidth : `${cardHeight}px`,
                minHeight: round ? responsiveItemWidth : `${cardHeight}px`,
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' }),
                ...(itemBgImage && {
                  backgroundImage: `url(${itemBgImage})`,
                  backgroundPosition: itemBgPosition,
                  backgroundSize: itemBgSize,
                  backgroundRepeat: 'no-repeat'
                })
              }}
              transition={effectiveTransition}
            >
              <div className={`${round ? 'p-0 m-0' : 'mb-2 sm:mb-4 p-3 sm:p-5'}`}>
                <span className={spanClasses}>
                  {item.icon}
                </span>
              </div>
              <div className="p-3 sm:p-5 backdrop-blur-sm w-full rounded-br-xl rounded-bl-xl bg-clip-padding backdrop-filter">
                <div className="mb-1 font-black text-base sm:text-lg text-black">{item.title}</div>
                <p className="text-xs sm:text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mt-2 sm:mt-4 flex w-[100px] sm:w-[150px] justify-between px-4 sm:px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                  ? round
                    ? 'bg-white'
                    : 'bg-primary-800'
                  : round
                    ? 'bg-[#555]'
                    : 'bg-[rgba(51,51,51,0.4)]'
                }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


