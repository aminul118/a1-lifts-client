import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "*",
      disallow: "/private/",
    },
    sitemap: "https://www.a1-lifts.com/sitemap.xml",
  };
};

export default robots;
