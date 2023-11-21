// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

// Get page
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
    title, slug, body, "imageUrl": mainImage.asset->url, mainImage,
  }`;

// Get about page
export const aboutPageQuery = groq`*[_type == "page" && slug.current == 'about']{
    title, slug, body, "imageUrl": mainImage.asset->url, mainImage
  }`;

// Get hours page
export const hoursPageQuery = groq`*[_type == "page" && slug.current == 'hours']{
    title, slug, body, "imageUrl": mainImage.asset->url, mainImage
  }`;

// Get staff page
export const staffPageQuery = groq`*[_type == "page" && slug.current == 'staff']{
    title, slug, body, "imageUrl": mainImage.asset->url, mainImage
  }`;

// Get contact page
export const contactPageQuery = groq`*[_type == "page" && slug.current == 'contact']{
    title, slug, body, "imageUrl": mainImage.asset->url, mainImage
  }`;
