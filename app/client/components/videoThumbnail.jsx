'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import YouTube from 'react-youtube';
import { motion } from "framer-motion";

export const VideoCard = ({
    product,
    translate,
  }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.title}
        className="group/product h-96 w-screen sm:w-[40rem] relative flex-shrink-0 overflow-hidden"
      >
        <VideoThumbnail
            videoId={product.videoId}
        />
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    );
  };

const VideoThumbnail = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

    const onReady = (event) => {
        event.target.mute();
        event.target.playVideo();
        setIsLoading(false);
    };

    const onPlay = () => {

    };

    const onEnd = (event) => {
        event.target.playVideo();
      };

    const opts = {
        playerVars: {
          autoplay: 1,
          mute: 1,
          modestbranding: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
        },
    };

    const handleThumbnailClick = () => {
      setIsVideoLoaded(true);
    };

  return (
    <div className="absolute h-full w-full inset-0 flex items-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <Image src="/logo.png" alt="Loading..." layout="fill" objectFit="contain" />
        </div>
      )}

      {!isVideoLoaded ? (
        <div onClick={handleThumbnailClick} style={{ cursor: 'pointer', position: 'relative' }}>
          <img src={thumbnailUrl} alt="Video thumbnail" style={{ width: '640px', height: '390px' }} />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#d0021b" fill="red">
              <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="video-container">
          <YouTube videoId={videoId} opts={opts} onReady={onReady} onPlay={onPlay} onEnd={onEnd}/>
        </div>
      )}

    </div>
  );
};
