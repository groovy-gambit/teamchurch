'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from '@/components/ui/pagination';
import { usePathname } from 'next/navigation';

export default function ContentPagination({
  searchParams,
  length,
  per,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  length: number;
  per: number;
}) {
  const from = searchParams && searchParams.from ? +searchParams.from : 0;
  const to = searchParams && searchParams.to ? +searchParams.to : per;
  const pathname = usePathname();

  const remainder = length % per;
  const pageCount = Math.floor(length / per) + (remainder === 0 ? 0 : 1);
  const fromMinMax = (target: number) => Math.min(Math.max(target, 0), pageCount * per - per);
  const toMinMax = (target: number) => Math.min(Math.max(target, per), pageCount * per);

  const itemArr = Array.from({ length: pageCount }, (x, i) => i + 1);

  const category = () => {
    if (searchParams.category) return `category=${searchParams.category}&`;
    return '';
  };

  return (
    <Pagination className="not-prose mt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={from === 0 || pageCount === 0}
            className="aria-disabled:invisible"
            href={`${pathname}?from=${fromMinMax(from - per)}&to=${toMinMax(to - per)}`}
          />
        </PaginationItem>
        {itemArr.map((index) => {
          const targetFrom = fromMinMax(index * per - per);
          const targetTo = toMinMax(index * per);
          const isActive = () => {
            if (
              searchParams.from &&
              searchParams.to &&
              targetFrom === +searchParams.from &&
              targetTo === +searchParams.to
            ) {
              return true;
            }
            if (!searchParams.from && !searchParams.to && index === 1) {
              return true;
            }
            return false;
          };
          return (
            <PaginationItem key={index}>
              <PaginationLink isActive={isActive()} href={`${pathname}?${category()}from=${targetFrom}&to=${targetTo}`}>
                {index}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            aria-disabled={to === pageCount * per || pageCount === 0}
            className="aria-disabled:invisible"
            href={`${pathname}?${category()}from=${fromMinMax(from + per)}&to=${toMinMax(to + per)}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
