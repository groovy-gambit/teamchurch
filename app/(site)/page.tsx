import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import heroImage from '@/public/people-hero.png';
import { announcementsQuery, pageQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';

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
        <Image alt="hero-banner" src={heroImage} className="w-full rounded-md" />
        <div className="absolute left-48 top-28">
          <h1 className="text-5xl font-semibold">TEAM.</h1>
          <h2 className="text-4xl font-semibold">설립헌신예배.</h2>
          <h3 className="text-4xl font-semibold">2023년 12월 3일.</h3>
        </div>
      </section>

      {/* End block */}
      {/* Start block */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-16">
          <div className="grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-6">
            {announcements.map((item: any) => {
              return <div key={item.title}>{item.title}</div>;
            })}
          </div>
        </div>
      </section>
      {/* End block */}
      {/* Start block */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
          <PortableText value={meditation.body} />
        </div>
      </section>
      {/* End block */}
    </>
  );
}
