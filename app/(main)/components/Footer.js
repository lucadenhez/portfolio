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
                            <p className="text-xl tracking-tight pb-3">{lang("liked_my_work")}</p>
                            <BookAppt />
                        </div>

                        <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 justify-between items-end">
                            <p className="z-0 sm:text-[5rem] md:text-[7rem] lg:text-[5rem] text-[3rem] font-medium tracking-tighter leading-none"
                            >{lang("hi")}</p>

                            <div className="sm:text-right text-left flex text-black leading-none gap-3">
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


