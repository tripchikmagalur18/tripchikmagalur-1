import PackageDayFive from "@/page-views/PackageDayFive";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/package/day-5");
}

export default function Page() {
  return <PackageDayFive />;
}
