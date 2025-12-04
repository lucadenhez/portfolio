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
import CarInfo from "../../components/car_article/CarInfo";
import { mechanicalWorks } from "../../works";
import { Tooltip } from "../../components/car_article/Tooltip";
import ForzaVista from "../../components/car_article/Forzavista";


export default function mini_r56_jcw() {
  const mini = mechanicalWorks[1];

  return (
    <PageAnimation title="Not reliable!">
      <div className="mx-5 md:mx-15 pt-25 flex flex-col items-center">

        <div className="mb-20">
          <ArticleHeader
            year={2023}
            month="October"
            title="2011 Mini R56 JCW"
          />
        </div>

        <div className="w-full space-y-5">
          <div className="flex justify-between pb-5">
            <ReturnButton />
          </div>
        </div>

        <CarInfo
          make={mini.make}
          model={mini.model}
          year={mini.year}
          horsepower={mini.horsepower}
          torque={mini.torque}
          transmission={mini.transmission}
          paintCode={mini.paint_code}
          drivetrain={mini.drivetrain}
          forzaClass={mini.forza_class}
        />

        <ForzaVista
          image="/works/r56/banner.jpeg"
          tooltips={[]}
        />

        <div className="mt-20 w-full flex flex-col items-center">
          <Paragraph title="Story">
            {
              `My second car, and first one with forced induction. Work in progress!`
            }
          </Paragraph>

          <div className="h-[10rem]" />

          <div className="flex justify-center">
            <ReturnButton background />
          </div>

          <div className="h-[10rem]" />


        </div>
      </div>
    </PageAnimation>
  );
}
