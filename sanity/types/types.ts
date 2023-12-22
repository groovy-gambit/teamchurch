import { PortableTextBlock, TypedObject, Reference } from 'sanity';

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
  title: string;
  slug: {
    current: string;
  };
  type: string;
  intro: string;
  body: TypedObject | TypedObject[];
};

export type Sermon = {
  title: string;
  slug: {
    current: string;
  };
  type: string;
  intro: string;
  passage: string;
  body: TypedObject | TypedObject[];
  sermonURL: string;
  youtube: {
    url: string;
  };
};

export type Lecture = {
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
    alt: string;
  };
  youtube: {
    url: string;
  };
};

export type Announcement = {
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
  name: string;
  position: string;
  slug: {
    current: string;
  };
  profile_image: string;
  bio: TypedObject | TypedObject[];
};

export type Banner = {
  image: {
    url: string;
    alt: string;
  };
  anchor: string;
  linkToType: string;
  linkToSlug: string;
};
