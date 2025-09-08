"use client";

import { useTranslations } from "next-intl";
import BookAppt from "./BookAppt";


export default function Footer() {
    const lang = useTranslations("footer");

    return (

        <footer>
            <div
                className='relative h-[450px] bg-gray-200 text-black'
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className='relative h-[calc(100vh+450px)] -top-[100vh]'>
                    <div className='flex flex-col space-2 justify-between w-full p-15 h-[450px] sticky top-[calc(100vh-450px)]'>
                        <div className="flex flex-col gap-1">
                            <p className="text-xl tracking-tight pb-3">If you liked any of my projects, feel free to reach out.</p>
                            <BookAppt />
                        </div>

                        <div className="flex justify-between items-end">
                            <p className="z-0 sm:text-[5rem] md:text-[7rem] lg:text-[10rem] text-[3rem] text-center font-medium tracking-tighter leading-none"
                            >Hi there!</p>

                            <div className="text-right flex text-black leading-none gap-3">
                                <p> {lang("createdBy")}</p>
                                <p> — </p>
                                <p>{lang("builtWith")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}


