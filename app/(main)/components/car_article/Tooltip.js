"use client";

export function Tooltip({ x, y, label }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 
                 flex items-center justify-center
                 border-2 border-white text-white
                 sm:text-sm text-xs font-medium cursor-pointer
                 hover:bg-white hover:text-black hover:scale-105 transition-all
                 ease-in-out duration-150 uppercase leading-none whitespace-nowrap
                 px-3 pt-3 pb-2"
      style={{
        left: x,
        top: y,
      }}
    >
      {label}
    </div>
  );
}
