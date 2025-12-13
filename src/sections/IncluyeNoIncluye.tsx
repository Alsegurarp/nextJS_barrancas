'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IncludeItem {
  label: string;
}

interface ExpandableIncludeProps {
  title: string;
  items: IncludeItem[];
}

interface IncluyeNoIncluyelProps {
  title?: string;
  subtitle?: string;
  incluye?: ExpandableIncludeProps[];
}

// Custom scrollbar styles
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    height: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #ffffff40;
  }
  
  .dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #ffffff;
  }
  
  .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #f0f0f0;
  }
`;

// ExpandableButton Component for Incluye/NoIncluye
function ExpandableIncludeButton({ title, items, isOpen, onToggle }: ExpandableIncludeProps & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className='w-full max-w-4xl mx-auto'>
      <style>{scrollbarStyles}</style>
      {/* Header Button */}
      <button
        onClick={onToggle}
        className='w-full flex items-center justify-between rounded-lg bg-primary-800 dark:bg-white px-6 py-4 text-white dark:text-primary-950 hover:bg-primary-700 dark:hover:bg-gray-100 transition-colors duration-300'
      >
        <span className='text-lg font-semibold'>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className='inline-block text-xl'
        >
          ▲
        </motion.span>
      </button>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'linear' }}
            className='overflow-hidden bg-primary-800/80 dark:bg-primary-900/10 rounded-xl mt-px px-2 py-2'
          >
            {/* Horizontal Scrollable Items */}
            <div className='custom-scrollbar overflow-x-auto'>
              <div className='flex gap-2 px-6 py-4 min-w-min'>
                {items.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className='shrink-0 bg-white/20 dark:bg-black/50 rounded-xl p-4 shadow-md hover:shadow-md transition-shadow min-w-[200px] sm:min-w-[220px] aspect-video flex flex-col justify-end text-end align-bottom
                    '
                  >
                    <div className="flex flex-row justify-between items-center gap-4">
                        <p className='text-sm font-semibold text-white dark:text-white text-center'>
                        {item.label}
                        </p>
                        <button className='bg-white/20 rounded-full text-white py-2 px-4'
                        >
                            Conoce más
                        </button>
                    </div>
                    <div className="">
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                
                            </div>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function IncluyeNoIncluye({
  title = 'Incluye y no incluye',
  subtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere commodi',
  incluye = [],
}: IncluyeNoIncluyelProps) {
  const [openIncluye, setOpenIncluye] = useState<boolean>(false);

  return (
    <section className='w-full panel h-auto lg:h-dvh relative snap-start '>
      <div className='container mx-auto px-4 md:px-0 xl:px-8 py-12 xl:py-0'>
        {/* Header Section - Fixed */}
        <div className='flex flex-col justify-center text-center items-center z-20 pt-12 lg:pt-24 pb-12 lg:pb-12'>
          <h2 className='text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-[280px]'>
            {title}
          </h2>

          <p className='text-black dark:text-white font-copyright text-sm sm:text-lg md:text-xl cursor-default'>
            {subtitle}
          </p>
        </div>

        {/* Include Section - Scrollable Container */}
        <div className='space-y-4 pb-12 lg:pb-12 max-h-[70vh] overflow-y-auto'>
          {incluye.length > 0 && (
            <ExpandableIncludeButton
              title="Qué incluye"
              items={incluye}
              isOpen={openIncluye}
              onToggle={() => setOpenIncluye(!openIncluye)}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default IncluyeNoIncluye;