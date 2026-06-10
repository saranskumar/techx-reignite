"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section id="faq" className="min-h-screen relative flex flex-col justify-center px-6 py-24 bg-black/20">
      <div className="max-w-3xl w-full mx-auto z-10">
        <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-semibold">07 / Support</p>
        <h2 className="text-4xl md:text-6xl font-display text-white mb-16 leading-none">Common Questions</h2>
        
        <div className="flex flex-col gap-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-white/10 pb-6 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between text-left py-2 text-white hover:text-accent transition-all cursor-pointer"
              >
                <span className="text-lg md:text-xl font-medium tracking-wide">{item.question}</span>
                <ChevronDown className={`w-5 h-5 faq-chevron ${openFaq === idx ? "open" : ""}`} />
              </button>
              <div className={`faq-answer ${openFaq === idx ? "open" : ""}`}>
                <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
