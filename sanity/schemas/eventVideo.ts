import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'eventVideo',
    title: '행사영상',
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
                slugify: (input: string) => `ev-${input}`,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'releasedAt',
            title: '날짜',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'url',
            title: '영상 URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'body',
            title: '내용',
            type: 'blockContent',
        }),
    ],
});
