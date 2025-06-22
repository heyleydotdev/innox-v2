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
import AutomationPoster from "~/app/(base)/_images/services/automation.png";
import DesignPoster from "~/app/(base)/_images/services/design.png";
import DevelopmentPoster from "~/app/(base)/_images/services/development.png";
import MarketingPoster from "~/app/(base)/_images/services/marketing.png";
import { cn } from "~/lib/utils";

export const ServicesSection: React.FC = () => {
  return (
    <Section>
      <SectionSeparator count="03" total="09" section="SERVICES" />

      <SectionContainer>
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Let&apos;s Build Something Great</SectionTitle>
            <SectionDescription>
              Need a hand with design, development, or something in between?
              We&apos;ve got you covered.
            </SectionDescription>
          </SectionHeader>
          <div className="absolute right-62 bottom-16 aspect-square h-100">
            <svg
              className="text-border size-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M190 366.666v-23.685a143.337 143.337 0 01-52.837-14.156l-11.836 20.507-.268.44c-2.874 4.442-8.758 5.897-13.392 3.223-4.783-2.761-6.422-8.877-3.661-13.661l11.839-20.511a143.298 143.298 0 01-21.197-17.471 143.339 143.339 0 01-17.48-21.209L60.67 291.991l-.452.247c-4.708 2.412-10.532.732-13.21-3.9-2.764-4.781-1.128-10.898 3.653-13.662l20.505-11.853A143.33 143.33 0 0157.017 210H33.334c-5.522 0-10-4.477-10-10 0-5.522 4.477-10 10-10h23.685a143.325 143.325 0 0114.15-52.824l-20.506-11.851-.44-.269a10.001 10.001 0 019.997-17.293l.452.246 20.496 11.848a143.296 143.296 0 0138.678-38.68l-11.839-20.512-.246-.452c-2.409-4.71-.726-10.532 3.907-13.207 4.634-2.674 10.519-1.22 13.392 3.223l.268.438 11.836 20.507A143.328 143.328 0 01190 57.018V33.333c0-5.522 4.477-10 10-10 5.35 0 9.719 4.202 9.987 9.486l.013.514v23.685a143.327 143.327 0 0152.823 14.15l11.853-20.506.269-.439c2.876-4.44 8.761-5.891 13.393-3.214 4.781 2.764 6.416 8.88 3.652 13.662l-11.847 20.496a143.332 143.332 0 0121.209 17.48 143.326 143.326 0 0117.479 21.21l20.497-11.848.453-.246c4.708-2.413 10.532-.733 13.209 3.899 2.764 4.782 1.129 10.899-3.652 13.663l-20.507 11.852A143.324 143.324 0 01342.982 190h23.684c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10h-23.684a143.324 143.324 0 01-14.151 52.823l20.507 11.853.439.269c4.44 2.876 5.891 8.761 3.213 13.393-2.677 4.632-8.501 6.312-13.209 3.9l-.453-.247-20.497-11.848a143.366 143.366 0 01-17.479 21.209 143.304 143.304 0 01-21.209 17.479l11.847 20.497.248.453c2.412 4.708.732 10.532-3.9 13.21-4.632 2.677-10.517 1.226-13.393-3.214l-.269-.439-11.853-20.507A143.322 143.322 0 01210 342.981v23.685c0 5.523-4.477 10-10 10s-10-4.477-10-10zM242.16 210a43.336 43.336 0 01-11.519 20.641 43.335 43.335 0 01-43.078 10.867l-40.373 69.946A123.306 123.306 0 00200 323.333l1.532-.009A123.33 123.33 0 00322.925 210H242.16zM129.871 98.547A123.336 123.336 0 00112.79 287.21a123.364 123.364 0 0017.08 14.243l40.376-69.952a43.33 43.33 0 010-63.003l-40.375-69.95zM200 76.667c-18.441 0-36.456 4.13-52.809 11.878l40.372 69.946A43.332 43.332 0 01242.16 190h80.765a123.334 123.334 0 00-35.715-77.21A123.335 123.335 0 00200 76.666zM176.666 200a23.33 23.33 0 0011.133 19.887c.179.09.358.184.533.285.179.103.351.213.521.324a23.331 23.331 0 0027.646-36.995A23.337 23.337 0 00200 176.666c-3.929 0-7.756.993-11.146 2.836-.17.113-.343.222-.522.326-.176.101-.355.195-.534.285A23.334 23.334 0 00176.666 200z"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="absolute top-10 right-10 aspect-square h-100">
            <svg
              className="text-border size-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M190 366.666v-23.685a143.337 143.337 0 01-52.837-14.156l-11.836 20.507-.268.44c-2.874 4.442-8.758 5.897-13.392 3.223-4.783-2.761-6.422-8.877-3.661-13.661l11.839-20.511a143.298 143.298 0 01-21.197-17.471 143.339 143.339 0 01-17.48-21.209L60.67 291.991l-.452.247c-4.708 2.412-10.532.732-13.21-3.9-2.764-4.781-1.128-10.898 3.653-13.662l20.505-11.853A143.33 143.33 0 0157.017 210H33.334c-5.522 0-10-4.477-10-10 0-5.522 4.477-10 10-10h23.685a143.325 143.325 0 0114.15-52.824l-20.506-11.851-.44-.269a10.001 10.001 0 019.997-17.293l.452.246 20.496 11.848a143.296 143.296 0 0138.678-38.68l-11.839-20.512-.246-.452c-2.409-4.71-.726-10.532 3.907-13.207 4.634-2.674 10.519-1.22 13.392 3.223l.268.438 11.836 20.507A143.328 143.328 0 01190 57.018V33.333c0-5.522 4.477-10 10-10 5.35 0 9.719 4.202 9.987 9.486l.013.514v23.685a143.327 143.327 0 0152.823 14.15l11.853-20.506.269-.439c2.876-4.44 8.761-5.891 13.393-3.214 4.781 2.764 6.416 8.88 3.652 13.662l-11.847 20.496a143.332 143.332 0 0121.209 17.48 143.326 143.326 0 0117.479 21.21l20.497-11.848.453-.246c4.708-2.413 10.532-.733 13.209 3.899 2.764 4.782 1.129 10.899-3.652 13.663l-20.507 11.852A143.324 143.324 0 01342.982 190h23.684c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10h-23.684a143.324 143.324 0 01-14.151 52.823l20.507 11.853.439.269c4.44 2.876 5.891 8.761 3.213 13.393-2.677 4.632-8.501 6.312-13.209 3.9l-.453-.247-20.497-11.848a143.366 143.366 0 01-17.479 21.209 143.304 143.304 0 01-21.209 17.479l11.847 20.497.248.453c2.412 4.708.732 10.532-3.9 13.21-4.632 2.677-10.517 1.226-13.393-3.214l-.269-.439-11.853-20.507A143.322 143.322 0 01210 342.981v23.685c0 5.523-4.477 10-10 10s-10-4.477-10-10zM242.16 210a43.336 43.336 0 01-11.519 20.641 43.335 43.335 0 01-43.078 10.867l-40.373 69.946A123.306 123.306 0 00200 323.333l1.532-.009A123.33 123.33 0 00322.925 210H242.16zM129.871 98.547A123.336 123.336 0 00112.79 287.21a123.364 123.364 0 0017.08 14.243l40.376-69.952a43.33 43.33 0 010-63.003l-40.375-69.95zM200 76.667c-18.441 0-36.456 4.13-52.809 11.878l40.372 69.946A43.332 43.332 0 01242.16 190h80.765a123.334 123.334 0 00-35.715-77.21A123.335 123.335 0 00200 76.666zM176.666 200a23.33 23.33 0 0011.133 19.887c.179.09.358.184.533.285.179.103.351.213.521.324a23.331 23.331 0 0027.646-36.995A23.337 23.337 0 00200 176.666c-3.929 0-7.756.993-11.146 2.836-.17.113-.343.222-.522.326-.176.101-.355.195-.534.285A23.334 23.334 0 00176.666 200z"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
              />
            </svg>
          </div>
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
