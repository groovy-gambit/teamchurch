import { BodyContent } from '@/components/ui/BodyContent';
import YoutubePlayer from '@/components/ui/YoutubePlayer';
import { sanityFetch } from '@/lib/sanityClient';
import { sermonQuery } from '@/sanity/lib/queries';
import { Sermon } from '@/sanity/types/types';

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
    <div className="flex-col gap-4">
      <h1>{data.title}</h1>
      {data.sermonURL ? <YoutubePlayer url={data.sermonURL} /> : null}
      {data.body ? <BodyContent value={data.body} /> : null}
    </div>
  );
}
