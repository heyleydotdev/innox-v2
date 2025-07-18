"use client";

import * as Dialog from "@radix-ui/react-dialog";

export interface PackageDialogProps
  extends React.ComponentPropsWithRef<typeof Dialog.Trigger> {}

export const PackageDialog: React.FC<PackageDialogProps> = ({ ...rest }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger {...rest} />
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-mm-overlay-in data-[state=closed]:animate-mm-overlay-out fixed inset-0 grid size-full grid-cols-1 grid-rows-[1fr_auto_3fr] justify-items-center bg-zinc-950/50">
          <Dialog.Content className="row-start-2 h-[50vh] w-full max-w-sm bg-white">
            <Dialog.Title />
            <Dialog.Description />
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
