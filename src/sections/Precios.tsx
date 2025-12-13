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

interface PreciosProps {
  title?: string;
  subtitle?: string;
  sections?: ExpandableButtonProps[];
}

// ExpandableButton Component
function ExpandableButton({ title, items, onReserve, isOpen, onToggle }: ExpandableButtonProps & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className='w-full max-w-4xl mx-auto'>
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='overflow-hidden bg-primary-950 rounded-b-lg'
          >
            {/* Horizontal Scrollable Price Items */}
            <div className='overflow-x-auto'>
              <div className='flex gap-2 px-6 py-4 min-w-min'>
                {items.map((item) => (
                  <div
                    key={item.label}
                    className='flex-shrink-0 bg-gray-600/20 dark:bg-gray-700 rounded-xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow min-w-[280px] sm:min-w-[320px]'
                  >
                    <div className='flex items-center justify-between gap-2'>
                      <span className='text-xs font-semibold text-white dark:text-gray-200 uppercase'>
                        {item.label}
                      </span>
                      <span className='text-xs border border-white text-white dark:border-white dark:text-white rounded-full px-2 py-1 whitespace-nowrap'>
                        MXN
                      </span>
                    </div>

                    <div className='flex items-baseline gap-1'>
                      <span className='text-3xl font-bold text-white dark:text-white'>
                        {item.price}
                      </span>
                      <span className='text-sm font-semibold text-gray-300 dark:text-gray-300'>
                        MXN
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reserve Button */}
            <div className='flex justify-center pb-4'>
              <button
                onClick={onReserve}
                className='bg-white hover:bg-gray-100 text-primary-950 px-8 py-2 rounded-lg font-semibold transition-colors duration-300'
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
  sections = [
    {
      title: 'Temporada Regular',
      items: [
        { label: 'Habitación Doble', price: '$41,353' },
        { label: 'Habitación Sencilla', price: '$61,919' },
        { label: 'Habitación Triple', price: '$36,752' },
        { label: 'Menor de 2 a 11 años', price: '$23,834' },
      ],
      onReserve: () => console.log('Reserve clicked - Temporada Regular'),
    },
    {
      title: 'Temporada Alta',
      items: [
        { label: 'Habitación Doble', price: '$52,500' },
        { label: 'Habitación Sencilla', price: '$73,200' },
        { label: 'Habitación Triple', price: '$47,800' },
        { label: 'Menor de 2 a 11 años', price: '$31,450' },
      ],
      onReserve: () => console.log('Reserve clicked - Temporada Alta'),
    },
    {
      title: 'Temporada de Cerezos',
      items: [
        { label: 'Habitación Doble', price: '$58,750' },
        { label: 'Habitación Sencilla', price: '$82,100' },
        { label: 'Habitación Triple', price: '$54,300' },
        { label: 'Menor de 2 a 11 años', price: '$36,200' },
      ],
      onReserve: () => console.log('Reserve clicked - Temporada de Cerezos'),
    },
    {
      title: 'Temporada Navidad',
      items: [
        { label: 'Habitación Doble', price: '$67,200' },
        { label: 'Habitación Sencilla', price: '$94,500' },
        { label: 'Habitación Triple', price: '$62,100' },
        { label: 'Menor de 2 a 11 años', price: '$41,400' },
      ],
      onReserve: () => console.log('Reserve clicked - Temporada Navidad'),
    },
  ],
}: PreciosProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className='w-full panel h-auto lg:h-dvh relative snap-start '>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0'>
        {/* Header Section */}
        <div className='flex flex-col justify-center text-center items-center z-20 pt-12 lg:pt-24 pb-12 lg:pb-12'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-800 dark:text-white cursor-default select-none mb-4'>
            {title}
          </h2>
          <p className='text-sm sm:text-base md:text-lg text-primary-700 dark:text-white/80 max-w-2xl'>
            {subtitle}
          </p>
        </div>

        {/* Pricing Sections */}
        <div className='space-y-4 pb-12 lg:pb-12'>
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
      </div>
    </section>
  );
}

export default Precios;



    