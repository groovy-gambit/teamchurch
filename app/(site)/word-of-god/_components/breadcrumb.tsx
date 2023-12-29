'use client';

import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathName = usePathname();

  const getPageName = () => {
    if (pathName.startsWith('/word-of-god/meditation')) return '묵상';
    if (pathName === '/word-of-god/membership-training') return '멤버쉽반';
    if (pathName === '/word-of-god/lecture') return '특강';
    if (pathName === '/word-of-god/sermon') return '설교';
    return '설교';
  };

  const pathArr = pathName.split('/').filter(Boolean);

  return (
    <section className="flex flex-row py-2 pb-6 lg:hidden">
      <span className="mr-2">홈</span>
      <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
      <span className="mr-2">말씀</span>

      {pathArr.length > 2 ? (
        <>
          <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
          <Link href={`/${pathArr[0]}/${pathArr[1]}`} className="mr-2 underline">
            {getPageName()}
          </Link>
        </>
      ) : null}
    </section>
  );
}
