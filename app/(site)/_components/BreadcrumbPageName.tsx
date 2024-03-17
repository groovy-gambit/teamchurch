import { BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { client } from '@/sanity/lib/client';
import { slugQuery } from '@/sanity/lib/queries';

async function getPageData(slug: string) {
  const pageData = await client.fetch(slugQuery, { slug: slug });
  return pageData;
}

export default async function BreadcrumbPageName({ slug, parent }: { slug: string; parent?: string }) {
  const data = await getPageData(slug);

  if (parent) {
    return <BreadcrumbLink href={`/${parent}/${slug}`}>{data?.title ?? slug}</BreadcrumbLink>;
  }
  return <BreadcrumbPage>{data?.title ?? slug}</BreadcrumbPage>;
}
