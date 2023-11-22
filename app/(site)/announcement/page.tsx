import { client } from '@/sanity/lib/client';
import { announcementsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';

async function getAllAnnouncements() {
  const pageData = await client.fetch(announcementsQuery);
  return pageData;
}
const defaults = { nonTextBehavior: 'remove' };
function BlocksToText({ value }: any) {
  let opts = {};
  const options = Object.assign({}, defaults, opts);
  return value
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`;
      }

      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
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
                <BlocksToText value={item.body} />
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
