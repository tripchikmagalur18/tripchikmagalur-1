import PlacesPage from "@/page-views/PlacesPage";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/places");
}

export default function Page() {
  return <PlacesPage />;
}
