'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import LogoCarousel from './LogoCarousel';
import StarBorder from '../components/StarBorder';
import StarBorderSustitute from '../components/StarBorderSustitute';

gsap.registerPlugin(SplitText);

const About = () => {
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
        <>
            <section className="panel h-screen relative snap-start ">

                {/* <div className='shape absolute w-full h-[60vh] left-0 right-0 rotate-180'></div> */}
                <div className="relative z-20 h-full w-full flex flex-col justify-start lg:p-28 xl:p-40 ">
                    <div className='h-32 sm:h-40 md:h-48 flex flex-col sticky top-0 left-0 pt-36 sm:pt-32 md:pt-40 align-center justify-center items-center text-center max-w-[90%]'>
                        <h4 ref={titleRef} className='text-black font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none min-w-[280px]'>
                            Sobre Nosotros</h4>
                        <span className="opacity-50 font-copyright text-base sm:text-xl cursor-default min-w-[280px]">
                            Conoce porqué somos los mejores.
                        </span>
                    </div>
                    <div className="flex-1 relative z-20 flex flex-col">
                        <div className='absolute inset-0 z-10 backdrop-blur-2xl bg-white/30 rounded-tr-3xl' />
                        <section className="relative z-20 py-4 sm:py-8 h-full flex flex-col justify-center items-center text-center">
                            <div className='flex flex-col md:flex-row opacity-80 gap-4 md:gap-12 lg:px-12 sm:px-4 max-w-[80%]'>
                                <p className='text-sm sm:text-base lg:text-lg 2xl:text-xl text-black text-left'>
                                    En Barrancas del Cobre PREMIUM® diseñamos cada paquete a Barrancas del Cobre como una experiencia transformadora. Con más de 20 años de historia, conectamos a viajeros con la Sierra Tarahumara, combinando cultura viva, confort total y atención personalizada. Honramos el paisaje, la emoción del viaje y el deseo de descubrirlo todo.
                                </p>
                                <p className='hidden sm:flex text-base lg:text-lg 2xl:text-xl text-black text-center'>
                                    Nuestro compromiso es ofrecer experiencias únicas. Cuidamos cada detalle: desde el paisaje hasta la calidez en el servicio. En tu paquete a Barrancas del Cobre, viajas en Chepe primera clase, con alojamientos selectos y atención experta. Barrancas del Cobre PREMIUM® transforma el viaje en algo memorable y auténtico.
                                </p>
                            </div>
                            <div className='flex flex-row my-4 gap-2 sm:gap-4 justify-center items-center overflow-visible'>
                                <StarBorderSustitute textSize='text-sm' width='w-26' height='h-12'>Conoce más</StarBorderSustitute>
                                <StarBorder textSize='text-sm' width='w-26' height='h-12' />
                            </div>
                            <div className='relative w-full mt-4'>
                                <div className='relative z-20 flex flex-col gap-0'>
                                    <LogoCarousel direction="ltr" />
                                    <LogoCarousel direction="rtl" />
                                </div>
                                <div className='absolute inset-0 z-10 rounded-3xl' />
                            </div>
                        </section>
                    </div>
                </div>
                <div className='shape-variant absolute w-full h-[33%] left-0 right-0 bottom-0 rotate-0 z-0' />

            </section>
        </>
    )
}

export default About


