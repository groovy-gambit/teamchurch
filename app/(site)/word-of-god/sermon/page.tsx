import SermonList from './_components/sermonsList';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { pageQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'sermon' },
    tags: ['page'],
  });
  return pageData;
}

export default async function Page() {
  const data = await getPageData();
  console.log({ data });
  return (
    <>
      <h1>설교</h1>
      <h2>설교 내용 및 영상</h2>
      {data.body ? <BodyContent value={data.body} /> : null}
      <SermonList />
    </>
  );
}
