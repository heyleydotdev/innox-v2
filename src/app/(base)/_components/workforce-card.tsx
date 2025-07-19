"use client";

import type { ConfigWorkforce } from "~/lib/configs/workforce";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export const WorkforceCardMedium: React.FC<ConfigWorkforce[string]> = ({
  name,
  profession,
  image_md,
  blur_data_md,
}) => {
  return (
    <div className="relative aspect-[4/5] max-lg:even:border-r-0 max-md:border-r-0 md:nth-last-[2]:border-b-0">
      <Image
        className="pointer-events-none size-full select-none"
        src={image_md}
        placeholder={blur_data_md}
        unoptimized
        alt={`${name}'s portrait`}
      />
      <div className="absolute inset-x-0 bottom-0 flex h-24 flex-col items-center justify-center gap-0.5 border-t bg-white/40 px-8 py-2 text-center backdrop-blur-xs">
        <h4 className="font-medium tracking-tight">{name}</h4>
        <p className="font-mono text-sm/6 text-stone-600">{profession}</p>
      </div>
    </div>
  );
};

export const WorkforceCardLarge: React.FC<ConfigWorkforce[string]> = ({
  name,
  profession,
  image,
  blur_data,
  styles,
  svg_props,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="group absolute inset-y-0 isolate h-full w-fit transform-gpu transition-transform ease-in-out [--animation-delay:100ms] group-hover/container:translate-x-(--translate-x) hover:z-50"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      style={
        {
          left: `${styles.left}%`,
          "--translate-x": `calc(var(--spacing)*${styles.translate})`,
        } as React.CSSProperties
      }
    >
      <div className="border-border/50 pointer-events-none absolute -inset-x-5 -top-(--content-spacing) bottom-0 z-10 flex translate-y-2 transform-gpu flex-col gap-1 border-x bg-white/10 pt-8 text-center opacity-0 backdrop-blur-sm transition-all duration-50 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-(--animation-delay) group-hover:duration-300">
        <ContentPointer />
        <h4 className="text-xl font-medium tracking-tight">{name}</h4>
        <p className="font-mono text-sm/6 text-stone-600">{profession}</p>
      </div>
      <div className="pointer-events-none relative z-20 h-full w-fit max-w-max">
        <Image
          src={image}
          className="h-full w-auto grayscale transition-all select-none group-hover:grayscale-0 group-hover:delay-(--animation-delay)"
          unoptimized
          placeholder={blur_data}
          alt={`${name}'s portrait`}
        />
        <svg
          className="absolute inset-0"
          viewBox={svg_props.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: isHover ? 1 : 0,
              opacity: isHover ? 1 : 0.8,
              transition: {
                type: "spring",
                duration: isHover ? 0.6 : 0.4,
                bounce: 0,
                delay: isHover ? 0.3 : 0,
              },
            }}
            d={svg_props.d}
            stroke="var(--color-stone-800)"
            strokeWidth={4}
          />
        </svg>
      </div>
    </motion.div>
  );
};

const ContentPointer: React.FC = () => {
  return (
    <div className="group-hover:animate-workforce-s absolute inset-0 overflow-hidden">
      <svg
        className="absolute -inset-x-1 bottom-0 h-auto"
        viewBox="0 0 755 329"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M377.5 0L.507 136.317v63.992L377.5 64l377.004 136.314.003-63.992L377.5 0z"
          fill="#000"
          fillOpacity={0.1}
        />
        <path
          d="M377.5 64L.507 200.317v63.992L377.5 128l377.004 136.314.003-63.992L377.5 64z"
          fill="#000"
          fillOpacity={0.05}
        />
        <path
          d="M377.5 128L.507 264.317v63.992L377.5 192l377.004 136.314.003-63.992L377.5 128z"
          fill="#000"
          fillOpacity={0.025}
        />
      </svg>
    </div>
  );
};
