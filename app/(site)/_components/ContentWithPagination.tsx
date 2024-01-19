import { Pagination } from '@/app/(site)/_components/Pagination';
import { MAX_PAGE_SIZE } from '@/sanity/lib/pagination';

export default function ContentWithPagination<T>({
  children,
  posts,
  from,
  to,
}: {
  posts: T[];
  children: React.ReactNode;
  from: string;
  to: string;
}) {
  const showPaging = from === '0' ? posts.length >= MAX_PAGE_SIZE : true;

  return (
    <div className="flex flex-col gap-3">
      {children}
      {posts.length === 0 && showPaging && (
        <span>페이지의 끝에 도달했습니다. &lsquo;이전&lsquo;을 눌러서 전 페이지로 돌아가세요.</span>
      )}
      {showPaging && <Pagination from={from} to={to} itemsLessThanMaxPageSize={posts.length < MAX_PAGE_SIZE} />}
    </div>
  );
}
