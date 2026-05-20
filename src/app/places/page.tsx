import PlacesPage from "@/page-views/PlacesPage";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/places");

export default function Page() {
  return <PlacesPage />;
}
