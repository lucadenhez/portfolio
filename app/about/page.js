import Image from "next/image";
import InlineLink from "../components/article/InlineLink";


export default function About() {
    return (
        <div className="mx-5 mt-20">
            <div className="flex gap-5">
                <div className="w-1/3 h-full overflow-hidden relative">
                    <Image src="/avatars/luca_uncropped.png"
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, 66vw"
                        style={{ width: "100%", height: "auto" }}
                        alt="Photo of Luca"
                    />
                </div>
                <div>
                    <p className="pb-5">Hello! My name is Luca.</p>
                    <InlineLink label="Linkedin" url="https://linkedin.com/in/lucadenhez" />
                    <InlineLink label="Github" url="https://github.com/lucadenhez" />
                    <InlineLink label="Instagram" url="https://instagram.com/lucadenhez" />
                </div>
            </div>

            <div className="h-[20rem]" />
        </div>
    );
}
