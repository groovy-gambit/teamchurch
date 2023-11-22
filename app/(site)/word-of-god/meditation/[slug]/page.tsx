import { BodyContent } from '@/components/ui/BodyContent';
import { client } from '@/sanity/lib/client';
import { meditationQuery } from '@/sanity/lib/queries';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

async function getPageData(slug: string) {
  const pageData = await client.fetch(meditationQuery, { slug: slug });
  return pageData;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getPageData(slug);
  console.log({ slug });

  return (
    <>
      <h1>{data.title}</h1>
      {data.mainImage ? (
        <div className="relative h-72 overflow-hidden rounded-md">
          <Image alt={data.mainImage.alt} src={builder.image(data.mainImage).url()} fill className="m-0" />
        </div>
      ) : null}
      {data.body ? <BodyContent value={data.body} /> : null}
    </>
  );
}
