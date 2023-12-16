import { client } from '@/sanity/lib/client';
import { meditationsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { Meditation } from '@/sanity/types/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { sanityFetch } from '@/lib/sanityClient';

async function getAllMeditations() {
  const pageData = await sanityFetch<Meditation[]>({
    query: meditationsQuery,
    tags: ['meditation'],
  });
  return pageData;
}

export default async function MeditationsList() {
  const posts = await getAllMeditations();

  return (
    <div className="flex flex-col gap-3">
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
