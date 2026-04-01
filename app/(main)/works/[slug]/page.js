import { notFound } from "next/navigation";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import { getLocale, getTranslations } from "next-intl/server";

import ArticleHeader from "@/app/(main)/components/article/ArticleHeader";
import ReturnButton from "@/app/(main)/components/article/ReturnButton";
import ViewButton from "@/app/(main)/components/article/ViewButton";
import PageAnimation from "@/app/(main)/components/transitions/TextTransition";
import { mdxComponents } from "@/lib/mdx-components";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import ProjectInfo from "../../components/article/ProjectInfo";

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectArticlePage({ params }) {
    const { slug } = await params;

    let project;
    try {
        project = await getProjectBySlug(slug);
    } catch {
        notFound();
    }

    const locale = await getLocale();
    let t = null;
    try {
        // Optional: only works if you have a matching namespace in your `messages/*.json`.
        t = await getTranslations(project.slug);
    } catch {
        t = null;
    }

    const lang = (key) => {
        if (!key) return "";
        if (key === "month") return monthLabel;
        if (!t) return key;
        try {
            return t(key);
        } catch {
            return key;
        }
    };

    const compiled = await compile(project.content, {
        outputFormat: "function-body",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    });

    const { default: MdxContent } = await run(compiled, {
        ...runtime,
        baseUrl: import.meta.url,
    });

    return (
        <PageAnimation title={project.title}>
            <div className="p-5 md:p-15 flex flex-col gap-y-5">
                <div className="w-full sm:w-2/3 flex justify-between">
                    <ReturnButton />
                    {project.liveUrl ? <ViewButton url={project.liveUrl} /> : null}
                </div>

                <ArticleHeader
                    year={project.year}
                    month={project.month}
                    title={project.title}
                />
            </div>


            <div className="mx-5 md:mx-15 pt-5 gap-y-10 flex flex-col items-center">
                <ProjectInfo
                    team={project.team}
                    tools={project.tools}
                    services={project.services}
                />

                <article className="w-full sm:w-2/3 pb-20">
                    <MdxContent components={mdxComponents} lang={lang} />
                </article>

                <div className="w-full sm:w-2/3 flex justify-between">
                    <ReturnButton />
                    {project.liveUrl ? <ViewButton url={project.liveUrl} /> : null}
                </div>
            </div>
        </PageAnimation>
    );
}
