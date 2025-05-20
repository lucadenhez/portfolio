
"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const INTENSITY = 75;

export default function ParallaxImage({ path, rounded = false }) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [`-${INTENSITY}vh`, `${INTENSITY}vh`]);

    return (
        <div ref={container} className={ "relative h-screen overflow-hidden" + (rounded ? " rounded-3xl" : "") }>
            <motion.div style={{ y }} className="h-full">
                <img className="object-cover w-full h-full" src={path} alt="Parallax Image" />
            </motion.div>
        </div>
    );
}