'use client';

import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BreadcrumbItem from './breadcrumbItem';

export default function Breadcrumb() {
  const pathName = usePathname();

  const getPageName = () => {
    if (pathName.startsWith('/education/youth')) return 'Youth';
    if (pathName.startsWith('/education/college')) return 'College';
    if (pathName.startsWith('/education/gabe-orda')) return '가베 & 오르다';
    return '주일학교';
  };

  const pathArr = pathName.split('/').filter(Boolean);
  const slug = pathArr[pathArr.length - 1];

  return (
    <section className="flex flex-row py-2 pb-6 lg:hidden">
      <span className="mr-2">교육</span>
      <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
      {pathArr.length > 2 ? (
        <>
          <Link href={`/${pathArr[0]}/${pathArr[1]}`} className="mr-2 underline">
            {getPageName()}
          </Link>
          <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
          <BreadcrumbItem slug={slug} />
        </>
      ) : (
        <span className="mr-2 font-bold">{getPageName()}</span>
      )}
    </section>
  );
}
