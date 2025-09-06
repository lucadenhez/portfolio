import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

let secondaryColor = "#2d4535";

export default function BookAppt() {
    useEffect(() => {
    (async function () {
        const cal = await getCalApi();
        cal("ui", {
        theme: "light",
        styles: {
            branding: { brandColor: secondaryColor },
        },
        });
    })();
    }, []);

    return (
        <div className="m-0 p-0 sm:pt-0 pt-3">
            <button data-cal-link="lucadenhez/initial" className="hover:cursor-pointer px-5 py-1 mb-2 mr-1 rounded-xl border-[1.5px] border-white text-white hover:bg-white hover:text-black transition-all ease-in-out duration-300">
                <h1 className="text-[2rem]">Let's talk</h1>
            </button>
        </div>
    );
}
