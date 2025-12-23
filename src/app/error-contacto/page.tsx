'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaExclamationCircle } from 'react-icons/fa';

export default function ErrorContacto() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('message');

  useEffect(() => {
    // Redirect to home after 10 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className='panel relative snap-start w-full h-dvh flex items-center justify-center px-4 md:px-6 lg:px-8 py-12'>
      <div className='w-full max-w-2xl text-center'>
        <div className='mb-8'>
          <FaExclamationCircle className='text-6xl md:text-7xl text-red-500 mx-auto animate-pulse' />
        </div>

        <h1 className='text-4xl md:text-5xl font-bold text-black dark:text-white mb-4'>
          ¡Oops!
        </h1>

        <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6'>
          Hubo un error al enviar tu solicitud.
        </p>

        <p className='text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8'>
          {errorMessage || 'Por favor, intenta de nuevo más tarde o ponte en contacto con nosotros directamente.'}
        </p>

        <div className='space-y-4'>
          <p className='text-sm text-gray-500 dark:text-gray-500'>
            Serás redirigido a la página principal en unos segundos...
          </p>

          <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <button
              onClick={() => router.back()}
              className='inline-block bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300'
            >
              Volver al formulario
            </button>
            <button
              onClick={() => router.push('/')}
              className='inline-block bg-primary-700 hover:bg-primary-800 dark:hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300'
            >
              Ir al inicio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
