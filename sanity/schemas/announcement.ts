import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'announcement',
  title: '교회 소식',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: '부제목',
      type: 'string',
    }),
    defineField({
      name: 'releasedAt',
      title: '등록일',
      description: '등록일 이후부터 웹사이트에 보이기 시작합니다.',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '슬러그',
      description:
        '슬러그는 URL주소에 사용됩니다. 오른쪽에 Generate 버튼을 눌러 자동생성 혹은 유니크한 이름을 입력해주세요.',
      type: 'slug',
      options: {
        source: 'releasedAt',
        slugify: (input) => `an-${input}`,
      },
      validation: (Rule) => Rule.required(),
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
