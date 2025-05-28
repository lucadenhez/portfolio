"use client";

import PageAnimation from "./(main)/components/transitions/TextTransition";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { motion } from "motion/react";
import LanguageSwitcher from "./(main)/components/LanguageSwitcher";
import { useTranslations } from "next-intl";


export default function Home() {
  const router = useTransitionRouter();
  const lang = useTranslations("home");

  return (
    <PageAnimation randomPrefix={false} title={lang("transitionMessage")}>
      <div className="m-5">
        <LanguageSwitcher />
        <div className="h-screen flex sm:flex-row flex-col items-center justify-center gap-3">
          <Link
            href="/works"
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              router.push("/works");
            }}
          >
            <motion.div
              className="aspect-square w-full h-full rounded-xl bg-black dark:invert text-white text-center flex items-end leading-none tracking-tighter px-5 py-4 text-[4.5rem] font-semibold"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <p>{lang("worksCard")}</p>
            </motion.div>
          </Link>
          <Link
            href="/playground"
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              router.push("/playground");
            }}
          >
            <motion.div
              className="aspect-square w-full h-full rounded-xl bg-[#f0542e] text-white text-center flex items-end leading-none tracking-tighter px-4 py-7 text-[4.5rem] font-semibold"
              whileHover={{ scale: 0.5, rotateZ: -20 }}
              whileTap={{ scale: 0.5, rotateZ: -20 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
            >
              <p>{lang("playgroundCard")}</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </PageAnimation >
  );
}
