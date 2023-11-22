import { client } from '@/sanity/lib/client';
import { meditationsQuery } from '@/sanity/lib/queries';
import { MeditationsList } from './_components/meditationsList';

async function getAllMeditations() {
  const dataList = await client.fetch(meditationsQuery, { some: 'thing' });
  return dataList;
}

export default async function Page() {
  const posts = await getAllMeditations();

  return (
    <div className="flex w-subpage-main flex-col">
      <MeditationsList posts={posts} />
    </div>
  );
}
