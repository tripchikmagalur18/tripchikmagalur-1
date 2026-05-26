import TravelInfoPage from "@/page-views/TravelInfoPage";
import { metadataForTravelInfo } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForTravelInfo("how-to-reach-chikmagalur");
}

export default function Page() {
  return <TravelInfoPage dataKey="how-to-reach-chikmagalur" />;
}
