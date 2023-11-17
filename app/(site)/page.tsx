'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import navLogo from '@/public/team_church_logo.svg';
import heroImage from '@/public/gradient.png';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export default function Home() {
  return (
    <main
      className="align-center flex min-h-screen flex-col items-center 
                  justify-between bg-white align-top"
    >
      <div className="mx-auto h-96 px-0 lg:container">
        {/* NAV */}
        <header className="mb-6 w-full">
          <nav className="felx-row flex w-full justify-between py-2">
            <Link href="/" legacyBehavior>
              <Image src={navLogo} alt="Team Church logo" />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>소개</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="/about">소개</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>설교</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="/sermon-guide">
                      개요
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>사역</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="/ministries">
                      방향
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {/* <NavigationMenuTrigger>헌금</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent> */}
                  <Link href="/offering" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      헌금
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem asChild>
                  <Link href="/post">Post</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </header>
        {/* NAV DONE */}
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
