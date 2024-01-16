import NotepadsList from './_components/notepadsList';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { notepadListPageQuery, notepadListQuery, pageQuery } from '@/sanity/lib/queries';
import { PageSchemaProps, PageSearchParamsProp } from '@/sanity/schemas/page';
import { Notepad } from '@/sanity/types/types';
import imageUrlBuilder from '@sanity/image-url';
import { headers } from 'next/headers';
import Image from 'next/image';
import NoteCards from './_components/noteCards';
import { MAX_PAGE_SIZE, getPagingMarkersFromUrl } from '@/sanity/lib/pagination';

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
  const { from, to } = getPagingMarkersFromUrl(searchParams);
  let posts: Notepad[] = [];
  if (from && to) {
    posts = await client.fetch(notepadListPageQuery, {
      from: parseInt(from as string),
      to: parseInt(to as string),
    });
  } else {
    posts = await getAllNotepads();
  }
  return (
    <>
      <h1>테스트 컨xp츠</h1>
      {data?.body ? <BodyContent value={data.body} /> : null}
      <NotepadsList posts={posts} from={(from as string) || '0'} to={(to as string) || `${MAX_PAGE_SIZE}`} />
    </>
  );
}
