const course = {
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Course Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image hotspot for cropping
        },
      },
      // {
      //   name: 'career',
      //   title: 'Career Path',
      //   type: 'reference',
      //   to: [{ type: 'career' }],
      //   validation: (Rule) => Rule.required(),
      // },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'demoVideo',
        title: 'Demo Video URL',
        type: 'url',
      },
      {
        name: 'chapters',
        title: 'Chapters',
        type: 'array',
        of: [
          {
            type: 'document',
            fields: [
              {
                name: 'chapterName',
                title: 'Chapter Name',
                type: 'string',
              },
              {
                name: 'chapterSlug',
                title: 'Chapter Slug',
                type: 'slug',
                options: {
                  source: 'chapterName',
                  maxLength: 96,
                },
              },
              {
                name: 'chapterDescription',
                title: 'Chapter Description',
                type: 'string',
              },
              {
                name: 'chapterLink',
                title: 'Chapter Link (Optional)',
                type: 'url',
              },
            ],
          },
        ],
      },
    ],
  }
  export default course;