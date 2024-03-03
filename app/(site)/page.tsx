import { announcementsQuery, meditationsQuery, pageQuery, bannerQuery, recentSermonQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AnnouncementList from './_components/announcementList';
import { sanityFetch } from '@/lib/sanityClient';
import { TypedObject } from 'sanity';
import { Announcement, Banner, Sermon } from '@/sanity/types/types';
import BannerCarousel from './_components/bannerCarousel';
import RecentSermons from './_components/recentSermons';

type MeditationPageProps = {
  body?: TypedObject;
};

type LastMeditationProps = {
  slug: { current: string };
};

async function getMeditationPageData() {
  const pageData = await sanityFetch<MeditationPageProps>({
    query: pageQuery,
    params: { slug: 'meditation' },
    tags: ['page'],
  });
  return pageData;
}

async function getlastedMeditation() {
  const dataList = await sanityFetch<LastMeditationProps[]>({
    query: meditationsQuery,
    tags: ['meditation'],
  });
  return dataList[0];
}

async function getAnnouncementsFirstPage() {
  const dataList = await sanityFetch<Announcement[]>({
    query: announcementsQuery,
    tags: ['announcement'],
  });
  return dataList;
}

async function getAllBanners() {
  const dataList = await sanityFetch<Banner[]>({
    query: bannerQuery,
    tags: ['banner'],
  });
  return dataList;
}

async function getRecentSermons() {
  const pageData = await sanityFetch<Sermon[]>({
    query: recentSermonQuery,
    tags: ['sermon'],
  });
  return pageData;
}

export default async function Home() {
  const meditation = await getMeditationPageData();
  const latestMeditation = await getlastedMeditation();
  const announcements = await getAnnouncementsFirstPage();
  const banners = await getAllBanners();
  const sermons = await getRecentSermons();

  return (
    <>
      {/* Start block */}
      <section className="relative mx-auto flex max-w-5xl items-center justify-center outline-none">
        <BannerCarousel images={banners} />
      </section>

      <section className="container relative mx-auto mt-12 flex flex-col items-center justify-center gap-4 px-4 outline-none md:px-10 lg:max-w-screen-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold">설교 말씀</h2>
        <RecentSermons sermons={sermons} />
        <Link
          href="/word-of-god/sermon"
          className={cn(buttonVariants({ variant: 'secondary' }), 'w-full max-w-none md:max-w-xs')}
        >
          설교 말씀 전체보기
        </Link>
      </section>
      {/* End block */}
      {/* Two column content layout */}
      <div className="container mx-auto mt-12 grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-10 lg:max-w-screen-lg">
        {/* Start block */}
        <section className="flex flex-col items-center gap-4">
          <h2 className="mb-4 text-center text-2xl font-semibold">교회소식</h2>
          <AnnouncementList posts={announcements} />
          <Link
            href="/announcement"
            className={cn(buttonVariants({ variant: 'secondary' }), 'w-full max-w-none md:max-w-xs')}
          >
            교회소식 전체보기
          </Link>
        </section>
        {/* End block */}
        {/* Start block */}
        <section className="flex flex-col">
          <h2 className="mb-4 text-center text-2xl font-semibold">묵상 & 경건생활</h2>
          <div className="text-ellipse mb-2 flex-grow">
            <PortableText value={meditation?.body!} />
          </div>
          <div className="grid grid-cols-2 justify-between gap-x-1.5">
            <Link
              href={`/word-of-god/meditation/${latestMeditation.slug.current}`}
              className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
            >
              주간 묵상 가이드
            </Link>
            <Link
              href="/word-of-god/lecture?category=learn-meditation"
              className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}
            >
              경건에 이르기
            </Link>
          </div>
        </section>
        {/* End block */}
      </div>
    </>
  );
}
