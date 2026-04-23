"use client";

import { animate } from "motion/react";
import { useEffect } from "react";


export default function ShortTransition({ children }) {
    useEffect(() => {
        animate(".page-transition", { y: ["-25%", "0%"], scale: ["95%", "100%"], opacity: ["0%", "100%"] }, { duration: 1.2, ease: [0.76, 0, 0.24, 1] });
        
        // If it ain't broke, don't fix it!
        setTimeout(() => {
            window.scrollTo({ top: 0 });
        }, 1000);
    }, []);

    return (
        <div className="page-transition opacity-0">
            {children}
        </div>
    );
}
