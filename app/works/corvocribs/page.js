import ArticleHeader from "@/app/components/article/ArticleHeader";
import Paragraph from "@/app/components/article/Paragraph";
import ProjectInfo from "@/app/components/article/ProjectInfo";
import ReturnButton from "@/app/components/article/ReturnButton";
import PageAnimation from "@/app/components/PageAnimation";
import ParallaxImage from "@/app/components/ParallaxImage";
import { useTranslations } from "next-intl";

// Title, year, subtitle

// Tools, Team

// 


export default function CorvoCribs() {
    const projectsLang = useTranslations("ui.projects");

    return (
        <PageAnimation title={projectsLang("corvo_cribs")}>
            <div className="mx-5 pt-20 flex flex-col items-center gap-20">
                <ArticleHeader
                    year={2025}
                    month="April"
                    title="Corvo Cribs"
                />

                <ProjectInfo
                    team={[
                        {
                            name: "Luca Denhez",
                            role: "Designer, Developer",
                            avatar: "/avatars/luca.png"
                        },
                        {
                            name: "Tristan Goehring",
                            role: "Designer, Developer",
                            avatar: "/avatars/tristan.png"
                        },
                        {
                            name: "Ally Chen",
                            role: "Designer, Artist",
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
                    services={["Product Design", "UI / UX Design", "Full Stack Development"]}
                />

                <div className="w-full h-screen">
                    <ReturnButton />
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
