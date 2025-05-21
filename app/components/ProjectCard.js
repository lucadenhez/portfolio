"use client";

import Image from "next/image";
import Link from "next/link";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const PARALLAX_INTENSITY = 30;

export default function ProjectCard({ title, path, year, image, viewButtonText }) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"] // Get more practice with this
    });

    const y = useTransform(scrollYProgress, [0, 1], [`-${PARALLAX_INTENSITY}vh`, `${PARALLAX_INTENSITY}vh`]);

    return (
        <motion.div
            className="h-[50rem] relative overflow-hidden"
            ref={container}
        >
            <motion.div style={{ y }} className="absolute inset-0" whileHover={{ scale: 1.1 }}>
                <Image
                    src={image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={`Image of ${title} project`}
                    className="w-full h-full brightness-[90%]"
                    quality={100}
                />
            </motion.div>
            <Link
                href={path}
                className="absolute inset-0 z-10 flex items-center p-10 sm:justify-start justify-center"
            >
                <motion.div
                    className="flex items-center gap-1 bg-white px-5 py-2 rounded-xl"
                    whileHover={{ opacity: 0.5, scale: 0.98 }}
                >
                    <p className="text-black text-2xl">{title}</p>
                    <svg className="w-5 h-5 rotate-[-45deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </motion.div>
            </Link>
        </motion.div>
    );
}
