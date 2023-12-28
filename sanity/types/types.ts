import { UUID } from 'crypto';
import { PortableTextBlock, TypedObject } from 'sanity';

export type Blog = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};

export type Meditation = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  type: string;
  intro: string;
  body: TypedObject | TypedObject[];
};

export type Notepad = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  type: string;
  intro: string;
  body: TypedObject | TypedObject[];
};

export type Sermon = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  type: string;
  intro: string;
  passage: string;
  body: TypedObject | TypedObject[];
  sermonURL: string;
  releasedAt: string;
  youtube: {
    url: string;
  };
};

export type Lecture = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  type: string;
  intro: string;
  category: string;
  body: TypedObject | TypedObject[];
  sermonURL: string;
  thumbnail: {
    url: string;
    alt?: string;
  };
  youtube: {
    url: string;
  };
};

export type Announcement = {
  _id: string;
  title: string;
  subtitle: string;
  slug: {
    current: string;
  };
  releasedAt: Date;
  isEvent: boolean;
  eventAt?: Date;
  body: TypedObject | TypedObject[];
};

export type Staff = {
  _id: string;
  name: string;
  position: string;
  slug: {
    current: string;
  };
  profile_image: string;
  bio: TypedObject | TypedObject[];
};

export type Banner = {
  _id: string;
  image: {
    url: string;
    alt?: string;
  };
  anchor: string;
  mobileImage: {
    url: string;
    alt?: string;
  };
  linkToType: string;
  linkToSlug: string;
};
