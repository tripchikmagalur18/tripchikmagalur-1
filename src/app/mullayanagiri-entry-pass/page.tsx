import MullayanagiriEntryPassPage from "@/page-views/MullayanagiriEntryPassPage";
import { buildMetadata } from "@/lib/seo";
import { mullayanagiriEntryPassPage } from "@/data/mullayanagiri-entry-pass";

export async function generateMetadata() {
  const p = mullayanagiriEntryPassPage;
  return buildMetadata({
    title: p.title,
    description: p.description,
    canonical: `/${p.slug}`,
    ogType: "article",
  });
}

export default function Page() {
  return <MullayanagiriEntryPassPage />;
}
