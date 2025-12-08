'use client';

import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram, FaPhone } from "react-icons/fa6";
import TopHero from '@/components-gsap/TopHero';
// import Hero from '@/components-gsap/Hero';
import About from '@/components-gsap/About';
// import Contact from '@/components-gsap/Contact';
import CursorImages from '@/components-gsap/CursorImages';
import Usage from '@/Layout/Navbar/usage';
import VideoPlayer from '@/components-gsap/VideoPlayer';
//import ImageGallery from '@/components-gsap/imageGallery';
import SecondSection from '@/views/Home/SectionsHome/SecondSection'

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from '@/Componentes/utils/CustomCursor';
import Carrucel from '@/components-gsap/Carrucel';
import BestSellersCards from '@/components-gsap/BestSellersCards';
import Faqs from '@/components/Faqs';
import Footer from '@/components-gsap/Footer';
import WhyUs from '@/components-gsap/WhyUs';
import Clientes from '@/components-gsap/Clientes';
import WhatsappButton from '@/Componentes/utils/WhatsappButton';
import DarkModeButton from '@/Componentes/utils/DarkModeButton';


function IdeaPage() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        ScrollTrigger.defaults({
            scroller: ".wrapper",
        })

        gsap.utils.toArray(".panel").forEach((panel, index) => {
            gsap.to(`.bullet-${index + 1}`, {
                background: "#8c2b2b",
                scrollTrigger: {
                    toggleActions: 'play reverse play reverse',
                    trigger: panel as gsap.DOMTarget,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    // markers: true,
                }
            });
        });
    });


    return (
        <>
            <div className='fixed h-[70vh] bottom-0 w-24 hidden lg:flex flex-col justify-between p-10 items-center z-40'>
                <div className='flex items-center -rotate-90 gap-8'>
                    <p>Premium</p>
                    <div className='w-20 h-0.5 bg-black/50 '></div>
                    <p>Mex</p>
                </div>
                <div className='space-y-8 *:cursor-pointer'>
                    <FaFacebookF className='hover:text-primary-800' onClick={() => {
                        window.open('https://www.facebook.com/barrancasdelcobrepremiumoficial', '_blank');
                    }} />
                    <FaYoutube className='hover:text-primary-800' onClick={() => {
                        window.open('https://www.youtube.com/@viajespremiumelevatuvida', '_blank');
                    }} />
                    <FaInstagram className='hover:text-primary-800' onClick={() => {
                        window.open('https://www.instagram.com/barrancaspremium/', '_blank');
                    }} />
                    <FaPhone className='hover:text-primary-800' onClick={() => {
                        window.open('tel:+1234567890', '_blank');
                    }} />
                </div>
            </div>
            <div className="hidden lg:block fixed space-y-4 top-2/4 right-4 lg:right-10 z-40">
                <div className="bg-primary-200 size-2 rounded-full bullet-1" />
                <div className="bg-primary-200 size-2 rounded-full bullet-2" />
                <div className="bg-primary-200 size-2 rounded-full bullet-3" />
                <div className="bg-primary-200 size-2 rounded-full bullet-4" />
                <div className="bg-primary-200 size-2 rounded-full bullet-5" />
                <div className="bg-primary-200 size-2 rounded-full bullet-6" />
                <div className="bg-primary-200 size-2 rounded-full bullet-7" />
                <div className="bg-primary-200 size-2 rounded-full bullet-8" />
                <div className="bg-primary-200 size-2 rounded-full bullet-9" />
                <div className="bg-primary-200 size-2 rounded-full bullet-10" />
                <div className="bg-primary-200 size-2 rounded-full bullet-11" />
            </div>

            <div className="wrapper">
                <Usage />
                <CustomCursor />
                <DarkModeButton />
                <WhatsappButton />
                <TopHero />
                {/*
                    <Hero />
                */}
                <SecondSection />
                <VideoPlayer />
                {/* Mayor a 1200px se muestra el cursorImage, menor a eso, no*/}
                <CursorImages />
                <BestSellersCards />
                {/* <PorqueElegirnos />
                    <ImageGallery />
                */}
                <Carrucel />
                <About />
                {/* porque nosotros */}
                <WhyUs />

                {/* clientes */}
                <Clientes />
                <Faqs />
                {/*
                    <Contact />
                */}
                <Footer />
            </div>
        </>
    );
}

export default IdeaPage


