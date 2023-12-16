import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'banner',
  title: '홈페이지 배너',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: '이미지',
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
      name: 'anchor',
      title: '기준',
      type: 'string',
      options: {
        list: [
          { title: '왼쪽', value: 'left' },
          { title: '중앙', value: 'center' },
          { title: '오른쪽', value: 'right' },
        ],
      },
    }),
    defineField({
      name: 'linkTo',
      title: '링크하기',
      type: 'reference',
      to: [{ type: 'announcement' }, { type: 'meditation' }, { type: 'sermon' }, { type: 'lecture' }],
    }),
  ],
});
