import TravelInfoPage from "@/page-views/TravelInfoPage";
import { metadataForTravelInfo } from "@/lib/route-metadata";

export const metadata = metadataForTravelInfo("chikmagalur-travel-tips");

export default function Page() {
  return <TravelInfoPage dataKey="chikmagalur-travel-tips" />;
}
