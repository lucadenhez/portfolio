import { createHash } from "node:crypto";
import { writeFile } from "node:fs/promises";
import path from "node:path";

function importIdentifier(exportName: string, componentPath: string) {
  return `${exportName}_${createHash("md5").update(componentPath).digest("hex")}`;
}

const components = [
  {
    importFrom: "@payloadcms/next/rsc",
    exportName: "CollectionCards",
  },
  {
    importFrom: "@payloadcms/storage-vercel-blob/client",
    exportName: "VercelBlobClientUploadHandler",
  },
];

const imports = components.map(({ importFrom, exportName }) => {
  const identifier = importIdentifier(exportName, importFrom);
  return {
    key: `${importFrom}#${exportName}`,
    identifier,
    importLine: `import { ${exportName} as ${identifier} } from '${importFrom}'`,
  };
});

const importLines = imports.map(({ importLine }) => importLine).join("\n");
const mapEntries = imports
  .map(({ key, identifier }) => `  '${key}': ${identifier},`)
  .join("\n");

const contents = `${importLines}

/** @type import('payload').ImportMap */
export const importMap = {
${mapEntries}
}
`;

const importMapPath = path.resolve(
  process.cwd(),
  "app/(payload)/admin/importMap.js",
);

async function main() {
  await writeFile(importMapPath, contents);
  console.log(`Wrote ${importMapPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
