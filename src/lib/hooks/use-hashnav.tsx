import type { Url } from "next/dist/shared/lib/router/router";

import { usePathname } from "next/navigation";

import { NavLink } from "~/components/nav-link";

export const useHashnav = (href: Url) => {
  const pathname = usePathname();

  const _href = (typeof href === "string" ? href : href.pathname) ?? "";
  const _url = new URL(_href, "http://localhost");

  if (_url.hash && _url.pathname === pathname) {
    return "a";
  } else {
    return NavLink;
  }
};
