import { client } from '@/sanity/lib/client';
import { pageQuery } from '@/sanity/lib/queries';

async function getPageData(slug: string) {
  const pageData = await client.fetch(pageQuery, { slug: slug });
  return pageData;
}

export default async function BreadcrumbPageName({ slug }: { slug: string }) {
  const data = await getPageData(slug);

  if (slug === 'about') return '소개';
  if (slug === 'word-of-god') return '말씀';
  if (slug === 'ministry') return '사역';
  if (slug === 'education') return '교육';

  return <>{data?.title ?? slug} </>;
}
