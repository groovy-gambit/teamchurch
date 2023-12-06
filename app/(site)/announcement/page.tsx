import { client } from '@/sanity/lib/client';
import { announcementsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { BodyToText } from '@/components/ui/BodyToText';

async function getAllAnnouncements() {
  const pageData = await client.fetch(announcementsQuery);
  return pageData;
}

export default async function Page() {
  const data = await getAllAnnouncements();

  return (
    <>
      <h1>{`공지 및 광고`}</h1>
      {data.map((item: any) => {
        const publishedDate = new Date(item.publishedAt);
        const eventDate = item.eventAt ? new Date(item.eventAt) : undefined;
        return (
          <Link href={`/announcement/${item.slug.current}`} key={item.slug.current}>
            <h3>{item.title}</h3>
            {item.body ? (
              <p className="truncate">
                <BodyToText value={item.body} />
              </p>
            ) : null}
            {eventDate ? <p>이벤트 날짜: {eventDate.toDateString()}</p> : null}
            <p>{publishedDate.toDateString()}</p>
          </Link>
        );
      })}
    </>
  );
}
