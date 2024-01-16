import { client } from '@/sanity/lib/client';
import { RequiredMetaProps } from '../types/types';
import { PageSearchParamsProp } from '../schemas/page';
import { sanityFetch } from '@/lib/sanityClient';
import { QueryParams } from 'next-sanity';

export const MAX_PAGE_SIZE = 10;

export function getPagingMarkersFromUrl(searchParams: PageSearchParamsProp) {
  if (searchParams && typeof searchParams === 'object') {
    const from = searchParams.from;
    const to = searchParams.to;

    return {
      from,
      to,
    };
  }
  return {
    from: null,
    to: null,
  };
}

export async function getPaginatedContent<T>(
  searchParams: PageSearchParamsProp,
  {
    query,
    params,
    tags,
  }: {
    query: string;
    params?: QueryParams;
    tags: string[];
  },
  noPagedContentGetter: () => Promise<T[]>,
) {
  const { from, to } = getPagingMarkersFromUrl(searchParams);
  let posts: T[] = [];
  if (from && to) {
    posts = await sanityFetch({
      query,
      params: {
        from: parseInt(from as string),
        to: parseInt(to as string),
        ...params,
      },
      tags,
    });
  } else {
    posts = await noPagedContentGetter();
  }
  return {
    posts,
    from: (from as string) || '0',
    to: (to as string) || `${MAX_PAGE_SIZE}`,
  };
}
