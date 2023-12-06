import { client } from '@/sanity/lib/client';
import { announcementQuery } from '@/sanity/lib/queries';
import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import Link from 'next/link';
import { BodyContent } from '@/components/ui/BodyContent';

async function getPageData(slug: string) {
  const pageData = await client.fetch(announcementQuery, { slug: slug });
  return pageData;
}
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getPageData(slug);

  return (
    <>
      <section className="flex flex-row py-2">
        <Link href="/announcement">
          <span className="mr-2">공지 및 광고</span>
        </Link>
        <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
        <span className="mr-2 font-bold">{data.title}</span>
      </section>
      <h1>{data.title}</h1>
      {data.body ? <BodyContent value={data.body} /> : null}
    </>
  );
}
