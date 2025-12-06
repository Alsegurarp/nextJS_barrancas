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
      <footer className="h-[100dvh] flex flex-col gap-0 relative snap-start panel">
        <div className='h-32 sm:h-40 md:h-48 flex flex-col justify-center sticky top-0 left-0 items-center z-20 bg-white pt-32 sm:pt-32 md:pt-40'>
          <h4 ref={titleRef} className='text-black font-semibold text-2xl min-[420px]:text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl cursor-default select-none text-center'>Viajar Premium.<br />Vivir profundo.</h4>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center space-y-2 overflow-hidden">
          <div className="flex flex-col gap-4">
            <span className="text-black relative z-30 opacity-50 font-copyright text-sm sm:text-lg md:text-xl cursor-default text-center">
              Diseña tu viaje con nosotros y descubre la magia de Barrancas del Cobre como nunca antes.
            </span>
            <div className="flex flex-row gap-4 sm:gap-6 justify-center items-center z-30">
              <StarBorderButton textSize='text-xs' width='w-30' height='h-10'>
                Diseñar mi viaje
              </StarBorderButton>

              <StarBorder textSize='text-xs' width='w-30' height='h-10'>
                Viajar ahora
              </StarBorder>
            </div>

            <section className="flex flex-col items-center w-full overflow-visible z-30">
              <div
                className="flex lg:gap-1 justify-start items-start text-start perspective-midrange opacity-0 mb-0 JAPON-container cursor-default overflow-hidden"
                id="JAPON-text"
              >
                <span className="text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter">
                  B
                </span>
                <span className="text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter">
                  A
                </span>
                <span className="text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter">
                  R
                </span>
                <span className="text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter">
                  R
                </span>
                <span className="text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3cr xl:text-5xl 2xl:text-6xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter">
                  A
                </span>
                <span className="text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter">
                  N
                </span>
                <span className="text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter">
                  C
                </span>
                <span className="text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter">
                  A
                </span>
                <span className="text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-nohemi font-semibold text-primary-800 inline-block opacity-0 translate-y-[-30px] JAPON-letter">
                  S
                </span>
              </div>

              <div
                className="flex gap-0.5 sm:gap-2 md:gap-2.5 lg:gap-1 xl:gap-2 2xl:gap-3 justify-center self-center items-start perspective-midrange w-full px-2 sm:px-4 overflow-hidden"
                id="animated-text"
              >
                <span className="text-lg xs:text-[10vw] min-[640px]:text-[9vw] min-[768px]:text-[8vw] min-[1024px]:text-[7vw] min-[1280px]:text-[6.5vw] leading-none font-nohemi inline-block cursor-pointer text-white font-bold letter shrink-0" style={{ WebkitTextStroke: '5px #8c2b2b', paintOrder: 'stroke' }}>
                  P
                </span>
                <span className="text-lg xs:text-[10vw] min-[640px]:text-[9vw] min-[768px]:text-[8vw] min-[1024px]:text-[7vw] min-[1280px]:text-[6.5vw] leading-none font-nohemi inline-block cursor-pointer text-white font-bold letter shrink-0" style={{ WebkitTextStroke: '5px #8c2b2b', paintOrder: 'stroke' }}>
                  R
                </span>
                <span className="text-lg xs:text-[10vw] min-[640px]:text-[9vw] min-[768px]:text-[8vw] min-[1024px]:text-[7vw] min-[1280px]:text-[6.5vw] leading-none font-nohemi inline-block cursor-pointer text-white font-bold letter shrink-0" style={{ WebkitTextStroke: '5px #8c2b2b', paintOrder: 'stroke' }}>
                  E
                </span>
                <span className="text-lg xs:text-[10vw] min-[640px]:text-[9vw] min-[768px]:text-[8vw] min-[1024px]:text-[7vw] min-[1280px]:text-[6.5vw] leading-none font-nohemi inline-block cursor-pointer text-white font-bold letter shrink-0" style={{ WebkitTextStroke: '5px #8c2b2b', paintOrder: 'stroke' }}>
                  M
                </span>
                <span className="text-lg xs:text-[10vw] min-[640px]:text-[9vw] min-[768px]:text-[8vw] min-[1024px]:text-[7vw] min-[1280px]:text-[6.5vw] leading-none font-nohemi inline-block cursor-pointer text-white font-bold letter shrink-0" style={{ WebkitTextStroke: '5px #8c2b2b', paintOrder: 'stroke' }}>
                  I
                </span>
                <span className="text-lg xs:text-[10vw] min-[640px]:text-[9vw] min-[768px]:text-[8vw] min-[1024px]:text-[7vw] min-[1280px]:text-[6.5vw] leading-none font-nohemi inline-block cursor-pointer text-white font-bold letter shrink-0" style={{ WebkitTextStroke: '5px #8c2b2b', paintOrder: 'stroke' }}>
                  U
                </span>
                <span className="text-lg xs:text-[10vw] min-[640px]:text-[9vw] min-[768px]:text-[8vw] min-[1024px]:text-[7vw] min-[1280px]:text-[6.5vw] leading-none font-nohemi inline-block cursor-pointer text-white font-bold letter shrink-0" style={{ WebkitTextStroke: '5px #8c2b2b', paintOrder: 'stroke' }}>
                  M
                </span>
                <span className="text-xs xs:text-sm min-[640px]:text-base min-[768px]:text-lg min-[1024px]:text-xl min-[1280px]:text-2xl text-primary-800 leading-none inline-block shrink-0" style={{ WebkitTextStroke: '0.5px #8c2b2b' }}>
                  ®
                </span>
              </div>
            </section>
          </div>
          <section className="w-full flex flex-col items-start">
            {/* Social and Contact Container */}
            <div className="w-full flex flex-col lg:flex-row-reverse items-center lg:items-start gap-4 pb-6 px-4 sm:px-6 md:px-8 lg:py-0 lg:pb-4">
              {/* Social Media */}
              <div className="flex flex-col items-center gap-3 w-full">
                {/* 
              <span className="text-sm sm:text-base md:text-lg font-semibold text-black">Redes Sociales</span>
              */}
                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
                  <div className='bg-primary-800 p-1 rounded-full'>
                    <FaFacebookF className="hover:text-primary-700 opacity-80 text-xl sm:text-2xl 2xl:text-3xl text-white border-2 border-primary-800 rounded-full bg-primary-800 p-0.5 cursor-pointer" onClick={() => window.open('https://www.facebook.com/turismosantafeoficial', '_blank')} />
                  </div>
                  <div className='bg-primary-800 p-1 rounded-full'>
                    <FaTiktok className="hover:text-primary-700 opacity-80 text-xl sm:text-2xl 2xl:text-3xl text-white border-2 border-primary-800 rounded-full bg-primary-800 p-0.5 cursor-pointer" onClick={() => window.open('https://www.tiktok.com/@viajespremium', '_blank')} />
                  </div>
                  <div className='bg-primary-800 p-1 rounded-full'>
                    <FaInstagram className="hover:text-primary-700 opacity-80 text-xl sm:text-2xl 2xl:text-3xl text-white border-2 border-primary-800 rounded-full bg-primary-800 p-0.5 cursor-pointer" onClick={() => window.open('https://www.instagram.com/viajespremium.oficial', '_blank')} />
                  </div>
                  <div className='bg-primary-800 p-1 rounded-full'>
                    <FaYoutube className="hover:text-primary-700 opacity-80 text-xl sm:text-2xl 2xl:text-3xl text-white border-2 border-primary-800 rounded-full bg-primary-800 p-0.5 cursor-pointer" onClick={() => window.open('https://www.youtube.com/@viajespremiumelevatuvida', '_blank')} />
                  </div>
                  <button className='bg-primary-800 p-1 rounded-full' onClick={() => window.open('https://open.spotify.com/show//4VmUesUcK08SIuxLxsl3dF?si=8fdd6b9202bc4596', '_blank')}>
                    <FaSpotify className="hover:text-primary-700 opacity-80 text-xl sm:text-2xl 2xl:text-3xl text-white border-2 border-primary-800 rounded-full bg-primary-800 p-0.5 cursor-pointer" />
                  </button>
                </div>
              </div>
              {/* Contact Info */}
              <div className="flex flex-col items-center lg:items-start lg:flex-row gap-2">
                {/* 
              <span className="text-sm sm:text-base md:text-lg font-semibold text-black">Contacto</span>
              */}
                <div className="flex flex-col lg:flex-row gap-1.5 text-black text-xs sm:text-sm md:text-base items-center lg:items-end">
                  <a className="flex items-center gap-2 lg:min-w-40 cursor-pointer" onClick={() => { window.open('tel:+52 55 5339 0110', '_blank'); }}>
                    <span>
                      <FaPhone className='text-base lg:text-sm font-semibold hover:text-primary-800' />
                    </span>
                    <span className='lg:text-sm font-semibold'>+52 55 53390122</span>
                  </a>
                  <span className="flex items-center gap-2 lg:min-w-40 cursor-pointer" onClick={() => window.open('https://wa.me/5215514648435', '_blank')}>
                    <span>
                      <FaWhatsapp className='text-base lg:text-sm font-semibold hover:text-primary-800' />
                    </span>
                    <span className='lg:text-sm font-semibold'>+52 55 1464 8435</span>
                  </span>
                  <a className="flex items-center gap-2 lg:min-w-[140px]" href="mailto:reservaciones@viajespremium.com.mx?subject=Consulta%20de%20promociones%20a%20Japon&body=Quiero%20conocer%20mas%20de%20sus%20promociones%20para%20viajar%20a%20japon%2C%20Cont%C3%A1ctenme" aria-label="Enviar correo">
                    <span>
                      <IoIosMail className='text-base lg:text-sm font-semibold' />
                    </span>
                    <span className='lg:text-sm font-semibold'>reservaciones@viajespremium.com.mx</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="w-full px-4 sm:px-6 md:px-8">
              <div className="w-full border-t border-black" />
            </div>
            {/* Bottom Bar */}
            <div className="w-full flex flex-col lg:flex-row lg:w-4/5 items-center lg:justify-between gap-2 px-4 sm:px-6 md:px-8">
              <div className="text-xs sm:text-sm md:text-base text-black font-semibold underline cursor-pointer text-center">Aviso de privacidad</div>
              <div className="text-xs sm:text-sm lg:max-w-[400px] 2xl:max-w-[720px] text-black text-center 2xl:text-end">
                © 2025 Todas las marcas y servicios que se ofrecen son propiedad de Barrancas PREMIUM® Consulte Términos y Condiciones en el Contrato de Adhesión ante PROFECO con número 7735-2015 & 7180-2015
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;


