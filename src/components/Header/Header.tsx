"use client";
import React from "react";
import Image from "next/image";
import { UserIcon, BriefcaseIcon, FolderIcon } from "@heroicons/react/24/outline";

const Header = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="Container-nav fixed w-screen top-0 z-[9999]">
      <header
        className={`lg:px-16 px-8 bg-white flex items-center shadow-md transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
      >
        {/* Centered logo and nav */}
        <div className="flex items-center justify-content md:justify-center gap-8 flex-1">
        <div className="flex-shrink-0 flex justify-center md:justify-center sm:justify-start">
          <a href="#" aria-label="Back to top">
            <Image
              src="/images/android-chrome-192x192-removebg-preview.svg"
              height={60}
              width={70}
              alt="MW"
            />
          </a>
        </div>
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center text-base text-gray-700 gap-8">
              <li>
                <a className="md:p-4 py-3 px-0 block flex items-center gap-2 group hover:text-[#229797] transition-colors" href="#about">
                  <UserIcon className="h-5 w-5 text-[#38b2ac] transition-colors group-hover:text-[#229797]" />
                  <span className="transition-colors">About</span>
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block flex items-center gap-2 group hover:text-[#229797] transition-colors" href="#work">
                  <BriefcaseIcon className="h-5 w-5 text-[#38b2ac] transition-colors group-hover:text-[#229797]" />
                  <span className="transition-colors">Work Experience</span>
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block flex items-center gap-2 group hover:text-[#229797] transition-colors" href="#projects">
                  <FolderIcon className="h-5 w-5 text-[#38b2ac] transition-colors group-hover:text-[#229797]" />
                  <span className="transition-colors">Projects</span>
                </a>
              </li>
              {/* <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#contact">Contact Us</a></li> */}
            </ul>
          </nav>
        </div>

        {/* Hamburger right */}
        <div className="md:hidden flex-shrink-0 flex justify-end">
          <button
            aria-label="Toggle menu"
            className="cursor-pointer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div ref={menuRef} className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-[9999]">
            <nav>
              <ul className="flex flex-col items-center text-base text-gray-700 py-4 gap-4">
                <li>
                  <a className="py-2 px-4 block flex items-center gap-2 group hover:text-[#229797] transition-colors" href="#about" onClick={() => setMenuOpen(false)}>
                    <UserIcon className="h-5 w-5 text-[#38b2ac] transition-colors group-hover:text-[#229797]" />
                    <span className="transition-colors">About</span>
                  </a>
                </li>
                <li>
                  <a className="py-2 px-4 block flex items-center gap-2 group hover:text-[#229797] transition-colors" href="#work" onClick={() => setMenuOpen(false)}>
                    <BriefcaseIcon className="h-5 w-5 text-[#38b2ac] transition-colors group-hover:text-[#229797]" />
                    <span className="transition-colors">Work Experience</span>
                  </a>
                </li>
                <li>
                  <a className="py-2 px-4 block flex items-center gap-2 group hover:text-[#229797] transition-colors" href="#projects" onClick={() => setMenuOpen(false)}>
                    <FolderIcon className="h-5 w-5 text-[#38b2ac] transition-colors group-hover:text-[#229797]" />
                    <span className="transition-colors">Projects</span>
                  </a>
                </li>
                {/* <li><a className="py-2 px-4 block" href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li> */}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
