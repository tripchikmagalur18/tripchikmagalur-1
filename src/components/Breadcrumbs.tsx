import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: Crumb[]; // last item = current page (no link)
  className?: string;
}

/**
 * Visual breadcrumbs. Pair with `<SEO breadcrumbs={items} />` so the
 * BreadcrumbList JSON-LD schema is emitted alongside.
 */
const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm text-muted-foreground ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i === 0 && <Home className="w-3.5 h-3.5 opacity-70" aria-hidden />}
              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 opacity-50" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
