export default {
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
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
      name: 'weekdaysHour',
      title: 'WeekdaysHour',
      type: 'number',
    },
    {
      name: 'weekdaysDay',
      title: 'WeekdaysDay',
      type: 'number',
    },
    {
      name: 'weekendsHour',
      title: 'WeekendsHour',
      type: 'number',
    },
    {
      name: 'weekendsDay',
      title: 'WeekendsDay',
      type: 'number',
    },
  ],
}
