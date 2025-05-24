"use client";

import Lenis from "lenis";
import { useEffect } from "react";


export default function SmoothScroll({ children }) {
    useEffect(() => {
        new Lenis({
            autoRaf: true
        });
    }, []);
    
    return (
        <>
            {children}
        </>
    );
}