
"use client";

import ArticleHeader from "../../../components/article/ArticleHeader";
import Paragraph from "../../../components/article/Paragraph";
import ReturnButton from "../../../components/article/ReturnButton";
import PageAnimation from "../../../components/transitions/TextTransition";
import ArticleImage from "../../../components/article/ArticleImage";
import CarInfo from "../../../components/car_article/CarInfo";
import { mechanicalWorks } from "../../../components/car_article/cars_info";
import { Tooltip } from "../../../components/car_article/Tooltip";
import ForzaVista from "../../../components/car_article/Forzavista"
import { articles } from "./articles/articles";


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

        <div className="w-full">
          <ForzaVista image="/works/135i/forzavista.jpeg">
            {articles.map((articleCategory, index) => (
              <Tooltip
                x={articleCategory.x}
                y={articleCategory.y}
                category={articleCategory.category}
                icon={articleCategory.icon}
                articles={articleCategory.articles}
                key={index}
              />
            ))}
          </ForzaVista>
        </div>

        <div className="mt-20 w-full flex flex-col gap-20 items-center">
          <Paragraph title="Story">
            {
              `I purchased this car from Copart, a salvage car lot where insurance companies send totaled cars. From working on the Mini, I had grown to realize how much I liked working on cars, and specifically the BMW family with all the VANOS, Valvetronic and cool efficency technology.
              
              I wanted to do more engine work, and since these cars often go for quite a bit, in the $12,000 - $22,000 range, I wanted to find a more cost effective route as a college student.
              
              I had heard of Copart from car repair YouTubers like Matt Armstrong and was always inspired by how they could take such a broken car, and use their knowledge to repair it and get it back on the road.
              
              I found a blue 135i, manual, with the N55. It said the primary damage was mechanical. But what does that mean? Does that mean a rod punched a hole through the block requiring a new engine, or does that mean the flimsy integrated PCV diaphgram blew in the valve cover and I just need a new one?
              
              I knew nothing about this car. I viewed it in person for 20 minutes. I won the bid for $4,100. I replaced the transmission. Now it's on the road registered with a rebuilt title and is my commuter.
              
              I look forward to keeping this car for the years to come as my dual duty daily and german project car. 💙🚙`
            }
          </Paragraph>

          <ArticleImage image="/works/135i/banner.jpg" />

          <div className="flex justify-center">
            <ReturnButton background />
          </div>

          <div className="h-[5rem]" />

        </div>
      </div>
    </PageAnimation>
  );
}
