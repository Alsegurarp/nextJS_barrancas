'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AiFillAlipaySquare, AiFillBug, AiFillAndroid, AiFillCodepenSquare, AiFillExperiment, AiFillFire } from "react-icons/ai";

interface LogoCarouselProps {
    direction?: 'ltr' | 'rtl';
}

function LogoCarousel({ direction = 'rtl' }: LogoCarouselProps) {

    const logos = [
        <AiFillAlipaySquare className='text-4xl' />,
        <AiFillBug className='text-4xl' />,
        <AiFillAndroid className='text-4xl' />,
        <AiFillCodepenSquare className='text-4xl' />,
        <AiFillExperiment className='text-4xl' />,
        <AiFillFire className='text-4xl' />
    ]

    const extendedLogos = [...logos, ...logos, ...logos]

    const xAnimation = direction === 'ltr' ? '33.33%' : '-33.33%';

    return (
        <div className="container-full overflow-visible cursor-pointer py-2 flex justify-center z-20">
            <motion.div
                className="flex"
                style={{
                    zIndex: 20,
                    width: 'max-content',
                    display: 'flex',
                    gap: 'clamp(2rem, 8vw, 4rem)',
                }}
                initial={{ x: 0 }}
                animate={{ x: xAnimation }}
                transition={{
                    x: {
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                    }
                }}>
                {extendedLogos.map((item, index) => (
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 flex items-center justify-center object-contain shrink-0 z-20" key={index}>
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default LogoCarousel

