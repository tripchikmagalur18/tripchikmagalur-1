import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trip Chikmagalur",
    short_name: "Trip Chik",
    description:
      "Chikmagalur tour packages from Bangalore — Mullayanagiri trek, Hebbe Falls, resort & villa stays, adventure activities and travel guides.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f7",
    theme_color: "#c45c26",
    lang: "en-IN",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
