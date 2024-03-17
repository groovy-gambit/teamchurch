'use client';

import { usePathname } from 'next/navigation';

import {
  Breadcrumb as ShadBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import BreadcrumbPageName from './BreadcrumbPageName';
import { Fragment } from 'react';

export default function Breadcrumb() {
  const pathName = usePathname();

  const pathArr = pathName.split('/').filter(Boolean);

  return (
    <ShadBreadcrumb className="mb-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">홈</BreadcrumbLink>
        </BreadcrumbItem>
        {pathArr.map((item) => {
          return (
            <Fragment key={item}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <BreadcrumbPageName slug={item} />
                </BreadcrumbPage>
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </ShadBreadcrumb>
  );
}
