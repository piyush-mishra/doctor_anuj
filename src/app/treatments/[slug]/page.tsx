import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  pageContent,
  treatmentSlugs,
  TreatmentPage,
  type PageSlug,
} from '../../../components/treatments/treatment-page';

export function generateStaticParams() {
  return treatmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = pageContent[slug as PageSlug];
  return content
    ? { title: `${content.title} | Dr. Anuj Arora`, description: content.description }
    : { title: 'Treatment not found | Dr. Anuj Arora' };
}

export default async function TreatmentRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!treatmentSlugs.includes(slug as PageSlug)) notFound();
  return <TreatmentPage slug={slug as PageSlug} />;
}
