import { infos } from "@/config/landing";
import { BentoGrid } from "@/components/sections/bentogrid";
import { Features } from "@/components/sections/features";
import { HeroLanding } from "@/components/sections/hero-landing";
import { InfoLanding } from "@/components/sections/info-landing";
import { Powered } from "@/components/sections/powered";
import { PreviewLanding } from "@/components/sections/preview-landing";
import { Testimonials } from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import Contact from "@/components/sections/contact";
import { SetDirection } from "@/components/sections/set-direction";

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />
      <PreviewLanding />
      <Powered />
      <BentoGrid />
      <InfoLanding data={infos[0]}  />
      {/* <InfoLanding data={infos[1]} />
      <Features />
      <Testimonials /> */}
      <SetDirection />
      <Pricing/>
      <Contact/>
    </>
  );
}
