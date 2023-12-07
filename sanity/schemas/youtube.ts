import { YouTubePreview } from '@/app/(site)/_components/YoutubePreview';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: YouTubePreview,
  },
});
