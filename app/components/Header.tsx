"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  visible: boolean;
}

export default function Header({ visible }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#horizontal-sprint" },
    { name: "Timeline", href: "#timeline" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${scrolled 
          ? "top-4 bg-[#212120]/95 border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)] max-w-4xl h-14" 
          : "top-6 bg-[#2A2A28]/60 border-white/5 shadow-lg max-w-5xl h-16"
        }
        ${menuOpen 
          ? "w-[calc(100%-2rem)] rounded-[28px] px-6 pb-6 pt-3 h-[320px] max-w-none!" 
          : "w-[calc(100%-2rem)] rounded-full px-6"
        }
        backdrop-blur-xl flex flex-col justify-start overflow-hidden`}
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 1000ms ease-out"
      }}
    >
      {/* Top row - always visible */}
      <div className="w-full flex items-center justify-between h-full flex-shrink-0">
        <a
          href="#hero"
          onClick={closeMenu}
          className="font-display font-extrabold text-sm md:text-base tracking-[0.2em] hover:tracking-[0.3em] text-white hover:text-accent transition-all duration-500 z-50 flex items-center gap-0.5"
        >
          TECHX<span className="text-accent text-[8px] animate-pulse leading-none -translate-y-1">.</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-[11px] uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 z-50">
          {/* Desktop Register Button with barcode decoration & slide hover */}
          <a
            href="#join"
            className="group hidden md:inline-flex items-center gap-2 px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-bold border border-white/15 text-white/80 rounded-md hover:border-accent hover:text-[#0B0B0B] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white/5 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-accent scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:origin-left z-0" />
            <span className="relative z-10 flex items-center">
              <span className="flex gap-[1px] h-3 items-center opacity-30 group-hover:opacity-75 transition-opacity duration-300 mr-2">
                <span className="w-[1px] h-full bg-current" />
                <span className="w-[2px] h-full bg-current" />
                <span className="w-[1px] h-full bg-current" />
                <span className="w-[1px] h-full bg-current" />
              </span>
              <span className="mr-1">Register</span>
              <svg 
                className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1 text-accent group-hover:text-[#0B0B0B]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center w-8 h-8 md:hidden relative cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-[1.5px] bg-white hamburger-line transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-white hamburger-line mt-1.5 transition-all duration-300 ${menuOpen ? "scale-x-0" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-white hamburger-line mt-1.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation links */}
      <div 
        className={`w-full flex flex-col items-stretch transition-all duration-500 delay-75 md:hidden
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="h-[1px] bg-white/5 w-full my-2" />
        <nav className="flex flex-col gap-3 py-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              style={{
                transitionDelay: menuOpen ? `${idx * 60 + 100}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(15px)",
                opacity: menuOpen ? 1 : 0,
              }}
              className="transition-all duration-500 text-2xl font-display text-white hover:text-accent flex items-center justify-between py-1 border-b border-white/5 last:border-0"
            >
              <span>{link.name}</span>
              <span className="text-[10px] text-white/30 font-mono font-normal">0{idx + 1}</span>
            </a>
          ))}
        </nav>
        <a
          href="#join"
          onClick={closeMenu}
          style={{
            transitionDelay: menuOpen ? `${navLinks.length * 60 + 100}ms` : "0ms",
            transform: menuOpen ? "translateY(0)" : "translateY(15px)",
            opacity: menuOpen ? 1 : 0,
          }}
          className="group mt-4 w-full py-3 text-xs uppercase tracking-[0.2em] font-semibold bg-accent text-[#0B0B0B] border border-accent rounded-full hover:bg-transparent hover:text-accent transition-all duration-500 text-center flex items-center justify-center gap-1.5"
        >
          <span>Register Now</span>
          <svg 
            className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </header>
  );
}
