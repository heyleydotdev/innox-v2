import { cn } from "~/lib/utils";

export const Label: React.FC<React.ComponentPropsWithRef<"label">> = ({
  className,
  ...rest
}) => {
  return (
    <label
      className={cn("text-sm/6 font-medium text-stone-950", className)}
      {...rest}
    />
  );
};
