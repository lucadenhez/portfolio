"use client";

import Image from "next/image";
import InlineLink from "../components/article/InlineLink";
import { useTranslations } from "next-intl";
import ShortTransition from "../components/transitions/ShortTransition";
import { motion } from "motion/react";

export default function About() {
  const lang = useTranslations("about");

  return (
    <ShortTransition>
      <div className="mx-5 md:mx-15 mt-15">
        <div className="flex flex-col items-center gap-20">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-3/4">
            <div className="gap-10 flex flex-col sm:flex-row sm:text-left justify-between sm:items-start items-center sm:w-3/4 w-full">
              <p className="flex whitespace-pre-line">
                {lang("bio")}
              </p>

              <div className="flex flex-col sm:items-start items-center">
                <InlineLink label="Linkedin" url="https://linkedin.com/in/lucadenhez" />
                <InlineLink label="Github" url="https://github.com/lucadenhez" />
                <InlineLink label="Instagram" url="https://instagram.com/lucadenhez" />
              </div>
            </div>
            <div className="h-[5rem]" />

            <motion.div
              className="z-10 rotate-1 w-full overflow-hidden rounded-3xl"
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <Image
                src="/avatars/luca_sunny.jpeg"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ width: "100%", height: "auto" }}
                alt="Photo of Luca"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="z-0 sm:translate-y-10 -rotate-2 w-full overflow-hidden rounded-3xl"
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <Image
                src="/images/doggies.png"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ width: "100%", height: "auto" }}
                alt="Photo of my silken windhound doggies"
              />
            </motion.div>
          </div>
        </div>

        <div className="h-[10rem]" />
      </div>
    </ShortTransition>
  );
}

/*
WIP

<motion.div
                    // whileInView={() => animate(".bento-square", { opacity: [0, 1] }, { delay: stagger(0.1, { startDelay: 1 }) })}
                    className="flex gap-3 flex-col justify-center sm:mx-20 mx-0 mt-30 rounded-2xl"
                >
                    <p className="pb-10 tracking-tighter sm:text-5xl text-4xl font-medium">Bento about my favorite things <span className="px-1">🍱</span></p>
                    <div className="flex sm:flex-row flex-col gap-3">
                        <BentoSquare
                            width={20}
                            height={10}
                            header="Fragrance"
                            title="Thé Noir 29"
                            subtitle="Le Labo"
                            image="/bento/fragrance.jpeg"
                        />

                        <BentoSquare
                            width={30}
                            height={10}
                            header="Café"
                            title="Oddfellows"
                            subtitle="1525 10th Ave, Seattle WA 98122"
                            image="/bento/cafe.jpg"
                        />
                        <BentoSquare
                            width={30}
                            height={10}
                            header="Grocery Store"
                            title="DeLaurenti Food & Wine"
                            subtitle="4135 1st Ave, Seattle WA 98101"
                            image="/bento/grocery.jpg"
                        />
                    </div>
                    <div className="flex sm:flex-row flex-col gap-3">
                        <BentoSquare
                            width={30}
                            height={10}
                            header="Sunset"
                            title="Richmond Beach Saltwater Park"
                            subtitle="2021 NW 190th St, Shoreline WA 98177"
                            image="/bento/sunset.jpg"
                        />

                        <BentoSquare
                            width={30}
                            height={10}
                            header="Boba"
                            title="bobaup"
                            subtitle="4141 University Wy NE, Seattle WA 98105"
                            image="/bento/boba.jpeg"
                        />
                    </div>
                </motion.div>
                */