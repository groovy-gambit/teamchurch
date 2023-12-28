import { client } from '@/sanity/lib/client';

export const andNextPageConditional = () =>
  '&& (releasedAt > $lastReleasedAt || (releasedAt == $lastReleasedAt && _id > $lastId))';

type PlusOrNegative = 1 | -1;

export async function getAnnouncementsNextPage<T extends { _id: string | null; releasedAt: Date }>(
  lastId: string | null,
  lastReleasedAt: Date,
  prevId: string | null,
  prevReleasedAt: Date,
  query: string,
  params: object,
  tags: string[],
  direction: PlusOrNegative = 1,
) {
  if (lastId === null && direction === 1) {
    return [];
  }
  if (prevId === null && direction === -1) {
    return [];
  }
  let updatedLastId = lastId;
  let updatedLastReleastedAt = lastReleasedAt;
  let updatedPrevId = lastId;
  let updatedPrevReleastedAt = lastReleasedAt;

  const pageParams =
    direction === 1
      ? {
          lastId,
          lastReleasedAt,
        }
      : {
          prevId,
          prevReleasedAt,
        };
  const dataList = await client.fetch(query, { ...params, ...pageParams }, { next: { tags } });

  if (dataList.length > 0) {
    updatedLastReleastedAt = dataList[dataList.length - 1].releasedAt;
    updatedLastId = dataList[dataList.length - 1]._id;
    updatedPrevId = lastId;
    updatedPrevReleastedAt = lastReleasedAt;
  } else {
    updatedLastId = null; // Reached the end
    updatedPrevId = prevId;
    updatedPrevReleastedAt = prevReleasedAt;
  }
  return {
    dataList,
    updatedLastId,
    updatedLastReleastedAt,
    updatedPrevId,
    updatedPrevReleastedAt,
  };
}
