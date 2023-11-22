// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

// Get page
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
    title, slug, body, "imageUrl": mainImage.asset->url, mainImage,
  }`;

// Get all announcements
export const announcementsQuery = groq`*[_type == "announcement"]{
    title, slug, type, body, publishedAt, eventAt
  }`;

// Get all meditation
export const meditationsQuery = groq`*[_type == "meditation"]{
    title, slug, type, body, publishedAt, eventAt
  }`;

// Get announcement
export const announcementQuery = groq`*[_type == "announcement" && slug.current == $slug][0]{
    title, slug, type, body, publishedAt, eventAt
  }`;
