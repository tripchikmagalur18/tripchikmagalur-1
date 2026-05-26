import TravelInfoPage from "@/page-views/TravelInfoPage";
import { metadataForTravelInfo } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForTravelInfo("things-to-do-in-chikmagalur");
}

export default function Page() {
  return <TravelInfoPage dataKey="things-to-do-in-chikmagalur" />;
}
