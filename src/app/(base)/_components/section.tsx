import { cn } from "~/lib/utils";

export interface SectionSeparatorProps
  extends React.ComponentPropsWithRef<"div"> {
  count: string;
  total: string;
  section: string;
}

export const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  count,
  total,
  section,
  className,
  ...rest
}) => {
  return (
    <div className={cn("container", className)} {...rest}>
      <div className="pointer-events-none grid h-9 grid-cols-[--spacing(26)_minmax(0,1fr)_--spacing(26)] border select-none">
        <div>
          <p className="text-center font-mono text-xs/9 tracking-tight text-stone-300">
            [ <span className="text-stone-800">{count}</span> / {total} ]
          </p>
        </div>
        <div className="border-x" />
        <div>
          <p className="text-center font-mono text-xs/9 tracking-tight text-stone-300 uppercase">
            [ <span className="text-stone-800">{section}</span> ]
          </p>
        </div>
      </div>
    </div>
  );
};
