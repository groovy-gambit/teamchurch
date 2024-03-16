import { BodyContent } from '@/components/ui/BodyContent';
import LectureList from './_components/lecturesList';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { lecturesByCatPageQuery, pageQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { Lectures } from '@/sanity/types/types';
import ContentPagination from '../../_components/ContentPagination';

const builder = imageUrlBuilder(client);

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'lecture' },
    tags: ['page'],
  });

  return pageData;
}
const tags = ['lecture'];

async function getPaginatedContent({ from, to, category }: { from: number; to: number; category: string[] }) {
  const pageData = await sanityFetch<Lectures>({
    query: lecturesByCatPageQuery,
    params: { from, to, category },
    tags,
  });

  return pageData;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getPageData();
  const cat =
    searchParams && searchParams.category
      ? [`${searchParams.category}`]
      : ['learn-bible', 'learn-doctrine', 'learn-meditation', 'other'];

  const perPage = 5;
  const from = searchParams && searchParams.from ? +searchParams.from : 0;
  const to = searchParams && searchParams.to ? +searchParams.to : perPage;
  const postData = await getPaginatedContent({
    from,
    to,
    category: cat,
  });
  const length = postData.total;
  return (
    <>
      <h1>특강</h1>

      {data.mainImage ? (
        <div className="relative h-72 overflow-hidden rounded-md">
          <Image
            alt={data?.mainImage?.alt ?? ''}
            src={builder.image(data.mainImage).url()}
            className="m-0 object-cover"
            fill
            sizes="100vw"
          />
        </div>
      ) : null}
      {data.body ? <BodyContent value={data.body} /> : null}
      <LectureList posts={postData.posts} />
      <ContentPagination searchParams={searchParams} length={length} per={perPage} />
    </>
  );
}
