import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schema';

export default defineConfig({
  name: 'default',
  title: 'TEAM Church',

  projectId: 'a9nw3auy',
  dataset: 'production',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],

  apiVersion: '2021-11-12',

  schema,
});
