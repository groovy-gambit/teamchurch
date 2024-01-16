import { client } from '@/sanity/lib/client';
import { RequiredMetaProps } from '../types/types';
import { PageSearchParamsProp } from '../schemas/page';

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
