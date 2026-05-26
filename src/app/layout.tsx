import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import { GlobalJsonLd } from "@/components/global-json-ld";
import { buildMetadata, DEFAULT_OG_IMAGE, SITE_NAME, SITE_TAGLINE } from "@/lib/seo";
import { HOME_KEYWORDS } from "@/lib/seo-keywords";
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
    title: "Chikmagalur Tour Packages 2026 | Stays, Treks & Adventures — Trip Chikmagalur",
    description:
      "Book Chikmagalur tour packages from Bangalore — Mullayanagiri trek, Hebbe Falls, resort & villa stays, jeep safaris & coffee estates. Expert guides, best prices.",
    canonical: "/",
    ogImage: DEFAULT_OG_IMAGE,
    keywords: HOME_KEYWORDS,
    subject: SITE_TAGLINE,
  }),
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
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
