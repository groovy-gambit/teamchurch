'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubMenu() {
  const pathName = usePathname();

  return (
    <section className="pt-3">
      <div className="flex flex-col">
        <Link
          href="/education/sunday-school"
          className={`py-2 ${pathName === '/education/sunday-school' && 'font-bold'}`}
        >
          주일학교
        </Link>

        <Link href="/education/youth" className={`py-2 ${pathName.includes('/education/youth') && 'font-bold'}`}>
          Youth
        </Link>

        <Link href="/education/college" className={`py-2 ${pathName.includes('/education/college') && 'font-bold'}`}>
          College
        </Link>

        <Link
          href="/education/gabe-orda"
          className={`py-2 ${pathName.includes('/education/gabe-orda') && 'font-bold'}`}
        >
          가베 & 오르다
        </Link>
      </div>
    </section>
  );
}
