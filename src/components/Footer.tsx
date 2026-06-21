import Link from "next/link";
import { ExternalLink, Heart, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS_CONTACT } from "@/lib/business-contact";
import { MULLAYANAGIRI_PASS_BOOKING_URL } from "@/data/mullayanagiri-entry-pass";

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
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-display font-bold">Trip Chikmagalur</span>
            <p className="text-white/50 mt-1 text-sm">
              Your gateway to the Western Ghats
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 content-start">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact — prominent */}
          <div className="glass-dark rounded-2xl p-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-lg font-display font-semibold text-sunset hover:text-sunset/90 transition-colors"
            >
              Contact us
            </Link>
            <p className="text-white/50 text-xs mt-1 mb-4">
              Map, hours & all ways to reach us
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={BUSINESS_CONTACT.phoneLink}
                  className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 mt-0.5 text-sunset" />
                  {BUSINESS_CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_CONTACT.email}`}
                  className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0 mt-0.5 text-sunset" />
                  {BUSINESS_CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-sunset" />
                <span>{BUSINESS_CONTACT.address.formatted}</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-sunset px-5 py-2.5 text-sm font-semibold text-white hover:bg-sunset/90 transition-colors"
              >
                View contact page
              </Link>
              <a
                href={MULLAYANAGIRI_PASS_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sunset/50 bg-sunset/10 px-5 py-2.5 text-sm font-semibold text-sunset hover:bg-sunset/20 transition-colors"
              >
                Book Mullayanagiri Online Pass
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
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
