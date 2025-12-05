'use client';

import React from "react";

export type sectionType = {
  dias: string;
  texto: string;
  title: string
}

export default function DescriptionItinerario({dias, texto, title}: sectionType){
  return (
    <>
    <div className="flex-col text-center p-4 mx-auto max-w-[80%] md:max-w-[60%] ">
        <h2 className="flex-row py-2 text-lg sm:text-2xl md:text-3xl">
          <span>☀️</span>{dias}<span>🌑</span>
        </h2>
        <p className="text-center text-md sm:text-lg md:text-xl">{texto}</p>
    </div>

          <div className="mx-auto w-[90%] max-w-[1100px]">
        {/* Title row with dividers */}
        <div className="flex flex-col gap-3 sm:flex sm:flex-row">

          <div className="hidden h-[2px] self-center bg-brand-600 sm:inline-flex sm:w-1/2" />
          <h2 className="m-0 text-center text-[clamp(22px,6vw,28px)] font-semibold text-gray-900 min-[360px]:text-[clamp(24px,1.4rem+1vw,32px)]">
            {title}
          </h2>
          <div className="h-[2px] w-1/2 self-center bg-brand-600 min-[360px]:h-[2px]" />
        </div>
        </div>
    </>
  );
}


