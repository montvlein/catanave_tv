'use client'

import React, { useState, useEffect, useRef } from "react";
import { VideoCard } from "./videoThumbnail";
import { videos } from "@/server/infoVideos";
import { motion, useMotionValue } from "framer-motion";

export default function Slider({sliderList=videos, translateX}) {
  const cardWidth = 300;

  const totalWidth = cardWidth * sliderList.length;
  const containerRef = useRef(null);

  const x = useMotionValue(0);

  const handleScroll = (event) => {
    const scrollPosition = event.target.value;
    x.set(-scrollPosition * (totalWidth - containerRef.current.clientWidth));
  };

  return (
    <section className="w-full flex flex-col flex-1 justify-center items-center gap-8 overflow-hidden mb-20">
      <motion.div
        className="flex flex-row space-x-20 cursor-grab"
        drag="x"
        dragConstraints={{ left: -(cardWidth * sliderList.length ) , right: (cardWidth * sliderList.length ) }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileTap={{ cursor: "grabbing" }}
        style={{ x }}
        ref={containerRef}
      >
        {sliderList.map((product) => (
          <VideoCard
            product={product}
            translate={translateX}
            key={product.title}
          />
        ))}
      </motion.div>
      <input
        type="range"
        min="-0.81"
        max=".81"
        step="0.01"
        defaultValue="0"
        className="w-1/2"
        onChange={handleScroll}
      />
    </section>
  );
}
