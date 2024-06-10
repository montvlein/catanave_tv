'use client'

import { HeroParallax } from "./hero-parallax";
import { videos } from "@/server/infoVideos";
import { useWindowSize } from "@uidotdev/usehooks";
import { HeroTitle } from "./hero-title";
import Slider from "./slider";

export default function Hero() {
  const size = useWindowSize();
  const isMobile = size.width < 882;

  if (isMobile) return <HeroPhone products={videos} />

  return(
    <HeroParallax products={videos} />
  )
}

function HeroPhone({products}) {
  return (
    <section className="bg-custom">
      <HeroTitle />
      <Slider />
    </section>
  )
}
