import BlogPage from "@/page-views/BlogPage";
import { JsonLd } from "@/components/json-ld";
import { blogBreadcrumbs, buildBlogListingSchema } from "@/lib/content-schema";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/blog");

export default function Page() {
  return (
    <>
      <JsonLd data={[buildBlogListingSchema(), blogBreadcrumbs]} />
      <BlogPage />
    </>
  );
}
