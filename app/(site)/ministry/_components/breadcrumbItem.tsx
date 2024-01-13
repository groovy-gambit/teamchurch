import { client } from '@/sanity/lib/client';
import { staffQuery } from '@/sanity/lib/queries';

async function getPageData(slug: string) {
  const pageData = await client.fetch(staffQuery, { slug: slug });
  return pageData;
}

export default async function BreadcrumbItem({ slug }: { slug: string }) {
  const data = await getPageData(slug);

  return <span className="mr-2 font-bold">{data.name}</span>;
}
