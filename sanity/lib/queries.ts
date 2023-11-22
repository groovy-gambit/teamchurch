// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

// Get page
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
    title, slug, body, "imageUrl": mainImage.asset->url, mainImage,
  }`;

// Get all announcements
export const announcementsQuery = groq`*[_type == "announcement" && dateTime(releasedAt + 'T00:00:00Z') <= dateTime(now())] | order(releasedAt asc) {
    title, subtitle, slug, isEvent, releasedAt, eventAt
  }`;

// Get all meditation
export const meditationsQuery = groq`*[_type == "meditation"] | order(releasedAt asc) {
    title, slug, type, intro, releasedAt
  }`;

// Get one meditation
export const meditationQuery = groq`*[_type == "meditation" && slug.current == $slug][0]{
    title, slug, type, body, releasedAt,
  }`;

// Get announcement
export const announcementQuery = groq`*[_type == "announcement" && slug.current == $slug][0]{
    title, slug, body, isEvent, releasedAt, eventAt
  }`;
