'use client';

import { Banner } from '@/sanity/types/types';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { useRouter } from 'next/navigation';
import linkMapper from '@/app/(site)/_util/linkMapper';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

const builder = imageUrlBuilder(client);

export default function BannerCarousel({ images }: { images: Banner[] }) {
  const router = useRouter();
  const content = (
    <Carousel
      className="relative flex w-full flex-shrink-0"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => {
          const linkToType = image.linkToType;
          const linkToSlug = image.linkToSlug;
          const linkPath = linkMapper(linkToType, linkToSlug);
          return (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="relative flex aspect-[2/1] items-center justify-center overflow-hidden p-0 md:aspect-[4/1]">
                    <Image
                      alt={image.image.alt ?? ''}
                      src={builder.image(image.image).url()}
                      className={cn(
                        `m-0 object-cover`,
                        image.mobileImage.url ? 'hidden md:block' : '',
                        linkPath ? 'hover:cursor-pointer' : 'cursor-auto',
                      )}
                      fill
                      sizes="100vw"
                      onClick={() => (linkPath ? router.push(linkPath) : null)}
                    />
                    {image.mobileImage ? (
                      <Image
                        alt={image.mobileImage.alt ?? ''}
                        src={builder.image(image.mobileImage).url()}
                        className={cn(
                          `block object-cover md:hidden`,
                          linkPath ? 'hover:cursor-pointer' : 'cursor-auto',
                        )}
                        fill
                        sizes="100vw"
                        onClick={() => (linkPath ? router.push(linkPath) : null)}
                      />
                    ) : null}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="-left-3" />
      <CarouselNext className="-right-3" />
    </Carousel>
  );

  return content;
}
