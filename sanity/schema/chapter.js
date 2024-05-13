const chapter = {
  name: "chapter",
  title: "Chapter",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug/ID",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};

export default chapter;