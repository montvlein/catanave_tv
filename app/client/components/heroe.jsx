import { HeroParallax } from "./hero-parallax";
import { videos } from "@/server/infoVideos";

export default function Hero() {
    return(
      <HeroParallax products={videos} />
    )
}
