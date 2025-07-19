import type { Metadata } from "next";

import { CommentsSection } from "~/app/(base)/_sections/comments";
import { HeroSection } from "~/app/(base)/_sections/hero";
import { PackagesSection } from "~/app/(base)/_sections/packages";
import { PlatformsSection } from "~/app/(base)/_sections/platforms";
import { ServicesSection } from "~/app/(base)/_sections/services";
import { SectionStages } from "~/app/(base)/_sections/stages";
import { SupportSection } from "~/app/(base)/_sections/support";
import { WorkforceSection } from "~/app/(base)/_sections/workforce";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <PlatformsSection />
      <ServicesSection />
      <WorkforceSection />
      <PackagesSection />
      <CommentsSection />
      <SectionStages />
      <SupportSection />
    </div>
  );
}
