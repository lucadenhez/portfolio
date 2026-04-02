import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

function parseMonthNumber(month) {
    if (month === undefined || month === null) return 1;
    if (typeof month === "number") return month;

    const asStr = String(month).trim();
    if (!asStr) return 1;

    const asNum = Number(asStr);
    if (!Number.isNaN(asNum)) return asNum;

    const normalized = asStr.toLowerCase();
    const monthMap = {
        jan: 1,
        january: 1,
        feb: 2,
        february: 2,
        mar: 3,
        march: 3,
        apr: 4,
        april: 4,
        may: 5,
        jun: 6,
        june: 6,
        jul: 7,
        july: 7,
        aug: 8,
        august: 8,
        sep: 9,
        sept: 9,
        september: 9,
        oct: 10,
        october: 10,
        nov: 11,
        november: 11,
        dec: 12,
        december: 12,
    };

    return monthMap[normalized] ?? 1;
}

function normalizeProject(slug, data = {}) {
    const fallbackCoverImage = `/works/${slug}/cover.png`;
    const monthNumber = parseMonthNumber(data.month);

    return {
        slug,
        title: data.title ?? slug,
        subtitle: data.subtitle ?? "",
        category: data.category ?? "uiux",
        year: data.year ?? new Date().getFullYear(),
        month: data.month ?? 1,
        monthNumber,
        coverImage: data.coverImage ?? fallbackCoverImage,
        liveUrl: data.liveUrl ?? "",
        team: data.team ?? [],
        tools: data.tools ?? [],
        services: data.services ?? [],
        darkText: data.darkText ?? false,
    };
}

export async function getProjects() {
    const entries = await fs.readdir(projectsDirectory, { withFileTypes: true });
    const projects = [];

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const slug = entry.name;
        const mdxPath = path.join(projectsDirectory, slug, "index.mdx");

        try {
            const raw = await fs.readFile(mdxPath, "utf8");
            const { data } = matter(raw);
            projects.push(normalizeProject(slug, data));
        } catch {
            // Ignore directories without a readable index.mdx.
        }
    }

    return projects.sort((a, b) => {
        const aDate = (a.year ?? 0) * 100 + (a.monthNumber ?? a.month ?? 0);
        const bDate = (b.year ?? 0) * 100 + (b.monthNumber ?? b.month ?? 0);
        return bDate - aDate;
    });
}

export async function getProjectBySlug(slug) {
    const mdxPath = path.join(projectsDirectory, slug, "index.mdx");
    const raw = await fs.readFile(mdxPath, "utf8");
    const { data, content } = matter(raw);

    return {
        ...normalizeProject(slug, data),
        content,
    };
}
