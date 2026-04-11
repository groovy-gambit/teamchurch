import Link from 'next/link';
import { MotherwiseFatherwise } from '@/sanity/types/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const categoryLabel: Record<string, string> = {
  motherwise: '마더와이즈',
  fatherwise: '파더와이즈',
};

export default function MotherwiseFatherwiseList({ posts }: { posts: MotherwiseFatherwise[] }) {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post: MotherwiseFatherwise) => {
        return (
          <Link
            href={`/word-of-god/motherwise-fatherwise/${post.slug.current}`}
            key={post.slug.current}
            className="not-prose"
          >
            <Card className="hover:drop-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {post.category ? categoryLabel[post.category] : null}
                  {post.intro ? ` · ${post.intro}` : null}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
