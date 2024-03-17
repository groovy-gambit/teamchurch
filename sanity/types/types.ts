import { PortableTextBlock, TypedObject } from 'sanity';

export type RequiredMetaProps = {
  _id: string;
  releasedAt: Date;
};

export interface Blog extends RequiredMetaProps {
  _createdAt: Date;
  title: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
}

export interface Meditation extends RequiredMetaProps {
  title: string;
  slug: {
    current: string;
  };
  type: string;
  intro: string;
  body: TypedObject | TypedObject[];
}

export interface Meditations extends RequiredMetaProps {
  posts: Meditation[];
  total: number;
}

export interface Notepad extends RequiredMetaProps {
  title: string;
  slug: {
    current: string;
  };
  type: string;
  intro: string;
  body: TypedObject | TypedObject[];
}

export interface Sermon extends RequiredMetaProps {
  title: string;
  pastor: string;
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
}

export interface Sermons extends RequiredMetaProps {
  posts: Sermon[];
  total: number;
}

export interface Lecture extends RequiredMetaProps {
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
}

export interface Lectures extends RequiredMetaProps {
  posts: Lecture[];
  total: number;
}

export interface Announcement extends RequiredMetaProps {
  title: string;
  subtitle: string;
  slug: {
    current: string;
  };
  isEvent: boolean;
  eventAt?: Date;
  body: TypedObject | TypedObject[];
}

export interface Announcements extends RequiredMetaProps {
  posts: Announcement[];
  total: number;
}

export interface Staff extends RequiredMetaProps {
  name: string;
  position: string;
  slug: {
    current: string;
  };
  profile_image: {
    url: string;
    alt?: string;
  };
  bio: TypedObject | TypedObject[];
}

export interface Banner extends RequiredMetaProps {
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
}
