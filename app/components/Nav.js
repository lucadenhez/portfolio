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
            path: "/resume"
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
                <p>Luca Denhez</p>
                <LanguageSwitcher locale={locale} setLocale={setLocale} />
            </div>

            <div className="text-right">
                {navItems.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <motion.p
                            whileHover={{ opacity: 0.25, cursor: "pointer" }}
                            className={isActive(item.path) ? "text-black" : "text-black/30"}
                        >{item.label}</motion.p>
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
