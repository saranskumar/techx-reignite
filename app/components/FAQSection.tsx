"use client";

import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: FAQItem[];
}

export default function FAQSection({ faqData }: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen relative flex items-center justify-center px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-[#1B1B1A]/20 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full bg-[var(--accent-glow)] filter blur-[80px] pointer-events-none opacity-20" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start z-10">
        
        {/* Left Column - Sticky Section Details */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4 font-mono font-bold">
            07 / Support
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6 leading-none">
            Common <br /> Questions
          </h2>
          <p className="text-sm text-white/50 leading-relaxed font-light max-w-sm mb-8">
            Find answers to frequently asked questions about schedules, team configurations, venues, and registration criteria.
          </p>

          {/* Quick Support Card widget */}
          <div className="bg-[#2A2A28]/25 border border-white/5 rounded-xl p-5 flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8.5 h-8.5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-white/40 block font-mono">Email Support</span>
                <a href="mailto:mailtoieeesctsb@gmail.com" className="text-xs text-white/80 hover:text-accent font-semibold transition-colors font-mono">
                  mailtoieeesctsb@gmail.com
                </a>
              </div>
            </div>
            <div className="h-[1px] bg-white/5 w-full" />
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span className="font-light">Alfy (Support Lead)</span>
                <a href="tel:+919567694707" className="font-mono text-accent hover:text-white hover:underline transition-colors font-bold">+91 9567694707</a>
              </div>
              <div className="flex items-center justify-between text-xs text-white/50">
                <span className="font-light">Agraja (Support Lead)</span>
                <a href="tel:+919496749043" className="font-mono text-accent hover:text-white hover:underline transition-colors font-bold">+91 9496749043</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Accordions Grid */}
        <div className="lg:col-span-8 flex flex-col gap-4 w-full">
          {faqData.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl px-6 py-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden
                  ${isOpen 
                    ? "bg-[#2A2A28]/35 border-accent/25 shadow-[0_8px_30px_rgba(0,0,0,0.3)]" 
                    : "bg-[#2A2A28]/15 hover:bg-[#2A2A28]/35 border-white/5 hover:border-accent/15"
                  }`}
              >
                {/* Active vertical accent border */}
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-accent transition-transform duration-500 origin-top
                  ${isOpen ? "scale-y-100" : "scale-y-0"}`} 
                />

                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left py-1 text-white hover:text-accent transition-all cursor-pointer group"
                >
                  <span className="text-base md:text-lg font-medium tracking-wide leading-snug pr-8 group-hover:translate-x-1 transition-transform duration-300">
                    {item.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] 
                    ${isOpen ? "rotate-180 text-accent" : "text-white/40"}`} 
                  />
                </button>
                
                <div 
                  className={`transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden
                    ${isOpen ? "max-h-56 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <div className="h-[1px] bg-white/5 w-full mb-4" />
                  <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
