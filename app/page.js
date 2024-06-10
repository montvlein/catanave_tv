import Footer from "@components/footer";
import Hero from "@components/heroe";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero/>
      <Footer/>
    </main>
  );
}
