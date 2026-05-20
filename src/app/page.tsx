import Index from "@/page-views/Index";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/");

export default function Page() {
  return <Index />;
}
