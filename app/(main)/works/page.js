import ProjectCard from "../components/ProjectCard";
import InteractiveHero from "../components/InteractiveHero";
import works from ".";
import { useTranslations } from "next-intl";
import PageAnimation from "../components/transitions/TextTransition";
import ShortTransition from "../components/transitions/ShortTransition";


export default function Works() {
    const lang = useTranslations("ui");
    const navLang = useTranslations("nav");

    return (
        <ShortTransition>
            <div className="mx-5 my-10">
                <main className="pt-20">
                    <p>{lang("introduction")}</p>
                    <p className="pb-10 text-black/50 dark:text-white">{lang("city")} · <span className="text-red-700 dark:text-red-400">{lang("university")}</span></p>

                    <InteractiveHero />

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
        </ShortTransition>
    );
}
