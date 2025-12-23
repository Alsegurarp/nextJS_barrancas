'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaFaceFrown } from 'react-icons/fa6';
import StarBorderButton from '@/components/StarBorderSustitute';
import StarBorder from '@/components/StarBorder';

export default function NotFound() {
  const router = useRouter();

  return (
    <section className='panel relative snap-start w-full h-dvh flex items-center justify-center px-4 md:px-6 lg:px-8 py-12'>
      <div className='w-full max-w-2xl text-center bg-gray-300/30 backdrop-blur-md opacity-90 p-4 rounded-2xl'>
        <div className='mb-8'>
          <div className='text-8xl md:text-9xl font-bold text-primary-700 dark:text-primary-500 mb-4'>
            404
          </div>
          <FaFaceFrown className='text-6xl md:text-7xl text-gray-900 dark:text-gray-600 mx-auto' />
        </div>

        <h1 className='text-4xl md:text-5xl font-bold text-black dark:text-white mb-4'>
          Página no encontrada
        </h1>

        <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8'>
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className='space-y-4'>
          <div className='flex flex-col md:flex-row gap-4 justify-center'>
            
            <StarBorder link='/contacto'>
                Volver atrás
            </StarBorder>
            
            <StarBorderButton onClick={() => router.push('/')}>
                Ir al inicio
            </StarBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
