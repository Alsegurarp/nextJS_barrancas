'use client';

import StarBorder from '@/components/StarBorder';
import StarBorderButton from '@/components/StarBorderSustitute';
import React, { useState } from 'react';

interface CardData {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

interface CardsMoviblesProps {
    cards: [CardData, CardData];
    instanceId?: string;
}

function CardsMovibles2({ cards, instanceId = 'default' }: CardsMoviblesProps) {
    const [expandido1, setExpandido1] = useState(instanceId === 'set1');
    const [expandido2, setExpandido2] = useState(instanceId === 'set2');

    function handleContenido1() {
        if (!expandido1) {
            setExpandido1(true);
            setExpandido2(false);
        }
    }

    function handleContenido2() {
        if (!expandido2) {
            setExpandido1(false);
            setExpandido2(true);
        }
    }

    return (
        <div className="grid grid-cols-8 grid-rows-1 gap-2 w-[95%] lg:w-[80%] h-full flex-1 2xl:w-[75%] 3xl:w-[1500px] lg:self-center-safe z-20">
            {/* Card 1 - Main container with smooth layout expansion */}
            <div
                className={`
                    overflow-hidden relative flex flex-col w-full h-full cursor-pointer
                    transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform
                    ${expandido1
                        ? 'rounded-full col-span-6 sm:col-span-7 row-span-1'
                        : 'rounded-full col-span-2 sm:col-span-1 row-span-1'
                    }
                `}
                onClick={handleContenido1}
            >
                {/* Background gradient border - always present, smooth color transition */}
                <div className='w-full h-full p-1 absolute bg-linear-to-t from-slate-300 to-slate-100 transition-all duration-400'>
                    <div className='w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] flex flex-col items-center justify-center gap-1'>
                        {!expandido1 &&
                            <div className='flex flex-col items-center justify-center gap-1'>
                                <p className='text-lg sm:text-2xl md:text-3xl font-semibold text-black z-10'>{cards[0].buttonText}</p>
                            </div>}
                    </div>
                </div>

                {/* Center spinning gradient circle - only animates when expanded */}
                <div className={`w-full h-full flex items-center justify-center relative backdrop-blur-lg overflow-hidden ${expandido1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div
                        className={`
                            w-32 h-32 rounded-full bg-linear-to-tr from-blue-400 to-primary-200
                            transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                            will-change-transform
                            ${expandido1 ? 'animate-spin opacity-100 scale-100' : 'opacity-0 scale-75'}
                        `}
                        style={{ animationDuration: '12s' }}
                    />
                </div>

                {/* Content overlay - fades and slides in with staggered children */}
                <div
                    className={`
                        w-full h-full p-1 sm:p-2 flex justify-between absolute inset-0
                        transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                        ${expandido1 ? 'opacity-100 pointer-events-auto' : ' hidden opacity-0 pointer-events-none'}
                    `}
                >
                    {/* Left content box - title and description with staggered animations */}
                    <div
                        className={`
                            w-4/5 sm:w-full pt-3 pb-1.5 flex flex-col rounded-2xl sm:rounded-l-full  text-gray-200 font-medium 
                            transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform
                            mx-auto sm:mx-0 px-1 sm:px-4 sm:pr-2 justify-center sm:justify-start align-center sm:align-start text-center sm:text-left place-self-center sm:place-self-auto
                            ${expandido1 ? 'translate-y-0 scale-100' : 'translate-y-6 scale-95'}
                        `}
                    >
                        {/* Title - appears first (0ms delay relative to container) */}
                        <div className="justify-center align-center text-center place-self-center sm:justify-end sm:align-center sm:text-center sm:place-self-center sm:mb-6">
                            <span
                                className={`
                                    text-lg text-black  min-[440px]:text-xl min-[440px]:mb-4 sm:text-2xl md:text-3xl xl:text-4xl
                                    transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                                    ${expandido1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                `}
                                style={{ transitionDelay: expandido1 ? '60ms' : '0ms' }}
                            >
                                {cards[0]?.title}
                            </span>
                        </div>

                        {/* Description - appears second (120ms delay) */}
                        <div className="w-full sm:w-3/5 justify-center align-center text-center place-self-center sm:justify-end sm:align-center sm:text-center sm:place-self-center sm:mt-5 lg:mt-8">
                            <span
                                className={`
                                    text-xs text-black font-medium sm:text-[15px] md:text-base xl:text-lg sm:leading-none
                                    transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                                    ${expandido1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                `}
                                style={{ transitionDelay: expandido1 ? '120ms' : '0ms' }}
                            >
                                {cards[0]?.description}
                            </span>
                        </div>

                        {/* Year - appears third (180ms delay) */}
                        <div
                            className={`
                                w-full  sm:mt-auto flex items-center justify-center
                                transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                                ${expandido1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                            `}
                            style={{ transitionDelay: expandido1 ? '180ms' : '0ms' }}
                        >
                            <StarBorder textSize='text-xs' width='w-22' height='h-6' />
                        </div>
                    </div>
                </div>

                {/* Collapsed state - Plus button fades in smoothly */}
                {!expandido1 && (
                    <div className='w-full h-full flex items-center justify-center relative '>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-12 h-12 rounded-full backdrop-blur-lg bg-gray-50/20 flex items-center justify-center transition-all duration-300 hover:bg-gray-50/30 text-black/80 text-2xl font-light lg:text-4xl cursor-pointer'>
                                +
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Card 2 - Same smooth animation pattern as Card 1 */}
            <div
                className={`
                    overflow-hidden relative flex flex-col w-full h-full cursor-pointer
                    transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform
                    ${expandido2
                        ? 'rounded-full col-span-6 sm:col-span-7 row-span-1 col-start-3'
                        : 'rounded-full col-span-2 sm:col-span-1 row-span-1 col-start-7'
                    }
                `}
                onClick={handleContenido2}
            >
                {/* Background gradient border */}
                <div className='w-full h-full p-1 absolute bg-linear-to-tr from-stone-400 to-stone-800 transition-all duration-400'>
                    <div className='w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] flex flex-col items-center justify-center gap-1'>
                        {!expandido2 &&
                            <div className='flex flex-col items-center justify-center gap-1'>
                                <p className='text-lg sm:text-2xl md:text-3xl font-semibold text-black z-10'>{cards[1].buttonText}</p>
                            </div>}
                    </div>
                </div>

                {/* Center spinning gradient circle */}
                <div className={`w-full h-full flex items-center justify-center relative backdrop-blur-lg overflow-hidden ${expandido2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div
                        className={`
                            w-32 h-32 rounded-full bg-linear-to-tr from-primary-800 to-primary-600
                            transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                            will-change-transform
                            ${expandido2 ? 'animate-spin opacity-100 scale-100' : 'opacity-0 scale-75'}
                        `}
                        style={{ animationDuration: '12s' }}
                    />
                </div>

                {/* Content overlay */}
                <div
                    className={`
                        w-full h-full p-1 sm:p-2 flex justify-between absolute inset-0
                        transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                        ${expandido2 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                    `}
                >
                    {/* Left content box */}
                    <div
                        className={`
                            w-4/5 sm:w-full pt-3 pb-1.5 flex flex-col rounded-2xl sm:rounded-l-full  text-gray-200 font-medium
                            transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform
                            mx-auto sm:mx-0 px-1 sm:px-4 sm:pr-2 justify-center sm:justify-start align-center sm:align-start text-center sm:text-left place-self-center sm:place-self-auto
                            ${expandido2 ? 'translate-y-0 scale-100' : 'hidden translate-y-6 scale-95'}
                        `}
                    >
                        {/* Title - first to appear */}
                        <div className="justify-center align-center text-center place-self-center">
                            <span
                                className={`
                                    text-lg min-[440px]:text-xl min-[440px]:mb-4 sm:text-2xl md:text-3xl xl:text-4xl 
                                    transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                                    ${expandido2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                `}
                                style={{ transitionDelay: expandido2 ? '60ms' : '0ms' }}
                            >
                                {cards[1]?.title}
                            </span>
                        </div>

                        {/* Description - second to appear */}
                        <div className="w-full sm:w-3/5 justify-center align-center text-center place-self-center sm:mt-5 lg:mt-8">
                            <span
                                className={`
                                    text-xs text-gray-50 sm:text-[15px] md:text-base xl:text-lg sm:leading-none
                                    transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                                    ${expandido2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                `}
                                style={{ transitionDelay: expandido2 ? '120ms' : '0ms' }}
                            >
                                {cards[1]?.description}
                            </span>
                        </div>

                        {/* Year - third to appear */}
                        <div
                            className={`
                                w-full sm:mt-auto flex items-center justify-center
                                transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                                ${expandido2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                            `}
                            style={{ transitionDelay: expandido2 ? '180ms' : '0ms' }}
                        >
                            <button className='text-xs w-24 h-8 rounded-full backdrop-blur-lg bg-gray-50/20 flex items-center justify-center transition-all duration-300 hover:bg-gray-50/30 '>Agenda ahora</button>
                        </div>
                    </div>
                </div>

                {/* Collapsed state - Plus button */}
                {!expandido2 && (
                    <div className='w-full h-full flex items-center justify-center relative'>

                        <div className='w-12 h-12 rounded-full backdrop-blur-lg flex items-center justify-center transition-all duration-300 text-black/80 text-2xl font-light lg:text-4xl cursor-pointer'>
                            +
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardsMovibles2


