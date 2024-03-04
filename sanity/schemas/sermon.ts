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
      description:
        '슬러그는 URL주소에 사용됩니다. 오른쪽에 Generate 버튼을 눌러 자동생성 혹은 유니크한 이름을 입력해주세요.',
      options: {
        source: 'releasedAt',
        slugify: (input) => `sm-${input}`,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'releasedAt',
      title: '설교날짜',
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
      name: 'pastor',
      title: '설교 목사',
      type: 'string',
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
