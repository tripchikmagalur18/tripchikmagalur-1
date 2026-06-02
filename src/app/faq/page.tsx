import FAQPage from "@/page-views/FAQPage";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqPageSchema, faqBreadcrumbs } from "@/lib/content-schema";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/faq");
}

export default function Page() {
  return (
    <>
      <JsonLd data={[buildFaqPageSchema(), faqBreadcrumbs]} />
      <FAQPage />
    </>
  );
}
