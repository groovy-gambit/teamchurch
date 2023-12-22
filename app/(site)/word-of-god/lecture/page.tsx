import { BodyContent } from '@/components/ui/BodyContent';
import LectureList from './_components/lecturesList';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { lectureListQuery, lecturesByCat, pageQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { Lecture } from '@/sanity/types/types';

const builder = imageUrlBuilder(client);

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'lecture' },
    tags: ['page'],
  });

  return pageData;
}

async function getAllLecture() {
  const pageData = await sanityFetch<Lecture[]>({
    query: lectureListQuery,
    tags: ['lecture'],
  });
  return pageData;
}

async function getLectureByCat({ category }: { category: string | string[] | undefined }) {
  const pageData = await sanityFetch<Lecture[]>({
    query: lecturesByCat,
    params: { category },
    tags: ['lecture'],
  });
  return pageData;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getPageData();
  const posts = searchParams.category
    ? await getLectureByCat({ category: searchParams.category ?? undefined })
    : await getAllLecture();

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
      <LectureList posts={posts} />
    </>
  );
}
