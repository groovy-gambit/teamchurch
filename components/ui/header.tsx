'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import navLogo from '@/public/logo.svg';
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
import React from 'react';

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';

export default function Header() {
  return (
    <header className="mb-6 w-full">
      <nav className="felx-row flex w-full justify-between py-2">
        <Link href="/" legacyBehavior>
          <Image src={navLogo} alt="Team Church logo" width={100} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>소개</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-2 md:w-[150px] lg:grid-cols-[1fr]">
                  <ListItem href="/about" title="교회 안내" />
                  <ListItem href="/about/hours" title="예배 시간" />
                  <ListItem href="/about/staff" title="섬기는 사람들" />
                  <ListItem href="/about/contact" title="위치 및 연락 방법" />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>말씀</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-2 md:w-[150px] lg:grid-cols-[1fr]">
                  <ListItem href="/word-of-god" title="예배" />
                  <ListItem href="/word-of-god/meditation" title="묵상" />
                  <ListItem href="/word-of-god/membership-training" title="멤버쉽반" />
                  <ListItem href="/word-of-god/lecture" title="특강" />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
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
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              {/* <NavigationMenuTrigger>헌금</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent> */}
              {/* <Link href="/offering" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  헌금
                </NavigationMenuLink>
              </Link> */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
