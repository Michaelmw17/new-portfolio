"use client";

import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Github } from "lucide-react";
import MatrixRain from "../Matrix/MatrixRain";

const STACK = ["React", "TypeScript", "Next.js", "Node"];

const SOCIAL_LINK_CLASS =
  "text-[var(--cream)] hover:text-[var(--accent)] transition-colors rounded focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2";

const CTA_BASE =
  "group font-mono text-xs font-medium px-4 py-2.5 rounded border border-[var(--accent)] bg-[var(--accent)] text-[var(--ink)] transition-all duration-200 cursor-pointer hover:bg-transparent hover:text-[var(--cream)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(252,211,104,0.35)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden bg-[var(--ink)] pt-28 md:pt-36 pb-20 md:pb-28">
      <MatrixRain />

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
        <div className="label-mono inline-block bg-[var(--surface)] border border-[var(--border)] px-2.5 py-1 rounded mb-5">{"// frontend engineer"}</div>

        <h1 className="serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-3xl">
          Frontend, designed <br />  for <em>humans</em>.
        </h1>

        <p className="text-[var(--cream)] text-base md:text-lg leading-relaxed max-w-xl mb-8">
          Sydney-based developer. 4+ years shipping React, TypeScript, and Next.js across
          14 insurance brands at Greenstone Financial Services.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] font-medium text-[var(--ink)] bg-[var(--accent)] px-2.5 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-5 mb-8 bg-[var(--surface)] border border-[var(--border)] px-3 py-2 rounded">
          <a href="mailto:michaelmw17@outlook.com" aria-label="Email" className={SOCIAL_LINK_CLASS}>
            <EnvelopeIcon className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Michaelmw17/"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className={SOCIAL_LINK_CLASS}
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/michael-watt-6a76961b3/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className={SOCIAL_LINK_CLASS}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path
                d="M6.94 17h2.12V10.5H6.94V17zM8 9.44a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46zM11.06 17h2.12v-3.13c0-.75.27-1.26.95-1.26.68 0 .97.51.97 1.26V17h2.12v-3.36c0-1.67-.89-2.44-2.08-2.44-1.01 0-1.46.56-1.71.95v-0.81h-2.12c.03.53 0 5.66 0 5.66z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          <button onClick={() => scrollTo("projects")} className={CTA_BASE}>
            view projects{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
          <button onClick={() => scrollTo("about")} className={CTA_BASE}>
            read about me{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
