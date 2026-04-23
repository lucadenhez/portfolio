import ArticleHeader from "../../../components/article/ArticleHeader";
import Paragraph from "../../../components/article/Paragraph";
import ReturnButton from "../../../components/article/ReturnButton";
import PageAnimation from "../../../components/transitions/TextTransition";
import CarInfo from "../../../components/car_article/CarInfo";
import { mechanicalWorks } from "../../../components/car_article/cars_info";
import { Tooltip } from "../../../components/car_article/Tooltip";
import ForzaVista from "../../../components/car_article/Forzavista"


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
