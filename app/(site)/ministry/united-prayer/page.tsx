import UnitedPrayerList from './_components/unitedPrayerList';
import { sanityFetch } from '@/lib/sanityClient';
import { paginatedContentQuery } from '@/sanity/lib/queries';
import { UnitedPrayers } from '@/sanity/types/types';
import ContentPagination from '../../_components/ContentPagination';

async function getPaginatedContent({ from, to }: { from: number; to: number }) {
  const pageData = await sanityFetch<UnitedPrayers>({
    query: paginatedContentQuery,
    params: { type: 'unitedPrayer', from, to },
    tags: ['unitedPrayer'],
  });
  return pageData;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const perPage = 5;
  const from = searchParams && searchParams.from ? +searchParams.from : 0;
  const to = searchParams && searchParams.to ? +searchParams.to : perPage;
  const postData = await getPaginatedContent({ from, to });
  const length = postData.total;

  return (
    <>
      <h1>연합기도</h1>
      <UnitedPrayerList posts={postData.posts} />
      <ContentPagination searchParams={searchParams} length={length} per={perPage} />
    </>
  );
}
