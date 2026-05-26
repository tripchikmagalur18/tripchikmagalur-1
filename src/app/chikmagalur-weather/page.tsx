import TravelInfoPage from "@/page-views/TravelInfoPage";
import { metadataForTravelInfo } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForTravelInfo("chikmagalur-weather");
}

export default function Page() {
  return <TravelInfoPage dataKey="chikmagalur-weather" />;
}
