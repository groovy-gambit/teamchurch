import { announcementsPageQuery, announcementsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { BodyToText } from '@/components/ui/BodyToText';
import { Announcement } from '@/sanity/types/types';
import { sanityFetch } from '@/lib/sanityClient';
import { PageSearchParamsProp } from '@/sanity/schemas/page';
import { getPaginatedContent } from '@/sanity/lib/pagination';
import ContentWithPagination from '../_components/Pagination copy';

const tags = ['announcement'];
async function getAllAnnouncements() {
  const pageData = await sanityFetch<Announcement[]>({
    query: announcementsQuery,
    tags,
  });

  return pageData;
}

export default async function Page({ searchParams }: { searchParams: PageSearchParamsProp }) {
  const { posts, from, to } = await getPaginatedContent<Announcement>(
    searchParams,
    { query: announcementsPageQuery, tags },
    getAllAnnouncements,
  );
  return (
    <>
      <h1>{`공지 및 광고`}</h1>
      <ContentWithPagination posts={posts} from={from} to={to}>
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
      </ContentWithPagination>
    </>
  );
}
