import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import heroImage from '@/public/people-hero.png';
import { meditationsQuery, pageQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AnnouncementList from './_components/announcementList';

async function getMeditationPageData() {
  const pageData = await client.fetch(pageQuery, { slug: 'meditation' });
  return pageData;
}

async function getlastedMeditation() {
  const dataList = await client.fetch(meditationsQuery);
  return dataList[0];
}

export default async function Home() {
  const meditation = await getMeditationPageData();
  const latestMeditation = await getlastedMeditation();
  return (
    <>
      {/* Start block */}
      <section rel="hero" className="relative h-72 overflow-hidden rounded-lg">
        <Image
          alt="hero-banner"
          src={heroImage}
          className="object-cover"
          fill
          sizes="100vw"
          style={{ objectPosition: '15%' }}
        />
        <div className="absolute left-6 top-6">
          <h1 className="text-5xl font-semibold">TEAM.</h1>
          <h2 className="text-4xl font-semibold">설립헌신예배.</h2>
          <h3 className="text-4xl font-semibold">2023년 12월 3일.</h3>
        </div>
      </section>

      {/* End block */}
      {/* Two column content layout */}
      <div className="mt-12 grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        {/* Start block */}
        <section className="flex flex-col">
          <h2 className="mb-4 text-center text-2xl font-semibold">공지 및 광고</h2>
          <AnnouncementList />
          <Link href="/announcement" className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}>
            공지 및 광고 전체 보기
          </Link>
        </section>
        {/* End block */}
        {/* Start block */}
        <section>
          <h2 className="mb-4 text-center text-2xl font-semibold">주간 묵상 가이드</h2>
          <div className="text-ellipse mb-2 h-52">
            <PortableText value={meditation.body} />
          </div>
          <div className="grid grid-cols-2 justify-between gap-x-1.5">
            <Link
              href={`/word-of-god/meditation/${latestMeditation.slug.current}`}
              className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
            >
              주간 가이드 읽기
            </Link>
            <Link href="/word-of-god/meditation" className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}>
              전체 가이드 읽기
            </Link>
          </div>
        </section>
        {/* End block */}
      </div>
    </>
  );
}
