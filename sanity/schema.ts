import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import lecture from './schemas/lecture';
import page from './schemas/page';
import announcement from './schemas/announcement';
import meditation from './schemas/meditation';
import staff from './schemas/staff';
import youtube from './schemas/youtube';
import sermon from './schemas/sermon';
import banner from './schemas/banner';
import notepad from './schemas/notepad';
import galleryObject from './schemas/galleryObject';
import gallery from './schemas/gallery';
import eventVideo from './schemas/eventVideo';
import motherwiseFatherwise from './schemas/motherwiseFatherwise';
import unitedPrayer from './schemas/unitedPrayer';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    announcement,
    meditation,
    galleryObject,
    blockContent,
    lecture,
    staff,
    youtube,
    sermon,
    banner,
    notepad,
    gallery,
    eventVideo,
    motherwiseFatherwise,
    unitedPrayer,
  ],
};
