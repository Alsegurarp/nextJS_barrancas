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

  // 'Crea' la paginacion
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
    <div className='h-dvh relative snap-start snap-stop-always panelflex flex-col md:flex-row'>
      {/* Wrapper container for max-width on large screens */}
      <div className='flex-1 flex flex-col md:flex-row md:mx-auto md:max-w-[1200px] md:w-full md:py-20 '>
        {/* Hero Image Section - Full width on mobile, 50% on desktop */}
        <div className='relative w-full md:w-1/2 aspect-[5/5] min-[380px]:aspect-[5/5] xs:aspect-[4/3] min-[540px]:aspect-[4/3] sm:aspect-[6/4] md:aspect-[5/4] overflow-hidden mb-6 md:mb-0 rounded-3xl'>
              <button
                  onClick={() => router.push('/adicional')}
                  className='relative z-20 left-2.5 top-[70px] md:top-2.5 inline-block bg-white/20 dark:bg-primary-800/40 text-white dark:text-primary-200 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold cursor-pointer'
                  >
                  Atrás
              </button>
          <Image
            src={experiencia.image}
            alt={experiencia.title}
            fill
            className='object-cover'
          />

          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/40 md:hidden' />
        </div>

        {/* Content Section - Full width on mobile, 50% on desktop */}
        <div className='flex-1 w-full md:w-1/2 px-4 sm:px-6 md:px-2 pb-6 md:py-4 overflow-y-scroll flex flex-col'>
        {/* Title and Category */}
        <div className='mb-4 md:mb-6'>
            <div className="flex flex-row justify-end">
                
                <div className='inline-block bg-primary-800/40 dark:bg-primary-800/40 backdrop-blur-md text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold'>
                    {experiencia.category}
                </div>

            </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3'>
            {experiencia.title}
          </h1>

          {/* Stats */}
          <div className='flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm md:justify-between'>
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

        {/* Mobile: x-axis scrollable layout */}
        <div className='md:hidden flex flex-row overflow-x-auto overflow-y-hidden space-x-3 flex-1'>

            {/* Description */}
            <div className='bg-primary-200/40 backdrop-blur-md rounded-2xl p-5 min-w-[240px] sm:min-w-[350px]'>
            <h2 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3'>
                Descripción
            </h2>
            <p className='text-gray-700 dark:text-white text-sm sm:text-base leading-relaxed line-clamp-3'>
                {experiencia.description}
            </p>
            </div>

            {/* Additional Details */}
            <div className='bg-primary-300/40 backdrop-blur-md rounded-2xl p-5 min-w-[300px] sm:min-w-[350px]'>
                <h3 className='text-gray-800 dark:text-white text-xs font-semibold uppercase mb-2'>
                Incluye
                </h3>
                <ul className='text-sm text-gray-900 dark:text-white space-y-1'>
                <li>✓ Guía especializado</li>
                <li>✓ Transporte incluido</li>
                <li>✓ Equipo de seguridad</li>
                </ul>
            </div>

            <div className='bg-primary-400/40 backdrop-blur-md rounded-2xl p-5 min-w-[300px] sm:min-w-[350px]'>
                <h3 className='text-gray-800 dark:text-white text-xs font-semibold uppercase mb-2'>
                Requisitos
                </h3>
                <ul className='text-sm text-gray-900 dark:text-white space-y-1'>
                <li>• Edad mínima: 12 años</li>
                <li>• Condición física: Media</li>
                <li>• Llevar bloqueador solar</li>
                <li>• Se recomienda llevar zapatos cómodos, gorra o sombrero para el sol.</li>
                
                </ul>
            </div>

            <div className='bg-primary-400/40 backdrop-blur-md rounded-2xl p-5 min-w-[300px] sm:min-w-[350px]'>
                <h3 className='text-gray-800 dark:text-white text-xs font-semibold uppercase mb-2'>
                No incluye
                </h3>
                <ul className='text-sm text-gray-900 dark:text-white space-y-1'>
                <li>• Alimentos ni bebidas no especificadas.</li>
                <li>• Seguro turístico.</li>
                <li>• Lo que no esté indicado en el apartado EL PRECIO `&ldquo;`INCLUYE`&ldquo;`.</li>
                </ul>
            </div>
        </div>

        {/* Desktop: 3-column grid layout */}
        <div className='hidden md:grid md:grid-cols-1 gap-2 flex-1'>
          {/* Description */}
          <div className='bg-orange-100/60 dark:bg-orange-900/30 backdrop-blur-md rounded-2xl p-5 md:py-2 md:px-4'>
            <h2 className='text-lg font-bold text-gray-900 dark:text-white mb-3'>
              Descripción
            </h2>
            <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
              {experiencia.description}
            </p>
          </div>

          {/* Incluye */}
          <div className='bg-orange-100/60 dark:bg-orange-900/30 backdrop-blur-md rounded-2xl p-5 md:py-2 md:px-4'>
            <h3 className='text-gray-800 dark:text-white text-xs font-bold uppercase mb-3 tracking-wider'>
              Incluye
            </h3>
            <ul className='text-sm text-gray-900 dark:text-white space-y-2'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-300 font-bold mt-0.5'>✓</span>
                <span>Guía especializado</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-300 font-bold mt-0.5'>✓</span>
                <span>Transporte incluido</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-300 font-bold mt-0.5'>✓</span>
                <span>Equipo de seguridad</span>
              </li>
            </ul>
          </div>

          {/* Requisitos */}
          <div className='bg-orange-100/60 dark:bg-orange-900/30 backdrop-blur-md rounded-2xl p-5 md:py-2 md:px-4'>
            <h3 className='text-gray-800 dark:text-white text-xs font-bold uppercase mb-3 tracking-wider'>
              Requisitos
            </h3>
            <ul className='text-sm text-gray-900 dark:text-white space-y-2'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-300 font-bold mt-0.5'>•</span>
                <span>Edad mínima: 12 años</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-300 font-bold mt-0.5'>•</span>
                <span>Condición física: Media</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-300 font-bold mt-0.5'>•</span>
                <span>Llevar bloqueador solar</span>
              </li>
            </ul>
          </div>


          {/* No incluye */}
          <div className='bg-orange-100/60 dark:bg-orange-900/30 backdrop-blur-md rounded-2xl p-5 md:py-2 md:px-4'>
            <h3 className='text-gray-800 dark:text-white text-xs font-bold uppercase mb-3 tracking-wider'>
              No incluye
            </h3>
            <ul className='text-sm text-gray-900 dark:text-white space-y-2'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-300 font-bold mt-0.5'>•</span>
                <span>Edad mínima: 12 años</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-300 font-bold mt-0.5'>•</span>
                <span>Condición física: Media</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-300 font-bold mt-0.5'>•</span>
                <span>Llevar bloqueador solar</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default AdicionalDetalle;