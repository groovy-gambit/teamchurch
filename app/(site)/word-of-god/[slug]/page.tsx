import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { pageQuery } from '@/sanity/lib/queries';
import { PageSchemaProps } from '@/sanity/schemas/page';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

async function getPageData(slug: string) {
  const pageData = await sanityFetch<PageSchemaProps>({ query: pageQuery, params: { slug }, tags: ['page'] });
  return pageData;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getPageData(slug);

  return (
    <div>
      <h1>{data.title}</h1>
      {data.mainImage ? (
        <div className="relative overflow-hidden rounded-md">
          <Image alt={data?.mainImage?.alt ?? ''} src={builder.image(data.mainImage).url()} fill className="m-0" />
        </div>
      ) : null}
      {data.body ? <BodyContent value={data.body} /> : null}
      {slug === 'meditations'}
    </div>
  );
}
