// ./nextjs-app/sanity/lib/queries.ts

// CANNOT use variable for paging size. See: https://github.com/sanity-io/sanity/issues/2424
// therefore using 10 as the size for slice: [1...10]

import { groq } from 'next-sanity';

// Get page
export const slugQuery = groq`*[slug.current == $slug][0]{...}`;

// Get page
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
    title, slug, body, "imageUrl": mainImage.asset->url, mainImage,
  }`;

// Get announcements - paginated
export const announcementsQuery = groq`{
    "posts": *[_type == "announcement" && dateTime(releasedAt + 'T00:00:00Z') <= dateTime(now()) ] | order(releasedAt desc, _id desc)[$from...$to],
    "total": count(*[_type == "announcement"]) 
}`;

// Get all staffs
export const staffsQuery = groq`*[_type == "staff"] | order(_createdAt asc)[0...10] {
    _id, name, position, slug, profile_image, bio
  }`;

// Get one staff
export const staffQuery = groq`*[_type == "staff" && slug.current == $slug][0]{
    name, position, slug, profile_image, bio
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

// Get sermons - paginated
export const sermonListPageQuery = groq`{
    "posts": *[_type == "sermon"] | order(publishedAt desc)[$from...$to],
    "total": count(*[_type == "sermon"]) 
}`;

// Get lecture
export const lectureQuery = groq`*[_type == "lecture" && slug.current == $slug][0]{
    title, slug, type, intro, body, releasedAt, category
}`;

// Get lectures by cat - paginated
export const lecturesByCatPageQuery = groq`{
    "posts": *[_type == "lecture" && category in $category]| order(releasedAt desc, _id desc)[$from...$to],
    "total": count(*[_type == "lecture" && category in $category])
}`;

// PaginatedContents
export const paginatedContentQuery = groq`{
    "posts": *[_type == string($type)] | order(releasedAt desc, _id desc)[$from...$to],
    "total": count(*[_type == string($type)]) 
}`;

export const bannerQuery = groq`*[_type == "banner"]{
    image, anchor, linkTo, mobileImage,
  "linkToType": linkTo->_type,
  "linkToSlug": linkTo->slug.current
}`;

export const galleryListQuery = groq`{
    "posts": *[_type == "gallery"] | order(date desc, _id desc)[$from...$to],
    "total": count(*[_type == "gallery"])
}`;

// Get event video
export const eventVideoQuery = groq`*[_type == "eventVideo" && slug.current == $slug][0]{
    title, slug, releasedAt, url, body
}`;

export const galleryQuery = groq`*[_type == "gallery" && slug.current == $slug][0]{
    _id, title, slug, type, date, images
}`;

// Get single motherwiseFatherwise item
export const motherwiseFatherwiseQuery = groq`*[_type == "motherwiseFatherwise" && slug.current == $slug][0]{
    title, slug, category, releasedAt, intro, body
}`;

// Get single unitedPrayer item
export const unitedPrayerQuery = groq`*[_type == "unitedPrayer" && slug.current == $slug][0]{
    title, slug, releasedAt, intro, body
}`;
