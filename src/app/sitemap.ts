import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const buildURL = (path = "/") => new URL(path, "https://innox.pro").toString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: buildURL(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: buildURL("/posts"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
