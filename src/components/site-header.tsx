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
  const [active, setActive] = useState("#about");

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
    const ids = links.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
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
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="page-pad flex min-h-14 items-center justify-between gap-2 py-2 md:min-h-16 md:py-3">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display flex min-w-0 shrink items-baseline gap-1.5 tracking-[0.14em] uppercase sm:gap-2 sm:tracking-[0.22em]"
        >
          <span className="text-[11px] font-semibold">TechX</span>
          <span className="text-[11px] font-medium text-amber">Reignite</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-[10px] font-medium tracking-[0.2em] uppercase transition-colors xl:text-[11px]",
                active === link.href
                  ? "text-amber opacity-100"
                  : "opacity-70 hover:opacity-100"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className={cn(
              "font-display inline-flex h-9 items-center px-3 text-[9px] tracking-[0.18em] uppercase sm:h-9 sm:px-4 sm:text-[10px] sm:tracking-[0.22em]",
              inverted
                ? "btn-amber"
                : "bg-brown text-cream hover:bg-amber-hover"
            )}
          >
            Register
          </a>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "size-11 rounded-none hover:bg-transparent lg:hidden",
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
        <div className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-amber/30 bg-cream text-brown lg:hidden"
          style={{
            top: "calc(3.5rem + env(safe-area-inset-top))",
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
          }}
        >
          <nav className="page-pad flex min-h-full flex-col py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-display flex min-h-14 items-center border-b border-amber/20 text-sm tracking-[0.2em] uppercase",
                  active === link.href ? "text-amber" : ""
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="font-display mt-6 mb-4 flex min-h-14 items-center justify-center bg-amber text-sm tracking-[0.24em] text-cream uppercase"
            >
              Register
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
