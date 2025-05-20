import ProjectCard from "../components/ProjectCard";
import InteractiveHero from "../components/InteractiveHero";
import works from "../works";
import { useTranslations } from "next-intl";


export default function UIUX() {
    const lang = useTranslations("ui");
    const currentHour = new Date().getHours();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

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
                                year={project.year}
                                image={project.image}
                                viewButtonText={lang("projectViewButton")}
                            />
                        </div>
                    ))}
                </div>
            </main>
            <footer className="py-10">
                <div className="flex flex-col gap-y-10 justify-center text-center">
                    <div className="flex justify-center">
                        {(currentHour >= 0 && currentHour < 7) || (currentHour >= 21 && currentHour <= 0) ? (
                            <p className="bg-gradient-to-tr from-indigo-900 to-gray-900 text-white p-3 rounded-xl w-fit">It is currently {currentTime} in Seattle
                                <span className="pl-2">🌖</span>
                            </p>
                        ) : (
                            <p className="bg-gradient-to-bl from-gray-400 to-gray-100 text-white p-3 rounded-xl w-fit">It is currently {currentTime} in Seattle
                                <span className="pl-2">🌧️</span>
                            </p>
                        )}
                    </div>
                    <div>
                        <p>{lang("footer.createdBy")}</p>
                        <p>{lang("footer.builtWith")}</p>
                    </div>
                </div>
            </footer >
        </div >
    );
}
