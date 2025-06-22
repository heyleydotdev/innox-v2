import { cn } from "~/lib/utils";

export const Section: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return <section className={cn("relative", className)} {...rest} />;
};

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

export const SectionContainer: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return <div className={cn("container", className)} {...rest} />;
};

export const SectionContent: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn("px-cg relative overflow-hidden border-x", className)}
      {...rest}
    />
  );
};

export const SectionHeader: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "relative flex max-w-lg flex-col gap-3 py-16 max-md:text-center",
        className,
      )}
      {...rest}
    />
  );
};

export const SectionTitle: React.FC<React.ComponentPropsWithRef<"h2">> = ({
  className,
  ...rest
}) => {
  return (
    <h2
      className={cn(
        "text-3xl font-medium tracking-tighter text-balance md:text-4xl",
        className,
      )}
      {...rest}
    />
  );
};

export const SectionDescription: React.FC<React.ComponentPropsWithRef<"p">> = ({
  className,
  ...rest
}) => {
  return (
    <p
      className={cn("text-sm/6 text-balance text-stone-600", className)}
      {...rest}
    />
  );
};
