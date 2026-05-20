import NotFound from "@/page-views/NotFound";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/404");

export default function NotFoundPage() {
  return <NotFound />;
}
