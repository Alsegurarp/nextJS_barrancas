import React from 'react';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
}


  const services: ServiceCard[] = [
    {
      id: 1,
      title: 'Nuestros socios',
      description: 'Selecta red de socios en México y en todo el mundo, elegidos a detalle para brindarte la mejor experiencia de viaje para ti y tu familia.'
    },
    {
      id: 2,
      title: 'Misión de la Empresa',
      description: 'Nuestra misión es proporcionar las experiencias de viaje más excepcionales a nuestros clientes. Siempre ofreciendo los mejores destinos del mundo.'
    },
    {
      id: 3,
      title: 'Visión de la Empresa',
      description: 'Ser lideres en las experiencias de viaje en todo el mundo, manteniendo un compromiso con la calidad y satisfacción de nuestros viajeros.'
    },
    {
      id: 4,
      title: 'Actividades Turísticas',
      description: 'Actividades varían según el destino que elijas visitar, pero te garantizamos una calidad de servicio de cinco estrellas y la satisfacción.'
    }
  ];

function NuestrosServicios() {
  return (
    <section className='panel relative snap-start w-full min-h-dvh flex flex-col justify-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8'>
        <div>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-black dark:text-white mb-12 md:mb-16 text-center md:text-left'>
            Resolvemos tus dudas
          </h3>

          {/* Services Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 lg:gap-12'>
            {services.map((service) => (
              <div key={service.id} className='flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6'>
                {/* Icon Circle with Number */}
                <div className='w-16 h-16  rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg flex-shrink-0'>
                  <span className='text-2xl md:text-3xl font-bold text-white'>
                    {service.id}
                  </span>
                </div>

                {/* Service Title and Description */}
                <div>
                  <h4 className='text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white mb-2 md:mb-3'>
                    {service.title}
                  </h4>
                  <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default NuestrosServicios