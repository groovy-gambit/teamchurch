'use client';
import { Notepad } from '@/sanity/types/types';
import { Pagination } from '@/app/(site)/_components/Pagination';
import { lastElementMetadata, parseDateToString } from '@/sanity/lib/pagination';
import NoteCards from './noteCards';

export default function NotepadsList({ posts }: { posts: Notepad[] }) {
  const { id: lastId, releasedAt: lastReleasedAt } = lastElementMetadata(posts);
  const { _id: initPrevId, releasedAt: initPrevReleasedAt } = posts[0];

  // const { currId, currReleasedAt } = getPagingMarkersFromUrl(url);

  return (
    <div className="flex flex-col gap-3">
      <NoteCards posts={posts} />
      <Pagination
        prevId={null}
        prevReleasedAt={null}
        nextId={lastId}
        nextReleasedAt={parseDateToString(lastReleasedAt)}
      />
    </div>
  );
}
