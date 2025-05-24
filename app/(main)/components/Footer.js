import { useTranslations } from "next-intl";


export default function Footer() {
    const lang = useTranslations("footer");

    return (
        <footer className="py-10">
            <div className="flex flex-col gap-y-10 justify-center text-center">
                <div>
                    <p>{lang("createdBy")}</p>
                    <p>{lang("builtWith")}</p>
                </div>
            </div>
        </footer >
    );
}
