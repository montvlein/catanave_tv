'use client'

import { useState } from "react";
import YouTubeTv from "./youtubePlayer";

const VideoComponent = ({ videoUrlMp4, videoUrlWebm }) => {
    const handleEnd = () => {setInitialVideoEnds(true)}
    const [initialVideoEnds, setInitialVideoEnds] = useState(false)

    if (initialVideoEnds) return <YouTubeTv/>

    return (
    <div className="z-10 aspect-square w-8/12 lg:w-6/12 h-3/4 mr-4 md:mr-12 mb-4 md:mb-10 lg:mb-28 rounded-lg bg-black shadow-[inset_0_0_8px_rgba(0,0,0,0.8)] flex items-center">
      <video
        autoPlay
        muted
        onEnded={handleEnd}
      >
        <source src={videoUrlWebm} type="video/webm" />
        <source src={videoUrlMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
)};

export default VideoComponent;