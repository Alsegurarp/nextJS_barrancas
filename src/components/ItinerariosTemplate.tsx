'use client';

import React from "react";

export type Itinerary = {
  title: string;
  to?: string; // Optional navigation path
  subtitle: string;
  dias: string;
  text: string;

  // Three responsive image sizes
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;

  altText: string;
};

interface ContenidoItinerariosProps {
  data: Itinerary[];
  pageTitle?: string;
}

const ContenidoItinerarios: React.FC<ContenidoItinerariosProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Card key={item.title} index={index} {...item} />
      ))}
    </>
  );
};

export default ContenidoItinerarios;

type CardProps = Itinerary & {
  index: number;
};

const Card: React.FC<CardProps> = ({
  imageDesktop,
  imageTablet,
  imageMobile,
  altText,
  title,
  subtitle,
  dias,
  text,
  index,
}) => {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`flex flex-col-reverse mb-8 ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-6 px-4 sm:max-w-[580px] sm:justify-self-center md:items-stretch md:px-16 md:py-6 md:mb-0 md:max-w-[880px] lg:max-w-[920px] xl:max-w-[1120px] xl:h-auto 2xl:max-w-[1280px]`}
    >
      {/* Text Content */}
      <div
  className="flex flex-col justify-between flex-1 p-2 border-2 rounded-lg border-primary-700 max-w-2xs sm:max-w-96 md:max-w-1/2 lg:min-h-[300px] lg:max-h-[400px] xl:max-h-[480px] 2xl:max-h-[550px]"
  data-aos={isReversed ? 'fade-left' : 'fade-right'}
  data-aos-delay={index * 200}
  data-aos-duration="1000"
>
  {/* TOP SECTION */}
  <div className="flex flex-col">
    <div className="space-y-1 text-left flex flex-row gap-4 p-2.5">
      <h2
        className="text-lg uppercase font-medium font-nohemi sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl leading-none"
        style={{ fontFamily: 'Nohemi, sans-serif' }}
      >
        {title}
      </h2>
      <span className="text-primary-800 font-nohemi text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[148px] leading-none" style={{ fontFamily: 'nohemi' }}>
        {subtitle}
      </span>
    </div>
    <div className="h-[2px] bg-primary-700 bg-brand-600 w-1/3 rounded-2xl" />
  </div>

  {/* BOTTOM SECTION */}
  <div className="text-left p-2 lg:mt-4 lg:gap-4 xl:p-2 xl:mt-0">
    <span
      className="font-nohemi uppercase font-normal text-3xl sm:text-4xl md:text-3xl block xl:text-5xl"
      style={{ fontFamily: 'Nohemi, sans-serif' }}
    >
      {dias}
    </span>
    <p
      className="font-nohemi text-black mt-2 text-xs sm:text-sm md:text-xl lg:mt-4 xl:text-2xl"
      style={{ fontFamily: 'Nohemi Light, Nohemi, sans-serif' }}
    >
      {text}
    </p>
  </div>
</div>

      {/* Responsive Image */}
      <div className="flex-1 w-full max-w-2xs sm:max-w-96 md:max-w-1/2 lg:min-h-[300px] lg:max-h-[400px] xl:max-h-[480px] 2xl:max-h-[550px] rounded-lg overflow-hidden" data-aos={isReversed ? "fade-right" : "fade-left"}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={imageDesktop} />
          <source media="(min-width: 640px)" srcSet={imageTablet} />
          <img
            src={imageMobile}
            alt={altText}
            className="w-full h-auto object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};


