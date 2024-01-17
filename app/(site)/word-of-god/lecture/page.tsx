import { BodyContent } from '@/components/ui/BodyContent';
import LectureList from './_components/lecturesList';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import {
  lectureListPageQuery,
  lectureListQuery,
  lecturesByCat,
  lecturesByCatPageQuery,
  pageQuery,
} from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { Lecture } from '@/sanity/types/types';
import { getPaginatedContent } from '@/sanity/lib/pagination';
import ContentWithPagination from '../../_components/ContentWithPagination';

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
async function getAllLecture() {
  const pageData = await sanityFetch<Lecture[]>({
    query: lectureListQuery,
    tags,
  });
  return pageData;
}

async function getLectureByCat({ category }: { category: string | string[] | undefined }) {
  const pageData = await sanityFetch<Lecture[]>({
    query: lecturesByCat,
    params: { category },
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

  const { posts, from, to } = searchParams.category
    ? await getPaginatedContent<Lecture>(
        searchParams,
        { query: lecturesByCatPageQuery, params: { category: searchParams.category ?? undefined }, tags },
        () => getLectureByCat({ category: searchParams.category ?? undefined }),
      )
    : await getPaginatedContent<Lecture>(searchParams, { query: lectureListPageQuery, tags }, getAllLecture);

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
      <ContentWithPagination posts={posts} from={from} to={to}>
        <LectureList posts={posts} />
      </ContentWithPagination>
    </>
  );
}
