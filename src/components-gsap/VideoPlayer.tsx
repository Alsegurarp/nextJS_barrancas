'use client';

import React, { useRef } from 'react';

// YouTube Video ID
const videoId = 'huqJUghX26Y';

const VideoPlayer: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // YouTube embed URL with autoplay enabled
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;

    return (
        <div className="panel relative snap-start w-screen h-screen overflow-hidden bg-white">
            {/* Full-screen YouTube iframe */}
            <iframe
                ref={iframeRef}
                width="100%"
                height="100%"
                src={youtubeEmbedUrl}
                title="Hero Video"
                frameBorder="0"
                allow="autoplay;"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
};

export default VideoPlayer;
