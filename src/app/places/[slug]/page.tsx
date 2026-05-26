import { notFound } from "next/navigation";
import DestinationPage from "@/page-views/DestinationPage";
import { metadataForDestination, generateStaticParams } from "@/lib/route-metadata";
import { destinations } from "@/data/destinations";

export { generateStaticParams };

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return metadataForDestination(slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!destinations[slug]) notFound();
  return <DestinationPage slug={slug} />;
}
