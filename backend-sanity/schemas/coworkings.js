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
  ],
}
