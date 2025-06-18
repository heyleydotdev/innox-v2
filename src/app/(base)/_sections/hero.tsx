import Image from "next/image";

import { SectionSeparator } from "~/app/(base)/_components/section";
import Avatar1 from "~/app/(base)/_images/avatars/avatar_1.png";
import Avatar2 from "~/app/(base)/_images/avatars/avatar_2.png";
import Avatar3 from "~/app/(base)/_images/avatars/avatar_3.png";
import Avatar4 from "~/app/(base)/_images/avatars/avatar_4.png";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <SectionSeparator
        count="01"
        total="09"
        section="HERO"
        className="[&>div]:border-t-0"
      />
      <div className="container">
        <div className="px-cg relative overflow-hidden border-x py-20">
          <div className="bg-grid absolute -inset-1" />
          <div className="relative flex flex-col items-center gap-12">
            <div className="grid grid-cols-[auto_1px_minmax(0,1fr)] place-items-center gap-3 rounded-full border bg-white p-1.5 shadow-xs">
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
              <p className="mr-2 text-[0.8rem]/6 text-stone-500">
                Trusted by{" "}
                <span className="font-medium text-stone-950">750+</span> clients
                for seamless digital solutions
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <h1 className="text-5xl tracking-tighter text-balance md:text-7xl lg:text-8xl">
                Delivering Innovative and Effective Solutions
              </h1>
              <p className="mx-auto max-w-3xl text-sm/6 text-balance text-stone-600 md:text-base/7">
                We offer innovative solutions across various fields, including
                design, development, automation, and more. Committed to bringing
                your ideas to life and ensuring success in the digital world.
              </p>
            </div>

            <div className="mx-auto grid w-full max-w-sm grid-cols-[minmax(0,1fr)_auto] gap-2">
              <input
                type="text"
                placeholder="johndoe@example.com"
                className="outline-border hover:outline-border-hover focus-visible:outline-border-focus flex h-10 items-center rounded-lg bg-white px-4 text-sm/6 shadow-xs outline-1 -outline-offset-1 focus-visible:outline-2"
              />
              <button className="flex h-10 items-center rounded-lg bg-stone-800 px-5 text-sm/6 text-white shadow-xs">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
