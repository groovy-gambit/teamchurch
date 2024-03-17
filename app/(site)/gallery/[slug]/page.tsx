import { galleryQuery } from '@/sanity/lib/queries';
import { Gallery } from '@/sanity/types/types';
import { sanityFetch } from '@/lib/sanityClient';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import BreadcrumbPageName from '../../_components/BreadcrumbPageName';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const builder = imageUrlBuilder(client);

async function getPageData(slug: string) {
  const pageData = await sanityFetch<Gallery>({
    query: galleryQuery,
    params: { slug },
    tags: ['gallery'],
  });

  return pageData;
}
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getPageData(slug);

  return (
    <>
      <Breadcrumb className="not-prose mb-2">
        <BreadcrumbList className=" list-none">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">홈</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/gallery">갤러리</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              <BreadcrumbPageName slug={slug} />
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1>{data.title}</h1>
      <div className="grid-cols2 grid gap-3 lg:grid-cols-3">
        {data.images.images.map((image, i) => {
          return (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <button
                  tabIndex={0}
                  className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md transition-transform hover:scale-105 hover:cursor-pointer focus-visible:scale-105"
                >
                  <Image
                    alt={image.alt ?? ''}
                    src={builder.image(image).width(500).url()}
                    fill
                    className="m-0 object-cover"
                    sizes="500px"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className=" h-full w-full p-0 lg:max-h-[95%] lg:max-w-[95%]">
                <Carousel
                  className="relative flex w-full flex-shrink-0"
                  opts={{
                    loop: true,
                    startIndex: i,
                  }}
                >
                  <CarouselContent className="h-full">
                    {data.images.images.map((image, index) => {
                      return (
                        <CarouselItem key={index} className="relative">
                          <div className=" relative h-full w-full">
                            <Image
                              alt={image.alt ?? ''}
                              src={builder.image(image).width(1280).url()}
                              className={cn(`m-0 object-contain`)}
                              fill
                              sizes="100vw"
                            />
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="left-1 lg:-left-3" />
                  <CarouselNext className="right-1 lg:-right-3" />
                </Carousel>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </>
  );
}
