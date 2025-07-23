
"use client";
import Header from "../components/Header/Header";
import React from "react";
import About from "../components/About/About";
import Project from "../components/Projects/Projects";
import Work from "../components/Work/Work";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Blobs background layer */}
      <div
        className="absolute inset-0 w-full pointer-events-none z-[-10]"
        aria-hidden="true"
      >
      </div>
      <Header />
      <section className="w-full">
        <Hero />
      </section>
      <main className="w-full">
        <About />
        <Work />
        <Project />
      </main>
      <Footer />
      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={handleBackToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[10000] bg-[#05fdfd] text-white rounded-full shadow-lg p-2 flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
