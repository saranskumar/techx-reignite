"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#journey", label: "Journey" },
  { href: "#summit", label: "Summit" },
  { href: "#tickets", label: "Tickets" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [overHero, setOverHero] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting && entry.intersectionRatio > 0.28);
      },
      { threshold: [0, 0.28, 0.6, 1] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = overHero && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        inverted
          ? "bg-transparent text-cream"
          : "bg-cream/92 text-brown backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10 md:py-4">
        <a
          href="#top"
          className="font-display flex shrink-0 items-baseline gap-2 tracking-[0.18em] whitespace-nowrap uppercase sm:tracking-[0.22em]"
        >
          <span className="text-[11px] font-semibold">TechX</span>
          <span className="text-[11px] font-medium text-amber">Reignite</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[10px] font-medium tracking-[0.2em] uppercase opacity-80 transition-opacity hover:opacity-100 xl:text-[11px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#register"
            className={cn(
              "font-display hidden h-9 items-center px-4 text-[10px] tracking-[0.22em] uppercase sm:inline-flex",
              inverted
                ? "bg-amber text-cream"
                : "bg-brown text-cream hover:bg-brown-mid"
            )}
          >
            Register
          </a>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-none hover:bg-transparent lg:hidden",
              inverted ? "text-cream" : "text-brown"
            )}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[min(80svh,32rem)] overflow-y-auto border-t border-amber/30 bg-cream text-brown lg:hidden">
          <nav className="flex flex-col px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display border-b border-amber/20 py-4 text-sm tracking-[0.24em] uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="font-display mt-4 bg-amber py-4 text-center text-sm tracking-[0.24em] text-cream uppercase"
            >
              Register
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
