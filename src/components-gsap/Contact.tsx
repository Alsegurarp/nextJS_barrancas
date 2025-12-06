'use client';

import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



const Contact = () => {
    return (
        <section className="panel h-[100dvh] relative snap-start">
            <div className='shape size-80 rotate-16 absolute right-48 top-24 '></div>
            <div className='backdrop-blur-3xl flex flex-col lg:flex-row items-center justify-between gap-2 pt-18 lg:px-60 lg:py-32 '>
                <p className='text-4xl lg:w-96 cursor-default'>Contáctanos</p>

                {/* Aqui va el footer */}
                <button className='glass-btn border-amber-50 shadow-xs size-72 rounded-full text-lg'>Diseña tu viaje</button>

                <div className=" lg:px-60 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <div className='lg:space-y-2'>
                        <p className='opacity-90 text-md lg:text-lg'>Numero</p>
                        <p className='opacity-80 text-sm md:text-md  text-gray-800'>563333333</p>
                    </div>
                    <div className='lg:space-y-2'>
                        <p className='opacity-90 text-md lg:text-lg'>Email</p>
                        <p className='opacity-80 text-sm md:text-md  text-gray-800'>reservaciones@viajespremium.com.mx</p>
                    </div>
                    <div className='lg:space-y-2'>
                        <p className='opacity-90 text-md lg:text-lg'>Social media</p>
                        <div className='space-x-8 cursor-pointer flex'>
                            <FaFacebookF className='hover:text-black opacity-80 text-gray-800' />
                            <FaYoutube className='hover:text-black opacity-80 text-gray-800' />
                            <FaInstagram className='hover:text-black opacity-80 text-gray-800' />
                        </div>
                    </div>

                </div>
                <footer className='lg:px-60 lg:py-10 opacity-50 flex flex-col lg:flex-row justify-between items-center gap-4'>
                    <div className='text-md lg:text-xl cursor-default text-primary-800'>&copy;2025 Todos los derechos reservados</div>
                    <div>
                        <p className='cursor-default text-primary-800'>Viajes Premium</p>
                        <div className='w-20 h-0.5 py-0.5 bg-primary-800/60'></div>
                        <p className='cursor-default text-primary-800'>CDMX</p>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Contact

