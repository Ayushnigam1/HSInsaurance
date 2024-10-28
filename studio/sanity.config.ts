import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { setEngine } from 'crypto'
import { Settings } from './configTypes/configTypes'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set([Settings.LandingPage])

export default defineConfig({
  name: 'default',
  title: 'Dhanvanti',

  projectId: 'ebxjdnxu',
  dataset: 'production',
  basePath: '/studio',

  plugins: [structureTool({
    structure: (S) => S.list().title("Content").items([
      S.listItem()
        .title(Settings.LandingPage)
        .id(Settings.LandingPage)
        .child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document()
            .title('Landing Page Settings')
            .schemaType(Settings.LandingPage)
            .documentId(Settings.LandingPage)
        ),
        S.documentTypeListItem("Insurance"),
        S.documentTypeListItem("Plan"),
        S.documentTypeListItem("Feature"),
    ])
  }), visionTool()],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType as Settings)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType as Settings)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },

})
