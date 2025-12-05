"use client";

import ProjectCard from "../components/ProjectCard";
import { designWorks, mechanicalWorks } from ".";
import { useTranslations } from "next-intl";
import ShortTransition from "../components/transitions/ShortTransition";
import Image from "next/image";
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import CarCard from "../components/CarCard";

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
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        window.addEventListener("resize", updateWidth);
        updateWidth();
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const controls = useAnimation();
    const [floating, setFloating] = useState(false);

    useEffect(() => {
        controls.start("show").then(() => {
            setFloating(true);
        });
    }, [controls]);

    const lang = useTranslations("works");
    const navLang = useTranslations("nav");

    return (
        <ShortTransition>
            <div className="mx-5 my-0 md:mx-25 md:my-10">
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
                                    className="z-0 sm:text-[4rem] md:text-[5.5rem] lg:text-[8.25rem] text-[3.25rem] text-center font-medium tracking-tighter leading-none"
                                >Luca Denhez</motion.p>

                                <motion.div
                                    variants={child}
                                    animate={floating ? { rotate: [0, -3, 0, 3], y: [0, -8, 0, 8, 0], x: [0, 4, 0, -4, 0] } : undefined}
                                    transition={floating ? { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0 } : undefined}
                                    className="text-black absolute top-0 left-0 h-fit sm:text-md md:text-xl lg:text-2xl text-sm z-10 -rotate-5 -translate-x-10 sm:-translate-x-25 sm:-translate-y-15 -translate-y-15  w-fit px-5 py-3 border-2 rounded-2xl bg-sky-300"
                                >
                                    <p>{lang("bubble_top")}</p>
                                </motion.div>

                                <motion.div
                                    variants={child}
                                    animate={floating ? { rotate: [0, -3, 0, 3], y: [0, 6, -6, 0], x: [0, -3, 3, 0] } : undefined}
                                    transition={floating ? { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0 } : undefined}
                                    className="text-black flex gap-5 absolute bottom-0 right-0 h-fit sm:text-md md:text-xl lg:text-2xl text-sm z-10 -rotate-5 sm:translate-x-35 translate-x-10 sm:translate-y-5 translate-y-15 w-fit px-5 py-3 border-2 rounded-2xl bg-amber-200"
                                >
                                    <p>{lang("bubble_bottom")}</p>
                                </motion.div>
                            </motion.div>

                            <div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 3, duration: 0.5 }}
                                    className="introduction sm:text-4xl text-2xl opacity-0 sm:text-left"
                                >{lang("introduction_1")} <span className="text-red-700 dark:text-red-400">{lang("university")}</span> {lang("introduction_2")}</motion.p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20" id="works">
                        <p className="pb-5">Mechanical Projects</p>
                        <div className="flex flex-col lg:flex-row gap-0 md:gap-5">
                            {mechanicalWorks.map((project, index) => (
                                <div
                                    className="pb-5 w-full"
                                    key={index}
                                    style={{ marginTop: width > 1024 ? `${index * 10}rem` : 0 }}
                                >
                                    <CarCard
                                        make={project.make}
                                        model={project.model}
                                        year={project.year}
                                        horsepower={project.horsepower}
                                        torque={project.torque}
                                        transmission={project.transmission}
                                        paintCode={project.paint_code}
                                        drivetrain={project.drivetrain}
                                        forzaDrivetrain={project.forza_drivetrain}
                                        forzaClass={project.forza_class}
                                        path={project.path}
                                        image={project.image}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="h-[5vh]" />
                    </div>

                    <div className="pb-10" id="works">
                        <p className="pb-5">Design Projects</p>

                        {designWorks.map((project, index) => (
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

                        <div className="h-[15vh]" />
                    </div>
                </main>
            </div >
        </ShortTransition >
    );
}
