'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import VideoPreview from './VideoPreview';
import { StaticImageData } from 'next/image';

// Import poster images
import hero1_poster from '../assets/videos/hero-1-poster.jpg';
import hero2_poster from '../assets/videos/hero-1-poster.jpg';
import hero3_poster from '../assets/videos/hero-1-poster.jpg';
import hero4_poster from '../assets/videos/hero-1-poster.jpg';
import StarBorderButton from '@/components/StarBorderSustitute';
import StarBorder from '@/components/StarBorder';

// Video paths as strings (not imports)
const hero1_480p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero1_480p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';
const hero1_720p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero1_720p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';
const hero1_1080p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero1_1080p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';

const hero2_480p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero2_480p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';
const hero2_720p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero2_720p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';
const hero2_1080p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero2_1080p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';

const hero3_480p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero3_480p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';
const hero3_720p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero3_720p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';
const hero3_1080p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero3_1080p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';

const hero4_480p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero4_480p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';
const hero4_720p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero4_720p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';
const hero4_1080p_webm = '/assets/videos/Hero/Barrancas_test.mp4';
const hero4_1080p_mp4 = '/assets/videos/Hero/Barrancas_test.mp4';

gsap.registerPlugin(ScrollTrigger);

// Video assets map for easy access
interface VideoQuality {
    webm: string;
    mp4: string;
}

interface VideoAsset {
    '480p': VideoQuality;
    '720p': VideoQuality;
    '1080p': VideoQuality;
    poster: string | StaticImageData;
}

const videoAssets: Record<number, VideoAsset> = {
    1: {
        '480p': { webm: hero1_480p_webm, mp4: hero1_480p_mp4 },
        '720p': { webm: hero1_720p_webm, mp4: hero1_720p_mp4 },
        '1080p': { webm: hero1_1080p_webm, mp4: hero1_1080p_mp4 },
        poster: hero1_poster
    },
    2: {
        '480p': { webm: hero2_480p_webm, mp4: hero2_480p_mp4 },
        '720p': { webm: hero2_720p_webm, mp4: hero2_720p_mp4 },
        '1080p': { webm: hero2_1080p_webm, mp4: hero2_1080p_mp4 },
        poster: hero2_poster
    },
    3: {
        '480p': { webm: hero3_480p_webm, mp4: hero3_480p_mp4 },
        '720p': { webm: hero3_720p_webm, mp4: hero3_720p_mp4 },
        '1080p': { webm: hero3_1080p_webm, mp4: hero3_1080p_mp4 },
        poster: hero3_poster
    },
    4: {
        '480p': { webm: hero4_480p_webm, mp4: hero4_480p_mp4 },
        '720p': { webm: hero4_720p_webm, mp4: hero4_720p_mp4 },
        '1080p': { webm: hero4_1080p_webm, mp4: hero4_1080p_mp4 },
        poster: hero4_poster
    },
};

// Utility function to detect device screen size and return appropriate video resolution
const getVideoResolution = (): 'mobile' | 'tablet' | 'desktop' => {
    if (typeof window === 'undefined') return 'desktop';

    const width = window.innerWidth;
    if (width < 768) return 'mobile'; // < 768px
    if (width < 1024) return 'tablet'; // < 1024px
    return 'desktop';
};

// Function to detect network connection type (if available)
const getNetworkQuality = (): 'slow' | 'fast' => {
    if (typeof navigator === 'undefined') return 'fast';

    // Check for Network Information API
    const connection = ((navigator as unknown) as Record<string, unknown>).connection ||
        ((navigator as unknown) as Record<string, unknown>).mozConnection ||
        ((navigator as unknown) as Record<string, unknown>).webkitConnection;

    if (!connection) return 'fast';

    const effectiveType = (connection as Record<string, string>).effectiveType; // '4g', '3g', '2g', 'slow-2g'
    return effectiveType === '4g' || effectiveType === '5g' ? 'fast' : 'slow';
};

const Hero = () => {
    const [currentVideo, setCurrentVideo] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const [videoResolution, setVideoResolution] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
    const [networkQuality, setNetworkQuality] = useState<'slow' | 'fast'>('fast');
    const [isMounted, setIsMounted] = useState(false);

    const totalVideos = 4; // Total number of videos
    const nextVideoRef = useRef<HTMLVideoElement>(null); // useRef to refer to a specific DOM element by React

    useEffect(() => {
        const loadTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Hide loader after 3 seconds max

        return () => clearTimeout(loadTimeout);
    }, []);

    // mark mounted to avoid rendering window-dependent attrs during SSR
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Detect device resolution and network quality on mount and resize
    useEffect(() => {
        const updateResolution = () => {
            setVideoResolution(getVideoResolution());
        };

        updateResolution();
        window.addEventListener('resize', updateResolution);

        // Detect network quality
        setNetworkQuality(getNetworkQuality());

        return () => window.removeEventListener('resize', updateResolution);
    }, []);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    useEffect(() => {
        if (loadedVideos >= 1) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    const handleMiniVideoPlayer = () => {
        setHasClicked(true);
        setCurrentVideo((prevIndex) => (prevIndex % totalVideos) + 1);
    }


    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' })
            gsap.to("#next-video", {
                transformOrigin: "center center",
                scale: 1,
                width: "100%",
                height: "100%",
                duration: 1,
                ease: "power1.inOut",
                onStart: () => { nextVideoRef.current?.play(); },
            });
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            });
        }
    }, {
        dependencies: [currentVideo],
        revertOnUpdate: true
    });


    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(0 0, 68% 0, 100% 100%, 37% 100%)',
            borderRadius: '0% 0% 40% 20%',
        });

        gsap.from('#video-frame', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0% 0%',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })

    // Get appropriate video resolution based on device and network quality
    const getVideoQuality = (): '480p' | '720p' | '1080p' => {
        if (networkQuality === 'slow') return '480p'; // Low bandwidth
        if (videoResolution === 'mobile') return '480p';
        if (videoResolution === 'tablet') return '720p';
        return '1080p'; // Desktop with good network
    };

    // Generate responsive video sources with multiple formats
    const renderVideoSources = (index: number) => {
        const quality = getVideoQuality();
        const assets = videoAssets[index];
        // Handle StaticImageData for poster
        const posterSrc = typeof assets.poster === 'string' ? assets.poster : (assets.poster as StaticImageData).src;

        return {
            webm: assets[quality].webm,
            mp4: assets[quality].mp4,
            poster: posterSrc,
        } as { webm: string; mp4: string; poster: string };
    };

    return (
        <section className='panel relative snap-start h-dvh w-full overflow-hidden'>
            {isLoading && (
                <div className="flex-center absolute z-100 h-dvh w-full overflow-hidden bg-violet-50">
                    {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}


            <div
                id="video-frame"
                className='relative z-10 h-dvh w-full overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <VideoPreview>
                            <div onClick={handleMiniVideoPlayer}
                                className='origin-center scale-50 opacity-0 transition-all duration-300 ease-in hover:scale-100 hover:opacity-100'>
                                {/* Only render the actual <video> elements on the client to avoid SSR/CSR attribute mismatches */}
                                {isMounted && (
                                    <video
                                        loop
                                        muted
                                        id='current-video'
                                        className='size-64 origin-center scale-150 object-cover object-center'
                                        ref={nextVideoRef}
                                        poster={renderVideoSources((currentVideo % totalVideos) + 1).poster}
                                        preload="metadata"
                                        onLoadedData={handleVideoLoad}
                                    >
                                        <source src={renderVideoSources((currentVideo % totalVideos) + 1).webm} type="video/webm" />
                                        <source src={renderVideoSources((currentVideo % totalVideos) + 1).mp4} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        </VideoPreview>
                    </div>

                    {isMounted && (
                        <>
                            <video
                                ref={nextVideoRef}
                                loop
                                muted
                                id='next-video'
                                className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                                poster={renderVideoSources(currentVideo).poster}
                                preload="metadata"
                                onLoadedData={handleVideoLoad}
                            >
                                <source src={renderVideoSources(currentVideo).webm} type="video/webm" />
                                <source src={renderVideoSources(currentVideo).mp4} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <video
                                loop
                                muted
                                autoPlay
                                playsInline
                                className='absolute size-full left-0 top-0 object-cover object-center'
                                poster={renderVideoSources(currentVideo === totalVideos - 1 ? 1 : currentVideo).poster}
                                preload="auto"
                                onLoadedData={handleVideoLoad}
                                onCanPlay={(e) => {
                                    (e.target as HTMLVideoElement).play().catch(() => {
                                        // Autoplay might be blocked, user will need to interact
                                    });
                                }}
                            >
                                <source src={renderVideoSources(currentVideo === totalVideos - 1 ? 1 : currentVideo).webm} type="video/webm" />
                                <source src={renderVideoSources(currentVideo === totalVideos - 1 ? 1 : currentVideo).mp4} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </>
                    )}
                </div>
                <div className='absolute left-8 top-0 z-40 size-full lg:left-24 xl:left-28 2xl:left-36'>
                    <div className='mt-24 px-5 pr-12 sm:px-10 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-24 2xl:ml-32'>
                        <h2 className='special-font hero-heading sm:text-5xl md:text-6xl text-primary-800'>
                            Redefine<b /> viajar</h2>
                        <p className='my-5 font-copyright text-primary-800 max-w-64 lg:max-w-2xs text-md sm:text-lg md:text-xl lg:text-2xl'>
                            Viaja con nosotros <br /> y descubrete a ti mismo.
                        </p>
                    </div>
                    <div className="flex flex-col w-3/4 gap-4 sm:gap-6 sm:flex-row self-center">
                        <StarBorderButton>
                            Diseña tu viaje
                        </StarBorderButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
