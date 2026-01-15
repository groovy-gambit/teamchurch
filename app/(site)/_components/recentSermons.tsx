import Link from 'next/link';
import { Sermon } from '@/sanity/types/types';
import Image from 'next/image';

const Regex = new RegExp('.*(?:(?:youtu.be/|v/|vi/|u/w/|embed/)|(?:(?:watch)??v(?:i)?=|&v(?:i)?=))([^#&?]*).*', 'i');

import { cn } from "@/lib/utils";

export default function RecentSermons({ sermons, className }: { sermons: Sermon[], className?: string }) {
  return (
    <div className={cn("grid w-full grid-cols-1 grid-rows-1 gap-3 md:grid-cols-3", className)}>
      {sermons.map((sermon: Sermon) => {
        const sermonID = sermon.sermonURL.match(Regex)?.[1];
        return (
          <Link
            href={`/word-of-god/sermon/${sermon.slug.current}`}
            key={sermon.slug.current}
            className="not-prose group"
          >
            <div className="flex flex-col gap-2 overflow-hidden">
              {sermonID ? (
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src={`https://img.youtube.com/vi/${sermonID}/hqdefault.jpg`}
                    alt=""
                    fill
                    className="m-0 object-cover"
                    sizes="100vw"
                  />
                  <span className="absolute bottom-2 left-2 flex h-12 w-12 flex-col items-center justify-center rounded-md bg-white">
                    <span className=" text-xs leading-5">
                      {new Date(sermon.releasedAt).toLocaleDateString('en', { month: 'short' })}
                    </span>
                    <span className=" text-xl font-bold leading-5 ">{new Date(sermon.releasedAt).getDate()}</span>
                  </span>
                </div>
              ) : null}
              <div className="flex flex-col group-hover:underline">
                <span className="text-xl">{sermon.title}</span>
                <span className="text-base text-slate-500">{sermon.passage}</span>
                <span className="text-base text-slate-500">{sermon.pastor}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
