'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

export default function Gracias() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home after 8 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 8000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className='panel relative snap-start w-full h-dvh flex items-center justify-center px-4 md:px-6 lg:px-8 py-12'>
      <div className='w-full max-w-2xl text-center'>
        <div className='mb-8'>
          <FaCheckCircle className='text-6xl md:text-7xl text-green-500 mx-auto animate-pulse' />
        </div>

        <h1 className='text-4xl md:text-5xl font-bold text-black dark:text-white mb-4'>
          ¡Gracias!
        </h1>

        <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6'>
          Hemos recibido tu solicitud exitosamente.
        </p>

        <p className='text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8'>
          Nos pondremos en contacto contigo pronto para ayudarte a planificar tu increíble viaje a las Barrancas.
        </p>

        <div className='space-y-4'>
          <p className='text-sm text-gray-500 dark:text-gray-500'>
            Serás redirigido a la página principal en unos segundos...
          </p>

          <button
            onClick={() => router.push('/')}
            className='inline-block bg-primary-700 hover:bg-primary-800 dark:hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300'
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </section>
  );
}
