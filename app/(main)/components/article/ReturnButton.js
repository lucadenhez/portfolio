"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { useTranslations } from "next-intl";

export default function ReturnButton({ background = false }) {
    const router = useTransitionRouter();
    const lang = useTranslations("projectInfo");

    return (
        <div className={background ? "bg-gray-100 rounded-lg px-3 py-2" : ""}>
            <Link href="/works"
                className="inline-flex items-center transition-all duration-300 ease-in-out hover:opacity-50"
                onClick={(e) => {
                    e.preventDefault();
                    router.push("/works");
                }
                }>
                <div className={"flex items-center gap-2 "}>
                    <svg className="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke={"#000000"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    <p className="text-black">{lang("returnButtonText")}</p>
                </div>
            </Link >
        </div >
    );
}
