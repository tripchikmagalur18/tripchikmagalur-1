import SeoPackagePage from "@/page-views/SeoPackagePage";
import { metadataForPackageSeo } from "@/lib/package-seo-metadata";

export async function generateMetadata() {
  return metadataForPackageSeo("muthodi-safari-package");
}

export default function Page() {
  return <SeoPackagePage slug="muthodi-safari-package" />;
}
