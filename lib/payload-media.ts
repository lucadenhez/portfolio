import fs from "node:fs/promises";
import path from "node:path";

import type { Payload } from "payload";

const uploadedByPath = new Map<string, string>();

function publicPathToFilePath(publicPath: string): string | null {
  if (!publicPath || typeof publicPath !== "string") return null;
  if (!publicPath.startsWith("/")) return null;

  const decoded = decodeURIComponent(publicPath);
  return path.join(process.cwd(), "public", decoded.replace(/^\//, ""));
}

export async function uploadFromPublicPath(
  payload: Payload,
  publicPath: string,
  alt: string,
): Promise<string | null> {
  const cached = uploadedByPath.get(publicPath);
  if (cached) return cached;

  const filePath = publicPathToFilePath(publicPath);
  if (!filePath) return null;

  try {
    await fs.access(filePath);
  } catch {
    console.warn(`  Skipped missing file: ${publicPath}`);
    return null;
  }

  const media = await payload.create({
    collection: "media",
    data: { alt: alt || path.basename(filePath) },
    filePath,
  });

  uploadedByPath.set(publicPath, media.id);
  console.log(`  Uploaded media: ${publicPath}`);
  return media.id;
}

export function resetUploadCache() {
  uploadedByPath.clear();
}
