import { lectureListQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { Lecture } from '@/sanity/types/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { sanityFetch } from '@/lib/sanityClient';

async function getAllLecture() {
  const pageData = await sanityFetch<Lecture[]>({
    query: lectureListQuery,
    tags: ['lecture'],
  });
  return pageData;
}

export default async function LectureList() {
  const posts = await getAllLecture();

  return (
    <div className="space-y-6">
      {posts.map((post: Lecture) => {
        return (
          <Link href={`/word-of-god/lecture/${post.slug.current}`} key={post.slug.current} className="not-prose">
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
