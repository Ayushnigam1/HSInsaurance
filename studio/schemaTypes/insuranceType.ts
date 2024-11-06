import {defineField, defineType} from 'sanity'

const insuranceType = defineType({
  name: 'Insurance',
  title: 'Insurances',
  type: 'document',
  fields: [
    defineField({
      name: 'iconimage',
      type: 'image',
    }),
    defineField({
      name: 'insurance',
      type: 'string',
    }),
    defineField({
      name: 'order',
      type: 'number'
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
  ],
})

export default insuranceType