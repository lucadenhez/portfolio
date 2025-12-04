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
  paintCode,
  drivetrain,
  forzaClass,
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
              style={{
                objectFit: "cover",
                objectPosition: "50% 70%"
              }}
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
    <div className="h-[35rem] relative overflow-hidden rounded-xl">
      <Link
        href={path}
        onClick={(e) => {
          e.preventDefault();
          router.push(path);
        }}
      >
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
              style={{
                objectFit: "cover",
                objectPosition: "50% 70%"
              }}
              alt={`Image of Luca's ${make} ${model}.`}
              className="w-full h-full mask-t-from-75%"
              quality={100}
            />
            <div className="bg-[#111111] w-full h-full z-0" />
          </div>
        </div>
        <div className="p-5 absolute z-10 flex justify-between w-full items-center rounded-xl">
          <div className="flex gap-1 items-end">
            <p className="text-white text-2xl">{`${year} ${make} ${model}`}</p>
            <svg
              className="mb-[3px] w-6 h-6 rotate-[-45deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>

          <div className="flex gap-3 items-center">
            <p className="text-white text-xl">{transmission}</p>
            <div className="h-7">
              <Image src={`/icons/${forzaClass}.png`}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ width: "auto", height: "100%" }}
                alt="Drivetrain icon"
              />
            </div>
            <div className="h-[1.69rem]">
              <Image src={`/icons/${drivetrain}.png`}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ width: "auto", height: "100%" }}
                alt="Drivetrain icon"
              />
            </div>
          </div>
        </div>
        <div className="p-5 bottom-0 absolute z-10 flex justify-between items-end w-full">
          <div className="flex flex-col gap-3 w-full">
            <p className="text-white text-2xl">{`${horsepower} bhp · ${torque} nm`}</p>
          </div>
          <div className="text-right w-full">
            <p className="text-white text-2xl">{paintCode}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}