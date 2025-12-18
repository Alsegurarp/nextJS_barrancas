'use client';

"use client"; // for framer useTime component

import React from 'react';
import Link from 'next/link';

interface StarBorderProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  textSize?: string;
  link?: string;
}

function StarBorder({ children = "Agenda ahora", width = "w-36", height = "h-12", textSize = "text-base", link }: StarBorderProps) {

  // to assign width and height: <StarBorder width="w-48" height="h-16">
  // to assign text size: <StarBorder textSize="text-lg">
  // to assign link: <StarBorder link="/itinerarios">

  const buttonClass = `relative ${width} ${height} bg-black hover:bg-black/90 hover:scale-95 dark:bg-white dark:hover:bg-white/90 py-4 px-1 rounded-full text-white dark:text-black ${textSize} font-medium transition-all duration-300 flex items-center justify-center whitespace-nowrap`;

  if (link) {
    return (
      <Link href={link}>
        <button className={buttonClass}>{children}</button>
      </Link>
    );
  }

  return (
    <>
      <button className={buttonClass}>{children}</button>
    </>
  )
}

export default StarBorder

