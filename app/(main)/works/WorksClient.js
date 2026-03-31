"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import ShortTransition from "../components/transitions/ShortTransition";
import CarCard from "../components/CarCard";
import ProjectCard from "../components/ProjectCard";
import { cars } from "../works";

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
            <div className="mx-5 my-0 md:mx-25 md:my-10">
                <main>
                    <div className="space-y-1 sm:mt-20 mt-10 mb-15">
                        <p className="z-0 sm:text-[rem] md:text-[5.5rem] lg:text-[8.25rem] text-[3rem] font-medium tracking-tighter leading-none">Luca Denhez</p>
                        <p className="introduction sm:text-lg text-sm">Mechanical Engineer · Designer ·  Seattle, WA</p>
                    </div>

                    <div className="h-[10vh]" />

                    <div id="works">
                        <p className="pb-5">Automotive Projects</p>

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
                                />
                            </div>
                        ))}

                        <div className="h-[15vh]" />
                    </div>

                    <div id="works">
                        <p className="pb-5">UI/UX</p>

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
                        <div className="h-[30vh]" />
                    </div>
                </main>
            </div>
        </ShortTransition>
    );
}
