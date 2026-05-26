import AdventurePage from "@/page-views/AdventurePage";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/adventure");
}

export default function Page() {
  return <AdventurePage />;
}
