const course = {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Course Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isPopular',
      title: 'isPopular',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'image',
      title: 'Course Thumbnail',
      type: 'image',
      options: {
        hotspot: true, 
      },
    },
    {
      name: "chapter",
      title: "Chapter",
      type: "array",
      // to:[{type:"chapter"}]
      of: [{ type: "reference", to: [{ type: "chapter" }] }],
    },
  ],
};

export default course;
