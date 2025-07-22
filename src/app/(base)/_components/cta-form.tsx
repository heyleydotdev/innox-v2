"use client";

import { useActionState, useEffect, useState } from "react";

import { cta_action } from "~/app/_actions";
import { OutlineButton, PrimaryButton } from "~/components/button";
import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/dialog";
import { Spinner } from "~/components/icons";
import { Input } from "~/components/input";

export const CtaForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch, pending] = useActionState(cta_action, {});

  useEffect(() => {
    if (state.error || state.success) {
      setIsOpen(true);
    }
  }, [state]);

  return (
    <>
      <form action={dispatch} className="mx-auto w-full max-w-sm">
        <fieldset
          className="grid w-full grid-cols-[minmax(0,1fr)_auto] gap-2"
          disabled={pending}
        >
          <Input
            type="email"
            name="email"
            className="h-10"
            placeholder="john@example.com"
            required
          />
          <PrimaryButton className="h-10 gap-2 px-4">
            {pending && <Spinner />}
            Get Started
          </PrimaryButton>
        </fieldset>
      </form>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-md:pb-8">
          <DialogHeader />
          <DialogContainer>
            {state.success && (
              <>
                <DialogTitle className="text-teal-600">
                  You&apos;re All Set!
                </DialogTitle>
                <DialogDescription>
                  Got it! We&apos;ll reach out soon. If you need something
                  quick, you can always ping us on the{" "}
                  <a
                    href="#support"
                    className="font-medium text-stone-950 underline"
                    onClick={() => setIsOpen(false)}
                  >
                    platforms listed
                  </a>
                  .
                </DialogDescription>
              </>
            )}
            {state.error && (
              <>
                <DialogTitle className="text-red-600">
                  {state.error}
                </DialogTitle>
                <DialogDescription>
                  We didn&apos;t catch that. Try submitting again, or reach out
                  through one of the{" "}
                  <a
                    href="#support"
                    className="font-medium text-stone-950 underline"
                    onClick={() => setIsOpen(false)}
                  >
                    platforms listed
                  </a>
                  .
                </DialogDescription>
              </>
            )}

            <DialogClose asChild>
              <OutlineButton className="mt-8 w-full">Close</OutlineButton>
            </DialogClose>
          </DialogContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};
