import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { TypedObject } from 'sanity';

const dateString = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

type Meditation = {
  title: string;
  slug: {
    current: string;
  };
  type: string;
  body: TypedObject | TypedObject[];
  _updatedAt: string;
};

export const MeditationsList = ({ posts }: { posts: Meditation[] }) => {
  return (
    <div className="space-y-6">
      {posts.map((post: Meditation) => {
        const updatedDate = new Date(post._updatedAt);

        return (
          <Link href={`/word-of-god/meditation/${post.slug.current}`} key={post.slug.current} className="not-prose">
            <div className="mb-6 flex flex-col p-1 hover:bg-slate-100">
              <h3 className="text-xl">{post.title}</h3>
              {/* <h4 className="text-base">{dateString(updatedDate)}</h4> */}

              <section className="text-wrap prose-sm mt-0 max-h-40 truncate text-ellipsis break-normal bg-gradient-to-b from-slate-500 from-70% to-slate-100 bg-clip-text text-transparent prose-h2:mt-0">
                <PortableText value={post.body} />
              </section>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
