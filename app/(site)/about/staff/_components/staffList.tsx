import { client } from '@/sanity/lib/client';
import { staffsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { Staff } from '@/sanity/types/types';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import imageUrlBuilder from '@sanity/image-url';
import { BodyContent } from '@/components/ui/BodyContent';
import { sanityFetch } from '@/lib/sanityClient';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

async function getAllStaffs() {
  const dataList = await sanityFetch<Staff[]>({
    query: staffsQuery,
    tags: ['staff'],
  });
  return dataList;
}

export default async function StaffList() {
  const data = await getAllStaffs();

  return (
    <div className="grid  grid-cols-1 gap-4 lg:grid-cols-2">
      {data.map((staff: Staff) => {
        return (
          <Link href={`/about/staff/${staff.slug.current}`} key={staff.slug.current} className="not-prose">
            <Card className="flex flex-col gap-4 p-4 hover:drop-shadow">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  {staff.profile_image ? (
                    <Image
                      src={builder.image(staff.profile_image).url()}
                      fill
                      alt={staff.profile_image.alt ?? ''}
                      sizes="160px, 160px"
                      className="m-0 object-cover"
                    />
                  ) : (
                    <AvatarFallback>{staff.name.slice(0, 1)}</AvatarFallback>
                  )}
                </Avatar>
                <div className="flex flex-col gap-2">
                  <CardTitle>{staff.name}</CardTitle>
                  <CardDescription>{staff.position}</CardDescription>
                </div>
              </div>
              {staff.bio ? (
                <div className="line-clamp-3 space-y-1">
                  <BodyContent value={staff.bio} />
                </div>
              ) : null}
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
