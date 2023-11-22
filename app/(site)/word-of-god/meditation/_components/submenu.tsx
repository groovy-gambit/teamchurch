import { client } from '@/sanity/lib/client';
import { meditationsQuery } from '@/sanity/lib/queries';
import SubMenuItem from './submenuItem';

async function getAllMeditations() {
  const dataList = await client.fetch(meditationsQuery);
  return dataList;
}

export default async function SubMenu() {
  const posts = await getAllMeditations();
  return (
    <section className="pt-3">
      <div className="flex flex-col">
        {posts.map((post: any) => {
          return <SubMenuItem post={post} key={post.slug.current} />;
        })}
      </div>
    </section>
  );
}
