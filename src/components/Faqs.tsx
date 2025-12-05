'use client';

import VerticalAccordion from '@/components-gsap/VerticalAccordion'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

function Faqs() {
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
        <section className="panel h-screen relative snap-start flex flex-col">
            <div className="h-32 sm:h-40 md:h-48 flex flex-col justify-center sticky top-0 left-0 items-center bg-white pt-28 sm:pt-32 md:pt-40">
                <h4 ref={titleRef} className='text-black font-semibold text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none'>Faqs</h4>
                <span className="opacity-50 font-copyright text-sm sm:text-lg md:text-xl cursor-default">
                    5 dudas de nuestros mejores clientes.
                </span>
            </div>
            <div className="flex-3/4 w-full backdrop-blur-3xl flex flex-col justify-start p-2 xl:p-40 z-20">
                <VerticalAccordion />
            </div>
            <div className='shape absolute w-full h-1/2 right-20 bottom-0 rotate-0 z-10' />
        </section>
    )
}

export default Faqs

