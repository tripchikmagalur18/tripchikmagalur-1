import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/local-business-schema";

export function GlobalJsonLd() {
  return <JsonLd data={localBusinessSchema} />;
}
