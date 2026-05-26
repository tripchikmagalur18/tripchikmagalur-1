import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import { GlobalJsonLd } from "@/components/global-json-ld";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
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
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-background font-sans antialiased">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TM0X5EPE13"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TM0X5EPE13');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wvkq15r67d");
          `}
        </Script>

        <GlobalJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}