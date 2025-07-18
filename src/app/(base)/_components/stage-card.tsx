import Image from "next/image";

import { cn } from "~/lib/utils";

export const StageCardContainer: React.FC<
  React.ComponentPropsWithRef<"div">
> = ({ className, ...rest }) => {
  return (
    <div className="relative md:container">
      <div className="pointer-events-none absolute inset-0 -z-10 container after:absolute after:inset-0 after:inset-x-(--padding-cg) after:border md:hidden" />
      <div
        className={cn(
          "[--side-padding:max(var(--container-padding),calc((100%-var(--breakpoint-xs))/2+var(--container-padding)))]",
          "grid grid-cols-[repeat(5,100%)]",
          "no-scrollbar relative snap-x snap-mandatory overflow-x-auto",
          "max-md:scroll-pr-(--side-padding) max-md:px-(--side-padding)",
          "md:grid-cols-5 md:grid-rows-2 md:gap-1 md:border-x md:border-t md:p-1",
          className,
        )}
        {...rest}
      />
    </div>
  );
};

export const StageCard: React.FC<React.ComponentPropsWithRef<"div">> = ({
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
          "relative isolate size-full overflow-hidden",
          "after:ring-border after:pointer-events-none after:absolute after:inset-0 after:z-10 after:ring-1 after:ring-inset",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const StageCardImage: React.FC<
  React.ComponentPropsWithRef<typeof Image>
> = ({ alt, className, ...rest }) => {
  return (
    <Image
      className={cn(
        "object-cover object-center grayscale-100 transition-[filter] duration-500 will-change-[filter] select-none hover:grayscale-0",
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
