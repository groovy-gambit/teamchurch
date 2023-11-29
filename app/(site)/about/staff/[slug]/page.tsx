import { BodyContent } from '@/components/ui/BodyContent';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { client } from '@/sanity/lib/client';
import { staffQuery } from '@/sanity/lib/queries';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

async function getPageData(slug: string) {
  const pageData = await client.fetch(staffQuery, { slug: slug });
  return pageData;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getPageData(slug);

  return (
    <>
      <div className="flex items-center gap-8">
        <Avatar className="h-40 w-40">
          {data.profile_image ? (
            <AvatarImage src={builder.image(data.profile_image).url()} />
          ) : (
            <AvatarFallback>{data.name.slice(0, 1)}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col gap-2">
          <h1 className="mb-0">{data.name}</h1>
          <span>{data.position}</span>
        </div>
      </div>
      {data.bio ? <BodyContent value={data.bio} /> : null}
    </>
  );
}
