import NotepadsList from './_components/notepadsList';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { notepadListCursorPageQuery, notepadListQuery, pageQuery } from '@/sanity/lib/queries';
import { PageSchemaProps, PageSearchParamsProp } from '@/sanity/schemas/page';
import { Notepad } from '@/sanity/types/types';
import imageUrlBuilder from '@sanity/image-url';
import { headers } from 'next/headers';
import Image from 'next/image';
import NoteCards from './_components/noteCards';
import { getPagingMarkersFromUrl } from '@/sanity/lib/pagination';

const builder = imageUrlBuilder(client);

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'notepad' },
    tags: ['page'],
  });
  return pageData;
}
async function getAllNotepads() {
  const pageData = await sanityFetch<Notepad[]>({
    query: notepadListQuery,
    tags: ['notepad'],
  });
  return pageData;
}

export default async function Page({ searchParams }: { searchParams: PageSearchParamsProp }) {
  const data = await getPageData();
  const { currId, currReleasedAt } = getPagingMarkersFromUrl(searchParams);
  let posts: Notepad[] = [];
  if (currId && currReleasedAt) {
    posts = await client.fetch(notepadListCursorPageQuery, {
      lastReleasedAt: currReleasedAt,
      lastId: currId,
    });
  } else {
    posts = await getAllNotepads();
  }

  return (
    <>
      <h1>테스트 컨첸츠</h1>
      {data?.body ? <BodyContent value={data.body} /> : null}
      <NotepadsList posts={posts} />
    </>
  );
}
