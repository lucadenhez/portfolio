"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import ShortTransition from "../components/transitions/ShortTransition";
import CarCard from "../components/works/CarCard";
import ProjectCard from "../components/works/ProjectCard";
import { cars } from "../components/car_article/cars_info";
import ScrollText from "../components/animations/ScrollText";

export default function WorksClient({ projects }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        window.addEventListener("resize", updateWidth);
        updateWidth();
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const lang = useTranslations("works");

    const automotiveProjects = projects.filter((project) => project.category === "automotive");
    const uiuxProjects = projects.filter((project) => project.category === "uiux");

    return (
        <ShortTransition>
            <div className="mx-5 my-0 md:mx-15 md:my-10">
                <main className="flex flex-col gap-5">
                    <div className="sm:mt-20 mt-10 mb-15">
                        <ScrollText
                            type="lines" delay={1}
                            className="z-0 sm:text-[rem] md:text-[5.5rem] lg:text-[8.25rem] text-[3rem] font-medium tracking-tighter leading-none"
                        >Luca Denhez</ScrollText>

                        <ScrollText type="words" delay={1.2}
                            className="introduction sm:text-lg text-sm"
                        >Mechanical Engineer · Designer ·  Seattle, WA</ScrollText>
                    </div>

                    <div className="h-[10vh]" />

                    <div id="works">
                        {automotiveProjects.length > 0 ? <p className="pb-5">Automotive Projects</p> : null}
                        {automotiveProjects.map((project) => (
                            <div className="pb-5" key={project.slug}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    path={`/works/${project.slug}`}
                                    year={project.year}
                                    month={project.month}
                                    image={project.coverImage}
                                    viewButtonText={lang("projectViewButton")}
                                    darkText={project.darkText}
                                />
                            </div>
                        )
                        )}
                    </div>

                    <div id="works">
                        {uiuxProjects.length > 0 ? <p className="pb-5">UI/UX</p> : null}
                        {uiuxProjects.map((project) => (
                            <div className="pb-5" key={project.slug}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    path={`/works/${project.slug}`}
                                    year={project.year}
                                    month={project.month}
                                    image={project.coverImage}
                                    viewButtonText={lang("projectViewButton")}
                                    darkText={project.darkText}
                                />
                            </div>
                        ))}
                    </div>

                    <div id="works">
                        {cars.length > 0 ? <p className="pb-5">Unreliable Cars</p> : null}
                        <div className="sm:w-3/4 w-full flex flex-col gap-5">
                            {cars.map((project, index) => (
                                <div className="w-full" key={index}>
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
                        <div className="h-[10vh]" />
                    </div>
                </main>
            </div>
        </ShortTransition>
    );
}
