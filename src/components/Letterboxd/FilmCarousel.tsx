"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import type { Film } from "./Letterboxd";

function formatStars(rating: number): string {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  return "★".repeat(full) + (hasHalf ? "½" : "");
}

export function FilmCarousel({ films }: { films: Film[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > a")?.offsetWidth ?? 200;
    const gap = 24;
    const visibleCards = Math.max(1, Math.round((el.clientWidth + gap) / (cardWidth + gap)));
    const distance = (cardWidth + gap) * visibleCards;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  };

  return (
    <div className="relative group/carousel">
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--accent)] text-[var(--ink)] transition-all -ml-4 cursor-pointer enabled:hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 12L6 8L10 4" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--accent)] text-[var(--ink)] transition-all -mr-4 cursor-pointer enabled:hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 12L10 8L6 4" />
        </svg>
      </button>

      {/* Fade edges */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--ink)] to-transparent z-[1] pointer-events-none" />
      )}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--ink)] to-transparent z-[1] pointer-events-none" />
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        data-film-carousel
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        <style>{`[data-film-carousel]::-webkit-scrollbar { display: none; }`}</style>
        {films.map((film) => (
          <a
            key={film.link}
            href={film.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-none w-[calc((100%-24px)/2)] sm:w-[calc((100%-48px)/3)] md:w-[calc((100%-96px)/5)] snap-start focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded"
          >
            <div className="aspect-[2/3] overflow-hidden rounded bg-[var(--surface)] border border-[var(--border)] transition-all duration-200 group-hover:border-[var(--accent)] group-hover:shadow-[0_8px_20px_-4px_rgba(252,211,104,0.25)]">
              <Image
                src={film.poster}
                alt={`${film.title} poster`}
                width={300}
                height={450}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 font-mono text-[11px] leading-snug">
              <div className="text-[var(--cream)] group-hover:text-[var(--accent)] transition-colors">
                {film.title}
              </div>
              <div className="text-[var(--accent)] opacity-70 mt-0.5">
                ({film.year}) {formatStars(film.rating)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
