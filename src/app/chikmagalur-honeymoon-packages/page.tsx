import LocationTourPage from "@/page-views/LocationTourPage";
import { metadataForLocation } from "@/lib/location-metadata";

export async function generateMetadata() {
  return metadataForLocation("chikmagalur-honeymoon-packages");
}

export default function Page() {
  return <LocationTourPage slug="chikmagalur-honeymoon-packages" />;
}
