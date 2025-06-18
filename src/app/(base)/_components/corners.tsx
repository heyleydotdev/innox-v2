import { cn } from "~/lib/utils";

const CornerHighlightComps = {
  "top-left": ({ className, ...rest }) => (
    <svg
      className={cn("absolute top-0 left-0 size-2", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M24 1H0M1 0v24" stroke="currentColor" strokeWidth={4} />
    </svg>
  ),
  "top-right": ({ className, ...rest }) => (
    <svg
      className={cn("absolute top-0 right-0 size-2", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M24 1H0M23 0v24" stroke="currentColor" strokeWidth={4} />
    </svg>
  ),
  "bottom-left": ({ className, ...rest }) => (
    <svg
      className={cn("absolute bottom-0 left-0 size-2", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M24 23H0M1 0v24" stroke="currentColor" strokeWidth={4} />
    </svg>
  ),
  "bottom-right": ({ className, ...rest }) => (
    <svg
      className={cn("absolute right-0 bottom-0 size-2", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M24 23H0M23 0v24" stroke="currentColor" strokeWidth={4} />
    </svg>
  ),
} satisfies Record<string, React.FC<React.ComponentPropsWithRef<"svg">>>;

export const CornerHighlight: React.FC<
  React.ComponentPropsWithRef<"svg"> & {
    align: keyof typeof CornerHighlightComps;
  }
> = ({ align, ...rest }) => {
  const Comp = CornerHighlightComps[align];
  return <Comp {...rest} />;
};
