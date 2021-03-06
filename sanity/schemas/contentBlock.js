export default {
  name: "contentBlock",
  title: "Content Block",
  type: "object",
  fields: [
    {
      name: "cover",
      title: "Cover",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};
