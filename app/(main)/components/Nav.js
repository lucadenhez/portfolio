"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTransitionRouter } from "next-view-transitions";


export default function Nav({ items }) {
    const router = useTransitionRouter();

    // ALWAYS USE CURLY BRACES FOR useScroll. I assume because there is scrollX and scrollY.
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-150%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white dark:invert flex justify-between items-start fixed top-0 left-0 w-full z-40 box-border"
            style={{ padding: "inherit", margin: "inherit" }}
        >
            <div>
                <Link href="/" onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                }}>
                    <motion.p whileHover={{ opacity: 0.25, cursor: "pointer" }} className="text-black">Luca Denhez</motion.p>
                </Link>
                <LanguageSwitcher />
            </div>

            <div className="text-right">
                {items.map((item, index) => (
                    <Link href={item.path} key={index} onClick={(e) => {
                        e.preventDefault();
                        if (item.outside) {
                            window.open(item.path, "_blank");
                        } else {
                            router.push(item.path);
                        }
                    }}>
                        {item.outside ? (
                            <motion.div
                                className="text-black flex items-center justify-end gap-1"
                                whileHover={{ opacity: 0.25, cursor: "pointer" }}
                            >
                                <p className="text-black/50">{item.label}</p>
                                <svg className="w-4 h-4 rotate-[-45deg] opacity-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </motion.div>
                        ) : (
                            <motion.p
                                whileHover={{ opacity: 0.25, cursor: "pointer" }}
                                className={isActive(item.path) ? "text-black" : "text-black/50"}
                            >{item.label}</motion.p>
                        )}
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
