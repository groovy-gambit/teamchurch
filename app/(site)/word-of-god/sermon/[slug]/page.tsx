import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { sermonQuery } from '@/sanity/lib/queries';
import { Sermon } from '@/sanity/types/types';
import imageUrlBuilder from '@sanity/image-url';
import YouTubePlayer from 'react-player/youtube';

const builder = imageUrlBuilder(client);

async function getPageData(slug: string) {
  const pageData = await sanityFetch<Sermon>({
    query: sermonQuery,
    params: { slug },
    tags: ['sermon'],
  });
  return pageData;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getPageData(slug);

  return (
    <>
      <h1>{data.title}</h1>
      <div className="w-full">
        <div className="aspect-w-16 aspect-h-9">
          <YouTubePlayer url={data.youtube.url} />
        </div>
      </div>
      <div className="rounded-lg bg-slate-50 p-4">{data.body ? <BodyContent value={data.body} /> : null}</div>
    </>
  );
}
