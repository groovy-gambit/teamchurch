'use client';
import Image from 'next/image';
import navLogo from '@/public/logo.svg';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import Link from 'next/link';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import React, { ComponentPropsWithoutRef, useState } from 'react';

const ListItem = ({
  href,
  title,
  target,
  legacyBehavior = true,
}: {
  href: string;
  title: string;
  legacyBehavior?: boolean;
  target?: ComponentPropsWithoutRef<'a'>['target'];
}) => {
  return (
    <li>
      <Link href={href} legacyBehavior={legacyBehavior} passHref target={target}>
        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
        </NavigationMenuLink>
      </Link>
    </li>
  );
};
ListItem.displayName = 'ListItem';

const MobileNavItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <SheetClose asChild className="w-full">
      <Link href={href}>
        <Button
          variant="ghost"
          className="block w-full select-none space-y-1 rounded-md p-3 text-left leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          {title}
        </Button>
      </Link>
    </SheetClose>
  );
};

export default function Header() {
  const [current, setCurrent] = useState('item-1');
  return (
    <header className="w-full bg-white">
      <nav className="container mx-auto flex w-full flex-row items-center justify-between px-4 py-6 md:px-10 lg:max-w-screen-lg">
        <Link href="/" legacyBehavior>
          <Image src={navLogo} alt="Team Church logo" height={60} className=" cursor-pointer" />
        </Link>
        {/* collapsed nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Team Church</SheetTitle>
              </SheetHeader>
              <Accordion type="single" collapsible defaultValue={current} onValueChange={(value) => setCurrent(value)}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>소개</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-2 p-2 md:w-[150px] lg:grid-cols-[1fr]">
                      <MobileNavItem href="/about" title="교회 안내" />
                      <MobileNavItem href="/about/hours" title="예배 시간" />
                      <MobileNavItem href="/about/staff" title="섬기는 사람들" />
                      <MobileNavItem href="/about/contact" title="위치 및 연락 방법" />
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>말씀</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-2 p-2 md:w-[150px] lg:grid-cols-[1fr]">
                      <MobileNavItem href="/word-of-god/sermon" title="설교" />
                      <MobileNavItem href="/word-of-god/meditation" title="묵상" />
                      <MobileNavItem href="/word-of-god/membership-training" title="멤버쉽반" />
                      <MobileNavItem href="/word-of-god/lecture" title="특강" />
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link href="" legacyBehavior passHref>
                <Button className="my-4 block w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  헌금
                </Button>
              </Link>
            </SheetContent>
          </Sheet>
        </div>
        {/* expanded nav */}
        <NavigationMenu className="hidden md:flex">
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
                  <ListItem href="/word-of-god/sermon" title="설교" />
                  <ListItem href="/word-of-god/meditation" title="묵상" />
                  <ListItem href="/word-of-god/membership-training" title="멤버쉽반" />
                  <ListItem href="/word-of-god/lecture" title="특강" />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>사역</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-2 md:w-[150px] lg:grid-cols-[1fr]">
                  <ListItem href="/ministry/evangelize" title="전도" />
                  <ListItem href="/ministry/missionary" title="선교" />
                  <ListItem href="/ministry/small-group" title="소그룹" />
                  <ListItem href="/ministry/event" title="이벤트" />
                  <li>
                    <Link href="https://visionyouthcc.org" legacyBehavior passHref target="_blank">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">VYCC</div>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>교육</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-2 md:w-[150px] lg:grid-cols-[1fr]">
                  <ListItem href="/education/sunday-school" title="주일학교" />
                  <ListItem href="/education/youth" title="Youth" />
                  <ListItem href="/education/college" title="College" />
                  <ListItem href="/education/gabe-orda" title="가베 & 오르다" />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>온라인 헌금</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
