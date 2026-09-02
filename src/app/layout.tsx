import type { Metadata } from "next";
import { Cormorant_Garamond, Geist_Mono, Noto_Serif_JP, Syne } from "next/font/google";

import { Grain } from "@/components/grain";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const notoJp = Noto_Serif_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechX REIGNITE — Amber Futurism",
    template: "%s — TechX REIGNITE",
  },
  description:
    "TechX REIGNITE is a gathering drawn in Amber Futurism: warm retro-futurist editorial art, architectural concept landscapes, and a single monochromatic world.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "TechX REIGNITE — Amber Futurism",
    description:
      "Warm retro-futurist editorial art for a century that is just beginning.",
    images: ["/art/hero-neural.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${cormorant.variable} ${notoJp.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-brown">
        <a
          href="#manifesto"
          className="font-display bg-amber text-cream sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[90] focus:px-4 focus:py-2 focus:text-[11px] focus:tracking-[0.2em] focus:uppercase"
        >
          Skip to manifesto
        </a>
        <Grain />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
