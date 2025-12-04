"use client";

import Image from "next/image";
import Link from "next/link";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useTransitionRouter } from "next-view-transitions";

const PARALLAX_INTENSITY = 30; // vh

export default function ProjectCard({ title, path, year, image, viewButtonText }) {
    const [width, setWidth] = useState(0);
    const [baseScale, setBaseScale] = useState(1.2);

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

    // hover scale is just slightly larger
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
    if (width > 768) {
        return (
            <motion.div
                className="sm:h-[50rem] h-[10rem] relative overflow-hidden rounded-xl"
                ref={container}
            >
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-10"
                    animate={{ scale: hovered ? hoverScale : baseScale }}
                    transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div
                        animate={hovered ? { filter: "blur(5px)" } : { filter: "blur(0px)" }}
                        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                        className="w-full h-full"
                    >
                        <Image
                            src={image}
                            fill
                            style={{ objectFit: "cover" }}
                            alt={`Image of ${title} project`}
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
                        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                        whileHover={{ backgroundColor: "#f7f7f7", scale: 1.27 }}
                    >
                        <p className="text-black text-2xl">{title}</p>
                        <svg className="w-5 h-5 rotate-[-45deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </motion.div>
                </Link>
            </motion.div>
        );
    }

    // static image for mobile
    return (
        <div className="sm:h-[50rem] h-[35rem] relative overflow-hidden rounded-xl">
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
                className="absolute inset-0 z-10 flex items-center p-10 justify-center"
                onClick={(e) => {
                    e.preventDefault();
                    router.push(path);
                }}
            >
                <div className="flex items-center gap-1 bg-white px-5 py-2 rounded-xl">
                    <p className="text-black text-2xl">{title}</p>
                    <svg className="w-5 h-5 rotate-[-45deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </div>
            </Link>
        </div>
    );
}
