'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface BlogContentProps {
  title: string;
  description: string;
  content: string;
  contentDesktop?: string;
  image?: StaticImageData;
  date?: string;
  author?: string;
  readTime?: string;
}

const BlogContent: React.FC<BlogContentProps> = ({
  title,
  description,
  content,
  contentDesktop,
  image,
  date,
  author,
  readTime,
}) => {
  return (
    <article className="panel relative snap-start w-full h-dvh text-black dark:text-white">
      {/* Hero Section */}
      <div className="relative w-full h-auto md:h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 sm:px-6 md:px-20 pt-16 md:py-20">
        
        {/* Content */}
        <div className="flex-1 max-w-2xl flex flex-col justify-center dark:opacity-90 dark:bg-gray-800/20 dark:rounded-3xl dark:py-2.5 dark:md:py-4 dark:px-2.5 dark:md:px-5 dark:backdrop-blur-xl">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          {/* Metadata */}
          {(date || author || readTime) && (
            <div className="flex justify-end gap-4 text-sm text-gray-800 dark:text-gray-100 mb-1">
              {date && <span>{date}</span>}
            </div>
          )}

          {/* Description */}
          <p className="text-black dark:text-white text-base sm:text-lg mb-2 leading-relaxed">
            {description}
          </p>


          {/* Body Content */}
          <div className="prose prose-invert max-w-none text-black dark:text-white leading-relaxed">
            <p>{content}</p>
          </div>

          {/* Solo desktop content */}
          <div className="hidden lg:flex pt-2.5 prose prose-invert max-w-none text-black dark:text-white leading-relaxed">
            <p>{contentDesktop}</p>
          </div>
        </div>

        {/* Image Section */}
        {image && (
          <div className=" w-full md:w-auto md:max-w-[400px] md:py-16 aspect-video sm:h-96 md:h-screen relative">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogContent;
