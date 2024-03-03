import MeditationsList from './_components/meditationsList';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { getPaginatedContent } from '@/sanity/lib/pagination';
import { meditationsPageQuery, meditationsQuery, pageQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import { Meditation } from '@/sanity/types/types';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import ContentWithPagination from '../../_components/ContentWithPagination';

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

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getPageData();
  const { posts, from, to } = await getPaginatedContent<Meditation>(
    searchParams,
    { query: meditationsPageQuery, tags },
    getAllMeditations,
  );

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
      <ContentWithPagination posts={posts} from={from} to={to}>
        <MeditationsList posts={posts} />
      </ContentWithPagination>
    </>
  );
}
