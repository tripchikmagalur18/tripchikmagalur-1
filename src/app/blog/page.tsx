import BlogPage from "@/page-views/BlogPage";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/blog");

export default function Page() {
  return <BlogPage />;
}
