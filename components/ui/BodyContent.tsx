import YoutubePlayer from '@/components/ui/YoutubePlayer';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

export const BodyContent = ({ value }: { value: any }) => {
  return (
    <PortableText
      value={value}
      components={{
        types: {
          image: ({ value }) => (
            <div className="relative w-full">
              <Image
                src={builder.image(value).url()}
                alt={value.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ),
          youtube: ({ value }: { value: { url: string } }) => {
            const { url } = value;
            return (
              <div className="justify-center">
                <YoutubePlayer url={url} />
              </div>
            );
          },
        },
        block: {
          h2: ({ children }) => {
            return <h2 className={`first:mt-0`}>{children}</h2>;
          },
          p: ({ children }) => {
            return <p className={`first:mt-0`}>{children}</p>;
          },
        },
      }}
    />
  );
};
