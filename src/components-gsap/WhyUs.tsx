'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import CardsMovibles2 from './CardsMovibles2';

gsap.registerPlugin(SplitText);


const cardData: [CardData, CardData] = [
    {
        title: 'Asesoría',
        description: 'Creamos tu paquete a Barrancas del Cobre a medida. Te escuchamos, diseñamos tu ruta ideal y te damos atención exclusiva desde el primer contacto.',
        buttonText: '1',
        buttonLink: 'https://www.youtube.com/',
    },
    {
        title: 'Exclusividad',
        description: 'Alojamientos únicos y experiencias premium. Tu paquete a Barrancas del Cobre se vive con el nivel de detalle, privacidad y confort que mereces.',
        buttonText: '2',
        buttonLink: 'https://www.youtube.com/',
    },
];

const cardData2: [CardData, CardData] = [
    {
        title: 'Experiencia',
        description: 'Más de 20 años creando recuerdos. Con aliados expertos y visión internacional, tu paquete a Barrancas del Cobre con calidad en cada paso',
        buttonText: '3',
        buttonLink: 'https://www.youtube.com/',
    },
    {
        title: 'Soporte 24/7',
        description: 'Nuestro equipo te acompaña desde tu reserva hasta tu regreso. Viaja tranquilo en Chepe primera clase y vive tu experiencia sin preocupaciones.',
        buttonText: '4',
        buttonLink: 'https://www.youtube.com/',
    },
];

interface CardData {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function WhyUs() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!titleRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const split = new SplitText(titleRef.current!, { type: 'chars' });

                        gsap.from(split.chars, {
                            duration: 0.8,
                            opacity: 0,
                            y: -20,
                            stagger: 0.05,
                            ease: 'power2.out'
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(titleRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <section className='flex flex-col panel h-[100dvh] relative snap-start w-full rounded-lg top-0 lg:overflow-visible'>
            <div className='h-40 sm:h-40 md:h-48 lg:h-[280px] flex flex-col justify-center text-center sticky top-0 left-0 items-center z-20 pt-36 sm:pt-32 md:pt-40'>
                <h4 ref={titleRef} className='text-center text-black dark:text-white font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-[280px]'>Porque Nosotros</h4>
                <span className="text-black dark:text-white font-copyright text-sm sm:text-lg md:text-xl cursor-default">
                    4 Razones del porqué somos los mejores.
                </span>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center w-full pl-4 md:pl-12 lg:pl-18 2xl:pl-24 pr-4 md:pr-12 lg:pr-18 2xl:pr-24 gap-0.5 sm:gap-2 mb-[15%] md:mb-[5%]'>
                <CardsMovibles2 cards={cardData} instanceId="set1" />
                <CardsMovibles2 cards={cardData2} instanceId="set2" />
            </div>
            <div className="h-[5%] md:hidden" />
        </section>
    );
}

