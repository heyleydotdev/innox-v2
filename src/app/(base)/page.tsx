import { HeroSection } from "~/app/(base)/_sections/hero";
import { PlatformsSection } from "~/app/(base)/_sections/platforms";
import { ServicesSection } from "~/app/(base)/_sections/services";
import { WorkforceSection } from "~/app/(base)/_sections/workforce";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <PlatformsSection />
      <ServicesSection />
      <WorkforceSection />
      <div className="h-screen"></div>
    </div>
  );
}
