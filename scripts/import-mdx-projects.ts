import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { getPayload } from "payload";

import config from "../payload.config";
import { resetUploadCache, uploadFromPublicPath } from "../lib/payload-media";

const projectsDirectory = path.join(
  process.cwd(),
  "app",
  "(works)",
  "content",
  "projects",
);

type Frontmatter = {
  title?: string;
  subtitle?: string;
  category?: "uiux" | "automotive";
  year?: number;
  month?: string | number;
  coverImage?: string;
  liveUrl?: string;
  darkText?: boolean;
  team?: Array<{ name?: string; avatar?: string }>;
  tools?: Array<{ name?: string; avatar?: string }>;
  services?: string[] | Array<{ service?: string }>;
};

async function findMdxFiles(): Promise<Array<{ slug: string; mdxPath: string }>> {
  const entries = await fs.readdir(projectsDirectory, { withFileTypes: true });
  const results: Array<{ slug: string; mdxPath: string }> = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const slug = entry.name;
    const candidates = ["index.mdx", "index_WIP.mdx"];

    for (const filename of candidates) {
      const mdxPath = path.join(projectsDirectory, slug, filename);
      try {
        await fs.access(mdxPath);
        results.push({ slug, mdxPath });
        break;
      } catch {
        // Try next candidate.
      }
    }
  }

  return results;
}

function normalizeServices(
  services: Frontmatter["services"],
): Array<{ service: string }> {
  if (!services?.length) return [];

  return services
    .map((entry) => {
      if (typeof entry === "string") return { service: entry };
      if (entry?.service) return { service: entry.service };
      return null;
    })
    .filter(Boolean) as Array<{ service: string }>;
}

async function buildTeam(
  payload: Awaited<ReturnType<typeof getPayload>>,
  team: Frontmatter["team"],
) {
  if (!team?.length) return [];

  const results = [];

  for (const member of team) {
    if (!member?.name) continue;

    const avatarId = member.avatar
      ? await uploadFromPublicPath(
          payload,
          member.avatar,
          `${member.name} avatar`,
        )
      : null;

    results.push({
      name: member.name,
      ...(avatarId ? { avatar: avatarId } : {}),
    });
  }

  return results;
}

async function buildTools(
  payload: Awaited<ReturnType<typeof getPayload>>,
  tools: Frontmatter["tools"],
) {
  if (!tools?.length) return [];

  const results = [];

  for (const tool of tools) {
    if (!tool?.name) continue;

    const avatarId = tool.avatar
      ? await uploadFromPublicPath(payload, tool.avatar, `${tool.name} icon`)
      : null;

    results.push({
      name: tool.name,
      ...(avatarId ? { avatar: avatarId } : {}),
    });
  }

  return results;
}

async function importProject(
  payload: Awaited<ReturnType<typeof getPayload>>,
  slug: string,
  mdxPath: string,
  force: boolean,
) {
  const raw = await fs.readFile(mdxPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as Frontmatter;

  if (!frontmatter.title || !frontmatter.subtitle || !frontmatter.category) {
    console.warn(`Skipping ${slug}: missing required frontmatter fields.`);
    return;
  }

  const existing = await payload.find({
    collection: "projects",
    where: { slug: { equals: slug } },
    limit: 1,
  });

  if (existing.docs.length > 0 && !force) {
    console.log(`Skipping ${slug}: already exists in Payload (use --force to update).`);
    return;
  }

  console.log(`Importing ${slug} from ${path.relative(process.cwd(), mdxPath)}`);

  const coverImageId = frontmatter.coverImage
    ? await uploadFromPublicPath(
        payload,
        frontmatter.coverImage,
        `${frontmatter.title} cover`,
      )
    : null;

  if (!coverImageId) {
    console.warn(`  Warning: no cover image uploaded for ${slug}.`);
  }

  const projectData = {
    slug,
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    category: frontmatter.category,
    year: frontmatter.year ?? new Date().getFullYear(),
    month: frontmatter.month ?? "Jan",
    coverImage: coverImageId,
    liveUrl: frontmatter.liveUrl ?? undefined,
    darkText: frontmatter.darkText ?? false,
    rawMdx: content.trim(),
    team: await buildTeam(payload, frontmatter.team),
    tools: await buildTools(payload, frontmatter.tools),
    services: normalizeServices(frontmatter.services),
  };

  const context = { skipMdxSync: true };

  if (existing.docs.length > 0) {
    await payload.update({
      collection: "projects",
      id: existing.docs[0].id,
      data: projectData,
      context,
    });
    console.log(`  Updated project "${slug}"`);
    return;
  }

  await payload.create({
    collection: "projects",
    data: projectData,
    context,
  });
  console.log(`  Created project "${slug}"`);
}

async function main() {
  const force = process.argv.includes("--force");

  resetUploadCache();

  const payload = await getPayload({ config });
  const mdxFiles = await findMdxFiles();

  if (mdxFiles.length === 0) {
    console.log("No MDX project files found.");
    process.exit(0);
  }

  console.log(`Found ${mdxFiles.length} project(s) to import.\n`);

  for (const { slug, mdxPath } of mdxFiles) {
    await importProject(payload, slug, mdxPath, force);
  }

  console.log("\nDone. Open /admin → Projects to review imported entries.");
  console.log(
    "Article bodies were stored in Raw MDX to preserve math, formatting, and any custom JSX.",
  );

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
