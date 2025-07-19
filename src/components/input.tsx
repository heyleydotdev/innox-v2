import { cn } from "~/lib/utils";

export const Input: React.FC<React.ComponentPropsWithRef<"input">> = ({
  className,
  ...rest
}) => {
  return (
    <input
      className={cn(
        "outline-border hover:outline-border-hover focus-visible:outline-border-focus flex h-9 items-center bg-white px-4 text-sm/6 shadow-xs outline-1 -outline-offset-1 focus-visible:outline-2 disabled:opacity-60 aria-[invalid=true]:focus-visible:outline-red-500",
        className,
      )}
      {...rest}
    />
  );
};
