import { Slug, SlugSchemaType, defineField, defineType } from 'sanity';

export default defineType({
  name: 'sermon',
  title: '설교',
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
    {
      name: 'youtube',
      title: '설교 유튜브 링크',
      type: 'youtube',
      description: '유튜브 링크를 넣어주세요. 예) https://www.youtube.com/watch?v=_nsDTev4yCY',
    },
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
