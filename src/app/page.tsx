import Header from "../components/Header/Header";
import About from "../components/About/About";
import Project from "../components/Projects/Projects";
import Work from "../components/Work/Work";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Letterboxd from "../components/Letterboxd/Letterboxd";
import BackToTop from "../components/BackToTop/BackToTop";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[var(--ink)] text-[var(--cream)]">
      <Header />
      <section className="w-full">
        <Hero />
      </section>
      <main className="w-full">
        <Project />
        <Work />
        <About />
        <Letterboxd />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
