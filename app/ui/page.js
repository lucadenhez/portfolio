import ProjectCard from "../components/ProjectCard";
import InteractiveHero from "../components/InteractiveHero";
import works from "../works";
import { useTranslations } from "next-intl";
import PageAnimation from "../components/PageAnimation";


export default function UIUX() {
    const lang = useTranslations("ui");
    const navLang = useTranslations("nav");

    return (
        <PageAnimation title={navLang("works")}>
            <div className="mx-5 my-10">
                <main className="pt-20">
                    <p>{lang("introduction")}</p>
                    <p className="pb-10 text-black/50">{lang("city")} · <span className="text-red-700">{lang("university")}</span></p>

                    <div className="h-[40rem] bg-gradient-to-tr from-red-700 to-orange-200 flex items-center justify-center">
                        <p className="text-lg w-fit px-4 py-2 bg-white rounded-xl">Interactive demo in the works...</p>
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
        </PageAnimation>
    );
}
