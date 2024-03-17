import { galleryListQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { Galleries } from '@/sanity/types/types';
import { sanityFetch } from '@/lib/sanityClient';
import { PageSearchParamsProp } from '@/sanity/schemas/page';
import { Card } from '@/components/ui/card';
import ContentPagination from '../_components/ContentPagination';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const builder = imageUrlBuilder(client);

async function getPaginatedContent({ from, to }: { from: number; to: number }) {
  const pageData = await sanityFetch<Galleries>({
    query: galleryListQuery,
    params: { from, to },
    tags: ['gallery'],
  });

  return pageData;
}

export default async function Page({ searchParams }: { searchParams: PageSearchParamsProp }) {
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
      <Breadcrumb className="not-prose mb-2">
        <BreadcrumbList className=" list-none">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">홈</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>갤러리</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1>{`갤러리`}</h1>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3">
        {postData.posts.map((item, i) => {
          return (
            <Link href={`/gallery/${item.slug.current}`} key={i} className="not-prose">
              <Card className="flex flex-col gap-2 overflow-hidden hover:drop-shadow">
                <div className="relative aspect-video w-full shrink-0">
                  <Image
                    alt={item.images.images[0].alt ?? ''}
                    src={builder.image(item.images.images[0]).width(500).url()}
                    fill
                    className="m-0 object-cover"
                    sizes="auto, 160px"
                  />
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex flex-col">
                    <span className="text-xl">{item.title}</span>
                  </div>
                  <span className="line-clamp-2 flex-grow text-base text-slate-500">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
      <ContentPagination searchParams={searchParams} length={length} per={perPage} />
    </>
  );
}
