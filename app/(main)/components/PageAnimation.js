"use client";

import { motion, useScroll, useTransform, stagger, animate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";


import { useState } from "react";

export default function PageAnimation({ title, randomPrefix = false, children }) {
    const messages = [
        "Sailing the seas to",
        "Teleporting to",
        "Charting a course for",
        "Launching you towards",
        "Opening the portal to",
    ];

    // messages[Math.floor(Math.random() * messages.length)]

    useEffect(() => {
            const splitText = new SplitType(".transition-text", { types: "lines, words, chars", lineClass: "line" }).words;
            const sequence = [
                [splitText,
                    { opacity: 1, y: ["120%", 0] },
                    { duration: 1, delay: stagger(0.1), ease: [0.76, 0, 0.24, 1] }],
                [".page-transition", { y: "-200%" }, { duration: 1.2, ease: [0.76, 0, 0.24, 1] }],
            ];

            animate(sequence);

            // If it ain't broke, don't fix it!
            setTimeout(() => {
                window.scrollTo({ top: 0 });
            }, 1000);
    }, []);

    return (
        <div>
            <div className="page-transition fixed inset-0 z-50 bg-black flex items-center justify-center">
                <p className="m-5 whitespace-pre-line transition-text text-white tracking-tight sm:text-[2rem] text-[1.75rem]">{randomPrefix ? (`${messages[0]} ${title}`) : (title)}</p>
            </div>
            <div className="relative z-0">
                <motion.div>
                    {children}
                </motion.div>
            </div>
        </div>
    );
}
