"use client";

import Image from "next/image";

const REST_SIZE = 16;
const HOVER_SIZE = 30;
const ICON_SCALE = 0.5;

export function MobileTooltip({ x, y, category }) {
  return (
    <button
      onClick={() => { alert(category) }}
      className="bg-white p-3 rounded-full absolute flex items-center justify-center overflow-hidden"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          width: `${HOVER_SIZE * ICON_SCALE}px`,
          height: `${HOVER_SIZE * ICON_SCALE}px`,
        }}
        className="flex items-center justify-center"
      >
        <Image
          src={`/icons/${category.toLowerCase()}.svg`}
          alt={`${category} icon`}
          width={HOVER_SIZE * ICON_SCALE}
          height={HOVER_SIZE * ICON_SCALE}
          className="w-full h-full"
        />
      </div>
    </button>
  );
}
