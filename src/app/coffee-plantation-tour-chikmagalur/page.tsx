import LocationTourPage from "@/page-views/LocationTourPage";
import { metadataForLocation } from "@/lib/location-metadata";

export async function generateMetadata() {
  return metadataForLocation("coffee-plantation-tour-chikmagalur");
}

export default function Page() {
  return <LocationTourPage slug="coffee-plantation-tour-chikmagalur" />;
}
