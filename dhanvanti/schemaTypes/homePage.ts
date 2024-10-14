import {defineField, defineType} from 'sanity'

const homeType = defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      type: 'string',
    }),
  ],
})

export default homeType