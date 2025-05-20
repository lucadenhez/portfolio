import Image from "next/image";


export default function ProjectInfo({ team, tools, services }) {
    return (
        <div className="flex justify-between w-2/3">
            <div className="flex flex-col items-center gap-3">
                <p className="uppercase font-semibold text-xl">Team</p>
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
                                <p className="text-lg">{member.name}</p>
                                <p className="text-black/50">{member.role}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="uppercase font-semibold text-xl">Tools</p>
                <div className="space-y-3">
                    {tools.map((tool, index) => (
                        <div className="flex items-center gap-2" key={index}>
                            <Image
                                src={tool.avatar}
                                width={25}
                                height={25}
                                alt={`Photo of the ${tool.name} logo`}
                            />
                            <p className="text-lg">{tool.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="uppercase font-semibold text-xl">Services</p>
                <div className="flex flex-col gap-2 text-center">
                    {services.map((service, index) => (
                        <p key={index} className="text-lg leading-none">{service}</p>
                    ))}
                </div>

            </div>
        </div>
    );
}
