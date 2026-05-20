import TourPackagesPage from "@/page-views/TourPackagesPage";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/chikmagalur-tour-packages");

export default function Page() {
  return <TourPackagesPage />;
}
