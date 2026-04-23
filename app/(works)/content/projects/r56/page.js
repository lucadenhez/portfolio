import ArticleHeader from "@/app/(works)/components/article/ArticleHeader";
import Paragraph from "@/app/(works)/components/article/Paragraph";
import ProjectInfo from "@/app/(works)/components/article/ProjectInfo";
import ReturnButton from "@/app/(works)/components/article/ReturnButton";
import PageAnimation from "@/app/(works)/components/transitions/TextTransition";
import ParallaxImage from "@/app/(works)/components/universal/ParallaxImage";
import { useTranslations } from "next-intl";
import ArticleImage from "../../components/article/ArticleImage";
import CandidImage from "../../components/article/CandidImage";
import CandidGallery from "../../components/article/CandidGallery";
import Checklist from "../../components/article/Checklist";
import Keywords from "../../components/article/Keywords";
import ViewButton from "../../components/article/ViewButton";
import CarInfo from "../../components/car_article/CarInfo";
import { mechanicalWorks } from "../../components/car_article/cars_info";
import { Tooltip } from "../../components/car_article/Tooltip";
import ForzaVista from "../../components/car_article/Forzavista";
import Exhaust from "./articles/exhaust/Downpipe";


export default function mini_r56_jcw() {
  const mini = mechanicalWorks[1];

  return (
    <div className="bg-[#ffffff]">
      <PageAnimation title="Not reliable!">
        <div className="mx-5 md:mx-15 pt-25 flex flex-col items-center" id="root">
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

          <div className="w-full">
            <ForzaVista image="/works/r56/banner.jpeg">
              <Tooltip x="93%" y="60%" category="Exhaust">
                
              </Tooltip>
              <Tooltip x="29%" y="54%" category="Exterior">
                
              </Tooltip>
              <Tooltip x="60%" y="37%" category="Interior">
                
              </Tooltip>
              <Tooltip x="65%" y="64%" category="Drivetrain">
              
              </Tooltip>
              <Tooltip x="45%" y="46%" category="Engine">
               
              </Tooltip>
            </ForzaVista>
          </div>

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
    </div>
  );
}
