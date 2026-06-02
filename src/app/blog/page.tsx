import BlogPage from "@/page-views/BlogPage";
import { JsonLd } from "@/components/JsonLd";
import { blogBreadcrumbs, buildBlogListingSchema } from "@/lib/content-schema";
import { metadataForPath } from "@/lib/route-metadata";

export async function generateMetadata() {
  return metadataForPath("/blog");
}

export default function Page() {
  return (
    <>
      <JsonLd data={[buildBlogListingSchema(), blogBreadcrumbs]} />
      <BlogPage />
    </>
  );
}
