"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps extends React.ComponentPropsWithRef<typeof Link> {
  exact?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ exact, ...rest }) => {
  const pathname = usePathname();
  const href = typeof rest.href === "string" ? rest.href : rest.href.pathname;
  const isActive = href
    ? exact
      ? pathname === href
      : pathname.startsWith(href)
    : false;

  return <Link {...(isActive && { "aria-current": "page" })} {...rest} />;
};
