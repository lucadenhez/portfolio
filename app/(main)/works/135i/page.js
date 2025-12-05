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


export default function bmw_135i() {
  const bmw = mechanicalWorks[0];

  return (
    <PageAnimation title="14 miles per gallon on a good day">
      <div className="mx-5 md:mx-15 pt-15 flex flex-col items-center">

        <div className="mb-20">
          <ArticleHeader
            year={2025}
            month="June"
            title="2011 BMW 135i"
          />
        </div>

        <div className="w-full space-y-5">
          <div className="flex justify-between pb-5">
            <ReturnButton />
          </div>
        </div>

        <CarInfo
          make={bmw.make}
          model={bmw.model}
          year={bmw.year}
          horsepower={bmw.horsepower}
          torque={bmw.torque}
          transmission={bmw.transmission}
          paintCode={bmw.paint_code}
          drivetrain={bmw.drivetrain}
          forzaClass={bmw.forza_class}
        />

        <ArticleImage image="/works/135i/banner.jpg" />

        <div className="mt-20 w-full flex flex-col gap-20 items-center">
          <Paragraph title="Story">
            {
              `I purchased this car from Copart, a salvage car lot where insurance companies send totaled cars. From working on the Mini, I had grown to realize how much I liked working on cars, and specifically the BMW family with all the VANOS, Valvetronic and cool efficency technology.
              
              I wanted to do more engine work, and since these cars often go for quite a bit, in the $12,000 - $22,000 range, I wanted to find a more cost effective route as a college student.
              
              I was scrolling through Copart one day and found a blue 135i, manual, with the facelift engine: the N55. The interior looked pretty good, and it said the primary damage was mechanical. First, what does mechanical mean? Does that mean a rod punched a hole through the block, or does that mean a VANOS solenoid is clogged?
              
              I knew nothing about this car. I ran a Carfax, insurance approved the car, I didn't hear anything bad when starting the car for the 30 minutes I was allowed to see it, and I somehow won the bid.
              
              This car is a miracle. And what's even more of a miracle is that the damage was a faulty reverse gear. New transmission, and it is as good as new.
              
              I look forward to keeping this car for the years to come as my dual duty daily and german project car.`
            }
          </Paragraph>

          <Paragraph
            title="Maintenance & Upgrades"
            color="#ffceb0"
          >
            {
              `I've played Forza my entire childhood and always loved Forzavista. It was an interactive way to view info about a car by clicking on different areas, showing upgrades and revealing parts.
                
              I thought it would be fun to re-create that essence to document the work I've done on my car.`
            }
          </Paragraph>

          <div className="w-full">
            <ForzaVista
              image="/works/135i/forzavista.jpeg"
              tooltips={[
                { x: "22%", y: "39%", category: "Engine" },
                { x: "30%", y: "66%", category: "Drivetrain" },
                { x: "72%", y: "30%", category: "Exterior" },
                { x: "88%", y: "62%", category: "Exhaust" },
                { x: "53%", y: "55%", category: "Interior" }
              ]}
            />
          </div>

          <div className="flex justify-center">
            <ReturnButton background />
          </div>

          <div className="h-[5rem]" />

        </div>
      </div>
    </PageAnimation>
  );
}
