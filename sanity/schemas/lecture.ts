import { defineField, defineType } from "sanity";

export default defineType({
	name: "lecture",
	title: "양육컨텐츠",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "제목",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "슬러그",
			type: "slug",
			description:
				"슬러그는 URL주소에 사용됩니다. 오른쪽에 Generate 버튼을 눌러 자동생성 혹은 유니크한 이름을 입력해주세요.",
			options: {
				source: "title",
				slugify: (input) =>
					`lec-${encodeURI(input.toLowerCase().replace(/\s+/g, "-").slice(0, 200))}`,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "thumbnail",
			title: "썸네일",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "alt 텍스트",
				},
			],
		}),
		defineField({
			name: "category",
			title: "카테고리",
			type: "string",
			options: {
				list: [
					{ title: "성경 배우기", value: "learn-bible" },
					{ title: "교리 배우기", value: "learn-doctrine" },
					{ title: "묵상 배우기", value: "learn-meditation" },
					{ title: "외부특강 및 세미나", value: "other" },
				],
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "intro",
			title: "서론",
			type: "string",
		}),
		defineField({
			name: "body",
			title: "내용",
			type: "blockContent",
		}),
	],
});
