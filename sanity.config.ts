import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import { defineConfig } from 'sanity'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basepath: '/studio',
  name: 'default',
  title: 'portfolio-ts',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})