"use client";

import Image from "next/image";
import Link from "next/link";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const PARALLAX_INTENSITY = 30;

export default function ProjectCard({ title, year, image, viewButtonText }) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"] // Get more practice with this
    });

    const y = useTransform(scrollYProgress, [0, 1], [`-${PARALLAX_INTENSITY}vh`, `${PARALLAX_INTENSITY}vh`]);

    return (
        <motion.div
            className="h-screen relative overflow-hidden"
            ref={container}
        >
            <motion.div style={{ y }} className="absolute inset-0" whileHover={{ scale: 1.1 }}>
                <Image
                    src={image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={`Image of ${title} project`}
                    className="w-full h-full brightness-100"
                />
            </motion.div>
            <Link
                href={`/projects/${title}`}
                className="absolute inset-0 z-10 flex items-center p-10"
            >
                <div className="leading-none">
                    <p className="font-medium text-black bg-white p-5 text-[5rem] tracking-tight">{title}</p>
                    <div className="mt-5 p-5 bg-white w-fit hover:invert transition-all duration-300 ease-in-out">
                        <p className="text-black tracking-tight font-medium uppercase">{viewButtonText}</p>
                    </div>
                </div>

            </Link>
        </motion.div>
    );
}
