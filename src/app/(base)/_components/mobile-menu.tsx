"use client";

import type { NavLinkProps } from "~/components/nav-link";
import type { SocialNavigation } from "~/lib/configs/navigation";

import { useRef } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

import { Icons } from "~/components/icons";
import { main_navigation, social_navigation } from "~/lib/configs/navigation";
import { useHashnav } from "~/lib/hooks/use-hashnav";
import { cn } from "~/lib/utils";

export const MobileMenu: React.FC = () => {
  const ref = useRef<React.ComponentRef<typeof Dialog.Close>>(null);

  return (
    <Dialog.Root>
      <Dialog.Trigger className="group -mr-4 flex h-full w-12 cursor-pointer items-center justify-center text-stone-900 focus:outline-0 md:hidden">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x={1}
            y={7.5}
            width={14}
            height={1}
            rx={0.5}
            className="origin-center transition-transform duration-150 group-data-[state=closed]:translate-y-[-3.5px] group-data-[state=open]:rotate-45"
          />
          <rect
            x={1}
            y={7.5}
            width={14}
            height={1}
            rx={0.5}
            className="origin-center transition-transform duration-150 group-data-[state=closed]:translate-y-[3.5px] group-data-[state=open]:-rotate-45"
          />
        </svg>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-mm-overlay-in data-[state=closed]:animate-mm-overlay-out fixed inset-0 z-50 size-full bg-stone-900/40" />
        <Dialog.Content className="data-[state=open]:animate-mm-content-in data-[state=closed]:animate-mm-content-out fixed inset-x-0 bottom-0 z-50 w-full border-t bg-white">
          <div
            className={cn(
              "relative [--width:max(var(--container-padding),calc((100%-var(--breakpoint-xs))/2+var(--container-padding)))]",
              "before:bg-empty before:absolute before:inset-y-0 before:left-0 before:w-(--width)",
              "after:bg-empty after:absolute after:inset-y-0 after:right-0 after:w-(--width)",
            )}
          >
            <Header ref={ref} />
            <Dialog.Description className="sr-only">
              Mobile navigation
            </Dialog.Description>
            <div className="container max-w-(--breakpoint-xs)">
              <div className="flex flex-col divide-y border-x pb-6">
                {main_navigation.map(({ name, href }) => (
                  <NavigationLink key={name} href={href} cRef={ref}>
                    {name}
                  </NavigationLink>
                ))}
                <div className="flex items-center justify-center">
                  {social_navigation.map((item) => (
                    <SocialLink key={item.name} cRef={ref} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Header: React.FC<
  Pick<React.ComponentPropsWithRef<typeof Dialog.Close>, "ref">
> = ({ ref }) => {
  return (
    <div className="container h-9 max-w-(--breakpoint-xs)">
      <div className="flex h-full justify-between border-x border-b">
        <div className="h-full border-r px-2">
          <div className="text-center font-mono text-xs/9 tracking-tight text-stone-300 uppercase">
            [{" "}
            <Dialog.Title asChild>
              <span className="text-stone-800">Navigation</span>
            </Dialog.Title>{" "}
            ]
          </div>
        </div>

        <div className="flex w-9 items-center justify-center border-l">
          <Dialog.Close
            ref={ref}
            className="flex size-full items-center justify-center"
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x={1}
                y={7.5}
                width={14}
                height={1}
                rx={0.5}
                className="origin-center rotate-45"
              />
              <rect
                x={1}
                y={7.5}
                width={14}
                height={1}
                rx={0.5}
                className="origin-center -rotate-45"
              />
            </svg>
          </Dialog.Close>
        </div>
      </div>
    </div>
  );
};

interface NavigationLinkProps extends NavLinkProps {
  cRef: React.RefObject<HTMLButtonElement | null>;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  cRef,
  href,
  className,
  ...rest
}) => {
  const Component = useHashnav(href);

  return (
    <Component
      className={cn(
        "px-4 py-2.5 text-[13px]/6 text-stone-900 transition-colors active:bg-stone-100",
        className,
      )}
      href={href.toString()}
      {...rest}
      onClick={() => cRef.current?.click()}
    />
  );
};

interface SocialLinkProps
  extends Pick<NavigationLinkProps, "cRef">,
    SocialNavigation {}

const SocialLink: React.FC<SocialLinkProps> = ({ cRef, name, icon, href }) => {
  const IconComp = Icons[icon];

  return (
    <Link
      className="flex size-14 items-center justify-center"
      href={href}
      target="_blank"
      title={name}
      aria-label={name}
      onClick={() => cRef.current?.click()}
    >
      <IconComp className="size-4 text-stone-800" />
    </Link>
  );
};
