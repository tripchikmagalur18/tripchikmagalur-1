import Link from "next/link";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Tour Packages", href: "/chikmagalur-tour-packages" },
    { label: "Places to Visit", href: "/places-to-visit-in-chikmagalur" },
    { label: "2-Day Itinerary", href: "/2-day-chikmagalur-itinerary" },
    { label: "Best Time to Visit", href: "/best-time-to-visit-chikmagalur" },
    { label: "How to Reach", href: "/how-to-reach-chikmagalur" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/#contact" },
  ];

  const isHashLink = (href: string) => href.includes("#") && (href.startsWith("/#") || href.startsWith("#"));

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div>
            <span className="text-2xl font-display font-bold">Trip Chikmagalur</span>
            <p className="text-white/50 mt-1 text-sm">
              Your gateway to the Western Ghats
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) =>
              isHashLink(link.href) ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {currentYear} Wanderlust_ckm. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-sunset fill-sunset" /> in Chikmagalur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
