import ArticleHeader from "@/app/components/article/ArticleHeader";
import CodeBlock from "@/app/components/article/CodeBlock";
import ProjectInfo from "@/app/components/article/ProjectInfo";
import ParallaxImage from "@/app/components/ParallaxImage";

// Title, year, subtitle

// Tools, Team

// 


export default function CorvoCribs() {
    return (
        <div className="mx-5 pt-20 flex flex-col items-center gap-20">
            <ArticleHeader
                year={2025}
                title="Corvo Cribs"
            />

            <div className="w-full h-screen">
                <ParallaxImage image="/works/honesty/cover_laptop.png" />
            </div>

            <ProjectInfo
                team={[
                    {
                        name: "Luca Denhez",
                        role: "Designer, Developer",
                        avatar: "/avatars/luca.jpg"
                    },
                    {
                        name: "Tristan Goehring",
                        role: "Designer, Developer",
                        avatar: "/avatars/luca.jpg"
                    },
                    {
                        name: "Ally Chen",
                        role: "Designer, Artist",
                        avatar: "/avatars/luca.jpg"
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
                services={["Product Design", "UI / UX Design", "Web Development", "User Authentication"]}
            />

            <div className="h-[40rem] bg-gray-200" />
        </div>
    );
}
