"use client"

import React from 'react';
import HeroItinerario from '@/sections/HeroItinerario';
import Usage from '@/components/Layout/Navbar/usage';
import CustomCursor from '@/Componentes/utils/CustomCursor';
import WhatsappButton from '@/Componentes/utils/WhatsappButton';
import DarkModeButton from '@/Componentes/utils/DarkModeButton';
import Experiencias from '@/sections/Experiencias';

import Image from 'next/image';
import image1 from '@/assets/Portadas/HeroImage.webp';


import { FaFacebookF, FaYoutube, FaInstagram, FaPhone } from "react-icons/fa6";
import ActividadesAventura from '@/sections/ActividadesAventura';



function Page() {
    // const [emblaRef] = useEmblaCarousel()

  return (
    <>
        <div className='fixed h-[70vh] bottom-0 w-24 hidden lg:flex flex-col justify-between p-10 items-center z-40'>
            <div className='flex items-center -rotate-90 gap-8'>
            <p>Premium</p>
            <div className='w-20 h-0.5 bg-black/50 dark:bg-white '></div>
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

      <div className="wrapper">
            <Usage />
            <CustomCursor />
            <DarkModeButton />
            <WhatsappButton />
        <HeroItinerario />

        <Experiencias />
        <ActividadesAventura />

        {/*
            <section className='flex flex-col '>
            <div className='h-dvh lg:h-screen bg-gray-400/40 flex justify-center items-center'>
                 <div className="rounded-xl w-[460px]">
                    <div className="h-[300px] w-full px-2 rounded-t-2xl overflow-hidden">
                        <Image
                            src={image1}
                            alt="Hoteles Barrancas"
                            width={460}
                            height={300}
                            priority
                            className="w-full h-full object-cover rounded-t-2xl"
                            />
                    </div>
                    
                    <div className='flex flex-1 flex-col w-full px-2 bg-white/20 py-4 rounded-b-2xl'>
                        <div className="flex flex-row justify-between items-center">
                            <span className='text-2xl font-nohemi'>Title content</span>
                            <button className='border border-gray-400 rounded-full px-4 py-2'>Tag content</button>
                        </div>
                        <div className='w-full flex flex-col px-2 py-2 space-y-2 font-nohemi'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Explicabo ducimus architecto earum. modi impedit explicabo porro aperiam.
                            </p>
                            <span className='font-bold font-nohemi'>
                                content variado
                            </span>
                        </div>
                        <button className='w-full bg-black text-white rounded-full py-2'>Click aqui</button>
                    </div>
                </div> 
                
            </div>
            
        </section>
        */}
      </div>
    </>
  )
}

export default Page