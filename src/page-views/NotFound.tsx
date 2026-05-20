"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Home, Map, BookOpen, HelpCircle, Mountain, Coffee } from "lucide-react";
import { PageJsonLd } from "@/components/page-json-ld";

const popularLinks = [
  { href: "/", label: "Home", icon: Home, desc: "Back to start" },
  { href: "/places", label: "Places to Visit", icon: Map, desc: "30+ destinations" },
  { href: "/adventure", label: "Adventure", icon: Mountain, desc: "Treks, ATV, zip" },
  { href: "/stays", label: "Stays", icon: Coffee, desc: "Coffee estate stays" },
  { href: "/blog", label: "Travel Blog", icon: BookOpen, desc: "Guides & tips" },
  { href: "/faq", label: "FAQ", icon: HelpCircle, desc: "Common questions" },
];

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <PageJsonLd
      />
      <div className="max-w-3xl w-full text-center">
        <p className="text-7xl md:text-9xl font-display font-bold text-gradient-gold mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-3">
          Looks like you've wandered off the trail
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10">
          The page you're looking for doesn't exist. But Chikmagalur has plenty
          of other paths to explore — start here:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
          {popularLinks.map(({ href, label, icon: Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="group glass rounded-2xl p-4 md:p-5 flex flex-col items-center text-center transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary mb-2 transition-transform group-hover:scale-110" />
              <span className="font-display font-semibold text-foreground text-sm md:text-base">
                {label}
              </span>
              <span className="text-muted-foreground text-xs mt-0.5">{desc}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block mt-10 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          ← Return to homepage
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
