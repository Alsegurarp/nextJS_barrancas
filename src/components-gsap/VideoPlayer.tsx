'use client';

import React, { useRef } from 'react';
import { FaVolumeXmark, FaVolumeHigh } from 'react-icons/fa6';

// YouTube Video IDs
const youtubeVideos: Record<number, string> = {
    1: '4JkIs37a2JE', 
    2: 'E8gmARGvPlI', 
    3: 'Gs069dndIYk', 
    4: 'EVgd4gvY0hU', 
};

const VideoPlayer: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [activeVideo, setActiveVideo] = React.useState<number>(1);
    const [isMuted, setIsMuted] = React.useState<boolean>(true);

    // YouTube embed URL with autoplay enabled - toggles mute based on state
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideos[activeVideo]}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&loop=1&playlist=${youtubeVideos[activeVideo]}`;

    return (
        <div className="panel relative snap-start w-screen h-screen overflow-hidden bg-white">
            {/* Full-screen YouTube iframe */}
            <iframe
                ref={iframeRef}
                width="100%"
                height="100%"
                src={youtubeEmbedUrl}
                title={`Hero Video ${activeVideo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            />

            {/* Sound toggle button - positioned at top right */}
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-20 right-8 z-30 p-3 rounded-full bg-white/80 backdrop-blur-md hover:bg-white/95 transition-all duration-300 shadow-lg hover:scale-110"
                title={isMuted ? 'Activate sound' : 'Mute sound'}
            >
                {isMuted ? (
                    <FaVolumeXmark className="text-2xl text-black" />
                ) : (
                    <FaVolumeHigh className="text-2xl text-black" />
                )}
            </button>

            {/* Video selector buttons - positioned at bottom */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-3 md:gap-4 justify-center z-20">
                {[1, 2, 3, 4].map((videoNum) => (
                    <button
                        key={videoNum}
                        onClick={() => setActiveVideo(videoNum)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                            activeVideo === videoNum
                                ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105'
                                : 'bg-white/80 backdrop-blur-md text-black hover:bg-gray-700 hover:text-white'
                        }`}
                    >
                        {videoNum}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VideoPlayer;
