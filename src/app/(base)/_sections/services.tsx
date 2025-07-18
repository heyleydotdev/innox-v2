"use client";

import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionSeparator,
  SectionTitle,
} from "~/app/(base)/_components/section";
import {
  ServiceCard,
  ServiceCardContainer,
  ServiceCardContent,
  ServiceCardDescription,
  ServiceCardHeader,
  ServiceCardImage,
  ServiceCardTitle,
} from "~/app/(base)/_components/service-card";
import AutomationPoster from "~/app/(base)/_images/services/automation.webp";
import DesignPoster from "~/app/(base)/_images/services/design.webp";
import DevelopmentPoster from "~/app/(base)/_images/services/development.webp";
import MarketingPoster from "~/app/(base)/_images/services/marketing.webp";
import { cn } from "~/lib/utils";

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services">
      <SectionSeparator title="Services" />
      <SectionContainer>
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Let&apos;s Build Something Great</SectionTitle>
            <SectionDescription>
              Need a hand with design, development, or something in between?
              We&apos;ve got you covered.
            </SectionDescription>
          </SectionHeader>
        </SectionContent>
        <div
          className={cn(
            "relative border-x border-t lg:px-26",
            "before:bg-empty before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-26 max-lg:before:hidden",
            "after:bg-empty after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-26 max-lg:after:hidden",
          )}
        >
          <div className="relative overflow-hidden [--gap:--spacing(10)] lg:border-x">
            <div className="bg-dashed-vert pointer-events-none absolute inset-y-0 left-1/2 w-px max-md:hidden" />

            <ServiceCardContainer>
              <ServiceCard className="border-b">
                <ServiceCardHeader>
                  <ServiceCardTitle>Development</ServiceCardTitle>
                  <ServiceCardDescription>
                    Need a website or something more custom? We&apos;ll build it
                    for you, fast and responsive, ready to grow with your goals.
                  </ServiceCardDescription>
                </ServiceCardHeader>
                <ServiceCardContent>
                  <ServiceCardImage src={DevelopmentPoster} alt="" />
                </ServiceCardContent>
              </ServiceCard>
              <ServiceCard className="border-b max-md:border-t">
                <ServiceCardHeader>
                  <ServiceCardTitle>Design</ServiceCardTitle>
                  <ServiceCardDescription>
                    Want your brand to look sharp and professional? We&apos;ll
                    create clean, modern designs that reflect your style and
                    message.
                  </ServiceCardDescription>
                </ServiceCardHeader>
                <ServiceCardContent>
                  <ServiceCardImage src={DesignPoster} alt="" />
                </ServiceCardContent>
              </ServiceCard>
            </ServiceCardContainer>
            <div className="pointer-events-none relative flex h-(--gap) w-full items-center justify-center">
              <div className="bg-dashed-horz absolute inset-x-0 top-1/2 h-px max-md:hidden" />
              <div className="after:bg-dashed-horz before:bg-dashed-vert relative size-(--gap) rotate-45 before:absolute before:inset-y-0 before:left-1/2 before:w-px after:absolute after:inset-x-0 after:top-1/2 after:h-px max-md:hidden" />
            </div>
            <ServiceCardContainer>
              <ServiceCard className="border-t max-md:border-b">
                <ServiceCardHeader>
                  <ServiceCardTitle>Marketing</ServiceCardTitle>
                  <ServiceCardDescription>
                    Looking to reach more people? We&apos;ll help you get
                    noticed with simple and effective marketing that fits your
                    audience and budget.
                  </ServiceCardDescription>
                </ServiceCardHeader>
                <ServiceCardContent>
                  <ServiceCardImage src={MarketingPoster} alt="" />
                </ServiceCardContent>
              </ServiceCard>
              <ServiceCard className="border-t">
                <ServiceCardHeader>
                  <ServiceCardTitle>Automation</ServiceCardTitle>
                  <ServiceCardDescription>
                    Tired of repeating the same tasks? We&apos;ll set up smart
                    automations that save you time and keep things running
                    smoothly.
                  </ServiceCardDescription>
                </ServiceCardHeader>
                <ServiceCardContent>
                  <ServiceCardImage src={AutomationPoster} alt="" />
                </ServiceCardContent>
              </ServiceCard>
            </ServiceCardContainer>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
