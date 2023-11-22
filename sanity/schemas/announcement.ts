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
      name: 'slug',
      title: '슬러그',
      type: 'slug',
      options: {
        maxLength: 96,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: '공지 날짜',
      type: 'datetime',
    }),
    defineField({
      name: 'eventAt',
      title: '이벤트 날짜',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: '내용',
      type: 'blockContent',
    }),
  ],
});
