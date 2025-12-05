'use client';

"use client"; // for framer useTime component

import React, { useEffect, useTransition } from 'react';
import gsap from 'gsap';

import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import StarBorderButton from '@/components/StarBorderSustitute';
import StarBorder from '@/components/StarBorder';


gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

function SecondSection() {

  useEffect(() => {
    // Create the split text animation
    const mySplitText = new SplitText('.split', { type: 'words' });

    const words = mySplitText.words;

    gsap.from(words, {
      yPercent: 100,
      stagger: 0.05,
      ease: "circ.out",
      duration: 0.15,
      opacity: 0,
      scrollTrigger: {
        trigger: '.split',
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: 'play reverse play reverse',
      }
    });

    // Handle window resize to refresh ScrollTrigger
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup: Kill the animation when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      mySplitText.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section className="panel h-screen relative snap-start justify-center items-center flex">
      <div className="container max-h-full justify-center items-center flex flex-col">
        <div className="overflow-hidden flex flex-col justify-center items-center text-center pt-6 px-1 sm:w-[80%] md:w-[65%]">
          <h2
            className='split text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-black leading-none m-0'>
            Los Viajes a Barrancas del Cobre no son solo un destino… son el silencio que buscabas y el recuerdo que te acompaña más allá del mapa.
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center pt-5">
          <div className="flex flex-col xs:flex-row  gap-4 sm:gap-6">
            <StarBorderButton>
              Diseña tu viaje
            </StarBorderButton>

            <StarBorder >
              Conoce más
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondSection

