import { defineConfig as Config } from 'sanity'

import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default Config({
  name: 'default',
  title: 'portfolio-ts',

  projectId: 'dq4r9x61',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
