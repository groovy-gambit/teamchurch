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
      name: 'thumbnail',
      title: '썸네일',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'alt 텍스트',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: '카테고리',
      type: 'string',
      options: {
        list: [
          { title: '성경 배우기', value: 'learn-bible' },
          { title: '교리 배우기', value: 'learn-doctrine' },
          { title: '묵상 배우기', value: 'learn-meditation' },
          { title: '외부특강 및 세미나', value: 'other' },
        ],
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
