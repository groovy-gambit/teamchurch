import Link from 'next/link';
import { Meditation } from '@/sanity/types/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NotepadsList({ posts }: { posts: Meditation[] }) {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post: Meditation) => {
        return (
          <Link href={`/word-of-god/notepad/${post.slug.current}`} key={post.slug.current} className="not-prose">
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
