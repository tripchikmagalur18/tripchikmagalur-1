import { notFound } from "next/navigation";
import BlogArticlePage from "@/page-views/BlogArticlePage";
import { blogLongPosts, blogLongSlugs } from "@/data/blog-long-posts";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogLongSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogLongPosts[slug];
  if (!post) {
    return buildMetadata({
      title: "Article Not Found — Trip Chikmagalur",
      description: "This blog article could not be found.",
      canonical: "/404",
      noindex: true,
    });
  }
  return buildMetadata({
    title: `${post.title} | Trip Chikmagalur`,
    description: post.metaDescription,
    canonical: `/blog/${post.slug}`,
    ogType: "article",
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!blogLongPosts[slug]) notFound();
  return <BlogArticlePage slug={slug} />;
}
