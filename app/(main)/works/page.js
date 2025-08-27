import ProjectCard from "../components/ProjectCard";
import InteractiveHero from "../components/InteractiveHero";
import works from ".";
import { useTranslations } from "next-intl";
import PageAnimation from "../components/transitions/TextTransition";
import ShortTransition from "../components/transitions/ShortTransition";
import Image from "next/image";
import { isMobile } from 'react-device-detect';


export default function Works() {
    const lang = useTranslations("ui");
    const navLang = useTranslations("nav");

    if (isMobile) {
        return (
            <ShortTransition>
                <div className="mx-15 my-10">
                    <main className="pt-20">
                        <div className="flex sm:flex-row flex-col justify-between gap-20 items-center pb-10">
                            <div className="flex flex-col sm:gap-5 gap-10 sm:items-start items-center">
                                <p className="text-[3rem] font-medium tracking-tighter leading-none">Luca Denhez</p>
                                <div className="text-center sm:text-left space-y-2">
                                    <p>{lang("introduction")}</p>
                                    <p className="text-black/50 dark:text-white">{lang("city")} · <span className="text-red-700 dark:text-red-400">{lang("university")}</span></p>
                                </div>
                            </div>

                            <div className="sm:w-50 sm:h-50 w-40 h-40 overflow-hidden rounded-xl">
                                <Image src="/gifs/four.webp"
                                    width={0}
                                    height={0}
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    alt="Photo of Luca"
                                />
                            </div>
                        </div>

                        <div className="py-10" id="works">
                            <p className="pb-5">{lang("works")}</p>

                            {works.map((project, index) => (
                                <div className="pb-5" key={index}>
                                    <ProjectCard mobile
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
    } else {
        return (
            <ShortTransition>
                <div className="mx-15 my-10">
                    <main className="pt-20">
                        <div className="flex sm:flex-row flex-col justify-between gap-20 items-center pb-10">
                            <div className="flex flex-col sm:gap-5 gap-10 sm:items-start items-center">
                                <p className="text-[3rem] font-medium tracking-tighter leading-none">Luca Denhez</p>
                                <div className="text-center sm:text-left space-y-1">
                                    <p>{lang("introduction")}</p>
                                    <p className="text-black/50 dark:text-white">{lang("city")} · <span className="text-red-700 dark:text-red-400">{lang("university")}</span></p>
                                </div>
                            </div>

                            <div className="sm:h-50 h-40 overflow-hidden rounded-xl">
                                <Image src="/gifs/snoopy_leaves.gif"
                                    width={0}
                                    height={0}
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    alt="Photo of Luca"
                                />
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
}
