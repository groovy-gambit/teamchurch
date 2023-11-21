import { client } from '@/sanity/lib/client';
import { pageQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

async function getPageData(slug: string) {
  const pageData = await client.fetch(pageQuery, { slug: slug });
  return pageData;
}
export default async function Page({ params }: Props) {
  const slug = params.slug;
  const data = await getPageData(slug);
  return (
    <>
      <h1>{data.title}</h1>
      {data.mainImage ? (
        <div className="relative h-72 overflow-hidden rounded-md">
          <Image
            alt={data.mainImage.alt}
            src={data.imageUrl}
            fill
            className="m-0"
          />
        </div>
      ) : null}
      {data.body ? <PortableText value={data.body} /> : null}
    </>
  );
}
