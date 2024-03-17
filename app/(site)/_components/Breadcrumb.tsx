'use client';

import { usePathname } from 'next/navigation';

import {
  Breadcrumb as ShadBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
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
        {pathArr.map((item, i) => {
          return (
            <Fragment key={item}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {i === pathArr.length - 1 ? (
                  <BreadcrumbPageName slug={item} />
                ) : (
                  <BreadcrumbPageName slug={item} parent={pathArr[i - 1]} />
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </ShadBreadcrumb>
  );
}
