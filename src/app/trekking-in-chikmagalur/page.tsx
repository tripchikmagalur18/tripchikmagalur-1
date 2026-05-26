import PillarPage from "@/page-views/PillarPage";
import { metadataForPillar } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPillar("trekking-in-chikmagalur");
}

export default function Page() {
  return <PillarPage dataKey="trekking-in-chikmagalur" />;
}
