'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './AnimatedTextContainer.module.css';


gsap.registerPlugin(ScrollTrigger);
function AnimatedTextContainer() {
    useEffect(() => {

        const animeTextParagraphs = document.querySelectorAll('.anime_text p');

        const wordHighlightBgColor = '60 60 60';

        const keywords = [
            'lorem',
            'living',
            'clarity',
            'shape',
            'expression',
            'intuitive',
            'interactive',
            'storytelling',
            'vision',
        ];

        animeTextParagraphs.forEach((paragraph) => {
            const text = paragraph.textContent;
            const words = text?.split(' ') || [];

            paragraph.innerHTML = '';

            words.forEach((word) => {
                if (word.trim()) {
                    const wordContainer = document.createElement('div');
                    wordContainer.className = 'word';

                    const wordText = document.createElement('span');
                    wordText.textContent = word;

                    const normalizedWord = word.toLowerCase().replace(/[.,!?;:*"()]/g, '');
                    if (keywords.includes(normalizedWord)) {
                        wordContainer.classList.add('keyword_wrapper');
                        wordText.classList.add('keyword', normalizedWord);
                    }

                    wordContainer.appendChild(wordText);
                    paragraph.appendChild(wordContainer);
                }
            });
        });
        const AnimatedTextContainer = document.querySelectorAll('.animated-text-container');

        const triggers: any[] = [];

        AnimatedTextContainer.forEach((container) => {
            const trig = ScrollTrigger.create({
                trigger: container,
                pin: true,
                start: 'top top',
                end: () => `+=${Math.max(container.getBoundingClientRect().height, window.innerHeight) * 2}`,
                pinSpacing: true,
                scrub: true,
                // markers: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const words = Array.from(container.querySelectorAll('.anime_text .word')
                    ) as HTMLElement[];
                    const totalWords = words.length;

                    words.forEach((word, index) => {
                        const wordText = word.querySelector('span') as HTMLElement;

                        if (progress <= 0.7) {
                            const progressTarget = 0.7;
                            const revealProgress = Math.min(1, progress / progressTarget);

                            const overlapWords = 15;
                            const totalAnimationLength = 1 + overlapWords / totalWords;

                            const wordStart = index / totalWords;
                            const wordEnd = wordStart + overlapWords / totalWords;

                            const timelineScale = 1 / Math.min(totalAnimationLength, 1 + (totalWords - 1) / totalWords + overlapWords / totalWords);

                            const adjustedStart = wordStart * timelineScale;
                            const adjustedEnd = wordEnd * timelineScale;
                            const duration = adjustedEnd - adjustedStart;

                            const wordProgress = revealProgress <= adjustedStart ? 0 : revealProgress >= adjustedEnd ? 1 : (revealProgress - adjustedStart) / duration;

                            word.style.opacity = String(wordProgress);

                            const backgroundFadeStart = wordProgress >= 0.9 ? (wordProgress - 0.9) / 0.1 : 0;
                            const backgroundOpacity = Math.max(0, 1 - backgroundFadeStart);
                            word.style.backgroundColor = `rgba(${wordHighlightBgColor}, ${backgroundOpacity})`;

                            const textRevealThreshold = 0.9;
                            const textRevealProgress = wordProgress >= textRevealThreshold ? (wordProgress - textRevealThreshold) / (1 - textRevealThreshold) : 0;
                            wordText.style.opacity = String(Math.pow(textRevealProgress, 0.5));
                        } else {
                            const reverseProgress = (progress - 0.7) / 0.3;
                            word.style.opacity = '1';
                            const targetTextOpacity = 1;

                            const reverseOverlapWords = 5;
                            const reverseWordStart = index / totalWords;
                            const reverseWordEnd = reverseWordStart + reverseOverlapWords / totalWords;

                            const reverseTimelineScale = 1 / Math.max(1, (totalWords - 1) / totalWords + reverseOverlapWords / totalWords);

                            const reverseAdjustedStart = reverseWordStart * reverseTimelineScale;
                            const reverseAdjustedEnd = reverseWordEnd * reverseTimelineScale;
                            const reverseDuration = reverseAdjustedEnd - reverseAdjustedStart;

                            const reverseWordProgress = reverseProgress <= reverseAdjustedStart ? 0 : reverseProgress >= reverseAdjustedEnd ? 1 : (reverseProgress - reverseAdjustedStart) / reverseDuration;

                            if (reverseWordProgress > 0) {
                                wordText.style.opacity = String(targetTextOpacity * (1 - reverseWordProgress));
                                word.style.backgroundColor = `rgba(${wordHighlightBgColor}, ${reverseWordProgress})`;
                            } else {
                                wordText.style.opacity = String(targetTextOpacity);
                                word.style.backgroundColor = `rgba(${wordHighlightBgColor}, 0)`;
                            }
                        }
                    });
                }
            });

            triggers.push(trig);
        });

        return () => {
            triggers.forEach(t => t && t.kill && t.kill());
        };
    }, []);




    return (
        <section className="panel h-[100dvh] relative snap-start bg-gray-900 justify-center items-center flex">
            <div className="animated-text-container container max-h-full justify-center items-center flex flex-col">
                <div className="copy_container w-full h-full justify-center items-center flex flex-col align-center text-center rounded-2xl border border-dashed border-red-500">
                    <h1 className='w-[70%] text-black text-2xl font-bold leading-none'>Contenido prueba</h1>

                    <div className="anime_text w-3/5">
                        <p className='text-center text-white mb-8 text-3xl font-bold leading-none '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vero debitis, doloribus ullam velit tenetur a voluptatem magnam sed harum?</p>
                        <p className='text-center text-white mb-8 text-3xl leading-none'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vero debitis, doloribus ullam velit tenetur a voluptatem magnam sed harum?</p>
                    </div>

                    <div className="buttons wrap flex gap-4 mt-6">
                        <button className='cta bg-white/20 border border-white rounded-xl px-4 py-1.5'>Click me</button>
                        <button className='cta bg-white/20 border border-white rounded-xl px-4 py-1.5'>Click you</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnimatedTextContainer
