import {defineField, defineType} from 'sanity'
import { Settings } from '../configTypes/configTypes'

const landingPageSettings = defineType({
  name: Settings.LandingPage,
  title: 'Landing Page Settings',
  description: 'Following settings are content for the landing page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      type: 'string',
    }),
    defineField({
      name: 'actionButton',
      type: 'string',
    }),
  ],
})

export default landingPageSettings