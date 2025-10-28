import ArticleHeader from "@/app/(main)/components/article/ArticleHeader";
import Paragraph from "@/app/(main)/components/article/Paragraph";
import ProjectInfo from "@/app/(main)/components/article/ProjectInfo";
import ReturnButton from "@/app/(main)/components/article/ReturnButton";
import PageAnimation from "@/app/(main)/components/transitions/TextTransition";
import ParallaxImage from "@/app/(main)/components/ParallaxImage";
import { useTranslations } from "next-intl";
import ArticleImage from "../../components/article/ArticleImage";
import CandidImage from "../../components/article/CandidImage";
import CandidGallery from "../../components/article/CandidGallery";
import Checklist from "../../components/article/Checklist";
import Keywords from "../../components/article/Keywords";
import ViewButton from "../../components/article/ViewButton";


export default function CorvoCribs() {
    const lang = useTranslations("corvoCribs");

    return (
        <PageAnimation title={lang("transitionMessage")}>
            <div className="mx-5 md:mx-15 pt-25 flex flex-col items-center gap-20">
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
                            name: "Ally Chen",
                            role: lang("roles.ally"),
                            avatar: "/avatars/ally.png"
                        },
                        {
                            name: "Tristan Goehring",
                            role: lang("roles.tristan"),
                            avatar: "/avatars/tristan.png"
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

                <div className="w-full h-screen space-y-5 mb-20">
                    <div className="flex justify-between pb-5">
                        <ReturnButton />
                    </div>
                    <ParallaxImage image="/works/corvocribs/event/DSC07290.JPG" />
                </div>

                <Paragraph title="Context">
                    {
                        `CorvoCribs is a project I made with friends at Oregon State University's 2025 Hackathon: BeaverHacks.
                            
                            First years at OSU are typically required to live at university-owned dorms on campus. However, the majority of second-years and upperclassmen choose to live off campus in apartments or greek life housing as it is almost always cheaper than the on-campus equivalent.

                            But we were sick of speding MONTHS constantly refrehsing Zillow, Craigslist, and FurnishedFinder. Apartments are competitive, and often the posts aren't accurate and don't reflect the real apartment.
                            `
                    }
                </Paragraph>

                <Paragraph title="Goal">
                    {
                        `Create a free tool for OSU students to make finding housing in Corvallis easier.`
                    }
                </Paragraph>

                <Paragraph title="Existing Tools">
                    {
                        `It's true there are existing websites and apps such as Zillow, Redfin, FurnishedFinder, Craigslist, and Facebook Marketplace.
                        
                        But they have their faults.`
                    }
                </Paragraph>

                <Checklist items={{
                    positive: [
                        "Constant feed of new apartments",
                        "Useful info like beds + baths, pet-friendly, parking, rent cost",
                        "Easy to find contact info",
                        "High quality photos"
                    ],
                    negative: [
                        "Old listings still shown",
                        "Nested links to apartment website, relator website, etc...",
                        "9 month lease not available despite being listed",
                        "Photos not actually of the one listed",
                        "Bad landlords"
                    ]
                }}
                />

                <Paragraph title="Game Plan">
                    {
                        `This was our plan to finish CorvoCribs in 24 hours.`
                    }
                </Paragraph>

                <Keywords keywords={["Design friendly and intituive UI", "Create Express + Node.js API to scrape posts from all providers", "Add AI identification functionality to API", "Link front-end to API"]} />



                <div className="h-screen w-full mt-20 space-y-3">
                    <ParallaxImage image="/works/corvocribs/event/IMG_4860.JPG" />
                    <ParallaxImage image="/works/corvocribs/event/DSC07503.JPG" />

                    <CandidGallery>
                        <CandidImage image="/works/corvocribs/event/IMG_5717.JPG" />
                        <CandidImage image="/works/corvocribs/event/IMG_4901.JPG" />
                    </CandidGallery>
                </div>
                <ParallaxImage image="/works/corvocribs/cover.png" />

                <div className="flex justify-center w-2/3">
                    <ReturnButton background />
                </div>

                <div className="h-[75rem] bg-gray-200" />
            </div>
        </PageAnimation>
    );
}
