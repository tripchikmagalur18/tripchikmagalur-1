import LocationTourPage from "@/page-views/LocationTourPage";
import { metadataForLocation } from "@/lib/location-metadata";

export async function generateMetadata() {
  return metadataForLocation("chikmagalur-weekend-packages");
}

export default function Page() {
  return <LocationTourPage slug="chikmagalur-weekend-packages" />;
}
