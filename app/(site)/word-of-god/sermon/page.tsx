import SermonList from './_components/sermonsList';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { getPaginatedContent } from '@/sanity/lib/pagination';
import { pageQuery, sermonListPageQuery, sermonListQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import { Sermon } from '@/sanity/types/types';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import ContentWithPagination from '../../_components/ContentWithPagination';

const builder = imageUrlBuilder(client);

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'sermon' },
    tags: ['page'],
  });

  return pageData;
}

const tags = ['sermon'];

async function getAllSermon() {
  const pageData = await sanityFetch<Sermon[]>({
    query: sermonListQuery,
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

  const { posts, from, to } = await getPaginatedContent<Sermon>(
    searchParams,
    { query: sermonListPageQuery, tags },
    getAllSermon,
  );

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
            sizes="100vw"
          />
        </div>
      ) : null}
      {data.body ? <BodyContent value={data.body} /> : null}
      <ContentWithPagination posts={posts} from={from} to={to}>
        <SermonList posts={posts} />
      </ContentWithPagination>
    </>
  );
}
