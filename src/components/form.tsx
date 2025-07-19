import { useId } from "react";

import { cn } from "~/lib/utils";

export interface FormFieldProps
  extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  children(id: string): React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  className,
  ...rest
}) => {
  const id = useId();

  return (
    <div className={cn("grid grid-cols-1 gap-2", className)} {...rest}>
      {children(id)}
    </div>
  );
};

export const FormMessage: React.FC<React.ComponentPropsWithRef<"p">> = ({
  className,
  ...rest
}) => {
  return (
    <p
      className={cn("text-[13px]/6 font-medium text-red-500", className)}
      {...rest}
    />
  );
};
