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
                        {projects.length > 0 ? <p className="pb-5">Projects</p> : null}
                        {projects.map((project) => (
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
                        <div className="h-[10vh]" />
                    </div>
                </main>
            </div>
        </ShortTransition>
    );
}
