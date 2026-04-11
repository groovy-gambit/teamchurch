import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { motherwiseFatherwiseQuery } from '@/sanity/lib/queries';
import { MotherwiseFatherwise } from '@/sanity/types/types';

async function getPageData(slug: string) {
  const pageData = await sanityFetch<MotherwiseFatherwise>({
    query: motherwiseFatherwiseQuery,
    params: { slug },
    tags: ['motherwiseFatherwise'],
  });
  return pageData;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPageData(params.slug);

  return (
    <>
      <h1>{data.title}</h1>
      {data.body ? <BodyContent value={data.body} /> : null}
    </>
  );
}
