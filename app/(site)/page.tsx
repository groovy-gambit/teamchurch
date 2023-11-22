import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import heroImage from '@/public/people-hero.png';
import { announcementsQuery, pageQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

async function getAnnouncements() {
  const pageData = await client.fetch(announcementsQuery);
  return pageData;
}
async function getMeditationPageData() {
  const pageData = await client.fetch(pageQuery, { slug: 'meditation' });
  return pageData;
}

export default async function Home() {
  const announcements = await getAnnouncements();
  const meditation = await getMeditationPageData();
  return (
    <>
      {/* Start block */}
      <section rel="hero relative">
        <Image
          alt="hero-banner"
          src={heroImage}
          className="w-full rounded-md"
        />
        <div className="absolute left-48 top-28">
          <h1 className="text-5xl font-semibold">TEAM.</h1>
          <h2 className="text-4xl font-semibold">설립헌신예배.</h2>
          <h3 className="text-4xl font-semibold">2023년 12월 3일.</h3>
        </div>
      </section>

      {/* End block */}
      {/* Two column content layout */}
      <div className="mt-12 grid grid-cols-2 gap-x-6">
        {/* Start block */}
        <section className="bg-white dark:bg-gray-900">
          <div className=" px-4 pb-8 lg:pb-16">
            <div className="grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-6">
              {announcements.map((item: any) => {
                return <div key={item.title}>{item.title}</div>;
              })}
            </div>
          </div>
        </section>
        {/* End block */}
        {/* Start block */}
        <section className="bg-red-300">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            주간 묵상 가이드
          </h2>
          <div className="mb-2 h-52 text-ellipsis">
            <PortableText value={meditation.body} />
          </div>
          <div className="grid grid-cols-2 justify-between gap-x-1.5 pb-6">
            <Link
              href="/word-of-god/meditation"
              className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
            >
              주간 가이드 읽기
            </Link>
            <Link
              href="/word-of-god/meditation"
              className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}
            >
              전체 가이드 읽기
            </Link>
          </div>
        </section>
        {/* End block */}
      </div>
    </>
  );
}
