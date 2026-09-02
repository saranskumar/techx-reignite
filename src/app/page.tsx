import { Atlas } from "@/components/atlas";
import { Gathering } from "@/components/gathering";
import { Hero } from "@/components/hero";
import { Invitation } from "@/components/invitation";
import { Manifesto } from "@/components/manifesto";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Manifesto />
      <Atlas />
      <Gathering />
      <Invitation />
      <SiteFooter />
    </main>
  );
}
