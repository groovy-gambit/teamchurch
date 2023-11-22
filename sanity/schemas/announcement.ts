import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'announcement',
  title: '공지 및 광고',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: '부제목',
      type: 'string',
    }),
    defineField({
      name: 'releasedAt',
      title: '등록일',
      type: 'date',
    }),
    defineField({
      name: 'slug',
      title: '슬러그',
      type: 'slug',
      options: {
        source: 'releasedAt',
        slugify: (input) => `an-${input}`,
      },
    }),
    defineField({
      name: 'isEvent',
      title: '이벤트 공지인가요?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'eventAt',
      title: '이벤트 날짜',
      type: 'datetime',
      hidden: ({ parent }) => !parent.isEvent,
    }),
    defineField({
      name: 'body',
      title: '내용',
      type: 'blockContent',
    }),
  ],
});
