"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#atlas", label: "Atlas" },
  { href: "#gathering", label: "Gathering" },
  { href: "#invitation", label: "Invitation" },
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
          : "bg-cream/90 text-brown backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <a
          href="#top"
          className="font-display flex items-baseline gap-2 tracking-[0.28em] uppercase"
        >
          <span className="text-[11px] font-semibold">TechX</span>
          <span className="text-[11px] font-medium text-amber">
            Reignite
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[11px] font-medium tracking-[0.22em] uppercase opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden rounded-none hover:bg-transparent",
            inverted ? "text-cream" : "text-brown"
          )}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-amber/30 bg-cream text-brown md:hidden">
          <nav className="flex flex-col px-5 py-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display border-b border-amber/20 py-4 text-sm tracking-[0.28em] uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
