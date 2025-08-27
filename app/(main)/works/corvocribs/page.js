import ArticleHeader from "@/app/(main)/components/article/ArticleHeader";
import Paragraph from "@/app/(main)/components/article/Paragraph";
import ProjectInfo from "@/app/(main)/components/article/ProjectInfo";
import ReturnButton from "@/app/(main)/components/article/ReturnButton";
import PageAnimation from "@/app/(main)/components/transitions/TextTransition";
import ParallaxImage from "@/app/(main)/components/ParallaxImage";
import { useTranslations } from "next-intl";


export default function CorvoCribs() {
    const lang = useTranslations("corvoCribs");

    return (
        <PageAnimation title={lang("transitionMessage")}>
            <div className="mx-15 pt-25 flex flex-col items-center gap-20">
                <ArticleHeader
                    year={2025}
                    month={lang("month")}
                    title="Corvo Cribs"
                />

                <ProjectInfo
                    team={[
                        {
                            name: "Luca Denhez",
                            role: lang("roles.luca"),
                            avatar: "/avatars/luca.png"
                        },
                        {
                            name: "Tristan Goehring",
                            role: lang("roles.tristan"),
                            avatar: "/avatars/tristan.png"
                        },
                        {
                            name: "Ally Chen",
                            role: lang("roles.ally"),
                            avatar: "/avatars/ally.png"
                        },
                    ]}
                    tools={[
                        {
                            name: "React",
                            avatar: "/tools/react.svg"
                        },
                        {
                            name: "Next.js",
                            avatar: "/tools/nextjs.svg"
                        },
                        {
                            name: "Figma",
                            avatar: "/tools/figma.svg"
                        },
                    ]}
                    services={[
                        lang("aspects.productDesign"),
                        lang("aspects.uxUIDesign"),
                        lang("aspects.fullStack")
                    ]}
                />

                <div className="w-full h-screen">
                    <div className="pb-5">
                        <ReturnButton />
                    </div>
                    <ParallaxImage image="/works/corvocribs/cover_white.png" />
                </div>

                <div className="w-2/3 pt-20">
                    <Paragraph title="Status">
                        {
                            `This is currently a work in progress! Check back soon for a finished product...`
                        }
                    </Paragraph>
                </div>

                <div className="h-[20rem] bg-gray-200" />
            </div>
        </PageAnimation>
    );
}
