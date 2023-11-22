'use client';

import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathName = usePathname();

  const getPageName = () => {
    if (pathName === '/about/hours') return '예배 시간';
    if (pathName === '/about/staff') return '섬기는 사람들';
    if (pathName === '/about/contact') return '위치 및 연락 방법';
    return '교회 안내';
  };

  return (
    <section className="flex flex-row py-2">
      <span className="mr-2">소개</span>
      <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
      <span className="mr-2 font-bold">{getPageName()}</span>
    </section>
  );
}
