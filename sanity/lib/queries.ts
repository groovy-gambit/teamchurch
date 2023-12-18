// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

// Get page
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
    title, slug, body, "imageUrl": mainImage.asset->url, mainImage,
  }`;

// Get all announcements
export const announcementsQuery = groq`*[_type == "announcement" && dateTime(releasedAt + 'T00:00:00Z') <= dateTime(now())] | order(releasedAt desc) {
    title, subtitle, slug, isEvent, releasedAt, eventAt
  }`;

// Get all staffs
export const staffsQuery = groq`*[_type == "staff"] | order(_createdAt asc) {
    name, position, slug, image, bio
  }`;

// Get one staff
export const staffQuery = groq`*[_type == "staff" && slug.current == $slug][0]{
    name, position, slug, image, bio
  }`;

// Get all meditation
export const meditationsQuery = groq`*[_type == "meditation"] | order(releasedAt desc) {
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

// Get sermon
export const sermonQuery = groq`*[_type == "sermon" && slug.current == $slug][0]{
    title, slug, type, intro, body, releasedAt, sermonURL
}`;

export const sermonListQuery = groq`*[_type == "sermon"]{
    title, slug, type, intro, releasedAt, sermonURL
}`;

export const bannerQuery = groq`*[_type == "banner"]{
    image, anchor, linkTo
}`;
