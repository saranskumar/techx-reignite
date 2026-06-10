"use client";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center px-6 pt-20 text-center">
      <div className="max-w-5xl z-10 w-full">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 filter drop-shadow-[0_0_8px_rgba(191,199,207,0.4)] font-semibold">
          July 13 - 19, 2026 | SCT College of Engineering
        </p>
        
        {/* Monumental Typography with SVG self-drawing stroke animation */}
        <div className="w-full flex flex-col items-center justify-center mb-12">
          <h1 className="text-7xl sm:text-8xl md:text-9xl mb-2 font-display text-white leading-none tracking-tighter">
            TECHX
          </h1>
          <svg 
            className="outlined-svg-text w-full max-w-lg md:max-w-2xl h-24 md:h-36 overflow-visible select-none" 
            viewBox="0 0 600 100"
          >
            <text 
              x="50%" 
              y="70%" 
              textAnchor="middle" 
              className="font-display font-extrabold text-6xl md:text-8xl tracking-tight"
            >
              REIGNITE
            </text>
          </svg>
        </div>
        
        <p className="text-sm md:text-lg tracking-[0.25em] text-white/70 uppercase max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Powering Minds, One spark at a time
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#join"
            className="w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.3em] font-semibold bg-accent text-black rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(191,199,207,0.4)] transition-all cursor-pointer"
          >
            Join the Sprint
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.3em] font-semibold border border-white/20 hover:border-white/50 rounded-full transition-all cursor-pointer"
          >
            Explore Vision
          </a>
        </div>
      </div>
    </section>
  );
}
