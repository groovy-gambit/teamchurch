import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'lecture',
  title: '특강',
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
        source: 'title',
        slugify: (input) => `lec-${encodeURI(input.toLowerCase().replace(/\s+/g, '-').slice(0, 200))}`,
      },
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
