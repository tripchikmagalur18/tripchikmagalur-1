import LocationTourPage from "@/page-views/LocationTourPage";
import { metadataForLocation } from "@/lib/location-metadata";

export async function generateMetadata() {
  return metadataForLocation("chikmagalur-solo-traveler-packages");
}

export default function Page() {
  return <LocationTourPage slug="chikmagalur-solo-traveler-packages" />;
}
