import { cn } from "~/lib/utils";

export const Logo: React.FC<React.ComponentPropsWithRef<"svg">> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      className={cn("text-stone-800", className)}
      viewBox="0 0 1659 1660"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path fill="currentColor" d="M0 1185H474V1660H0z" />
      <path
        d="M829 0h830v830L829 0zM474 1l1185 1185v474h-474L0 475V1h474zM29 30v416h416V30H29z"
        fill="currentColor"
      />
    </svg>
  );
};
