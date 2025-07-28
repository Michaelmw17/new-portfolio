"use client";

import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Github } from "lucide-react";


export default function Hero() {
  return (
    <div className="head relative w-full h-[600px] overflow-hidden bg-[#05fdfd] pt-20 md:pt-32">
      <div className="absolute inset-0 h-full pointer-events-none z-0">
        <ParticlesBackground />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-16 px-14 sm:px-6 lg:px-8">
        <h1 className="font-bold text-2xl md:text-4xl text-center text-gray-800 mt-4 md:mt-0">
          Welcome to my portfolio!
        </h1>
        <div className="max-w-xl mx-auto">
          <p className="mt-4 md:mt-10 text-gray-500 text-center text-xl lg:text-3xl">
            Frontend Developer | Creating seamless, responsive web apps, I’m focused on clean code and great UX. — Michael.
          </p>
        </div>
        {/* Social/contact icons row */}
        <div className="mt-6 mb-2 flex flex-row space-x-6 justify-center items-center">
          {/* Email Icon */}
          <a href="mailto:michaelmw17@outlook.com" aria-label="Email"
            className="group transition-all"
          >
            <EnvelopeIcon className="h-7 w-7 text-[#0A66C2] group-hover:text-[#1DA1F2] group-hover:scale-110 transition-all" />
          </a>
          {/* GitHub Icon */}
          <a href="https://github.com/Michaelmw17/" aria-label="GitHub" target="_blank" rel="noopener noreferrer"
            className="group transition-all"
          >
            <Github className="h-7 w-7 text-[#0A66C2] group-hover:text-[#1DA1F2] group-hover:scale-110 transition-all" />
          </a>
          {/* LinkedIn Icon */}
          <a href="https://linkedin.com/in/michael-watt-6a76961b3/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
            className="group transition-all"
          >
            <svg className="h-7 w-7 text-[#0A66C2] group-hover:text-[#1DA1F2] group-hover:scale-110 transition-all" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="transition-colors" />
              <path d="M6.94 17h2.12V10.5H6.94V17zM8 9.44a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46zM11.06 17h2.12v-3.13c0-.75.27-1.26.95-1.26.68 0 .97.51.97 1.26V17h2.12v-3.36c0-1.67-.89-2.44-2.08-2.44-1.01 0-1.46.56-1.71.95v-0.81h-2.12c.03.53 0 5.66 0 5.66z" fill="currentColor" className="transition-colors" />
            </svg>
          </a>
        </div>
        {/* Buttons row */}
        <div className="mt-2 md:mt-4 flex flex-wrap justify-center items-center w-full mx-auto md:space-x-4">
          <button
            className="w-full min-w-[174px] sm:w-48 bg-transparent hover:bg-blue-500 active:bg-blue-500 text-blue-700 font-bold hover:text-white active:text-white py-2 px-4 my-4 border border-blue-500 rounded inline-flex items-center justify-center"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                if (el.focus) el.focus();
              }
            }}
          >
            <span>See my Projects</span>
            <svg
              className="ml-2 w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
          <button
            className="w-full min-w-[174px] sm:w-48 bg-transparent hover:bg-blue-500 active:bg-blue-500 text-blue-700 font-bold hover:text-white active:text-white py-2 px-4 my-4 border border-blue-500 rounded inline-flex items-center justify-center"
            onClick={() => {
              const el = document.getElementById('about');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                if (el.focus) el.focus();
              }
            }}
          >
            <span>Read about me</span>
            <svg
              className="ml-2 w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    );
  }