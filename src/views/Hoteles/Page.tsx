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
import Precios from '@/sections/Precios';
import IncluyeNoIncluye from '@/sections/IncluyeNoIncluye';



function Page() {
    // const [emblaRef] = useEmblaCarousel()

  return (
    <>

      <div className="wrapper">
            <Usage />
            <CustomCursor />
            <DarkModeButton />
            <WhatsappButton />
        <HeroItinerario />

        <Experiencias />
        <ActividadesAventura />
        <Precios
          title="Precios de experiencias"
          subtitle="Elige la temporada perfecta para tu viaje"
          sections={[
            {
              title: 'Temporada Regular',
              items: [
                { label: 'Habitación Doble', price: '$41,353' },
                { label: 'Habitación Sencilla', price: '$61,919' },
                { label: 'Habitación Triple', price: '$36,752' },
                { label: 'Menor de 2 a 11 años', price: '$23,834' },
              ],
              onReserve: () => console.log('Reserve clicked - Temporada Regular'),
            },
            {
              title: 'Temporada Alta',
              items: [
                { label: 'Habitación Doble', price: '$52,500' },
                { label: 'Habitación Sencilla', price: '$73,200' },
                { label: 'Habitación Triple', price: '$47,800' },
                { label: 'Menor de 2 a 11 años', price: '$31,450' },
              ],
              onReserve: () => console.log('Reserve clicked - Temporada Alta'),
            },
            {
              title: 'Temporada de Cerezos',
              items: [
                { label: 'Habitación Doble', price: '$58,750' },
                { label: 'Habitación Sencilla', price: '$82,100' },
                { label: 'Habitación Triple', price: '$54,300' },
                { label: 'Menor de 2 a 11 años', price: '$36,200' },
              ],
              onReserve: () => console.log('Reserve clicked - Temporada de Cerezos'),
            },
            {
              title: 'Temporada Navidad',
              items: [
                { label: 'Habitación Doble', price: '$67,200' },
                { label: 'Habitación Sencilla', price: '$94,500' },
                { label: 'Habitación Triple', price: '$62,100' },
                { label: 'Menor de 2 a 11 años', price: '$41,400' },
              ],
              onReserve: () => console.log('Reserve clicked - Temporada Navidad'),
            },
          ]}
        />
        <IncluyeNoIncluye
            title="Incluye y no incluye"
            subtitle="Mira qué está incluido en tu experiencia"
            incluye={[
                { label: 'Incluye' },
                { label: 'No incluye' },
                { label: 'Importante' }
            ]}
            />



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