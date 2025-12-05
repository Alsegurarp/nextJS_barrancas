'use client';

"use client"; // for framer useTime component

import React from 'react';

interface StarBorderProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  textSize?: string;
}

function StarBorder({ children = "Agenda ahora", width = "w-36", height = "h-12", textSize = "text-base" }: StarBorderProps) {

  // to assign width and height: <StarBorder width="w-48" height="h-16">
  // to assign text size: <StarBorder textSize="text-lg">


  return (
    <>
        <button className={`relative ${width} ${height} bg-black/80 hover:bg-black/20 py-4 px-1 rounded-full text-white ${textSize} font-medium z-10 transition-colors duration-200 flex items-center justify-center whitespace-nowrap`}>{children}</button>
    </>
  )
}

export default StarBorder

