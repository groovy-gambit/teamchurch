import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { meditationQuery } from '@/sanity/lib/queries';
import { Meditation } from '@/sanity/types/types';

async function getPageData(slug: string) {
  const pageData = await sanityFetch<Meditation>({
    query: meditationQuery,
    params: { slug },
    tags: ['meditation'],
  });
  return pageData;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getPageData(slug);

  return (
    <>
      <h1>{data.title}</h1>
      <div className="rounded-lg bg-slate-50 p-4">{data.body ? <BodyContent value={data.body} /> : null}</div>
    </>
  );
}
