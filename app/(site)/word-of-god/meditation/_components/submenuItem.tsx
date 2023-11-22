'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Meditation } from '@/sanity/types/types';

export default function SubMenuItem({ post }: { post: Meditation }) {
  const pathName = usePathname();
  return (
    <Link
      href={`/word-of-god/meditation/${post.slug.current}`}
      className={`py-2 ${pathName.includes(post.slug.current) && 'font-bold'}`}
    >
      {post.title}
    </Link>
  );
}
