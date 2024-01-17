import Link from 'next/link';
import { Sermon } from '@/sanity/types/types';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const Regex = new RegExp('.*(?:(?:youtu.be/|v/|vi/|u/w/|embed/)|(?:(?:watch)??v(?:i)?=|&v(?:i)?=))([^#&?]*).*', 'i');

export default function SermonList({ posts }: { posts: Sermon[] }) {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post: Sermon) => {
        const sermonID = post.sermonURL.match(Regex)?.[1];
        return (
          <Link href={`/word-of-god/sermon/${post.slug.current}`} key={post.slug.current} className="not-prose">
            <Card className="flex flex-col gap-2 overflow-hidden hover:drop-shadow sm:flex-row">
              {sermonID ? (
                <div className="relative h-72 w-full sm:h-40 sm:w-72">
                  <Image
                    src={`https://img.youtube.com/vi/${sermonID}/hqdefault.jpg`}
                    alt=""
                    fill
                    className="m-0 object-cover"
                    sizes="100vw"
                  />
                  <span className="absolute right-2 top-2 flex h-12 w-12 flex-col items-center justify-center rounded-md bg-white">
                    <span className=" text-xs leading-5">
                      {new Date(post.releasedAt).toLocaleDateString('en', { month: 'short' })}
                    </span>
                    <span className=" text-xl font-bold leading-5 ">{new Date(post.releasedAt).getDate()}</span>
                  </span>
                </div>
              ) : null}
              <div className="flex flex-col gap-2 p-4">
                <div className="flex flex-col">
                  <span className="text-xl">{post.title}</span>
                  <span className="text-base text-slate-500">{post.passage}</span>
                </div>
                <span className="line-clamp-2 flex-grow text-base text-slate-500">{post.intro}</span>
                <span className="text-base text-slate-500">{post.pastor}</span>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
