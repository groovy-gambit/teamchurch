export const PAGINATION_PAGE_SIZE = 30;

export async function fetchNextPage(query, lastReleasedAt, lastId) {
  if (lastId === null) {
    return { result: [], lastId: null };
  }
}
