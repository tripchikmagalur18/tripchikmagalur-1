import ContactPage from "@/page-views/ContactPage";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/contact");
}

export default function Page() {
  return <ContactPage />;
}
