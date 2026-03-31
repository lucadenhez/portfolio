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
import { automotiveProjects, cars, uiuxProjects } from "../works";

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
                <main>
                    <div className="space-y-1 sm:mt-20 mt-10 mb-15">
                        <p className="z-0 sm:text-[rem] md:text-[5.5rem] lg:text-[8.25rem] text-[3rem] font-medium tracking-tighter leading-none">Luca Denhez</p>
                        <p className="introduction sm:text-lg text-sm">Mechanical Engineer · Designer</p>
                    </div>

                    <div className="h-[10vh]" />

                    <div id="works">
                        <p className="pb-5">Automotive Projects</p>

                        {automotiveProjects.map((project, index) => (
                            <div className="pb-5" key={index}>
                                <ProjectCard
                                    title={lang(`projects.${project.langTitle}`)}
                                    subtitle={project.subtitle}
                                    path={project.path}
                                    year={project.year}
                                    month={project.month}
                                    image={project.image}
                                    viewButtonText={lang("projectViewButton")}
                                />
                            </div>
                        ))}

                        <div className="h-[15vh]" />
                    </div>

                    <div id="works">
                        <p className="pb-5">UI/UX</p>

                        {uiuxProjects.map((project, index) => (
                            <div className="pb-5" key={index}>
                                <ProjectCard
                                    title={lang(`projects.${project.langTitle}`)}
                                    subtitle={project.subtitle}
                                    path={project.path}
                                    year={project.year}
                                    month={project.month}
                                    image={project.image}
                                    viewButtonText={lang("projectViewButton")}
                                />
                            </div>
                        ))}

                        <div className="h-[15vh]" />
                    </div>

                    <div id="works">
                        <p className="pb-5">Unreliable Cars</p>
                        <div className="flex flex-col lg:flex-row gap-0 md:gap-5">
                            {cars.map((project, index) => (
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
                        <div className="h-[15vh]" />
                    </div>
                </main>
            </div >
        </ShortTransition >
    );
}
