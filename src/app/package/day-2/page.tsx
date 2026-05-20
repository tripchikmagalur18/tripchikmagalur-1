import PackageDayTwo from "@/page-views/PackageDayTwo";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/package/day-2");

export default function Page() {
  return <PackageDayTwo />;
}
