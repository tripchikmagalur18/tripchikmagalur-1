import PillarPage from "@/page-views/PillarPage";
import { metadataForPillar } from "@/lib/route-metadata";

export const metadata = metadataForPillar("chikmagalur-trip-budget");

export default function Page() {
  return <PillarPage dataKey="chikmagalur-trip-budget" />;
}
