"use client";

import ProjectCard from "../components/ProjectCard";
import works from ".";
import { useTranslations } from "next-intl";
import ShortTransition from "../components/transitions/ShortTransition";
import Image from "next/image";
import { isMobile } from 'react-device-detect';
import { motion, useAnimation } from "motion/react";
import ScrollText from "../components/animations/ScrollText";
import { useEffect, useState } from "react";


const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.4, // controls delay between children
            delayChildren: 1.5,   // initial delay before first child
        },
    },
};

const child = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.5,      // controls bounciness
            duration: 1.2,    // controls speed of each child
        },
    }
};

export default function Works() {
    const controls = useAnimation();
    const [floating, setFloating] = useState(false);

    useEffect(() => {
        controls.start("show").then(() => {
            setFloating(true);
        });
    }, [controls]);

    const lang = useTranslations("ui");
    const navLang = useTranslations("nav");

    return (
        <ShortTransition>
            <div className="mx-15 my-10">
                <main className="pt-30">
                    <div className="flex justify-center">
                        <div className="flex flex-col sm:gap-5 gap-10 items-center">
                            <motion.div
                                className="flex justify-between relative mt-10 mb-30"
                                variants={container}
                                initial="hidden"
                                animate={controls}
                            >

                                <motion.p
                                    variants={child}
                                    className="z-0 sm:text-[5rem] md:text-[7rem] lg:text-[12rem] text-[3rem] text-center font-medium tracking-tighter leading-none"
                                >Luca Denhez</motion.p>

                                <motion.div
                                    variants={child}
                                    animate={floating ? { rotate: [0, -3, 0, 3], y: [0, -8, 0, 8, 0], x: [0, 4, 0, -4, 0] } : undefined}
                                    transition={floating ? { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0 } : undefined}
                                    className="absolute top-0 left-0 h-fit sm:text-md md:text-xl lg:text-2xl text-sm z-10 -rotate-5 -translate-x-25 -translate-y-15  w-fit px-5 py-3 border-2 rounded-2xl bg-red-400"
                                >
                                    <p>Studying CS & Design @ SU</p>
                                </motion.div>

                                <motion.div
                                    variants={child}
                                    animate={floating ? { rotate: [0, -3, 0, 3], y: [0, 6, -6, 0], x: [0, -3, 3, 0] } : undefined}
                                    transition={floating ? { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0 } : undefined}
                                    className="flex gap-5 absolute bottom-0 right-0 h-fit sm:text-md md:text-xl lg:text-2xl text-sm z-10 -rotate-5 translate-x-35 translate-y-5 w-fit px-5 py-3 border-2 rounded-2xl bg-amber-200"
                                >
                                    <p>Probably opening Pokémon booster packs...</p>
                                </motion.div>
                            </motion.div>

                            <div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 3, duration: 0.5 }}
                                    className="text-4xl opacity-0"
                                >Hi! I'm Luca Denhez. I'm a undergraduate student at <span className="text-red-700 dark:text-red-400">{lang("university")}</span> studying Computer Science 💻 and Design 🎨 .</motion.p>
                            </div>
                        </div>
                    </div>

                    <div className="py-10" id="works">
                        <p className="pb-5">{lang("works")}</p>

                        {works.map((project, index) => (
                            <div className="pb-5" key={index}>
                                <ProjectCard
                                    title={lang(`projects.${project.langTitle}`)}
                                    path={project.path}
                                    year={project.year}
                                    image={project.image}
                                    viewButtonText={lang("projectViewButton")}
                                />
                            </div>
                        ))}
                    </div>
                </main>
            </div >
        </ShortTransition >
    );
}
