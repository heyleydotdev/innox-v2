import { CommentsSection } from "~/app/(base)/_sections/comments";
import { HeroSection } from "~/app/(base)/_sections/hero";
import { PackagesSection } from "~/app/(base)/_sections/packages";
import { PlatformsSection } from "~/app/(base)/_sections/platforms";
import { ServicesSection } from "~/app/(base)/_sections/services";
import { SupportSection } from "~/app/(base)/_sections/support";
import { WorkforceSection } from "~/app/(base)/_sections/workforce";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <PlatformsSection />
      <ServicesSection />
      <WorkforceSection />
      <PackagesSection />
      <CommentsSection />
      <SupportSection />
    </div>
  );
}
