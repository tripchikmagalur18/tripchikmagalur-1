import SeoPackagePage from "@/page-views/SeoPackagePage";
import { metadataForPackageSeo } from "@/lib/package-seo-metadata";

export async function generateMetadata() {
  return metadataForPackageSeo("kemmangundi-tour-package");
}

export default function Page() {
  return <SeoPackagePage slug="kemmangundi-tour-package" />;
}
