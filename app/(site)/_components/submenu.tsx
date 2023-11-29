'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubMenu() {
  const pathName = usePathname();

  return (
    <section className="pt-3">
      <div className="flex flex-col">
        <Link href="/about" className={`py-2 ${pathName === '/about' && 'font-bold'}`}>
          교회 안내
        </Link>

        <Link href="/about/hours" className={`py-2 ${pathName.includes('/about/hours') && 'font-bold'}`}>
          예배 시간
        </Link>

        <Link href="/about/staff" className={`py-2 ${pathName.includes('/about/staff') && 'font-bold'}`}>
          섬기는 사람들
        </Link>

        <Link href="/about/contact" className={`py-2 ${pathName.includes('/about/contact') && 'font-bold'}`}>
          위치 및 연락 방법
        </Link>
      </div>
    </section>
  );
}
