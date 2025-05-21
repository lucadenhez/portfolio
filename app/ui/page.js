import ProjectCard from "../components/ProjectCard";
import InteractiveHero from "../components/InteractiveHero";
import works from "../works";
import { useTranslations } from "next-intl";


export default function UIUX() {
    const lang = useTranslations("ui");

    return (
        <div className="mx-5 my-10">
            <main className="pt-20">
                <p>{lang("introduction")}</p>
                <p className="pb-10 text-black/50">{lang("city")} · <span className="text-red-700">{lang("university")}</span></p>

                <InteractiveHero />

                <div className="py-10" id="works">
                    <p className="pb-5">{lang("works")}</p>

                    {works.map((project, index) => (
                        <div className="pb-5" key={index}>
                            <ProjectCard
                                title={lang(`projects.${project.title}`)}
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
    );
}
