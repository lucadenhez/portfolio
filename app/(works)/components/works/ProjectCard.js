"use client";

import Image from "next/image";
import Link from "next/link";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useTransitionRouter } from "next-view-transitions";

const PARALLAX_INTENSITY = 30; // vh

export default function ProjectCard({ title, subtitle, path, year, month, image, darkText = false, viewButtonText }) {
    const [width, setWidth] = useState(0);
    const [baseScale, setBaseScale] = useState(1);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        window.addEventListener("resize", updateWidth);
        updateWidth();
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const router = useTransitionRouter();
    const container = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!container.current) return;

        const el = container.current;
        const rect = el.getBoundingClientRect();
        const containerHeight = rect.height;

        // Convert vh → px
        const pxParallax = (PARALLAX_INTENSITY / 100) * window.innerHeight;

        // Required scale so full image stays covered even at ±parallax
        const requiredScale = 1 + (pxParallax * 2) / containerHeight;

        // Store computed scale (plus a tiny safety margin)
        setBaseScale(requiredScale + 0.05);
    }, [width]);

    // hover scale is slightly larger
    const hoverScale = baseScale + 0.08;

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [`-${PARALLAX_INTENSITY}vh`, `${PARALLAX_INTENSITY}vh`]
    );

    // Desktop
    if (true) {
        return (
            <motion.div
                className="h-[40rem] relative overflow-hidden rounded-xl"
                ref={container}
            >
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-10"
                    animate={{ scale: hovered ? hoverScale : 1 }}
                    transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div
                        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                        className="w-full h-full"
                    >
                        <Image
                            src={image}
                            fill
                            style={{ objectFit: "cover", scale: 1.1 }}
                            alt={`Image of ${title} project`}
                            className="w-full h-full"
                            quality={100}
                        />
                    </motion.div>
                </motion.div>

                <Link
                    href={path}
                    className="absolute inset-0 z-10 flex items-end justify-start"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push(path);
                    }}
                    style={{ color: darkText ? "#000000" : "#ffffff" }}
                >
                    <div className="w-full flex justify-between items-end gap-2 px-5 pt-12 pb-5">
                        <div className="space-y-1 mb-5">
                            <p className="text-2xl leading-[1.1] tracking-tight font-medium">{title}</p>
                            <p className="text-md tracking-tight leading-tight">{subtitle}</p>
                        </div>
                        <svg className="w-7 h-7 rotate-[-45deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke={darkText ? "#000000" : "#ffffff"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </div>
                </Link>
            </motion.div>
        );
    }

    // static image for mobile
    return (
        <div
            className="h-[25rem] relative overflow-hidden rounded-xl"
            ref={container}
        >
            <div className="absolute inset-0 z-10">
                <Image
                    src={image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={`Image of ${title} project`}
                    className="w-full h-full"
                    quality={100}
                />
            </div>

            <Link
                href={path}
                className="absolute inset-0 z-10 flex flex-col items-start justify-between"
                onClick={(e) => {
                    e.preventDefault();
                    router.push(path);
                }}
                style={{ color: darkText ? "#000000" : "#ffffff" }}
            >
                <div className="p-5 w-full flex justify-between">
                    <svg className="w-5 h-5 rotate-[-45deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke={darkText ? "#000000" : "#ffffff"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    <p className="text-sm">{`${month} ${year}`}</p>
                </div>

                <div className="w-full flex flex-col gap-2 px-5 pt-12 pb-7">
                    <div className="">
                        <p className="text-2xl leading-[1.1] tracking-tight font-medium">{title}</p>
                        <p className="text-[0.8rem] tracking-tight leading-tight">{subtitle}</p>
                    </div>


                </div>
            </Link>
        </div>
    );
}
