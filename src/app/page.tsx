import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { PhilosophyTabs } from "@/components/sections/PhilosophyTabs";
import { Services } from "@/components/sections/Services";
import { Staff } from "@/components/sections/Staff";
import { Facilities } from "@/components/sections/Facilities";
import { BlogLinks } from "@/components/sections/BlogLinks";
import { OfficialChannels } from "@/components/sections/OfficialChannels";
import { Location } from "@/components/sections/Location";
import { MobileCTA } from "@/components/layout/MobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full pb-16 lg:pb-0">
        <Hero />
        <BrandIntro />
        <PhilosophyTabs />
        <Services />
        <Staff />
        <Facilities />
        <BlogLinks />
        <OfficialChannels />
        <Location />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
