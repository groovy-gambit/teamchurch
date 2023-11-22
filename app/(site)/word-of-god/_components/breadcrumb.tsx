'use client';

import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathName = usePathname();

  const getPageName = () => {
    if (pathName === '/word-of-god/meditation') return '묵상';
    if (pathName === '/word-of-god/membership-training') return '멤버쉽반';
    if (pathName === '/word-of-god/lecture') return '특강';
    return '예배';
  };

  return (
    <section className="flex flex-row py-2">
      <span className="mr-2">말씀</span>
      <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
      <span className="mr-2 font-bold">{getPageName()}</span>
    </section>
  );
}
