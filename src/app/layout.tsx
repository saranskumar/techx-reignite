import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Geist_Mono, Noto_Serif_JP, Syne } from "next/font/google";

import { Grain } from "@/components/grain";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
    default: "TechX REIGNITE 2026 — IEEE CS SCT SBC",
    template: "%s — TechX REIGNITE",
  },
  description:
    "TechX REIGNITE is a technical upskilling summit by IEEE CS SCT SBC. 13–27 September 2026 at SCT College of Engineering, Trivandrum.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "TechX REIGNITE 2026 — IEEE CS SCT SBC",
    description:
      "Powering minds, one spark at a time. Pre-events 13–19 September. Flagship summit 26–27 September at SCTCE, Trivandrum.",
    images: ["/art/hero-neural.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${cormorant.variable} ${notoJp.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-cream text-brown">
        <a
          href="#about"
          className="font-display bg-amber text-cream sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[90] focus:px-4 focus:py-2 focus:text-[11px] focus:tracking-[0.2em] focus:uppercase"
        >
          Skip to about
        </a>
        <ScrollProgress />
        <Grain />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
