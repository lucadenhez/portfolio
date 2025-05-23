import Image from "next/image";
import InlineLink from "../components/article/InlineLink";
import Paragraph from "../components/article/Paragraph";
import { useTranslations } from "next-intl";
import PageAnimation from "../components/PageAnimation";


export default function About() {
    const lang = useTranslations("about");
    const navLang = useTranslations("nav");
    return (
        <PageAnimation title={navLang("about")}>
            <div className="mx-5 mt-40">
                <div className="flex sm:flex-row flex-col gap-5">
                    <div className="sm:w-1/2 w-full h-full overflow-hidden relative">
                        <Image src="/avatars/luca_uncropped.png"
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 100vw, 66vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="Photo of Luca"
                        />
                    </div>
                    <div className="space-y-5">
                        <p className="whitespace-pre-line">{lang("bio")}</p>

                        <div>
                            <InlineLink label="Linkedin" url="https://linkedin.com/in/lucadenhez" />
                            <InlineLink label="Github" url="https://github.com/lucadenhez" />
                            <InlineLink label="Instagram" url="https://instagram.com/lucadenhez" />
                        </div>
                    </div>
                </div>

                <div className="h-[20rem]" />
            </div>
        </PageAnimation>
    );
}
