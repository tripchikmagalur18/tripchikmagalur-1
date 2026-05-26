import PillarPage from "@/page-views/PillarPage";
import { metadataForPillar } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPillar("resorts-in-chikmagalur");
}

export default function Page() {
  return <PillarPage dataKey="resorts-in-chikmagalur" />;
}
