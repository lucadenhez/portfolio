"use client";

import { useTranslations } from "next-intl";
import BookAppt from "./BookAppt";

export default function Footer() {
    const lang = useTranslations("footer");

    return (
        <footer
            className="relative bg-linear-to-t from-blue-900 to-black text-white pb-6"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
            <div className="flex min-h-[600px] flex-col justify-end px-6 py-10 md:px-15 md:py-15 space-y-8 md:space-y-0">
                <div className="flex flex-col justify-between gap-6">
                    <p className="text-[4rem] sm:text-[4.75rem] md:text-[5rem] lg:text-[7rem] xl:text-[10rem] font-medium tracking-tighter leading-[0.9]">
                        Thanks for looking!
                    </p>
                    <div className="mb-4 text-left md:text-right flex flex-col md:flex-row leading-none gap-2 md:gap-3 text-sm md:text-base">
                        <p>{lang("createdBy")}</p>
                        <p className="hidden md:block">—</p>
                        <p>{lang("builtWith")}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
