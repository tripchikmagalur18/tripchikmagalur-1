import ItineraryPage from "@/page-views/ItineraryPage";
import { metadataForItinerary } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForItinerary("3-day-chikmagalur-itinerary");
}

export default function Page() {
  return <ItineraryPage slug="3-day-chikmagalur-itinerary" />;
}
