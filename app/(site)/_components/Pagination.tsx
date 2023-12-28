export const PAGINATION_PAGE_SIZE = 10;

export async function fetchNextPage(query, lastReleasedAt, lastId) {
  if (lastId === null) {
    return { result: [], lastId: null };
  }
}
