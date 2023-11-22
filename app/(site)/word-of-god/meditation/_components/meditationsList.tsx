import { client } from '@/sanity/lib/client';
import { meditationsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { Meditation } from '@/sanity/types/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

async function getAllMeditations() {
  const dataList = await client.fetch(meditationsQuery);
  return dataList;
}

export default async function MeditationsList() {
  const posts = await getAllMeditations();

  return (
    <div className="space-y-6">
      {posts.map((post: Meditation) => {
        return (
          <Link href={`/word-of-god/meditation/${post.slug.current}`} key={post.slug.current} className="not-prose">
            <Card className="hover:drop-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.intro}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
