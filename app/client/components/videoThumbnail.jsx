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
        <a
          href={`https://www.youtube.com/watch?v=${product.videoId}`}
          target='_blank'
          className="absolute inset-0 h-full w-full opacity-0 cursor-pointer group-hover/product:opacity-80 "></a>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    );
  };

const VideoThumbnail = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(true);

    const onReady = (event) => {
        // Acceder al reproductor de YouTube y reproducir el video
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

  return (
    <div className="absolute h-full w-full inset-0 flex items-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <Image src="/logo.png" alt="Loading..." layout="fill" objectFit="contain" />
        </div>
      )}

      <div className="video-container">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} onPlay={onPlay} onEnd={onEnd}/>
      </div>

    </div>
  );
};
