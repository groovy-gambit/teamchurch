import Link from 'next/link';
import { EventVideo } from '@/sanity/types/types';
import Image from 'next/image';

const Regex = new RegExp('.*(?:(?:youtu.be/|v/|vi/|u/w/|embed/)|(?:(?:watch)??v(?:i)?=|&v(?:i)?=))([^#&?]*).*', 'i');

export default function RecentEventVideo({ video }: { video: EventVideo }) {
    const videoID = video.url.match(Regex)?.[1];

    return (
        <div className="w-full h-full">
            <Link
                href={`/ministry/event-video/${video.slug.current}`}
                className="not-prose group"
            >
                <div className="flex flex-col gap-2 overflow-hidden">
                    {videoID ? (
                        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                            <Image
                                src={`https://img.youtube.com/vi/${videoID}/hqdefault.jpg`}
                                alt=""
                                fill
                                className="m-0 object-cover"
                                sizes="100vw"
                            />
                        </div>
                    ) : null}
                    <div className="flex flex-col group-hover:underline">
                        <span className="text-xl">{video.title}</span>
                        <span className="text-base text-slate-500">행사영상</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
