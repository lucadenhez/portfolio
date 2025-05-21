import { useTranslations } from "next-intl";


export default function Footer() {
    const lang = useTranslations("footer");

    const currentHour = new Date().getHours();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    return (
        <footer className="py-10">
            <div className="flex flex-col gap-y-10 justify-center text-center">
                <div className="flex justify-center">
                    {(currentHour >= 0 && currentHour < 7) || (currentHour >= 21 && currentHour <= 0) ? (
                        <p className="bg-gradient-to-tr from-indigo-900 to-gray-900 text-white p-3 rounded-xl w-fit">It is currently {currentTime} in Seattle
                            <span className="pl-2">🌖</span>
                        </p>
                    ) : (
                        <p className="bg-gradient-to-bl from-gray-400 to-gray-300 text-white p-3 rounded-xl w-fit">It is currently {currentTime} in Seattle
                            <span className="pl-2">🌧️</span>
                        </p>
                    )}
                </div>
                <div>
                    <p>{lang("createdBy")}</p>
                    <p>{lang("builtWith")}</p>
                </div>
            </div>
        </footer >
    );
}
