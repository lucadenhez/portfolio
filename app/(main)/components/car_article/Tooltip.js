"use client";

import Image from "next/image";
import { motion } from "motion/react";

const REST_SIZE = 16;
const HOVER_SIZE = 80;
const ICON_SCALE = 0.4;

export function Tooltip({ x, y, category }) {
  return (
    <motion.button
      onClick={() => { alert(category) }}
      className="absolute flex items-center justify-center overflow-hidden"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {
          width: REST_SIZE,
          height: REST_SIZE,
          borderRadius: "9999px",
          backgroundColor: "#ffffff",
          boxShadow: "none",
          transition: { type: "spring", stiffness: 260, damping: 30 },
          cursor: 0
        },
        hover: {
          width: HOVER_SIZE,
          height: HOVER_SIZE,
          borderRadius: "9999px",
          backgroundColor: "#ffffff",
          boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
          transition: { type: "spring", stiffness: 220, damping: 20 },
          cursor: "pointer"
        },
      }}
    >
      <motion.div
        className="flex items-center justify-center"
        variants={{
          rest: {
            opacity: 0,
            scale: 0.4,
            transition: { duration: 0.12 },
          },
          hover: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 22, delay: 0.05 },
          },
        }}
      >
        <motion.div
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
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
