import { client } from '@/sanity/lib/client';
import { meditationQuery, sermonQuery } from '@/sanity/lib/queries';

const getQuery = (parentSlug: string) => {
  switch (parentSlug) {
    case 'meditation':
      return meditationQuery;
    case 'sermon':
      return sermonQuery;
    default:
      return null;
  }
};

async function getPageData(parentSlug: string, slug: string) {
  const query = getQuery(parentSlug);
  if (query) {
    const pageData = await client.fetch(meditationQuery, { slug: slug });
    return pageData;
  }
  return null;
}

export default async function BreadcrumbItem({ slug, parentSlug }: { slug: string; parentSlug: string }) {
  const data = await getPageData(parentSlug, slug);
  if (data) {
    return <span className="mr-2 font-bold">{data.title}</span>;
  }
  return null;
}
