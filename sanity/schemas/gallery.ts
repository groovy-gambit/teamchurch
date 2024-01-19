import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: '갤러리',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '이벤트 제목',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: '이벤트 날짜',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '슬러그',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) => `gal-${encodeURI(input.toLowerCase().replace(/\s+/g, '-').slice(0, 200))}`,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: '사진들',
      type: 'galleryObject',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
