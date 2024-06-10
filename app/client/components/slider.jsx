'use client'

import React from "react";
import { VideoCard } from "./videoThumbnail";
import { videos } from "@/server/infoVideos";
import { motion } from "framer-motion";

export default function Slider({sliderList=videos, translateX}) {

  return (
    <section className="w-full flex flex-1 justify-center items-center overflow-x-hidden mb-20">
      <motion.div
        className="flex flex-row space-x-20 cursor-grab"
        drag="x"
        dragConstraints={{ left: -(300 * sliderList.length ) , right: (300 * sliderList.length ) }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {sliderList.map((product) => (
          <VideoCard
            product={product}
            translate={translateX}
            key={product.title}
          />
        ))}
      </motion.div>
    </section>
  );
}
