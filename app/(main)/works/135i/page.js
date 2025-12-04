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


export default function bmw_135i() {
    return (
        <PageAnimation title="14 miles per gallon on a good day">
            <div className="mx-5 md:mx-15 pt-25 flex flex-col items-center gap-20">
                <ArticleHeader
                    year={2025}
                    month="June"
                    title="2011 BMW 135i"
                />

                <div className="w-full h-screen space-y-5 mb-20">
                    <div className="flex justify-between pb-5">
                        <ReturnButton />
                    </div>
                </div>

                <Paragraph title="Context">
                    {
                        `Work in progress!`
                    }
                </Paragraph>

                <div className="flex justify-center w-2/3">
                    <ReturnButton background />
                </div>

                <div className="h-[75rem] bg-gray-200" />
            </div>
        </PageAnimation>
    );
}
