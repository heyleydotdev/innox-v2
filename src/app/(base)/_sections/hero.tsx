import Image from "next/image";

import { CtaForm } from "~/app/(base)/_components/cta-form";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionSeparator,
} from "~/app/(base)/_components/section";
import Avatar1 from "~/app/(base)/_images/avatars/avatar_1.png";
import Avatar2 from "~/app/(base)/_images/avatars/avatar_2.png";
import Avatar3 from "~/app/(base)/_images/avatars/avatar_3.png";
import Avatar4 from "~/app/(base)/_images/avatars/avatar_4.png";

export const HeroSection: React.FC = () => {
  return (
    <Section>
      <SectionSeparator title="Hero" className="[&>div]:border-t-0" />
      <SectionContainer>
        <SectionContent className="py-20">
          <div className="bg-grid absolute -inset-1" />
          <div className="relative flex flex-col items-center gap-12">
            <div className="grid grid-cols-[auto_1px_minmax(0,1fr)] place-items-center gap-3 overflow-hidden border bg-white p-1.5 shadow-xs">
              <div className="flex items-center -space-x-1">
                {[Avatar1, Avatar2, Avatar3, Avatar4].map((avatar, index) => (
                  <Image
                    key={index}
                    className="size-6 rounded-full ring-2 ring-white"
                    src={avatar}
                    width={40}
                    height={40}
                    placeholder="blur"
                    alt={`Client avatar ${index}`}
                  />
                ))}
              </div>
              <div className="bg-border h-4 w-px" />
              <p className="mr-2 text-[0.8rem]/6 whitespace-nowrap text-stone-500">
                Trusted by{" "}
                <span className="font-medium text-stone-950">750+</span> clients{" "}
                <span className="max-md:hidden">
                  for seamless digital solutions
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <h1 className="text-5xl tracking-tighter text-balance max-md:font-medium md:text-7xl lg:text-8xl">
                Delivering Innovative and Effective Solutions
              </h1>
              <p className="mx-auto max-w-3xl text-sm/6 text-balance text-stone-600 md:text-base/7">
                We offer innovative solutions across various fields, including
                design, development, automation, and more. Committed to bringing
                your ideas to life and ensuring success in the digital world.
              </p>
            </div>

            <CtaForm />
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
};
