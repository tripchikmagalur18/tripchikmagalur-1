import Index from "@/page-views/Index";
import { JsonLd } from "@/components/json-ld";
import { homePageSchema } from "@/lib/home-schema";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/");
}

export default function Page() {
  return (
    <>
      <JsonLd data={homePageSchema} />
      <Index />
    </>
  );
}
