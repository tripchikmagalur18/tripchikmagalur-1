import PackageDayTwo from "@/page-views/PackageDayTwo";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/package/day-2");
}

export default function Page() {
  return <PackageDayTwo />;
}
