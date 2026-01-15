import Link from 'next/link';
import { EventVideo } from '@/sanity/types/types';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const Regex = new RegExp('.*(?:(?:youtu.be/|v/|vi/|u/w/|embed/)|(?:(?:watch)??v(?:i)?=|&v(?:i)?=))([^#&?]*).*', 'i');

export default function EventVideoList({ posts }: { posts: EventVideo[] }) {
    return (
        <div className="flex flex-col gap-3">
            {posts.map((post: EventVideo) => {
                const videoID = post.url.match(Regex)?.[1];
                return (
                    <Link href={`/ministry/event-video/${post.slug.current}`} key={post.slug.current} className="not-prose">
                        <Card className="flex flex-col gap-2 overflow-hidden hover:drop-shadow sm:flex-row">
                            {videoID ? (
                                <div className="relative h-72 w-full shrink-0 sm:h-40 sm:w-72">
                                    <Image
                                        src={`https://img.youtube.com/vi/${videoID}/hqdefault.jpg`}
                                        alt=""
                                        fill
                                        className="m-0 object-cover"
                                        sizes="auto, 160px"
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
                                </div>
                            </div>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}
