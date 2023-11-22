import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
// import category from './schemas/category';
// import post from './schemas/post';
import lecture from './schemas/lecture';
import page from './schemas/page';
import announcement from './schemas/announcement';
import meditation from './schemas/meditation';
import staff from './schemas/staff';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, announcement, meditation, blockContent, lecture, staff],
};
