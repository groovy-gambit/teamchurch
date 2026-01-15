import EventVideoList from './_components/eventVideoList';
import { sanityFetch } from '@/lib/sanityClient';
import { paginatedContentQuery } from '@/sanity/lib/queries';
import { EventVideos } from '@/sanity/types/types';
import ContentPagination from '../../_components/ContentPagination';

async function getPaginatedContent({ from, to }: { from: number; to: number }) {
    const pageData = await sanityFetch<EventVideos>({
        query: paginatedContentQuery,
        params: { type: 'eventVideo', from, to },
        tags: ['eventVideo'],
    });

    return pageData;
}

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const perPage = 5;
    const from = searchParams && searchParams.from ? +searchParams.from : 0;
    const to = searchParams && searchParams.to ? +searchParams.to : perPage;
    const postData = await getPaginatedContent({
        from,
        to,
    });
    const length = postData.total;

    return (
        <>
            <h1>행사영상</h1>
            <EventVideoList posts={postData.posts} />
            <ContentPagination searchParams={searchParams} length={length} per={perPage} />
        </>
    );
}
