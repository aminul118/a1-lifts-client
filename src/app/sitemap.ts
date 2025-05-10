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
      url: "",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "about",
      changeFrequency: "monthly",
      priority: 8,
    },
    {
      url: "lifts",
      changeFrequency: "monthly",
      priority: 7,
    },
    {
      url: "genarators",
      changeFrequency: "monthly",
      priority: 6,
    },
    {
      url: "substations",
      changeFrequency: "monthly",
      priority: 6,
    },
    {
      url: "lift-services",
      changeFrequency: "monthly",
      priority: 5,
    },
    {
      url: "genarator-services",
      changeFrequency: "monthly",
      priority: 5,
    },
    {
      url: "substation-services",
      changeFrequency: "monthly",
      priority: 5,
    },
    {
      url: "engineering-solution",
      changeFrequency: "monthly",
      priority: 5,
    },
    {
      url: "spare-parts",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "privacy-policy",
      changeFrequency: "yearly",
      priority: 3,
    },
    {
      url: "terms-of-use",
      changeFrequency: "yearly",
      priority: 3,
    },
  ];

  const staticAllRoutes = staticRoutes.map((route) => ({
    url: `${baseUrl}/${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return staticAllRoutes;
};

export default sitemap;
