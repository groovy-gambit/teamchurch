import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: '페이지',
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
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: '메인 이미지',
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
      name: 'body',
      title: '내용',
      type: 'blockContent',
    }),
  ],
});

export type PageSchemaProps = {
  title?: string;
  mainImage?: SanityImageSource & {
    alt?: string;
  };
  body?: string;
};

type PageSearchParamsPropValue = string | string[] | undefined;
export type PageSearchParamsProp = {
  [key: string]: PageSearchParamsPropValue;
};
