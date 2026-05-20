import PillarPage from "@/page-views/PillarPage";
import { metadataForPillar } from "@/lib/route-metadata";

export const metadata = metadataForPillar("waterfalls-in-chikmagalur");

export default function Page() {
  return <PillarPage dataKey="waterfalls-in-chikmagalur" />;
}
