'use client';

import React, { useMemo, useRef, useEffect, useState } from 'react';

export interface Logo {
  src: string;
  alt: string;
  href?: string;
}

export interface LogoSliderProps {
  logos: Logo[];
  speed?: number; // Animation duration in seconds
  height?: number; // Image height in pixels
  gap?: number; // Gap between logos in pixels
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  duplicateCount?: number; // Number of times to duplicate the logo row
  showGradient?: boolean;
  gradientColor?: string;
  className?: string;
  lazyLoad?: boolean; // Enable lazy loading with Intersection Observer
  lazyLoadMargin?: string; // Margin to start loading before entering viewport (e.g., '100px')
}

const LogoSlider: React.FC<LogoSliderProps> = ({
  logos,
  speed = 35,
  height = 100,
  gap = 20,
  pauseOnHover = true,
  direction = 'left',
  duplicateCount = 2,
  showGradient = true,
  gradientColor = '#ffffff',
  className = '',
  lazyLoad = true,
  lazyLoadMargin = '100px',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInViewport, setIsInViewport] = useState(!lazyLoad); // Start animated if no lazy load

  const animation = `${speed}s slide-${direction} infinite linear`;

  // Intersection Observer for viewport detection
  useEffect(() => {
    if (!lazyLoad || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        rootMargin: lazyLoadMargin,
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [lazyLoad, lazyLoadMargin]);

  // Create style tag for dynamic keyframes
  const keyframes = useMemo(
    () => `
      @keyframes slide-left {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
      }
      @keyframes slide-right {
        from { transform: translateX(0); }
        to { transform: translateX(100%); }
      }
    `,
    []
  );

  return (
    <>
      <style>{keyframes}</style>
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden py-8 ${className}`}
        onMouseEnter={(e) => {
          if (pauseOnHover && isInViewport) {
            const items = e.currentTarget.querySelectorAll('[data-logo-item]');
            items.forEach((item) => {
              (item as HTMLElement).style.animationPlayState = 'paused';
            });
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover && isInViewport) {
            const items = e.currentTarget.querySelectorAll('[data-logo-item]');
            items.forEach((item) => {
              (item as HTMLElement).style.animationPlayState = 'running';
            });
          }
        }}
      >
        {/* Left gradient overlay */}
        {showGradient && (
          <div
            className="absolute left-0 top-0 z-20 h-full w-64 pointer-events-none"
            style={{
              background: `linear-gradient(to left, rgba(255,255,255,0), ${gradientColor})`,
            }}
          />
        )}

        {/* Logo slider container */}
        <div className="flex gap-5 whitespace-nowrap">
          {Array.from({ length: duplicateCount }).map((_, setIndex) => (
            <div
              key={setIndex}
              data-logo-item
              className="inline-flex gap-5 animate-none"
              style={{
                animation: isInViewport ? animation : 'none',
                display: 'inline-flex',
              }}
            >
              {logos.map((logo, logoIndex) => (
                <div
                  key={`${setIndex}-${logoIndex}`}
                  className="shrink-0 flex items-center justify-center"
                  style={{ gap: `${gap}px` }}
                >
                  {logo.href ? (
                    <a
                      href={logo.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center hover:opacity-80 transition-opacity"
                      title={logo.alt}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="object-contain"
                        style={{ height: `${height}px`, width: 'auto' }}
                      />
                    </a>
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain"
                      style={{ height: `${height}px`, width: 'auto' }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right gradient overlay */}
        {showGradient && (
          <div
            className="absolute right-0 top-0 z-20 h-full w-64 pointer-events-none"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255,0), ${gradientColor})`,
            }}
          />
        )}
      </div>
    </>
  );
};

export default LogoSlider;


