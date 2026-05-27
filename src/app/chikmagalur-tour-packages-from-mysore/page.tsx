import LocationTourPage from "@/page-views/LocationTourPage";
import { metadataForLocation } from "@/lib/location-metadata";

export async function generateMetadata() {
  return metadataForLocation("chikmagalur-tour-packages-from-mysore");
}

export default function Page() {
  return <LocationTourPage slug="chikmagalur-tour-packages-from-mysore" />;
}
