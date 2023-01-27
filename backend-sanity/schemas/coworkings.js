export default {
  name: 'coworkings',
  title: 'Coworkings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'info',
      title: 'Info',
      type: 'array',
      of: [
        {
          name: 'subway',
          title: 'Subway',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'icon',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
        {
          name: 'street',
          title: 'Street',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'icon',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'icon',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
          ],
        },
        {
          name: 'mail',
          title: 'Mail',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'icon',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
