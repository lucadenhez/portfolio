import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import type { PayloadRequest } from "payload";

const projectsDirectory = path.join(
  process.cwd(),
  "app",
  "(works)",
  "content",
  "projects",
);

type MediaValue =
  | {
      url?: string | null;
    }
  | string
  | number
  | null
  | undefined;

function getMediaUrl(value: MediaValue): string {
  if (!value) return "";
  if (typeof value === "object" && "url" in value && value.url) {
    return value.url;
  }
  return "";
}

type ProjectDoc = {
  slug?: string | null;
  title?: string | null;
  subtitle?: string | null;
  category?: "uiux" | "automotive" | null;
  year?: number | null;
  month?: string | number | null;
  coverImage?: MediaValue;
  liveUrl?: string | null;
  darkText?: boolean | null;
  content?: Record<string, unknown> | null;
  rawMdx?: string | null;
  team?: Array<{
    name?: string | null;
    avatar?: MediaValue;
  }> | null;
  tools?: Array<{
    name?: string | null;
    avatar?: MediaValue;
  }> | null;
  services?: Array<{
    service?: string | null;
  }> | null;
};

async function richTextToMdx(
  content: Record<string, unknown> | null | undefined,
  req: PayloadRequest,
): Promise<string> {
  if (!content?.root) return "";

  const { convertLexicalToMarkdown, editorConfigFactory } = await import(
    "@payloadcms/richtext-lexical"
  );

  const editorConfig = await editorConfigFactory.default({
    config: req.payload.config,
  });

  return convertLexicalToMarkdown({
    data: content,
    editorConfig,
  });
}

function buildFrontmatter(doc: ProjectDoc) {
  const coverImage = getMediaUrl(doc.coverImage);

  const team =
    doc.team
      ?.map((member) => {
        const avatar = getMediaUrl(member.avatar);
        if (!member.name) return null;
        return avatar
          ? { name: member.name, avatar }
          : { name: member.name };
      })
      .filter(Boolean) ?? [];

  const tools =
    doc.tools
      ?.map((tool) => {
        const avatar = getMediaUrl(tool.avatar);
        if (!tool.name) return null;
        return avatar ? { name: tool.name, avatar } : { name: tool.name };
      })
      .filter(Boolean) ?? [];

  const services =
    doc.services?.map((entry) => entry.service).filter(Boolean) ?? [];

  const frontmatter: Record<string, unknown> = {
    title: doc.title,
    subtitle: doc.subtitle,
    category: doc.category,
    year: doc.year,
    month: doc.month,
    coverImage,
    darkText: doc.darkText ?? false,
  };

  if (doc.liveUrl) frontmatter.liveUrl = doc.liveUrl;
  if (team.length > 0) frontmatter.team = team;
  if (tools.length > 0) frontmatter.tools = tools;
  if (services.length > 0) frontmatter.services = services;

  return frontmatter;
}

export async function syncProjectToMdx(
  doc: ProjectDoc,
  req: PayloadRequest,
): Promise<void> {
  if (!doc.slug) {
    throw new Error("Project slug is required to sync MDX.");
  }

  const slug = doc.slug.trim();
  if (!slug) {
    throw new Error("Project slug is required to sync MDX.");
  }

  const body =
    doc.rawMdx?.trim() ||
    (await richTextToMdx(doc.content ?? undefined, req));

  const frontmatter = buildFrontmatter(doc);
  const mdx = matter.stringify(body, frontmatter);

  const projectDir = path.join(projectsDirectory, slug);
  const mdxPath = path.join(projectDir, "index.mdx");

  await fs.mkdir(projectDir, { recursive: true });
  await fs.writeFile(mdxPath, mdx, "utf8");

  req.payload.logger.info(
    `Synced project "${slug}" to ${path.relative(process.cwd(), mdxPath)}`,
  );
}
