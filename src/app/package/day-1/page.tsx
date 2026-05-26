import PackageDayOne from "@/page-views/PackageDayOne";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/package/day-1");
}

export default function Page() {
  return <PackageDayOne />;
}
