"use client";
import React from "react";
import ParticlesBackground from "../ParticlesBackground";


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
        <div className="mt-2 md:mt-10 flex flex-wrap justify-center items-center w-full mx-auto md:space-x-4">
          <button
            className="w-full min-w-[174px] sm:w-48 bg-transparent hover:bg-blue-500 active:bg-blue-500 text-blue-700 font-bold hover:text-white active:text-white py-2 px-4 my-4 border border-blue-500 rounded inline-flex items-center justify-center"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                el.focus && el.focus();
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
                el.focus && el.focus();
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