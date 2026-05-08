"use client";
import React from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#projects", label: "~/projects" },
  { href: "#work", label: "~/work" },
  { href: "#about", label: "~/about" },
  { href: "#favourites", label: "~/movies" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const clickedMenu = menuRef.current?.contains(target);
      const clickedButton = buttonRef.current?.contains(target);
      if (!clickedMenu && !clickedButton) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="fixed w-screen top-0 z-[9999]">
      <header
        className={`relative px-6 lg:px-12 bg-[rgba(20,19,15,0.2)] backdrop-blur-[2px] border-b border-[var(--border)] flex items-center justify-center transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg shadow-black/20" : "py-3"
        }`}
      >
        <div className="flex items-center gap-8">
          <a
            href="#"
            aria-label="Back to top"
            className="inline-flex items-center justify-center bg-[var(--accent)] rounded-md p-1.5 hover:brightness-105 transition"
          >
            <Image
              src="/images/android-chrome-192x192-removebg-preview.svg"
              height={36}
              width={42}
              alt="MW"
              priority
            />
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-7 font-mono text-[12px]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-[var(--accent)] hover:brightness-110 hover:underline underline-offset-4 transition py-2 rounded focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2">
          <button
            ref={buttonRef}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="cursor-pointer rounded p-1 text-[var(--cream)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 20 20"
            >
              <title>{menuOpen ? "close" : "menu"}</title>
              {menuOpen ? (
                <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-nav"
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-[var(--ink)] border-b border-[var(--border)] shadow-lg md:hidden"
          >
            <nav>
              <ul className="flex flex-col py-3 font-mono text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      className="block py-3 px-6 text-[var(--accent)] hover:brightness-110 hover:bg-[var(--surface)] transition"
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
