'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebookF, FaPhone, FaSpotify, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import StarBorderButton from '@/components/StarBorderSustitute';
import StarBorder from '@/components/StarBorder';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Footer: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Title animation with Intersection Observer
    if (titleRef.current) {
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
    }
  }, []);

  useEffect(() => {
    const letters = document.querySelectorAll<HTMLElement>('.letter');
    const JAPONLetters = document.querySelectorAll<HTMLElement>('.JAPON-letter');
    const JAPONContainer = document.querySelector<HTMLElement>('.JAPON-container');
    const animatedText = document.querySelector<HTMLElement>('#animated-text');

    if (!animatedText) {
      console.error('Animated text container not found.');
      return;
    }

    if (!letters.length) {
      console.error('No letters found for PREMIUM animation.');
      return;
    }

    if (!JAPONLetters.length) {
      console.error('No letters found for JAPÓN animation.');
      return;
    }

    if (!JAPONContainer) {
      console.error('JAPÓN container not found.');
      return;
    }

    let isAnimating = false;

    // Configure each letter of PREMIUM
    letters.forEach((letter) => {
      gsap.set(letter, { transformOrigin: 'center center' });
    });

    // Function to execute the animation
    const runAnimation = () => {
      if (isAnimating) return;
      isAnimating = true;

      // Main timeline
      const mainTimeline = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        },
      });

      mainTimeline
        // 1. Animate PREMIUM
        .to(letters, {
          color: '#8c2b2b',
          WebkitTextStroke: '1px #8c2b2b',
          rotationY: 180,
          duration: 0.5,
          ease: 'power2.inOut',
          force3D: true,
          stagger: 0.1,
        })
        // 2. Keep PREMIUM visible
        .to(letters, {
          color: 'transparent',
          stroke: '#8c2b2b',
          WebkitTextStroke: '1px #8c2b2b',
          strokeWidth: '1px',
          rotationY: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          force3D: true,
          stagger: 0.1,
          delay: 0.3,
          pointerEvents: 'none', // Disable interaction after fade out
        })
        // 3. Make the JAPÓN container visible
        .to(
          JAPONContainer,
          {
            opacity: 1,
            duration: 0.5,
          },
          '-=0.2'
        )
        // 4. Animate each JAPÓN letter from top to bottom
        .to(
          JAPONLetters, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.06
        }, '-=0.1');
    };

    // Function to reset the animation
    const resetAnimation = () => {
      gsap.set(JAPONContainer, {
        opacity: 0,
      });
      gsap.set(JAPONLetters, {
        opacity: 0,
        y: 0, // Clear the y transform, don't use translate-y
        clearProps: 'y'
      });
      // Re-enable pointer events when resetting
      gsap.set(letters, { pointerEvents: 'auto' });
    };

    // ScrollTrigger that repeats on enter/leave
    ScrollTrigger.create({
      trigger: animatedText,
      start: 'top 80%',
      end: () => `+=${animatedText?.offsetWidth || 0}`,
      onEnter: runAnimation,
      onEnterBack: runAnimation,
      onLeave: resetAnimation,
      onLeaveBack: resetAnimation,
      // markers: true,
    });

    // Activate hover effects for PREMIUM
    letters.forEach((letter) => {
      const tl = gsap.timeline({ paused: true });

      tl.to(letter, {
        color: '#8c2b2b',
        WebkitTextStroke: '1px #8c2b2b',
        strokeWidth: '1px',
        rotationY: 180,
        duration: 1,
        ease: "power4.out",
        force3D: true,
      });

      let isHovering = false;

      letter.addEventListener('mouseenter', () => {
        if (isAnimating) return; // Prevent interaction during animation
        isHovering = true;
        // Play animation nonstop
        if (!tl.isActive()) {
          tl.play();
        }
      });

      letter.addEventListener('mouseleave', () => {
        isHovering = false;
        // Once animation is done and mouse leaves, reverse it
        tl.eventCallback('onComplete', () => {
          if (!isHovering) {
            tl.reverse();
          }
        });
        // If animation is still playing, let it complete then reverse
        if (tl.isActive()) {
          // Animation will reverse when it completes (see callback above)
        } else {
          // Animation already completed, so reverse immediately
          tl.reverse();
        }
      });
    });
  }, []);

  return (
    <>
      <footer className="h-[100dvh] grid grid-cols-1 grid-rows-[auto_1fr_auto] relative snap-start panel bg-white">
        {/* Header Section */}
        <div className='flex flex-col justify-end items-center z-20 bg-white pt-24 sm:pt-32 md:pt-40 pb-2 sm:pb-4'>
          <h4 ref={titleRef} className='text-black font-semibold text-2xl min-[420px]:text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none text-center leading-tight'>
            Viajar Premium.<br />Vivir profundo.
          </h4>
        </div>

        {/* Main Content - Centered Stack */}
        <div className="w-full grid grid-cols-1 place-content-center place-items-center gap-4 sm:gap-6 overflow-hidden px-4 py-2">

          {/* Description */}
          <span className="text-black relative z-30 opacity-50 font-copyright text-sm sm:text-lg md:text-xl cursor-default text-center max-w-[90%] sm:max-w-[80%]">
            Diseña tu viaje con nosotros y descubre la magia de Barrancas del Cobre como nunca antes.
          </span>

          {/* Buttons */}
          <div className="flex flex-row gap-4 sm:gap-6 justify-center items-center z-30 w-full">
            <StarBorderButton textSize='text-xs xs:text-sm' width='w-32 xs:w-36 sm:w-40' height='h-10 xs:h-12'>
              Diseñar mi viaje
            </StarBorderButton>
            <StarBorder textSize='text-xs xs:text-sm' width='w-32 xs:w-36 sm:w-40' height='h-10 xs:h-12'>
              Viajar ahora
            </StarBorder>
          </div>

          {/* Animated Brand Logo */}
          <section className="flex flex-col items-center w-full overflow-visible z-30 text-center py-2">
            {/* BARRANCAS */}
            <div
              className="flex justify-center items-center text-center perspective-midrange opacity-0 mb-0 JAPON-container cursor-default overflow-hidden leading-none"
              id="JAPON-text"
            >
              {[..."BARRANCAS"].map((char, i) => (
                <span key={i} className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter tracking-widest">
                  {char}
                </span>
              ))}
            </div>

            {/* PREMIUM */}
            <div
              className="flex justify-center self-center items-center perspective-midrange w-full px-2 overflow-hidden leading-none mt-[-5px] sm:mt-[-10px]"
              id="animated-text"
            >
              {[..."PREMIUM"].map((char, i) => (
                <span key={i} className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-nohemi inline-block cursor-pointer text-white font-bold letter shrink-0" style={{ WebkitTextStroke: '1px #8c2b2b', paintOrder: 'stroke' }}>
                  {char}
                </span>
              ))}
              <span className="text-xs xs:text-sm sm:text-base text-primary-800 leading-none inline-block shrink-0 self-start mt-1" style={{ WebkitTextStroke: '0.5px #8c2b2b' }}>
                ®
              </span>
            </div>
          </section>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 sm:gap-4 z-30">
            <div className='bg-primary-800 p-1 rounded-full'>
              <FaFacebookF className="hover:text-primary-700 opacity-80 text-lg sm:text-xl text-white cursor-pointer" onClick={() => window.open('https://www.facebook.com/turismosantafeoficial', '_blank')} />
            </div>
            <div className='bg-primary-800 p-1 rounded-full'>
              <FaTiktok className="hover:text-primary-700 opacity-80 text-lg sm:text-xl text-white cursor-pointer" onClick={() => window.open('https://www.tiktok.com/@viajespremium', '_blank')} />
            </div>
            <div className='bg-primary-800 p-1 rounded-full'>
              <FaInstagram className="hover:text-primary-700 opacity-80 text-lg sm:text-xl text-white cursor-pointer" onClick={() => window.open('https://www.instagram.com/viajespremium.oficial', '_blank')} />
            </div>
            <div className='bg-primary-800 p-1 rounded-full'>
              <FaYoutube className="hover:text-primary-700 opacity-80 text-lg sm:text-xl text-white cursor-pointer" onClick={() => window.open('https://www.youtube.com/@viajespremiumelevatuvida', '_blank')} />
            </div>
            <div className='bg-primary-800 p-1 rounded-full' onClick={() => window.open('https://open.spotify.com/show//4VmUesUcK08SIuxLxsl3dF?si=8fdd6b9202bc4596', '_blank')}>
              <FaSpotify className="hover:text-primary-700 opacity-80 text-lg sm:text-xl text-white cursor-pointer" />
            </div>
          </div>

          {/* Contact Icons Stack */}
          <div className="flex flex-col items-center gap-1.5 z-30">
            <a className="flex items-center gap-2 cursor-pointer group" onClick={() => window.open('tel:+52 55 5339 0110', '_blank')}>
              <FaPhone className='text-sm text-black group-hover:text-primary-800' />
              <span className='text-sm font-semibold text-black'>+52 55 5339 0122</span>
            </a>
            <a className="flex items-center gap-2 cursor-pointer group" onClick={() => window.open('https://wa.me/5215514648435', '_blank')}>
              <FaWhatsapp className='text-sm text-black group-hover:text-primary-800' />
              <span className='text-sm font-semibold text-black'>+52 55 1464 8435</span>
            </a>
            <a className="flex items-center gap-2 cursor-pointer group" href="mailto:reservaciones@viajespremium.com.mx">
              <IoIosMail className='text-sm text-black group-hover:text-primary-800' />
              <span className='text-sm font-semibold text-black'>reservaciones@viajespremium.com.mx</span>
            </a>
          </div>
          {/* Footer Bottom */}
          <div className="w-full h-px bg-black opacity-20"></div>
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-2 text-center">
            <span className="text-xs font-semibold underline cursor-pointer hover:text-primary-800">Aviso de privacidad</span>
            <span className="text-[10px] sm:text-xs opacity-60 max-w-xl">
              © 2025 Todas las marcas y servicios que se ofrecen son propiedad de Barrancas PREMIUM® Consulte Términos y Condiciones...
            </span>
          </div>
        </div>
        <div className="h-[8dvh]"></div>
      </footer>
    </>
  );
};

export default Footer;


