import YoutubePlayer from '@/app/(site)/_components/YoutubePlayer';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { sermonQuery } from '@/sanity/lib/queries';
import { Sermon } from '@/sanity/types/types';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

async function getPageData(slug: string) {
  const pageData = await sanityFetch<Sermon>({
    query: sermonQuery,
    params: { slug },
    tags: ['sermon'],
  });
  return pageData;
}

const serializers = {
  types: {
    youtube: ({ value }: { value: { url: string } }) => {
      const { url } = value;
      return (
        <div className="justify-center p-4">
          <YoutubePlayer url={url} />;
        </div>
      );
    },
  },
};

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getPageData(slug);
  return (
    <>
      <h1>{data.title}</h1>
      <div className="rounded-lg bg-slate-50 p-4">
        {data.body ? <PortableText value={data.body} components={serializers} /> : null}
      </div>
    </>
  );
}
