import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "A1 Lifts and Engineering",
    short_name: "A1 Lifts",
    description:
      "A1 Lifts and Engineering is a trusted provider of elevators, escalators, and lift maintenance services in Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    categories: ["construction", "engineering", "services"],
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
