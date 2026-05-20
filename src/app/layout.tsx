import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "@/components/providers";
import { GlobalJsonLd } from "@/components/global-json-ld";
import { ChatWidgetScripts } from "@/components/chat-widget-scripts";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tripchikmagalur.com"),
  ...buildMetadata({
    title: "Best Chikmagalur Tour Packages | Trip Chikmagalur",
    description:
      "Explore affordable Chikmagalur tour packages with stays, sightseeing, trekking, waterfalls and adventure activities.",
    canonical: "/",
    ogImage: DEFAULT_OG_IMAGE,
  }),
  keywords: [
    "Chikmagalur tour packages",
    "Chikmagalur trip",
    "Mullayanagiri trek",
    "places to visit in Chikmagalur",
  ],
  authors: [{ name: "Trip Chikmagalur - Wanderlust_ckm" }],
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Chikmagalur, Karnataka, India",
    "geo.position": "13.3161;75.7720",
    ICBM: "13.3161, 75.7720",
  },
  icons: {
    icon: "https://storage.googleapis.com/gpt-engineer-file-uploads/qoN8gF9Ct6Rzz2WPb28F0WvdTdc2/uploads/1770538588035-trip_chikmagalur.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <GlobalJsonLd />
        <Providers>{children}</Providers>
        <ChatWidgetScripts />
      </body>
    </html>
  );
}
