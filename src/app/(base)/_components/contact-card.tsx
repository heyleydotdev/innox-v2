import Link from "next/link";

import { cn } from "~/lib/utils";

export const Contact: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn("flex flex-col gap-6 p-6 lg:p-8", className)}
      {...rest}
    />
  );
};

export const ContactIcon: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "w-24 md:w-28 [&>svg]:h-auto [&>svg]:w-full [&>svg]:text-stone-800",
        className,
      )}
      {...rest}
    />
  );
};

export const ContactContent: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return <div className={cn("flex-1 text-sm/6", className)} {...rest} />;
};

export const ContactTitle: React.FC<React.ComponentPropsWithRef<"h4">> = ({
  className,
  ...rest
}) => {
  return (
    <h4
      className={cn("inline font-medium text-stone-950", className)}
      {...rest}
    />
  );
};

export const ContactDescription: React.FC<
  React.ComponentPropsWithRef<"span">
> = ({ children, className, ...rest }) => {
  return (
    <span className={cn("text-stone-600", className)} {...rest}>
      <p className="inline">&nbsp;{children}</p>
    </span>
  );
};

export const ContactButton: React.FC<
  React.ComponentPropsWithRef<typeof Link>
> = ({ className, ...rest }) => {
  return (
    <Link
      className={cn(
        "flex h-9 w-max cursor-pointer items-center justify-center rounded-lg bg-stone-800 px-4 text-[0.8rem]/6 text-white hover:opacity-95",
        className,
      )}
      target="_blank"
      {...rest}
    />
  );
};
