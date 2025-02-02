import Footer from "@components/footer";
import PromotionalDisplay from "./client/components/promotionalDisplay";
import TvComponent from "./client/components/tv";
import VideoComponent from "./client/components/videoPlayer";

export default function Home() {

  return (
    <div className="flex flex-col min-h-dvh relative">
      <header>
        <div className="hidden">
          <h1>catannabis tv</h1>
          <h2>Memes de autor</h2>
          <p>En Catannabis TV podes ver, leer y reir con memes de contenido original</p>
        </div>
        <a href="https://cafecito.app/catannabistv" title="aportar" target="_blank" className="fixed top-5 right-5 z-50">
          <button className="bg-slate-900/[0.8] relative text-xl min-h-12 p-2 overflow-hidden border-4 border-dance border-transparent">
            <span className="flex gap-2 items-center uppercase">aportar <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 2 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5.5h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a1 1 0 0 1 1-1Zm6 1h.5a2.5 2.5 0 0 1 0 5H9M4 .5v2m3-2v2"/></svg></span>
          </button>
        </a>
      </header>
      <main className="flex-1 bg-img flex flex-wrap">
        <PromotionalDisplay />
        <TvComponent>
          <VideoComponent videoUrlMp4={"/videos/firma.mp4"} videoUrlWebm={"/videos/firma.webm"} isMuted={true} />
        </TvComponent>
        <div className="w-full min-h-[1vh] md:min-h-0 bg-transparent"></div>
      </main>
      <Footer/>
    </div>
  );
}

