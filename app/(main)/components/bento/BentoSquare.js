import Image from "next/image";

export default function BentoSquare({ header, title, subtitle, image, width, height }) {
    return (
        <div
            className="bento-square bg-zinc-100 rounded-xl p-5 gap-5 flex items-center justify-between relative"
            style={{ width: `${width}rem`, height: `${height}rem` }}
        >
            <div className="flex flex-col gap-5">
                <p className="font-medium leading-none tracking-tight text-xl">{header}</p>
                <div>
                    <p className="font-medium text-sm leading-none">{title}</p>
                    <p className="leading-none text-sm ">{subtitle}</p>
                </div>
            </div>
            <div className="relative h-full aspect-square rounded-xl overflow-hidden flex-shrink-0">
                <Image
                    src={image}
                    alt="Bento item"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}
