"use client";

import Image from "next/image";
import Link from "next/link";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useTransitionRouter } from "next-view-transitions";

const PARALLAX_INTENSITY = 20;

function getSafeScale(imageRatio, containerRatio, parallaxIntensity) {
  const shift = parallaxIntensity * 2;
  const buffer = 0.15;

  if (imageRatio > containerRatio) {
    // Image is wider → height is limiting
    return 1 + shift / 100 + buffer;
  } else {
    // Image is taller → width is limiting (needs FAR less zoom)
    return 1 + shift / 140 + buffer / 2;
  }
}

export default function CarCard({
  make,
  model,
  year,
  horsepower,
  torque,
  transmission,
  drivetrain,
  path,
  image
}) {
  const [width, setWidth] = useState(0);
  const [naturalSize, setNaturalSize] = useState(null);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const router = useTransitionRouter();
  const container = useRef(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${PARALLAX_INTENSITY}vh`, `${PARALLAX_INTENSITY}vh`]
  );

  // Approx container ratio: 50rem height / full width (~1:2)
  const containerRatio = 50 / 100;

  const safeScale = naturalSize
    ? getSafeScale(
        naturalSize.width / naturalSize.height,
        containerRatio,
        PARALLAX_INTENSITY
      )
    : 1.3; // fallback before image loads

  if (width > 768) {
    return (
      <motion.div
        className="sm:h-[50rem] h-[10rem] relative overflow-hidden rounded-xl"
        ref={container}
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-10"
          animate={hovered ? { scale: safeScale - 0.05 } : { scale: safeScale }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            animate={hovered ? { filter: "blur(5px)" } : { filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              src={image}
              fill
              onLoadingComplete={(img) =>
                setNaturalSize({
                  width: img.naturalWidth,
                  height: img.naturalHeight
                })
              }
              style={{ objectFit: "cover" }}
              alt={`Image of Luca's ${make} ${model}.`}
              className="w-full h-full"
              quality={100}
            />
          </motion.div>
        </motion.div>

        <Link
          href={path}
          className="absolute inset-0 z-10 flex items-center p-10 justify-center"
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={(e) => {
            e.preventDefault();
            router.push(path);
          }}
        >
          <motion.div
            className="flex items-center gap-1 bg-white px-5 py-2 rounded-xl"
            initial={{ opacity: 0 }}
            animate={hovered ? { opacity: 1, scale: 1.3 } : { opacity: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            whileHover={{ backgroundColor: "#f7f7f7", scale: 1.27 }}
          >
            <p className="text-black text-2xl">{`${year} ${make} ${model}`}</p>
            <svg
              className="w-5 h-5 rotate-[-45deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    );
  }

  // -----------------------
  // MOBILE VERSION (unchanged)
  // -----------------------
  return (
    <div className="sm:h-[50rem] h-[10rem] relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-10">
        <div style={{ width: "100%", height: "100%" }}>
          <Image
            src={image}
            fill
            onLoadingComplete={(img) =>
              setNaturalSize({
                width: img.naturalWidth,
                height: img.naturalHeight
              })
            }
            style={{ objectFit: "cover" }}
            alt={`Image of Luca's ${make} ${model}.`}
            className="w-full h-full"
            quality={100}
          />
        </div>
      </div>

      <Link
        href={path}
        className="absolute inset-0 z-10 flex items-center p-10 justify-center"
        onClick={(e) => {
          e.preventDefault();
          router.push(path);
        }}
      >
        <div className="flex items-center gap-1 bg-white px-5 py-2 rounded-xl">
          <p className="text-black text-2xl">{`${year} ${make} ${model}`}</p>
          <svg
            className="w-5 h-5 rotate-[-45deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}