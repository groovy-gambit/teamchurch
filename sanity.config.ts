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
  plugins: [
    deskTool({
      name: 'content',
      title: 'Content',
      structure: (S) =>
        S.list()
          .title('Content')
          .items([...S.documentTypeListItems().filter((listItem) => !['page'].includes(listItem.getId() ?? ''))]),
      defaultDocumentNode: (S) => S.document().views([S.view.form()]),
    }),
    deskTool({
      name: 'pages',
      title: 'Pages',
      structure: (S) => S.documentTypeList('page'),
      defaultDocumentNode: (S) => S.document().views([S.view.form()]),
    }),
    visionTool(),
  ],

  apiVersion: '2021-11-12',

  schema,
  document: {
    actions: (prev) =>
      prev.map((originalAction) => (originalAction.action === 'publish' ? slugOnSave(originalAction) : originalAction)),
  },
});
