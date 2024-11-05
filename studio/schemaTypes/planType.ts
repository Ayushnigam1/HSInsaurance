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
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [{ title: "Bold", value: "strong" }, { title: "Italic", value: "em" }],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                ],
              },
            ],
          },
        },
      ],
    },)
  ],
})

export default planType