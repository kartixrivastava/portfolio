import BackgroundGrid from "./components/BackgroundGrid";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundGrid />
      <Navbar />
      <main className="flex flex-col px-4 sm:px-0">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
