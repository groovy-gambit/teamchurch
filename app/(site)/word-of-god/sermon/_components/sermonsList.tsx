import { sermonListQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { Sermon } from '@/sanity/types/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { sanityFetch } from '@/lib/sanityClient';

async function getAllSermon() {
  const pageData = await sanityFetch<Sermon[]>({
    query: sermonListQuery,
    tags: ['sermon'],
  });
  return pageData;
}

export default async function SermonList() {
  const posts = await getAllSermon();

  return (
    <div className="space-y-6">
      {posts.map((post: Sermon) => {
        return (
          <Link href={`/word-of-god/sermon/${post.slug.current}`} key={post.slug.current} className="not-prose">
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
