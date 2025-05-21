"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";


export default function Nav({ items }) {
    const [locale, setLocale] = useState("");

    const lang = useTranslations("nav");

    const navItems = [
        {
            label: lang("works"),
            path: "/ui"
        },
        {
            label: lang("resume"),
            path: "https://drive.google.com/file/d/1NkNNd8anpsazWsdjcZxsyFWvMHu63pOJ/view?usp=sharing",
            outside: true,
        },
        {
            label: lang("about"),
            path: "/about"
        },
    ];

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
            className="bg-white flex justify-between items-start fixed top-0 left-0 w-full z-50 box-border"
            style={{ padding: "inherit", margin: "inherit" }}
        >
            <div>
                <Link href="/">
                    <motion.p whileHover={{ opacity: 0.25, cursor: "pointer" }}>Luca Denhez</motion.p>
                </Link>
                <LanguageSwitcher locale={locale} setLocale={setLocale} />
            </div>

            <div className="text-right">
                {navItems.map((item, index) => (
                    <Link href={item.path} key={index} target={item.outside ? "_blank" : ""}>
                        {item.outside ? (
                            <motion.div
                                className="flex items-center gap-1"
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
