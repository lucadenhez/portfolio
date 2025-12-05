"use client";

import { useState, useEffect } from "react";
import { Tooltip } from "./Tooltip";
import { MobileTooltip } from "./MobileTooltip";
import ArticleImage from "../article/ArticleImage";
import Image from "next/image";

export default function ForzaVista({ image, tooltips }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width > 768) {
    return (
      <div>
        <div className="translate-y-3 bg-[#111111] w-fit px-5 pt-5 pb-8 z-0 rounded-t-xl flex items-center gap-3">
          <div className="w-5 h-5 overflow-hidden relative">
            <Image
              src="/icons/tap.svg"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 66vw"
              style={{ width: "100%", height: "auto" }}
              alt="Tap icon"
              className="invert-100"
            />
          </div>
          <p className="text-white">Hover over the dots to view categories</p>
        </div>
        <div className="relative w-full h-full">
          <div className="absolute inset-0 z-10">
            {tooltips.map((tooltip, index) => (
              <Tooltip
                x={tooltip.x}
                y={tooltip.y}
                category={tooltip.category}
                key={index}
              />
            ))}
          </div>
          <div className="z-0">
            <ArticleImage image={image} />
          </div>

        </div>

      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 z-10 w-full">
            {tooltips.map((tooltip, index) => (
              <MobileTooltip
                x={tooltip.x}
                y={tooltip.y}
                category={tooltip.category}
                key={index}
              />
            ))}
          </div>
          <div className="z-0">
            <ArticleImage image={image} />
          </div>
        </div>

        <div className="bg-[#111111] w-fit px-5 py-3 z-0 rounded-full flex items-center gap-3">
          <div className="w-4 h-4 overflow-hidden relative">
            <Image
              src="/icons/tap.svg"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 66vw"
              style={{ width: "100%", height: "auto" }}
              alt="Tap icon"
              className="invert-100"
            />
          </div>
          <p className="text-white text-sm">Tap on the categories below</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 w-full">
          {tooltips.map((tooltip, index) => {
            const isLastOdd = tooltips.length % 2 !== 0 && index === tooltips.length - 1;

            return (
              <button
              onClick={() => { alert(tooltip.category) }}
                key={index}
                className={`hover:cursor-pointer rounded-xl py-3 px-5 bg-gray-100 flex gap-5 justify-between items-center ${isLastOdd ? "col-span-2 justify-center" : ""}`}
              >
                <div className="bg-white p-4 rounded-full">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Image
                      src={`/icons/${tooltip.category.toLowerCase()}.svg`}
                      alt={`${tooltip.category} icon`}
                      width={0}
                      height={0}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <p className="font-medium text-sm">{tooltip.category}</p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
