'use client';

import Link from 'next/link';
import { Lecture } from '@/sanity/types/types';
import { Card } from '@/components/ui/card';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const builder = imageUrlBuilder(client);
export default function LectureList({ posts }: { posts: Lecture[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const onValueChangeHandler = async (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete('category');
    } else {
      params.set('category', value);
    }

    const queryString = params.toString();

    router.push(pathname + '?' + queryString);
  };

  return (
    <div className="flex flex-col gap-4">
      <Tabs defaultValue="all" className="w-full" onValueChange={onValueChangeHandler}>
        <TabsList className="grid h-20 w-full grid-cols-3 sm:h-10 sm:grid-cols-5">
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="learn-bible">성경 배우기</TabsTrigger>
          <TabsTrigger value="learn-doctrine">교리 배우기</TabsTrigger>
          <TabsTrigger value="learn-meditation">묵상 배우기</TabsTrigger>
          <TabsTrigger value="other">외부특강 및 세미나</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-col gap-3">
        {posts.map((post: Lecture) => {
          return (
            <Link href={`/word-of-god/lecture/${post.slug.current}`} key={post.slug.current} className="not-prose">
              <Card className="flex flex-col gap-2 overflow-hidden hover:drop-shadow sm:flex-row">
                {post.thumbnail ? (
                  <div className="relative h-72 w-full sm:h-40 sm:w-72">
                    <Image
                      src={builder.image(post.thumbnail).url()}
                      alt={post?.thumbnail?.alt ?? ''}
                      fill
                      className="m-0 object-cover"
                      sizes="100vw"
                    />
                  </div>
                ) : null}
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex flex-col">
                    <span className="text-xl">{post.title}</span>
                  </div>
                  {post.intro ? <span className="line-clamp-2 text-base text-slate-500">{post.intro}</span> : null}
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
