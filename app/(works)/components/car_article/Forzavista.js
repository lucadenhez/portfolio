"use client";

import { useState, useEffect, Children } from "react";
import ArticleImage from "../article/ArticleImage";
import Image from "next/image";
import TooltipButton from "./TooltipButton";

export default function ForzaVista({ image, children }) {
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
            {children}
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
            {children}
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
          {Children.map(children, (child, index) => {
            const childrenCount = Children.count(children);
            const isLast = childrenCount % 2 !== 0 && index === childrenCount - 1;

            const category = child?.props?.category;
            const articles = child?.props?.articles;
            const icon = child?.props?.icon;

            return (
              <TooltipButton category={category} isLast={isLast} articles={articles} icon={icon} />
            );
          })}
        </div>
      </div>
    );
  }
}
