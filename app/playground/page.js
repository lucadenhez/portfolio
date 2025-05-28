import { useTranslations } from "next-intl";
import ReturnButton from "../(main)/components/article/ReturnButton";
import ShortTransition from "../(main)/components/transitions/ShortTransition";
import PageAnimation from "../(main)/components/transitions/TextTransition";

export default function Playground() {
    const lang = useTranslations("playground");
    
    return (
        <ShortTransition>
            <div className="flex flex-col justify-center items-center h-screen bg-[#f0542e] gap-5">
                <p className="text-lg text-white">{lang("placeholderText")}</p>
                <div className="invert">
                    <ReturnButton />
                </div>
            </div>
        </ShortTransition>
    );
}
