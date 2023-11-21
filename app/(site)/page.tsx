'use client';

import Image from 'next/image';
import heroImage from '@/public/about-hero.png';

import Header from '@/components/ui/header';

export default function Home() {
  return (
    <main
      className="align-center flex min-h-screen flex-col items-center 
                  justify-between bg-white align-top"
    >
      <div className="mx-auto h-96 px-0 lg:container">
        <Header />
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
        {/* Start block */}
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-16">
            <div className="grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-6"></div>
          </div>
        </section>
        {/* End block */}
        {/* Start block */}
        <section className="bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24"></div>
        </section>
        {/* End block */}
      </div>
    </main>
  );
}
