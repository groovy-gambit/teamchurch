'use client';

import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import { usePathname } from 'next/navigation';
import BreadcrumbItem from './breadcrumbItem';
import Link from 'next/link';

export default function Breadcrumb() {
  const pathName = usePathname();
  const pathArr = pathName.split('/');
  const slug = pathArr[pathArr.length - 1];

  return (
    <section className="flex flex-row py-2 lg:hidden">
      <span className="mr-2">말씀</span>
      <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
      <Link href={'/word-of-god/meditation'} className="mr-2 hover:underline">
        묵상
      </Link>
      <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
      <span className="mr-2 font-bold">
        <BreadcrumbItem slug={slug} />
      </span>
    </section>
  );
}
