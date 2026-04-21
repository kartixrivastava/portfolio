import BackgroundGrid from "../components/BackgroundGrid";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <BackgroundGrid />
      <Navbar />
      <main className="flex flex-col px-4 sm:px-0 pt-16">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
