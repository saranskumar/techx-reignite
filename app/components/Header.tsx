"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface HeaderProps {
  muted: boolean;
  onToggleMute: () => void;
}

export default function Header({ muted, onToggleMute }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#horizontal-sprint" }, // Horizontal panel section has scroll-trigger
    { name: "Timeline", href: "#timeline" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-primary-border bg-primary-bg/70 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#hero"
            onClick={closeMenu}
            className="font-display font-extrabold text-lg tracking-[0.2em] text-white hover:text-accent transition-all z-50"
          >
            TECHX
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-50">
            {/* Audio Toggle */}
            <button
              onClick={onToggleMute}
              className="flex items-center justify-center p-2 rounded-full border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
              title="Toggle audio drone"
              data-no-chime
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse text-accent" />}
            </button>
            
            {/* Desktop Register Button */}
            <a
              href="#join"
              className="hidden md:inline-block px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold border border-white/15 bg-white/5 rounded-full hover:border-accent hover:bg-white/10 transition-all"
            >
              Register
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center w-8 h-8 md:hidden relative cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className={`w-5 h-[1.5px] bg-white hamburger-line ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`w-5 h-[1.5px] bg-white hamburger-line mt-1.5 ${menuOpen ? "scale-x-0" : ""}`} />
              <span className={`w-5 h-[1.5px] bg-white hamburger-line mt-1.5 ${menuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Expanding Circular Menu */}
      <div className={`cover-menu md:hidden ${menuOpen ? "active" : ""}`}>
        <div className="cover-background" />
        <div className="cover-content">
          <div className="flex flex-col gap-8 items-start justify-center h-full">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent font-bold">Menu Navigation</span>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-4xl font-display text-white hover:text-accent transition-all"
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <span className="text-xs text-white/30 mr-4 font-mono font-normal">0{idx + 1}</span>
                {link.name}
              </a>
            ))}
            <a
              href="#join"
              onClick={closeMenu}
              className="mt-8 px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold bg-accent text-black rounded-full"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
