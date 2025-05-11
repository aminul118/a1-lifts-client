import type { MetadataRoute } from "next";

type Routes = {
  url: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = "https://www.a1-lifts.com";
  const lastModified = new Date();

  const staticRoutes: Routes[] = [
    {
      url: "/",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "about",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "lifts",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "generators",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "substations",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "lift-services",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "generator-services",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "substation-services",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "engineering-solution",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "spare-parts",
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "terms-of-use",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}/${route.url}`.replace(/\/+$/, ""),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
};

export default sitemap;
