import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
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
        },
      }}
    />
  );
};
