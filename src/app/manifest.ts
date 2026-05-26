import type { MetadataRoute } from "next";

const ICON_V = "4";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trip Chikmagalur",
    short_name: "Trip Chikmagalur",
    description:
      "Chikmagalur tour packages from Bangalore — Mullayanagiri trek, Hebbe Falls, resort & villa stays, adventure activities and travel guides.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f7",
    theme_color: "#c45c26",
    lang: "en-IN",
    icons: [
      {
        src: `/icon-512.png?v=${ICON_V}`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/icon-192.png?v=${ICON_V}`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/icon-180.png?v=${ICON_V}`,
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/icon-512-maskable.png?v=${ICON_V}`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: `/icon-192-maskable.png?v=${ICON_V}`,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
