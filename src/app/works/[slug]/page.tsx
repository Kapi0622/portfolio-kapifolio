import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import WorkDetail from '../../../components/works/WorkDetail';
import SiteShell from '../../../components/SiteShell';
import { getWorkBySlug, getWorkSlugs } from '../../../lib/works';

export const dynamicParams = false;

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: 'Not Found' };
  return {
    title: `${work.title} - Kapifolio`,
    description: work.summary,
    openGraph: {
      title: work.title,
      description: work.summary,
      images: work.mainImage ? [{ url: work.mainImage }] : undefined,
    },
  };
}

export default async function WorkPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();
  return (
    <SiteShell>
      <WorkDetail work={work} />
    </SiteShell>
  );
}
