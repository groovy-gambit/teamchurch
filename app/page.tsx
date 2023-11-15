"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import navLogo from "../public/team_church_logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <main
      className="align-center flex min-h-screen flex-col items-center 
                  justify-between bg-white align-top"
    >
      <div className="mx-auto h-96 px-0 lg:container">
        {/* NAV */}
        <header className="w-full">
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
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </header>
        {/* NAV DONE */}
        {/* Start block */}
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                TEAM Church{" "}
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0"></div>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <img src="./images/hero.png" alt="hero image" />
            </div>
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
