"use client";

import { motion } from "motion/react";
import SplitText from "../animations/SplitText";


export default function PageAnimation({ title, children }) {
    return (
        <div className="relative h-screen">
            <motion.div
                className="fixed inset-0 z-50 bg-white flex"
                initial={{}}
                animate={{ y: "-200%" }}
                transition={{ delay: 0.5, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }}
            >
                <p className="tracking-tight  text-5xl grow flex justify-center items-center">{title}</p>
            </motion.div>
            <div className="relative z-0">
                {children}
            </div>
        </div>
    );
}
