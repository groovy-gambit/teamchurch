import { Notepad } from '@/sanity/types/types';
import { Pagination } from '@/app/(site)/_components/Pagination';
import { MAX_PAGE_SIZE } from '@/sanity/lib/pagination';
import NoteCards from './noteCards';

export default function NotepadsList({ posts, from, to }: { posts: Notepad[]; from: string; to: string }) {
  const showPaging = from === '0' ? posts.length >= MAX_PAGE_SIZE : true;
  return (
    <div className="flex flex-col gap-3">
      {posts.length === 0 ? (
        <span>페이지의 끝에 도달했습니다. '이전'을 눌러서 전 페이지로 돌아가세요.</span>
      ) : (
        <NoteCards posts={posts} />
      )}
      {showPaging && <Pagination from={from} to={to} itemsLessThanMaxPageSize={posts.length < MAX_PAGE_SIZE} />}
    </div>
  );
}
