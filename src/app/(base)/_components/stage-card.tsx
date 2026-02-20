"use client";

import Image from "next/image";

import { Icons } from "~/components/icons";
import useFancybox from "~/lib/hooks/use-fancybox";
import { cn } from "~/lib/utils";

export const StageCardContainer: React.FC<
  React.ComponentPropsWithRef<"div">
> = ({ className, ...rest }) => {
  const [ref] = useFancybox();

  return (
    <div className="relative md:container">
      <div className="pointer-events-none absolute inset-0 -z-10 container after:absolute after:inset-0 after:inset-x-(--padding-cg) after:border md:hidden" />
      <div
        ref={ref}
        className={cn(
          "[--side-padding:max(var(--container-padding),calc((100%-var(--breakpoint-xs))/2+var(--container-padding)))]",
          "grid grid-cols-[repeat(9,100%)]",
          "no-scrollbar relative snap-x snap-mandatory overflow-x-auto",
          "max-md:scroll-pr-(--side-padding) max-md:px-(--side-padding)",
          "md:grid-cols-5 md:grid-rows-3 md:gap-1 md:border-x md:border-t md:p-1",
          className,
        )}
        {...rest}
      />
    </div>
  );
};

export interface StageCardProps extends React.ComponentPropsWithRef<"div"> {
  caption: string;
}

export const StageCard: React.FC<StageCardProps> = ({
  caption,
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "snap-end max-md:aspect-square max-md:p-1 md:col-span-2",
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          "group/icontainer relative isolate size-full overflow-hidden bg-stone-800",
          "after:ring-border after:pointer-events-none after:absolute after:inset-0 after:z-10 after:ring-1 after:ring-inset",
        )}
      >
        {children}
        <div className="dark absolute inset-x-0 bottom-0 flex h-12 w-full items-center overflow-hidden px-4">
          <p className="truncate text-sm">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export const StageCardAnchor: React.FC<React.ComponentPropsWithRef<"a">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <a
      data-fancybox="stages-g"
      className={cn(
        "relative isolate z-50 block size-full transition-transform duration-100 ease-out will-change-transform group-hover/icontainer:-translate-y-12",
        className,
      )}
      {...rest}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-stone-800/50 p-4 transition-opacity duration-500 lg:opacity-0 lg:group-hover/icontainer:opacity-100">
        <div className="flex items-center gap-1 text-[0.8rem]/6 text-white">
          <Icons.radio className="size-5" />
          Tap for more
        </div>
      </div>
    </a>
  );
};

export const StageCardImage: React.FC<
  React.ComponentPropsWithRef<typeof Image>
> = ({ alt, className, ...rest }) => {
  return (
    <Image
      className={cn(
        "object-cover object-center transition-[filter] duration-500 ease-out will-change-[filter] select-none lg:grayscale-100 lg:group-hover/icontainer:grayscale-0",
        className,
      )}
      fill
      unoptimized
      placeholder="blur"
      alt={alt}
      {...rest}
    />
  );
};
