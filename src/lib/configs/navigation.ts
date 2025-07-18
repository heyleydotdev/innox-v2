import type { Icons } from "~/components/icons";

export interface MainNavigation {
  name: string;
  href: string;
}

export const main_navigation = [
  { name: "Services", href: "/#services" },
  { name: "Workforce", href: "/#workforce" },
  { name: "Packages", href: "/#packages" },
  { name: "Comments", href: "/#comments" },
  { name: "Stages", href: "/#stages" },
  { name: "Get Support", href: "/#support" },
] satisfies MainNavigation[];

export interface SocialNavigation {
  name: string;
  icon: keyof typeof Icons;
  href: string;
}

export const social_navigation = [
  {
    name: "X (Twitter)",
    icon: "twitter",
    href: "https://x.com/_innoX_Pro",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/_innox_pro_/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/profile.php?id=61564981242544",
  },
] satisfies SocialNavigation[];
