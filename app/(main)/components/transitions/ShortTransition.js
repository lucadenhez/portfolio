"use client";

import { motion, stagger, animate } from "motion/react";
import { useEffect } from "react";


export default function ShortTransition({ children }) {
    useEffect(() => {
        // If it ain't broke, don't fix it!
        setTimeout(() => {
            window.scrollTo({ top: 0 });
        }, 1000);
    }, []);

    return (
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                >
                    {children}
                </motion.div>
    );
}
