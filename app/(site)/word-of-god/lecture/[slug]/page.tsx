import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { lectureQuery } from '@/sanity/lib/queries';
import { Lecture } from '@/sanity/types/types';

async function getPageData(slug: string) {
  const pageData = await sanityFetch<Lecture>({
    query: lectureQuery,
    params: { slug },
    tags: ['lecture'],
  });
  return pageData;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getPageData(slug);

  return (
    <div className="flex-col gap-4">
      <h1>{data.title}</h1>
      {data.body ? <BodyContent value={data.body} /> : null}
    </div>
  );
}
