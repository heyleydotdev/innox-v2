import { cn } from "~/lib/utils";

export const PackagesContainer: React.FC<
  React.ComponentPropsWithRef<"div">
> = ({ className, ...rest }) => {
  return (
    <div
      className={cn(
        "[--i-breakpoint:var(--breakpoint-xs)] [--side-padding:max(var(--container-padding),calc((100%-var(--i-breakpoint))/2+var(--container-padding)))] md:[--i-breakpoint:var(--breakpoint-xl)]",
        "grid-cols-[repeat(3,var(--col-size))] [--col-size:100%] [--gutter:--spacing(4)] md:[--col-size:calc((100%-var(--gutter))/2)] lg:grid-cols-3",
        "scroll-pr-(--side-padding) px-(--side-padding)",
        "no-scrollbar overflow-x-auto",
        "dark relative grid snap-x snap-mandatory gap-(--gutter)",
        className,
      )}
      {...rest}
    />
  );
};

export const Package: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "relative flex snap-end flex-col gap-(--gutter) border-x bg-stone-800 py-(--gutter) [--gutter:--spacing(6)] md:[--gutter:--spacing(8)]",
        "after:absolute after:inset-y-0 after:-right-[calc(--spacing(4)+1px)] after:w-4 after:bg-stone-800 last:after:hidden",
        className,
      )}
      {...rest}
    />
  );
};

export const PackageHeader: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return <div className={cn("space-y-1 px-(--gutter)", className)} {...rest} />;
};

export const PackageTitle: React.FC<React.ComponentPropsWithRef<"h4">> = ({
  className,
  ...rest
}) => {
  return (
    <h4
      className={cn(
        "text-xl font-medium tracking-tight text-balance",
        className,
      )}
      {...rest}
    />
  );
};

export const PackageDescription: React.FC<React.ComponentPropsWithRef<"p">> = ({
  className,
  ...rest
}) => {
  return <p className={cn("text-sm/6 text-stone-400", className)} {...rest} />;
};

export const PackagePricing: React.FC<React.ComponentPropsWithRef<"div">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cn("px-(--gutter)", className)} {...rest}>
      <p className="flex items-baseline gap-2">{children}</p>
    </div>
  );
};

export const PackageAmount: React.FC<React.ComponentPropsWithRef<"span">> = ({
  className,
  ...rest
}) => {
  return (
    <span
      className={cn("font-mono text-2xl font-medium text-amber-700", className)}
      {...rest}
    />
  );
};

export const PackageDuration: React.FC<React.ComponentPropsWithRef<"span">> = ({
  className,
  ...rest
}) => {
  return <span className={cn("text-sm text-stone-500", className)} {...rest} />;
};

export const PackageButton: React.FC<React.ComponentPropsWithRef<"button">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "group focus-visible:ring-border mx-(--gutter) flex h-9 cursor-pointer items-center justify-between rounded-lg bg-stone-50/90 px-4 text-sm/6 font-medium text-stone-950 transition-colors hover:bg-stone-50 focus-visible:ring-4 focus-visible:outline-none",
        className,
      )}
      {...rest}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-8 translate-x-3 text-stone-600 transition-colors group-hover:text-stone-950"
      >
        <g clipPath="url(#clip0_104_6)">
          <path
            d="M17 12h14"
            className="scale-x-0 transform-gpu transition-transform group-hover:scale-x-100"
          />
        </g>
        <path
          d="M24 5l7 7-7 7"
          className="-translate-x-2 transform-gpu transition-transform group-hover:translate-x-0"
        />
        <defs>
          <clipPath id="clip0_104_6">
            <path fill="#fff" transform="translate(17 4)" d="M0 0H14V16H0z" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export const PackageFeatures: React.FC<React.ComponentPropsWithRef<"ul">> = ({
  className,
  ...rest
}) => {
  return (
    <ul
      className={cn("divide-border/50 divide-y text-sm/6", className)}
      {...rest}
    />
  );
};

export const PackageFeature: React.FC<React.ComponentPropsWithRef<"li">> = ({
  className,
  ...rest
}) => {
  return (
    <li
      className={cn(
        "cursor-default space-y-0.5 px-(--gutter) py-3.5 hover:bg-white/[0.025]",
        className,
      )}
      {...rest}
    />
  );
};

export const PackageFeatureTitle: React.FC<
  React.ComponentPropsWithRef<"p">
> = ({ className, ...rest }) => {
  return <p className={cn("text-sm/6", className)} {...rest} />;
};

export const PackageFeatureDescription: React.FC<
  React.ComponentPropsWithRef<"p">
> = ({ className, ...rest }) => {
  return (
    <p
      className={cn("text-xs/5 text-balance text-stone-400", className)}
      {...rest}
    />
  );
};
