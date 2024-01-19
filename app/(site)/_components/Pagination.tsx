'use client';
import { MAX_PAGE_SIZE } from '@/sanity/lib/pagination';
import Link from 'next/link';

export function PageLink({
  from: fromStr,
  to: toStr,
  text,
  direction,
  className,
}: {
  from: string;
  to: string;
  text: string;
  direction: 1 | -1;
  className?: string | undefined;
}) {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  const directionValue = direction === 1 ? 'after' : 'before';
  let newFrom = parseInt(fromStr) + MAX_PAGE_SIZE;
  let newTo = parseInt(toStr) + MAX_PAGE_SIZE;
  if (direction === -1) {
    newFrom = Math.max(0, parseInt(fromStr) - MAX_PAGE_SIZE);
    newTo = Math.max(0, parseInt(toStr) - MAX_PAGE_SIZE);
  }

  urlParams.delete(`from`);
  urlParams.delete(`to`);
  urlParams.append(`from`, newFrom.toString());
  urlParams.append(`to`, newTo.toString());

  const relPath = url.toString().substring(url.origin.length);
  return (
    <Link href={`${relPath}`} className={className}>
      {text}
    </Link>
  );
}

export function Pagination({
  from,
  to,
  itemsLessThanMaxPageSize,
}: {
  from: string;
  to: string;
  itemsLessThanMaxPageSize: boolean;
}) {
  const className = 'flex flex-row justify-end';
  if (itemsLessThanMaxPageSize) {
    return (
      <div className={className}>
        <PageLink from={from} to={to} text="이전" direction={-1} />
      </div>
    );
  } else if (from === '0') {
    return (
      <div className={className}>
        <PageLink from={from} to={to} text="다음" direction={1} />
      </div>
    );
  }
  const updatedPointerProps = {
    from,
    to,
  };
  return (
    <div className={className}>
      <PageLink {...updatedPointerProps} text="이전" direction={-1} className="mx-3" />
      <PageLink {...updatedPointerProps} text="다음" direction={1} />
    </div>
  );
}
