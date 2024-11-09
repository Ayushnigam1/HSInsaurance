import {defineField, defineType} from 'sanity'
import {Settings} from '../configTypes/configTypes'

const landingPageSettings = defineType({
  name: Settings.SiteSettingPage as string,
  title: 'Site Settings',
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
      name: 'bannerimage',
      type: 'image',
    }),
    defineField({
      name: 'backgroundimage',
      type: 'image',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'link',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'Link',
              type: 'url',
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'YouTube', value: 'youtube'},
                ],
              },
            }),
          ],
        }),
      ],
    }),
  ],
})

export default landingPageSettings
