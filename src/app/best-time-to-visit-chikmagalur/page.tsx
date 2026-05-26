import TravelInfoPage from "@/page-views/TravelInfoPage";
import { metadataForTravelInfo } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForTravelInfo("best-time-to-visit-chikmagalur");
}

export default function Page() {
  return <TravelInfoPage dataKey="best-time-to-visit-chikmagalur" />;
}
