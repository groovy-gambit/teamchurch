import { paginatedContentQuery, pageQuery, bannerQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AnnouncementList from './_components/announcementList';
import { sanityFetch } from '@/lib/sanityClient';
import { TypedObject } from 'sanity';
import { Announcements, Banner, Galleries, Meditations, Sermons } from '@/sanity/types/types';
import BannerCarousel from './_components/bannerCarousel';
import RecentSermons from './_components/recentSermons';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

type MeditationPageProps = {
  body?: TypedObject;
};

async function getMeditationPageData() {
  const pageData = await sanityFetch<MeditationPageProps>({
    query: pageQuery,
    params: { slug: 'meditation' },
    tags: ['page'],
  });
  return pageData;
}

async function getAllBanners() {
  const dataList = await sanityFetch<Banner[]>({
    query: bannerQuery,
    tags: ['banner'],
  });
  return dataList;
}

async function getData<T>(type: string, from: number, to: number) {
  const dataList = await sanityFetch<T>({
    query: paginatedContentQuery,
    params: { type, from, to },
    tags: [type],
  });
  return dataList;
}

export default async function Home() {
  const meditation = await getMeditationPageData();
  const meditations = await getData<Meditations>('meditation', 0, 2);
  const banners = await getAllBanners();
  const announcements = await getData<Announcements>('announcement', 0, 5);
  const sermons = await getData<Sermons>('sermon', 0, 3);
  const galleries = await getData<Galleries>('gallery', 0, 3);

  return (
    <>
      {/* Start block */}
      <section className="relative mx-auto flex max-w-5xl items-center justify-center outline-none">
        <BannerCarousel images={banners} />
      </section>

      <section className="container relative mx-auto mt-12 flex flex-col items-center justify-center gap-4 px-4 outline-none md:px-10 lg:max-w-screen-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold">설교 말씀</h2>
        <RecentSermons sermons={sermons.posts} />
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
          <AnnouncementList posts={announcements.posts} />
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
              href={`/word-of-god/meditation/${meditations.posts[0].slug.current}`}
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
      </div>
      {/* Start block */}
      <div className="container mx-auto mt-12 grid grid-cols-1 gap-12 px-4 md:px-10 lg:max-w-screen-lg">
        <section className="relative mx-auto flex w-full flex-col items-center justify-center outline-none">
          <h2 className="mb-4 text-center text-2xl font-semibold">갤러리</h2>
          <div className="grid w-full grid-cols-1 grid-rows-1 gap-3 md:grid-cols-3">
            {galleries.posts.map((item, i) => {
              return (
                <Link href={`/gallery/${item.slug.current}`} key={i} className="not-prose">
                  <Card className="flex flex-col gap-2 overflow-hidden hover:drop-shadow">
                    <div className="relative aspect-video w-full shrink-0">
                      <Image
                        alt={item.images.images[0].alt ?? ''}
                        src={builder.image(item.images.images[0]).width(500).url()}
                        fill
                        className="m-0 object-cover"
                        sizes="auto, 160px"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <div className="flex flex-col">
                        <span className="text-xl">{item.title}</span>
                      </div>
                      <span className="line-clamp-2 flex-grow text-base text-slate-500">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
      {/* End block */}
    </>
  );
}
