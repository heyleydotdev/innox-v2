import type { NavLinkProps } from "~/components/nav-link";

import { NavLink } from "~/components/nav-link";
import { cn } from "~/lib/utils";

export const BaseHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 h-14 border-b bg-white">
      <div className="container flex h-full items-center gap-6">
        <span>Logo</span>
        <div className="flex h-full items-center">
          <NavigationLink href="/">Services</NavigationLink>
          <NavigationLink href="/">Workforce</NavigationLink>
          <NavigationLink href="/">Packages</NavigationLink>
          <NavigationLink href="/">Comments</NavigationLink>
          <NavigationLink href="/">Get Support</NavigationLink>
        </div>
      </div>
    </header>
  );
};

const NavigationLink: React.FC<NavLinkProps> = ({ className, ...rest }) => {
  return (
    <NavLink
      className={cn(
        "px-3 py-2 text-[13px]/6 font-medium text-stone-700 hover:text-stone-800",
        className,
      )}
      {...rest}
    />
  );
};
