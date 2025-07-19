"use client";

import * as DialogPrimitives from "@radix-ui/react-dialog";

import { Icons } from "~/components/icons";
import { cn } from "~/lib/utils";

export const Dialog = DialogPrimitives.Root;

export const DialogTrigger = DialogPrimitives.Trigger;

export const DialogPortal = DialogPrimitives.Portal;

export const DialogClose = DialogPrimitives.Close;

export const DialogOverlay: React.FC<
  React.ComponentPropsWithRef<typeof DialogPrimitives.Overlay>
> = ({ className, ...rest }) => {
  return (
    <DialogPrimitives.Overlay
      className={cn(
        "data-[state=open]:animate-dialog-overlay-in data-[state=closed]:animate-dialog-overlay-out fixed inset-0 z-50 bg-stone-950/70",
        className,
      )}
      {...rest}
    />
  );
};

export const DialogContent: React.FC<
  React.ComponentPropsWithRef<typeof DialogPrimitives.Content>
> = ({ className, ...rest }) => {
  return (
    <DialogPrimitives.Portal>
      <DialogOverlay />
      <DialogPrimitives.Content
        className={cn(
          "ring-border fixed z-50 w-full origin-center bg-white ring-1 ring-inset focus:outline",
          "max-md:inset-x-0 max-md:bottom-0",
          "md:top-1/2 md:left-1/2 md:max-w-lg md:-translate-x-1/2 md:-translate-y-3/4",
          "md:data-[state=open]:animate-dialog-in md:data-[state=closed]:opacity-0",
          "max-md:data-[state=open]:animate-dialog-in-sm max-md:data-[state=closed]:animate-dialog-out-sm",
          className,
        )}
        {...rest}
      />
    </DialogPrimitives.Portal>
  );
};

export const DialogHeader: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div className={cn("flex h-9 justify-end border-b", className)} {...rest}>
      <DialogPrimitives.Close className="flex size-9 cursor-pointer items-center justify-center border-l transition-colors hover:bg-stone-950/5 focus:outline-none focus-visible:bg-stone-950/5">
        <Icons.x className="size-4" />
      </DialogPrimitives.Close>
    </div>
  );
};

export const DialogContainer: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...rest
}) => {
  return <div className={cn("p-cg", className)} {...rest} />;
};

export const DialogTitle: React.FC<
  React.ComponentPropsWithRef<typeof DialogPrimitives.Title>
> = ({ className, ...rest }) => {
  return (
    <DialogPrimitives.Title
      className={cn("text-sm/6 font-medium text-stone-950", className)}
      {...rest}
    />
  );
};

export const DialogDescription: React.FC<
  React.ComponentPropsWithRef<typeof DialogPrimitives.Description>
> = ({ className, ...rest }) => {
  return (
    <DialogPrimitives.Description
      className={cn("mt-1 text-sm/6 text-stone-600", className)}
      {...rest}
    />
  );
};
