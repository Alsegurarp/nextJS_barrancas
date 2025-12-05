'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

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

function CardsMovibles({ cards, instanceId = 'default' }: CardsMoviblesProps) {
    const [expandido1, setExpandido1] = useState(instanceId === 'set1');
    const [expandido2, setExpandido2] = useState(instanceId === 'set2');
    // These track which card is currently expanded.
    const gridRef = useRef(null);
    const dur = 0.5;

    // Create unique IDs for this instance
    const listItemClass = `listItem-${instanceId}`;
    const contentCard1Id = `contenidoCard1-${instanceId}`;
    const contentCard2Id = `contenidoCard2-${instanceId}`;

    const lastIndexRef = useRef(-1); // either card 0 or 1 was clicked
    const lastItemsRef = useRef<any[]>([]); // stores child elements of last clicked card
    const animatedCardsRef = useRef<Set<number>>(new Set()); // tracks which cards have already animated


    // Set initial content visibility on page load
    useEffect(() => {
        const contentCard1 = document.querySelector(`#${contentCard1Id}`);
        if (contentCard1) {
            gsap.set(contentCard1, { opacity: 1 });
        }
    }, [contentCard1Id]);

    useEffect(() => {
        const listItems = gsap.utils.toArray(`.${listItemClass}`);

        // Click handler
        const handleItemClick = (i: number) => {
            return () => {
                // i - index is the card index (0 for card 1, 1 for card 2)

                // Get all content within the clicked item
                const itemTargets = gsap.utils.toArray((listItems[i] as HTMLElement).querySelectorAll('*'));

                // Check to see if the item is the same one as the last time
                const isSameAsLast = i === lastIndexRef.current && listItems[lastIndexRef.current];

                // Animate out the last clicked item if it's not the same as the current
                if (!isSameAsLast && listItems[lastIndexRef.current]) {
                    (listItems[lastIndexRef.current] as HTMLElement).classList.remove('expanded');
                    // If you click a different card, remove the expanded class from the previously expanded card.
                }

                // Toggle the display on the clicked item BEFORE capturing state
                (listItems[i] as HTMLElement).classList.toggle('expanded'); // Add 'expanded' class

                // Get all the items that are changing this click (after class toggle)
                const targets = listItems;

                // Grab the current state of the targets (after changing)
                const state = Flip.getState(targets as (Element | Window | null)[]); // Capture END state

                // Revert the class toggle to get back to previous state
                (listItems[i] as HTMLElement).classList.toggle('expanded'); // Remove 'expanded' class

                // Get the content card element (contenidoCard1 or similar)
                const contentCard = (listItems[i] as HTMLElement).querySelector('[id^="contenidoCard"]');

                Flip.from(state, {
                    duration: dur,
                    ease: "power1.inOut",
                    absolute: true,
                    nested: true,
                    onEnter: elements => gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: dur / 2, delay: dur / 2 }),
                    onLeave: elements => gsap.fromTo(elements, { opacity: (idx, el) => state.getProperty(el, "opacity") }, { opacity: 0, duration: dur / 2 }),
                    onStart: () => {
                        // Hide the expanding card's content DURING the Flip animation
                        if (contentCard) {
                            gsap.to(contentCard, {
                                opacity: 0,
                                duration: 0.001,
                            });
                        }
                    },
                    onComplete: () => {
                        // After Flip animation completes, fade in content with crescendo
                        // Only animate if this card hasn't been animated before
                        if (contentCard) {
                            if (!animatedCardsRef.current.has(i)) {
                                // First time: animate with crescendo
                                animatedCardsRef.current.add(i);
                                gsap.fromTo(contentCard,
                                    {
                                        y: -300,
                                        opacity: 0,
                                    },
                                    {
                                        y: 0,
                                        opacity: 1,
                                        duration: 0.45,
                                        ease: "sine.in",
                                    }
                                );
                            } else {
                                // Already animated: just make it visible instantly
                                gsap.to(contentCard, {
                                    opacity: 1,
                                    duration: 0.1,
                                });
                            }
                        }
                    }
                });

                // Toggle again to finalize the state
                (listItems[i] as HTMLElement).classList.toggle('expanded');

                // Update our variables
                lastItemsRef.current = itemTargets; // Remember this card's children
                lastIndexRef.current = i; // Remember this was clicked

                // Update React state
                if (i === 0) {
                    setExpandido1(true);
                    setExpandido2(false);
                } else if (i === 1) {
                    setExpandido1(false);
                    setExpandido2(true);
                }
            };
        };

        // Attach click listeners
        listItems.forEach((item, i) => {
            const handler = handleItemClick(i);
            (item as HTMLElement).removeEventListener('click', handler);
            (item as HTMLElement).addEventListener('click', handler);
        });

        return () => {
            listItems.forEach((item, i) => {
                const handler = handleItemClick(i);
                (item as HTMLElement).removeEventListener('click', handler);
            });
        };
    }, [listItemClass]);


    function handleContenido1() {
        if (!expandido1) {
            setExpandido1(true);
            setExpandido2(false);
            console.log('Contenido 1 expandido');
        }
    }

    function handleContenido2() {
        if (!expandido2) {
            setExpandido1(false);
            setExpandido2(true);
            console.log('Contenido 2 expandido');
        }
    }

    return (
        <div className="h-[40%] w-[95%] grid grid-cols-8 grid-rows-1 gap-2" ref={gridRef}>
            <button
                id={`contenido1-${instanceId}`}
                className={`${listItemClass} rounded-3xl overflow-hidden relative flex flex-col w-full h-full ${expandido1 ? 'expanded col-span-6 sm:col-span-7 row-span-1' : 'col-span-2 sm:col-span-1 row-span-1 rounded-full'}`}
                onClick={handleContenido1}
            >
                {
                    expandido1 ?
                        <div className='flex flex-col w-full h-full relative'>
                            {/* Background gradient border */}
                            <div className='w-full h-full p-1 absolute bg-gradient-to-br from-primary-800 to-primary-600'>
                                <div className='w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]'></div>
                            </div>

                            {/* Center spinning gradient circle */}
                            <div className='w-full h-full flex items-center justify-center relative backdrop-blur-lg rounded-2xl'>
                                <div className='w-32 h-32 rounded-full bg-gradient-to-tr from-primary-800 to-primary-600 animate-spin' style={{ animationDuration: '12s' }}></div>
                            </div>

                            {/* Content overlay */}
                            <div className='w-full h-full p-2 flex justify-between absolute inset-0'>
                                <div className='w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono' id={contentCard1Id}>
                                    <span className='text-lg font-nohemi min-[440px]:text-xl min-[440px]:mb-4 sm:text-2xl sm:mb-6'>{cards[0]?.title}</span>
                                    <span className='text-xs text-gray-50 font-nohemi font-medium sm:text-[15px] sm:leading-none'>{cards[0]?.description}</span>
                                    <div className='w-full mt-auto flex items-center justify-center'>
                                        <span className='text-xs text-gray-200 min-[440px]:text-base '>2025</span>
                                    </div>
                                </div>
                                <div className='h-full pt-2 flex flex-col items-end text-gray-50'>
                                    <span className='text-[10px] leading-3 min-[440px]:text-base sm:leading-none'>Premium</span>
                                    <span className='text-[10px] leading-[13px] min-[440px]:text-base sm:leading-none'>Card</span>
                                    <div className='w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/10 cursor-pointer transition-all duration-300 hover:bg-gray-50/30'>
                                        <a href={cards[0]?.buttonLink || 'https://www.youtube.com/'}>
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' className='w-4 h-4 sm:w-5 sm:h-5'>
                                                <g fill='none'>
                                                    <path d='M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' fill='currentColor'></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className='w-full h-full relative overflow-hidden rounded-2xl'>
                            {/* Background gradient border */}
                            <div className='w-full h-full p-1 absolute bg-gradient-to-br from-primary-800 to-primary-600'>
                                <div className='w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]'></div>
                            </div>
                            {/* Glass effect with blur */}
                            <div className='w-full h-full flex items-center justify-center relative backdrop-blur-lg rounded-2xl'>
                                <button className='w-12 h-12 rounded-full backdrop-blur-lg bg-gray-50/20 flex items-center justify-center transition-all duration-300 hover:bg-gray-50/30 text-white/80 text-2xl font-light'>
                                    +
                                </button>
                            </div>
                        </div>
                }
            </button>
            <button
                id={`contenido2-${instanceId}`}
                className={`${listItemClass} rounded-3xl overflow-hidden relative flex flex-col w-full h-full ${expandido2 ? 'expanded col-span-6 sm:col-span-7 row-span-1 col-start-3 rounded-3xl' : 'col-span-2 sm:col-span-1 row-span-1 col-start-7 rounded-full'}`}
                onClick={handleContenido2}
            >
                {expandido2 ?
                    <div className='flex flex-col w-full h-full relative'>
                        {/* Background gradient border */}
                        <div className='w-full h-full p-1 absolute bg-gradient-to-br from-primary-800 to-primary-600'>
                            <div className='w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]'></div>
                        </div>

                        {/* Center spinning gradient circle */}
                        <div className='w-full h-full flex items-center justify-center relative backdrop-blur-lg rounded-2xl'>
                            <div className='w-32 h-32 rounded-full bg-gradient-to-tr from-primary-800 to-primary-600 animate-spin' style={{ animationDuration: '12s' }}></div>
                        </div>

                        {/* Content overlay */}
                        <div className='w-full h-full p-2 flex justify-between absolute inset-0'>
                            <div className='w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono' id={contentCard2Id}>
                                <span className='text-lg font-nohemi min-[440px]:text-xl min-[440px]:mb-4 sm:text-2xl sm:mb-6'>{cards[1]?.title}</span>
                                <span className='text-xs text-gray-50 font-medium sm:text-[15px] sm:leading-none'>{cards[1]?.description}</span>
                                <div className='w-full mt-auto flex items-center justify-center'>
                                    <span className='text-xs text-gray-200 min-[440px]:text-base'>2025</span>
                                </div>
                            </div>
                            <div className='h-full pt-2 pr-1 flex flex-col items-end text-gray-50'>
                                <span className='text-[10px] leading-3 min-[440px]:text-base sm:leading-none'>Premium</span>
                                <span className='text-[10px] leading-[13px] min-[440px]:text-base sm:leading-none'>Card</span>
                                <div className='w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/10 cursor-pointer transition-all duration-300 hover:bg-gray-50/30'>
                                    <a href={cards[1]?.buttonLink || 'https://www.youtube.com/'}>
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' className='w-4 h-4 sm:w-5 sm:h-5'>
                                            <g fill='none'>
                                                <path d='M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' fill='currentColor'></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className='w-full h-full relative overflow-hidden rounded-2xl'>
                        {/* Background gradient border */}
                        <div className='w-full h-full p-1 absolute bg-gradient-to-br from-primary-800 to-primary-600'>
                            <div className='w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]'></div>
                        </div>
                        {/* Glass effect with blur */}
                        <div className='w-full h-full flex items-center justify-center relative backdrop-blur-lg rounded-2xl'>
                            <div className='w-12 h-12 rounded-full backdrop-blur-lg bg-gray-50/20 flex items-center justify-center transition-all duration-300 hover:bg-gray-50/30 text-white/80 text-2xl font-light'>
                                +
                            </div>
                        </div>
                    </div>
                }

            </button>
        </div>
    )
}

export default CardsMovibles
