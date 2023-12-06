import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { meditationQuery } from '@/sanity/lib/queries';
import { Meditation } from '@/sanity/types/types';

async function getPageData(slug: string) {
  const pageData = await sanityFetch<Meditation>({
    query: meditationQuery,
    params: { slug },
    tags: ['meditation'],
  });
  return pageData;
}

export default async function BreadcrumbItem({ slug }: { slug: string }) {
  const data = await getPageData(slug);

  return <span className="mr-2 font-bold">{data.title}</span>;
}
