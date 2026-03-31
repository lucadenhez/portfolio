"use client";

import { useTranslations } from "next-intl";
import BookAppt from "./BookAppt";

export default function Footer() {
    const lang = useTranslations("footer");

    return (
        <footer>
            <div
                className="relative h-[400px] md:h-[450px] bg-linear-to-t from-blue-900 to-black text-white"
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className="relative h-[calc(100vh+400px)] md:h-[calc(100vh+450px)] -top-[100vh]">
                    <div className="flex flex-col justify-between w-full h-[400px] md:h-[450px] sticky bottom-0 top-[calc(100vh-400px)] md:top-[calc(100vh-450px)] 
                          px-6 py-10 md:px-15 md:py-15 space-y-6 md:space-y-0">
                        <div className="flex flex-col gap-2 md:gap-3">
                            <p className="text-lg md:text-xl tracking-tight pb-2 md:pb-3">
                                {lang("liked_my_work")}
                            </p>
                            <BookAppt />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
                            <p className="z-0 text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[10rem] 
                            font-medium tracking-tighter leading-none">
                                {lang("hi")}
                            </p>
                            <div className="mb-4 text-left md:text-right flex flex-col md:flex-row leading-none gap-2 md:gap-3 text-sm md:text-base">
                                <p>{lang("createdBy")}</p>
                                <p className="hidden md:block">—</p>
                                <p>{lang("builtWith")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
