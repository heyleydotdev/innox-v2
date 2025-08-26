import "../styles/globals.css";

import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { cn } from "~/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innox.pro"),
  title: {
    template: `%s - Innox Solutions`,
    default: "Innox - Your vision, our innovation",
  },
  description:
    "We offer innovative solutions across various fields, including design, development, automation, and more. Committed to bringing your ideas to life and ensuring success in the digital world.",
  openGraph: {
    siteName: "Innox Solutions",
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "h-full bg-white font-sans text-stone-950 antialiased",
        )}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-DKXCJT65E5" />
    </html>
  );
}
