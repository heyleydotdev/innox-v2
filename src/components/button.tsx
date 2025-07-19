import { cn } from "~/lib/utils";

export const PrimaryButton: React.FC<React.ComponentPropsWithRef<"button">> = ({
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "focus-visible:ring-border-focus flex h-9 cursor-pointer items-center justify-center gap-1 border border-transparent bg-stone-800 px-3 py-1 text-sm/6 text-stone-50 shadow-xs transition-colors hover:bg-stone-950 focus:outline-0 focus-visible:ring-2 disabled:opacity-60",
        className,
      )}
      {...rest}
    />
  );
};

export const OutlineButton: React.FC<React.ComponentPropsWithRef<"button">> = ({
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "outline-border-focus flex h-9 cursor-pointer items-center justify-center gap-1 border px-3 py-1 text-sm/6 text-stone-950 shadow-xs transition-colors hover:bg-black/5 focus:outline-2 focus:-outline-offset-1 disabled:opacity-60",
        className,
      )}
      {...rest}
    />
  );
};
