'use client';

import React from 'react';

interface StatCard {
  value: string;
  label: string;
}

function PorqueNosotros() {
  const stats: StatCard[] = [
    { value: '100%', label: 'De nuestros clientes nos recomiendan' },
    { value: '+20', label: 'Años creando experiencias únicas' },
    { value: '+30,750', label: 'Clientes satisfechos' },
    { value: '900m', label: 'De millas viajadas por nuestros usuarios' }
  ];

  return (
    <section className="panel relative snap-start w-full h-dvh flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Expertise Badge and Description */}
      <div className='text-center mb-12 md:mb-16 max-w-6xl mx-auto'>
        <div className='inline-block mb-6 md:mb-8'>
          <span className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 dark:bg-black/80 dark:backdrop-blur-md'>
            NUESTRA VISIÓN
          </span>
        </div>
        
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-black dark:text-white mb-4 md:mb-6'>
          Nuestra filosofía: Excelencia y dedicación
        </h2>
        
        <p className='text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
          Nuestros directores comerciales comparten contigo su perspectiva sobre lo que significa crear experiencias memorables, cuidando cada detalle para que cada itinerario supere expectativas.
        </p>
      </div>

      {/* Stats Section */}
      <div className='max-w-6xl mx-auto w-full'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-2 md:mb-3'>
                {stat.value}
              </p>
              <p className='text-xs md:text-sm text-gray-600 dark:text-gray-200 leading-tight'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PorqueNosotros;
