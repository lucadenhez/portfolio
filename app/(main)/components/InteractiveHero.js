"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "motion/react";
import { useTranslations } from 'next-intl';


export default function InteractiveHero() {
    const lang = useTranslations("ui");

    return (
        <div className='h-[40rem] overflow-hidden'>
            <motion.div
                className="h-[40rem] bg-gradient-to-tr from-red-700 to-orange-200 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
                <p className="text-lg w-fit px-4 py-2 bg-white rounded-xl">{lang("interactivePlaceholder")}</p>
            </motion.div>
        </div>
    );
}

/*
<div className="h-[40rem] bg-amber-100">
            <DotLottieReact
                src="/animations/cabin.lottie"
                loop
                autoplay
                renderConfig={{ devicePixelRatio: 1, autoResize: true }}
            />
        </div>
*/