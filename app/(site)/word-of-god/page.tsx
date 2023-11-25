import { BodyContent } from '@/components/ui/BodyContent';
import { client } from '@/sanity/lib/client';
import { pageQuery } from '@/sanity/lib/queries';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import SubMenu from './_components/submenu';
import Breadcrumb from './_components/breadcrumb';

const builder = imageUrlBuilder(client);

async function getPageData() {
  const pageData = await client.fetch(pageQuery, { slug: 'word-of-god' });
  return pageData;
}
export default async function Page() {
  const data = await getPageData();
  return (
    <div className="container mx-auto flex flex-row px-4 pb-20 md:px-10 lg:max-w-screen-lg">
      {/* Two Column Layout */}
      <div className="hidden pr-6 lg:flex lg:w-56 lg:flex-col">
        <section className="border-b border-gray-300 pb-2">
          {/* Current Section Title */}
          <h2 className="py-2">말씀</h2>
        </section>
        {/* Subsection menu */}
        <SubMenu />
      </div>
      <div className="flex flex-auto flex-col px-4 lg:w-subpage-main">
        {/* breadcrumb */}
        <Breadcrumb />
        {/* Main */}
        <section className="prose mt-6 lg:mt-0">
          <h1>{data.title}</h1>
          {data.mainImage ? (
            <div className="relative overflow-hidden rounded-md">
              <Image
                alt={data.mainImage.alt}
                src={builder.image(data.mainImage).url()}
                className="m-0 object-cover"
                fill
                sizes="100vw"
              />
            </div>
          ) : null}
          {data.body ? <BodyContent value={data.body} /> : null}
        </section>
      </div>
    </div>
  );
}
