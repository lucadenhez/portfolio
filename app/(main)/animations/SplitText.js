"use client";

import SplitType from "split-type";
import { animate, stagger, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function SplitText({ text, type = "words", ...props }) {
    const ref = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const el = ref.current;
        
        if (!el) return;
        el.style.visibility = "hidden";

        requestAnimationFrame(() => {
            const split = new SplitType(el, {
                types: "lines, words, chars",
                lineClass: "line",
            });

            const toAnimate = {
                lines: split.lines,
                words: split.words,
                chars: split.chars,
            }[type] ?? [];

            if (toAnimate.length > 0) {
                el.style.visibility = "visible"; // reveal once ready
                animate(toAnimate,
                    { opacity: [0, 1], y: ["120%", "0%"] },
                    {
                        duration: 1,
                        delay: stagger(0.05, { startDelay: 0.5 }),
                        ease: "circOut",
                    }
                );
            }

            setReady(true);

            return () => split.revert();
        });
    }, [type, text]);

    return (
        <motion.p
            ref={ref}
            {...props}
            style={{
                overflow: "hidden",
                visibility: ready ? "visible" : "hidden",
            }}
        >
            {text}
        </motion.p>
    );
}
