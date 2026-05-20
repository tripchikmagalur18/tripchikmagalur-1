import TravelInfoPage from "@/page-views/TravelInfoPage";
import { metadataForTravelInfo } from "@/lib/route-metadata";

export const metadata = metadataForTravelInfo("chikmagalur-local-food");

export default function Page() {
  return <TravelInfoPage dataKey="chikmagalur-local-food" />;
}
