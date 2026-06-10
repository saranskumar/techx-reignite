"use client";

import { Volume2, VolumeX } from "lucide-react";

interface HeaderProps {
  muted: boolean;
  onToggleMute: () => void;
}

export default function Header({ muted, onToggleMute }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display font-extrabold text-lg tracking-[0.2em] text-white hover:text-[#00e5ff] transition-all"
        >
          TECHX
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="nav-link text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
          >
            About
          </a>
          <a
            href="#tracks"
            className="nav-link text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
          >
            Tracks
          </a>
          <a
            href="#timeline"
            className="nav-link text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
          >
            Timeline
          </a>
          <a
            href="#faq"
            className="nav-link text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Audio Toggle */}
          <button
            onClick={onToggleMute}
            className="flex items-center justify-center p-2 rounded-full border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
            title="Toggle audio drone"
            data-no-chime // Cursor follower won't overlay dual click sound
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse text-[#00e5ff]" />}
          </button>
          
          <a
            href="#join"
            className="px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold border border-white/15 bg-white/5 rounded-full hover:border-[#00e5ff] hover:bg-white/10 transition-all"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
