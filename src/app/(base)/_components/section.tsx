"use client";

import type { SectionsContextValue } from "~/app/(base)/_components/section-ctx";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

import {
  SectionContext,
  SectionsContext,
  useSections,
} from "~/app/(base)/_components/section-ctx";
import { TextScramble } from "~/components/text-scramble";
import { cn } from "~/lib/utils";

export const SectionsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [sections, setSections] = useState<SectionsContextValue["sections"]>(
    [],
  );

  const reg_section: SectionsContextValue["reg_section"] = useCallback(
    (section) => {
      setSections((prev) =>
        !prev.includes(section) ? [...prev, section] : prev,
      );
    },
    [],
  );

  return (
    <SectionsContext
      value={{
        sections: sections,
        total_sections: sections.length,
        reg_section,
      }}
    >
      {children}
    </SectionsContext>
  );
};

export const Section: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...rest
}) => {
  const ref = useRef<React.ComponentRef<"div">>(null);
  const isInView = useInView(ref, {
    initial: false,
  });

  return (
    <SectionContext value={{ isInView }}>
      <section
        ref={ref}
        className={cn("relative scroll-mt-14", className)}
        {...rest}
        data-inview={isInView}
      />
    </SectionContext>
  );
};

export interface SectionSeparatorProps
  extends React.ComponentPropsWithRef<"div"> {
  title: string;
}

export const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  title,
  className,
  ...rest
}) => {
  const { reg_section, sections, total_sections } = useSections();

  const index = sections.indexOf(title);
  const c = (index >= 0 ? index + 1 : 0).toString().padStart(2, "0");
  const t = total_sections.toString().padStart(2, "0");

  useLayoutEffect(() => {
    reg_section(title);
  }, [reg_section, title]);

  return (
    <div className={cn("container", className)} {...rest}>
      <div className="pointer-events-none grid h-9 grid-cols-[--spacing(26)_minmax(0,1fr)_--spacing(26)] border select-none">
        <div>
          <p
            className="text-center font-mono text-xs/9 tracking-tight text-stone-300"
            aria-label={`Section ${c}`}
          >
            [{" "}
            <TextScramble
              as="span"
              className="text-stone-800"
              trigger={!!total_sections}
            >
              {c}
            </TextScramble>{" "}
            /{" "}
            <TextScramble as="span" trigger={index >= 0}>
              {t}
            </TextScramble>{" "}
            ]
          </p>
        </div>
        <div className="border-x" />
        <div>
          <p
            className="text-center font-mono text-xs/9 tracking-tight text-stone-300 uppercase"
            aria-label={title}
          >
            [ <span className="text-stone-800">{title}</span> ]
          </p>
        </div>
      </div>
    </div>
  );
};

export const SectionContainer: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return <div className={cn("container", className)} {...rest} />;
};

export const SectionContent: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn("px-cg relative overflow-hidden border-x", className)}
      {...rest}
    />
  );
};

export const SectionHeader: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "relative flex max-w-lg flex-col gap-3 py-16 max-md:text-center",
        className,
      )}
      {...rest}
    />
  );
};

export const SectionTitle: React.FC<React.ComponentPropsWithRef<"h2">> = ({
  className,
  ...rest
}) => {
  return (
    <h2
      className={cn(
        "text-3xl font-medium tracking-tighter text-balance md:text-4xl",
        className,
      )}
      {...rest}
    />
  );
};

export const SectionDescription: React.FC<React.ComponentPropsWithRef<"p">> = ({
  className,
  ...rest
}) => {
  return (
    <p
      className={cn("text-sm/6 text-balance text-stone-600", className)}
      {...rest}
    />
  );
};
