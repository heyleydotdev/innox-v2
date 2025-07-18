"use client";

import type { NavLinkProps } from "~/components/nav-link";
import type { SocialNavigation } from "~/lib/configs/navigation";

import Link from "next/link";

import { MobileMenu } from "~/app/(base)/_components/mobile-menu";
import { Icons } from "~/components/icons";
import { Logo } from "~/components/logo";
import { main_navigation, social_navigation } from "~/lib/configs/navigation";
import { useHashnav } from "~/lib/hooks/use-hashnav";
import { cn } from "~/lib/utils";

export const BaseHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 h-14 border-b bg-white">
      <div className="container flex h-full items-center gap-6">
        <Link href={"/"}>
          <Logo className="h-7" />
        </Link>
        <div className="flex h-full items-center max-md:hidden">
          {main_navigation.map(({ name, href }) => (
            <NavigationLink
              key={name}
              href={href}
              data-key={name}
              className="max-lg:data-[key=Comments]:hidden"
            >
              {name}
            </NavigationLink>
          ))}
        </div>
        <div className="flex h-full flex-1 items-center justify-end">
          <div className="-mr-2.5 flex h-full max-md:hidden">
            {social_navigation.map((item) => (
              <SocialLink key={item.name} {...item} />
            ))}
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

const NavigationLink: React.FC<NavLinkProps> = ({
  href,
  className,
  ...rest
}) => {
  const Component = useHashnav(href);

  return (
    <Component
      className={cn(
        "px-3 py-2 text-[13px]/6 font-medium text-stone-700 hover:text-stone-950",
        className,
      )}
      href={href.toString()}
      {...rest}
    />
  );
};

const SocialLink: React.FC<SocialNavigation> = ({ icon, name, href }) => {
  const IconComp = Icons[icon];

  return (
    <Link
      className="flex h-full w-9 items-center justify-center text-zinc-600 transition-colors hover:text-stone-950 focus:outline-0 focus-visible:text-stone-950"
      href={href}
      target="_blank"
      title={name}
      aria-label={name}
    >
      <IconComp className="size-4" />
    </Link>
  );
};
