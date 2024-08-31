'use client'

import { HeroParallax } from "./hero-parallax";
import { videos } from "@/server/infoVideos";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Hero() {
  const size = useWindowSize();
  const isMobile = size.width < 882;

  if (isMobile) return <HeroPhone products={videos} />

  return(
    <HeroParallax products={videos} />
  )
}

import YouTube from 'react-youtube';
import { useState } from "react";

function HeroPhone({products}) {
  const [actualVideo, setActualVideo] = useState(0)

  const videoOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      modestbranding: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  const onEnd = (event) => {
    nextVideo()
    event.target.playVideo();
  };

  const nextVideo = (e) =>{
    e?.preventDefault()
    actualVideo == products.length-1 ?
    setActualVideo(0):
    setActualVideo(actualVideo+1)
  }

  const prevVideo = (e) =>{
    e?.preventDefault()
    actualVideo == 0 ?
    setActualVideo(products.length-1):
    setActualVideo(actualVideo-1)
  }

  return (
    <section className="flex-1 bg-custom flex items-center">
      <div className="flex justify-center items-center w-full max-w-2xl mx-auto p-4">
        <div className="bg-[#8368a8] w-full border-8 border-[#3c2c5e] relative rounded-lg flex flex-col items-center">
          <div className="absolute -top-4 flex flex-col items-center">
            {/* Semicírculo negro */}
            <div className="w-10 h-5 bg-[#3c2c5e] rounded-t-full"></div>
            {/* Líneas de la antena */}
            <div className="relative w-full">
              <div className="absolute -top-10 -left-2 w-0.5 h-8 bg-[#3c2c5e] transform -rotate-45"></div>
              <div className="absolute -top-10 -right-2 w-0.5 h-8 bg-[#3c2c5e] transform rotate-45"></div>
            </div>
          </div>
          <div className="bg-[#61aee2] w-11/12 aspect-video my-4 flex justify-center items-center rounded-lg shadow-inner p-2">
            <YouTube
              videoId={products[actualVideo].videoId} // Reemplaza con el ID del video que deseas mostrar
              opts={videoOptions}
              onEnd={onEnd}
              className="w-full h-full rounded-lg shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]"
            />
          </div>
          <div className="flex justify-around w-5/6 mt-1">
            <div className="relative w-6 h-6 cursor-pointer"
              onClick={prevVideo}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-8 border-b-8 border-r-8 border-transparent border-r-[#3c2c5e]"></div>
            </div>
            <div
              className="relative w-6 h-6 cursor-pointer"
              onClick={nextVideo}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#3c2c5e]"></div>
            </div>
          </div>
          <div className="w-12 h-2 bg-[#3c2c5e] mt-2 relative">
            <div className="w-2.5 h-1 bg-[#3c2c5e] absolute -bottom-1 left-5"></div>
          </div>
          <div className="absolute -bottom-4 left-1/4 w-8 h-2 bg-[#3c2c5e] rounded-t-md"></div>
          <div className="absolute -bottom-4 right-1/4 w-8 h-2 bg-[#3c2c5e] rounded-t-md"></div>
        </div>
      </div>
    </section>
  )
}
