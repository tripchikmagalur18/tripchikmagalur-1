import PillarPage from "@/page-views/PillarPage";
import { metadataForPillar } from "@/lib/route-metadata";

export const metadata = metadataForPillar("trekking-in-chikmagalur");

export default function Page() {
  return <PillarPage dataKey="trekking-in-chikmagalur" />;
}
