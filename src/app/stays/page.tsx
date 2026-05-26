import StaysPage from "@/page-views/StaysPage";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/stays");
}

export default function Page() {
  return <StaysPage />;
}
