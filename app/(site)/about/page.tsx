'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import navLogo from '@/public/team_church_logo.svg';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
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
          <div className="lg:w-subpage-main  flex flex-auto flex-col bg-blue-300">
            {/* breadcrumb */}
            <section className="flex flex-row py-2">
              <span className="mr-2">소개</span>
              <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
              <span className="mr-2 font-bold">교회 안내</span>
            </section>
            {/* Main */}
            <section className="mt-6">
              <h1 className="font-semibod mb-12 text-3xl">교회 안내</h1>
              <Image alt="hero-banner" src={heroImage} className="rounded-md" />
              <p className="break-word">
                팀쳐치는 가정과 다음세대에 대한 구체적인 비전을 가지고 세 목회자
                가정의 헌신으로 시작되었습니다. 인격적인 성숙함과 수평적이면서도
                세련된 커뮤니케이션이 필수적인 팀사역으로 출발하였기에 가장
                직관적으로 ‘팀쳐치’가 교회의 이름이 되었습니다. 팀사역에 대한
                부정적인 시각이나 예상되는 어려움에도 불구하고 그것을 잘 감당할
                때 얻게 될 성도들을 위한 유익이 훨씬 크다고 확신하기에 팀쳐치는
                리더십이나 모든 성도들의 섬김에 있어서 좁게든, 넓게는 팀사역의
                가치를 실현해 나갈 것입니다. 
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
