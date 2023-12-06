import { Slug, SlugSchemaType, defineField, defineType } from 'sanity';

export default defineType({
  name: 'meditation',
  title: '묵상',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: '슬러그',
      type: 'slug',
      options: {
        source: 'releasedAt',
        slugify: (input) => `mt-${input}`,
      },
    }),
    defineField({
      name: 'releasedAt',
      title: '등록일',
      type: 'date',
    }),
    defineField({
      name: 'intro',
      title: '서론',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: '내용',
      type: 'blockContent',
    }),
  ],
});

export interface meditationSchemaProps {
  title?: string;
  slug?: Slug;
  releasedAt?: Date;
  intro?: string;
  body?: string;
}
