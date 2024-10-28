import {defineField, defineType} from 'sanity'

const featureType = defineType({
  name: 'Feature',
  title: 'Features',
  type: 'document',
  fields: [
    defineField({
      name: 'feature',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
  ],
})

export default featureType