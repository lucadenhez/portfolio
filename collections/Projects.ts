import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "category", "year", "updatedAt"],
    description:
      'Saving a project writes app/(works)/content/projects/<slug>/index.mdx. Images upload to Vercel Blob and embed in the article.',
  },
  hooks: {
    afterChange: [
      async ({ doc, req, context }) => {
        if (context?.skipMdxSync) return;

        const { syncProjectToMdx } = await import("../lib/sync-project-mdx");

        const populated = await req.payload.findByID({
          collection: "projects",
          id: doc.id,
          depth: 2,
          req,
        });

        await syncProjectToMdx(populated, req);
      },
    ],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Overview",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "slug",
              type: "text",
              required: true,
              unique: true,
              index: true,
              admin: {
                description:
                  'Folder and URL slug (e.g. "speakers" → /works/speakers). Pick carefully — changing it creates a new folder.',
              },
            },
            {
              name: "subtitle",
              type: "textarea",
              required: true,
            },
            {
              type: "row",
              fields: [
                {
                  name: "category",
                  type: "relationship",
                  relationTo: "categories",
                  required: true,
                  admin: {
                    description: "Select an existing category or click '+' to create a new one.",
                  },
                },
                {
                  name: "year",
                  type: "number",
                  required: true,
                  defaultValue: () => new Date().getFullYear(),
                },
                {
                  name: "month",
                  type: "text",
                  required: true,
                  admin: {
                    description: 'Shown on cards, e.g. "Jan" or "March".',
                  },
                },
              ],
            },
            {
              name: "coverImage",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "liveUrl",
              type: "text",
              admin: {
                description: "Optional link to a live demo or external write-up.",
              },
            },
            {
              name: "darkText",
              type: "checkbox",
              defaultValue: false,
              admin: {
                description: "Use dark text on the works card overlay.",
              },
            },
          ],
        },
        {
          label: "Article",
          fields: [
            {
              name: "content",
              type: "richText",
              admin: {
                description:
                  "Write the project article here. Use the image button to embed photos from the Media library.",
              },
            },
            {
              name: "rawMdx",
              type: "textarea",
              admin: {
                description:
                  "Optional override for the article body. When set, this replaces the rich text export — useful for math ($$), CandidGallery, Checklist, or any custom MDX/JSX not available as an editor block.",
              },
            },
          ],
        },
        {
          label: "Credits",
          fields: [
            {
              name: "team",
              type: "array",
              fields: [
                {
                  name: "name",
                  type: "text",
                  required: true,
                },
                {
                  name: "avatar",
                  type: "upload",
                  relationTo: "media",
                },
              ],
            },
            {
              name: "tools",
              type: "array",
              fields: [
                {
                  name: "name",
                  type: "text",
                  required: true,
                },
                {
                  name: "avatar",
                  type: "upload",
                  relationTo: "media",
                },
              ],
            },
            {
              name: "services",
              type: "array",
              fields: [
                {
                  name: "service",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
