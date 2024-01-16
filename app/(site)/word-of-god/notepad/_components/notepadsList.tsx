'use client';
import { Notepad } from '@/sanity/types/types';
import { Pagination } from '@/app/(site)/_components/Pagination';
import { MAX_PAGE_SIZE } from '@/sanity/lib/pagination';
import NoteCards from './noteCards';

export default function NotepadsList({ posts, from, to }: { posts: Notepad[]; from: string; to: string }) {
  return (
    <div className="flex flex-col gap-3">
      <NoteCards posts={posts} />
      <Pagination from={from} to={to} itemsLessThanMaxPageSize={posts.length < MAX_PAGE_SIZE} />
    </div>
  );
}
