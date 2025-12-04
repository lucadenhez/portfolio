"use client";

import { useState, useEffect } from "react";
import { Tooltip } from "./Tooltip";
import { MobileTooltip } from "./MobileTooltip";
import ArticleImage from "../article/ArticleImage";

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
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-10">
          {tooltips.map((tooltip, index) => (
            <Tooltip
              x={tooltip.x}
              y={tooltip.y}
              label={tooltip.label}
              key={index}
            />
          ))}
        </div>
        <div className="z-0">
          <ArticleImage image={image} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="relative w-full h-full">
          <div className="absolute inset-0 z-10">
            {tooltips.map((tooltip, index) => (
              <MobileTooltip
                x={tooltip.x}
                y={tooltip.y}
                label={index + 1}
                key={index}
              />
            ))}
          </div>
          <div className="z-0">
            <ArticleImage image={image} />
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {tooltips.map((tooltip, index) => (
            <div className="rounded-xl p-5 bg-gray-100 w-full flex justify-between items-center" key={index}>
              <div
                className="
                 rounded-full bg-white text-black
                 text-s font-medium cursor-pointer
                 uppercase leading-none whitespace-nowrap
                 px-4 pt-4 pb-3"
              >
                {index + 1}
              </div>
              <p className="font-medium">{tooltip.label}</p>
              <svg
                className="mb-[3px] w-5 h-5 rotate-[-45deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
