"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { animate, stagger } from "motion";

export default function ScrollText({ children, type = "words", delay = 0, ...props }) {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        textRef.current.style.opacity = "1";

        let split;

        if (type === "words") {
            split = new SplitType(textRef.current, { types: "lines, words", lineClass: "line" });
            animate(split.words,
                { y: ["100%", 0] },
                {
                    duration: 2,
                    delay: stagger(0.05, { startDelay: delay }),
                    ease: [0.16, 1, 0.3, 1]
                }
            );
        }

        else if (type === "chars") {
            split = new SplitType(textRef.current, { types: "lines, words, chars", lineClass: "line" });
            animate(split.chars,
                { y: ["100%", 0] },
                {
                    duration: 2,
                    delay: stagger(0.05, { startDelay: delay }),
                    ease: [0.16, 1, 0.3, 1]
                }
            );
        }

        else if (type === "lines") {
            split = new SplitType(textRef.current, { types: "lines, words", lineClass: "line" });
            animate(split.words,
                { y: ["100%", 0] },
                {
                    duration: 2,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1]
                }
            )
        }

        return () => split.revert();
    }, [children, type]);

    return (
        <p ref={textRef} style={{ opacity: 0 }} {...props}>
            {children}
        </p>
    );
}
