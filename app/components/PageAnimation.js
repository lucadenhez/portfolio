"use client";

import { motion, useScroll, useTransform } from "motion/react";
import SplitText from "../animations/SplitText";
import { useRef } from "react";


export default function PageAnimation({ title, children }) {
    return (
        <div className="relative h-screen">
            <motion.div
                className="fixed inset-0 z-50 bg-black flex"
                initial={{}}
                animate={{ y: "-200%" }}
                transition={{ delay: 0.5, duration: 2, ease: [0.6, 0.01, -0.05, 0.95] }}
            >
                <p className="text-white tracking-tight text-[5rem] grow flex justify-center items-center">{title}</p>
            </motion.div>
            <div className="relative z-0">
                <motion.div>
                    {children}
                </motion.div>
            </div>
        </div>
    );
}
