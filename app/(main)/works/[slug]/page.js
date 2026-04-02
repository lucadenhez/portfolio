import { notFound } from "next/navigation";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import withToc from "@stefanprobst/rehype-extract-toc";

import { getLocale, getTranslations } from "next-intl/server";

import ArticleHeader from "@/app/(main)/components/article/ArticleHeader";
import ReturnButton from "@/app/(main)/components/article/ReturnButton";
import ViewButton from "@/app/(main)/components/article/ViewButton";
import PageAnimation from "@/app/(main)/components/transitions/TextTransition";
import { mdxComponents } from "@/lib/mdx-components";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import ProjectInfo from "../../components/article/ProjectInfo";
import TableOfContents from "../../components/TableOfContents";


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
        rehypePlugins: [
            rehypeKatex,
            withToc,
        ],
    });

    const headers = compiled.data.toc;

    const { default: MdxContent } = await run(compiled, {
        ...runtime,
        baseUrl: import.meta.url,
    });

    return (
        <PageAnimation title={project.title}>
            <div className="p-5 md:p-15 flex flex-col gap-y-5">
                <div className="w-full sm:w-2/3 flex justify-between">
                    <ReturnButton />
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
                <div className="flex justify-between gap-20 lg:mx-20 mx-0">
                    <article className="w-full pb-20">
                        <MdxContent components={mdxComponents} lang={lang} />
                    </article>
                    <div className="hidden sm:block sticky top-10 self-start max-w-1/5">
                        <TableOfContents headers={headers} />
                    </div>
                </div>
                <div className="w-full flex justify-between lg:px-20 px-0">
                    <ReturnButton />
                </div>
            </div>
        </PageAnimation>
    );
}
