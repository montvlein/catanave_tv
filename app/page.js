import { HeroParallax } from "@components/hero-parallax";
import { videos } from "./server/infoVideos";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero/>
    </main>
  );
}

function Hero() {
  return(
    <HeroParallax products={videos} />
  )
}
