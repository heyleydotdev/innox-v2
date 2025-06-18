"use client";

import type { AnimationPlaybackControlsWithThen } from "motion/react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { animate } from "motion";
import { motion, useMotionValue } from "motion/react";
import useMeasure from "react-use-measure";

import { SectionSeparator } from "~/app/(base)/_components/section";
import { cn } from "~/lib/utils";

export const PlatformsSection: React.FC = () => {
  return (
    <section className="relative">
      <SectionSeparator count="02" total="09" section="PLATFORMS" />
      <div className="container">
        <div className="px-cg grid grid-cols-1 gap-y-10 border-x py-10 md:grid-cols-4">
          <p className="text-sm/6 text-balance text-stone-600 max-md:text-center">
            Our workflow runs on trusted industry standard platforms
          </p>

          <div className="self-center md:col-span-3">
            <Slider>
              {Array.from({ length: 29 }).map((_, index) => (
                <Image
                  key={index}
                  className="opacity-70 transition-opacity hover:opacity-100"
                  src={`/platforms/logo_${(index + 1).toString().padStart(2, "0")}.png`}
                  width={90}
                  height={30}
                  unoptimized
                  alt=""
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

const Slider: React.FC<React.ComponentPropsWithRef<"div">> = ({
  children,
  className,
  ...rest
}) => {
  const gap = 48;
  const speed = 70;

  const [ref, { width }] = useMeasure();
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls: AnimationPlaybackControlsWithThen | undefined;
    const contentSize = width + gap;
    const from = 0;
    const to = -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls.stop;
  }, [key, currentSpeed, isTransitioning, translation, width]);

  return (
    <div className={cn("overflow-hidden mask-x-from-90%", className)} {...rest}>
      <motion.div
        ref={ref}
        className="flex w-max flex-row items-center"
        style={{ gap: `${gap}px`, x: translation }}
        onHoverStart={() => {
          setIsTransitioning(true);
          setCurrentSpeed(30);
        }}
        onHoverEnd={() => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};
