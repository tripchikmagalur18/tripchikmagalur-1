import SeoPackagePage from "@/page-views/SeoPackagePage";
import { metadataForPackageSeo } from "@/lib/package-seo-metadata";

export async function generateMetadata() {
  return metadataForPackageSeo("belur-heritage-tour-package");
}

export default function Page() {
  return <SeoPackagePage slug="belur-heritage-tour-package" />;
}
