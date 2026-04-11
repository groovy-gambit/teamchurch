import Link from 'next/link';
import { UnitedPrayer } from '@/sanity/types/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function UnitedPrayerList({ posts }: { posts: UnitedPrayer[] }) {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post: UnitedPrayer) => {
        return (
          <Link
            href={`/ministry/united-prayer/${post.slug.current}`}
            key={post.slug.current}
            className="not-prose"
          >
            <Card className="hover:drop-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                {post.intro ? <CardDescription>{post.intro}</CardDescription> : null}
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
