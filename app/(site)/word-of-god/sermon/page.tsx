import SermonList from './_components/sermonsList';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { pageQuery, paginatedContentQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import { Sermons } from '@/sanity/types/types';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import ContentPagination from '../../_components/ContentPagination';

const builder = imageUrlBuilder(client);

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'sermon' },
    tags: ['page'],
  });

  return pageData;
}

async function getPaginatedContent({ from, to }: { from: number; to: number }) {
  const pageData = await sanityFetch<Sermons>({
    query: paginatedContentQuery,
    params: { type: 'sermon', from, to },
    tags: ['sermon'],
  });

  return pageData;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getPageData();
  const perPage = 5;
  const from = searchParams && searchParams.from ? +searchParams.from : 0;
  const to = searchParams && searchParams.to ? +searchParams.to : perPage;
  const postData = await getPaginatedContent({
    from,
    to,
  });
  const length = postData.total;

  return (
    <>
      <h1>설교</h1>
      {data.mainImage ? (
        <div className="relative h-72 overflow-hidden rounded-md">
          <Image
            alt={data?.mainImage?.alt ?? ''}
            src={builder.image(data.mainImage).url()}
            className="m-0 object-cover"
            fill
            sizes="100vw, auto"
          />
        </div>
      ) : null}
      {data.body ? <BodyContent value={data.body} /> : null}
      <SermonList posts={postData.posts} />
      <ContentPagination searchParams={searchParams} length={length} per={perPage} />
    </>
  );
}
