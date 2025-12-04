"use client";

export function MobileTooltip({ x, y, label }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 
                 flex items-center justify-center
                 rounded-full bg-white text-black
                 text-xs font-medium cursor-pointer
                 uppercase leading-none whitespace-nowrap
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
