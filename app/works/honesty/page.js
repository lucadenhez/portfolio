import ArticleHeader from "@/app/components/article/ArticleHeader";
import Coding from "@/app/components/article/Coding";
import Paragraph from "@/app/components/article/Paragraph";
import ProjectInfo from "@/app/components/article/ProjectInfo";
import ReturnButton from "@/app/components/article/ReturnButton";
import ParallaxImage from "@/app/components/ParallaxImage";

/*

Context
Research


*/


export default function Honesty() {
    return (
        <div className="mx-5 pt-20 flex flex-col items-center gap-20">
            <ArticleHeader
                year={2025}
                title="Honesty"
            />

            <ProjectInfo
                team={[
                    {
                        name: "Luca Denhez",
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

            <div className="w-full h-screen mb-20">
                <ReturnButton />
                <ParallaxImage image="/works/honesty/cover_laptop.png" />
            </div>

            <Paragraph
                title="Context"
                color="#dbeafe"
                content="When looking for a secondhand car on Craigslist, Facebook Marketplace, or OfferUp, I always run into the same problem. Scams. Maybe the cars odometer has been rolled back, the 'hood just won't latch' problem was actually a front-end collision. You never know. The best way to learn about the history of a vehicle is with a VIN report, like Carfax. However, Carfax does not account for any work done independantly without a shop, and costs money for each report."
            />

            <Paragraph
                title="Research"
                color="#fef3c7"
                content="When looking for a secondhand car on Craigslist, Facebook Marketplace, or OfferUp, I always run into the same problem. Scams. Maybe the cars odometer has been rolled back, the 'hood just won't latch' problem was actually a front-end collision. You never know. The best way to learn about the history of a vehicle is with a VIN report, like Carfax. However, Carfax does not account for any work done independantly without a shop, and costs money for each report."
            />

            <div className="h-[20rem] bg-gray-200" />
        </div>
    );
}
