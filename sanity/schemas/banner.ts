import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'banner',
  title: '홈페이지 배너',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: '배너 이미지',
      description: '이미지 비율은 가로 4 새로 1 입니다. 예) 1280px x 320px',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'alt 텍스트',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mobileImage',
      title: '모바일 배너 이미지',
      description: '이미지 비율은 가로 2 새로 1 입니다. 예) 640px x 320px',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'alt 텍스트',
        },
      ],
    }),
    defineField({
      name: 'linkTo',
      title: '링크하기',
      type: 'reference',
      to: [{ type: 'announcement' }, { type: 'meditation' }, { type: 'sermon' }, { type: 'lecture' }],
    }),
  ],
});
