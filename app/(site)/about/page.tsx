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
        <div className="flex flex-row">
          {/* Two Column Layout */}
          <div className="hidden bg-red-300 lg:flex lg:w-56 lg:flex-col">
            <section className="border-b border-gray-300 pb-2">
              {/* Current Section Title */}
              <h2 className="py-2">소개</h2>
            </section>
            <section className="border-b border-gray-300 pb-2">
              {/* Subsection menu */}
              <div className="flex flex-col">
                <Link href="/about" className="py-2 font-bold">
                  교회 안내
                </Link>

                <Link href="/hours" className="py-2">
                  예배 시간
                </Link>

                <Link href="/staff" className="py-2">
                  섬기는 사람들
                </Link>

                <Link href="/contact" className="py-2">
                  위치 및 연락 방법
                </Link>
              </div>
            </section>
          </div>
          <div className="flex- flex flex-auto bg-blue-300">
            <section>I AM FULL?</section>
          </div>
        </div>
      </div>
    </main>
  );
}
