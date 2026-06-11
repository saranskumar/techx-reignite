"use client";

import { ArrowUp, Mail, ExternalLink, Phone, Globe, MessageCircle } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 bg-[#161615] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Soft background ambient gradient */}
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full bg-[var(--accent-glow)] filter blur-[100px] pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Info (Span 5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="max-w-md">
              <div className="font-display font-extrabold text-3xl tracking-[0.2em] text-white hover:tracking-[0.25em] transition-all duration-500 mb-4 cursor-pointer">
                TECHX<span className="text-accent">.</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold font-mono mb-6">
                REIGNITE 2026
              </p>
              <p className="text-sm text-white/50 leading-relaxed font-light mb-8">
                Powering Minds, One spark at a time. The premier flagship engineering sprint organized by the IEEE Computer Society Student Branch Chapter at SCT College of Engineering.
              </p>
            </div>
            
            {/* Admission barcode stamp */}
            <div className="flex items-center gap-4 border-t border-white/5 pt-6 w-fit select-none">
              <div className="flex gap-[1.5px] h-7 items-center opacity-15">
                {[1, 3, 1, 2, 1, 4, 1, 2, 1, 3].map((width, idx) => (
                  <div key={idx} className="bg-white h-full" style={{ width: `${width}px` }} />
                ))}
              </div>
              <span className="text-[9px] font-mono text-white/25 tracking-widest">
                #TX-REIGNITE-2026
              </span>
            </div>
          </div>

          {/* Sprints Navigation Column (Span 2) */}
          <div className="md:col-span-2 sm:col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6 font-mono">
              Sprints
            </h4>
            <ul className="flex flex-col gap-3.5">
              {["About", "Tracks", "Timeline", "FAQ", "Join"].map((item) => (
                <li key={item}>
                  <a
                    href={item === "Join" ? "#join" : item === "Tracks" ? "#horizontal-sprint" : `#${item.toLowerCase()}`}
                    className="group text-sm text-white/60 hover:text-white transition-colors py-1 inline-flex items-center gap-1 font-light"
                  >
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Tracks Column (Span 2.5) */}
          <div className="md:col-span-2.5 sm:col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6 font-mono">
              Event Tracks
            </h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: "IoT Building", href: "#horizontal-sprint" },
                { name: "LLM Building", href: "#horizontal-sprint" },
                { name: "ADAS & Genetech", href: "#horizontal-sprint" },
                { name: "Placement & Mentor", href: "#horizontal-sprint" }
              ].map((track) => (
                <li key={track.name}>
                  <a
                    href={track.href}
                    className="text-sm text-white/60 hover:text-white transition-colors py-1 inline-block font-light"
                  >
                    {track.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column (Span 2.5) */}
          <div className="md:col-span-2.5 sm:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div className="w-full">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6 font-mono md:text-right">
                Connect
              </h4>
              <ul className="flex flex-col gap-3.5 md:items-end w-full">
                <li>
                  <a
                    href="https://ieeesctsb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sm text-white/60 hover:text-white transition-colors py-1 inline-flex items-center gap-1.5 font-light"
                  >
                    <Globe className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ieeesctsb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sm text-white/60 hover:text-white transition-colors py-1 inline-flex items-center gap-1.5 font-light"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/company/ieeesctsb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sm text-white/60 hover:text-white transition-colors py-1 inline-flex items-center gap-1.5 font-light"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://whatsapp.com/channel/0029Vakj3LDKLaHsJxbxMG0K"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sm text-white/60 hover:text-white transition-colors py-1 inline-flex items-center gap-1.5 font-light"
                  >
                    <MessageCircle className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mailtoieeesctsb@gmail.com"
                    className="group text-sm text-white/60 hover:text-accent transition-colors py-1 inline-flex items-center gap-1.5 font-light"
                  >
                    <Mail className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                    <span>Email Support</span>
                  </a>
                </li>
                <li className="h-[1px] bg-white/5 w-24 my-2 md:ml-auto" />
                <li className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/40 md:text-right mt-1">
                  Support Contacts
                </li>
                <li>
                  <a
                    href="tel:+919567694707"
                    className="group text-xs text-white/50 hover:text-accent transition-colors py-0.5 inline-flex items-center gap-1.5 font-mono"
                  >
                    <Phone className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span>Alfy: +91 9567694707</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919496749043"
                    className="group text-xs text-white/50 hover:text-accent transition-colors py-0.5 inline-flex items-center gap-1.5 font-mono"
                  >
                    <Phone className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span>Agraja: +91 9496749043</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Back to Top Floating-style circular glass button */}
            <div className="mt-10 md:mt-0 flex justify-start md:justify-end w-full">
              <button
                onClick={scrollToTop}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white/70 hover:text-accent hover:border-accent/40 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer shadow-lg"
                title="Scroll to top"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

        </div>

        {/* Giant outline marquee branding running horizontally at the bottom */}
        <div className="select-none pointer-events-none w-full my-6 text-[15vw] font-display font-extrabold text-center text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.02)] leading-none uppercase tracking-[0.1em]">
          TECHX
        </div>

        <div className="h-[1px] bg-white/5 w-full mb-8" />

        {/* Legal and Copyright bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[9px] text-white/30 tracking-[0.25em] font-light uppercase">
          <div className="text-center sm:text-left">
            © 2026 IEEE TECHX REIGNITE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/60 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
