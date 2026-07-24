import type { Block } from "payload";

function getUploadUrl(value: unknown): string {
  if (!value || typeof value !== "object" || !("url" in value)) return "";
  const url = (value as { url?: string | null }).url;
  return url ?? "";
}

export const ArticleImageBlock: Block = {
  slug: "ArticleImage",
  labels: {
    singular: "Article Image",
    plural: "Article Images",
  },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
    },
  ],
  jsx: {
    export: ({ fields }) => ({
      props: {
        image: getUploadUrl(fields.image),
        ...(fields.subtitle ? { subtitle: fields.subtitle } : {}),
      },
    }),
    import: ({ props }) => ({
      subtitle: props?.subtitle ?? "",
    }),
  },
};

export const CandidImageBlock: Block = {
  slug: "CandidImage",
  labels: {
    singular: "Candid Image",
    plural: "Candid Images",
  },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
  jsx: {
    export: ({ fields }) => ({
      props: {
        image: getUploadUrl(fields.image),
      },
    }),
    import: () => ({}),
  },
};

export const ParallaxImageBlock: Block = {
  slug: "ParallaxImage",
  labels: {
    singular: "Parallax Image",
    plural: "Parallax Images",
  },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
  jsx: {
    export: ({ fields }) => ({
      props: {
        image: getUploadUrl(fields.image),
      },
    }),
    import: () => ({}),
  },
};

export const mdxComponentBlocks = [
  ArticleImageBlock,
  CandidImageBlock,
  ParallaxImageBlock,
];
