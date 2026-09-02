import { About } from "@/components/about";
import { Advantage } from "@/components/advantage";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { PreEvents } from "@/components/pre-events";
import { Register } from "@/components/register";
import { SiteFooter } from "@/components/site-footer";
import { Speakers } from "@/components/speakers";
import { Summit } from "@/components/summit";
import { Tickets } from "@/components/tickets";
import { Tracks } from "@/components/tracks";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <Hero />
      <About />
      <Pillars />
      <Tracks />
      <PreEvents />
      <Summit />
      <Advantage />
      <Speakers />
      <Tickets />
      <Faq />
      <Register />
      <SiteFooter />
    </main>
  );
}
