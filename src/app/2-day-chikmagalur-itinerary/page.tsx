import TwoDayItineraryPage from "@/page-views/TwoDayItineraryPage";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/2-day-chikmagalur-itinerary");

export default function Page() {
  return <TwoDayItineraryPage />;
}
