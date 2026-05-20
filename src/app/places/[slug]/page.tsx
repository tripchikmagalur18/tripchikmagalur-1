import DestinationPage from "@/page-views/DestinationPage";
import { metadataForDestination, generateStaticParams } from "@/lib/route-metadata";

export { generateStaticParams };

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return metadataForDestination(slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <DestinationPage slug={slug} />;
}
