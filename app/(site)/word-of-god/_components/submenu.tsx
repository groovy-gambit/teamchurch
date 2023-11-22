'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubMenu() {
  const pathName = usePathname();

  return (
    <section>
      <div className="flex flex-col">
        <Link
          href="/word-of-god"
          className={`py-2 ${pathName === '/word-of-god' && 'font-bold'}`}
        >
          예배
        </Link>

        <Link
          href="/word-of-god/meditation"
          className={`py-2 ${
            pathName === '/word-of-god/meditation' && 'font-bold'
          }`}
        >
          묵상
        </Link>

        <Link
          href="/word-of-god/membership-training"
          className={`py-2 ${
            pathName === '/word-of-god/membership-training' && 'font-bold'
          }`}
        >
          멤버쉽반
        </Link>

        <Link
          href="/word-of-god/lecture"
          className={`py-2 ${
            pathName === '/word-of-god/lecture' && 'font-bold'
          }`}
        >
          특강
        </Link>
      </div>
    </section>
  );
}
