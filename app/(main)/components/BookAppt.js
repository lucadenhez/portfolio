import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTranslations } from "next-intl";


export default function BookAppt() {
    const lang = useTranslations("footer");

    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "light",
                styles: {
                    branding: { brandColor: "#f0542e" },
                },
            });
        })();
    }, []);

    return (
        <div className="m-0 p-0">
            <button data-cal-link="lucadenhez/initial" className="hover:cursor-pointer px-4 py-1 mb-3 rounded-xl bg-white text-black hover:invert transition-all ease-in-out duration-300">
                <h1 className="text-lg">{lang("contact_me")}</h1>
            </button>
        </div>
    );
}
