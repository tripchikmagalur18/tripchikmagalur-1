import LocationTourPage from "@/page-views/LocationTourPage";
import { metadataForLocation } from "@/lib/location-metadata";

export async function generateMetadata() {
  return metadataForLocation("chikmagalur-corporate-outing-packages");
}

export default function Page() {
  return <LocationTourPage slug="chikmagalur-corporate-outing-packages" />;
}
