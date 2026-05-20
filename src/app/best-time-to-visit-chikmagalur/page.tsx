import TravelInfoPage from "@/page-views/TravelInfoPage";
import { metadataForTravelInfo } from "@/lib/route-metadata";

export const metadata = metadataForTravelInfo("best-time-to-visit-chikmagalur");

export default function Page() {
  return <TravelInfoPage dataKey="best-time-to-visit-chikmagalur" />;
}
