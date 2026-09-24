import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  aboutContent,
  aboutSlugs,
  AboutPage,
  type AboutSlug,
} from '../../../components/about/about-page';

export function generateStaticParams() {
  return aboutSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = aboutContent[slug as AboutSlug];
  return content
    ? { title: `${content.title} | Dr. Anuj Arora`, description: content.description }
    : { title: 'About page not found | Dr. Anuj Arora' };
}

export default async function AboutRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!aboutSlugs.includes(slug as AboutSlug)) notFound();
  return <AboutPage slug={slug as AboutSlug} />;
}
