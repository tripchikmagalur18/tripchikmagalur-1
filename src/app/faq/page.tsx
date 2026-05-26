import FAQPage from "@/page-views/FAQPage";
import { JsonLd } from "@/components/json-ld";
import { buildFaqPageSchema, faqBreadcrumbs } from "@/lib/content-schema";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/faq");

export default function Page() {
  return (
    <>
      <JsonLd data={[buildFaqPageSchema(), faqBreadcrumbs]} />
      <FAQPage />
    </>
  );
}
