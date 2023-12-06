import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { pageQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'about' },
    tags: ['page'],
  });

  return pageData;
}
export default async function Page() {
  const data = await getPageData();
  return (
    <>
      <h1>{data.title}</h1>
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
    </>
  );
}
