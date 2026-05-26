import PackageDayFive from "@/page-views/PackageDayFive";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/package/day-5");

export default function Page() {
  return <PackageDayFive />;
}
