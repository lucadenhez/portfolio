"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTransitionRouter } from "next-view-transitions";
import Hamburger from "hamburger-react";

export default function MobileNav({ items }) {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <div className="fixed top-0 left-0 w-full  z-50 box-border">
      <div className="flex w-full z-50 justify-between p-5">
        <div className="flex items-center justify-center w-[48px] h-[48px]">
          <LanguageSwitcher />
        </div>

        <div>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            rounded
            size={25}
            duration={0.5}
          />
        </div>

      </div>

      <motion.nav
        initial={false}
        animate={open ? "visible" : "hidden"}
        variants={{
          visible: { y: "-20%", opacity: 1, pointerEvents: "auto" },
          hidden: { y: "-100%", opacity: 0, pointerEvents: "none" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute top-full left-0 w-full bg-white dark:invert flex flex-col items-start py-15 px-10 -z-10"
      >
        {items.map((item, index) => (
          <Link
            className="dark:invert"
            href={item.path}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              if (item.outside) {
                window.open(item.path, "_blank");
              } else {
                router.push(item.path);
              }
              setOpen(false);
            }}>
            {item.outside ? (
              <motion.div
                className="text-black text-2xl flex items-center justify-end gap-1"
                whileHover={{ opacity: 0.25, cursor: "pointer" }}
                key={index}
              >
                <p className="text-black/50">{item.label}</p>
                <svg className="w-6 h-6 rotate-[-45deg] opacity-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </motion.div>
            ) : (
              <motion.p
                key={index}
                whileHover={{ opacity: 0.25, cursor: "pointer" }}
                className="text-2xl"
                style={{ opacity: isActive(item.path) ? "100%" : "50%" }}
              >{item.label}</motion.p>
            )
            }
          </Link>
        ))}
      </motion.nav>
    </div>
  );
}
