import PlacesToVisitPage from "@/page-views/PlacesToVisitPage";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/places-to-visit-in-chikmagalur");

export default function Page() {
  return <PlacesToVisitPage />;
}
