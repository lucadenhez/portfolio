"use client";

import PageAnimation from "./(main)/components/transitions/TextTransition";
import Link from "next/link";
import Image from "next/image";
import { useTransitionRouter } from "next-view-transitions";
import { motion } from "motion/react";
import LanguageSwitcher from "./(main)/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import ArrowIcon from "./(main)/components/icons/ArrowIcon";
import { useState } from "react";


export default function Home() {
    const router = useTransitionRouter();
    const lang = useTranslations("home");

    const [works, setWorks] = useState(false);
    const [playground, setPlayground] = useState(false);

    return (
        <PageAnimation randomPrefix={false} title={lang("transitionMessage")}>
            <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between">
                <div className="flex sm:justify-center justify-end flex-col sm:h-screen h-[50vh] sm:pb-0 pb-5">
                    <div className="mx-5 sm:mx-15">
                        <div className="pb-5">
                            <LanguageSwitcher />
                        </div>

                        <div className="flex flex-col">
                            <Link
                                href="/works"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/works");
                                }}
                                onMouseOver={() => setWorks(true)}
                                onMouseLeave={() => setWorks(false)}
                            >
                                <div
                                    className="leading-none font-medium tracking-tight sm:text-[10rem] text-[3rem]">
                                    <p className="p-0 m-0 leading-none text-black dark:text-white hover:invert">{lang("worksCard")}</p>
                                </div>
                            </Link>
                            <Link
                                href="/playground"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/playground");
                                }}
                                onMouseOver={() => setPlayground(true)}
                                onMouseLeave={() => setPlayground(false)}
                            >
                                <div className="sm:-translate-y-5 translate-y-0 leading-none font-medium tracking-tight sm:text-[10rem] text-[3rem]">
                                    <p className="p-0 m-0 leading-none text-black dark:text-white hover:invert">{lang("playgroundCard")}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <motion.div
                    className="absolute h-full w-full -z-10 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={works ? { opacity: 1, scale: 1 } : undefined}
                    transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                >
                    <Image
                        src="/works/honesty/mockups/front_iphone.png"
                        width={1920}
                        height={1080}
                        sizes="(max-width: 768px) 100vw, 66vw"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            imageRendering: "auto"
                        }}
                        alt="Photo of a project"
                        priority
                        quality={90}
                    />
                </motion.div>

                <motion.div
                    className="absolute h-full w-full -z-10 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={playground ? { opacity: 1, scale: 1 } : undefined}
                    transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
                >
                    <Image
                        src="/landing/works.jpeg"
                        width={1920}
                        height={1080}
                        sizes="(max-width: 768px) 100vw, 66vw"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            imageRendering: "auto"
                        }}
                        alt="Photo of a project"
                        priority
                        quality={90}
                    />
                </motion.div>
            </div>
        </PageAnimation >
    );
}
