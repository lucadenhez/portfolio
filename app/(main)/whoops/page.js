import { NextIntlClientProvider, useTranslations } from "next-intl";
import LanguageSwitcher from "../components/LanguageSwitcher";


export default function Whoops({ locale }) {
    const lang = useTranslations("whoops");

    return (
        <div className="text-center flex flex-col justify-center items-center h-screen bg-[#150DF7]">
            <div className="gap-3 m-10 flex flex-col items-center">
                <div className="mb-10">
                    <LanguageSwitcher dark={true} />
                </div>
                <p className="text-[5rem] tracking-tighter mb-5 font-medium leading-none text-white">{lang("whoops")}</p>
                <p className="text-xl leading-none text-white">{lang("message")}</p>
                <p className="text-xl leading-none text-white">{lang("construction")}</p>
            </div>
            <p className="mt-20 text-white font-medium">{lang("easter_egg")}</p>
        </div>
    );
}
