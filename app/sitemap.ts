import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://karthik-portfolio.vercel.app"; // TODO: replace with real domain
  return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
