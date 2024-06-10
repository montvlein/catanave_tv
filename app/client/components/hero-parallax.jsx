"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";

import { HeroTitle } from "./hero-title";
import Slider from "@components/slider";

export const HeroParallax = ({
  products,
}) => {
  const size = useWindowSize();
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );

  const isMobile = size.width < 640; // Ajusta este valor según el breakpoint deseado
  const mobileTranslateY = -300; // Valor para móviles
  const desktopTranslateY = -700; // Valor para escritorio

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? mobileTranslateY : desktopTranslateY, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[210vh] sm:h-[250vh] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <HeroTitle />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <Slider sliderList={firstRow} translateX={translateX} />
        <Slider sliderList={secondRow} translateX={translateXReverse} />
        <Slider sliderList={thirdRow} translateX={translateX} />
      </motion.div>
    </div>
  );
};
