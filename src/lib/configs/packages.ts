import type { Icons } from "~/components/icons";

export interface ConfigPackages {
  [x: number]: {
    name: string;
    icon: keyof typeof Icons;
    price: string;
    duration: string;
    tagline: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const config_packages = [
  {
    name: "Launch",
    icon: "puzzle",
    price: "$750+",
    duration: "per month",
    tagline: "Ready to get your idea out there",
    features: [
      {
        title: "Logo & Graphics",
        description: "Fresh logo plus 5 visuals to set your look.",
      },
      {
        title: "Quick Animation",
        description: "A 30-sec intro to grab attention fast.",
      },
      {
        title: "Simple Website",
        description: "3-page responsive site that works everywhere.",
      },
      {
        title: "Starter Bot",
        description: "Telegram/Discord bot with 2 handy tricks.",
      },
      {
        title: "Basic Automation",
        description: "Sends form data straight to your inbox or sheet.",
      },
      {
        title: "Online Setup",
        description: "SEO basics and social links done for you.",
      },
      {
        title: "Web3 Ready",
        description: "Wallet connect if you ever need it.",
      },
    ],
  },
  {
    name: "Grow",
    icon: "atom",
    price: "$1,500+",
    duration: "per month",
    tagline: "Let’s scale your brand together",
    features: [
      {
        title: "Brand Design",
        description: "Logo plus 10 graphics with matching vibes.",
      },
      {
        title: "Explainer Video",
        description: "90-sec animated story of what you do.",
      },
      {
        title: "Interactive Website",
        description: "6 slick pages, easy to update with CMS.",
      },
      {
        title: "Smart Bot",
        description: "Bot hooks to APIs and handles tasks for you.",
      },
      {
        title: "Workflow Automation",
        description: "Emails, dashboards, data – all on autopilot.",
      },
      {
        title: "Marketing Setup",
        description: "Email templates and lead forms so people find you.",
      },
      {
        title: "Web3 Integration",
        description: "NFT page or contract UI, no sweat.",
      },
    ],
  },
  {
    name: "Lead",
    icon: "earth",
    price: "$6,000+",
    duration: "per month",
    tagline: "Full custom build — you call the shots",
    features: [
      {
        title: "Unlimited Design",
        description: "Ask for any graphics, all day long.",
      },
      {
        title: "Animation Suite",
        description: "Explainers, reels, UI motion — you name it.",
      },
      {
        title: "Full Website / App",
        description: "Full-stack build with logins, payments, the lot.",
      },
      {
        title: "Advanced Bot",
        description: "AI or multi-platform bot doing the heavy lifting.",
      },
      {
        title: "Advanced Automation",
        description: "Complex workflows + reports so you can chill.",
      },
      {
        title: "Marketing System",
        description: "Full funnel: landing to CRM & ads.",
      },
      {
        title: "Full Web3 Build",
        description: "Mint, stake, dApp — the works.",
      },
    ],
  },
] satisfies ConfigPackages;
