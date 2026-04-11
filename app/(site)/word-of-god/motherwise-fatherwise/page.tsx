import MotherwiseFatherwiseList from './_components/motherwiseFatherwiseList';
import { sanityFetch } from '@/lib/sanityClient';
import { paginatedContentQuery } from '@/sanity/lib/queries';
import { MotherwiseFatherwises } from '@/sanity/types/types';
import ContentPagination from '../../_components/ContentPagination';

async function getPaginatedContent({ from, to }: { from: number; to: number }) {
  const pageData = await sanityFetch<MotherwiseFatherwises>({
    query: paginatedContentQuery,
    params: { type: 'motherwiseFatherwise', from, to },
    tags: ['motherwiseFatherwise'],
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
      <h1>마더와이즈 &amp; 파더와이즈</h1>
      <MotherwiseFatherwiseList posts={postData.posts} />
      <ContentPagination searchParams={searchParams} length={length} per={perPage} />
    </>
  );
}
