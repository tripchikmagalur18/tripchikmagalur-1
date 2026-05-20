import ItineraryPage from "@/page-views/ItineraryPage";
import { metadataForItinerary } from "@/lib/route-metadata";

export const metadata = metadataForItinerary("chikmagalur-itinerary-from-bangalore");

export default function Page() {
  return <ItineraryPage slug="chikmagalur-itinerary-from-bangalore" />;
}
