import { notFound } from "next/navigation";
import StayDetailPage from "@/page-views/StayDetailPage";
import { getStayBySlug, staySlugs } from "@/data/stays";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return staySlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) return {};

  return buildMetadata({
    title: `${stay.name} — Book Stay in Chikmagalur | Trip Chikmagalur`,
    description: `${stay.description.slice(0, 155)}… From ₹${stay.pricePerPerson.toLocaleString("en-IN")}/adult/night.`,
    canonical: `/stays/${stay.slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) notFound();

  return <StayDetailPage stay={stay} />;
}
