import PackageDayFour from "@/page-views/PackageDayFour";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/package/day-4");
}

export default function Page() {
  return <PackageDayFour />;
}
