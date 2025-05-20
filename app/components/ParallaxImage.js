"use client";

import Image from "next/image";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const PARALLAX_INTENSITY = 30;

export default function ParallaxImage({ image }) {
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
            <motion.div style={{ y }} className="absolute inset-0">
                <Image
                    src={image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt="Image of project"
                    className="w-full h-full brightness-100"
                    quality={100}
                />
            </motion.div>
        </motion.div>
    );
}
