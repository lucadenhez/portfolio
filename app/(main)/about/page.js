"use client";


import Image from "next/image";
import InlineLink from "../components/article/InlineLink";
import Paragraph from "../components/article/Paragraph";
import { useTranslations } from "next-intl";
import PageAnimation from "../components/PageAnimation";
import { motion } from "motion/react";


export default function About() {
    const lang = useTranslations("about");
    const navLang = useTranslations("nav");
    return (
        <PageAnimation randomPrefix title={navLang("about")}>
            <div className="mx-5 mt-30">
                <div className="flex flex-col-reverse items-center gap-20">
                    <div className="flex sm:flex-row flex-col translate-x-5 w-[70vw]">
                        <motion.div
                            className="w-full h-full overflow-hidden rounded-3xl rotate-3 shadow-md"
                            whileHover={{ y: -10, scale: 1.01 }}
                        >
                            <Image src="/avatars/luca_uncropped.png"
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, 66vw"
                                style={{ width: "100%", height: "auto" }}
                                alt="Photo of Luca"
                            />
                        </motion.div>
                        <motion.div
                            className="z-10 -translate-x-15 translate-y-20 w-full h-full overflow-hidden rounded-3xl -rotate-4 shadow-md"
                            whileHover={{ y: -10, scale: 1.01 }}
                        >
                            <Image src="/images/doggies.png"
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, 66vw"
                                style={{ width: "100%", height: "auto" }}
                                alt="Photo of my silken windhound doggies"
                            />
                        </motion.div>
                    </div>

                    <div className="gap-10 flex flex-col sm:flex-row sm:text-left justify-between sm:items-start items-center sm:w-3/4 w-full">
                        <p className="flex whitespace-pre-line sm:w-3/4 w-full">{lang("bio")}</p>

                        <div className="flex flex-col sm:items-start items-center">
                            <InlineLink label="Linkedin" url="https://linkedin.com/in/lucadenhez" />
                            <InlineLink label="Github" url="https://github.com/lucadenhez" />
                            <InlineLink label="Instagram" url="https://instagram.com/lucadenhez" />
                        </div>
                    </div>
                </div>

                <div className="h-[10rem]" />
            </div>
        </PageAnimation>
    );
}
