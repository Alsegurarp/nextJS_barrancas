'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { experienciasAdicionalesData } from '@/lib/ExperienciasAdicionalesInfo';
import { FaStar } from 'react-icons/fa';
import { LiaClock } from 'react-icons/lia';
import { MdOutlineLocationOn } from 'react-icons/md';

function AdicionalDetalle() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Find the experience by slug
  const experiencia = experienciasAdicionalesData.find(item => item.slug === slug);

  if (!experiencia) {
    return (
      <div className='w-full panel relative snap-start h-dvh flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Experiencia no encontrada</h2>
          <button
            onClick={() => router.push('/adicional')}
            className='px-6 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors'
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  const handleNavigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveImageIndex(activeImageIndex === 0 ? 0 : activeImageIndex - 1);
    } else {
      setActiveImageIndex(activeImageIndex === 0 ? 0 : activeImageIndex + 1);
    }
  };

  return (
    <div className='w-full panel relative snap-start h-dvh overflow-hidden flex flex-col'>
      {/* Hero Image Section */}
      <div className='relative w-full aspect-[3/4] sm:aspect-[2/3] md:aspect-square overflow-hidden mb-6'>
        <Image
          src={experiencia.image}
          alt={experiencia.title}
          fill
          className='object-cover'
        />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/40' />
      </div>

      {/* Content Section */}
      <div className='flex-1 px-4 sm:px-6 md:px-8 pb-6'>
        {/* Title and Category */}
        <div className='mb-4'>
            <div className="flex flex-row justify-between">
                <button
                onClick={() => router.push('/adicional')}
                className='inline-block bg-primary-800/20 dark:bg-primary-800/40 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold'
                >
                ← Atrás
                </button>
                <div className='inline-block bg-white/40 dark:bg-primary-800/40 backdrop-blur-md text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold'>
                    {experiencia.category}
                </div>

            </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3'>
            {experiencia.title}
          </h1>

          {/* Stats */}
          <div className='flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1'>
                <FaStar className='text-yellow-400' />
                <span className='text-gray-900 dark:text-white font-semibold'>4.8</span>
              </div>
              <span className='text-gray-600 dark:text-gray-100'>Excelente</span>
            </div>

            <div className='flex items-center gap-2'>
              <span className='text-2xl'>🌡️</span>
              <span className='text-gray-900 dark:text-white font-semibold'>28°C</span>
            </div>

            <div className='flex items-center gap-2'>
              <LiaClock className='text-gray-600 dark:text-gray-400 text-lg' />
              <span className='text-gray-900 dark:text-white font-semibold'>7 horas</span>
            </div>
          </div>
        </div>
        {/* x axis scrollable */}
        <div className='flex flex-row overflow-x-auto space-x-1.5'>

            {/* Description */}
            <div className='bg-primary-200/40  backdrop-blur-md rounded-2xl p-4 min-w-[240px]'>
            <h2 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3'>
                Descripción
            </h2>
            <p className='text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed'>
                {experiencia.description}
            </p>
            </div>

            {/* Additional Details */}
            <div className='bg-primary-300/40  backdrop-blur-md rounded-2xl p-4 min-w-[240px]'>
                <h3 className='text-gray-800 dark:text-white text-xs font-semibold uppercase mb-2'>
                Incluye
                </h3>
                <ul className='text-sm text-gray-900 dark:text-white space-y-1'>
                <li>✓ Guía especializado</li>
                <li>✓ Transporte incluido</li>
                <li>✓ Equipo de seguridad</li>
                </ul>
            </div>

            <div className='bg-primary-400/40  backdrop-blur-md rounded-2xl p-4 min-w-[240px]'>
                <h3 className='text-gray-800 dark:text-white text-xs font-semibold uppercase mb-2'>
                Requisitos
                </h3>
                <ul className='text-sm text-gray-900 dark:text-white space-y-1'>
                <li>• Edad mínima: 12 años</li>
                <li>• Condición física: Media</li>
                <li>• Llevar bloqueador solar</li>
                </ul>
            </div>
        </div>



      </div>

      {/* Sticky Button */}
      <div className='px-4 sm:px-6 md:px-8 pb-6'>
        <button
          onClick={() => router.push(experiencia.buttonLink || '/reservas')}
          className='w-full bg-gradient-to-r from-primary-800 to-primary-700 hover:from-primary-700 hover:to-primary-600 text-white font-semibold py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg text-base sm:text-lg'
        >
          {experiencia.buttonText || 'Reservar ahora'}
        </button>
      </div>
    </div>
  );
}

export default AdicionalDetalle;