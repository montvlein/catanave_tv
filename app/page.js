import Footer from "@components/footer";
import Link from "next/link";
import { Button } from "@components/button-with-effect";
import TvComponent from "./client/components/tv";
import { videos } from "@/server/infoVideos";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh relative">
      <header>
        <div className="invisible">
          <h1>catannabistv</h1>
          <h2>Memes de autor</h2>
        </div>
        <Link href="https://cafecito.app/catannabistv" target="_blank" className="fixed top-5 right-5 z-50">
            <Button>
                <span className="flex gap-2 items-center uppercase">aportar <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5.5h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a1 1 0 0 1 1-1Zm6 1h.5a2.5 2.5 0 0 1 0 5H9M4 .5v2m3-2v2"/></svg></span>
            </Button>
        </Link>
      </header>
      <main className="flex-1 bg-img flex flex-wrap">
        <TvComponent videos={videos} />
        <div className="w-full min-h-[1vh] bg-transparent"></div>
      </main>
      <Footer/>
    </div>
  );
}
