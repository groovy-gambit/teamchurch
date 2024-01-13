import SermonList from './_components/sermonsList';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { pageQuery, sermonListQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import { Sermon } from '@/sanity/types/types';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'sermon' },
    tags: ['page'],
  });

  return pageData;
}

async function getAllSermon() {
  const pageData = await sanityFetch<Sermon[]>({
    query: sermonListQuery,
    tags: ['sermon'],
  });
  return pageData;
}

export default async function Page() {
  const data = await getPageData();
  const posts = await getAllSermon();
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
      <SermonList posts={posts} />
    </>
  );
}
