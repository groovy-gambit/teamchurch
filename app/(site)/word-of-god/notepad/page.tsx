import NotepadsList from './_components/notepadsList';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import { client } from '@/sanity/lib/client';
import { notepadListPageQuery, notepadListQuery, pageQuery } from '@/sanity/lib/queries';
import { PageSchemaProps, PageSearchParamsProp } from '@/sanity/schemas/page';
import { Notepad } from '@/sanity/types/types';
import imageUrlBuilder from '@sanity/image-url';
import { MAX_PAGE_SIZE, getPaginatedContent } from '@/sanity/lib/pagination';

const builder = imageUrlBuilder(client);

async function getPageData() {
  const pageData = await sanityFetch<PageSchemaProps>({
    query: pageQuery,
    params: { slug: 'notepad' },
    tags: ['page'],
  });
  return pageData;
}

const tags = ['notepad'];

async function getAllNotepads() {
  const pageData = await sanityFetch<Notepad[]>({
    query: notepadListQuery,
    tags,
  });
  return pageData;
}

export default async function Page({ searchParams }: { searchParams: PageSearchParamsProp }) {
  const data = await getPageData();

  const { posts, from, to } = await getPaginatedContent<Notepad>(
    searchParams,
    { query: notepadListPageQuery, tags },
    getAllNotepads,
  );
  return (
    <>
      <h1>테스트 컨xp츠</h1>
      {data?.body ? <BodyContent value={data.body} /> : null}
      <NotepadsList posts={posts} from={(from as string) || '0'} to={(to as string) || `${MAX_PAGE_SIZE}`} />
    </>
  );
}
