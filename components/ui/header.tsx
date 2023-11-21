'use client';

import Image from 'next/image';
import navLogo from '@/public/team_church_logo.svg';
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

export default function Header() {
  return (
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
                <NavigationMenuLink href="/ministries">방향</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* <NavigationMenuTrigger>헌금</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent> */}
              <Link href="/offering" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
  );
}
