const PAYLOAD_FILE_PREFIX = "/api/media/file/";

function getBlobBaseUrl() {
  if (process.env.STORAGE_VERCEL_BLOB_BASE_URL) {
    return process.env.STORAGE_VERCEL_BLOB_BASE_URL.replace(/\/$/, "");
  }

  const storeId = process.env.BLOB_READ_WRITE_TOKEN?.match(
    /^vercel_blob_rw_([a-z\d]+)_/i,
  )?.[1]?.toLowerCase();

  if (!storeId) return "";
  return `https://${storeId}.public.blob.vercel-storage.com`;
}

export function resolveMediaUrl(url) {
  if (!url || typeof url !== "string") return url;
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("data:") ||
    url.startsWith("blob:")
  ) {
    return url;
  }

  if (!url.startsWith(PAYLOAD_FILE_PREFIX)) return url;

  const baseUrl = getBlobBaseUrl();
  if (!baseUrl) return url;

  const filename = decodeURIComponent(
    url.slice(PAYLOAD_FILE_PREFIX.length).split("?")[0],
  );
  if (!filename) return url;

  return `${baseUrl}/${encodeURIComponent(filename)}`;
}

export function resolveMediaUrlsInText(text) {
  if (!text || typeof text !== "string") return text;

  return text.replace(/\/api\/media\/file\/[^\s)"']+/g, (match) =>
    resolveMediaUrl(match),
  );
}
