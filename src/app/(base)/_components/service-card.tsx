import Image from "next/image";

import { cn } from "~/lib/utils";

export const ServiceCardContainer: React.FC<
  React.ComponentPropsWithRef<"div">
> = ({ className, ...rest }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-(--gap,--spacing(10)) md:grid-cols-2",
        className,
      )}
      {...rest}
    />
  );
};

export const ServiceCard: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col md:odd:border-r md:even:border-l",
        "after:bg-dashed-horz after:absolute after:inset-x-0 after:-bottom-[calc(var(--gap)/2+2px)] after:h-px md:after:hidden",
        className,
      )}
      {...rest}
    />
  );
};

export const ServiceCardHeader: React.FC<
  React.ComponentPropsWithRef<"div">
> = ({ className, ...rest }) => {
  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col gap-1 border-b p-8",
        className,
      )}
      {...rest}
    />
  );
};

export const ServiceCardIcon: React.FC<React.ComponentPropsWithRef<"h4">> = ({
  className,
  ...rest
}) => {
  return <h4 className={cn("font-medium", className)} {...rest} />;
};

export const ServiceCardTitle: React.FC<React.ComponentPropsWithRef<"h4">> = ({
  className,
  ...rest
}) => {
  return <h4 className={cn("font-medium", className)} {...rest} />;
};

export const ServiceCardDescription: React.FC<
  React.ComponentPropsWithRef<"p">
> = ({ className, ...rest }) => {
  return (
    <p
      className={cn("text-sm/6 text-balance text-stone-600", className)}
      {...rest}
    />
  );
};

export const ServiceCardContent: React.FC<
  React.ComponentPropsWithRef<"div">
> = ({ className, ...rest }) => {
  return (
    <div className={cn("relative overflow-hidden", className)} {...rest} />
  );
};

export const ServiceCardImage: React.FC<
  React.ComponentPropsWithRef<typeof Image>
> = ({ alt, ...rest }) => {
  return <Image placeholder="blur" unoptimized alt={alt} {...rest} />;
};
