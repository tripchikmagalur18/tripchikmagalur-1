import TravelInfoPage from "@/page-views/TravelInfoPage";
import { metadataForTravelInfo } from "@/lib/route-metadata";

export const metadata = metadataForTravelInfo("things-to-do-in-chikmagalur");

export default function Page() {
  return <TravelInfoPage dataKey="things-to-do-in-chikmagalur" />;
}
