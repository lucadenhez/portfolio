"use client";

import { useTranslations } from "next-intl";
import BookAppt from "./BookAppt";


export default function Footer() {
    const lang = useTranslations("footer");

    return (

        <footer>
            <div
                className='relative h-[400px] bg-black text-white'
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className='relative h-[calc(100vh+400px)] -top-[100vh]'>
                    <div className='flex flex-col space-2 justify-between w-full p-15 h-[400px] sticky top-[calc(100vh-400px)]'>
                        <div>
                            <p className="text-[9rem] leading-none tracking-tighter font-medium">Like what you saw?</p>

                        </div>
                        <div className="flex justify-between items-end">
                            <BookAppt />
                            <div className="text-right">
                                <p className="text-white">{lang("createdBy")}</p>
                                <p>{lang("builtWith")}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer >
    );
}


