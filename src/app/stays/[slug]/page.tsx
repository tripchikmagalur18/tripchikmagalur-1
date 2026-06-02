import { notFound } from "next/navigation";
import StayDetailPage from "@/page-views/StayDetailPage";
import { JsonLd } from "@/components/JsonLd";
import { getStayBySlug, staySlugs } from "@/data/stays";
import { metadataForStay } from "@/lib/route-metadata";
import { buildStayLodgingSchema } from "@/lib/stay-schema";
import { buildBreadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return staySlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return metadataForStay(slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) notFound();

  return (
    <>
      <JsonLd
        data={[
          buildStayLodgingSchema(stay),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Stays", path: "/stays" },
            { name: stay.name, path: `/stays/${stay.slug}` },
          ]),
        ]}
      />
      <StayDetailPage stay={stay} />
    </>
  );
}
