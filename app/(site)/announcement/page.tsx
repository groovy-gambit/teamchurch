import { announcementsQuery, paginatedContentQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { BodyToText } from '@/components/ui/BodyToText';
import { Announcement } from '@/sanity/types/types';
import { sanityFetch } from '@/lib/sanityClient';
import { PageSearchParamsProp } from '@/sanity/schemas/page';
import ContentPagination from '../_components/ContentPagination';

const tags = ['announcement'];
async function getAllAnnouncements() {
  const pageData = await sanityFetch<Announcement[]>({
    query: announcementsQuery,
    tags,
  });

  return pageData;
}

async function getPaginatedContent({ from, to }: { from: number; to: number }) {
  const pageData = await sanityFetch<Announcement[]>({
    query: paginatedContentQuery,
    params: { type: 'announcement', from, to },
    tags: ['announcement'],
  });

  return pageData;
}

export default async function Page({ searchParams }: { searchParams: PageSearchParamsProp }) {
  const length = (await getAllAnnouncements()).length;
  const perPage = 5;
  const from = searchParams && searchParams.from ? +searchParams.from : 0;
  const to = searchParams && searchParams.to ? +searchParams.to : perPage;
  const posts = await getPaginatedContent({
    from,
    to,
  });
  return (
    <>
      <h1>{`공지 및 광고`}</h1>
      {posts.map((item: any) => {
        const publishedDate = new Date(item.releasedAt);
        const eventDate = item.eventAt ? new Date(item.eventAt) : undefined;
        return (
          <Link href={`/announcement/${item.slug.current}`} key={item.slug.current}>
            <h3>{item.title}</h3>
            {item.body ? (
              <p className="truncate">
                <BodyToText value={item.body} />
              </p>
            ) : null}
            {eventDate ? <p>이벤트 날짜: {eventDate.toLocaleDateString()}</p> : null}
            <p>{publishedDate.toLocaleDateString()}</p>
          </Link>
        );
      })}
      <ContentPagination searchParams={searchParams} length={length} per={perPage} />
    </>
  );
}
