"use client";

import { useActionState, useCallback, useState } from "react";

import { package_signup_action } from "~/app/_actions";
import { OutlineButton, PrimaryButton } from "~/components/button";
import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/dialog";
import { FormField, FormMessage } from "~/components/form";
import { Spinner } from "~/components/icons";
import { Input } from "~/components/input";
import { Label } from "~/components/label";
import { ConfigPackageTitles } from "~/lib/configs/packages";

export interface PackageDialogProps
  extends React.ComponentPropsWithRef<typeof DialogTrigger> {
  package_key: keyof typeof ConfigPackageTitles;
}

export const PackageDialog: React.FC<PackageDialogProps> = ({
  package_key,
  ...rest
}) => {
  const _package = ConfigPackageTitles[package_key];

  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch, pending] = useActionState(package_signup_action, {});

  const _onOpenChange = useCallback(
    (state: boolean) => {
      setIsOpen((prev) => (pending ? prev : state));
    },
    [pending],
  );

  return (
    <Dialog open={isOpen} onOpenChange={_onOpenChange}>
      <DialogTrigger {...rest} />
      <DialogContent className="max-md:pb-8">
        <DialogHeader />
        <DialogContainer>
          <DialogTitle
            className="data-[success=true]:text-teal-500"
            data-success={!!state.success}
          >
            {state.success ? "All set!" : `Continue with ${_package}`}
          </DialogTitle>
          <DialogDescription className="mt-1 text-sm/6 text-stone-600">
            {state.success ? (
              <span>
                We got your email and we’ll reach out shortly. In a hurry? You
                can always ping us on the{" "}
                <a
                  href="#support"
                  className="font-medium text-stone-950 underline"
                  onClick={() => setIsOpen(false)}
                >
                  following platforms
                </a>{" "}
                for a quicker response.
              </span>
            ) : (
              "Want to move forward? Just leave your email and we’ll be in touch real soon."
            )}
          </DialogDescription>
          <div className="mt-8">
            {state.success ? (
              <DialogClose asChild>
                <OutlineButton className="w-full">Close</OutlineButton>
              </DialogClose>
            ) : (
              <form action={dispatch}>
                <fieldset className="grid grid-cols-1 gap-6" disabled={pending}>
                  <input
                    type="hidden"
                    className="hidden"
                    name="package"
                    value={_package}
                  />
                  <FormField>
                    {(id) => (
                      <>
                        <Label htmlFor={id}>Email address</Label>
                        <Input
                          id={id}
                          name="email"
                          type="text"
                          placeholder="john@example.com"
                          required
                          autoFocus
                          aria-invalid={!!state.error}
                        />
                        {state.error && (
                          <FormMessage>{state.error}</FormMessage>
                        )}
                      </>
                    )}
                  </FormField>

                  <div className="grid grid-cols-2 gap-2">
                    <DialogClose asChild>
                      <OutlineButton>Cancel</OutlineButton>
                    </DialogClose>
                    <PrimaryButton type="submit">
                      {pending ? <Spinner /> : "Continue"}
                    </PrimaryButton>
                  </div>
                </fieldset>
              </form>
            )}
          </div>
        </DialogContainer>
      </DialogContent>
    </Dialog>
  );
};
