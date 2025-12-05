'use client';

import React from 'react'

interface TitleReusableProps {
  children: string; 
}


const TitleReusable: React.FC<TitleReusableProps> = ({ children }) => {
  return (
    <div className="flex flex-col mb-4 items-center mx-auto max-w-60 sm:max-w-72 md:max-w-96 lg:max-w-[480px]">
      <h4
        className="flex justify-center items-center text-nohemi text-center text-base sm:text-lg md:text-xl lg:text-2xl"
        style={{ fontFamily: 'Nohemi, sans-serif' }}
      >
        {children}
      </h4>
      <div className="h-[2px] bg-primary-700 w-1/3 rounded-2xl sm:w-1/2 md:w-3/4 " />
    </div>
  );
};

export default TitleReusable

