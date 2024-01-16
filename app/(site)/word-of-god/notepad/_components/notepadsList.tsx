import { Notepad } from '@/sanity/types/types';
import { MAX_PAGE_SIZE } from '@/sanity/lib/pagination';
import NoteCards from './noteCards';
import ContentWithPagination from '@/app/(site)/_components/Pagination copy';

export default function NotepadsList({ posts, from, to }: { posts: Notepad[]; from: string; to: string }) {
  const showPaging = from === '0' ? posts.length >= MAX_PAGE_SIZE : true;
  return (
    <ContentWithPagination posts={posts} from={from} to={to}>
      <NoteCards posts={posts} />
    </ContentWithPagination>
  );
}
