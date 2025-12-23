'use client';

// HeroSection.tsx
import React from 'react';
import Image from 'next/image';

export interface HeroSectionProps {
  backgroundUrlDesktop: string;
  backgroundUrlTablet: string;
  backgroundUrlMobile: string;
  title: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundUrlDesktop,
  backgroundUrlTablet,
  backgroundUrlMobile,
  title,
  subtitle,
}) => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col text-white overflow-hidden">
      <Image
        src={backgroundUrlMobile}
        alt={title}
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      <div className="absolute inset-0 bg-primary-950/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-6 font-nohemi">
        {subtitle && (
          <p className="tracking-widest text-sm md:text-base mb-3 uppercase font-nohemi">
            {subtitle}
          </p>
        )}
        <h1 className="text-5xl md:text-7xl font-serif mb-8 uppercase">
          {title}
        </h1>
        <button className="bg-primary-800 hover:bg-primary-700 text-white py-2 px-6 rounded transition font-nohemi">
          ¡Reserva YA!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;


