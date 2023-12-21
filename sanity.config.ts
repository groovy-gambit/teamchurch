import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schema';
import { slugOnSave } from './sanity/lib/slugOnSave';

export default defineConfig({
  name: 'default',
  title: 'TEAM Church',

  projectId: 'a9nw3auy',
  dataset: 'production',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],

  apiVersion: '2021-11-12',

  schema,
  document: {
    actions: (prev) =>
      prev.map((originalAction) => (originalAction.action === 'publish' ? slugOnSave(originalAction) : originalAction)),
  },
});
