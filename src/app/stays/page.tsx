import StaysPage from "@/page-views/StaysPage";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/stays");

export default function Page() {
  return <StaysPage />;
}
