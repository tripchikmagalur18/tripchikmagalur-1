import AdventurePage from "@/page-views/AdventurePage";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/adventure");

export default function Page() {
  return <AdventurePage />;
}
