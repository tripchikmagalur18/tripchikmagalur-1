import PlacesToVisitPage from "@/page-views/PlacesToVisitPage";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/places-to-visit-in-chikmagalur");
}

export default function Page() {
  return <PlacesToVisitPage />;
}
