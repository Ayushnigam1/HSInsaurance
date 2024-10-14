import {defineField, defineType} from 'sanity'

const planType = defineType({
  name: 'Plan',
  title: 'Plans',
  type: 'document',
  fields: [
    defineField({
      name: 'plan',
      type: 'string',
    }),
    defineField({
        name: 'insuranceType',
        type: 'reference',
        to: {
            type: 'Insurance',
        }
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
  ],
})

export default planType