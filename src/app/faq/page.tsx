import FAQPage from "@/page-views/FAQPage";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/faq");

export default function Page() {
  return <FAQPage />;
}
