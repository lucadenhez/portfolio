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

    const images = {
        "works": "/landing/bluff.jpeg",
        "playground": "/landing/osu_dorm.jpeg"
    };

    const [currentImage, setCurrentImage] = useState("works");

    return (
        <PageAnimation randomPrefix={false} title={lang("transitionMessage")}>
            <div className="mx-5 sm:mx-15 flex sm:flex-row flex-col sm:items-center items-start justify-between">
                <div className="pr-15 flex sm:justify-center justify-end flex-col sm:h-screen h-[50vh] sm:pb-0 pb-5">
                    <div>
                        <div className="pb-5">
                            <LanguageSwitcher />
                        </div>

                        <div>
                            <Link
                                href="/works"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/works");
                                }}
                                onMouseOver={() => {
                                    setCurrentImage("works")
                                }}
                            >
                                <motion.div
                                    className="flex w-fit gap-3 items-end font-medium tracking-tighter text-[3rem]"
                                    whileHover={{ x: 5, opacity: 0.5 }}
                                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                >
                                    <p className="p-0 m-0 leading-none">{lang("worksCard")}</p>
                                    <ArrowIcon />
                                </motion.div>
                            </Link>
                            <Link
                                href="/playground"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/playground");
                                }}
                                onMouseOver={() => {
                                    setCurrentImage("playground")
                                }}
                            >
                                <motion.div
                                    className="flex w-fit gap-3 items-end font-medium tracking-tighter text-[3rem]"
                                    whileHover={{ x: 5, opacity: 0.5 }}
                                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                >
                                    <p className="p-0 m-0 leading-none">{lang("playgroundCard")}</p>
                                    <ArrowIcon />
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-h-[75vh] sm:max-w-[60vw] max-w-full overflow-hidden rounded-xl">
                    <Image src={images[currentImage]}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, 66vw"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        alt="Photo of Luca"
                    />
                </div>
            </div>
        </PageAnimation >
    );
}
