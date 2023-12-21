type typeToPathPrefixType = {
  announcement: string;
  sermon: string;
  meditation: string;
};

const typeToPathPrefix: typeToPathPrefixType = {
  announcement: '/announcement',
  sermon: '/word-of-god/sermon',
  meditation: '/word-of-god/meditation',
};

export default function typeAndSlugToPath(type: string, slug: string): string | null {
  const pathPrefix = typeToPathPrefix[type as keyof typeToPathPrefixType];
  if (pathPrefix) {
    return `${pathPrefix}/${slug}`;
  }
  return null;
}
