import Image from "next/image";


export default function ArrowIcon() {
    return (
        <div className="invert dark:invert-0 pb-2">
            <Image
                src="/icons/arrow_white.svg"
                width={30}
                height={30}
                alt="Arrow icon"
            />
        </div>
    );
}