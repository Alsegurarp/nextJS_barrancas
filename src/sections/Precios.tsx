'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PriceItem {
  label: string;
  price: string;
}

interface ExpandableButtonProps {
  title: string;
  items: PriceItem[];
  onReserve?: () => void;
}

interface PreciosSection extends ExpandableButtonProps {
  title: string;
  items: PriceItem[];
  onReserve?: () => void;
}

interface PreciosProps {
  title?: string;
  subtitle?: string;
  sections?: PreciosSection[];
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

// ExpandableButton Component
function ExpandableButton({ title, items, onReserve, isOpen, onToggle }: ExpandableButtonProps & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className='w-full max-w-4xl mx-auto '>
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
            className='overflow-hidden bg-primary-800/80 dark:bg-primary-900/10 rounded-xl mt-1 px-2'
          >
            {/* Horizontal Scrollable Price Items */}
            <div className='custom-scrollbar overflow-x-auto'>
              <div className='flex gap-2 px-6 py-4 min-w-min'>
                {items.map((item) => (
                  <div
                    key={item.label}
                    className='flex-shrink-0 bg-white/20 dark:bg-black/50 rounded-xl p-6 flex flex-col gap-3 shadow-md hover:shadow-md transition-shadow min-w-[280px] sm:min-w-[320px]'
                  >
                    <div className='flex items-center justify-between gap-2'>
                      <span className='text-xs font-semibold text-primary-800 dark:text-white uppercase'>
                        {item.label}
                      </span>
                      <span className='text-xs border border-primary-800 dark:border-white text-primary-800 dark:text-white  rounded-full px-2 py-1 whitespace-nowrap'>
                        MXN
                      </span>
                    </div>

                    <div className='flex items-baseline gap-1'>
                      <span className='text-3xl font-bold text-gray-100 dark:text-white'>
                        {item.price}
                      </span>
                      <span className='text-sm font-semibold text-primary-800 dark:text-white'>
                        MXN
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reserve Button */}
            <div className='flex justify-center py-2'>
              <button
                onClick={onReserve}
                className='bg-primary-800 hover:scale-105 dark:bg-gray-100 text-white dark:text-primary-950 px-8 py-2 rounded-full font-semibold transition-colors duration-300'
              >
                ¡Reserva YA!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Main Precios Component
function Precios({
  title = 'Precios de experiencias',
  subtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  sections = [],
}: PreciosProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

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

        {/* Pricing Sections - Scrollable Container */}
        {sections.length > 0 && (
          <div className='space-y-2 pb-2 lg:pb-12 max-h-[70vh] overflow-y-auto'>
            {sections.map((section, index) => (
              <ExpandableButton
                key={`${section.title}-${index}`}
                title={section.title}
                items={section.items}
                onReserve={section.onReserve}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Precios;



    