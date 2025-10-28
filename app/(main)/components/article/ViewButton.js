"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ViewButton({ url }) {
  const lang = useTranslations("projectInfo");

  return (
    <div className="bg-[#657ad8] hover:bg-[#5264b2] transition-all ease-in-out duration-300 rounded-lg px-3 py-2">
      <Link href="/works"
        className="inline-flex items-center transition-all duration-300 ease-in-out"
        onClick={(e) => {
          e.preventDefault();
          window.open(url, "_blank");
        }
        }>
        <div className={"flex items-center gap-2 "}>
          <p className="text-white">{lang("viewButtonText")}</p>
          <svg className="w-4 h-4 rotate-[-45deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </div>
      </Link >
    </div >
  );
}
