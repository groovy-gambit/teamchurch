import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'sermon',
  title: '설교',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '슬러그',
      type: 'slug',
      options: {
        source: 'releasedAt',
        slugify: (input) => `sm-${input}`,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'releasedAt',
      title: '등록일',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sermonURL',
      title: '설교 영상 URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'passage',
      title: '본문',
      type: 'string',
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
