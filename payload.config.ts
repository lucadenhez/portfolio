import { mongooseAdapter } from "@payloadcms/db-mongodb";
import {
  BlocksFeature,
  HeadingFeature,
  lexicalEditor,
  UploadFeature,
} from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";

import { mdxComponentBlocks } from "./blocks/mdx-components";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { Categories } from "./collections/Categories";

const projectRoot = process.cwd();

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: projectRoot,
    },
  },
  collections: [Users, Media, Projects, Categories],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
      UploadFeature({
        collections: {
          media: {
            fields: [],
          },
        },
      }),
      BlocksFeature({
        blocks: mdxComponentBlocks,
      }),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(projectRoot, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        media: {
          disablePayloadAccessControl: true,
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
      clientUploads: true,
    }),
  ],
});
