import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://karthik-portfolio-opal-two.vercel.app/sitemap.xml", // TODO: replace with real domain
  };
}
