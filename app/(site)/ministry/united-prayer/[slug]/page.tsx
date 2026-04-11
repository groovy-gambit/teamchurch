import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { unitedPrayerQuery } from '@/sanity/lib/queries';
import { UnitedPrayer } from '@/sanity/types/types';

async function getPageData(slug: string) {
  const pageData = await sanityFetch<UnitedPrayer>({
    query: unitedPrayerQuery,
    params: { slug },
    tags: ['unitedPrayer'],
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
