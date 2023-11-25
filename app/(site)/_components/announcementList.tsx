import { client } from '@/sanity/lib/client';
import { announcementsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { Announcement } from '@/sanity/types/types';

async function getAllAnnouncements() {
  const dataList = await client.fetch(announcementsQuery);
  return dataList;
}

export default async function AnnouncementList() {
  const posts = await getAllAnnouncements();

  return (
    <div className="w-full flex-1 space-y-4">
      {posts.slice(0, 3).map((post: Announcement) => {
        return (
          <Link
            href={`/announcement/${post.slug.current}`}
            key={post.slug.current}
            className="not-prose group flex gap-4"
          >
            {post.eventAt ? (
              <span className="inline-flex w-14 flex-col items-center justify-center rounded-md py-1 shadow-lg">
                <>
                  <span className="text-xs">
                    {new Date(post.eventAt).toLocaleString('default', { month: 'short' })}
                  </span>
                  <span className="text-xl font-semibold">{new Date(post.eventAt).getDate()}</span>
                </>
              </span>
            ) : null}
            <div className="group-hover:underline">
              <h3 className="text-xl">{post.title}</h3>
              <span className="text-base text-slate-500">{post.subtitle}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
