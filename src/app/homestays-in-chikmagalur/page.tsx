import LocationTourPage from "@/page-views/LocationTourPage";
import { metadataForLocation } from "@/lib/location-metadata";

export async function generateMetadata() {
  return metadataForLocation("homestays-in-chikmagalur");
}

export default function Page() {
  return <LocationTourPage slug="homestays-in-chikmagalur" />;
}
