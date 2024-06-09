import { HeroParallax } from "@components/hero-parallax";
import { videos } from "./server/infoVideos";
import Footer from "@components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero/>
      <Footer/>
    </main>
  );
}

function Hero() {
  return(
    <HeroParallax products={videos} />
  )
}
