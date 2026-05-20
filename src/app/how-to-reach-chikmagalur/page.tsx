import TravelInfoPage from "@/page-views/TravelInfoPage";
import { metadataForTravelInfo } from "@/lib/route-metadata";

export const metadata = metadataForTravelInfo("how-to-reach-chikmagalur");

export default function Page() {
  return <TravelInfoPage dataKey="how-to-reach-chikmagalur" />;
}
