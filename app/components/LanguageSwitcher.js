"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";


export default function LanguageSwitcher({ locale, setLocale }) {
    // const [locale, setLocale] = useState("");
    const router = useRouter();

    useEffect(() => {
        const cookieLocale = document.cookie
            .split("; ")
            .find((row) => row.startsWith("LOCALE"))
            ?.split("=")[1];

        if (cookieLocale) {
            console.log(`Current locale is ${cookieLocale}.`);
            setLocale(cookieLocale)
        } else {
            console.log("Can't find cookie")
            const browserLocale = navigator.language.slice(0, 2);
            setLocale(browserLocale);
            document.cookie = `LOCALE=${browserLocale};`;
            router.refresh();
        }
    }, [router, locale]);

    return (
        <div className="flex gap-1">
            <motion.p
                whileHover={{ opacity: 0.25, cursor: "pointer" }}
                className={locale == "fr" ? "text-black" : "text-black/50"}
                onClick={() => {
                    setLocale("fr");
                    document.cookie = "LOCALE=fr;";
                    router.refresh();
                }}
            >FR</motion.p>
            <p>/</p>
            <motion.p
                whileHover={{ opacity: 0.25, cursor: "pointer" }}
                className={locale == "en" ? "text-black" : "text-black/50"}
                onClick={() => {
                    setLocale("en");
                    document.cookie = "LOCALE=en;";
                    router.refresh();
                }}
            >EN</motion.p>
        </div>
    );
}
