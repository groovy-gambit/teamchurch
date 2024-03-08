import MeditationsList from './_components/meditationsList';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { meditationsQuery, pageQuery, paginatedContentQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import { Meditation } from '@/sanity/types/types';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import ContentPagination from '../../_components/ContentPagination';

const builder = imageUrlBuilder(client);
const tags = ['meditation'];

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'meditation' },
    tags: ['page'],
  });
  return pageData;
}
async function getAllMeditations() {
  const pageData = await sanityFetch<Meditation[]>({
    query: meditationsQuery,
    tags,
  });
  return pageData;
}

async function getPaginatedContent({ from, to }: { from: number; to: number }) {
  const pageData = await sanityFetch<Meditation[]>({
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
  const length = (await getAllMeditations()).length;
  const perPage = 5;
  const from = searchParams && searchParams.from ? +searchParams.from : 0;
  const to = searchParams && searchParams.to ? +searchParams.to : perPage;
  const posts = await getPaginatedContent({
    from,
    to,
  });

  return (
    <>
      <h1>묵상</h1>
      {data.mainImage ? (
        <div className="relative overflow-hidden rounded-md">
          <Image
            alt={data?.mainImage?.alt ?? ''}
            src={builder.image(data.mainImage).url()}
            className="m-0 object-cover"
            fill
            sizes="100vw"
          />
        </div>
      ) : null}
      <h2>주간 묵상 가이드</h2>
      {data.body ? <BodyContent value={data.body} /> : null}
      <MeditationsList posts={posts} />
      <ContentPagination searchParams={searchParams} length={length} per={perPage} />
    </>
  );
}
