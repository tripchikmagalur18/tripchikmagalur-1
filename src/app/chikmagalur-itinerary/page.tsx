import ItineraryPage from "@/page-views/ItineraryPage";
import { metadataForItinerary } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForItinerary("chikmagalur-itinerary");
}

export default function Page() {
  return <ItineraryPage slug="chikmagalur-itinerary" />;
}
