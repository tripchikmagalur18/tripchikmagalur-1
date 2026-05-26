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
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192-maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
