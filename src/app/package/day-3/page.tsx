import PackageDayThree from "@/page-views/PackageDayThree";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/package/day-3");

export default function Page() {
  return <PackageDayThree />;
}
