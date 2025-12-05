'use client';

import React from 'react';

export interface HotelCardProps {
  country?: string;
  location: string;
  hotelName: string;
  imageUrl: string;
  className?: string;
  alt?: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  country = 'Japón',
  location,
  hotelName,
  imageUrl,
  className = '',
  alt = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer rounded-xl shadow-[0_8px_24px_-8px_hsl(220_13%_3%_/_0.6)] 
      transition-all duration-300 ease-in-out hover:shadow-[0_10px_30px_-5px_hsl(45_93%_58%_/_0.3)]
      min-w-[280px] max-w-[320px] m-2 sm:m-5 group animate-[fade-in_0.6s_ease-out] ${className}`}
    >
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={imageUrl}
          alt={alt || hotelName}
          className="h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.2,0,0.1,1)] group-hover:scale-110"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, hsl(220 13% 9% / 0.8) 100%)',
          }}
        />
        {/* Glow border */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-xl border-2 border-[hsl(45_93%_58%)] animate-[glow_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
          <h3 className="text-[24px] font-bold mb-2 text-[hsl(48_96%_89%)] transition-colors duration-300 group-hover:text-[hsl(45_93%_58%)]">
            {hotelName}
          </h3>
        </div>

        <div
          className="transform translate-y-4 transition-all duration-300 overflow-hidden max-h-0 opacity-0 group-hover:max-h-[160px] group-hover:opacity-100 group-hover:translate-y-0"
        >
          <p className="text-white text-sm leading-relaxed mb-2">
            Explora las maravillas de {hotelName} con nuestra selección de hoteles premium y experiencias exclusivas.
          </p>

          <span className="inline-block mt-2 mr-2 px-3 py-1 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm text-sm uppercase text-white">
            {country}
          </span>
          <span className="inline-block mt-2 mr-2 px-3 py-1 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm text-sm uppercase text-white">
            {location}
          </span>
        </div>
      </div>

      {/* Card background scale overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
        style={{
          background:
            'linear-gradient(145deg, hsl(220 13% 9% / 0.8), hsl(220 13% 15% / 0.6))',
        }}
      />
    </div>
  );
};

export default HotelCard;


