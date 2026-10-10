import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HeroScrollLock from "@/components/HeroScrollLock";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Proof from "@/components/Proof";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { heroIntroLockScript } from "@/lib/hero-intro";

export default function Home() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: heroIntroLockScript }} />
      <HeroScrollLock />
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Proof />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
