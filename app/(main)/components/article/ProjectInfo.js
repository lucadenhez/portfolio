import { useTranslations } from "next-intl";
import Image from "next/image";


export default function ProjectInfo({ team, tools, services }) {
    const lang = useTranslations("projectInfo");

    return (
        <div className="flex flex-col sm:flex-row gap-y-10 justify-between w-2/3">
            <div className="flex flex-col items-center gap-1">
                <p className="uppercase font-medium text-xl">{lang("team")}</p>
                <div className="space-y-3">
                    {team.map((member, index) => (
                        <div className="flex items-center gap-3" key={index}>
                            <Image
                                src={member.avatar}
                                width={30}
                                height={30}
                                alt={`Photo of ${member.name}`}
                                className="rounded-full"
                            />
                            <div className="leading-none">
                                <p>{member.name}</p>
                                <p className="text-black/50 dark:text-white/70 text-sm">{member.role}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <p className="uppercase font-medium text-xl">{lang("tools")}</p>
                <div className="space-y-3">
                    {tools.map((tool, index) => (
                        <div className="flex items-center gap-2" key={index}>
                            <Image
                                src={tool.avatar}
                                width={25}
                                height={25}
                                alt={`Photo of the ${tool.name} logo`}
                                className={(tool.name == "Next.js") ? "dark:invert" : ""}
                            />
                            <p>{tool.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="uppercase font-medium text-xl">{lang("aspects")}</p>
                <div className="flex gap-2 text-center">
                    {services.map((service, index) => (
                        <p key={index} className="leading-none bg-purple-100 p-3 rounded-full">{service}</p>
                    ))}
                </div>

            </div>
        </div>
    );
}
